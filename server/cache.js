// ACL 2025 数据缓存管理
// 从 scripts/serve.py DataCache 迁移

const fs = require('fs');
const path = require('path');
const { loadAllPapers } = require('./parser');
const { extractNounKeywords } = require('./keywords');
const { categorize } = require('./classify');

class DataCache {
  constructor(reportsDir) {
    this.reportsDir = reportsDir;
    this._papers = null;
    this._keywords = {};
    this._fileMtimes = {};
    this._lastCheck = 0;
    this._checkInterval = 2000; // ms
    this._loading = false;
    this.progress = {
      status: 'idle',
      current: 0,
      total: 0,
      message: '',
      percent: 0,
    };
  }

  _getFileMtimes() {
    const mtimes = {};
    if (!fs.existsSync(this.reportsDir)) return mtimes;
    const files = fs.readdirSync(this.reportsDir);
    for (const fname of files) {
      if (fname.endsWith('.md')) {
        const fpath = path.join(this.reportsDir, fname);
        const stat = fs.statSync(fpath);
        mtimes[fname] = stat.mtimeMs;
      }
    }
    return mtimes;
  }

  _filesChanged() {
    const now = Date.now();
    if (now - this._lastCheck < this._checkInterval) return false;
    this._lastCheck = now;

    const newMtimes = this._getFileMtimes();
    const changed = JSON.stringify(newMtimes) !== JSON.stringify(this._fileMtimes);
    if (changed) {
      this._fileMtimes = newMtimes;
    }
    return changed;
  }

  _updateProgress(status, current = 0, total = 0, message = '') {
    const percent = total > 0 ? Math.floor((current / total) * 100) : 0;
    this.progress = { status, current, total, message, percent };
  }

  getPapers() {
    if (this._papers === null || this._filesChanged()) {
      this._updateProgress('loading', 0, 100, '正在扫描文件...');
      this._loading = true;

      this._papers = loadAllPapers(this.reportsDir, (current, total, message) => {
        this._updateProgress('loading', current, total, message);
      });

      this._keywords = {};
      this._loading = false;
      this._updateProgress('done', 100, 100, `加载完成: ${this._papers.length} 篇论文`);
    }
    return this._papers;
  }

  getKeywords(lang, sub = '') {
    const cacheKey = `${lang}:${sub}`;
    if (!this._keywords[cacheKey]) {
      let papers = this.getPapers();
      if (sub) {
        papers = papers.filter(p => {
          const [, subCat] = categorize(p.title || '', p.abstract_en || '');
          return subCat === sub;
        });
      }
      this._keywords[cacheKey] = extractNounKeywords(papers, lang);
    }
    return this._keywords[cacheKey];
  }

  invalidate() {
    this._papers = null;
    this._keywords = {};
    this._fileMtimes = {};
    this._updateProgress('idle', 0, 0, '缓存已清除');
  }
}

module.exports = DataCache;
