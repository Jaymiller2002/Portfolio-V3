import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Analytics tracking
const trackPageView = (path) => {
  // Google Analytics 4 tracking
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: path,
    });
  }
  
  // Custom analytics
  console.log(`Page view: ${path}`);
};

// Performance monitoring
const reportWebVitals = (metric) => {
  console.log('Web Vitals:', metric);
  
  // Send to analytics service
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      event_category: 'Web Vitals',
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_label: metric.id,
      non_interaction: true,
    });
  }
};

// Track initial page load
trackPageView(window.location.pathname);

// Track route changes
window.addEventListener('popstate', () => {
  trackPageView(window.location.pathname);
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
