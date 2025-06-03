import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const projects = [
  // Web Applications
  {
    title: 'Growvyn',
    description: 'An innovative platform for self development! Open for Beta Testers!. Click Start on the website, and welcome to the beta program!',
    category: 'webapp',
    stack: ['React Native', 'Javascript', 'Tailwind CSS', 'Node.js', 'Database'],
    image: '/images/growvyn.PNG',
    demo: 'https://growvyn.com',
    featured: true
  },
  {
    title: 'Daily JS Challenges',
    description: 'A platform designed for JavaScript enthusiasts to test and improve their skills through daily challenges.',
    category: 'webapp',
    stack: ['React', 'CSS', 'Tailwind CSS'],
    image: '/images/js.PNG',
    demo: 'https://dailyjschallenges.com',
    github: 'https://github.com/yourusername/dailyjs',
    featured: true
  },
  {
    title: 'Skeleton',
    description: 'A completed project focused on interactively learning bones.',
    category: 'webapp',
    stack: ['React', 'Unity','C#', 'Tailwind CSS'],
    image: '/images/bodypuzzle.PNG',
    demo: 'https://skeleton-amber.vercel.app/',
    github: 'https://github.com/yourusername/skeleton',
    featured: true
  },
  {
    title: 'PorfolioV0',
    description: 'A completed project focused on interactively learning website design.',
    category: 'webapp',
    stack: ['React', 'Three.js', 'WebGL', 'Tailwind CSS'],
    image: '/images/p2.PNG',
    demo: 'https://kalugy.netlify.app/',
    github: 'https://github.com/Kalugy/kalugy-projects',
    featured: true
  },
  {
    title: 'Maratona de Programação',
    description: 'Short idea of how to prevent flooding in a city.',
    category: 'webapp',
    stack: ['React', 'Tailwind', 'Tailwind CSS', 'Unity'],
    image: '/images/p4.PNG',
    demo: 'https://maratonapucrs.vercel.app/',
    github: 'https://github.com/Kalugy/maratonapucrs',
    featured: true
  },
  {
    title: 'FireChat',
    description: 'A chat application built with Angular and Firebase.',
    category: 'webapp',
    stack: ['Angular', 'Firebase', 'Tailwind CSS'],
    image: '/images/p3.PNG',
    demo: 'https://firechatangular-d98bd.web.app/',
    github: 'https://github.com/Kalugy/ClienteServidor/tree/master/firechat',
    featured: true
  },
  {
    title: 'Tuvoto',
    description: 'A voting application built with PHP, Laravel, CSS, HTML, and JavaScript.',
    category: 'webapp',
    stack: ['PHP', 'Laravel', 'CSS', 'HTML', 'JavaScript'],
    image: '/images/tuvoto.PNG',
    github: 'https://github.com/Kalugy/tuvoto',
    featured: true
  },
  // Games
  {
    title: 'Unity Essentials',
    description: 'A collection of Unity projects and tutorials for beginners.',
    category: 'game',
    stack: ['Unity', 'C#', 'Game Development'],
    image: '/images/unityessentials.PNG',
    demo: 'https://play.unity.com/en/games/b684c870-b78c-45ae-bc35-a014e2e729b5/webgl-builds-julian-002',
    featured: true
  },
  {
    title: 'Bird vs Monster',
    description: 'Little game made in Unity featuring a bird character fighting against monsters.',
    category: 'game',
    stack: ['Unity', 'C#', 'Game Development'],
    image: '/images/birdmonster.PNG',
    demo: 'https://www.youtube.com/watch?v=uSssNm4DRb4',
    featured: false
  },
  {
    title: 'Game Dungeon',
    description: 'Unity game with 5 levels featuring NPCs, enemies, bosses, money system, game save, experience points, weapon levels, and health fountains.',
    category: 'game',
    stack: ['Unity', 'C#', 'Game Development'],
    image: '/images/gamedungeon.PNG',
    demo: 'https://www.youtube.com/watch?v=mDseufL1OCk&t',
    featured: true
  },
  {
    title: 'Rock Paper Scissors',
    description: 'Classic Rock Paper Scissors game implemented in Unity with modern UI and animations.',
    category: 'game',
    stack: ['Unity', 'C#', 'Game Development'],
    image: '/images/rockpaperscissors.PNG',
    demo: 'https://www.youtube.com/watch?v=mqIj8xxPu8M',
    featured: false
  },
  {
    title: 'Memory Game',
    description: 'Unity-based memory game with random map generation and card matching mechanics.',
    category: 'game',
    stack: ['Unity', 'C#', 'Game Development'],
    image: '/images/memorygame.PNG',
    demo: 'https://www.youtube.com/watch?v=qlmjMiXvcMA',
    featured: false
  },
  {
    title: 'Minesweeper',
    description: 'Classic Minesweeper game in Unity featuring random map generation, mine placement, number tiles, and win/lose conditions.',
    category: 'game',
    stack: ['Unity', 'C#', 'Game Development'],
    image: '/images/minesweeper.PNG',
    demo: 'https://www.youtube.com/watch?v=NdL1DB-A76E',
    featured: false
  },
  {
    title: 'Snake Game',
    description: 'Classic Snake game implementation in Unity with modern graphics and controls.',
    category: 'game',
    stack: ['Unity', 'C#', 'Game Development'],
    image: '/images/snakegame.PNG',
    demo: 'https://www.youtube.com/watch?v=NLCzNwva_CE',
    featured: false
  },
  {
    title: 'Vocational Game',
    description: 'Unity-based game focused on career exploration and vocational guidance.',
    category: 'game',
    stack: ['Unity', 'C#', 'Game Development'],
    image: '/images/vocationalgame.PNG',
    demo: 'https://drive.google.com/file/d/1merq1EUdDZWOFXOUDDHxcKC8MywV-Jpx/view?usp=sharing',
    featured: false
  },
  {
    title: 'Unreal Basic Player',
    description: 'Basic player character implementation in Unreal Engine with movement and interaction mechanics.',
    category: 'game',
    stack: ['Unreal Engine', 'C++', 'Game Development'],
    image: '/images/unrealplayer.PNG',
    demo: 'https://drive.google.com/file/d/1Yp3Idu42vPg6sFb_rNsndUjJaDZZLmPo/view?usp=sharing',
    featured: false
  },

  // Art & Visual Design
  {
    title: 'Cubic World',
    description: 'A short video made in Blender - An adventure through cubic worlds as I delve into the realms of animation, modeling, particles, sound, and video editing in Blender.',
    category: 'art',
    stack: ['Blender', '3D Animation', 'Video Editing'],
    image: '/images/cubic.PNG',
    demo: 'https://www.youtube.com/watch?v=xHVLZWGDDWc',
    featured: true
  },
  {
    title: 'Car Space Animation',
    description: 'A space-themed animation project created in Blender featuring a car in a cosmic environment.',
    category: 'art',
    stack: ['Blender', '3D Animation', 'Visual Effects'],
    image: '/images/carspace.PNG',
    demo: 'https://www.youtube.com/watch?v=Fsvz54R6DSg',
    featured: false
  },
  {
    title: 'Car cubic world demo Animation',
    description: 'A space-themed animation project created in Blender featuring a car in a cosmic environment.',
    category: 'art',
    stack: ['Blender', '3D Animation', 'Visual Effects'],
    image: '/images/car.PNG',
    demo: 'https://www.youtube.com/watch?v=Ll7Thd8VwNQ',
    featured: false
  },
  {
    title: 'Sawamura Drawing',
    description: 'Digital artwork created in Krita featuring Sawamura tools.',
    category: 'art',
    stack: ['Krita', 'Digital Art', 'Character Design'],
    image: '/images/sawa.PNG',
    featured: false
  },
  {
    title: 'Violet Evergarden Drawing',
    description: 'Digital artwork of Violet Evergarden created in Krita.',
    category: 'art',
    stack: ['Krita', 'Digital Art', 'Character Design'],
    image: '/images/violet.PNG',
    featured: false
  },
  {
    title: 'One Piece Luffy Drawing',
    description: 'Digital artwork of Monkey D. Luffy from One Piece created in Krita.',
    category: 'art',
    stack: ['Krita', 'Digital Art', 'Character Design'],
    image: '/images/luffy.PNG',
    featured: false
  }
];

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'webapp', name: 'Web/Mobile Applications' },
  { id: 'game', name: 'Games' },
  { id: 'art', name: 'Art & Visual Design' }
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const navigate = useNavigate();

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section className="py-28 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my portfolio of projects, from web applications to games and visual art, each showcasing different skills and creative approaches.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
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
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {project.featured && (
                  <span className="absolute top-4 right-4 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full">
                    Featured
                  </span>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg text-center hover:bg-indigo-700 transition-colors"
                  >
                    {project.category === 'art' ? 'View Artwork' : 'Live Demo'}
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
