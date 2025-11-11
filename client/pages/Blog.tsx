import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { Skeleton } from '@/components/ui/skeleton';
import Layout from '@/components/layout/Layout';

interface BlogPost {
  id: string;
  slug?: string;
  title: string;
  url: string;
  content: string;
  published: string;
  author: {
    displayName: string;
  };
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch('/api/blog/posts');
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          const text = await response.text();
          console.error('Non-JSON response received:', text.substring(0, 200));
          throw new Error('Server returned non-JSON response');
        }
        
        const data = await response.json();
        setPosts(data.items || []);
        setError(null);
      } catch (err) {
        console.error('Error fetching blog posts:', err);
        setError('Failed to load blog posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  const extractSnippet = (html: string) => {
    // Remove HTML tags and get first 150 characters
    const plainText = html.replace(/<[^>]*>?/gm, '');
    return plainText.length > 150 ? plainText.substring(0, 150) + '...' : plainText;
  };

  const extractImage = (html: string): string | null => {
    const imgRegex = /<img[^>]+src="([^">]+)"/;
    const match = html.match(imgRegex);
    return match ? match[1] : null;
  };

  if (loading) {
    return (
      <Layout>
        <div className="pt-20 pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-center mb-10 gradient-text font-product-sans uppercase">
              OUR BLOG
            </h1>
            <div className="space-y-12">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-stockstrail-bg-light/30 rounded-2xl p-8 backdrop-blur-sm">
                  <Skeleton className="h-40 w-full mb-4 bg-stockstrail-bg" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="pt-20 pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-product-sans text-5xl sm:text-6xl font-normal text-center uppercase gradient-text mb-12">
              OUR BLOG
            </h1>
            <p className="text-red-500 text-lg">{error}</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="pt-20 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-product-sans text-5xl sm:text-6xl font-normal text-center uppercase gradient-text mb-12">
            OUR BLOG
          </h1>
          
          {posts.length === 0 ? (
            <p className="text-white/60 text-center text-lg">No blog posts found.</p>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => {
                const imageUrl = extractImage(post.content);
                const slugFromTitle = (post.title || '')
                  .toLowerCase()
                  .normalize('NFKD')
                  .replace(/[\u0300-\u036f]/g, '')
                  .replace(/[^a-z0-9]+/g, '-')
                  .replace(/^-+|-+$/g, '')
                  .replace(/-{2,}/g, '-');
                // Include the Blogger numeric ID at the end to ensure resolvable fetch in production
                const slug = post.slug || slugFromTitle || 'post';
                const postPath = `/blog/${slug}-${post.id}`;
                return (
                  <article 
                    key={post.id} 
                    className="bg-stockstrail-bg-light/30 backdrop-blur-sm rounded-xl overflow-hidden border border-white/5 hover:border-stockstrail-green-light/30 hover:shadow-[0_0_24px_rgba(0,255,151,0.12)] transition-all duration-500 group"
                  >
                    <div className="flex flex-col lg:flex-row gap-6 p-6 lg:p-6">
                      {/* Image Section */}
                      {imageUrl && (
                        <div className="w-full lg:w-64 flex-shrink-0">
                          <img 
                            src={imageUrl} 
                            alt={post.title}
                            className="w-full h-40 lg:h-44 object-cover rounded-lg border border-white/10 group-hover:scale-[1.02] transition-transform duration-500"
                          />
                        </div>
                      )}
                      
                      {/* Content Section */}
                      <div className="flex-1 flex flex-col justify-between min-w-0">
                        <div>
                          <p className="text-stockstrail-green-light text-xs sm:text-sm uppercase tracking-wider mb-4 font-work-sans font-medium">
                            {post.author?.displayName || 'Building Vendor'}
                          </p>
                          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 font-product-sans leading-snug">
                            <Link 
                              to={postPath}
                              className="text-stockstrail-green-light hover:text-white transition-colors duration-300"
                            >
                              {post.title}
                            </Link>
                          </h2>
                          <p className="text-white/70 text-sm sm:text-sm lg:text-base leading-relaxed mb-4 line-clamp-2 font-work-sans">
                            {extractSnippet(post.content)}
                          </p>
                        </div>
                        
                        {/* Footer with Date and Read More */}
                        <div className="flex items-center justify-between pt-4 border-t border-white/10">
                          <Link 
                            to={postPath}
                            className="inline-flex items-center gap-2 text-stockstrail-green-light hover:text-white font-medium transition-colors duration-300 font-work-sans text-sm sm:text-base group-hover:gap-3"
                          >
                            Read More
                            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                          <p className="text-white/40 text-xs sm:text-xs lg:text-sm font-work-sans">
                            {format(new Date(post.published), 'd MMMM, yyyy')}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
