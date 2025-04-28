import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Navbar.css';
import './styles/Hero.css';
import './styles/Footer.css';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* Ici plus tard on ajoutera <Upload /> */}
      <Footer />
    </div>
  );
}

export default App;
