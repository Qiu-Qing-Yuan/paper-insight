// ACL 2025 Markdown 论文解析器
// 从 scripts/serve.py 迁移

const fs = require('fs');
const path = require('path');

/**
 * 从 markdown 文件解析论文数据
 * @param {string} filepath - markdown 文件路径
 * @returns {Array} 论文数组
 */
function parsePapersFromMd(filepath) {
  const papers = [];
  let content;
  try {
    content = fs.readFileSync(filepath, 'utf-8');
  } catch {
    return papers;
  }

  // 统一换行符，按 --- 分割论文块
  content = content.replace(/\r\n/g, '\n');
  const blocks = content.split(/\n---\n/);

  for (const block of blocks) {
    // 匹配 ## N. Title
    const titleMatch = block.match(/^## \d+\.\s+(.+)$/m);
    if (!titleMatch) continue;

    const title = titleMatch[1].trim();

    // 提取类别
    const venueMatch = block.match(/\*\*类别\*\*:\s*`([^`]+)`/);
    const venue = venueMatch ? venueMatch[1] : '';

    // 提取作者
    const authorsMatch = block.match(/\*\*作者\*\*:\s*(.+?)(?:\n|$)/);
    const authorsStr = authorsMatch ? authorsMatch[1] : '';
    const authors = authorsStr.split(/,\s*/).map(a => a.trim()).filter(Boolean);

    // 提取ID
    const idMatch = block.match(/\*\*ID\*\*:\s*(\S+)/);
    const paperId = idMatch ? idMatch[1] : '';

    // 提取英文摘要
    const enMatch = block.match(/\*\*摘要\(英文\)\*\*:\s*\n>\s*([\s\S]+?)(?=\n\n\*\*|\n---|$)/);
    const abstractEn = enMatch ? enMatch[1].trim() : '';

    // 提取中文摘要
    const zhMatch = block.match(/\*\*摘要\(中文\)\*\*:\s*\n>\s*([\s\S]+?)(?=\n\n\*\*|\n---|$)/);
    const abstractZh = zhMatch ? zhMatch[1].trim() : '';

    papers.push({
      id: paperId,
      title,
      authors,
      venue,
      abstract_en: abstractEn,
      abstract_zh: abstractZh,
    });
  }

  return papers;
}

/**
 * 从所有 markdown 文件加载论文
 * @param {string} reportsDir - reports 目录路径
 * @param {function} onProgress - 进度回调 (current, total, message)
 * @returns {Array} 所有论文
 */
function loadAllPapers(reportsDir, onProgress) {
  const allPapers = [];
  if (!fs.existsSync(reportsDir)) return allPapers;

  const mdFiles = fs.readdirSync(reportsDir)
    .filter(f => f.endsWith('.md') && f !== '00_总览.md')
    .sort();

  const totalFiles = mdFiles.length;

  if (onProgress) onProgress(0, totalFiles, '正在扫描文件...');

  for (let idx = 0; idx < mdFiles.length; idx++) {
    const fname = mdFiles[idx];
    if (onProgress) onProgress(idx, totalFiles, `正在解析: ${fname}`);

    const fpath = path.join(reportsDir, fname);
    const papers = parsePapersFromMd(fpath);

    // 从文件名提取分类
    const catMatch = fname.match(/^\d+_(.+)\.md$/);
    const category = catMatch ? catMatch[1] : '';
    for (const p of papers) {
      if (!p.category) p.category = category;
    }
    // 过滤掉会议头和重复论文，仅保留真实论文
    const filtered = papers.filter(p => {
      if (!p.title) return false;
      if (p.title.startsWith('Proceedings of')) return false;
      if (p.title.startsWith('Findings of')) return false;
      return true;
    });
    allPapers.push(...filtered);
  }

  // 按ID去重（同一论文可能被多个会议收录）
  const seen = new Set();
  const deduped = allPapers.filter(p => {
    if (seen.has(p.id)) return false;
    seen.add(p.id);
    return true;
  });

  if (onProgress) onProgress(totalFiles, totalFiles, `加载完成: ${deduped.length} 篇论文`);

  return deduped;
}

module.exports = { parsePapersFromMd, loadAllPapers };
