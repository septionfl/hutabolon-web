import React from "react";
import { useParams, Link } from "react-router-dom";
import "./NewsDetail.scss";
import { FaCalendarAlt, FaClock, FaUser, FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";

const NewsDetail = () => {
  const { id } = useParams();
  
  // In a real app, you would fetch this data based on the ID
  const newsItem = {
    id: 1,
    title: "Festival Budaya Huta Bolon 2023",
    date: "15 Oktober 2023",
    author: "Admin Desa",
    readTime: "3 min read",
    category: "Kegiatan",
    image: "https://source.unsplash.com/random/800x500/?indonesia,village,festival",
    content: `
      <p>Desa Huta Bolon akan menggelar Festival Budaya tahunan pada tanggal 28-30 November 2023. Acara ini bertujuan untuk melestarikan dan mempromosikan kebudayaan asli Batak Toba kepada generasi muda dan wisatawan.</p>
      
      <h3>Rangkaian Acara</h3>
      <p>Festival akan menampilkan berbagai atraksi budaya termasuk:</p>
      <ul>
        <li>Tari Tor-Tor massal</li>
        <li>Pameran kerajinan tangan tradisional</li>
        <li>Lomba memasak makanan khas Batak</li>
        <li>Pertunjukan musik Gondang Sabangunan</li>
      </ul>
      
      <p>Kepala Desa Huta Bolon, Bapak Raja Sitanggang, menyatakan bahwa festival ini merupakan bagian dari upaya pelestarian budaya sekaligus menarik wisatawan ke desa.</p>
      
      <h3>Partisipasi Masyarakat</h3>
      <p>Seluruh warga desa diharapkan berpartisipasi aktif dalam penyelenggaraan festival. Pendaftaran untuk peserta lomba dan stan pameran dibuka hingga 15 November 2023.</p>
    `
  };

  return (
    <div className="news-detail">
      <article className="news-article">
        <div className="article-header">
          <span className="article-category">{newsItem.category}</span>
          <h1>{newsItem.title}</h1>
          <div className="article-meta">
            <span><FaUser /> {newsItem.author}</span>
            <span><FaCalendarAlt /> {newsItem.date}</span>
            <span><FaClock /> {newsItem.readTime}</span>
          </div>
        </div>

        <div className="article-image">
          <img src={newsItem.image} alt={newsItem.title} />
        </div>

        <div 
          className="article-content" 
          dangerouslySetInnerHTML={{ __html: newsItem.content }} 
        />

        <div className="article-footer">
          <div className="social-share">
            <span>Bagikan:</span>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaWhatsapp /></a>
          </div>
          <Link to="/berita" className="back-btn">
            Kembali ke Daftar Berita
          </Link>
        </div>
      </article>

      <aside className="related-news">
        <h3>Berita Terkait</h3>
        <div className="related-item">
          <Link to="/berita/2">
            <h4>Pembangunan Jalan Desa Selesai</h4>
            <span>5 Oktober 2023</span>
          </Link>
        </div>
        <div className="related-item">
          <Link to="/berita/3">
            <h4>Pelatihan Pengolahan Hasil Pertanian</h4>
            <span>28 September 2023</span>
          </Link>
        </div>
      </aside>
    </div>
  );
};

export default NewsDetail;