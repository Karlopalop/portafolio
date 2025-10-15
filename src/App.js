import React, { useState, useEffect, Suspense, lazy } from 'react';
import './styles/globals.css';

// Lazy loading para componentes pesados
const Header = lazy(() => import('./components/Header'));
const Hero = lazy(() => import('./components/Hero'));
const Projects = lazy(() => import('./components/projects'));
const Skills = lazy(() => import('./components/skills'));
const About = lazy(() => import('./components/about'));
const Footer = lazy(() => import('./components/Footer'));
const ScrollToTop = lazy(() => import('./components/ScrollToTop'));

// Componente de carga optimizado
const LoadingFallback = () => (
  <div className="loading-screen">
    <div className="loading-content">
      <div className="loading-spinner">
        <div className="spinner-circle"></div>
      </div>
      <p className="loading-text">Cargando portafolio...</p>
      <div className="loading-progress">
        <div className="progress-bar"></div>
      </div>
    </div>
  </div>
);

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('darkMode');
      if (savedMode !== null) {
        return JSON.parse(savedMode);
      }
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const preloadCriticalResources = () => {
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
      document.documentElement.classList.remove('light-mode');
    } else {
      document.documentElement.classList.add('light-mode');
      document.documentElement.classList.remove('dark-mode');
    }
    
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode, mounted]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  if (!mounted) {
    return (
      <div className="app-loading">
        <LoadingFallback />
      </div>
    );
  }

  return (
    <div className="App">
      <Suspense fallback={<LoadingFallback />}>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="main-content">
          <Hero />
          <Projects />
          <Skills />
          <About />
          {/* Sección Contact eliminada - Ahora el botón directo en Hero */}
        </main>
        <Footer />
        <ScrollToTop />
      </Suspense>
    </div>
  );
}

export default App;