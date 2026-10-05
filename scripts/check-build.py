#!/usr/bin/env python3
"""Check a finished build for missing pages, dead links, missing assets and leftover GitBook tags.

usage: SITE=docs|devs python3 scripts/check-build.py [--offline]

--offline skips the comparison with the published site's sitemap.
"""
import os, re, sys, html, urllib.parse as up, urllib.request as ur
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
site = os.environ.get("SITE", "docs")
app = ROOT / ".next" / "server" / "app"
pages = {}
for f in app.rglob("*.html"):
    rel = f.relative_to(app).with_suffix("").as_posix()
    if rel.startswith("_"):
        continue
    pages["/" if rel == "index" else "/" + rel] = f.read_text(encoding="utf-8")

problems = []
if "--offline" in sys.argv:
    live = set(pages)
else:
    # Try the old sitemap name first, then the current one.
    live = set()
    for name in ("sitemap-pages.xml", "sitemap.xml"):
        try:
            sitemap = ur.urlopen(ur.Request(f"https://{site}.defikingdoms.com/{name}", headers={"User-Agent": "check"}), timeout=60).read().decode()
        except Exception:
            continue
        live = {(up.urlparse(u).path.rstrip("/") or "/") for u in re.findall(r"<loc>([^<]+)", sitemap)}
        if live:
            break
    if not live:
        problems.append("could not read the published sitemap (use --offline to skip)")
for u in sorted(live - set(pages)):
    problems.append(f"live URL missing from build: {u}")
for u in sorted(set(pages) - live):
    problems.append(f"built URL not on live site: {u}")

for url, text in sorted(pages.items()):
    article = text[text.find("<article"): text.find("</article>")]
    if "{%" in article:
        problems.append(f"{url}: leftover GitBook tag: {article[article.find('{%'):][:60]!r}")
    for attr, value in re.findall(r'(href|src|srcSet|srcset)="([^"]+)"', article):
        value = html.unescape(value)
        if ".gitbook/assets" in value or (value.startswith("http") and ("files.gitbook.io" in value or "b-cdn.net" in value)):
            problems.append(f"{url}: asset still remote/unresolved: {value[:90]}")
        if value.startswith("/") and not value.startswith("//"):
            path = up.unquote(value.split("#")[0].split("?")[0])
            if path.startswith("/_next/"):
                continue
            if path.startswith("/assets/") or path.startswith("/brand/"):
                if not (ROOT / "public" / path.lstrip("/")).is_file():
                    problems.append(f"{url}: missing asset {path}")
            elif (path.rstrip("/") or "/") not in pages:
                problems.append(f"{url}: dead internal link {value}")
        elif attr == "href" and (value.endswith(".md") or ".md#" in value) and not value.startswith("http"):
            problems.append(f"{url}: unresolved markdown link {value}")
        elif attr == "href" and value == "broken-reference":
            problems.append(f"{url}: GitBook broken-reference link")

print(f"{site}: {len(pages)} pages built, {len(live)} live URLs, {len(problems)} problems")
for p in list(dict.fromkeys(problems))[:40]:
    print("  " + p[:200])
sys.exit(1 if problems else 0)
