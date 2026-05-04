// Vercel Serverless Function: 关键词查询
// 根据 lang 参数返回对应的静态关键词数据

const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const lang = req.query.lang || 'en';
  const validLangs = ['en', 'zh'];
  const safeLang = validLangs.includes(lang) ? lang : 'en';

  // 在 Vercel 环境中，静态文件通过 /data/ 路径访问
  // 这里直接返回 302 重定向到静态文件
  res.writeHead(302, { Location: `/data/keywords-${safeLang}.json` });
  res.end();
};
