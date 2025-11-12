import React from 'react';
import { StaticRouter } from 'react-router-dom/server';
// Import ESM version directly to ensure named exports are available in SSR
// Default import for compatibility with environments that provide CJS module
// shape at runtime.
import { HelmetProvider } from '../client/lib/helmet-compat.mjs';
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
