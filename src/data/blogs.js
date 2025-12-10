import blog1Content from './blogs/blog1.md?raw';
import expoAppGuideContent from './blogs/blog2.md?raw';
import growvynContent from './blogs/blog3.md?raw';

export const blogCategories = [
  { id: 'all', name: 'All Posts' },
  { id: 'webdev', name: 'Web Development' },
  { id: 'gamedev', name: 'Game Development' },
  { id: 'tutorial', name: 'Tutorials' },
  { id: 'tips', name: 'Tips & Tricks' }
];



export const blogs = [
  {
    id: 1,
    title: 'Building Scalable React Applications: Best Practices and Patterns',
    excerpt: 'Learn how to structure your React applications for scalability, maintainability, and performance. This comprehensive guide covers component architecture, state management, and modern React patterns.',
    content: blog1Content,
    author: 'Julian',
    date: '2025-12-10',
    category: blogCategories[0].name,
    tags: ['React', 'JavaScript', 'Frontend', 'Best Practices'],
    image: '/images/js.PNG',
    readTime: '8 min read',
    views: 1250
  },
  {
    id: 2,
    title: 'Create and Publish a Mobile App Using Expo: Step-by-Step Guide',
    excerpt: 'A simple guide to building a mobile app with Expo and publishing it to the Google Play Store. No native Android configuration required.',
    content: expoAppGuideContent,
    author: 'Julian',
    date: '2025-12-10',
    category: blogCategories[1].name,
    tags: ['Expo', 'React Native', 'Mobile Apps', 'Play Store'],
    image: '/images/expoblog.png',
    featured: false,
    popular: false,
    readTime: '6 min read',
    views: 100
  },
  {
    id: 3,
    title: 'How Growvyn Helps You Become the Best Version of Yourself',
    excerpt: 'Growvyn is a comprehensive self-development platform designed to help users track and improve their personal growth journey. The platform includes features for goal setting, progress tracking, and community engagement.',
    content: growvynContent,
    author: 'Julian',
    date: '2025-12-10',
    category: blogCategories[2].name,
    tags: ['Growvyn', 'Self Development', 'Personal Growth'],
    image: '/images/growvyn.PNG',
    featured: true,
    popular: true,
    readTime: '5 min read',
    views: 250
  }
  
];


