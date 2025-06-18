
import React from 'react';
import { ExternalLink, Github, Server, Cloud, Database, GitBranch } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Automated Website CI/CD Pipeline',
      description: 'Created an automated deployment CI/CD Pipeline for a website using Jenkins, Docker, AWS services with GitHub as central storage. Configured AWS EC2 instances to set up project infrastructure. Ensured seamless automation from code to deployment.',
      technologies: ['Jenkins', 'Docker', 'AWS EC2', 'GitHub', 'CI/CD'],
      icon: <GitBranch className="text-primary" size={32} />,
      type: 'Group Project',
      status: 'Completed'
    },
    {
      title: 'IaC Deployment for AWS Infrastructure',
      description: 'Design and implement a highly available and scalable infrastructure for a web application on AWS. The architecture leverages AWS services to ensure the web application can efficiently handle varying loads, maintain high availability across multiple Availability Zones.',
      technologies: ['AWS', 'Infrastructure as Code', 'High Availability', 'Auto Scaling', 'Load Balancer'],
      icon: <Cloud className="text-blue-500" size={32} />,
      type: 'Personal Project',
      status: 'Completed'
    },
    {
      title: 'Storage Management System',
      description: 'Comprehensive S3 storage solution including backup strategies, static web hosting, data archival with Glacier, and cross-region replication for disaster recovery and performance optimization.',
      technologies: ['AWS S3', 'Glacier', 'Cross-Region Replication', 'Static Web Hosting', 'Backup'],
      icon: <Database className="text-green-500" size={32} />,
      type: 'Personal Project',
      status: 'Completed'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
            <span className="text-primary">Featured</span> Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4"></div>
          <p className="text-muted-foreground text-lg font-mono">$ git log --oneline</p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="cyber-border bg-card/30 backdrop-blur-sm rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="animate-glow">
                    {project.icon}
                  </div>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-primary/10 text-primary border border-primary/30 rounded text-xs font-mono">
                      {project.type}
                    </span>
                    <span className="px-2 py-1 bg-accent/10 text-accent border border-accent/30 rounded text-xs font-mono">
                      {project.status}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-muted/20 text-muted-foreground border border-muted/30 rounded-full text-xs hover:text-primary hover:border-primary/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <button className="flex items-center gap-2 text-primary hover:text-accent transition-colors font-mono text-sm">
                    <Github size={16} />
                    Code
                  </button>
                  <button className="flex items-center gap-2 text-primary hover:text-accent transition-colors font-mono text-sm">
                    <ExternalLink size={16} />
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="cyber-border bg-card/30 backdrop-blur-sm p-8 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4 font-mono">$ git status</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              These projects represent my journey in cloud engineering and DevOps. Each project tackles real-world challenges in infrastructure automation, scalability, and reliability.
            </p>
            <button className="cyber-border bg-transparent hover:bg-primary/10 text-primary border-2 border-primary px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
              View All Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
