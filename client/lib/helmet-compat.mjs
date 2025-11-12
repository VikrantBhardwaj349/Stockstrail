// Compatibility wrapper for react-helmet-async so both ESM and CJS runtimes
// can access named exports. Uses top-level await (Node 18+) which is supported
// by Vercel and modern Node. This module exports named `Helmet` and
// `HelmetProvider` that map to whichever shape the installed package exposes.

let mod;
try {
  // Prefer the package entry; in ESM-aware bundlers this will resolve to the
  // ESM build. This may throw in some environments which need alternative path.
  mod = await import('react-helmet-async');
} catch (e1) {
  try {
    // Fallback to explicit ESM file
    mod = await import('react-helmet-async/lib/index.esm.js');
  } catch (e2) {
    // Final fallback: try to import the CJS main via createRequire (Node)
    try {
      const { createRequire } = await import('module');
      const require = createRequire(import.meta.url);
      mod = require('react-helmet-async');
    } catch (e3) {
      // If everything fails, expose no-op placeholders
      mod = {};
    }
  }
}

const Helmet = mod.Helmet || (mod.default && mod.default.Helmet) || mod.default || (() => null);
const HelmetProvider = mod.HelmetProvider || (mod.default && mod.default.HelmetProvider) || mod.default || ((props) => props.children);

export { Helmet, HelmetProvider };
