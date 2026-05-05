// External conference papers cache manager
// Stores fetched papers in memory + optional file cache

const fs = require('fs');
const path = require('path');
const { fetchConference } = require('./fetcher');

const DATA_DIR = path.resolve(__dirname, '..', 'data', 'external');

class ExternalCache {
  constructor() {
    this._cache = {}; // { 'ICML-2024': { papers, lastUpdated, status } }
    this._fetching = {}; // { 'ICML-2024': { progress, abort } }
    this._ensureDataDir();
    this._loadFromDisk();
  }

  _ensureDataDir() {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
  }

  _cachePath(key) {
    return path.join(DATA_DIR, `${key}.json`);
  }

  _loadFromDisk() {
    try {
      const files = fs.readdirSync(DATA_DIR).filter(f => f.endsWith('.json'));
      for (const file of files) {
        const key = file.replace('.json', '');
        try {
          const data = JSON.parse(fs.readFileSync(path.join(DATA_DIR, file), 'utf-8'));
          this._cache[key] = {
            papers: data.papers || [],
            lastUpdated: data.lastUpdated || null,
            status: 'cached',
          };
        } catch { /* skip corrupt files */ }
      }
    } catch { /* dir doesn't exist yet */ }
  }

  _saveToDisk(key) {
    const entry = this._cache[key];
    if (!entry) return;
    try {
      fs.writeFileSync(this._cachePath(key), JSON.stringify({
        papers: entry.papers,
        lastUpdated: entry.lastUpdated,
      }), 'utf-8');
    } catch { /* ignore write errors */ }
  }

  // List all available conferences and their status
  listConferences() {
    const conferences = [
      { id: 'ACL', name: 'ACL', years: [2023, 2024, 2025], description: 'Annual Meeting of the Association for Computational Linguistics' },
      { id: 'ICML', name: 'ICML', years: [2023, 2024, 2025], description: 'International Conference on Machine Learning' },
      { id: 'ICLR', name: 'ICLR', years: [2023, 2024, 2025], description: 'International Conference on Learning Representations' },
      { id: 'EMNLP', name: 'EMNLP', years: [2023, 2024, 2025], description: 'Empirical Methods in Natural Language Processing' },
      { id: 'NeurIPS', name: 'NeurIPS', years: [2023, 2024, 2025], description: 'Neural Information Processing Systems' },
    ];

    return conferences.map(conf => ({
      ...conf,
      entries: conf.years.map(year => {
        const key = `${conf.id}-${year}`;
        const cached = this._cache[key];
        const fetching = this._fetching[key];
        return {
          year,
          key,
          paperCount: cached ? cached.papers.length : 0,
          lastUpdated: cached ? cached.lastUpdated : null,
          status: fetching ? 'fetching' : (cached ? cached.status : 'not_loaded'),
        };
      }),
    }));
  }

  // Get papers for a specific conference+year
  getPapers(conference, year) {
    const key = `${conference}-${year}`;
    const entry = this._cache[key];
    if (!entry) return [];
    return entry.papers;
  }

  // Get all external papers (merged)
  getAllPapers() {
    const all = [];
    for (const entry of Object.values(this._cache)) {
      all.push(...entry.papers);
    }
    return all;
  }

  // Get fetching progress
  getProgress(conference, year) {
    const key = `${conference}-${year}`;
    const fetching = this._fetching[key];
    if (fetching) return fetching.progress;
    const cached = this._cache[key];
    if (cached) return { status: cached.status, current: cached.papers.length, total: cached.papers.length, message: `${cached.papers.length} 篇论文`, percent: 100 };
    return { status: 'idle', current: 0, total: 0, message: '', percent: 0 };
  }

  // Start fetching papers for a conference
  async fetchPapers(conference, year = 2024) {
    const key = `${conference}-${year}`;
    if (this._fetching[key]) return; // Already fetching

    this._fetching[key] = {
      progress: { status: 'loading', current: 0, total: 0, message: '开始获取...', percent: 0 },
    };

    try {
      const papers = await fetchConference(conference, year, (current, total, message) => {
        if (this._fetching[key]) {
          this._fetching[key].progress = {
            status: 'loading',
            current,
            total: total || current,
            message,
            percent: total > 0 ? Math.floor((current / total) * 100) : 0,
          };
        }
      });

      this._cache[key] = {
        papers,
        lastUpdated: new Date().toISOString(),
        status: 'ready',
      };
      this._saveToDisk(key);
    } catch (e) {
      if (this._cache[key]) {
        this._cache[key].status = 'error';
      } else {
        this._cache[key] = { papers: [], lastUpdated: null, status: 'error' };
      }
    } finally {
      delete this._fetching[key];
    }
  }
}

module.exports = ExternalCache;
