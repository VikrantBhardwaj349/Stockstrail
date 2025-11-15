import { renderToString } from 'react-dom/server';
import React from 'react';
import { AppServer } from './AppServer';
import { fetchBlogPosts, fetchBlogPostBySlug } from './routes/blog';

export async function render(url: string): Promise<{ html: string; helmet: any; initialData?: any }> {
  // Prepare optional initial data for blog listing or post pages
  let initialData: any = null;

  try {
    if (url === '/blog') {
      const posts = await fetchBlogPosts();
      initialData = { posts };
      // Expose to globalThis so React components can read during server render
      (globalThis as any).__INITIAL_DATA__ = initialData;
    } else if (url.startsWith('/blog/')) {
      // Extract the slug segment (strip leading /blog/ and any trailing slashes)
      const slugPart = url.replace(/^\/blog\//, '').replace(/\/+$/g, '').split('/')[0];
      // If slug is in form slug-<id>, remove trailing -<digits> for slug lookup
      const slugForLookup = String(slugPart).replace(/-\d+$/, '');
      const post = await fetchBlogPostBySlug(slugForLookup);
      if (post) {
        initialData = { post };
        (globalThis as any).__INITIAL_DATA__ = initialData;
      }
    }
  } catch (e) {
    // Non-fatal: proceed to render without initial data
    console.warn('Error preparing initial data for render:', e);
    initialData = null;
  }

  // Create context object that will be populated by HelmetProvider
  const helmetContext: { helmet?: any } = {};
  
  const html = renderToString(
    <React.StrictMode>
      <AppServer url={url} helmetContext={helmetContext} />
    </React.StrictMode>
  );

  // Clear the global to avoid leaking data between renders
  try {
    delete (globalThis as any).__INITIAL_DATA__;
  } catch (e) {
    (globalThis as any).__INITIAL_DATA__ = undefined;
  }

  // HelmetProvider populates helmetContext.helmet during render
  return {
    html,
    helmet: helmetContext.helmet || {},
    initialData,
  };
}
