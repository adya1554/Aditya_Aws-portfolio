
import React from 'react';
import { MapPin, Phone, Mail, Linkedin, GitBranch, Calendar, User, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 relative bg-black">
      <div className="container mx-auto">
        <div className="terminal-window mb-8">
          <div className="terminal-header">
            <div className="terminal-dot close"></div>
            <div className="terminal-dot minimize"></div>
            <div className="terminal-dot maximize"></div>
            <span className="text-green-400 ml-4">aditya@about:~$</span>
          </div>
          <div className="p-6">
            <div className="terminal-line">
              <span className="text-green-400">aditya@portfolio:~$</span>
              <span className="text-white ml-2">cat /etc/profile/about.conf</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot close"></div>
                <div className="terminal-dot minimize"></div>
                <div className="terminal-dot maximize"></div>
                <span className="text-green-400 ml-4">profile.txt</span>
              </div>
              <div className="p-6">
                <div className="terminal-line mb-4">
                  <span className="text-green-400"># Personal Profile</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="terminal-line">
                    <span className="text-white">NAME="Aditya Magadum"</span>
                  </div>
                  <div className="terminal-line">
                    <span className="text-white">ROLE="Cloud Engineer | Linux Admin"</span>
                  </div>
                  <div className="terminal-line">
                    <span className="text-white">STATUS="Available for opportunities"</span>
                  </div>
                  <div className="terminal-line">
                    <span className="text-green-400"># Description</span>
                  </div>
                  <div className="terminal-output text-green-300">
                    <p>Motivated and technically skilled graduate with solid foundation in</p>
                    <p>AWS cloud services and Linux system administration. Experienced in</p>
                    <p>managing Linux environments, command line operations, and AWS services</p>
                    <p>including EC2, S3, IAM, and VPC.</p>
                    <br />
                    <p>Comfortable with server management, networking concepts, and</p>
                    <p>troubleshooting. Eager to contribute to cloud-focused teams and</p>
                    <p>continue building expertise in cloud architecture.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot close"></div>
                <div className="terminal-dot minimize"></div>
                <div className="terminal-dot maximize"></div>
                <span className="text-green-400 ml-4">education.log</span>
              </div>
              <div className="p-6">
                <div className="terminal-line mb-4">
                  <span className="text-green-400"># Education History</span>
                </div>
                <div className="space-y-4">
                  <div className="border-l-2 border-green-400 pl-4">
                    <div className="terminal-line">
                      <BookOpen className="text-green-400 mr-2" size={16} />
                      <span className="text-white font-bold">B.C.A - Rani Channamma University</span>
                    </div>
                    <div className="terminal-line">
                      <span className="text-green-300">K.L.E' Society's BCA College, Nipani</span>
                    </div>
                    <div className="terminal-line">
                      <span className="text-green-400">CGPA: 7.0</span>
                      <Calendar className="text-green-400 mx-2" size={14} />
                      <span className="text-green-400">Sept 2024</span>
                    </div>
                  </div>
                  <div className="border-l-2 border-green-400 pl-4">
                    <div className="terminal-line">
                      <BookOpen className="text-green-400 mr-2" size={16} />
                      <span className="text-white font-bold">HSC - Karnataka Board</span>
                    </div>
                    <div className="terminal-line">
                      <span className="text-green-400">Percentage: 66.33%</span>
                      <Calendar className="text-green-400 mx-2" size={14} />
                      <span className="text-green-400">2021</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot close"></div>
                <div className="terminal-dot minimize"></div>
                <div className="terminal-dot maximize"></div>
                <span className="text-green-400 ml-4">contact.info</span>
              </div>
              <div className="p-6">
                <div className="terminal-line mb-4">
                  <span className="text-green-400"># Contact Information</span>
                </div>
                <div className="space-y-3">
                  <div className="terminal-line">
                    <Phone className="text-green-400 mr-3" size={16} />
                    <span className="text-white">PHONE="+91 9964190491"</span>
                  </div>
                  <div className="terminal-line">
                    <Mail className="text-green-400 mr-3" size={16} />
                    <span className="text-white">EMAIL="Adityamagadum108@gmail.com"</span>
                  </div>
                  <div className="terminal-line">
                    <MapPin className="text-green-400 mr-3" size={16} />
                    <span className="text-white">LOCATION="Pune, Maharashtra - 411005"</span>
                  </div>
                  <div className="terminal-line">
                    <Linkedin className="text-green-400 mr-3" size={16} />
                    <span className="text-white">LINKEDIN="Available on request"</span>
                  </div>
                  <div className="terminal-line">
                    <GitBranch className="text-green-400 mr-3" size={16} />
                    <span className="text-white">GITLAB="Available on request"</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot close"></div>
                <div className="terminal-dot minimize"></div>
                <div className="terminal-dot maximize"></div>
                <span className="text-green-400 ml-4">soft_skills.sh</span>
              </div>
              <div className="p-6">
                <div className="terminal-line mb-4">
                  <span className="text-green-400">#!/bin/bash</span>
                </div>
                <div className="terminal-line mb-4">
                  <span className="text-green-400"># Soft Skills Array</span>
                </div>
                <div className="terminal-line mb-4">
                  <span className="text-white">skills=("troubleshooting" "communication" "active_listening" "flexibility" "collaboration" "teamwork")</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {['Troubleshooting', 'Communication', 'Active Listening', 'Flexibility', 'Collaboration', 'Teamwork'].map((skill) => (
                    <div
                      key={skill}
                      className="skill-box px-3 py-2 text-green-400 text-sm font-mono hover:bg-green-400/10 transition-colors scan-line"
                    >
                      [{skill.toUpperCase()}]
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 terminal-window">
          <div className="p-6">
            <div className="terminal-line">
              <span className="text-green-400">aditya@portfolio:~$</span>
              <span className="text-white ml-2">echo "Profile loaded successfully"</span>
            </div>
            <div className="terminal-line">
              <span className="text-green-400">Profile loaded successfully</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
