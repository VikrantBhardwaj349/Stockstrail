import { RequestHandler } from 'express';
import axios from 'axios';

const BLOGGER_API_KEY = process.env.VITE_BLOGGER_API_KEY || process.env.BLOGGER_API_KEY || 'AIzaSyC5KJgPKNp88WqxGi53WD2JsYsSiZ8l5EU';
const BLOG_ID = process.env.BLOG_ID || '8967612143410750655';
const API_URL = `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts`;

function slugify(input: string): string {
  return (input || '')
    .toString()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-');
}

// Sample blog posts for fallback
const samplePosts = [
  {
    id: 'sample-1',
    title: 'Understanding Mutual Funds: A Beginner\'s Guide',
    content: `
      <h2>What are Mutual Funds?</h2>
      <p>Mutual funds are investment vehicles that pool money from multiple investors to invest in a diversified portfolio of stocks, bonds, or other securities. They are managed by professional fund managers who make investment decisions on behalf of the investors.</p>
      
      <h2>Types of Mutual Funds</h2>
      <h3>1. Equity Funds</h3>
      <p>These funds invest primarily in stocks and are suitable for investors with a higher risk tolerance and long-term investment horizon.</p>
      
      <h3>2. Debt Funds</h3>
      <p>Debt funds invest in fixed-income securities like government bonds, corporate bonds, and money market instruments. They are relatively safer than equity funds.</p>
      
      <h3>3. Hybrid Funds</h3>
      <p>These funds invest in both equity and debt instruments, providing a balanced approach to investing.</p>
      
      <h2>Benefits of Mutual Funds</h2>
      <ul>
        <li><strong>Diversification:</strong> Reduces risk by spreading investments across multiple securities</li>
        <li><strong>Professional Management:</strong> Expert fund managers handle investment decisions</li>
        <li><strong>Liquidity:</strong> Easy to buy and sell mutual fund units</li>
        <li><strong>Affordability:</strong> Start investing with as little as ₹500</li>
        <li><strong>Tax Benefits:</strong> ELSS funds offer tax deductions under Section 80C</li>
      </ul>
      
      <h2>How to Get Started</h2>
      <p>Getting started with mutual funds is simple:</p>
      <ol>
        <li>Complete your KYC (Know Your Customer) process</li>
        <li>Choose the right mutual fund based on your goals and risk tolerance</li>
        <li>Start with a Systematic Investment Plan (SIP) for regular investing</li>
        <li>Monitor your investments regularly and review your portfolio</li>
      </ol>
      
      <p>Remember, mutual funds are subject to market risks. It's important to invest according to your financial goals and risk appetite.</p>
    `,
    url: '#',
    published: new Date().toISOString(),
    author: { displayName: 'Stockstrail Team' }
  },
  {
    id: 'sample-2',
    title: 'Fixed Deposits vs Mutual Funds: Which is Better?',
    content: `
      <h2>Understanding Fixed Deposits</h2>
      <p>Fixed Deposits (FDs) are investment instruments offered by banks and NBFCs where you deposit a lump sum amount for a fixed period at a predetermined interest rate.</p>
      
      <h3>Advantages of Fixed Deposits:</h3>
      <ul>
        <li><strong>Guaranteed Returns:</strong> You know exactly how much you'll earn</li>
        <li><strong>Capital Protection:</strong> Your principal amount is safe</li>
        <li><strong>Flexible Tenure:</strong> Choose from 7 days to 10 years</li>
        <li><strong>Regular Income:</strong> Option for monthly/quarterly interest payouts</li>
      </ul>
      
      <h2>Understanding Mutual Funds</h2>
      <p>Mutual funds are professionally managed investment schemes that pool money from multiple investors to invest in various securities.</p>
      
      <h3>Advantages of Mutual Funds:</h3>
      <ul>
        <li><strong>Higher Growth Potential:</strong> Can generate better returns over the long term</li>
        <li><strong>Diversification:</strong> Reduces risk through portfolio diversification</li>
        <li><strong>Professional Management:</strong> Expert fund managers handle investments</li>
        <li><strong>Flexibility:</strong> Easy to start, stop, or modify investments</li>
      </ul>
      
      <h2>Which is Better for You?</h2>
      <p>The choice between FDs and mutual funds depends on several factors:</p>
      
      <h3>Choose Fixed Deposits if:</h3>
      <ul>
        <li>You have a low risk tolerance</li>
        <li>You need guaranteed returns</li>
        <li>You have a short-term investment horizon (1-3 years)</li>
        <li>You want to preserve capital</li>
      </ul>
      
      <h3>Choose Mutual Funds if:</h3>
      <ul>
        <li>You can tolerate market volatility</li>
        <li>You have a long-term investment horizon (5+ years)</li>
        <li>You want to build wealth over time</li>
        <li>You understand that returns are not guaranteed</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Both FDs and mutual funds have their place in a well-balanced investment portfolio. Consider your financial goals, risk tolerance, and investment timeline before making a decision. Many investors use both instruments to create a diversified investment strategy.</p>
    `,
    url: '#',
    published: new Date(Date.now() - 86400000).toISOString(),
    author: { displayName: 'Financial Advisor' }
  },
  {
    id: 'sample-3',
    title: 'Tax-Saving Investment Options for FY 2024-25',
    content: `
      <h2>Tax-Saving Investment Options Under Section 80C</h2>
      <p>Section 80C of the Income Tax Act allows you to claim deductions up to ₹1.5 lakh per financial year. Here are the most popular tax-saving investment options:</p>
      
      <h3>1. ELSS (Equity Linked Savings Scheme)</h3>
      <p>ELSS mutual funds are one of the most popular tax-saving options. They offer:</p>
      <ul>
        <li>Tax deduction up to ₹1.5 lakh under Section 80C</li>
        <li>3-year lock-in period (shortest among 80C options)</li>
        <li>Potential for higher returns through equity exposure</li>
        <li>Professional fund management</li>
      </ul>
      
      <h3>2. Public Provident Fund (PPF)</h3>
      <p>PPF is a government-backed savings scheme with:</p>
      <ul>
        <li>15-year lock-in period</li>
        <li>Guaranteed returns (currently around 7.1%)</li>
        <li>Tax-free maturity proceeds</li>
        <li>Loan facility available from 3rd year</li>
      </ul>
      
      <h3>3. National Pension System (NPS)</h3>
      <p>NPS offers additional tax benefits:</p>
      <ul>
        <li>₹1.5 lakh deduction under Section 80C</li>
        <li>Additional ₹50,000 deduction under Section 80CCD(1B)</li>
        <li>Flexible contribution options</li>
        <li>Retirement-focused investment</li>
      </ul>
      
      <h2>Other Tax-Saving Options</h2>
      
      <h3>Section 80D - Health Insurance</h3>
      <p>Premium paid for health insurance for self, spouse, and children:</p>
      <ul>
        <li>Up to ₹25,000 (₹50,000 for senior citizens)</li>
        <li>Additional ₹25,000 for parents' health insurance</li>
      </ul>
      
      <h3>Section 80E - Education Loan Interest</h3>
      <p>Interest paid on education loans for higher education is fully deductible without any upper limit.</p>
      
      <h3>Section 80G - Donations</h3>
      <p>Donations to specified charitable institutions are eligible for deductions (50% or 100% depending on the institution).</p>
      
      <h2>Planning Your Tax-Saving Investments</h2>
      <p>Here's how to plan your tax-saving investments effectively:</p>
      <ol>
        <li><strong>Start Early:</strong> Begin investing at the start of the financial year</li>
        <li><strong>Diversify:</strong> Don't put all your money in one instrument</li>
        <li><strong>Consider Your Goals:</strong> Align investments with your financial objectives</li>
        <li><strong>Review Regularly:</strong> Monitor and adjust your portfolio as needed</li>
      </ol>
      
      <h2>Important Deadlines</h2>
      <p>Remember these key dates for FY 2024-25:</p>
      <ul>
        <li><strong>March 31, 2025:</strong> Last date to make tax-saving investments</li>
        <li><strong>July 31, 2025:</strong> Last date to file ITR for FY 2024-25</li>
      </ul>
      
      <p>Start planning your tax-saving investments early to maximize your deductions and build wealth for the future.</p>
    `,
    url: '#',
    published: new Date(Date.now() - 172800000).toISOString(),
    author: { displayName: 'Tax Expert' }
  }
];

