
import React from 'react';
import { Award, Building, CheckCircle } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: 'Amazon Web Services (AWS)',
      provider: 'SevenMentor & Training Pvt Ltd Pune',
      status: 'CERTIFIED',
      color: 'yellow'
    },
    {
      title: 'RedHat Certified System Administrator (RHEL 9)',
      provider: 'SevenMentor & Training Pvt Ltd Pune',
      status: 'CERTIFIED',
      color: 'red'
    },
    {
      title: 'Cisco Certified Network Associate (CCNA)',
      provider: 'SevenMentor & Training Pvt Ltd Pune',
      status: 'CERTIFIED',
      color: 'blue'
    }
  ];

  return (
    <section id="certificates" className="py-20 px-6 relative bg-black">
      <div className="container mx-auto">
        <div className="terminal-window mb-8">
          <div className="terminal-header">
            <div className="terminal-dot close"></div>
            <div className="terminal-dot minimize"></div>
            <div className="terminal-dot maximize"></div>
            <span className="text-green-400 ml-4">aditya@certificates:~$</span>
          </div>
          <div className="p-6">
            <div className="terminal-line">
              <span className="text-green-400">aditya@portfolio:~$</span>
              <span className="text-white ml-2">ls -la /etc/certificates/</span>
            </div>
            <div className="terminal-line">
              <span className="text-green-400">total 3</span>
            </div>
            <div className="terminal-line">
              <span className="text-green-400">drwxr-xr-x 2 aditya aditya 4096 Dec 18 2024 .</span>
            </div>
            <div className="terminal-line">
              <span className="text-green-400">-rw-r--r-- 1 aditya aditya 2048 Dec 18 2024 aws.cert</span>
            </div>
            <div className="terminal-line">
              <span className="text-green-400">-rw-r--r-- 1 aditya aditya 2048 Dec 18 2024 rhel9.cert</span>
            </div>
            <div className="terminal-line">
              <span className="text-green-400">-rw-r--r-- 1 aditya aditya 2048 Dec 18 2024 ccna.cert</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={cert.title}
              className="terminal-window boot-sequence"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="terminal-header">
                <div className="terminal-dot close"></div>
                <div className="terminal-dot minimize"></div>
                <div className="terminal-dot maximize"></div>
                <span className="text-green-400 ml-4">{cert.title.toLowerCase().replace(/\s+/g, '_')}.cert</span>
              </div>
              <div className="p-6">
                <div className="terminal-line mb-4">
                  <Award className={`text-${cert.color}-400 mr-2`} size={20} />
                  <span className="text-green-400"># Certificate Details</span>
                </div>
                
                <div className="space-y-2">
                  <div className="terminal-line">
                    <span className="text-white">TITLE="{cert.title}"</span>
                  </div>
                  <div className="terminal-line">
                    <Building className="text-green-400 mr-2" size={14} />
                    <span className="text-green-300">PROVIDER="{cert.provider}"</span>
                  </div>
                  <div className="terminal-line">
                    <CheckCircle className={`text-${cert.color}-400 mr-2`} size={14} />
                    <span className={`text-${cert.color}-400 font-bold`}>STATUS="{cert.status}"</span>
                  </div>
                </div>

                <div className="mt-4 p-2 border border-green-400 scan-line">
                  <div className="terminal-line justify-center">
                    <span className={`text-${cert.color}-400 font-mono text-sm`}>
                      [{cert.status}]
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 terminal-window">
          <div className="p-6">
            <div className="terminal-line">
              <span className="text-green-400">aditya@portfolio:~$</span>
              <span className="text-white ml-2">echo "Certificates validation complete"</span>
            </div>
            <div className="terminal-line">
              <span className="text-green-400">Certificates validation complete</span>
            </div>
            <div className="terminal-line">
              <span className="text-green-400">[INFO] All certificates are valid and verified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
