
import React, { useState, useEffect } from 'react';
import { ChevronDown, Terminal, Server, Cpu } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bootSequence, setBootSequence] = useState(0);
  const [showPrompt, setShowPrompt] = useState(false);
  
  const roles = ['AWS Cloud Engineer', 'Linux System Administrator', 'DevOps Engineer', 'Terminal Wizard'];
  const bootMessages = [
    '[    0.000000] Linux version 5.15.0-aditya-custom',
    '[    0.001234] Command line: BOOT_IMAGE=/vmlinuz root=UUID=aditya-dev',
    '[    0.002456] CPU: AMD64 Family 19 Model 1 Stepping 1',
    '[    0.003678] Memory: 32GB available',
    '[    0.004890] Loading Aditya Magadum profile...',
    '[    0.005123] Initializing skill modules...',
    '[    0.006234] AWS services: [ OK ]',
    '[    0.007345] Linux admin: [ OK ]',
    '[    0.008456] DevOps tools: [ OK ]',
    '[    0.009567] System ready. Welcome!'
  ];

  useEffect(() => {
    const bootTimer = setInterval(() => {
      if (bootSequence < bootMessages.length) {
        setBootSequence(prev => prev + 1);
      } else {
        clearInterval(bootTimer);
        setTimeout(() => setShowPrompt(true), 1000);
      }
    }, 300);

    return () => clearInterval(bootTimer);
  }, [bootSequence]);

  useEffect(() => {
    if (!showPrompt) return;

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
  }, [currentIndex, showPrompt]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-6 bg-black">
      <div className="container mx-auto relative z-10">
        <div className="terminal-window max-w-4xl mx-auto">
          <div className="terminal-header">
            <div className="terminal-dot close"></div>
            <div className="terminal-dot minimize"></div>
            <div className="terminal-dot maximize"></div>
            <span className="text-green-400 ml-4">aditya@portfolio:~$</span>
          </div>

          <div className="p-8 min-h-96">
            {/* Boot Sequence */}
            <div className="mb-8">
              {bootMessages.slice(0, bootSequence).map((message, index) => (
                <div key={index} className="terminal-line boot-sequence text-green-400 text-sm">
                  {message}
                </div>
              ))}
            </div>

            {showPrompt && (
              <>
                <div className="mb-8 flex justify-center space-x-8 opacity-60">
                  <div className="animate-pulse">
                    <Terminal className="text-green-400" size={32} />
                  </div>
                  <div className="animate-pulse" style={{ animationDelay: '1s' }}>
                    <Server className="text-green-400" size={32} />
                  </div>
                  <div className="animate-pulse" style={{ animationDelay: '2s' }}>
                    <Cpu className="text-green-400" size={32} />
                  </div>
                </div>

                <div className="terminal-line mb-4">
                  <span className="text-green-400">aditya@portfolio:~$</span>
                  <span className="text-white ml-2">whoami</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text text-green-400 text-center glitch">
                  ADITYA MAGADUM
                </h1>

                <div className="terminal-line mb-8 justify-center">
                  <span className="text-green-400">root@system:~#</span>
                  <span className="text-white ml-2">cat /proc/role</span>
                </div>

                <div className="mb-8 text-xl md:text-2xl text-center">
                  <span className="text-green-400">&gt;</span>{' '}
                  <span className="text-white">{displayText}</span>
                  <span className="terminal-cursor ml-1"></span>
                </div>

                <div className="terminal-window mb-8">
                  <div className="p-6 bg-black border border-green-400">
                    <div className="terminal-line">
                      <span className="text-green-400">/*</span>
                    </div>
                    <div className="terminal-line">
                      <span className="text-white ml-4">* Motivated cloud engineer specializing in:</span>
                    </div>
                    <div className="terminal-line">
                      <span className="text-green-400 ml-4">* - AWS Services & Infrastructure</span>
                    </div>
                    <div className="terminal-line">
                      <span className="text-green-400 ml-4">* - Linux System Administration</span>
                    </div>
                    <div className="terminal-line">
                      <span className="text-green-400 ml-4">* - DevOps & Automation</span>
                    </div>
                    <div className="terminal-line">
                      <span className="text-white ml-4">* Ready to architect scalable cloud solutions</span>
                    </div>
                    <div className="terminal-line">
                      <span className="text-green-400">*/</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                  <a
                    href="#projects"
                    className="terminal-window bg-black hover:bg-green-900/20 text-green-400 border-2 border-green-400 px-8 py-4 font-mono transition-all duration-300 hover:shadow-lg terminal-glow scan-line"
                  >
                    [ VIEW PROJECTS ]
                  </a>
                  <a
                    href="#contact"
                    className="bg-green-400 hover:bg-green-300 text-black px-8 py-4 font-mono font-bold transition-all duration-300 hover:shadow-lg"
                  >
                    [ ESTABLISH CONNECTION ]
                  </a>
                </div>

                <div className="text-center">
                  <div className="terminal-line justify-center">
                    <span className="text-green-400">aditya@portfolio:~$</span>
                    <span className="text-white ml-2">scroll --down</span>
                  </div>
                  <div className="animate-bounce mt-4">
                    <ChevronDown className="text-green-400 mx-auto" size={32} />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
