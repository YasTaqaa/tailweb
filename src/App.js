import React, {Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const Product = lazy(() => import('./Product'));
const Features = lazy(() => import('./Features'));
const Navbar = lazy(() => import('./Navbar'));
const Video = lazy(() => import('./video'));
const Profil = lazy(() => import('./profil'));

const App = () => (

    <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Features" element={<Features />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/video" element={<Video />} />
        <Route path="/profil" element={<Profil />} />
        </Routes>
      </Suspense>
    </Router>
 );
 
export default App;
