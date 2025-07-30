import React from "react";
import { useParams, Link } from "react-router-dom";
import "./UMKMDetail.scss";
import { FaStore, FaPhone, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

// ✅ import gambar agar tidak error saat build
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

const UMKMDetail = () => {
  const { id } = useParams();

  const businesses = [
    {
      id: 1,
      name: "Toko Op. Chelsea",
      category: "Toko",
      address: "Pantai Pasir Putih Parbaba",
      phone: "+6281271791228",
      image: opChelsea,
      products: [
        { name: "Makanan Ringan" },
        { name: "Minuman" },
        { name: "Watersport" },
        { name: "Homestay" },
      ],
    },
    {
      id: 2,
      name: "Diva Souvenir",
      category: "Kerajinan Tangan",
      address: "Pantai Parbaba",
      phone: "+6282183099878",
      image: dv,
      products: [
        { name: "Aksesoris" },
        { name: "Pakaian" },
        { name: "Tas" },
        { name: "Gantungan Kunci" },
      ],
    },
    {
      id: 3,
      name: "Dermaga Hotel",
      category: "Homestay",
      address: "Pantai Parbaba",
      phone: "+6281211888191",
      image: dermaga,
    },
    {
      id: 4,
      name: "Erina Homestay",
      category: "Homestay",
      address: "Huta Bolon Dusun 1",
      phone: "+6282167616246",
      image: erina,
    },
    {
      id: 5,
      name: "Anju Homestay",
      category: "Homestay",
      address: "Huta Bolon Dusun 1",
      phone: "+6282274975119",
      image: anju,
    },
    {
      id: 6,
      name: "Usaha Tomi Sihaloho",
      category: "Kerajinan Tangan",
      address: "Pantai Parbaba",
      phone: "+6282123043444",
      image: tomi,
      products: [
        { name: "Makanan dan Minuman" },
        { name: "Penginapan" },
        { name: "Pondokan pantai" },
        { name: "Watersport" },
      ],
    },
    {
      id: 7,
      name: "Toko Ayu",
      category: "Toko",
      address: "Pantai Parbaba",
      phone: "+6282167651315",
      image: ayu,
      products: [
        { name: "Pakaian" },
        { name: "Selendang" },
        { name: "Daster" },
      ],
    },
    {
      id: 8,
      name: "Warung Op. Eca",
      category: "Kuliner",
      address: "Huta Bolon Dusun 1",
      phone: "+6285373365632",
      image: opeca,
      products: [
        { name: "Mie Gomak" },
        { name: "Gorengan" },
      ],
    },
    {
      id: 9,
      name: "Usaha Ulos Fitra Hulu",
      category: "Kerajinan Tangan",
      address: "Huta Bolon Dusun 1",
      phone: "+6281260938175",
      image: ulos,
    },
    {
      id: 10,
      name: "Putra Samuel Homestay",
      category: "Homestay",
      address: "Huta Bolon Dusun 1",
      phone: "+6282139741555",
      image: putra,
    },
    {
      id: 11,
      name: "Grisel Homestay",
      category: "Homestay",
      address: "Huta Bolon",
      phone: "+6281260821433",
      image: grisel,
    },
    {
      id: 12,
      name: "RM. Salero Basamo",
      category: "Kuliner",
      address: "Huta Bolon",
      phone: "+6281289805353",
      image: salero,
      products: [
        { name: "Ayam Penyet" },
        { name: "Mie Ayam" },
        { name: "Nasi Goreng" },
        { name: "Masakan Padang" },
        { name: "Aneka Minuman" },
      ],
    },
  ];

  const business = businesses.find((b) => b.id === parseInt(id));
  if (!business) {
    return (
      <div className="umkm-detail">
        <p>UMKM tidak ditemukan.</p>
        <Link to="/umkm" className="back-btn">
          Kembali ke Daftar UMKM
        </Link>
      </div>
    );
  }

  return (
    <div className="umkm-detail">
      <div className="business-header">
        <div className="business-image">
          {business.image ? (
            <img
              src={business.image}
              alt={business.name}
              className="business-photo"
            />
          ) : (
            <FaStore className="placeholder-icon" />
          )}
        </div>
        <div className="business-info">
          <h1>{business.name}</h1>
          <p className="category">{business.category}</p>
        </div>
      </div>

      <div className="business-details">
        <div className="detail-section contact-info">
          <h2>Alamat & Kontak</h2>
          <p>
            <FaMapMarkerAlt /> {business.address}
          </p>
          <p>
            <FaPhone /> {business.phone}
          </p>
          <a
            href={`https://wa.me/${business.phone.replace("+", "")}`}
            className="whatsapp-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp /> Hubungi via WhatsApp
          </a>
        </div>

        {business.products && (
          <div className="detail-section products">
            <h2>Produk yang Ditawarkan</h2>
            <ul>
              {business.products.map((product, index) => (
                <li key={index}>{product.name}</li>
              ))}
            </ul>
          </div>
        )}

        <Link to="/umkm" className="back-btn">
          Kembali ke Daftar UMKM
        </Link>
      </div>
    </div>
  );
};

export default UMKMDetail;
