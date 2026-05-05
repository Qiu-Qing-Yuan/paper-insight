// ACL 2025 论文分析平台 - Node.js 服务器
// 用法: node server/index.js
// 然后在浏览器打开 http://localhost:8000

const express = require('express');
const compression = require('compression');
const path = require('path');
const chokidar = require('chokidar');
const DataCache = require('./cache');
const ExternalCache = require('./external-cache');
const { queryPapers, getFilterOptions } = require('./paginated');

const PORT = 8000;
const BASE = path.resolve(__dirname, '..');
const REPORTS_DIR = path.join(BASE, 'reports');
const SITE_DIR = path.join(BASE, 'site');

// 初始化缓存
const cache = new DataCache(REPORTS_DIR);
const externalCache = new ExternalCache();

// Live Reload - SSE 客户端列表
const sseClients = [];

// 创建 Express 应用
const app = express();

// Gzip 压缩
app.use(compression());

// JSON 响应设置
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

// ===== API 路由 =====

// GET /api/papers - 获取论文（支持分页查询）
app.get('/api/papers', (req, res) => {
  // 有分页参数时返回分页结果
  if (req.query.page || req.query.limit || req.query.category || req.query.subcategory || req.query.venue || req.query.search || req.query.sort) {
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
    res.setHeader('Cache-Control', 'public, max-age=5');
    return res.json(result);
  }
  // 无参数时返回全部（兼容旧接口）
  const papers = cache.getPapers();
  res.setHeader('Cache-Control', 'public, max-age=5');
  res.json(papers);
});

// GET /api/filters - 获取筛选选项
app.get('/api/filters', (req, res) => {
  const options = getFilterOptions();
  res.json({ ...options, total: cache.getPapers().length });
});

// GET /api/paper?id=xxx - 获取单篇论文
app.get('/api/paper', (req, res) => {
  const paperId = req.query.id || '';
  const papers = cache.getPapers();
  const paper = papers.find(p => p.id === paperId);
  if (paper) {
    res.setHeader('Cache-Control', 'public, max-age=30');
    res.json(paper);
  } else {
    res.status(404).json({ error: 'Paper not found' });
  }
});

// GET /api/keywords?lang=en|zh&sub=xxx - 获取关键词
app.get('/api/keywords', (req, res) => {
  const lang = req.query.lang || 'en';
  const sub = req.query.sub || '';
  const kw = cache.getKeywords(lang, sub);
  res.setHeader('Cache-Control', 'no-cache');
  res.json(kw);
});

// GET /api/refresh - 清除缓存
app.get('/api/refresh', (req, res) => {
  cache.invalidate();
  res.json({ status: 'ok', message: '缓存已清除' });
});

// GET /api/progress - 获取加载进度
app.get('/api/progress', (req, res) => {
  res.setHeader('Cache-Control', 'no-cache');
  res.json(cache.progress);
});

// ===== 外部会议论文 API =====

// GET /api/external/conferences - 列出可用会议
app.get('/api/external/conferences', (req, res) => {
  res.json(externalCache.listConferences());
});

// GET /api/external/papers/:conference?year=2024 - 获取某会议论文
app.get('/api/external/papers/:conference', (req, res) => {
  const conf = req.params.conference;
  const year = parseInt(req.query.year) || 2024;
  const papers = externalCache.getPapers(conf, year);
  res.setHeader('Cache-Control', 'public, max-age=30');
  res.json(papers);
});

// GET /api/external/all - 获取所有外部论文
app.get('/api/external/all', (req, res) => {
  const papers = externalCache.getAllPapers();
  res.setHeader('Cache-Control', 'public, max-age=30');
  res.json(papers);
});

// GET /api/external/update/:conference?year=2024 - 触发获取
app.get('/api/external/update/:conference', (req, res) => {
  const conf = req.params.conference;
  const year = parseInt(req.query.year) || 2024;
  const key = `${conf}-${year}`;

  // Start fetching in background
  externalCache.fetchPapers(conf, year);

  res.json({ status: 'started', conference: conf, year, message: `开始获取 ${conf} ${year} 论文` });
});

// GET /api/external/progress/:conference?year=2024 - 获取进度
app.get('/api/external/progress/:conference', (req, res) => {
  const conf = req.params.conference;
  const year = parseInt(req.query.year) || 2024;
  res.setHeader('Cache-Control', 'no-cache');
  res.json(externalCache.getProgress(conf, year));
});

// GET /api/events - SSE 实时推送（Live Reload）
app.get('/api/events', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders();

  sseClients.push(res);
  req.on('close', () => {
    const idx = sseClients.indexOf(res);
    if (idx !== -1) sseClients.splice(idx, 1);
  });
});

// 广播 SSE 事件
function broadcast(event, data) {
  const msg = `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`;
  for (const client of sseClients) {
    client.write(msg);
  }
}

// ===== 静态文件服务 =====
app.use(express.static(SITE_DIR));

// SPA fallback - 所有非文件请求返回 index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(SITE_DIR, 'index.html'));
});

// ===== 启动服务器 =====
function main() {
  console.log('ACL 2025 论文分析平台 (Node.js)');
  console.log('='.repeat(50));

  // 预加载数据
  console.log('正在预加载数据...');
  const startTime = Date.now();
  const papers = cache.getPapers();
  const elapsed = ((Date.now() - startTime) / 1000).toFixed(2);
  console.log(`  加载 ${papers.length} 篇论文 (${elapsed}s)`);

  console.log('关键词将在首次请求时加载');
  console.log('='.repeat(50));
  console.log(`服务器启动: http://localhost:${PORT}`);
  console.log(`数据来源: ${REPORTS_DIR}`);
  console.log(`静态文件: ${SITE_DIR}`);
  console.log('优化: 内存缓存 + Gzip压缩 + HTTP缓存 + 懒加载');
  console.log('外部会议: ACL, ICML, ICLR, EMNLP, NeurIPS (按需获取)');
  console.log('修改 reports/*.md 后刷新浏览器即可看到更新');
  console.log('按 Ctrl+C 停止');
  console.log('='.repeat(50));

  app.listen(PORT, () => {
    // 监听 site/ 和 reports/ 文件变化，自动通知浏览器刷新
    const watcher = chokidar.watch(
      [SITE_DIR, REPORTS_DIR],
      { ignoreInitial: true, ignored: /node_modules/ }
    );
    watcher.on('all', (event, filePath) => {
      cache.invalidate();
      broadcast('reload', { file: path.relative(BASE, filePath) });
      console.log(`[live-reload] ${event}: ${path.relative(BASE, filePath)}`);
    });
  });
}

main();
