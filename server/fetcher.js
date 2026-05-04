// Multi-conference paper fetcher
// Sources: OpenReview (ICML, NeurIPS), ACL Anthology (EMNLP), NeurIPS Proceedings

const https = require('https');
const http = require('http');

// ===== HTTP helpers =====

function fetchUrl(url, options = {}) {
  return new Promise((resolve, reject) => {
    const mod = url.startsWith('https') ? https : http;
    const req = mod.get(url, { headers: { 'User-Agent': 'ACL-Paper-Platform/1.0', ...options.headers }, timeout: 30000 }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchUrl(res.headers.location, options).then(resolve, reject);
      }
      if (res.statusCode !== 200) {
        res.resume();
        return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
      }
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks).toString('utf-8')));
    });
    req.on('error', reject);
    req.on('timeout', () => { req.destroy(); reject(new Error('Timeout')); });
  });
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// ===== ICML via OpenReview API v2 =====

async function fetchICML(year = 2024, onProgress) {
  const papers = [];
  const invitation = `ICML.cc/${year}/Conference/-/Submission`;
  let offset = 0;
  const limit = 100;
  let totalCount = null;

  while (true) {
    const url = `https://api2.openreview.net/notes?invitation=${encodeURIComponent(invitation)}&limit=${limit}&offset=${offset}`;
    if (onProgress) onProgress(papers.length, totalCount || 0, `ICML ${year}: 正在获取第 ${offset + 1}-${offset + limit} 篇...`);

    let data;
    try {
      const raw = await fetchUrl(url);
      data = JSON.parse(raw);
    } catch (e) {
      if (onProgress) onProgress(papers.length, papers.length, `ICML ${year}: 请求失败 - ${e.message}`);
      break;
    }

    if (totalCount === null) totalCount = data.count || 0;
    const notes = data.notes || [];
    if (notes.length === 0) break;

    for (const note of notes) {
      const c = note.content || {};
      papers.push({
        id: note.id || '',
        title: (c.title && c.title.value) || '',
        authors: (c.authors && c.authors.value) || [],
        venue: (c.venue && c.venue.value) || `ICML ${year}`,
        abstract_en: (c.abstract && c.abstract.value) || '',
        abstract_zh: '',
        pdf_url: (c.pdf && c.pdf.value) || '',
        source: 'ICML',
        year,
      });
    }

    offset += limit;
    if (offset >= totalCount) break;
    await sleep(500); // rate limit
  }

  if (onProgress) onProgress(papers.length, papers.length, `ICML ${year}: 完成, 共 ${papers.length} 篇`);
  return papers;
}

// ===== EMNLP via ACL Anthology =====

async function fetchEMNLP(year = 2024, onProgress) {
  // ACL Anthology has volume pages listing all papers
  // Pattern: https://aclanthology.org/volumes/2024.emnlp-main/
  const volumes = [
    `${year}.emnlp-main`,
    `${year}.findings-emnlp`,
  ];

  const papers = [];

  for (const vol of volumes) {
    const volUrl = `https://aclanthology.org/volumes/${vol}/`;
    if (onProgress) onProgress(papers.length, 0, `EMNLP ${year}: 正在获取 ${vol}...`);

    let html;
    try {
      html = await fetchUrl(volUrl);
    } catch {
      continue;
    }

    // Extract titles directly from volume page (much faster than fetching each paper)
    const linkRegex = /href=(?:\/)?(\d{4}\.[a-z]+-[a-z]+\.\d+)\/>([\s\S]*?)<\/a>/g;
    let match;
    while ((match = linkRegex.exec(html)) !== null) {
      const id = match[1];
      if (id.endsWith('.0')) continue;
      const title = match[2].replace(/<[^>]+>/g, '').trim();
      if (title) {
        papers.push({
          id,
          title,
          authors: [],
          venue: `EMNLP ${year}`,
          abstract_en: '',
          abstract_zh: '',
          pdf_url: `https://aclanthology.org/${id}.pdf`,
          source: 'EMNLP',
          year,
        });
      }
    }
  }

  if (onProgress) onProgress(papers.length, papers.length, `EMNLP ${year}: 完成, 共 ${papers.length} 篇`);
  return papers;
}

function parseAnthologyPage(html, id, year) {
  // Extract title from <h2 id=title>...<a ...>Title</a></h2>
  const titleMatch = html.match(/<h2[^>]*id=title[^>]*>[\s\S]*?<a[^>]*>([\s\S]*?)<\/a>/);
  if (!titleMatch) return null;
  const title = titleMatch[1].replace(/<[^>]+>/g, '').trim();

  // Extract authors from <p class=lead>...</p>
  const authorsMatch = html.match(/<p\s+class=lead>([\s\S]*?)<\/p>/);
  const authors = [];
  if (authorsMatch) {
    const authorRegex = />([^<]+)<\/a>/g;
    let m;
    while ((m = authorRegex.exec(authorsMatch[1])) !== null) {
      const name = m[1].trim();
      if (name && !name.includes('href')) authors.push(name);
    }
  }

  // Extract abstract from <span> inside the abstract card
  const abstractMatch = html.match(/<h5[^>]*>Abstract<\/h5>\s*<span>([\s\S]*?)<\/span>/);
  const abstract_en = abstractMatch ? abstractMatch[1].replace(/<[^>]+>/g, '').trim() : '';

  return {
    id,
    title,
    authors,
    venue: `EMNLP ${year}`,
    abstract_en,
    abstract_zh: '',
    pdf_url: `https://aclanthology.org/${id}.pdf`,
    source: 'EMNLP',
    year,
  };
}

