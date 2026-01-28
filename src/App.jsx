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

function HomePage({ darkMode, toggleDarkMode }) {
  return (
    <>
      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <Dashboard />
      <Services />
      <Mentorship />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Loader logic
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    // Check dark mode preference - default to light mode
    const isDark = localStorage.getItem('theme') === 'dark';
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

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
        <Routes>
          <Route path="/" element={<HomePage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
          <Route path="/blog" element={
            <>
              <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
              <Blog />
              <Footer />
            </>
          } />
          <Route path="/blog/:id" element={
            <>
              <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
              <BlogPost />
              <Footer />
            </>
          } />
          <Route path="/about" element={
            <>
              <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
              <About />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
