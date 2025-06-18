
import React from 'react';
import { GitBranch, Cloud, Database, Cpu, CheckCircle, AlertCircle } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Automated Website CI/CD Pipeline',
      description: 'Created an automated deployment CI/CD Pipeline for a website using Jenkins, Docker, AWS services with GitHub as central storage. Configured AWS EC2 instances to set up project infrastructure.',
      technologies: ['Jenkins', 'Docker', 'AWS EC2', 'GitHub', 'CI/CD'],
      icon: <GitBranch className="text-green-400" size={24} />,
      type: 'group_project',
      status: 'completed',
      commits: 47,
      lines: '2.3k'
    },
    {
      title: 'IaC Deployment for AWS Infrastructure',
      description: 'Design and implement highly available and scalable infrastructure for web application on AWS. Architecture leverages AWS services to handle varying loads and maintain high availability across multiple AZs.',
      technologies: ['AWS', 'Infrastructure as Code', 'High Availability', 'Auto Scaling', 'Load Balancer'],
      icon: <Cloud className="text-blue-400" size={24} />,
      type: 'personal_project',
      status: 'completed',
      commits: 23,
      lines: '1.8k'
    },
    {
      title: 'Storage Management System',
      description: 'Comprehensive S3 storage solution including backup strategies, static web hosting, data archival with Glacier, and cross-region replication for disaster recovery and performance optimization.',
      technologies: ['AWS S3', 'Glacier', 'Cross-Region Replication', 'Static Web Hosting', 'Backup'],
      icon: <Database className="text-cyan-400" size={24} />,
      type: 'personal_project',
      status: 'completed',
      commits: 31,
      lines: '1.5k'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 relative bg-black">
      <div className="container mx-auto">
        <div className="terminal-window mb-8">
          <div className="terminal-header">
            <div className="terminal-dot close"></div>
            <div className="terminal-dot minimize"></div>
            <div className="terminal-dot maximize"></div>
            <span className="text-green-400 ml-4">aditya@projects:~$</span>
          </div>
          <div className="p-6">
            <div className="terminal-line">
              <span className="text-green-400">aditya@portfolio:~$</span>
              <span className="text-white ml-2">git log --oneline --graph</span>
            </div>
            <div className="terminal-line">
              <span className="text-green-400">* Featured projects repository initialized</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="terminal-window boot-sequence"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="terminal-header">
                <div className="terminal-dot close"></div>
                <div className="terminal-dot minimize"></div>
                <div className="terminal-dot maximize"></div>
                <span className="text-green-400 ml-4">{project.title.toLowerCase().replace(/\s+/g, '_')}.git</span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    {project.icon}
                    <span className="text-green-400 font-mono text-sm">#{project.type}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {project.status === 'completed' ? (
                      <CheckCircle className="text-green-400" size={16} />
                    ) : (
                      <AlertCircle className="text-yellow-400" size={16} />
                    )}
                    <span className="text-green-400 font-mono text-xs">[{project.status.toUpperCase()}]</span>
                  </div>
                </div>

                <h3 className="text-white font-bold text-lg mb-3 glow-text">
                  {project.title}
                </h3>

                <div className="terminal-line mb-4">
                  <span className="text-green-400"># Description</span>
                </div>
                <p className="text-green-300 text-sm leading-relaxed mb-4 font-mono">
                  {project.description}
                </p>

                <div className="terminal-line mb-2">
                  <span className="text-green-400"># Technologies</span>
                </div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-green-400/10 text-green-400 border border-green-400/30 text-xs font-mono hover:bg-green-400/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="border-t border-green-400/30 pt-4">
                  <div className="terminal-line">
                    <span className="text-green-400">COMMITS: {project.commits}</span>
                    <span className="text-green-400 ml-4">LINES: {project.lines}</span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <button className="text-green-400 hover:text-white font-mono text-sm border border-green-400 px-3 py-1 hover:bg-green-400/10 transition-colors">
                      [VIEW CODE]
                    </button>
                    <button className="text-green-400 hover:text-white font-mono text-sm border border-green-400 px-3 py-1 hover:bg-green-400/10 transition-colors">
                      [DETAILS]
                    </button>
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
              <span className="text-white ml-2">git status</span>
            </div>
            <div className="terminal-line">
              <span className="text-green-400">On branch main</span>
            </div>
            <div className="terminal-line">
              <span className="text-green-400">Your branch is up to date with 'origin/main'.</span>
            </div>
            <div className="terminal-line">
              <span className="text-green-400">nothing to commit, working tree clean</span>
            </div>
            <div className="terminal-line mt-4">
              <span className="text-green-400">aditya@portfolio:~$</span>
              <span className="text-white ml-2">echo "More projects coming soon..."</span>
            </div>
            <div className="terminal-line">
              <span className="text-green-400">More projects coming soon...</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
