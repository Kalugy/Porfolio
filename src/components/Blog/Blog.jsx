import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { blogs, blogCategories } from '../../data/blogs';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const navigate = useNavigate();
  
  // Get the most popular/latest blog
  const featuredBlog = blogs.find(blog => blog.popular || blog.featured) || blogs[0];
  
  const filteredBlogs = selectedCategory === 'all' 
    ? blogs 
    : blogs.filter(blog => blog.category.toLowerCase() === selectedCategory.toLowerCase());

  const handleBlogClick = (blog) => {
    navigate(`/blog/${blog.id}`);
  };

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
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Blog
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about web development, game development, and technology.
          </p>
        </div>

        {/* Featured Blog Section */}
        {featuredBlog && (
          <div className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Popular Post
              </h3>
              <span className="px-3 py-1 bg-indigo-600 text-white text-sm font-medium rounded-full">
                Featured
              </span>
            </div>
            <div
              onClick={() => handleBlogClick(featuredBlog)}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <div className="md:flex">
                <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
                  <img
                    src={featuredBlog.image || '/images/js.PNG'}
                    alt={featuredBlog.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                    <span>{formatDate(featuredBlog.date)}</span>
                    <span>•</span>
                    <span>{featuredBlog.readTime || '5 min read'}</span>
                    <span>•</span>
                    <span>{featuredBlog.views || 0} views</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {featuredBlog.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg leading-relaxed">
                    {featuredBlog.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredBlog.tags?.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline flex items-center gap-2">
                    Read More
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {blogCategories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                selectedCategory === category.id
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category.name}
              <span className="ml-1 text-gray-900 dark:text-gray-100 text-sm">
                ({category.id === 'all' ? blogs.length : blogs.filter(blog => blog.category.toLowerCase() === category.id.toLowerCase()).length})
              </span>
            </button>
          ))}
        </div>

        {/* Blogs Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredBlogs.map((blog) => (
            <div
              key={blog.id}
              onClick={() => handleBlogClick(blog)}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={blog.image || '/images/js.PNG'}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {blog.featured && (
                  <span className="absolute top-4 right-4 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full">
                    Featured
                  </span>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3 text-xs text-gray-500 dark:text-gray-400">
                  <span>{formatDate(blog.date)}</span>
                  <span>•</span>
                  <span>{blog.readTime || '5 min read'}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {blog.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags?.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {blog.views || 0} views
                  </span>
                  <button className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline text-sm flex items-center gap-1">
                    Read
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

