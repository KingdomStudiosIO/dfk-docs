# DeFi Kingdoms docs

Source for the DeFi Kingdoms documentation sites:

| Site | Content | Address |
|------|---------|---------|
| Game docs (whitepaper) | `content/docs` | docs.defikingdoms.com |
| Developer docs | `content/devs` | devs.defikingdoms.com |

Both sites are built from this one repository. Pages are plain markdown; the sites are
generated at build time, so there is no database or CMS.

## Publishing

**Anything merged or pushed to `main` is published to both sites automatically**, usually
within a couple of minutes. To work on something without publishing it, use a branch and
merge it when it is ready.

## Editing a page

Edit the markdown file under `content/docs/` or `content/devs/pages/`. You can do this in
the GitHub web editor or locally.

GitBook-style blocks still work:

```
{% hint style="info" %}          info | success | warning | danger
Text
{% endhint %}

{% tabs %}
{% tab title="First" %}
Text
{% endtab %}
{% endtabs %}

{% embed url="https://www.youtube.com/watch?v=..." %}
```

Images go in `public/assets/docs/` or `public/assets/devs/` and are referenced as
`/assets/docs/my-image.png`.

## Downloadable files (ABIs)

Attachments on the developer docs live in `public/assets/devs/files/` under their plain
file names, and a page offers one for download with:

```
{% file src="/assets/devs/files/HeroCore.json" %}
```

- **Update an ABI:** replace the file in that folder, keeping its name. Every page that
  references it picks up the new version.
- **Add one:** drop the file in the folder and add a `{% file %}` line to the page.
- **Keep an old version:** superseded ABIs are in `files/historical/`, so the current and
  historical contract can share a file name.

## Adding, renaming or removing a page

The sidebar and page addresses are listed explicitly, so a new file needs an entry:

- **Game docs:** add the page to `content/docs/SUMMARY.md` (this is the sidebar), **and** add a
  line at the same position in `content/docs/llms.txt` giving the address it should have.
  The two files must list the same pages in the same order; the build fails if they do not.
- **Developer docs:** add the file under `content/devs/pages/` and add a line to
  `content/devs/llms.txt`. The sidebar is built from that list, nested by address.

## Running locally

Requires Node 20 or newer.

```
npm install
SITE=docs npm run dev     # game docs on http://localhost:3000
SITE=devs npm run dev     # developer docs
```

Before merging a larger change:

```
npm run lint
SITE=docs npm run build && SITE=docs python3 scripts/check-build.py
SITE=devs npm run build && SITE=devs python3 scripts/check-build.py
```

`check-build.py` reports dead internal links, missing images and leftover unconverted
blocks. Pass `--offline` to skip its comparison against the published site's page list.

## How it is put together

- `src/lib/nav.ts` builds the sidebar and page list for the site selected by `SITE`.
- `src/lib/markdown.ts` converts the markdown (including the GitBook blocks) to HTML and
  rewrites links and image paths.
- `src/app/[[...slug]]/page.tsx` is the single page template.
