import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './pages/Header';
import Banner from './pages/Banner';
import Main from './pages/Main';
import Footer from './pages/Footer';
import BackToTopBtn from './components/BackToTopBtn';
import Login from './pages/Login';
import SignUp from './pages/SignUp'; // import the SignUp component
import Catalog from './pages/Catalog';
import Header2 from './pages/Header2';

function App() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY);
    });
    return () => {
      window.removeEventListener('scroll', () => {
        setScroll(window.scrollY);
      });
    };
  }, [scroll]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: false,
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} /> 
        <Route path="/catalog" element={
        <>
          <Header2 scroll={scroll} />
          <Catalog />
          <BackToTopBtn scroll={scroll} />
          </>
        } />
        <Route path="/*" element={<Login />} /> 
        <Route path="/dashboard" element={
        <>
          <Header scroll={scroll} />
          <Banner />
          <Main />
          <Footer />
          <BackToTopBtn scroll={scroll} />
        </>
      } />

      
      </Routes>
    </Router>
  );
}

export default App;