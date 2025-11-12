import "./global.css";

import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// Import the ESM build directly to avoid CJS/ESM interop issues on some hosts
// Use default import for compatibility with CJS runtimes; fall back to named
// export if present.
import { HelmetProvider } from './lib/helmet-compat.mjs';
import { AppContent } from "./AppContent";
import { AppRoutes } from "./AppRoutes";

const App = () => (
  <HelmetProvider>
    <BrowserRouter>
      <AppContent>
        <AppRoutes />
      </AppContent>
    </BrowserRouter>
  </HelmetProvider>
);

// Check if we're doing SSR hydration or client-side rendering
const container = document.getElementById("root")!;
const initialChildren = (
  <App />
);

if (container.hasChildNodes()) {
  // Hydrate if server-rendered HTML exists
  hydrateRoot(container, initialChildren);
} else {
  // Client-side only rendering
  createRoot(container).render(initialChildren);
}
