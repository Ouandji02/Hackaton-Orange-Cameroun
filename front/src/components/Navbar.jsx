import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


 // Assurez-vous que Bootstrap est importé quelque part dans votre projet

 function Navbar() {
  const [hidden, setHidden] = useState(false);
  let lastScrollTop = 0;

  useEffect(() => {
    const handleScroll = () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollTop = scrollTop;
    };

    window.addEventListener('scroll', handleScroll);

    // Nettoyage de l'écouteur d'événement lors du démontage du composant
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`navbar navbar-expand-md navbar-light bg-light shadow-sm fixed-top ${hidden ? 'hidden' : ''}`}>
  <div className="container-fluid">
    <Link className="navbar-brand d-flex align-items-center" to="/">
      <img src="/logo-authenticart.png" alt="Authentic'Art Logo" width="40" height="40" className="me-2" />
      Authentic'Art
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link"  href="#feature">Feature</a>
        </li>
        <li className="nav-item">
        <a className="nav-link"  href="#about">About</a>
        </li>
        <li className="nav-item">
          <Link to="/upload" className="btn btn-dark ms-md-2">Tester</Link>
        </li>
      </ul>
    </div>
  </div>
</header>

  );
}

export default Navbar;