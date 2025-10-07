export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const BLOG_ID = process.env.VITE_BLOG_ID || process.env.BLOG_ID || '8967612143410750655';
  
  res.json({
    message: "API is working!",
    timestamp: new Date().toISOString(),
    env: {
      hasApiKey: !!process.env.VITE_BLOGGER_API_KEY,
      hasBlogId: !!process.env.BLOG_ID,
      hasViteBlogId: !!process.env.VITE_BLOG_ID,
      blogId: BLOG_ID,
      nodeEnv: process.env.NODE_ENV
    }
  });
}
