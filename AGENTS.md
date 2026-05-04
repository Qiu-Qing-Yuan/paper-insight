# AGENTS.md

## What this is

A data analysis project for ACL 2025 conference papers. Not a typical software repo — the primary deliverable is a multi-page HTML website with a Node.js server that reads paper data dynamically from markdown reports.

## Critical architecture facts

- **`server/index.js`** is the entry point — a Node.js Express server that reads `reports/*.md` at runtime. Edit markdown → refresh browser → changes appear.
- **`site/`** contains the Vue 3 SPA (Single Page Application).
- **`reports/`** contains markdown files organized by research direction. These are the source of truth for paper data (titles, authors, abstracts).
- **`data/all_papers_final.json`** contains the complete paper data with venue labels and translations.
- **`scripts/`** contains Python data pipeline scripts (crawl, translate, generate reports).
- **`docs/`** contains design reference assets.
- **All Python scripts use hardcoded Windows paths** (`E:\paper\ACL2025\...`). If running on another machine, rewrite paths before executing.

## How to run

```bash
# Install dependencies (first time only)
npm install

# Start the Node.js server (reads from reports/*.md at runtime)
npm start
# or
node server/index.js

# Then open http://localhost:8000 in browser
# Edit reports/*.md → refresh browser to see changes
```

## Vue 3 SPA structure

```
site/
├── index.html      # Vue app entry (loads Vue, Vue Router, ECharts via CDN)
├── css/style.css   # Shared styles
└── js/
    ├── app.js      # Vue Router setup, app initialization
    ├── data.js     # API calls, state management (Vue.reactive store)
    └── components.js # Vue components (HomePage, PapersPage, WordcloudPage, ChartsPage)
```

Vue 3 + Vue Router are loaded via CDN (no build step needed). Components use Composition API (`setup()`).

## API endpoints (server/index.js)

- `GET /api/papers` — Returns all papers parsed from `reports/*.md`
- `GET /api/paper?id=xxx` — Returns a single paper
- `GET /api/keywords?lang=en|zh&sub=xxx` — Returns noun-only keywords, optionally filtered by subcategory
- `GET /api/refresh` — Clears the server cache
- `GET /api/progress` — Returns data loading progress

## Data pipeline (run in order)

```
1. scripts/crawl_acl2025.py           → crawl paper list from ACL Anthology
2. scripts/get_abstracts.py           → fetch abstracts
3. scripts/translate_continue.py      → translate abstracts to Chinese
4. scripts/add_venue_and_translate.py → add venue labels, generate reports/*.md + data/all_papers_final.json
5. scripts/build_website.py           → legacy single-page index.html (optional)
```

## Commands

```bash
# Start the Node.js server
npm start

# Regenerate the legacy single-page website (Python)
python scripts/build_website.py
```

No tests, no linting.

**Node.js dependencies** (listed in `package.json`): `express`, `compression`, `chokidar`
**Python dependencies** (listed in `requirements.txt`): `requests`, `beautifulsoup4` (for crawl scripts only)

## Data schema (reports/*.md markdown format)

Each paper in markdown:
```markdown
## 1. Paper Title

**类别**: `venue`  
**作者**: Author1, Author2  
**ID**: 2025.acl-long.1

**摘要(英文)**:
> English abstract...

**摘要(中文)**:
> 中文摘要...
```

The website applies a two-level categorization at load time via `categorizeDetailed()` using ~50 regex rules in `subRules`. The JS rules override any category in the markdown.

## Word clouds

Word clouds use **noun-only filtering** — the server extracts nouns using a predefined noun dictionary and Chinese noun patterns. Chinese keywords are extracted via regex patterns like `[\u4e00-\u9fa5]{2,4}模型`.

## Reports

`reports/` contains 19 markdown files (00-18), each covering a research direction. Entry point is `reports/00_总览.md`. Reports are in Chinese.

## Server architecture (Node.js)

```
server/
├── index.js        # Express entry point, API routes, static file serving
├── cache.js        # DataCache class with file modification time checking
├── parser.js       # Markdown paper parser (reports/*.md → Paper[])
├── keywords.js     # Noun keyword extraction (NOUN_SET, ZH_NOUN_SET)
└── classify.js     # Classification rules (SUB_RULES + categorize)
```

## Quirks

- `node server/index.js` (or `npm start`) must be running for the Vue SPA to work (fetches data via API).
- Word clouds and charts load ECharts from CDN (`cdn.jsdelivr.net`); offline use won't render.
- Paper classification is keyword-based on titles, not manually curated — expect miscategorization in "其他".
- Translation used Google Translate API; quality varies.
- In `build_website.py`, the HTML template is a Python raw string (`r'''...'''`). Never use `<\/script>` — use `</script>` directly.
