import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './App.css';
import './styles/Footer.css';
import './styles/Hero.css';
import './styles/Upload.css';

import Navbar from './components/Navbar';
import Upload from './components/Upload';
import Footer from './components/Footer';
import Hero from './components/Hero';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
