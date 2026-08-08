import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import Home from './pages/Home';
import Services from './pages/Services';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

function App() {
  const [activePage, setActivePage] = useState('home');

  const renderActivePage = () => {
    switch (activePage) {
      case 'home':
        return <Home setActivePage={setActivePage} />;
      case 'services':
        return <Services setActivePage={setActivePage} />;
      case 'careers':
        return <Careers />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0b0e] text-white flex flex-col selection:bg-[#d32f2f] selection:text-white">
      {/* Navigation Header */}
      <Header activePage={activePage} setActivePage={setActivePage} />

      {/* Main Page Area */}
      <main className="flex-1 flex flex-col">
        {renderActivePage()}
      </main>

      {/* Floating Simulated Chat Support Widget */}
      <ChatWidget setActivePage={setActivePage} />

      {/* Footer */}
      <Footer setActivePage={setActivePage} />
    </div>
  );
}

export default App;
