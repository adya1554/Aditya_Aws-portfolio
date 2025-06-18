
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Certificates from '../components/Certificates';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import MatrixBackground from '../components/MatrixBackground';

const Index = () => {
  return (
    <div className="min-h-screen bg-cyber-darker text-foreground relative overflow-x-hidden">
      <MatrixBackground />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Certificates />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
