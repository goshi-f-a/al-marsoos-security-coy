import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Services from './pages/Services';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import CeoMessage from './pages/CeoMessage';
import Leadership from './pages/Leadership';
import Credentials from './pages/Credentials';
import Clients from './pages/Clients';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0b0e] text-white flex flex-col selection:bg-[#d32f2f] selection:text-white">
      {/* Auto scroll to top on route changes */}
      <ScrollToTop />

      {/* Navigation Header */}
      <Header />

      {/* Main Page Area with Route View */}
      <main className="flex-1 flex flex-col pt-[72px] sm:pt-[88px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/ceo-message" element={<CeoMessage />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/credentials" element={<Credentials />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Floating Chat Support Widget */}
      <ChatWidget />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
