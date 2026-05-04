# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Paper Insight — an AI & CS paper analysis platform. A Node.js Express server reads classified paper data from markdown reports at runtime, serving a Vue 3 SPA frontend. Currently covers ACL 2025 (4548 papers across 18 research directions), with ICML/EMNLP/NeurIPS support via dynamic API fetching.

## Commands

```bash
# Install all dependencies (root + client)
npm run install:all

# Start production server (serves built client + API on port 8000)
npm start

# Development — run both in separate terminals:
npm start                     # API server on :8000
cd client && npm run dev      # Vite dev server on :5173 (proxies /api → :8000)

# Build client for production
npm run build                 # runs vue-tsc + vite build → client/dist/

# Python data pipeline (run in order, requires requests + beautifulsoup4)
python scripts/crawl_acl2025.py
python scripts/get_abstracts.py
python scripts/translate_continue.py
python scripts/add_venue_and_translate.py
```

No test suite or linter configured.

## Architecture

**Two-app structure**: Express backend (`server/`) + Vue 3 SPA (`client/`).

### Server (`server/`)

- `index.js` — Express entry point. Serves `client/dist/` as static files, exposes REST API.
- `parser.js` — Parses `reports/*.md` markdown into structured paper objects. Each paper has: title, venue, authors, id, abstract_en, abstract_zh.
- `cache.js` — `DataCache` class that invalidates on file mtime change. No manual cache clear needed.
- `keywords.js` — Noun-only keyword extraction using predefined dictionaries (`NOUN_SET`, `ZH_NOUN_SET`).
- `classify.js` — `SUB_RULES`: ~50 regex rules matching paper titles to subcategories. `categorizeDetailed()` applies these at load time; JS rules override markdown categories.

### API Endpoints

- `GET /api/papers` — all papers from reports/*.md
- `GET /api/paper?id=xxx` — single paper
- `GET /api/keywords?lang=en|zh&sub=xxx` — noun keywords, optional subcategory filter
- `GET /api/refresh` — clear server cache
- `GET /api/progress` — data loading progress

### Client (`client/`)

Vue 3 + TypeScript + Vite. Uses Pinia for state, Vue Router, ECharts for charts/wordclouds.

- `src/stores/papers.ts` — Pinia store, fetches from `/api/papers`
- `src/views/` — 10 page components (HomePage, PapersPage, WordcloudPage, ChartsPage, etc.)
- `src/composables/` — `usePagination`, `usePaperFilter`, `useTheme`
- `src/components/AppSidebar.vue` — navigation sidebar

### Data Flow

`reports/*.md` → `server/parser.js` → `server/cache.js` → REST API → Pinia store → Vue components

Edit a report markdown file, refresh browser — changes appear (cache invalidates on mtime).

## Reports (`reports/`)

16 markdown files (00-15), each covering a research direction. Entry point: `reports/00_总览.md`. All in Chinese. The `categorizeDetailed()` JS rules in `classify.js` are the authoritative categorization, not the markdown metadata.

## Quirks

- All Python scripts use hardcoded Windows paths (`E:\paper\ACL2025\...`). Rewrite if running elsewhere.
- Word clouds and charts load ECharts from CDN; offline use won't render.
- Paper classification is regex-based on titles — miscategorized papers land in "其他".
- The `client/dist/` directory is pre-built; the Express server serves it directly in production mode.
