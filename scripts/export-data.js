// 构建时导出所有会议论文数据为静态 JSON
// 用法: node scripts/export-data.js
// 数据存储在 client/public/data/ 下，随代码一起提交到 GitHub

const path = require('path');
const fs = require('fs');
const { loadAllPapers } = require('../server/parser');
const { extractNounKeywords } = require('../server/keywords');
const { categorize } = require('../server/classify');
const { fetchConference } = require('../server/fetcher');

const REPORTS_DIR = path.resolve(__dirname, '..', 'reports');
const OUT_DIR = path.resolve(__dirname, '..', 'client', 'public', 'data');

// 确保输出目录存在
if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

// 要获取的外部会议
const EXTERNAL_CONFERENCES = [
  { conf: 'ICML', year: 2024 },
  { conf: 'ICML', year: 2025 },
  { conf: 'ICLR', year: 2024 },
  { conf: 'ICLR', year: 2025 },
  { conf: 'NeurIPS', year: 2024 },
  { conf: 'NeurIPS', year: 2025 },
  { conf: 'EMNLP', year: 2024 },
  { conf: 'EMNLP', year: 2025 },
];

async function main() {
  console.log('=== Paper Insight 数据导出 ===\n');

  // 1. 导出 ACL 论文
  console.log('[1/4] 导出 ACL 2025 论文...');
  const papers = loadAllPapers(REPORTS_DIR, (cur, total, msg) => {
    process.stdout.write(`\r  ${msg}`);
  });
  console.log(`\n  共 ${papers.length} 篇论文`);

  // 添加分类
  for (const p of papers) {
    const [cat, sub] = categorize(p.title, p.abstract_en || '');
    p.category = p.category || cat;
    p.subcategory = sub;
  }

  // 保存 ACL 论文
  const papersPath = path.join(OUT_DIR, 'papers.json');
  fs.writeFileSync(papersPath, JSON.stringify(papers));
  console.log(`  已保存: papers.json (${(fs.statSync(papersPath).size / 1024 / 1024).toFixed(2)} MB)\n`);

  // 2. 导出关键词
  console.log('[2/4] 导出关键词...');
  for (const lang of ['en', 'zh']) {
    const kw = extractNounKeywords(papers, lang, 150);
    const kwPath = path.join(OUT_DIR, `keywords-${lang}.json`);
    fs.writeFileSync(kwPath, JSON.stringify(kw));
    console.log(`  已保存: keywords-${lang}.json`);
  }
  console.log();

  // 3. 导出分类统计
  console.log('[3/4] 导出分类统计...');
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
  const filtersPath = path.join(OUT_DIR, 'filters.json');
  fs.writeFileSync(filtersPath, JSON.stringify({ categories, subcategories, catSubMap, total: papers.length }));
  console.log(`  已保存: filters.json\n`);

  // 4. 获取外部会议论文
  console.log('[4/4] 获取外部会议论文...');
  const results = {};

  for (const { conf, year } of EXTERNAL_CONFERENCES) {
    const filename = `external-${conf}-${year}.json`;
    const filepath = path.join(OUT_DIR, filename);

    // 如果文件已存在且不超过 7 天，跳过
    if (fs.existsSync(filepath)) {
      const age = Date.now() - fs.statSync(filepath).mtimeMs;
      if (age < 7 * 24 * 60 * 60 * 1000) {
        const existing = JSON.parse(fs.readFileSync(filepath, 'utf-8'));
        console.log(`  ${conf} ${year}: 已有缓存 (${existing.length} 篇), 跳过`);
        results[`${conf}-${year}`] = existing.length;
        continue;
      }
    }

    try {
      console.log(`  ${conf} ${year}: 开始获取...`);
      const confPapers = await fetchConference(conf, year, (cur, total, msg) => {
        process.stdout.write(`\r  ${msg.padEnd(60)}`);
      });
      console.log();

      if (confPapers.length > 0) {
        // 添加分类
        for (const p of confPapers) {
          const [cat, sub] = categorize(p.title, p.abstract_en || '');
          p.category = cat;
          p.subcategory = sub;
        }
        fs.writeFileSync(filepath, JSON.stringify(confPapers));
        console.log(`  已保存: ${filename} (${confPapers.length} 篇)`);
        results[`${conf}-${year}`] = confPapers.length;
      } else {
        console.log(`  ${conf} ${year}: 无数据`);
        results[`${conf}-${year}`] = 0;
      }
    } catch (e) {
      console.log(`  ${conf} ${year}: 获取失败 - ${e.message}`);
      results[`${conf}-${year}`] = 0;
    }
  }

  // 5. 保存会议列表元数据
  console.log('\n保存会议列表元数据...');
  const conferencesMeta = [
    {
      id: 'ICML', name: 'ICML', years: [2024, 2025],
      description: 'International Conference on Machine Learning',
      entries: [
        { year: 2024, key: 'ICML-2024', paperCount: results['ICML-2024'] || 0, status: 'ready' },
        { year: 2025, key: 'ICML-2025', paperCount: results['ICML-2025'] || 0, status: 'ready' },
      ]
    },
    {
      id: 'ICLR', name: 'ICLR', years: [2024, 2025],
      description: 'International Conference on Learning Representations',
      entries: [
        { year: 2024, key: 'ICLR-2024', paperCount: results['ICLR-2024'] || 0, status: 'ready' },
        { year: 2025, key: 'ICLR-2025', paperCount: results['ICLR-2025'] || 0, status: 'ready' },
      ]
    },
    {
      id: 'EMNLP', name: 'EMNLP', years: [2024, 2025],
      description: 'Empirical Methods in Natural Language Processing',
      entries: [
        { year: 2024, key: 'EMNLP-2024', paperCount: results['EMNLP-2024'] || 0, status: 'ready' },
        { year: 2025, key: 'EMNLP-2025', paperCount: results['EMNLP-2025'] || 0, status: 'ready' },
      ]
    },
    {
      id: 'NeurIPS', name: 'NeurIPS', years: [2024, 2025],
      description: 'Neural Information Processing Systems',
      entries: [
        { year: 2024, key: 'NeurIPS-2024', paperCount: results['NeurIPS-2024'] || 0, status: 'ready' },
        { year: 2025, key: 'NeurIPS-2025', paperCount: results['NeurIPS-2025'] || 0, status: 'ready' },
      ]
    },
  ];
  fs.writeFileSync(path.join(OUT_DIR, 'conferences.json'), JSON.stringify(conferencesMeta));
  console.log('  已保存: conferences.json');

  // 汇总
  console.log('\n=== 导出完成 ===');
  console.log(`  ACL 2025: ${papers.length} 篇`);
  for (const { conf, year } of EXTERNAL_CONFERENCES) {
    console.log(`  ${conf} ${year}: ${results[`${conf}-${year}`] || 0} 篇`);
  }
  const files = fs.readdirSync(OUT_DIR);
  const totalSize = files.reduce((sum, f) => sum + fs.statSync(path.join(OUT_DIR, f)).size, 0);
  console.log(`  总大小: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);
}

main().catch(e => {
  console.error('导出失败:', e);
  process.exit(1);
});
