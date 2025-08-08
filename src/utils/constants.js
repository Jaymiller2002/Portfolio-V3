// Contact Information
export const CONTACT_INFO = {
  email: 'Jay.miller02@icloud.com',
  phone: '(859) 475-8431',
  location: 'Kentucky, USA',
  availability: 'Open to new opportunities'
};

// Social Media Links
export const SOCIAL_LINKS = {
  github: 'https://github.com/jaymiller2002',
  linkedin: 'https://linkedin.com/in/jay-miller-dev'
};

// Navigation Items
export const NAV_ITEMS = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' }
];

// Animation Variants
export const ANIMATION_VARIANTS = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  },
  item: {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }
};

// Theme Colors
export const COLORS = {
  primary: '#667eea',
  secondary: '#764ba2',
  gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
}; 