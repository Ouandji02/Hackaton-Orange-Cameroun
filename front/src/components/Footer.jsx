import { Link } from 'react-router-dom';
import React from 'react';



function Footer() {
  return (
    <footer>
      <p>&copy; 2025 Authentic'Art. Tous droits réservés.</p>
      <p>
        <Link to="/about">À propos</Link> | <Link to="/contact">Contact</Link> | <Link to="/legal">Mentions légales</Link>
      </p>
    </footer>
  );
}

export default Footer;
