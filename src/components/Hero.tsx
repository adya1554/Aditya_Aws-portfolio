
import React, { useState, useEffect } from 'react';
import { ChevronDown, Terminal, Cloud, Server } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const roles = ['AWS Cloud Engineer', 'Linux Administrator', 'DevOps Enthusiast', 'System Administrator'];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    let charIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (charIndex < currentRole.length) {
        setDisplayText(currentRole.substring(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          const deleteInterval = setInterval(() => {
            if (charIndex > 0) {
              setDisplayText(currentRole.substring(0, charIndex - 1));
              charIndex--;
            } else {
              clearInterval(deleteInterval);
              setCurrentIndex((prev) => (prev + 1) % roles.length);
            }
          }, 50);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-6">
      <div className="container mx-auto text-center relative z-10">
        <div className="mb-8 flex justify-center space-x-8 opacity-60">
          <div className="animate-float">
            <Terminal className="text-primary" size={32} />
          </div>
          <div className="animate-float" style={{ animationDelay: '1s' }}>
            <Cloud className="text-accent" size={32} />
          </div>
          <div className="animate-float" style={{ animationDelay: '2s' }}>
            <Server className="text-primary" size={32} />
          </div>
        </div>

        <div className="mb-4">
          <span className="text-accent font-mono text-lg">$</span>
          <span className="text-muted-foreground font-mono text-lg ml-2">whoami</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 glow-text">
          <span className="text-primary">Aditya</span>{' '}
          <span className="text-foreground">Magadum</span>
        </h1>

        <div className="mb-8 text-xl md:text-2xl font-mono h-8">
          <span className="text-accent">&gt;</span>{' '}
          <span className="text-foreground">{displayText}</span>
          <span className="terminal-cursor ml-1"></span>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
          Motivated cloud engineer with expertise in <span className="text-primary">AWS services</span>, 
          <span className="text-accent"> Linux administration</span>, and 
          <span className="text-primary"> DevOps practices</span>. 
          Ready to architect scalable solutions in the cloud.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#projects"
            className="cyber-border bg-transparent hover:bg-primary/10 text-primary border-2 border-primary px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="bg-primary hover:bg-primary/90 text-cyber-dark px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
          >
            Get In Touch
          </a>
        </div>

        <div className="animate-bounce">
          <ChevronDown className="text-primary mx-auto" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
