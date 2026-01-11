import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import JoinModal from './components/JoinModal';
import Home from './pages/Home';
import Courses from './pages/Courses';
import About from './pages/About';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  return (
    <Router>
      <div className="min-h-screen relative">
        {/* Background Grid */}
        <div className="grid-bg"></div>
        
        <Navbar onJoinClick={openModal} />
        
        <Routes>
          <Route path="/" element={<Home onJoinClick={openModal} />} />
          <Route path="/courses" element={<Courses onJoinClick={openModal} />} />
          <Route path="/about" element={<About onJoinClick={openModal} />} />
        </Routes>
        
        <Footer onJoinClick={openModal} />
        
        <JoinModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </Router>
  );
}

export default App;
