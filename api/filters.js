// Vercel Serverless Function: 获取筛选选项
const { getFilterOptions, loadPapers } = require('../server/paginated');

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'public, max-age=60');

  const options = getFilterOptions();
  res.json({ ...options, total: loadPapers().length });
};
