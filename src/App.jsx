import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import LoadingSpinner from "./components/layout/LoadingSpinner";
import "./styles/globals.css";

// Lazy load page components for better performance
const Home = lazy(() => import("./components/pages/Home"));
const About = lazy(() => import("./components/pages/About"));
const Projects = lazy(() => import("./components/pages/Projects"));
const Blog = lazy(() => import("./components/pages/Blog"));
const Contact = lazy(() => import("./components/pages/Contact"));
const ErrorPage = lazy(() => import("./components/pages/ErrorPage"));

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main id="page-content">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
