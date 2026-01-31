import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Loader from './components/Loader';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import Services from './components/Services';
import Mentorship from './components/Mentorship';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import About from './components/About';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import CookiePolicy from './components/CookiePolicy';
import NotFound from './components/NotFound';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgressBar from './components/ScrollProgressBar';

function HomePage({ darkMode, toggleDarkMode }) {
  return (
    <>
      <ScrollProgressBar />
      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <Dashboard />
      <Services />
      <Mentorship />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  // Initialize dark mode from localStorage
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  useEffect(() => {
    // Loader logic
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  }, []);

  useEffect(() => {
    // Apply dark mode class to document
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  };

  return (
    <Router>
      <div className="bg-slate-50 text-slate-900 dark:bg-dark dark:text-slate-100 transition-colors duration-300 antialiased">
        <Loader isLoading={isLoading} />
        <ScrollProgressBar />
        <Routes>
          <Route path="/" element={<HomePage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
          <Route path="/blog" element={
            <>
              <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
              <Blog />
              <Footer />
              <ScrollToTop />
            </>
          } />
          <Route path="/blog/:id" element={
            <>
              <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
              <BlogPost />
              <Footer />
              <ScrollToTop />
            </>
          } />
          <Route path="/about" element={
            <>
              <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
              <About />
              <Footer />
              <ScrollToTop />
            </>
          } />
          <Route path="/privacy" element={
            <>
              <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
              <Privacy />
              <Footer />
              <ScrollToTop />
            </>
          } />
          <Route path="/terms" element={
            <>
              <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
              <Terms />
              <Footer />
              <ScrollToTop />
            </>
          } />
          <Route path="/cookies" element={
            <>
              <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
              <CookiePolicy />
              <Footer />
              <ScrollToTop />
            </>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
