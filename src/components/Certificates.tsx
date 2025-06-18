
import React, { useState } from 'react';
import { Award, Upload, ExternalLink, Calendar, Building } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Certificates = () => {
  const [uploadedCerts, setUploadedCerts] = useState<File[]>([]);

  const certificates = [
    {
      title: 'Amazon Web Services (AWS)',
      provider: 'SevenMentor & Training Pvt Ltd Pune',
      icon: <Award className="text-primary" size={24} />,
      color: 'primary'
    },
    {
      title: 'RedHat Certified System Administrator (RHEL 9)',
      provider: 'SevenMentor & Training Pvt Ltd Pune',
      icon: <Award className="text-red-500" size={24} />,
      color: 'red-500'
    },
    {
      title: 'Cisco Certified Network Associate (CCNA)',
      provider: 'SevenMentor & Training Pvt Ltd Pune',
      icon: <Award className="text-blue-500" size={24} />,
      color: 'blue-500'
    }
  ];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setUploadedCerts(prev => [...prev, ...Array.from(files)]);
    }
  };

  return (
    <section id="certificates" className="py-20 px-6 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
            <span className="text-primary">Certificates</span> & Training
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4"></div>
          <p className="text-muted-foreground text-lg font-mono">$ ls certifications/</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {certificates.map((cert, index) => (
            <div
              key={cert.title}
              className="cyber-border bg-card/30 backdrop-blur-sm p-8 rounded-lg hover:scale-105 transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="animate-glow">
                  {cert.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-2 leading-tight">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                    <Building size={16} />
                    <span>{cert.provider}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className={`px-3 py-1 bg-${cert.color}/10 text-${cert.color} border border-${cert.color}/30 rounded-full text-xs font-mono`}>
                  CERTIFIED
                </span>
                <button className="text-primary hover:text-accent transition-colors">
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Upload Section */}
        <div className="max-w-4xl mx-auto">
          <div className="cyber-border bg-card/30 backdrop-blur-sm p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-primary mb-6 font-mono flex items-center gap-3">
              <Upload className="animate-bounce" />
              Upload Additional Certificates
            </h3>
            
            <div className="border-2 border-dashed border-primary/30 rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
              <input
                type="file"
                id="cert-upload"
                multiple
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleFileUpload}
                className="hidden"
              />
              <label
                htmlFor="cert-upload"
                className="cursor-pointer flex flex-col items-center gap-4"
              >
                <Upload className="text-primary" size={48} />
                <div>
                  <p className="text-lg font-medium text-foreground mb-2">
                    Drop your certificates here or click to browse
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Supports PDF, JPG, PNG files
                  </p>
                </div>
              </label>
            </div>

            {uploadedCerts.length > 0 && (
              <div className="mt-8">
                <h4 className="text-lg font-bold text-accent mb-4">Uploaded Certificates:</h4>
                <div className="grid gap-4">
                  {uploadedCerts.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-muted/10 rounded-lg border border-primary/20"
                    >
                      <div className="flex items-center gap-3">
                        <Award className="text-accent" size={20} />
                        <span className="text-foreground font-medium">{file.name}</span>
                        <span className="text-muted-foreground text-sm">
                          ({(file.size / 1024 / 1024).toFixed(2)} MB)
                        </span>
                      </div>
                      <button className="text-primary hover:text-accent transition-colors">
                        <ExternalLink size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
