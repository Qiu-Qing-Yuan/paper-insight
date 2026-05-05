// Multi-conference paper fetcher
// Sources: OpenReview (ICML, ICLR, NeurIPS), ACL Anthology (EMNLP), NeurIPS Proceedings

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
  const papers = await fetchOpenReviewPapers(
    [`ICML.cc/${year}/Conference/-/Submission`],
    'https://api2.openreview.net',
    'ICML', year, onProgress
  );
  if (onProgress) onProgress(papers.length, papers.length, `ICML ${year}: 完成, 共 ${papers.length} 篇`);
  return papers;
}

// ===== ACL Anthology shared helper =====

async function parseAnthologyVolumes(year, volumes, source, onProgress) {
  const papers = [];

  for (const { vol, venueType } of volumes) {
    const volUrl = `https://aclanthology.org/volumes/${vol}/`;
    if (onProgress) onProgress(papers.length, 0, `${source} ${year}: 正在获取 ${vol}...`);

    let html;
    try {
      html = await fetchUrl(volUrl);
    } catch {
      continue;
    }

    // Split by paper entry blocks
    const entries = html.split(/<div class="d-sm-flex align-items-stretch mb-3">/);
    for (const entry of entries) {
      // Extract paper ID
      const idMatch = entry.match(/href=(?:\/)?(\d{4}\.[a-z]+(?:-[a-z]+)*\.\d+)\//);
      if (!idMatch) continue;
      const id = idMatch[1];
      if (id.endsWith('.0')) continue;

      // Extract title
      const titleMatch = entry.match(/<strong><a[^>]*>([\s\S]*?)<\/a><\/strong>/);
      const title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : '';
      if (!title || title.length <= 2) continue;

      // Extract authors (between </strong><br> and the next <div)
      const authors = [];
      const authorSection = entry.match(/<\/strong><br>([\s\S]*?)(?:<div class="card|<div class="d-sm-flex|$)/);
      if (authorSection) {
        for (const m of authorSection[1].matchAll(/>([^<]+)<\/a>/g)) {
          const name = m[1].trim();
          if (name && !name.includes('|')) authors.push(name);
        }
      }

      // Extract abstract from collapsible section
      const abstractMatch = entry.match(/id=abstract-[^>]*>[\s\S]*?<div class="card-body[^"]*">([\s\S]*?)<\/div>/);
      const abstract_en = abstractMatch ? abstractMatch[1].replace(/<[^>]+>/g, '').trim() : '';

      papers.push({
        id,
        title,
        authors,
        venue: venueType,
        abstract_en,
        abstract_zh: '',
        pdf_url: `https://aclanthology.org/${id}.pdf`,
        source,
        year,
      });
    }
  }

  return papers;
}

// ===== EMNLP via ACL Anthology (with OpenReview fallback) =====

async function fetchEMNLP(year = 2024, onProgress) {
  const volumes = [
    { vol: `${year}.emnlp-main`, venueType: '主会' },
    { vol: `${year}.findings-emnlp`, venueType: 'Findings' },
  ];
  const papers = await parseAnthologyVolumes(year, volumes, 'EMNLP', onProgress);

  // Fallback to OpenReview if Anthology returns nothing (e.g. year not yet indexed)
  if (papers.length === 0) {
    if (onProgress) onProgress(0, 0, `EMNLP ${year}: Anthology 无数据, 尝试 OpenReview...`);
    const orPapers = await fetchOpenReviewPapers(
      [`EMNLP.cc/${year}/Conference/-/Submission`],
      'https://api2.openreview.net',
      'EMNLP', year, onProgress
    );
    papers.push(...orPapers);
  }

  if (onProgress) onProgress(papers.length, papers.length, `EMNLP ${year}: 完成, 共 ${papers.length} 篇`);
  return papers;
}

// ===== ACL via ACL Anthology =====

async function fetchACL(year = 2023, onProgress) {
  const volumes = [
    { vol: `${year}.acl-long`, venueType: '主会' },
    { vol: `${year}.acl-short`, venueType: '主会' },
    { vol: `${year}.findings-acl`, venueType: 'Findings' },
  ];
  const papers = parseAnthologyVolumes(year, volumes, 'ACL', onProgress);
  if (onProgress) onProgress(papers.length, papers.length, `ACL ${year}: 完成, 共 ${papers.length} 篇`);
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

// ===== OpenReview helpers =====

// Extract field value from OpenReview content (handles both v1 and v2 formats)
function fieldValue(c, key) {
  const v = c[key];
  if (!v) return '';
  return typeof v === 'object' && v.value !== undefined ? v.value : v;
}

// Fetch papers from OpenReview (v1 or v2 API)
async function fetchOpenReviewPapers(invitations, baseUrl, source, year, onProgress) {
  const papers = [];

  for (const invitation of invitations) {
    let offset = 0;
    const limit = 100;
    let totalCount = null;

    while (true) {
      const url = `${baseUrl}/notes?invitation=${encodeURIComponent(invitation)}&limit=${limit}&offset=${offset}`;
      if (onProgress) onProgress(papers.length, totalCount || 0, `${source} ${year}: 正在获取 (offset=${offset})...`);

      let data;
      try {
        const raw = await fetchUrl(url);
        data = JSON.parse(raw);
      } catch (e) {
        if (onProgress) onProgress(papers.length, papers.length, `${source} ${year}: 请求失败 - ${e.message}`);
        break;
      }

      if (totalCount === null) totalCount = data.count || 0;
      const notes = data.notes || [];
      if (notes.length === 0) break;

      for (const note of notes) {
        const c = note.content || {};
        if (papers.some(p => p.id === note.id)) continue;
        const rawVenue = fieldValue(c, 'venue');

        // Skip non-accepted papers (withdrawn, rejected, desk-rejected, submitted)
        const lv = rawVenue.toLowerCase();
        if (lv.includes('withdrawn') || lv.includes('rejected') || lv.startsWith('submitted to')) continue;

        // Classify venue type
        const venueType = lv.includes('workshop') ? 'Workshop' : '主会';
        papers.push({
          id: note.id || '',
          title: fieldValue(c, 'title'),
          authors: fieldValue(c, 'authors') || [],
          venue: venueType,
          abstract_en: fieldValue(c, 'abstract'),
          abstract_zh: '',
          pdf_url: fieldValue(c, 'pdf'),
          source,
          year,
        });
      }

      offset += limit;
      if (offset >= totalCount) break;
      await sleep(500);
    }

    if (papers.length > 0) break;
  }

  return papers;
}

// ===== ICLR via OpenReview =====

async function fetchICLR(year = 2024, onProgress) {
  let papers;

  if (year <= 2023) {
    // API v1 for older conferences
    papers = await fetchOpenReviewPapers(
      [`ICLR.cc/${year}/Conference/-/Blind_Submission`],
      'https://api.openreview.net',
      'ICLR', year, onProgress
    );
  } else {
    // API v2 for newer conferences
    papers = await fetchOpenReviewPapers(
      [`ICLR.cc/${year}/Conference/-/Submission`, `ICLR.cc/${year}/Conference/-/Poster`],
      'https://api2.openreview.net',
      'ICLR', year, onProgress
    );
  }

  if (onProgress) onProgress(papers.length, papers.length, `ICLR ${year}: 完成, 共 ${papers.length} 篇`);
  return papers;
}

// ===== NeurIPS via OpenReview =====

async function fetchNeurIPS(year = 2024, onProgress) {
  let papers = await fetchOpenReviewPapers(
    [`NeurIPS.cc/${year}/Conference/-/Submission`, `NeurIPS.cc/${year}/Conference/-/Poster`],
    'https://api2.openreview.net',
    'NeurIPS', year, onProgress
  );

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
    venue: '主会',
    abstract_en,
    abstract_zh: '',
    pdf_url: `https://proceedings.neurips.cc/paper_files/paper/${year}/hash/${hash}-Paper-Conference.pdf`,
    source: 'NeurIPS',
    year,
  };
}

// ===== Main export =====

const FETCHERS = {
  ACL: fetchACL,
  ICML: fetchICML,
  ICLR: fetchICLR,
  EMNLP: fetchEMNLP,
  NeurIPS: fetchNeurIPS,
};

async function fetchConference(conference, year = 2024, onProgress) {
  const fetcher = FETCHERS[conference];
  if (!fetcher) throw new Error(`Unknown conference: ${conference}`);
  return fetcher(year, onProgress);
}

module.exports = { fetchConference, FETCHERS };
