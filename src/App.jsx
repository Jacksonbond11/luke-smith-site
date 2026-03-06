import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Music from './components/Music';
import Tours from './components/Tours';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [bgIndex, setBgIndex] = useState(0);
  const backgrounds = ['/images/hero.jpeg', '/images/piano.jpeg'];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const threshold = windowHeight * 0.8;
      
      if (scrollY > threshold && bgIndex === 0) {
        setBgIndex(1);
      } else if (scrollY <= threshold && bgIndex === 1) {
        setBgIndex(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [bgIndex]);

  return (
    <div className="App min-h-screen">
      <Header />
      <div className="fixed inset-0 -z-10">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed transition-opacity duration-1000 grayscale"
          style={{ backgroundImage: "url('/images/hero.jpeg')", opacity: bgIndex === 0 ? 1 : 0 }}
        />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed transition-opacity duration-1000 grayscale"
          style={{ backgroundImage: "url('/images/piano.jpeg')", opacity: bgIndex === 1 ? 1 : 0 }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <main className="pt-24">
        <About />
        <Music />
        <Tours />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
