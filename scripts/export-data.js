// 构建时导出论文数据为静态 JSON（用于 Vercel/GitHub Pages 部署）
// 用法: node scripts/export-data.js

const path = require('path');
const fs = require('fs');
const { loadAllPapers } = require('../server/parser');
const { extractNounKeywords } = require('../server/keywords');
const { categorize } = require('../server/classify');

const REPORTS_DIR = path.resolve(__dirname, '..', 'reports');
const OUT_DIR = path.resolve(__dirname, '..', 'client', 'public', 'data');

// 确保输出目录存在
if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

console.log('正在从 reports/*.md 导出论文数据...');

// 1. 解析所有论文
const papers = loadAllPapers(REPORTS_DIR, (cur, total, msg) => {
  process.stdout.write(`\r  ${msg}`);
});
console.log(`\n  共 ${papers.length} 篇论文`);

// 2. 添加分类信息
for (const p of papers) {
  const [cat, sub] = categorize(p.title, p.abstract_en || '');
  p.category = p.category || cat;
  p.subcategory = sub;
}

// 3. 导出 papers.json
const papersPath = path.join(OUT_DIR, 'papers.json');
fs.writeFileSync(papersPath, JSON.stringify(papers));
console.log(`  已导出: ${papersPath} (${(fs.statSync(papersPath).size / 1024 / 1024).toFixed(2)} MB)`);

// 4. 导出关键词
for (const lang of ['en', 'zh']) {
  const kw = extractNounKeywords(papers, lang, 150);
  const kwPath = path.join(OUT_DIR, `keywords-${lang}.json`);
  fs.writeFileSync(kwPath, JSON.stringify(kw));
  console.log(`  已导出: ${kwPath}`);
}

// 5. 导出分类统计
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
fs.writeFileSync(path.join(OUT_DIR, 'categories.json'), JSON.stringify({ categories, subcategories, catSubMap }));
console.log(`  已导出: categories.json`);

console.log('\n导出完成！');
