import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { blogs } from '../../data/blogs';
import ReactMarkdown from 'react-markdown';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find the blog by ID
  const blog = blogs.find(b => b.id === parseInt(id));

  // If blog not found, show error message
  if (!blog) {
    return (
      <section className="py-28 px-4 bg-white dark:bg-gray-900 min-h-screen">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Blog Post Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate('/blog')}
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Back to Blog
          </button>
        </div>
      </section>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section className="py-28 px-4 bg-white dark:bg-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate('/blog')}
          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 mb-8 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </button>

        {/* Blog Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
            <span>{formatDate(blog.date)}</span>
            <span>•</span>
            <span>{blog.readTime || '5 min read'}</span>
            <span>•</span>
            <span>{blog.views || 0} views</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {blog.title}
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            {blog.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {blog.tags?.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Author Info */}
          <div className="flex items-center gap-4 pb-6 border-b border-gray-200 dark:border-gray-700">
            <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-lg">
              {(blog.author || 'A').charAt(0).toUpperCase()}
            </div>
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">
                {blog.author || 'Author'}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Published on {formatDate(blog.date)}
              </p>
            </div>
          </div>
        </div>

        {/* Blog Image */}
        {blog.image && (
          <div className="relative h-96 mb-8 rounded-xl overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Blog Content */}
        <div className="blog-content mb-12 text-gray-700 dark:text-gray-300 leading-relaxed">
          <ReactMarkdown
            components={{
              h1: ({node, ...props}) => <h1 className="text-3xl font-bold mb-4 mt-8 text-gray-900 dark:text-white" {...props} />,
              h2: ({node, ...props}) => <h2 className="text-2xl font-bold mb-3 mt-6 text-gray-900 dark:text-white" {...props} />,
              h3: ({node, ...props}) => <h3 className="text-xl font-semibold mb-2 mt-4 text-gray-900 dark:text-white" {...props} />,
              p: ({node, ...props}) => <p className="mb-4" {...props} />,
              ul: ({node, ...props}) => <ul className="list-disc list-inside mb-4 space-y-2" {...props} />,
              ol: ({node, ...props}) => <ol className="list-decimal list-inside mb-4 space-y-2" {...props} />,
              li: ({node, ...props}) => <li className="ml-4" {...props} />,
              code: ({node, ...props}) => <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm font-mono" {...props} />,
              pre: ({node, ...props}) => <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto mb-4" {...props} />,
              blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-indigo-500 pl-4 italic my-4" {...props} />,
              strong: ({node, ...props}) => <strong className="font-bold text-gray-900 dark:text-white" {...props} />,
              a: ({node, ...props}) => <a className="text-indigo-600 dark:text-indigo-400 hover:underline" {...props} />,
            }}
          >
            {blog.content}
          </ReactMarkdown>
        </div>

        {/* Footer Actions */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/blog')}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to All Posts
            </button>
            
            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <span>Share this post:</span>
              <div className="flex gap-2">
                <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>
                <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </button>
                <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;

