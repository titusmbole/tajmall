import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Properties from './pages/Properties';
import PropertyView from './pages/PropertyView';
import LaunchingSoon from './pages/LaunchingSoon';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [contactMessage, setContactMessage] = useState('');

  const handleContactWithProperty = (propertyTitle: string) => {
    setContactMessage(`I am interested in learning more about the property: ${propertyTitle}. Please provide me with additional details and schedule a viewing.`);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onPageChange={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'properties':
        return <Properties onPageChange={setCurrentPage} />;
      case 'property-view':
        return <PropertyView onPageChange={setCurrentPage} onContactWithProperty={handleContactWithProperty} />;
      case 'launching':
        return <LaunchingSoon />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact initialMessage={contactMessage} onMessageClear={() => setContactMessage('')} />;
      default:
        return <Home onPageChange={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar 
        currentPage={currentPage} 
        onPageChange={setCurrentPage}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      
      <main>
        {renderPage()}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;