import React from 'react';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import About from './Pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BikersPage from './Pages/BikersPage';


function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/bikers" element={<BikersPage />} />
      </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
