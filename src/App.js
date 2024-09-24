import React from 'react';
import Header from './components/Header';
import './App.css';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import WorkSection from './components/WorkSection';
import IconSkills from './components/IconSkills';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <IconSkills />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
