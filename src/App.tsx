import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import SplashLayout from './components/SplashLayout';

import SplashStart from './pages/SplashStart';
import Home from './pages/Home';
import Create from './pages/Create';
import Wishes from './pages/Wishes';
import WishDetail from './pages/WishDetail'; // ← เพิ่ม
import Stages from './pages/Stages';
import About from './pages/About';

export default function App() {
  return (
    <Routes>
      <Route element={<SplashLayout />}>
        <Route path="/" element={<SplashStart />} />
      </Route>

      <Route element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/wishes" element={<Wishes />} />
        <Route path="/wish/:id" element={<WishDetail />} />   {/* ← เพิ่ม */}
        <Route path="/stages" element={<Stages />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}
