import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Projects from './components/Projects';
import Locations from './components/Locations';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main style={{ flex: '1 0 auto' }}>
        <Hero />
        <Stats />
        <AboutUs />
        <Services />
        <WhyChooseUs />
        <Projects />
        <Locations />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
