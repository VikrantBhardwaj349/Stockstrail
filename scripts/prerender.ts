import fs from 'fs';
import path from 'path';
import { render } from '../server/render';
import { fetchBlogPosts } from '../server/routes/blog';

type RouteDef = {
  path: string;
  outDir: string;
};

function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function readIndexTemplate(): string {
  const templatePath = path.join(process.cwd(), 'dist', 'spa', 'index.html');
  if (!fs.existsSync(templatePath)) {
    throw new Error('dist/spa/index.html not found. Build the client first.');
  }
  return fs.readFileSync(templatePath, 'utf-8');
}

function injectSSR(indexHtml: string, reactHtml: string, helmet: any): string {
  let html = indexHtml.replace(
    '<div id="root"></div>',
    `<div id="root">${reactHtml}</div>`
  );

  if (helmet) {
    if (helmet.title?.toString) {
      const title = helmet.title.toString();
      if (title) {
        html = html.replace(/<title>.*?<\/title>/i, title);
      }
    }
    const headTags: string[] = [];
    if (helmet.meta?.toString) headTags.push(helmet.meta.toString());
    if (helmet.link?.toString) headTags.push(helmet.link.toString());
    if (helmet.script?.toString) headTags.push(helmet.script.toString());
    if (helmet.style?.toString) headTags.push(helmet.style.toString());
    if (helmet.noscript?.toString) headTags.push(helmet.noscript.toString());
    const headJoined = headTags.filter(Boolean).join('\n    ');
    if (headJoined) {
      html = html.replace('</head>', `    ${headJoined}\n  </head>`);
    }
  }
  return html;
}

async function prerender() {
  const routes: RouteDef[] = [
    { path: '/', outDir: 'dist/spa' },
    { path: '/services', outDir: 'dist/spa/services' },
    // Pre-render nested service pages so they are served as static HTML and
    // do not trigger serverless functions on Vercel.
    { path: '/services/mutual-funds', outDir: 'dist/spa/services/mutual-funds' },
    { path: '/services/fixed-deposit', outDir: 'dist/spa/services/fixed-deposit' },
    { path: '/services/insurance', outDir: 'dist/spa/services/insurance' },
    { path: '/services/loan', outDir: 'dist/spa/services/loan' },
    { path: '/services/others', outDir: 'dist/spa/services/others' },
    { path: '/about', outDir: 'dist/spa/about' },
    { path: '/contact', outDir: 'dist/spa/contact' },
    { path: '/lets-talk', outDir: 'dist/spa/lets-talk' },
    { path: '/open-demat', outDir: 'dist/spa/open-demat' },
    { path: '/calculators', outDir: 'dist/spa/calculators' },
    { path: '/blog', outDir: 'dist/spa/blog' },
    { path: '/nse-holidays', outDir: 'dist/spa/nse-holidays' },
    { path: '/bse-holidays', outDir: 'dist/spa/bse-holidays' },
    { path: '/terms-and-conditions', outDir: 'dist/spa/terms-and-conditions' },
  ];

  const template = readIndexTemplate();

  // Dynamically include blog post pages into the prerender list so each
  // post gets its own static HTML file (prevents serverless function hits).
  try {
    const posts = await fetchBlogPosts();
    for (const p of posts) {
      const slug = p.slug || (p.title && p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')) || `${p.id}`;
      // Add both `/blog/slug` and `/blog/slug-<id>` variants which the app
      // sometimes uses (client navigates to slug-id format).
      const slugPath = `/blog/${slug}`;
      const slugIdPath = `/blog/${slug}-${p.id}`;
      routes.push({ path: slugPath, outDir: `dist/spa/blog/${slug}` });
      routes.push({ path: slugIdPath, outDir: `dist/spa/blog/${slug}-${p.id}` });
    }
  } catch (e) {
    console.warn('Could not fetch blog posts for prerender:', e);
  }

  for (const r of routes) {
    const res = await render(r.path);
    const { html, helmet, initialData } = res as any;
    let full = injectSSR(template, html, helmet);
    // Inject initial data for prerendered pages
    if (initialData) {
      try {
        const json = JSON.stringify(initialData).replace(/</g, '\\u003c');
        full = full.replace('</body>', `    <script>window.__INITIAL_DATA__ = ${json};</script>\n</body>`);
      } catch (e) {
        console.warn('Failed to serialize initialData for prerender file:', e);
      }
    }
    ensureDir(r.outDir);
    const outPath = path.join(r.outDir, 'index.html');
    fs.writeFileSync(outPath, full, 'utf-8');
    // eslint-disable-next-line no-console
    console.log(`SSG generated: ${r.path} -> ${outPath}`);
  }
}

prerender().catch((err) => {
  // eslint-disable-next-line no-console
  console.error('SSG error:', err);
  process.exit(1);
});


