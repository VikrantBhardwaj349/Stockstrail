import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { format } from 'date-fns';
import { Skeleton } from '@/components/ui/skeleton';
import { ChevronLeft } from 'lucide-react';
import Layout from '@/components/layout/Layout';

interface Post {
  id: string;
  title: string;
  content: string;
  published: string;
  author: {
    displayName: string;
  };
}

export default function BlogPost() {
  const { postId } = useParams<{ postId: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!postId) return;

    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/blog/posts/${postId}`);
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          const text = await response.text();
          console.error('Non-JSON response received for post:', text.substring(0, 200));
          throw new Error('Server returned non-JSON response');
        }
        
        const data = await response.json();
        setPost(data);
        setError(null);
      } catch (err) {
        console.error(`Error fetching post ${postId}:`, err);
        
        // If it's a real blog post ID (not sample), show a different error message
        if (!postId.startsWith('sample-')) {
          setError('This blog post is currently unavailable. Please try again later or browse other posts.');
        } else {
          setError('Blog post not found. It may have been moved or deleted.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  if (loading) {
    return (
      <Layout>
        <div className="pt-20 pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <Skeleton className="h-20 w-3/4 mx-auto mb-12 bg-stockstrail-bg-light/30" />
            <Skeleton className="h-6 w-1/2 mx-auto mb-16 bg-stockstrail-bg-light/30" />
            <Skeleton className="h-4 w-full mb-4 bg-stockstrail-bg-light/30" />
            <Skeleton className="h-4 w-full mb-4 bg-stockstrail-bg-light/30" />
            <Skeleton className="h-4 w-5/6 mb-4 bg-stockstrail-bg-light/30" />
          </div>
        </div>
      </Layout>
    );
  }

  if (error || !post) {
    return (
      <Layout>
        <div className="pt-20 pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-normal mb-6 gradient-text font-product-sans uppercase">Post Not Found</h1>
            <p className="text-red-500 mb-10 text-lg">{error}</p>
            <Link to="/blog" className="inline-flex items-center text-stockstrail-green-light hover:text-white transition-colors duration-300 text-lg">
              <ChevronLeft className="w-5 h-5 mr-2" />
              Back to Blog
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="pt-20 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-white/50 hover:text-stockstrail-green-light mb-16 transition-colors duration-300 font-work-sans text-sm sm:text-base group"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to All Posts
          </Link>
          
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 max-w-2xl mx-auto border border-stockstrail-green-light/20 hover:bg-white/10  hover:border-stockstrail-green-light/40 hover:shadow-[0_0_30px_rgba(0,255,151,0.2)] transition-all duration-500">
            <article className="space-y-10 text-white">
              {/* Title */}
              <div className="text-center space-y-8">
                <h1 className="font-product-sans text-3xl sm:text-4xl lg:text-4xl font-normal uppercase gradient-text leading-tight">
                  {post.title}
                </h1>
                {/* Author and Date */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm sm:text-base pb-8 border-b border-white/10 max-w-3xl mx-auto">
                  <p className="text-stockstrail-green-light font-work-sans uppercase tracking-wider font-medium">
                    {post.author?.displayName || 'Building Vendor'}
                  </p>
                  <span className="hidden sm:block text-white/30">•</span>
                  <p className="text-white/50 font-work-sans">
                    {format(new Date(post.published), 'd MMMM, yyyy')}
                  </p>
                </div>
              </div>
              {/* Content */}
              <div 
                className="blog-content prose prose-sm sm:prose-base lg:prose-lg mx-auto w-full"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>
          </div>
        </div>
      </div>
      
      <style>{`
        .blog-content {
          color: rgba(255, 255, 255, 0.85);
          font-family: 'Work Sans', system-ui, sans-serif;
          line-height: 1.85;
          max-width: none;
        }
        
        .blog-content p {
          margin-bottom: 1.25rem;
          line-height: 1.85;
          color: rgba(255, 255, 255, 0.85);
          font-size: 1.0625rem;
        }
        
        @media (max-width: 640px) {
          .blog-content p {
            font-size: 0.9375rem;
            margin-bottom: 1.25rem;
          }
        }
        
        .blog-content h1,
        .blog-content h2,
        .blog-content h3,
        .blog-content h4,
        .blog-content h5,
        .blog-content h6 {
          /* Use exact same gradient as site's .gradient-text class */
          background: linear-gradient(42deg, #00FF97 0%, #007D42 70.81%);
          -webkit-background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
          background-clip: text !important;
          font-family: 'Product Sans', system-ui, sans-serif;
          font-weight: 600;
          font-size: 1.5rem;
          margin-top: 2rem;
          margin-bottom: 1rem;
          line-height: 1.3;
        }

        /* Override Blogger inline heading colors and ensure gradient shows */
        .blog-content h1[style],
        .blog-content h2[style],
        .blog-content h3[style],
        .blog-content h4[style],
        .blog-content h5[style],
        .blog-content h6[style] {
          color: transparent !important;
          background: linear-gradient(42deg, #00FF97 0%, #007D42 70.81%) !important;
          -webkit-background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
          background-clip: text !important;
        }

        /* Force gradient on all heading elements regardless of inline styles */
        .blog-content h1 *,
        .blog-content h2 *,
        .blog-content h3 *,
        .blog-content h4 *,
        .blog-content h5 *,
        .blog-content h6 * {
          color: transparent !important;
          background: linear-gradient(42deg, #00FF97 0%, #007D42 70.81%) !important;
          -webkit-background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
          background-clip: text !important;
        }

        /* Override any numbered list headings */
        .blog-content ol h1,
        .blog-content ol h2,
        .blog-content ol h3,
        .blog-content ol h4,
        .blog-content ol h5,
        .blog-content ol h6,
        .blog-content ul h1,
        .blog-content ul h2,
        .blog-content ul h3,
        .blog-content ul h4,
        .blog-content ul h5,
        .blog-content ul h6 {
          color: transparent !important;
          background: linear-gradient(42deg, #00FF97 0%, #007D42 70.81%) !important;
          -webkit-background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
          background-clip: text !important;
          font-family: 'Product Sans', system-ui, sans-serif !important;
          font-weight: 600 !important;
          font-size: 1.5rem !important;
        }

        /* Ensure any nested elements in headings get the gradient */
        .blog-content h1 span,
        .blog-content h2 span,
        .blog-content h3 span,
        .blog-content h4 span,
        .blog-content h5 span,
        .blog-content h6 span,
        .blog-content h1 strong,
        .blog-content h2 strong,
        .blog-content h3 strong,
        .blog-content h4 strong,
        .blog-content h5 strong,
        .blog-content h6 strong {
          color: transparent !important;
          background: linear-gradient(42deg, #00FF97 0%, #007D42 70.81%) !important;
          -webkit-background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
          background-clip: text !important;
        }
        
        @media (max-width: 640px) {
          .blog-content h1,
          .blog-content h2,
          .blog-content h3,
          .blog-content h4,
          .blog-content h5,
          .blog-content h6 {
            font-size: 1.25rem;
            margin-top: 1.5rem;
          }
        }
        
        .blog-content a {
          color: #00FF97;
          text-decoration: underline;
          text-underline-offset: 3px;
          transition: color 0.3s ease;
        }
        
        .blog-content a:hover {
          color: #00D873;
        }
        
        .blog-content hr {
          border: none;
          border-top: 1px solid rgba(255,255,255,0.08);
          margin: 2rem 0;
        }
        
        .blog-content ul,
        .blog-content ol {
          margin-left: 1.25rem;
          margin-bottom: 1.25rem;
          color: rgba(255, 255, 255, 0.85);
        }
        
        .blog-content li {
          margin-bottom: 0.5rem;
          line-height: 1.7;
        }
        
        @media (max-width: 640px) {
          .blog-content ul,
          .blog-content ol {
            margin-left: 1.25rem;
          }
        }
        
        .blog-content img {
          max-width: 100%;
          height: auto;
          border-radius: 0.75rem;
          margin: 2rem auto;
          display: block;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        @media (max-width: 640px) {
          .blog-content img {
            margin: 1.5rem auto;
            border-radius: 0.5rem;
          }
        }
        
        .blog-content blockquote {
          border-left: 4px solid #00FF97;
          padding-left: 1.25rem;
          margin: 2rem 0;
          font-style: italic;
          color: rgba(255, 255, 255, 0.75);
          background: rgba(0, 255, 151, 0.03);
          padding: 1.25rem;
          border-radius: 0.5rem;
        }
        
        @media (max-width: 640px) {
          .blog-content blockquote {
            padding: 1rem;
            padding-left: 1rem;
            margin: 1.5rem 0;
          }
        }
        
        .blog-content code {
          background-color: rgba(0, 255, 151, 0.1);
          padding: 0.25rem 0.5rem;
          border-radius: 0.375rem;
          font-family: 'Courier New', monospace;
          color: #00FF97;
          font-size: 0.9em;
        }
        
        .blog-content pre {
          background-color: rgba(0, 255, 151, 0.05);
          padding: 1.25rem;
          border-radius: 0.5rem;
          overflow-x: auto;
          margin: 1.75rem 0;
          border: 1px solid rgba(0, 255, 151, 0.1);
        }
        
        @media (max-width: 640px) {
          .blog-content pre {
            padding: 1rem;
            margin: 1.25rem 0;
          }
        }
        
        .blog-content pre code {
          background-color: transparent;
          padding: 0;
          border: none;
        }
        
        .blog-content strong {
          color: rgba(255, 255, 255, 0.95);
          font-weight: 600;
        }
        
        .blog-content em {
          color: rgba(255, 255, 255, 0.8);
        }
        
        .blog-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 1.75rem 0;
        }
        
        .blog-content th,
        .blog-content td {
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 0.625rem 0.75rem;
          text-align: left;
        }
        
        .blog-content th {
          background-color: rgba(0, 255, 151, 0.1);
          color: #00FF97;
          font-weight: 600;
        }
        
        /* Ensure Blogger inline styles don't break theme spacing */
        .blog-content *:first-child { margin-top: 0 !important; }
        .blog-content h1:first-child,
        .blog-content h2:first-child,
        .blog-content h3:first-child { margin-top: 0 !important; }
      `}</style>
    </Layout>
  );
}