import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from 'react-router-dom';

// Project styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import './Header.css';
// import './About.css';
// import './Hero.css';
// import './Projects.css';
// import './Contact.css';

import About from './Components/About';
import App from './App';
import ErrorPage from './ErrorPage';
import Header from './Components/Header';
import Footer from './Footer';
import Hero from './Components/Hero';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function Layout() {
  return (
    <>
      <Header />
      <div id='page-content'>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Hero />, // Set Hero as the landing page
        errorElement: <ErrorPage />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/projects',
        element: <Projects />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
