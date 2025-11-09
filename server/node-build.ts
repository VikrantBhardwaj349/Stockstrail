import path from "path";
import { fileURLToPath } from "url";
import { createServer } from "./index";
import * as express from "express";
import { render } from "./render";
import { generateHTML } from "./html";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = createServer();
const port = process.env.PORT || 3000;

// In production, serve the built client assets (JS, CSS, images, etc.)
const distPath = path.join(__dirname, "../spa");
const assetsPath = path.join(distPath, "assets");

// Serve static assets (JS, CSS, images, etc.)
app.use("/assets", express.static(assetsPath));
app.use(express.static(distPath, { 
  // Don't serve index.html as static - we'll render it with SSR
  index: false 
}));

// SSR: Handle all non-API routes with server-side rendering
app.get("*", async (req, res) => {
  // Don't render for API routes
  if (req.path.startsWith("/api/") || req.path.startsWith("/health")) {
    return res.status(404).json({ error: "API endpoint not found" });
  }

  try {
    // Render React app to HTML
    const { html: reactHtml, helmet } = render(req.url);
    
    // Generate full HTML document
    const fullHtml = generateHTML(reactHtml, helmet);
    
    // Send the rendered HTML
    res.status(200).set({ "Content-Type": "text/html" }).send(fullHtml);
  } catch (error) {
    console.error("SSR Error:", error);
    // Fallback to client-side rendering if SSR fails
    res.sendFile(path.join(distPath, "index.html"));
  }
});

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port} with SSR enabled`);
  console.log(`📱 Frontend: http://localhost:${port}`);
  console.log(`🔧 API: http://localhost:${port}/api`);
});

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("🛑 Received SIGTERM, shutting down gracefully");
  process.exit(0);
});

process.on("SIGINT", () => {
  console.log("🛑 Received SIGINT, shutting down gracefully");
  process.exit(0);
});
