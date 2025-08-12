import React, { useEffect, useRef } from "react";
import "./Home.scss";
import { FaMapMarkerAlt, FaHome, FaTree, FaFlag } from "react-icons/fa";
import { GiVillage, GiWoodenChair, GiStonePath } from "react-icons/gi";
import { FaLandmark } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

import petahutbol1 from "../../assets/petahutbol1.jpg";
import petahutbol2 from "../../assets/petahutbol2.jpg";

const Home = () => {
  const aboutSectionRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
      mirror: true
    });
  }, []);

  const destinations = [
    { name: "Huta Bolon", feature: "Rumah adat Bolon dan pusat budaya Batak", icon: <GiVillage /> },
    { name: "Ambarita", feature: "Batu Persidangan Raja Siallagan", icon: <GiStonePath /> },
    { name: "Tomok", feature: "Makam Raja Sidabutar & Museum Batak", icon: <FaLandmark /> },
    { name: "Simanindo", feature: "Museum Huta Bolon Simanindo", icon: <GiWoodenChair /> }
  ];

  const scrollToAbout = () => {
    aboutSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="landing-page">
      <header className="hero" data-aos="fade">
        <div className="hero-content" data-aos="fade-up" data-aos-delay="300">
          <h1>HUTA BOLON</h1>
          <p>Warisan Budaya Batak di Pulau Samosir</p>
          <button className="explore-btn" onClick={scrollToAbout}>Jelajahi Desa</button>
        </div>
      </header>

      <section className="about" ref={aboutSectionRef}>
        <div className="about-container">
          <div className="about-text" data-aos="fade-right">
            <h2>Desa Huta Bolon</h2>
            <p>
              Huta Bolon merupakan bagian dari wilayah adat Batak Toba yang berada di Kecamatan Simanindo, Kabupaten Samosir. 
              Dengan peninggalan rumah adat Bolon dan pelestarian nilai-nilai leluhur, desa ini menjadi salah satu pusat budaya 
              Batak yang masih terjaga hingga kini.
            </p>
            <ul className="highlights">
              <li><span>✓</span> Rumah adat Bolon dengan usia ratusan tahun</li>
              <li><span>✓</span> Terletak strategis dekat Danau Toba dan situs budaya lainnya</li>
              <li><span>✓</span> Pusat edukasi dan pelestarian budaya Batak Toba</li>
            </ul>
          </div>
          <div className="about-media" data-aos="fade-left" data-aos-delay="200">
            <div className="video-wrapper">
              <iframe 
                src="https://www.youtube.com/embed/MbaNKpFS3Z4" 
                title="Profil Desa Huta Bolon" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="dusun-section">
        <div className="section-header" data-aos="fade-up">
          <h2>Destinasi Budaya Sekitar</h2>
          <p>Wilayah-wilayah budaya yang bisa dikunjungi di sekitar Desa Huta Bolon</p>
        </div>
        <div className="dusun-grid">
          {destinations.map((place, index) => (
            <div 
              className="dusun-card" 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="dusun-icon">{place.icon}</div>
              <h3>{place.name}</h3>
              <p>{place.feature}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="features">
        <div className="feature-card" data-aos="fade-up" data-aos-delay="0">
          <FaHome className="feature-icon" />
          <h3>Arsitektur Tradisional</h3>
          <p>Rumah adat dengan gorga (ukiran khas Batak) yang masih asli</p>
        </div>
        <div className="feature-card" data-aos="fade-up" data-aos-delay="100">
          <FaTree className="feature-icon" />
          <h3>Lingkungan Asri</h3>
          <p>Udara sejuk dan alam yang masih alami</p>
        </div>
        <div className="feature-card" data-aos="fade-up" data-aos-delay="200">
          <FaMapMarkerAlt className="feature-icon" />
          <h3>Lokasi Strategis</h3>
          <p>Akses mudah dengan pemandangan Danau Toba</p>
        </div>
        <Link to="/report" className="feature-card" data-aos="fade-up" data-aos-delay="300">
          <FaFlag className="feature-icon" />
          <h3>Pelaporan Warga</h3>
          <p>Sampaikan keluhan, saran, atau kritik demi desa yang lebih baik</p>
        </Link>
      </section>

      {/* 🗺 SECTION PETA SAMPAH */}
      <section className="waste-maps" data-aos="fade-up">
        <div className="section-header">
          <h2>Peta Persebaran Sampah</h2>
          <p>Identifikasi lokasi tempat sampah dan potensi timbunan di Desa Huta Bolon</p>
        </div>
        <div className="maps-container">
          <div className="map-item" data-aos="zoom-in" data-aos-delay="100">
            <img src={petahutbol1} alt="Peta Tempat Sampah" />
            <p>Peta Persebaran Tempat Sampah di Desa Huta Bolon</p>
          </div>
          <div className="map-item" data-aos="zoom-in" data-aos-delay="200">
            <img src={petahutbol2} alt="Peta Timbunan Sampah" />
            <p>Potensi Timbunan Sampah Berdasarkan Aktivitas Warga</p>
          </div>
        </div>
      </section>

      <footer className="footer" data-aos="fade-up">
        <div className="footer-content">
          <div className="footer-logo">HUTA BOLON</div>
          <p>Desa Budaya Batak Toba di Pulau Samosir</p>
          <div className="footer-contact">
            <p>Email: infohutabolon@gmail.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;