import React from 'react';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {

  return (
    <>
    <Navbar />
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
    <Footer />
    </>
  )
}

export default App
