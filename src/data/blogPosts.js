// Import blog images
import anicLogo from '../assets/images/anicLogo.webp';
import entrepeneurLogo from '../assets/images/entrepeneurLogo.webp';
import parsingViewerImage from '../assets/images/parsingViewerImage.jpeg';

export const internshipProjects = [
  {
    id: 1,
    title: '15 Year Timeline Page',
    summary:
      'Added a timeline page that goes over the entire history of Awesome Inc. Unfortunately, it has not been added to the live site yet.',
    category: 'assignment',
    timeframe: 'August 13th, 2024',
    techStack: ['Gatsby', 'React', 'Animations', 'Sanity'],
    image: anicLogo,
    liveUrl: 'https://awesomeinc.org/',
    githubUrl: 'https://github.com/ainc/ainc-gatsby-sanity',
    type: 'Internship Project'
  },
  {
    id: 2,
    title: 'Airbnb Data Parser',
    summary:
      'Built a parser that extracts reviews, ratings, and comments from Airbnb .mbox files. Additionally, I added charts to provide a visual representation of the parsed data.',
    category: 'assignment',
    timeframe: 'August 10th, 2025',
    techStack: ['React', 'JavaScript', 'Python', 'Flask', 'Chart.js', 'd3-cloud', 'flask-cors', 'File Handling', 'API Endpoints'],
    image: parsingViewerImage,
    liveUrl: 'https://dataset-website.vercel.app/',
    githubUrl: 'https://github.com/Jaymiller2002/dataset-website',
    type: 'Internship Project'
  },
  {
    id: 3,
    title: 'New Blog Animation',
    summary:
      'Added a new animation to the blog page.',
    category: 'assignment',
    timeframe: 'November 16th, 2025',
    techStack: ['Gatsby', 'React', 'Animations', 'Sanity'],
    image: anicLogo,
    liveUrl: 'https://awesomeinc.org/',
    githubUrl: 'https://github.com/ainc/ainc-gatsby-sanity',
    type: 'Internship Project'
  },
  {
    id: 4,
    title: 'Main Awesome Inc Website',
    summary:
      'Created a page for the 15-year timeline and implemented image optimizations.',
    category: 'assignment',
    timeframe: 'June 6th, 2024',
    techStack: ['Gatsby', 'React', 'Animations', 'Sanity'],
    image: anicLogo,
    liveUrl: 'https://awesomeinc.org/',
    githubUrl: 'https://github.com/ainc/ainc-gatsby-sanity',
    type: 'Internship Project'
  },
  {
    id: 5,
    title: 'Entrepreneur Hall of Fame Website',
    summary:
      'Automated year creation for new inductees. For example, if a future inductee is added for 2026, the year 2026 is automatically generated.',
    category: 'assignment',
    timeframe: 'August 13th, 2024',
    techStack: ['Gatsby', 'React', 'Animations', 'Sanity'],
    image: entrepeneurLogo,
    liveUrl: 'https://entrepreneurhof.com/',
    githubUrl: 'https://github.com/ainc/hof-gatsby-sanity',
    type: 'Internship Project'
  },
  {
    id: 6,
    title: 'Entrepreneur Hall of Fame Website',
    summary:
      'Added animations to the Founder Series page and fixed video playback issues.',
    category: 'assignment',
    timeframe: 'November 18th, 2025',
    techStack: ['Gatsby', 'React', 'Animations', 'Sanity'],
    image: entrepeneurLogo,
    liveUrl: 'https://entrepreneurhof.com/',
    githubUrl: 'https://github.com/ainc/hof-gatsby-sanity',
    type: 'Internship Project'
  }
];

export const projectCategories = [
  { id: 'all', name: 'All Work' },
  { id: 'frontend', name: 'Frontend' },
  { id: 'backend', name: 'Backend' },
  { id: 'assignment', name: 'Assignments' }
];