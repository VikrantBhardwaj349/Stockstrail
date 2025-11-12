import React from 'react';
import { StaticRouter } from 'react-router-dom/server';
// Import ESM version directly to ensure named exports are available in SSR
// Default import for compatibility with environments that provide CJS module
// shape at runtime.
// Use a Node-friendly require to load react-helmet-async on the server side.
// This avoids top-level-await and ESM/CJS interop issues in serverless
// runtimes (Vercel functions).
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const HelmetPkg = require('react-helmet-async');
const HelmetProvider: any = HelmetPkg.HelmetProvider || (HelmetPkg.default && HelmetPkg.default.HelmetProvider) || (HelmetPkg.default) || ((props: any) => props.children);
import { AppContent } from '../client/AppContent';
import { AppRoutes } from '../client/AppRoutes';

interface AppServerProps {
  url: string;
  helmetContext: any;
}

export const AppServer = ({ url, helmetContext }: AppServerProps) => {
  return (
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <AppContent>
          <AppRoutes />
        </AppContent>
      </StaticRouter>
    </HelmetProvider>
  );
};
