import React from "react";
import { Link } from "react-router-dom";
import "./UMKM.scss";
import { FaStore, FaSearch } from "react-icons/fa";

// Import gambar satu per satu
import opChelsea from "../../assets/op-chelsea.jpeg";
import dv from "../../assets/dv.jpeg";
import dermaga from "../../assets/dermaga.jpeg";
import erina from "../../assets/erina.jpeg";
import anju from "../../assets/anju.jpeg";
import tomi from "../../assets/tomi.jpeg";
import ayu from "../../assets/ayu.jpeg";
import opeca from "../../assets/opeca.jpeg";
import ulos from "../../assets/ulos.jpeg";
import putra from "../../assets/putra.jpeg";
import grisel from "../../assets/grisel.jpeg";
import salero from "../../assets/salero.jpeg";

const UMKM = () => {
  const businessCategories = [
    { id: 1, name: "Kerajinan Tangan", count: 3 }, // kerajinan bertambah
    { id: 2, name: "Kuliner", count: 3 }, // kuliner bertambah
    { id: 3, name: "Homestay", count: 5 },
    { id: 4, name: "Toko", count: 2 },
  ];

  const featuredBusinesses = [
    { id: 1, name: "Toko Op. Chelsea", category: "Toko", image: opChelsea },
    { id: 2, name: "Diva Souvenir", category: "Kerajinan Tangan", image: dv },
    { id: 3, name: "Dermaga Hotel", category: "Homestay", image: dermaga },
    { id: 4, name: "Erina Homestay", category: "Homestay", image: erina },
    { id: 5, name: "Anju Homestay", category: "Homestay", image: anju },
    { id: 6, name: "Usaha Tomi Sihaloho", category: "Kerajinan Tangan", image: tomi },
    { id: 7, name: "Toko Ayu", category: "Toko", image: ayu },
    { id: 8, name: "Warung Op. Eca", category: "Kuliner", image: opeca },
    { id: 9, name: "Usaha Ulos", category: "Kerajinan Tangan", image: ulos },
    { id: 10, name: "Putra Samuel Homestay", category: "Homestay", image: putra },
    { id: 11, name: "Grisel Homestay", category: "Homestay", image: grisel },
    { id: 12, name: "RM. Salero Basamo", category: "Kuliner", image: salero },
  ];

  return (
    <div className="umkm-page">
      <section className="umkm-hero">
        <div className="hero-content">
          <h1>UMKM Huta Bolon</h1>
          <p>Dukung Ekonomi Lokal dan Temukan Produk Berkualitas</p>
          <div className="search-bar">
            <input type="text" placeholder="Cari UMKM..." />
            <button><FaSearch /></button>
          </div>
        </div>
      </section>

      <section className="categories-section">
        <h2>Kategori UMKM</h2>
        <div className="categories-grid">
          {businessCategories.map((category) => (
            <Link
              to={`/umkm?category=${category.id}`}
              className="category-card"
              key={category.id}
            >
              <h3>{category.name}</h3>
              <p>{category.count} Usaha</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="featured-section">
        <h2>UMKM Unggulan</h2>
        <div className="business-list">
          {featuredBusinesses.map((business) => (
            <Link
              to={`/umkm/${business.id}`}
              className="business-card"
              key={business.id}
            >
              <div className="business-image">
                <img
                  src={business.image}
                  alt={business.name}
                />
              </div>
              <div className="business-info">
                <h3>{business.name}</h3>
                <span className="category-badge">{business.category}</span>
              </div>
              <FaStore className="store-icon" />
            </Link>
          ))}
        </div>
      </section>

      <section className="umkm-notes">
        <p
          style={{
            fontStyle: "italic",
            textAlign: "center",
            margin: "2rem 0",
          }}
        >
          Catatan: Informasi UMKM di halaman ini belum mencakup semua UMKM
          yang ada di wilayah Huta Bolon dan sekitarnya. Masih banyak UMKM lain
          yang tidak kalah menarik, yang belum sempat kami dokumentasikan satu
          per satu.
        </p>
      </section>
    </div>
  );
};

export default UMKM;
