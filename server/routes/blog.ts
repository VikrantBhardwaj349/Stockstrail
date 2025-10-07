import { RequestHandler } from 'express';
import axios from 'axios';

const BLOGGER_API_KEY = 'AIzaSyC5KJgPKNp88WqxGi53WD2JsYsSiZ8l5EU';
const BLOG_ID = '8967612143410750655';
const API_URL = `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts`;

export const getBlogPosts: RequestHandler = async (req, res) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        key: BLOGGER_API_KEY,
        fetchBodies: true,
        fetchImages: true,
        maxResults: 10, // Limit number of posts to fetch
        orderBy: 'published',
        sortOrder: 'DESCENDING',
      },
    });

    const posts = response.data.items.map((post: any) => ({
      id: post.id,
      title: post.title,
      content: post.content,
      url: post.url,
      published: post.published,
      author: {
        displayName: post.author?.displayName || 'Admin',
      },
    }));

    res.json({
      items: posts,
      totalItems: response.data.items?.length || 0,
    });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    res.status(500).json({
      error: 'Failed to fetch blog posts',
      details: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};

export const getBlogPost: RequestHandler = async (req, res) => {
  const { postId } = req.params;
  
  if (!postId) {
    return res.status(400).json({ error: 'Post ID is required' });
  }

  try {
    const response = await axios.get(`${API_URL}/${postId}`, {
      params: {
        key: BLOGGER_API_KEY,
        fetchBody: true,
        fetchImages: true,
      },
    });

    const post = {
      id: response.data.id,
      title: response.data.title,
      content: response.data.content,
      url: response.data.url,
      published: response.data.published,
      author: {
        displayName: response.data.author?.displayName || 'Admin',
      },
    };

    res.json(post);
  } catch (error) {
    console.error(`Error fetching blog post ${postId}:`, error);
    res.status(500).json({
      error: 'Failed to fetch blog post',
      details: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};