// ===== NeurIPS via OpenReview =====

async function fetchNeurIPS(year = 2024, onProgress) {
  const papers = [];
  // NeurIPS uses OpenReview with different invitation patterns
  const invitations = [
    `NeurIPS.cc/${year}/Conference/-/Submission`,
    `NeurIPS.cc/${year}/Conference/-/Poster`,
  ];

  for (const invitation of invitations) {
    let offset = 0;
    const limit = 100;
    let totalCount = null;

    while (true) {
      const url = `https://api2.openreview.net/notes?invitation=${encodeURIComponent(invitation)}&limit=${limit}&offset=${offset}`;
      if (onProgress) onProgress(papers.length, totalCount || 0, `NeurIPS ${year}: 正在获取 (offset=${offset})...`);

      let data;
      try {
        const raw = await fetchUrl(url);
        data = JSON.parse(raw);
      } catch (e) {
        if (onProgress) onProgress(papers.length, papers.length, `NeurIPS ${year}: 请求失败 - ${e.message}`);
        break;
      }

      if (totalCount === null) totalCount = data.count || 0;
      const notes = data.notes || [];
      if (notes.length === 0) break;

      for (const note of notes) {
        const c = note.content || {};
        // Avoid duplicates
        if (papers.some(p => p.id === note.id)) continue;
        papers.push({
          id: note.id || '',
          title: (c.title && c.title.value) || '',
          authors: (c.authors && c.authors.value) || [],
          venue: (c.venue && c.venue.value) || `NeurIPS ${year}`,
          abstract_en: (c.abstract && c.abstract.value) || '',
          abstract_zh: '',
          pdf_url: (c.pdf && c.pdf.value) || '',
          source: 'NeurIPS',
          year,
        });
      }

      offset += limit;
      if (offset >= totalCount) break;
      await sleep(500);
    }

    if (papers.length > 0) break; // Got data from this invitation
  }

  // Fallback: scrape proceedings.neurips.cc if OpenReview returns nothing
  if (papers.length === 0) {
    if (onProgress) onProgress(0, 0, `NeurIPS ${year}: 尝试从 proceedings.neurips.cc 获取...`);
    try {
      const neuripsPapers = await scrapeNeurIPSProceedings(year, onProgress);
      papers.push(...neuripsPapers);
    } catch (e) {
      if (onProgress) onProgress(0, 0, `NeurIPS ${year}: 爬取失败 - ${e.message}`);
    }
  }

  if (onProgress) onProgress(papers.length, papers.length, `NeurIPS ${year}: 完成, 共 ${papers.length} 篇`);
  return papers;
}

async function scrapeNeurIPSProceedings(year, onProgress) {
  const papers = [];
  const listUrl = `https://proceedings.neurips.cc/paper_files/paper/${year}`;
  const html = await fetchUrl(listUrl);

  // Extract paper page links: href="/paper_files/paper/2024/hash/xxx-Abstract-Conference.html"
  const linkRegex = /href="\/paper_files\/paper\/\d{4}\/hash\/([a-f0-9]+)-Abstract-Conference\.html"/g;
  const hashes = [];
  let m;
  while ((m = linkRegex.exec(html)) !== null) {
    hashes.push(m[1]);
  }

  for (let i = 0; i < hashes.length; i++) {
    const hash = hashes[i];
    if (onProgress) onProgress(i, hashes.length, `NeurIPS ${year}: ${i + 1}/${hashes.length}`);

    try {
      const paperUrl = `https://proceedings.neurips.cc/paper_files/paper/${year}/hash/${hash}-Abstract-Conference.html`;
      const paperHtml = await fetchUrl(paperUrl);
      const paper = parseNeurIPSPage(paperHtml, hash, year);
      if (paper) papers.push(paper);
    } catch {
      // Skip
    }

    if (i % 5 === 4) await sleep(300);
  }

  return papers;
}

function parseNeurIPSPage(html, hash, year) {
  // Title is in <title> tag or <h4> tag
  const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/);
  if (!titleMatch) return null;
  const title = titleMatch[1].replace(/<[^>]+>/g, '').replace(/ - NeurIPS$/, '').trim();

  // Authors
  const authorsMatch = html.match(/<h4[^>]*>([\s\S]*?)<\/h4>/);
  const authors = [];
  if (authorsMatch) {
    const authorRegex = />([^<]+)<\/a>/g;
    let m;
    while ((m = authorRegex.exec(authorsMatch[1])) !== null) {
      authors.push(m[1].trim());
    }
  }

  // Abstract
  const abstractMatch = html.match(/<h4[^>]*>Abstract<\/h4>\s*<p>([\s\S]*?)<\/p>/i);
  const abstract_en = abstractMatch ? abstractMatch[1].replace(/<[^>]+>/g, '').trim() : '';

  return {
    id: `neurips-${year}-${hash}`,
    title,
    authors,
    venue: `NeurIPS ${year}`,
    abstract_en,
    abstract_zh: '',
    pdf_url: `https://proceedings.neurips.cc/paper_files/paper/${year}/hash/${hash}-Paper-Conference.pdf`,
    source: 'NeurIPS',
    year,
  };
}

// ===== Main export =====

const FETCHERS = {
  ICML: fetchICML,
  EMNLP: fetchEMNLP,
  NeurIPS: fetchNeurIPS,
};

async function fetchConference(conference, year = 2024, onProgress) {
  const fetcher = FETCHERS[conference];
  if (!fetcher) throw new Error(`Unknown conference: ${conference}`);
  return fetcher(year, onProgress);
}

module.exports = { fetchConference, FETCHERS };
