// Vercel Serverless Function: 分页论文查询
const { queryPapers } = require('../server/paginated');

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'public, max-age=10, stale-while-revalidate=30');

  const page = parseInt(req.query.page) || 1;
  const limit = Math.min(parseInt(req.query.limit) || 20, 100);

  const result = queryPapers({
    page, limit,
    category: req.query.category || '',
    subcategory: req.query.subcategory || '',
    venue: req.query.venue || '',
    search: req.query.search || '',
    sort: req.query.sort || '',
  });
  res.json(result);
};
