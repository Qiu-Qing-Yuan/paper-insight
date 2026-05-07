// 分页查询模块 — Express 和 Vercel Serverless 共用
const fs = require('fs');
const path = require('path');

let _papers = null;

function loadPapers() {
  if (_papers) return _papers;

  // 优先读取预构建的 JSON
  const jsonPath = path.resolve(__dirname, '..', 'client', 'public', 'data', 'papers.json');
  if (fs.existsSync(jsonPath)) {
    _papers = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
    return _papers;
  }

  // 回退：从 reports/*.md 解析
  const { loadAllPapers } = require('./parser');
  const { categorize } = require('./classify');
  const reportsDir = path.resolve(__dirname, '..', 'reports');
  const papers = loadAllPapers(reportsDir);
  for (const p of papers) {
    const [cat, sub] = categorize(p.title, p.abstract_en || '');
    p.category = p.category || cat;
    p.subcategory = sub;
  }
  _papers = papers;
  return _papers;
}

function queryPapers({ page = 1, limit = 20, category, subcategory, venue, search, sort }) {
  let data = loadPapers();

  // 筛选
  if (category) data = data.filter(p => p.category === category);
  if (subcategory) data = data.filter(p => p.subcategory === subcategory);
  if (venue) {
    if (venue === '主会') data = data.filter(p => p.venue?.startsWith('主会') || ['Oral','Spotlight','Poster'].includes(p.venue));
    else if (venue === 'Workshop') data = data.filter(p => p.venue?.startsWith('Workshop'));
    else data = data.filter(p => p.venue === venue);
  }
  if (search) {
    const q = search.toLowerCase();
    data = data.filter(p =>
      (p.title || '').toLowerCase().includes(q) ||
      (p.abstract_en || '').toLowerCase().includes(q) ||
      (p.abstract_zh || '').includes(search) ||
      (p.authors || []).some(a => a.toLowerCase().includes(q))
    );
  }

  // 排序
  if (sort === 'venue') data.sort((a, b) => (a.venue || '').localeCompare(b.venue || ''));
  else if (sort === 'id') data.sort((a, b) => (a.id || '').localeCompare(b.id || ''));
  else if (sort === 'title') data.sort((a, b) => (a.title || '').localeCompare(b.title || ''));

  const total = data.length;
  const totalPages = Math.ceil(total / limit);
  const safePage = Math.max(1, Math.min(page, totalPages || 1));
  const start = (safePage - 1) * limit;
  const items = data.slice(start, start + limit);

  return { items, total, page: safePage, totalPages, limit };
}

function getFilterOptions() {
  const papers = loadPapers();
  const categories = {};
  const subcategories = {};
  const catSubMap = {};

  for (const p of papers) {
    const cat = p.category || '其他';
    const sub = p.subcategory || '其他';
    categories[cat] = (categories[cat] || 0) + 1;
    subcategories[sub] = (subcategories[sub] || 0) + 1;
    if (!catSubMap[cat]) catSubMap[cat] = {};
    catSubMap[cat][sub] = (catSubMap[cat][sub] || 0) + 1;
  }

  return { categories, subcategories, catSubMap };
}

module.exports = { queryPapers, getFilterOptions, loadPapers };
