import React, { useEffect } from "react";
import "./Wisata.scss";
import AOS from "aos";
import "aos/dist/aos.css";

// Import gambar dari assets
import museumImage from "../../assets/museum.jpg";
import museum1Image from "../../assets/museum1.jpg";
import museum2Image from "../../assets/museum2.jpg";
import museum3Image from "../../assets/museum3.jpg";
import pantaiImage from "../../assets/ppp.jpeg";
import parbaba3Image from "../../assets/parbaba3.jpg";
import parbaba5Image from "../../assets/parbaba5.jpg";
import kampungUlosImage from "../../assets/kampungulos.jpg";
import hutaraja1Image from "../../assets/hutaraja1.jpg";
import hutaraja2Image from "../../assets/hutaraja2.jpg";
import hutaraja3Image from "../../assets/hutaraja3.jpg";

const Wisata = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="wisata-page">
      <header className="wisata-hero" data-aos="fade">
        <div className="wisata-hero-content" data-aos="fade-up" data-aos-delay="300">
          <h1>Wisata Budaya & Alam di Huta Bolon dan Sekitarnya</h1>
          <p>Menelusuri Sejarah, Budaya, dan Alam yang Menakjubkan</p>
        </div>
      </header>

      {/* Museum Huta Bolon */}
      <section className="museum-section">
        <div className="museum-container">
          <div className="museum-text" data-aos="fade-right">
            <h2>Museum Huta Bolon</h2>
            <p>
              Museum Huta Bolon Simanindo adalah museum budaya yang terletak di Desa Simanindo, Kecamatan Simanindo, Kabupaten Samosir, Sumatera Utara. Museum ini didirikan pada tahun 1969 dan menempati kompleks rumah adat Batak Toba yang dulunya milik Raja Sidauruk, seorang pemimpin adat Batak Toba. Struktur utama museum adalah Rumah Bolon, rumah adat besar Batak Toba yang dibangun pada abad ke-19 dan menjadi contoh arsitektur tradisional Batak yang masih utuh, lengkap dengan ukiran khas Batak, atap pelana tinggi, dan dinding kayu.

            </p>
            <p>
              Terdapat juga contoh bangunan Perkampungan Desa Batak (Original Batak Village) yang tersedia pada lokasi yang dapat diamati pengunjung. Mulai dari rumah tradisional adat Batak (rumah bolon) serta lumbung padi tradisional. Selain itu semua area terdapat papan penjelasan yang dapat memperkaya pengetahuan wisatawan yang berkunjung.

            </p>
            <p>
              	Koleksi museum sangat kaya akan benda-benda peninggalan leluhur Batak, seperti ulos adat langka, perlengkapan upacara adat, alat musik tradisional, serta mainan tradisional Batak. Seluruh koleksi ini tertata rapi dan terpelihara, memberikan wawasan mendalam tentang kehidupan, adat, dan warisan budaya masyarakat Batak Toba. Museum ini dibuka setiap hari dari pukul 08.00 hingga 17.00, dengan tiket masuk sebesar Rp 20.000 per orang. Fasilitas yang tersedia meliputi toilet, ruang pameran, area pertunjukan, area parkir, coffee shop, dan toko souvenir. 

            </p>
            <p>
              Jarak dari huta bolon +- 4 km

            </p>
            <ul>
              <li>✔ Koleksi pakaian tradisional, senjata, dan ukiran Batak</li>
              <li>✔ Rumah adat Bolon sebagai bagian dari museum</li>
              <li>✔ Pertunjukan tari Sigale-gale setiap hari tertentu</li>
            </ul>
          </div>
          <div className="museum-image" data-aos="fade-left">
            <img
              src={museum1Image}
              alt="Museum Huta Bolon Tambahan 1"
              style={{ marginTop: "1rem", borderRadius: "12px", width: "100%", objectFit: "cover" }}
            />
            <img
              src={museum2Image}
              alt="Museum Huta Bolon Tambahan 2"
              style={{ marginTop: "1rem", borderRadius: "12px", width: "100%", objectFit: "cover" }}
            />
            <img
              src={museum3Image}
              alt="Museum Huta Bolon Tambahan 3"
              style={{ marginTop: "1rem", borderRadius: "12px", width: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* Pantai Pasir Putih Parbaba */}
      <section className="wisata-section">
        <div className="museum-container">
          <div className="museum-text" data-aos="fade-right">
            <h2>Pantai Pasir Putih Parbaba</h2>
            <p>
              Pantai Pasir Putih Parbaba terkenal karena hamparan pasir putih dan air Danau Toba yang jernih yang memikat wisatawan. Pantai Parbaba berada di tepi Danau Toba, sehingga menawarkan pemandangan indah berupa bukit-bukit hijau yang mengelilingi danau. Keindahan alam ini berpadu dengan udara sejuk dan suasana asri, menjadikan Parbaba destinasi favorit di Pulau Samosir. Pantai ini juga dikenal dengan beragam wahana permainan air seperti banana boat, jet ski, sepeda air, kano, hingga odong-odong air, yang bisa dinikmati oleh wisatawan dari berbagai usia. Fasilitas yang tersedia cukup lengkap, mulai dari kamar mandi, ruang ganti, restoran, warung makan, toko cenderamata, penyewaan tikar, hingga penginapan dengan harga terjangkau. Lokasi pantai ini dapat diakses dengan mudah menggunakan kendaraan pribadi maupun umum dari Medan, dengan rute yang jelas dan sudah banyak dikenal wisatawan, serta penyeberangan ke Samosir yang terorganisir.
            </p>
            <p>
              Selain menjadi tempat rekreasi, Pantai Pasir Putih Parbaba juga dapat menjadi lokasi berbagai kegiatan budaya dan festival lokal. Kegiatan ini tidak hanya menambah daya tarik wisata, tetapi juga memperkenalkan kekayaan budaya masyarakat Samosir kepada para pengunjung. Perpaduan antara wisata alam, permainan air, dan nuansa budaya lokal menjadikan Pantai Parbaba sebagai destinasi yang menawarkan pengalaman liburan yang berkesan.
            </p>
            <ul>
              <li>✔ Pasir putih yang luas dan bersih</li>
              <li>✔ Fasilitas permainan air dan kano</li>
              <li>✔ Tempat kuliner lokal di sekitar pantai</li>
            </ul>
          </div>
          <div className="museum-image" data-aos="fade-left">
            <img src={pantaiImage} alt="Pantai Pasir Putih Parbaba" />
            <img
              src={parbaba3Image}
              alt="Pantai Parbaba Tambahan 1"
              style={{ marginTop: "1rem", borderRadius: "12px", width: "100%", objectFit: "cover" }}
            />
            <img
              src={parbaba5Image}
              alt="Pantai Parbaba Tambahan 2"
              style={{ marginTop: "1rem", borderRadius: "12px", width: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* Kampung Ulos Huta Raja */}
      <section className="wisata-section">
        <div className="museum-container">
          <div className="museum-text" data-aos="fade-right">
            <h2>Kampung Ulos Huta Raja</h2>
            <p>
              Kampung Ulos Huta Raja adalah kawasan budaya yang masih mempertahankan rumah adat Batak Toba asli, sekaligus menjadi pusat kerajinan ulos tradisional. Di sini wisatawan bisa melihat langsung proses menenun ulos oleh para pengrajin, berinteraksi dengan penduduk lokal, serta mempelajari filosofi ulos yang sakral dalam budaya Batak.
            </p>
            <p>
              Kawasan ini juga memiliki bangunan perkampungan Batak kuno (Original Batak Village) dengan rumah bolon, lumbung padi tradisional, dan ornamen ukiran khas Batak yang mempesona. Semua area dilengkapi papan penjelasan yang informatif bagi wisatawan.
            </p>
            <p>
              Koleksi budaya di Kampung Ulos Huta Raja sangat kaya, mulai dari ulos adat langka, perlengkapan upacara, alat musik tradisional, hingga permainan tradisional Batak. Tempat ini buka setiap hari pukul 08.00–17.00, dengan tiket masuk sekitar Rp 20.000 per orang. Fasilitas pendukung seperti toilet, area parkir, coffee shop, dan toko souvenir juga tersedia.
            </p>
            <ul>
              <li>✔ Demonstrasi menenun ulos secara langsung</li>
              <li>✔ Rumah adat Batak yang masih asli</li>
              <li>✔ Edukasi budaya ulos dan filosofi Batak</li>
            </ul>
          </div>
          <div className="museum-image" data-aos="fade-left">
            <img
              src={hutaraja1Image}
              alt="Kampung Ulos Huta Raja Tambahan 1"
              style={{ marginTop: "1rem", borderRadius: "12px", width: "100%", objectFit: "cover" }}
            />
            <img
              src={hutaraja2Image}
              alt="Kampung Ulos Huta Raja Tambahan 2"
              style={{ marginTop: "1rem", borderRadius: "12px", width: "100%", objectFit: "cover" }}
            />
            <img
              src={hutaraja3Image}
              alt="Kampung Ulos Huta Raja Tambahan 3"
              style={{ marginTop: "1rem", borderRadius: "12px", width: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wisata;
