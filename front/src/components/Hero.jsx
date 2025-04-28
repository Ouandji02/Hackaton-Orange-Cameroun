import React from 'react';

import { Link } from 'react-router-dom';
// import 'styles/Hero.css'; // Assurez-vous que le chemin vers votre fichier CSS est correct

function Hero() {
  return (
    <>
      {/* Section Hero principale avec arrière-plan animé */}
      
      <div className="hero-section-container">
        <div className="hero-text-content">
          <h1 className="display-2 fw-bold text-body-emphasis">Authentic'Art</h1>
          <div className="col-lg-12 mx-2">
            <p className="lead mb-4">
              Découvrez la puissance de l’intelligence artificielle au service de l’art.
              Notre application vous permet d’analyser une œuvre d’art pour déterminer
              si elle a été créée par un humain ou générée par une IA.
              Grâce à une interface moderne et intuitive, explorez le croisement entre
              technologie et créativité.
            </p>
            <Link to="/upload" className="btn btn-dark ms-md-2" style="pading: 2">Tester</Link>
          </div>
        </div>
        <div className="hero-image-container overflow-hidden" style={{ maxHeight: '100vh' }}>
          <div className="container px-5">
            <img
              src="/photo3.png"
              className="img-fluid border rounded-3 shadow-lg mb-4"
              alt="Image d'illustration"
              width="700"
              height="400"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Section Features */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold" id='feature'>Fonctionnalités principales</h2>
          <div className="row g-4">
            <div className="col-md-4 text-center">
              <i className="bi bi-search" style={{ fontSize: '3rem', color: '#0d6efd' }}></i>
              <img
                src="/capture1.jpg"
                alt="Analyse Rapide"
                className="img-fluid rounded-3 shadow-sm"
                loading="lazy"
              />
              <h5 className="mt-3">Analyse Rapide</h5>
              <p>Analysez vos œuvres en quelques secondes grâce à notre IA performante.</p>
            </div>
            <div className="col-md-4 text-center">
              <i className="bi bi-brush" style={{ fontSize: '3rem', color: '#0d6efd' }}></i>
              <img
                src="/capture2.jpg"
                alt="Créativité et Innovation"
                className="img-fluid rounded-3 shadow-sm"
                loading="lazy"
              />
              <h5 className="mt-3">Créativité et Innovation</h5>
              <p>Un regard unique sur la frontière entre art humain et créations générées.</p>
            </div>
            <div className="col-md-4 text-center">
              <i className="bi bi-shield-check" style={{ fontSize: '3rem', color: '#0d6efd' }}></i>
              <img
                src="/capture3.jpg"
                alt="Fiabilité et Sécurité"
                className="img-fluid rounded-3 shadow-sm"
                loading="lazy"
              />
              <h5 className="mt-3">Fiabilité et Sécurité</h5>
              <p>Vos images sont traitées en toute confidentialité et ne sont jamais conservées.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section About */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold " id = "about">À propos d'Authentic'Art</h2>
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src="/logo-authenticart.png"
                alt="À propos d'Authentic'Art"
                className="img-fluid rounded-3 shadow-sm"

              />
            </div>
            <div className="col-md-6">
              <p className="lead">
                Authentic'Art est née de la passion pour l’art et la technologie.
                Notre mission est d’offrir à tous un outil simple, rapide et fiable pour
                comprendre l’origine des œuvres qui circulent dans un monde de plus en plus numérique.
              </p>
              <p>
                Que vous soyez un collectionneur, un artiste ou simplement un curieux,
                notre plateforme est conçue pour vous accompagner dans l’exploration fascinante
                de la création artistique moderne.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;