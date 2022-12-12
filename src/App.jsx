import React from 'react';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {

  return (
    <>
    <Navbar />
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
      </Routes>
    </Router>
    <Footer />
    </>
  )
}

export default App
