import { renderToString } from 'react-dom/server';
import React from 'react';
import { AppServer } from './AppServer';

export function render(url: string): { html: string; helmet: any } {
  // Create context object that will be populated by HelmetProvider
  const helmetContext: { helmet?: any } = {};
  
  const html = renderToString(
    <React.StrictMode>
      <AppServer url={url} helmetContext={helmetContext} />
    </React.StrictMode>
  );

  // HelmetProvider populates helmetContext.helmet during render
  return {
    html,
    helmet: helmetContext.helmet || {},
  };
}
