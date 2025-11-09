import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function findClientAssets(): { js: string[]; css: string[] } {
  const assetsPath = path.join(__dirname, '../spa/assets');
  const js: string[] = [];
  const css: string[] = [];

  try {
    if (fs.existsSync(assetsPath)) {
      const files = fs.readdirSync(assetsPath);
      files.forEach(file => {
        if (file.endsWith('.js')) {
          js.push(`/assets/${file}`);
        } else if (file.endsWith('.css')) {
          css.push(`/assets/${file}`);
        }
      });
    }
  } catch (error) {
    console.warn('Could not read assets directory:', error);
  }

  return { js, css };
}

export function generateHTML(reactHtml: string, helmet: any): string {
  // Read the base index.html template
  // In production, it should be in dist/spa, fallback to source if not found
  const indexPath = fs.existsSync(path.join(__dirname, '../spa/index.html'))
    ? path.join(__dirname, '../spa/index.html')
    : path.join(__dirname, '../index.html');
  let html = fs.readFileSync(indexPath, 'utf-8');

  // Find client bundle assets
  const { js, css } = findClientAssets();

  // Replace the root div with server-rendered content
  html = html.replace(
    '<div id="root"></div>',
    `<div id="root">${reactHtml}</div>`
  );

  // Remove the dev script tag if it exists
  html = html.replace(
    /<script type="module" src="\/client\/App\.tsx"><\/script>/g,
    ''
  );

  // Inject CSS files in head
  if (css.length > 0) {
    const cssTags = css.map(href => `    <link rel="stylesheet" crossorigin href="${href}">`).join('\n');
    html = html.replace('</head>', `${cssTags}\n  </head>`);
  }

  // Inject Helmet head content
  if (helmet) {
    // Replace title
    if (helmet.title && typeof helmet.title.toString === 'function') {
      const title = helmet.title.toString();
      if (title) {
        html = html.replace(
          /<title>.*?<\/title>/i,
          title
        );
      }
    }

    // Inject meta tags, links, scripts, styles in head
    const headTags: string[] = [];
    if (helmet.meta && typeof helmet.meta.toString === 'function') headTags.push(helmet.meta.toString());
    if (helmet.link && typeof helmet.link.toString === 'function') headTags.push(helmet.link.toString());
    if (helmet.script && typeof helmet.script.toString === 'function') headTags.push(helmet.script.toString());
    if (helmet.style && typeof helmet.style.toString === 'function') headTags.push(helmet.style.toString());
    if (helmet.noscript && typeof helmet.noscript.toString === 'function') headTags.push(helmet.noscript.toString());

    const headTagsString = headTags.filter(Boolean).join('\n    ');
    if (headTagsString) {
      html = html.replace('</head>', `    ${headTagsString}\n  </head>`);
    }

    // Inject body attributes
    if (helmet.bodyAttributes && typeof helmet.bodyAttributes.toString === 'function') {
      const bodyAttrs = helmet.bodyAttributes.toString();
      if (bodyAttrs) {
        html = html.replace('<body>', `<body ${bodyAttrs}>`);
      }
    }

    // Inject html attributes
    if (helmet.htmlAttributes && typeof helmet.htmlAttributes.toString === 'function') {
      const htmlAttrs = helmet.htmlAttributes.toString();
      if (htmlAttrs) {
        html = html.replace('<html lang="en">', `<html lang="en" ${htmlAttrs}>`);
      }
    }
  }

  // Inject JavaScript bundles before closing body tag
  if (js.length > 0) {
    const jsTags = js.map(src => `    <script type="module" crossorigin src="${src}"></script>`).join('\n');
    html = html.replace('</body>', `${jsTags}\n  </body>`);
  }

  return html;
}