export const getBlogPosts: RequestHandler = async (req, res) => {
  try {
    console.log('Attempting to fetch blog posts from Blogger API...');
    console.log('API Key available:', !!BLOGGER_API_KEY);
    console.log('Blog ID:', BLOG_ID);
    const response = await axios.get(API_URL, {
      params: {
        key: BLOGGER_API_KEY,
        fetchBodies: true,
        fetchImages: true,
        maxResults: 10, // Limit number of posts to fetch
        orderBy: 'published',
        sortOrder: 'DESCENDING',
      },
      timeout: 10000, // 10 second timeout
    });

    const posts = response.data.items.map((post: any) => {
      const title = post.title || '';
      return {
        id: post.id,
        slug: slugify(title),
        title,
        content: post.content,
        url: post.url,
        published: post.published,
        author: {
          displayName: post.author?.displayName || 'Admin',
        },
      };
    });

    console.log(`Successfully fetched ${posts.length} blog posts from Blogger API`);
    res.json({
      items: posts,
      totalItems: response.data.items?.length || 0,
    });
  } catch (error) {
    console.error('Error fetching blog posts from Blogger API:', error);
    console.log('Falling back to sample blog posts...');
    
    // Log more details about the error
    if (axios.isAxiosError(error)) {
      console.error('Axios error details:', {
        status: error.response?.status,
        statusText: error.response?.statusText,
        data: error.response?.data,
        url: error.config?.url
      });
    }
    
    // Return sample posts instead of error
    res.json({
      items: samplePosts.map((p) => ({ ...p, slug: slugify(p.title) })),
      totalItems: samplePosts.length,
      fallback: true, // Flag to indicate this is fallback data
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

export const getBlogPost: RequestHandler = async (req, res) => {
  const { postId } = req.params;
  
  if (!postId) {
    return res.status(400).json({ error: 'Post ID is required' });
  }

  // Check if it's a sample post first
  const samplePost = samplePosts.find(post => post.id === postId);
  if (samplePost) {
    console.log(`Returning sample post: ${postId}`);
    return res.json({ ...samplePost, slug: slugify(samplePost.title) });
  }

  try {
    console.log(`Attempting to fetch blog post ${postId} from Blogger API...`);
    const response = await axios.get(`${API_URL}/${postId}`, {
      params: {
        key: BLOGGER_API_KEY,
        fetchBody: true,
        fetchImages: true,
      },
      timeout: 10000, // 10 second timeout
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

    console.log(`Successfully fetched blog post ${postId} from Blogger API`);
    res.json({ ...post, slug: slugify(post.title) });
  } catch (error) {
    console.error(`Error fetching blog post ${postId} from Blogger API:`, error);
    res.status(404).json({
      error: 'Blog post not found',
      details: 'The requested blog post could not be found or the API is unavailable.',
    });
  }
};

export const getBlogPostBySlug: RequestHandler = async (req, res) => {
  const { slug } = req.params;
  if (!slug) {
    return res.status(400).json({ error: 'Slug is required' });
  }

  // Check sample posts
  const sample = samplePosts.find(p => slugify(p.title) === slug);
  if (sample) {
    return res.json({ ...sample, slug });
  }

  try {
    // Strategy 1: Blogger search API
    const q = slug.replace(/-/g, ' ');
    const searchUrl = `${API_URL}/search`;
    const searchResp = await axios.get(searchUrl, {
      params: {
        key: BLOGGER_API_KEY,
        q,
        fetchBodies: true,
        fetchImages: true,
        orderBy: 'published',
      },
      timeout: 10000,
    });

    let items: any[] = searchResp.data.items || [];

    // Strategy 2: If search empty, fetch recent posts and try to match
    if (!items.length) {
      const listResp = await axios.get(API_URL, {
        params: {
          key: BLOGGER_API_KEY,
          fetchBodies: true,
          fetchImages: true,
          maxResults: 50,
          orderBy: 'published',
          sortOrder: 'DESCENDING',
        },
        timeout: 10000,
      });
      items = listResp.data.items || [];
    }

    const match = items.find((it) => slugify(it.title || '') === slug) || items[0];
    if (!match) {
      return res.status(404).json({ error: 'Post not found' });
    }
    const post = {
      id: match.id,
      slug: slugify(match.title || ''),
      title: match.title || '',
      content: match.content || '',
      url: match.url,
      published: match.published,
      author: {
        displayName: match.author?.displayName || 'Admin',
      },
    };
    return res.json(post);
  } catch (error) {
    console.error('Error fetching post by slug:', error);
    return res.status(404).json({ error: 'Post not found' });
  }
};
