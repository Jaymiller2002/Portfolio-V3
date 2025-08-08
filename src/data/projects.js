// Import project images
import ticTacToeImage from '../assets/images/ticTacToeImage.jpeg';
import parsingViewerImage from '../assets/images/parsingViewerImage.jpeg';
import passwordGeneratorImage from '../assets/images/passwordGeneratorImage.jpeg';
import doglistImage from '../assets/images/doglistImage.jpeg';
import todoListImage from '../assets/images/todoListImage.jpeg';
import imageGalleryImage from '../assets/images/imageGalleryImage.jpeg';
import musicPlayerImage from '../assets/images/musicPlayerImage.jpeg';

export const projects = [
  {
    id: 1,
    title: 'Tic-Tac-Toe',
    description: 'A classic game of Tic-Tac-Toe built with React. Features include game state management, win detection, and a clean, responsive UI.',
    image: ticTacToeImage,
    liveUrl: 'https://jaymiller2002.github.io/Tic-Tac-Toe/',
    githubUrl: 'https://github.com/jaymiller2002/Tic-Tac-Toe',
    category: 'game',
    technologies: ['React', 'JavaScript', 'CSS'],
    featured: true
  },
  {
    id: 2,
    title: 'Parsing Viewer',
    description: 'A modern web application for uploading, parsing, and visualizing data files with advanced charting capabilities. Built with React frontend and Flask backend, featuring interactive data visualization including bar charts, stacked bar charts, timeline charts, pie charts, and word clouds.',
    image: parsingViewerImage,
    liveUrl: 'https://dataset-website.vercel.app/',
    githubUrl: 'https://github.com/Jaymiller2002/dataset-website',
    category: 'web-app',
    technologies: ['React', 'JavaScript', 'Python', 'Flask', 'Chart.js', 'd3-cloud', 'flask-cors', 'File Handling', 'API Endpoints'],
    featured: true
  },
  {
    id: 3,
    title: 'Password Generator',
    description: 'A secure password generator with customizable options including length, character types, and strength indicators.',
    image: passwordGeneratorImage,
    liveUrl: 'https://password-generator-sepia-zeta.vercel.app/',
    githubUrl: 'https://github.com/jaymiller2002/password-generator',
    category: 'utility',
    technologies: ['React', 'JavaScript', 'CSS'],
    featured: false
  },
  {
    id: 4,
    title: 'Doglist',
    description: 'A dog listing application showcasing different breeds with detailed information and beautiful imagery.',
    image: doglistImage,
    liveUrl: 'https://doglist.vercel.app/',
    githubUrl: 'https://github.com/jaymiller2002/doglist',
    category: 'web-app',
    technologies: ['React', 'JavaScript', 'API Integration'],
    featured: false
  },
  {
    id: 5,
    title: 'To Do List',
    description: 'A comprehensive to-do list application with task management, categories, and local storage persistence.',
    image: todoListImage,
    liveUrl: 'https://to-do-list-mauve-gamma-70.vercel.app/',
    githubUrl: 'https://github.com/jaymiller2002/to-do-list',
    category: 'utility',
    technologies: ['React', 'JavaScript', 'LocalStorage'],
    featured: false
  },
  {
    id: 6,
    title: 'Image Gallery',
    description: 'An interactive image gallery with slider functionality, lightbox view, and responsive design.',
    image: imageGalleryImage,
    liveUrl: 'https://image-gallery-slider-react.vercel.app/',
    githubUrl: 'https://github.com/jaymiller2002/image-gallery',
    category: 'web-app',
    technologies: ['React', 'JavaScript', 'CSS3'],
    featured: false
  },
  {
    id: 7,
    title: 'Music Player V2',
    description: 'An upgraded music player with enhanced features, better UI, and improved user experience.',
    image: musicPlayerImage,
    liveUrl: 'https://music-player-cyan-six.vercel.app/',
    githubUrl: 'https://github.com/jaymiller2002/music-player-v2',
    category: 'web-app',
    technologies: ['React', 'JavaScript', 'Advanced Audio'],
    featured: true
  }
];

export const projectCategories = [
  { id: 'all', name: 'All Projects' },
  { id: 'web-app', name: 'Web Applications' },
  { id: 'game', name: 'Games' },
  { id: 'utility', name: 'Utilities' }
]; 