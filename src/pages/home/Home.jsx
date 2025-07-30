import React, { useEffect, useRef } from "react";
import "./Home.scss";
import { FaMapMarkerAlt, FaHome, FaTree, FaFlag } from "react-icons/fa";
import { GiVillage, GiWoodenChair, GiStonePath } from "react-icons/gi";
import { BiRestaurant } from "react-icons/bi";
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

  const dusunList = [
    { name: "Dusun Sihotang", feature: "Pusat adat dan budaya", icon: <GiVillage /> },
    { name: "Dusun Simanindo", feature: "Tarian tradisional & kerajinan", icon: <GiWoodenChair /> },
    { name: "Dusun Ambarita", feature: "Peninggalan batu persidangan", icon: <GiStonePath /> },
    { name: "Dusun Tomok", feature: "Pemakaman raja-raja", icon: <BiRestaurant /> }
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
            <h2>Desa Budaya Huta Bolon</h2>
            <p>
              Desa Huta Bolon merupakan permata budaya Batak Toba yang terletak di tepian Danau Toba. 
              Dengan arsitektur tradisional dan tata desa yang terjaga sejak ratusan tahun, Huta Bolon 
              menawarkan pengalaman autentik kehidupan masyarakat Batak.
            </p>
            <ul className="highlights">
              <li><span>✓</span> Rumah adat Bolon berusia lebih dari 200 tahun</li>
              <li><span>✓</span> Lokasi strategis di pinggir Danau Toba</li>
              <li><span>✓</span> Pusat pelestarian budaya Batak Toba</li>
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
          <h2>Dusun-Dusun Kami</h2>
          <p>Setiap dusun memiliki keunikan dan cerita tersendiri</p>
        </div>
        <div className="dusun-grid">
          {dusunList.map((dusun, index) => (
            <div 
              className="dusun-card" 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="dusun-icon">{dusun.icon}</div>
              <h3>{dusun.name}</h3>
              <p>{dusun.feature}</p>
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

      {/* 🗺️ SECTION PETA SAMPAH */}
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
