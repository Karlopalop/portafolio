import React, { useState, useEffect, Suspense, lazy } from 'react';
import './styles/globals.css';

// Lazy loading para componentes pesados
const Header = lazy(() => import('./components/Header'));
const Hero = lazy(() => import('./components/Hero'));
const Projects = lazy(() => import('./components/projects'));
const Skills = lazy(() => import('./components/skills'));
const About = lazy(() => import('./components/about'));
const Contact = lazy(() => import('./components/contact'));
const Footer = lazy(() => import('./components/Footer'));
const ScrollToTop = lazy(() => import('./components/ScrollToTop'));

// Componente de carga optimizado
const LoadingFallback = () => (
  <div className="loading-screen">
    <div className="loading-content">
      <div className="loading-spinner"></div>
      <p className="loading-text">Cargando portafolio...</p>
    </div>
  </div>
);

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      return JSON.parse(savedMode);
    }
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Preload crítico
    const preloadCriticalResources = () => {
      // Preload fonts
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
      link.as = 'style';
      document.head.appendChild(link);
    };

    preloadCriticalResources();
  }, []);

  useEffect(() => {
    if (!mounted) return;

    if (darkMode) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
    
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode, mounted]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  if (!mounted) {
    return <LoadingFallback />;
  }

  return (
    <div className="App">
      <Suspense fallback={<LoadingFallback />}>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
        <Footer />
        <ScrollToTop />
      </Suspense>
    </div>
  );
}

export default App;