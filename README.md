# Jay Miller - Portfolio V3

A modern, responsive portfolio website built with React, featuring dark mode, animations, and a professional design.

## 🚀 Features

- **Modern Design** - Clean, professional layout with smooth animations
- **Dark Mode** - Toggle between light and dark themes
- **Responsive** - Optimized for all devices and screen sizes
- **Performance** - Lazy loading and code splitting for fast loading
- **SEO Optimized** - Meta tags, structured data, and proper semantic HTML
- **Blog Section** - Share your technical insights and articles
- **Project Showcase** - Interactive project gallery with filtering
- **Contact Form** - Professional contact form with validation

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/           # Layout components (Header, Footer, etc.)
│   │   ├── Header/
│   │   ├── Footer/
│   │   └── LoadingSpinner/
│   ├── pages/            # Page components
│   │   ├── Home/
│   │   ├── About/
│   │   ├── Projects/
│   │   ├── Blog/
│   │   ├── Contact/
│   │   └── ErrorPage/
│   └── ui/               # Reusable UI components
├── hooks/                # Custom React hooks
├── utils/                # Utility functions and constants
├── data/                 # Static data (projects, skills, blog posts)
├── styles/               # Global styles and CSS variables
└── assets/               # Images, icons, and other assets
```

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **React Router** - Client-side routing
- **Framer Motion** - Smooth animations and transitions
- **CSS Modules** - Scoped styling
- **Vite** - Fast build tool and dev server

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd Portfolio-V3
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📝 Customization

### Adding New Projects

Edit `src/data/projects.js` to add your projects with the following structure:

```javascript
{
  id: 1,
  title: 'Project Name',
  description: 'Project description',
  image: 'project-image-url',
  liveUrl: 'live-demo-url',
  githubUrl: 'github-repo-url',
  category: 'web-app',
  technologies: ['React', 'JavaScript'],
  featured: true
}
```

### Updating Skills

Edit `src/data/skills.js` to modify your skills and proficiency levels.

### Adding Blog Posts

Edit `src/data/blogPosts.js` to add new blog articles.

## 🎨 Styling

The project uses CSS Modules for component-scoped styling. Global styles are in `src/styles/globals.css`.

### Dark Mode

Dark mode is implemented using CSS custom properties and can be toggled via the header button.

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:

- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🚀 Deployment

The project is configured for deployment on Vercel, Netlify, or any static hosting service.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
