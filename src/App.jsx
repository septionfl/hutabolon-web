import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar.jsx";
import Home from "./pages/home/Home.jsx";
import UMKM from "./pages/umkm/UMKM.jsx";
import UMKMDetail from './pages/UMKM/UMKMDetail.jsx';
import AboutVillage from './pages/about/About.jsx';
import Login from './pages/login/Login.jsx';
import Register from './pages/register/Register.jsx';
import Wisata from './pages/wisata/Wisata.jsx';
import Report from './pages/report/Report.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/umkm" element={<UMKM />} />
        <Route path="/umkm/:id" element={<UMKMDetail />} />
        <Route path="/tentang" element={<AboutVillage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/wisata" element={<Wisata />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </Router>
  );
}

export default App;