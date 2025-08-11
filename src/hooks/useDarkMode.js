import { useState, useEffect } from 'react';

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSystemPreference, setIsSystemPreference] = useState(false);

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
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    setIsSystemPreference(false);
    localStorage.setItem('darkMode', newDarkMode.toString());
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  };

  const setSystemPreference = () => {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(systemPrefersDark);
    setIsSystemPreference(true);
    localStorage.removeItem('darkMode');
    
    if (systemPrefersDark) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  };

  return { 
    isDarkMode, 
    toggleDarkMode, 
    setSystemPreference, 
    isSystemPreference 
  };
}; 