import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


function Root() {
  return (
    <>
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />     
        <Route path="/about" element={<About />} />
    </Routes>
    <Footer />
    </>
  )
}

export default Root