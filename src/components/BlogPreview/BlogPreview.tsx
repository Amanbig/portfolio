"use client";
import { motion } from "motion/react";

type Post = {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  href: string;
  category: string;
};

const recentPosts: Post[] = [
  {
    title: "Building Accessible React Components",
    excerpt: "Learn how to create truly accessible React components with ARIA attributes and keyboard navigation for better user experience.",
    date: "2025-08-01",
    readTime: "5 min read",
    href: "#",
    category: "React",
  },
  {
    title: "Performance Optimization in Next.js",
    excerpt: "Deep dive into optimizing Next.js applications with code splitting, image optimization, and advanced caching strategies.",
    date: "2025-07-15",
    readTime: "7 min read",
    href: "#",
    category: "Next.js",
  },
  {
    title: "Modern CSS Techniques for 2025",
    excerpt: "Explore the latest CSS features including container queries, cascade layers, and advanced grid layouts.",
    date: "2025-07-01",
    readTime: "6 min read",
    href: "#",
    category: "CSS",
  },
];

export default function BlogPreview() {
  return (
    <section id="blog" className="py-20 max-w-6xl mx-auto w-full">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Latest Blog Posts
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-slate-400 max-w-2xl mx-auto"
        >
          Thoughts on development, tutorials, and industry insights
        </motion.p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {recentPosts.map((post, index) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/8 transition-all duration-300"
          >
            {/* Post Header */}
            <div className="p-6 pb-4">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-xs font-medium text-blue-300">
                  {post.category}
                </span>
                <time className="text-sm text-slate-400">{post.date}</time>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                <a href={post.href}>{post.title}</a>
              </h3>
              
              <p className="text-slate-300 line-clamp-3 leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            {/* Post Footer */}
            <div className="px-6 pb-6 flex items-center justify-between">
              <span className="text-sm text-slate-400">{post.readTime}</span>
              <motion.a
                href={post.href}
                whileHover={{ x: 5 }}
                className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 font-medium"
              >
                Read more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </div>
          </motion.article>
        ))}
      </div>

      {/* View All Posts Button */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mt-12"
      >
        <motion.a
          href="/blog"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 hover:bg-white/10 rounded-xl font-medium text-white transition-all duration-300"
        >
          View All Posts
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.a>
      </motion.div>
    </section>
  );
}
