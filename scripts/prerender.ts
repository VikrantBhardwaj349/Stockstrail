import fs from 'fs';
import path from 'path';
import { render } from '../server/render';

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
    { path: '/about', outDir: 'dist/spa/about' },
    { path: '/contact', outDir: 'dist/spa/contact' },
    { path: '/lets-talk', outDir: 'dist/spa/lets-talk' },
    { path: '/open-demat', outDir: 'dist/spa/open-demat' },
    { path: '/calculators', outDir: 'dist/spa/calculators' },
    { path: '/blog', outDir: 'dist/spa/blog' },
    { path: '/nse-holidays', outDir: 'dist/spa/nse-holidays' },
    { path: '/bse-holidays', outDir: 'dist/spa/bse-holidays' },
  ];

  const template = readIndexTemplate();

  for (const r of routes) {
    const { html, helmet } = render(r.path);
    const full = injectSSR(template, html, helmet);
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


