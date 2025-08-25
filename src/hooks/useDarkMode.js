import { useState, useEffect } from 'react';

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSystemPreference, setIsSystemPreference] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Check for saved dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode');
    
    // Check system preference
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedDarkMode === null) {
      // No saved preference, use system preference
      setIsDarkMode(systemPrefersDark);
      setIsSystemPreference(true);
      if (systemPrefersDark) {
        document.documentElement.classList.add('dark-mode');
      }
    } else {
      // Use saved preference
      const userPrefersDark = savedDarkMode === 'true';
      setIsDarkMode(userPrefersDark);
      setIsSystemPreference(false);
      if (userPrefersDark) {
        document.documentElement.classList.add('dark-mode');
      }
    }

    // Listen for system preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemChange = (e) => {
      if (isSystemPreference) {
        const newDarkMode = e.matches;
        setIsDarkMode(newDarkMode);
        if (newDarkMode) {
          document.documentElement.classList.add('dark-mode');
        } else {
          document.documentElement.classList.remove('dark-mode');
        }
      }
    };

    mediaQuery.addEventListener('change', handleSystemChange);
    
    return () => mediaQuery.removeEventListener('change', handleSystemChange);
  }, [isSystemPreference]);

  const toggleDarkMode = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    const newDarkMode = !isDarkMode;
    
    // Add transition class for smooth animation
    document.documentElement.classList.add('theme-transition');
    
    // Small delay to ensure transition class is applied
    setTimeout(() => {
      setIsDarkMode(newDarkMode);
      setIsSystemPreference(false);
      localStorage.setItem('darkMode', newDarkMode.toString());
      
      if (newDarkMode) {
        document.documentElement.classList.add('dark-mode');
      } else {
        document.documentElement.classList.remove('dark-mode');
      }
      
      // Remove transition class after animation completes
      setTimeout(() => {
        document.documentElement.classList.remove('theme-transition');
        setIsTransitioning(false);
      }, 300);
    }, 10);
  };

  const setSystemPreference = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Add transition class for smooth animation
    document.documentElement.classList.add('theme-transition');
    
    setTimeout(() => {
      setIsDarkMode(systemPrefersDark);
      setIsSystemPreference(true);
      localStorage.removeItem('darkMode');
      
      if (systemPrefersDark) {
        document.documentElement.classList.add('dark-mode');
      } else {
        document.documentElement.classList.remove('dark-mode');
      }
      
      setTimeout(() => {
        document.documentElement.classList.remove('theme-transition');
        setIsTransitioning(false);
      }, 300);
    }, 10);
  };

  const setTheme = (theme) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    // Add transition class for smooth animation
    document.documentElement.classList.add('theme-transition');
    
    setTimeout(() => {
      if (theme === 'system') {
        setSystemPreference();
        return;
      }
      
      const newDarkMode = theme === 'dark';
      setIsDarkMode(newDarkMode);
      setIsSystemPreference(false);
      localStorage.setItem('darkMode', newDarkMode.toString());
      
      if (newDarkMode) {
        document.documentElement.classList.add('dark-mode');
      } else {
        document.documentElement.classList.remove('dark-mode');
      }
      
      setTimeout(() => {
        document.documentElement.classList.remove('theme-transition');
        setIsTransitioning(false);
      }, 300);
    }, 10);
  };

  return { 
    isDarkMode, 
    toggleDarkMode, 
    setSystemPreference, 
    setTheme,
    isSystemPreference,
    isTransitioning
  };
}; 