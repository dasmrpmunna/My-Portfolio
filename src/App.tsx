import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const App = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark' || 
    (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );
  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleSetActivePage = (event: CustomEvent) => {
      setActivePage(event.detail);
    };

    const rootElement = document.getElementById('root');
    if (rootElement) {
      rootElement.addEventListener('setActivePage', handleSetActivePage as EventListener);
    }

    return () => {
      if (rootElement) {
        rootElement.removeEventListener('setActivePage', handleSetActivePage as EventListener);
      }
    };
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300 bg-gray-50 dark:bg-gray-900">
      <Header activePage={activePage} setActivePage={setActivePage} />
      
      <button
        onClick={toggleTheme}
        className="fixed z-50 top-5 right-14 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 transition-all duration-300 hover:bg-gray-300 dark:hover:bg-gray-600"
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>
      
      <main className="flex-grow">
        {renderPage()}
      </main>
      
      <Footer />
    </div>
  );
};

export default App;