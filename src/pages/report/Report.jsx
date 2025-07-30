import React from 'react';
import './Report.scss';
import ilustrasi from '../../assets/ilustrasi.png'; // Pastikan path ini sesuai

const Report = () => {
  return (
    <div className="report-page">
      <h2>Pelaporan Warga Desa Huta Bolon</h2>
      <p className="description">
        Layanan ini disediakan untuk memudahkan Anda dalam menyampaikan keluhan, pengaduan, atau laporan
        terkait kondisi lingkungan, fasilitas umum, sosial kemasyarakatan, serta pelayanan desa. Setiap laporan
        yang masuk akan ditindaklanjuti oleh perangkat desa sesuai prioritas dan urgensi.
      </p>
      <p className="description">
        Kami percaya bahwa kerja sama antara warga dan pemerintah desa adalah kunci dalam menciptakan
        lingkungan yang lebih aman, nyaman, dan tertib. Silakan klik tombol di bawah ini untuk mengisi formulir pelaporan.
      </p>

      <div className="report-button-container">
        <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLSfUhC3tpaSbYeupzFgVdyBKLqmosZLJpPeiwk1u0EkmMdO_WQ/viewform?usp=header" 
          target="_blank" 
          rel="noopener noreferrer"
          className="report-button"
        >
          Isi Formulir Laporan
        </a>
      </div>

      <div className="report-illustration">
        <img src={ilustrasi} alt="Ilustrasi pelaporan warga" />
      </div>
    </div>
  );
};

export default Report;
