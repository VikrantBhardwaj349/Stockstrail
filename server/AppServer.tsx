import React from 'react';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
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
