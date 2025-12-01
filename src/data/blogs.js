import blog1Content from './blogs/blog1.md?raw';

export const blogs = [
  {
    id: 1,
    title: 'Building Scalable React Applications: Best Practices and Patterns',
    excerpt: 'Learn how to structure your React applications for scalability, maintainability, and performance. This comprehensive guide covers component architecture, state management, and modern React patterns.',
    content: blog1Content,
    author: 'Your Name',
    date: '2024-01-15',
    category: 'Web Development',
    tags: ['React', 'JavaScript', 'Frontend', 'Best Practices'],
    image: '/images/js.PNG',
    featured: true,
    popular: true,
    readTime: '8 min read',
    views: 1250
  }
];

export const blogCategories = [
  { id: 'all', name: 'All Posts' },
  { id: 'webdev', name: 'Web Development' },
  { id: 'gamedev', name: 'Game Development' },
  { id: 'tutorial', name: 'Tutorials' },
  { id: 'tips', name: 'Tips & Tricks' }
];

