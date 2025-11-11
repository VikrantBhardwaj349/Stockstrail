import express from 'express';
import serverless from 'serverless-http';
import fs from 'fs';
import path from 'path';
import { render } from '../server/render';

// Create a lightweight Express app for SSR only (avoid duplicating /api routes)
const app = express();

const STATIC_PATHS = new Set([
  '/favicon.ico',
  '/favicon.svg',
  '/robots.txt',
  '/sitemap.xml',
  '/index.html',
]);

function readIndexHtml(): string {
  const candidates = [
    path.join(process.cwd(), 'dist/spa/index.html'),
    path.join(process.cwd(), 'index.html'),
  ];
  for (const candidate of candidates) {
    try {
      if (fs.existsSync(candidate)) {
        return fs.readFileSync(candidate, 'utf-8');
      }
    } catch {
      // continue
    }
  }
  throw new Error('index.html not found in dist/spa. Ensure client build output is deployed.');
}

function injectSSR(indexHtml: string, reactHtml: string, helmet: any): string {
  let html = indexHtml.replace(
    '<div id="root"></div>',
    `<div id="root">${reactHtml}</div>`
  );

  if (helmet) {
    if (helmet.title && typeof helmet.title.toString === 'function') {
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

// SSR handler for all app routes (assets are served by Vercel statics)
app.get('*', async (req, res) => {
  try {
    // Ignore Next/Vercel internal or asset routes
    if (req.path.startsWith('/assets/') || req.path.startsWith('/api/')) {
      return res.status(404).end();
    }
    if (STATIC_PATHS.has(req.path)) {
      return res.status(404).end();
    }
    const indexHtml = readIndexHtml();
    const { html: reactHtml, helmet } = render(req.url);
    const full = injectSSR(indexHtml, reactHtml, helmet);
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.status(200).send(full);
  } catch (err) {
    console.error('SSR function error:', err);
    // Fallback to static HTML if SSR fails
    try {
      const fallback = readIndexHtml();
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.status(200).send(fallback);
    } catch {
      res.status(500).send('SSR failed');
    }
  }
});

const handler = serverless(app);

export default async function ssr(req: any, res: any) {
  return handler(req as any, res as any);
}


