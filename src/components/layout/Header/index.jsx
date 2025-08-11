import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDarkMode } from '../../../hooks/useDarkMode';
import { NAV_ITEMS } from '../../../utils/constants';
import styles from './Header.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const { isDarkMode, toggleDarkMode, setSystemPreference, isSystemPreference } = useDarkMode();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleThemeClick = () => {
    setShowThemeMenu(!showThemeMenu);
  };

  const handleThemeOption = (option) => {
    if (option === 'system') {
      setSystemPreference();
    } else {
      toggleDarkMode();
    }
    setShowThemeMenu(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.headerContainer}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoText}>Jay Miller</span>
        </Link>

        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`}>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`${styles.navLink} ${location.pathname === item.path ? styles.active : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          
          <div className={styles.themeToggleContainer}>
            <button
              className={styles.darkModeToggle}
              onClick={handleThemeClick}
              aria-label="Toggle theme"
              aria-expanded={showThemeMenu}
            >
              {isDarkMode ? (
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"/>
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1 -1.5 0V3a.75.75 0 0 1 .75 -0.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1 -9 0ZM18.894 6.166a.75.75 0 0 0 -1.06 -1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591 -1.59ZM21.75 12a.75.75 0 0 1 -0.75.75h-2.25a.75.75 0 0 1 0 -1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06 -1.06l-1.59 -1.591a.75.75 0 1 0 -1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1 -1.5 0v-2.25A.75.75 0 0 1 12 18ZM6.166 17.834a.75.75 0 0 0 -1.06 1.06l1.591 1.59a.75.75 0 0 0 1.06 -1.061l-1.591 -1.59ZM2.25 12a.75.75 0 0 1 .75 -.75H5.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 -.75 -.75ZM6.166 6.166a.75.75 0 0 0 1.06 -1.06L5.636 3.515a.75.75 0 0 0 -1.061 1.06l1.591 1.591Z"/>
                </svg>
              )}
            </button>
            
            {showThemeMenu && (
              <div className={styles.themeMenu}>
                <button 
                  className={`${styles.themeOption} ${!isDarkMode && !isSystemPreference ? styles.active : ''}`}
                  onClick={() => handleThemeOption('light')}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                    <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1 -1.5 0V3a.75.75 0 0 1 .75 -0.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1 -9 0ZM18.894 6.166a.75.75 0 0 0 -1.06 -1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591 -1.59ZM21.75 12a.75.75 0 0 1 -0.75.75h-2.25a.75.75 0 0 1 0 -1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06 -1.06l-1.59 -1.591a.75.75 0 1 0 -1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1 -1.5 0v-2.25A.75.75 0 0 1 12 18ZM6.166 17.834a.75.75 0 0 0 -1.06 1.06l1.591 1.59a.75.75 0 0 0 1.06 -1.061l-1.591 -1.59ZM2.25 12a.75.75 0 0 1 .75 -.75H5.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 -.75 -.75ZM6.166 6.166a.75.75 0 0 0 1.06 -1.06L5.636 3.515a.75.75 0 0 0 -1.061 1.06l1.591 1.591Z"/>
                  </svg>
                  Light
                </button>
                <button 
                  className={`${styles.themeOption} ${isDarkMode && !isSystemPreference ? styles.active : ''}`}
                  onClick={() => handleThemeOption('dark')}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                    <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"/>
                  </svg>
                  Dark
                </button>
                <button 
                  className={`${styles.themeOption} ${isSystemPreference ? styles.active : ''}`}
                  onClick={() => handleThemeOption('system')}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                    <path d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"/>
                  </svg>
                  System
                </button>
              </div>
            )}
          </div>
        </nav>

        <button
          className={`${styles.mobileMenuBtn} ${isMobileMenuOpen ? styles.open : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
