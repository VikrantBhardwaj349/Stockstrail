import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import { getBlogPosts, getBlogPost } from "./routes/blog";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);
  
  // Test endpoint to verify server is working
  app.get("/api/test", (_req, res) => {
    res.json({ 
      message: "Server is working", 
      timestamp: new Date().toISOString(),
      env: {
        hasApiKey: !!process.env.VITE_BLOGGER_API_KEY,
        hasBlogId: !!process.env.BLOG_ID
      }
    });
  });
  
  // Blog routes
  app.get("/api/blog/posts", getBlogPosts);
  app.get("/api/blog/posts/:postId", getBlogPost);

  // Catch-all for undefined API routes
  app.get("/api/*", (req, res) => {
    res.status(404).json({ 
      error: "API endpoint not found", 
      path: req.path,
      method: req.method 
    });
  });

  return app;
}
