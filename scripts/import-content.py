#!/usr/bin/env python3
"""One-off import of the GitBook content snapshots into this repo.

docs: the Git-Synced GitBook repo (markdown + .gitbook/assets) plus the live llms.txt (gives real URLs).
devs: the scrape of devs.defikingdoms.com (no Git Sync existed), including attachments.
"""
import json, os, re, shutil, sys, urllib.parse as up, urllib.request as ur
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REF = Path(os.environ.get("DFK_REFERENCE", ROOT.parent / "dfk-reference"))
DOCS_SRC = REF / "KingdomStudiosIO" / "docs"
DEVS_SRC = REF / "gitbook-backup" / "devs"

def fetch(url):
    req = ur.Request(url, headers={"User-Agent": "dfk-docs-import"})
    return ur.urlopen(req, timeout=60).read().decode("utf-8", "replace")

def import_docs():
    out = ROOT / "content" / "docs"
    shutil.rmtree(out, ignore_errors=True)
    corpus = []
    for src in DOCS_SRC.rglob("*.md"):
        rel = src.relative_to(DOCS_SRC)
        if rel.parts[0] in ("node_modules", ".git", ".gitbook"):
            continue
        dst = out / rel
        dst.parent.mkdir(parents=True, exist_ok=True)
        text = src.read_text(encoding="utf-8")
        dst.write_text(text, encoding="utf-8")
        corpus.append(text)
    (out / "llms.txt").write_text(fetch("https://docs.defikingdoms.com/llms.txt"), encoding="utf-8")
    assets_out = ROOT / "public" / "assets" / "docs"
    shutil.rmtree(assets_out, ignore_errors=True)
    assets_out.mkdir(parents=True)
    # Copy only assets some page references (raw, markdown-escaped or URL-encoded spelling).
    blob = up.unquote("\n".join(corpus)).replace("\\_", "_").replace("\\(", "(").replace("\\)", ")")
    copied = 0
    for src in sorted((DOCS_SRC / ".gitbook" / "assets").iterdir()):
        if src.is_file() and ".gitbook/assets/" + src.name in blob:
            shutil.copy2(src, assets_out / src.name)
            copied += 1
    wanted = set(re.findall(r"\.gitbook/assets/([^\n]+?\.(?:png|jpe?g|gif|svg|webp|pdf|mp4))", blob, re.I))
    missing = sorted(n for n in wanted if not (assets_out / n).is_file())
    # Mirror images the pages hot-link from the game CDNs, so the site does not depend on them.
    cdn_urls = sorted(set(re.findall(r"https://(?:[\w-]+\.b-cdn\.net|game\.defikingdoms\.com)/[^\s)\"'<>]+\.(?:png|jpe?g|gif|svg|webp)", "\n".join(corpus).replace("\\_", "_"), re.I)))
    cdn_failed = 0
    for url in cdn_urls:
        dst = assets_out / "cdn" / up.unquote(url[len("https://"):])
        dst.parent.mkdir(parents=True, exist_ok=True)
        try:
            dst.write_bytes(ur.urlopen(ur.Request(url, headers={"User-Agent": "dfk-docs-import"}), timeout=60).read())
        except Exception as e:
            cdn_failed += 1
            print("  cdn fetch failed:", url, e)
    print(f"docs: {len(cdn_urls) - cdn_failed}/{len(cdn_urls)} CDN images mirrored")
    print(f"docs: {len(list(out.rglob('*.md')))} md, {copied} assets copied, {len(missing)} referenced but not found")
    for m in missing[:20]:
        print("  missing asset:", m)

def import_devs():
    out = ROOT / "content" / "devs"
    shutil.rmtree(out, ignore_errors=True)
    shutil.copytree(DEVS_SRC / "pages", out / "pages")
    shutil.copy2(DEVS_SRC / "llms.txt", out / "llms.txt")
    assets_out = ROOT / "public" / "assets" / "devs"
    shutil.rmtree(assets_out, ignore_errors=True)
    for sub in ("gitbook", "cdn", "files"):
        shutil.copytree(DEVS_SRC / "assets" / sub, assets_out / sub)

    # {% file src="/files/<id>" %} ids are GitBook-internal. Recover id -> file by pairing the
    # n-th file block of each page with the n-th attachment link in the rendered live page.
    downloads = {}
    for line in (DEVS_SRC / "file-downloads.tsv").read_text().splitlines():
        key, url = line.split("\t")
        downloads[key.split("_", 1)[0]] = key.replace("/", "_")
    file_map, unresolved = {}, []
    for md in sorted((out / "pages").rglob("*.md")):
        md_text = md.read_text(encoding="utf-8")
        ids = re.findall(r'\{% file src="/files/([^"]+)"', md_text)
        if not ids:
            continue
        rel = md.relative_to(out / "pages").with_suffix("").as_posix()
        url = "https://devs.defikingdoms.com/" + ("dfk-developer-docs" if rel == "index" else rel)
        html = fetch(url)
        seen, ordered = set(), []
        for m in re.finditer(r"https://[0-9]+-files\.gitbook\.io/[^\"'\\ <]+", html):
            path = up.unquote(up.urlparse(m.group(0).replace("&amp;", "&")).path)
            if "/uploads/" not in path:
                continue
            upload_id, name = path.split("/uploads/")[1].split("/", 1)
            # skip images, repeats, and uploads the markdown already links to directly
            if re.search(r"\.(png|jpe?g|gif|svg|webp)$", name, re.I) or upload_id in seen or upload_id in md_text:
                continue
            seen.add(upload_id)
            ordered.append((upload_id, name))
        uniq_ids = list(dict.fromkeys(ids))
        if len(uniq_ids) != len(ordered):
            unresolved.append((rel, len(uniq_ids), len(ordered)))
            continue
        for fid, (upload_id, name) in zip(uniq_ids, ordered):
            file_map[fid] = {"name": name, "path": f"/assets/devs/files/{downloads[upload_id]}"}
    (out / "file-map.json").write_text(json.dumps(file_map, indent=1, sort_keys=True))
    print(f"devs: {len(list((out / 'pages').rglob('*.md')))} md, {len(file_map)} attachments mapped")
    for u in unresolved:
        print("  UNRESOLVED file blocks on", u)

if __name__ == "__main__":
    which = sys.argv[1:] or ["docs", "devs"]
    if "docs" in which: import_docs()
    if "devs" in which: import_devs()
