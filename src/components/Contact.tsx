
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, User, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
            <span className="text-primary">Get</span> In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4"></div>
          <p className="text-muted-foreground text-lg font-mono">$ ping aditya.magadum</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="cyber-border bg-card/30 backdrop-blur-sm p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary mb-6 font-mono">$ contact --info</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-muted/10 rounded-lg hover:bg-muted/20 transition-colors">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-foreground font-medium">Phone</p>
                    <p className="text-muted-foreground">+91 9964190491</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-muted/10 rounded-lg hover:bg-muted/20 transition-colors">
                  <div className="bg-accent/20 p-3 rounded-lg">
                    <Mail className="text-accent" size={24} />
                  </div>
                  <div>
                    <p className="text-foreground font-medium">Email</p>
                    <p className="text-muted-foreground">Adityamagadum108@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-muted/10 rounded-lg hover:bg-muted/20 transition-colors">
                  <div className="bg-purple-500/20 p-3 rounded-lg">
                    <MapPin className="text-purple-400" size={24} />
                  </div>
                  <div>
                    <p className="text-foreground font-medium">Location</p>
                    <p className="text-muted-foreground">Pune, Maharashtra - 411005</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="cyber-border bg-card/30 backdrop-blur-sm p-8 rounded-lg">
              <h3 className="text-xl font-bold text-accent mb-4 font-mono">$ availability --status</h3>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-500 font-medium">Available for opportunities</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Currently seeking full-time positions in Cloud Engineering, DevOps, or Linux Administration. 
                Open to both remote and on-site opportunities.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="cyber-border bg-card/30 backdrop-blur-sm p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-primary mb-6 font-mono">$ send --message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-foreground font-medium mb-2">
                    <User size={16} className="inline mr-2" />
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-muted/20 border border-muted/30 rounded-lg px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-foreground font-medium mb-2">
                    <Mail size={16} className="inline mr-2" />
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-muted/20 border border-muted/30 rounded-lg px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-foreground font-medium mb-2">
                  <MessageSquare size={16} className="inline mr-2" />
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full bg-muted/20 border border-muted/30 rounded-lg px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors"
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div>
                <label className="block text-foreground font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full bg-muted/20 border border-muted/30 rounded-lg px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Your message here..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-cyber-dark px-6 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/50 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="cyber-border bg-card/30 backdrop-blur-sm p-6 rounded-lg max-w-lg mx-auto">
            <p className="text-muted-foreground font-mono text-sm">
              <span className="text-accent">$</span> echo "Looking forward to connecting with you!"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
