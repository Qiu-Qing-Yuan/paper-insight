// Vercel Serverless Function: 外部会议论文代理
// 无状态，每次请求直接从源 API 获取

const https = require('https');

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { headers: { 'User-Agent': 'PaperInsight/1.0' }, timeout: 15000 }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchUrl(res.headers.location).then(resolve, reject);
      }
      if (res.statusCode !== 200) {
        res.resume();
        return reject(new Error(`HTTP ${res.statusCode}`));
      }
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks).toString('utf-8')));
    });
    req.on('error', reject);
    req.on('timeout', () => { req.destroy(); reject(new Error('Timeout')); });
  });
}

async function fetchICML(year) {
  const papers = [];
  const invitation = `ICML.cc/${year}/Conference/-/Submission`;
  let offset = 0;
  const limit = 100;
  let total = null;

  while (true) {
    const url = `https://api2.openreview.net/notes?invitation=${encodeURIComponent(invitation)}&limit=${limit}&offset=${offset}`;
    const raw = await fetchUrl(url);
    const data = JSON.parse(raw);
    if (total === null) total = data.count || 0;
    const notes = data.notes || [];
    if (notes.length === 0) break;

    for (const note of notes) {
      const c = note.content || {};
      papers.push({
        id: note.id || '',
        title: c.title || '',
        authors: (c.authors || []).map(a => typeof a === 'string' ? a : a.name || ''),
        venue: 'ICML',
        abstract_en: c.abstract || '',
        abstract_zh: '',
        source: 'ICML',
        year,
      });
    }
    offset += limit;
    if (offset >= total) break;
  }
  return papers;
}

async function fetchNeurIPS(year) {
  const papers = [];
  const invitation = `NeurIPS.cc/${year}/Conference/-/Submission`;
  let offset = 0;
  const limit = 100;
  let total = null;

  while (true) {
    const url = `https://api2.openreview.net/notes?invitation=${encodeURIComponent(invitation)}&limit=${limit}&offset=${offset}`;
    const raw = await fetchUrl(url);
    const data = JSON.parse(raw);
    if (total === null) total = data.count || 0;
    const notes = data.notes || [];
    if (notes.length === 0) break;

    for (const note of notes) {
      const c = note.content || {};
      papers.push({
        id: note.id || '',
        title: c.title || '',
        authors: (c.authors || []).map(a => typeof a === 'string' ? a : a.name || ''),
        venue: 'NeurIPS',
        abstract_en: c.abstract || '',
        abstract_zh: '',
        source: 'NeurIPS',
        year,
      });
    }
    offset += limit;
    if (offset >= total) break;
  }
  return papers;
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  const { conference, year: yearStr } = req.query;
  const year = parseInt(yearStr) || 2024;

  if (!conference) {
    return res.status(400).json({ error: 'Missing conference parameter' });
  }

  try {
    let papers = [];
    if (conference === 'ICML') {
      papers = await fetchICML(year);
    } else if (conference === 'NeurIPS') {
      papers = await fetchNeurIPS(year);
    } else {
      return res.status(400).json({ error: `Unsupported conference: ${conference}` });
    }
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.json(papers);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
