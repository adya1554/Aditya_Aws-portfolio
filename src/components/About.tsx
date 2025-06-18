
import React from 'react';
import { MapPin, Phone, Mail, Linkedin, GitBranch, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
            <span className="text-primary">About</span> Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="cyber-border bg-card/50 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-primary mb-4 font-mono">$ cat profile.txt</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Motivated and technically skilled graduate with a solid foundation in AWS cloud services 
                and Linux system administration. Experienced in managing Linux environments, using the 
                command line for daily tasks, and working with AWS services like EC2, S3, IAM, and VPC.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg mt-4">
                Comfortable with basic server management, networking concepts, and troubleshooting. 
                Eager to contribute to a cloud-focused team, grow in a professional IT environment, 
                and continue building expertise as an AWS Engineer or Linux Administrator.
              </p>
            </div>

            <div className="cyber-border bg-card/50 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-accent mb-4 font-mono">$ ls education/</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="text-lg font-semibold text-foreground">B.C.A - Rani Channamma University</h4>
                  <p className="text-primary font-mono">K.L.E' Society's BCA College, Nipani</p>
                  <div className="flex items-center gap-4 text-muted-foreground text-sm">
                    <span>CGPA: 7.0</span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      2024 Sept
                    </span>
                  </div>
                </div>
                <div className="border-l-2 border-accent pl-4">
                  <h4 className="text-lg font-semibold text-foreground">HSC - Karnataka Board</h4>
                  <div className="flex items-center gap-4 text-muted-foreground text-sm">
                    <span>Percentage: 66.33%</span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      2021
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="cyber-border bg-card/50 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-accent mb-6 font-mono">$ contact --info</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="text-primary" size={20} />
                  <span>+91 9964190491</span>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="text-primary" size={20} />
                  <span>Adityamagadum108@gmail.com</span>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
                  <MapPin className="text-primary" size={20} />
                  <span>Pune, Maharashtra - 411005</span>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="text-primary" size={20} />
                  <span>LinkedIn Profile</span>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
                  <GitBranch className="text-primary" size={20} />
                  <span>GitLab Profile</span>
                </div>
              </div>
            </div>

            <div className="cyber-border bg-card/50 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-primary mb-4 font-mono">$ soft_skills --list</h3>
              <div className="flex flex-wrap gap-3">
                {['Troubleshooting', 'Good Communication', 'Active Listening', 'Flexible', 'Collaboration', 'Teamwork'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-primary/10 text-primary border border-primary/30 rounded-full text-sm hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
