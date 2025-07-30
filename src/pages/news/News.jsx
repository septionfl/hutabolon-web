import React from "react";
import { Link } from "react-router-dom";
import "./News.scss";
import { FaCalendarAlt, FaClock, FaSearch } from "react-icons/fa";

const News = () => {
  const newsCategories = [
    { id: 1, name: "Semua Berita" },
    { id: 2, name: "Pengumuman" },
    { id: 3, name: "Kegiatan" },
    { id: 4, name: "Pembangunan" }
  ];

  const newsList = [
    {
      id: 1,
      title: "Festival Budaya Huta Bolon 2023",
      excerpt: "Desa Huta Bolon akan mengadakan festival budaya tahunan dengan berbagai atraksi tradisional...",
      date: "15 Oktober 2023",
      readTime: "3 min read",
      category: "Kegiatan",
      image: "https://source.unsplash.com/random/400x300/?indonesia,village"
    },
    {
      id: 2,
      title: "Pembangunan Jalan Desa Selesai",
      excerpt: "Proyek pembangunan jalan desa sepanjang 2 km telah selesai dikerjakan...",
      date: "5 Oktober 2023",
      readTime: "2 min read",
      category: "Pembangunan",
      image: "https://source.unsplash.com/random/400x300/?construction,road"
    },
    {
      id: 3,
      title: "Pelatihan Pengolahan Hasil Pertanian",
      excerpt: "Dinas Pertanian kabupaten akan mengadakan pelatihan untuk warga desa...",
      date: "28 September 2023",
      readTime: "4 min read",
      category: "Pengumuman",
      image: "https://source.unsplash.com/random/400x300/?agriculture,training"
    },
    {
      id: 4,
      title: "Penerimaan Bantuan Sosial Tahap II",
      excerpt: "Pendaftaran bantuan sosial tahap kedua akan dibuka mulai minggu depan...",
      date: "20 September 2023",
      readTime: "2 min read",
      category: "Pengumuman",
      image: "https://source.unsplash.com/random/400x300/?social,help"
    }
  ];

  return (
    <div className="news-page">
      <section className="news-hero">
        <div className="hero-content">
          <h1>Berita Desa Huta Bolon</h1>
          <p>Informasi terkini tentang kegiatan dan perkembangan desa</p>
          <div className="search-bar">
            <input type="text" placeholder="Cari berita..." />
            <button><FaSearch /></button>
          </div>
        </div>
      </section>

      <section className="news-container">
        <div className="news-sidebar">
          <h3>Kategori Berita</h3>
          <ul className="category-list">
            {newsCategories.map(category => (
              <li key={category.id}>
                <button className="category-btn">
                  {category.name}
                </button>
              </li>
            ))}
          </ul>

          <div className="popular-news">
            <h3>Berita Populer</h3>
            <div className="popular-item">
              <Link to="/berita/1">Festival Budaya Huta Bolon 2023</Link>
              <span>15 Okt 2023</span>
            </div>
            <div className="popular-item">
              <Link to="/berita/2">Pembangunan Jalan Desa Selesai</Link>
              <span>5 Okt 2023</span>
            </div>
          </div>
        </div>

        <div className="news-main">
          <div className="news-grid">
            {newsList.map(news => (
              <Link to={`/berita/${news.id}`} className="news-card" key={news.id}>
                <div className="news-image">
                  <img src={news.image} alt={news.title} />
                  <span className="news-category">{news.category}</span>
                </div>
                <div className="news-content">
                  <h3>{news.title}</h3>
                  <p className="news-excerpt">{news.excerpt}</p>
                  <div className="news-meta">
                    <span><FaCalendarAlt /> {news.date}</span>
                    <span><FaClock /> {news.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="pagination">
            <button className="active">1</button>
            <button>2</button>
            <button>3</button>
            <button>Next →</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;