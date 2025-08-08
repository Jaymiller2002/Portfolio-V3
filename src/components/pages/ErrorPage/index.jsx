import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="error-page">
      <div className="error-container">
        <div className="error-content">
          <h1 className="error-code">404</h1>
          <h2 className="error-title">Page Not Found</h2>
          <p className="error-message">
            Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
          <div className="error-actions">
            <Link to="/" className="error-button primary">
              Go Home
            </Link>
            <Link to="/contact" className="error-button secondary">
              Contact Me
            </Link>
          </div>
        </div>
        <div className="error-illustration">
          <div className="error-graphic">
            <div className="error-circle"></div>
            <div className="error-line"></div>
            <div className="error-dot"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage; 