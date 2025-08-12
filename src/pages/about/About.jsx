import React from "react";
import "./About.scss";
import { FaMapMarkerAlt, FaUsers, FaCalendarAlt, FaTree, FaWater, FaHistory } from "react-icons/fa";

// Import gambar lokal
import rumahAdat from "../../assets/rumah-adat.jpg";
import danauToba from "../../assets/danau-toba.jpg";
import aekPanas from "../../assets/aek-panas.jpeg";
import kerajinanTenun from "../../assets/Gallery2.jpg";
import bukitHolbung from "../../assets/bukit.jpg";
import makamRaja from "../../assets/makam.jpeg";
import sigaleGale from "../../assets/sigale.jpg";

const AboutVillage = () => {
  const villageInfo = {
    name: "Huta Bolon",
    location: "Pulau Samosir, Sumatera Utara",
    population: "-",
    established: 1953,
    area: "-",
    history: `Huta Bolon Simanindo didirikan sekitar 300 tahun yang lalu oleh keturunan Raja Simalungun. Kompleks ini berfungsi sebagai pusat pemerintahan, tempat tinggal keluarga raja, sekaligus benteng pertahanan. Seluruh bangunan di dalamnya dibangun dengan filosofi dan arsitektur khas Batak Toba yang kaya akan makna.

Pada tahun 1969, salah satu keturunan raja memutuskan untuk mengubah kompleks ini menjadi sebuah museum terbuka. Tujuannya adalah untuk melestarikan warisan budaya Batak yang berharga agar tidak lekang oleh waktu dan dapat dinikmati serta dipelajari oleh generasi sekarang dan mendatang.`
  };

  const cultureInfo = `Masyarakat Huta Bolon sangat menjunjung tinggi adat Batak Toba, termasuk konsep Dalihan Na Tolu
  (tiga tungku kekerabatan), yang menjadi pilar dalam bermasyarakat. Upacara-upacara adat seperti Mangongkal Holi
  (pembersihan tulang leluhur), Mangalahat Horbo (ritual penyembelihan kerbau), dan perayaan Pardebata
  (penghormatan roh leluhur) masih dilaksanakan. Selain itu, nilai Marsirimpa (gotong royong) terus dipraktikkan
  untuk menjaga solidaritas sosial. Setiap anggota masyarakat memiliki peran yang diatur jelas, mulai dari Raja
  adat, Datu (ahli ritual), hingga penatua desa yang menjaga keseimbangan adat dan budaya.`;

  const geographyInfo = `Huta Bolon terletak pada ketinggian 900 meter di atas permukaan laut, dengan lanskap yang
  menakjubkan di tepi Danau Toba. Udara di kawasan ini sejuk dengan suhu rata-rata 20–24 °C, menjadikan lingkungan
  sangat nyaman untuk pertanian hortikultura. Tanah vulkanik yang subur mendukung tanaman kopi, sayuran, dan
  jagung yang menjadi sumber ekonomi warga. Di sekitar desa juga terdapat hutan adat yang masih dijaga secara
  kolektif untuk kelestarian sumber air dan kayu tradisional.`

  const mainAttractions = [
    { title: "Rumah Adat Batak Toba", image: rumahAdat },
    { title: "Danau Toba", image: danauToba },
    { title: "Pemandian Air Panas", image: aekPanas },
    { title: "Pusat Kerajinan Tenun", image: kerajinanTenun },
    { title: "Bukit Holbung", image: bukitHolbung },
    { title: "Makam Raja", image: makamRaja },
    { title: "Pertunjukan Sigale-gale", image: sigaleGale }
  ];

  return (
    <div className="about-village">
      {/* Hero Section */}
      <section className="village-hero">
        <div className="hero-content">
          <h1>Desa Huta Bolon</h1>
          <p>Sentra Budaya dan Adat Batak Toba di Pulau Samosir</p>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="quick-facts">
        <div className="facts-container">
          <div className="fact-card">
            <FaMapMarkerAlt className="fact-icon" />
            <h3>Lokasi</h3>
            <p>{villageInfo.location}</p>
          </div>
          <div className="fact-card">
            <FaUsers className="fact-icon" />
            <h3>Populasi</h3>
            <p>{villageInfo.population.toLocaleString()} jiwa</p>
          </div>
          <div className="fact-card">
            <FaCalendarAlt className="fact-icon" />
            <h3>Berdiri</h3>
            <p>Tahun {villageInfo.established}</p>
          </div>
          <div className="fact-card">
            <FaTree className="fact-icon" />
            <h3>Luas Wilayah</h3>
            <p>{villageInfo.area}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="village-content">
        <div className="content-container">
          {/* History Section */}
          <div className="info-section">
            <div className="section-header">
              <FaHistory className="section-icon" />
              <h2>Sejarah Desa</h2>
            </div>
            <p>{villageInfo.history}</p>
            <p>
              Dari generasi ke generasi, Huta Bolon mempertahankan reputasinya sebagai pusat musyawarah adat,
              tempat berkumpulnya raja-raja kecil di sekitar Danau Toba. Banyak cerita tentang perundingan damai,
              penyelesaian sengketa tanah, dan sumpah persaudaraan lahir di balai adat desa ini. Bahkan,
              beberapa ukiran gorga di rumah adat Huta Bolon masih memuat simbol-simbol keberanian menghadapi
              kolonialisme pada masa lampau.
            </p>
            <div className="historical-images">
              <img
                src="https://source.unsplash.com/random/400x300/?batak,house"
                alt="Rumah Adat Batak"
              />
              <img
                src="https://source.unsplash.com/random/400x300/?batak,culture"
                alt="Tradisi Budaya"
              />
            </div>
          </div>

          {/* Culture Section */}
          <div className="info-section">
            <div className="section-header">
              <FaUsers className="section-icon" />
              <h2>Budaya & Adat Istiadat</h2>
            </div>
            <p>{cultureInfo}</p>
            <ul className="culture-list">
              <li>Upacara Mangongkal Holi (ritual tulang leluhur)</li>
              <li>Gondang Sabangunan (musik adat Batak)</li>
              <li>Upacara perkawinan adat Batak</li>
              <li>Gotong royong Marsirimpa</li>
              <li>Pemilihan Raja adat melalui musyawarah</li>
            </ul>
          </div>

          {/* Geography Section */}
          <div className="info-section">
            <div className="section-header">
              <FaWater className="section-icon" />
              <h2>Kondisi Geografis</h2>
            </div>
            <p>{geographyInfo}</p>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6786786786787!2d98.67867867867867!3d2.6786786786786784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwNDAnNDMuMiJOIDk4wrA0MCczOS4yIkU!5e0!3m2!1sen!2sid!4v1626786786786!5m2!1sen!2sid"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Peta Lokasi Desa Huta Bolon"
              ></iframe>
            </div>
          </div>

          {/* Attractions Section */}
          <div className="info-section">
            <div className="section-header">
              <FaTree className="section-icon" />
              <h2>Dayatarik Utama</h2>
            </div>
            <div className="attractions-grid">
              {mainAttractions.map((attraction, index) => (
                <div className="attraction-card" key={index}>
                  <div className="attraction-image">
                    <img src={attraction.image} alt={attraction.title} />
                  </div>
                  <h3>{attraction.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutVillage;