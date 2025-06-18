
import React from 'react';
import { Cloud, Server, Network, Code, Tool, Database } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Cloud (AWS)',
      icon: <Cloud className="text-primary" size={32} />,
      skills: ['VPC', 'EC2', 'EBS', 'EFS', 'SNS', 'IAM', 'S3', 'ELB', 'ASG', 'RDS', 'ECS', 'Lambda', 'DynamoDB', 'CloudFormation', 'CloudFront', 'Route 53'],
      color: 'primary'
    },
    {
      title: 'Linux (RHEL 9)',
      icon: <Server className="text-accent" size={32} />,
      skills: ['User & Group Mgmt', 'SUDO', 'Partitions & File Systems', 'Shell Scripting', 'Job Automation', 'Managing SELinux', 'SSH'],
      color: 'accent'
    },
    {
      title: 'Networking (CCNA)',
      icon: <Network className="text-purple-400" size={32} />,
      skills: ['OSI Model', 'IP Address', 'IPv4', 'Port Number', 'Subnetting', 'Firewall', 'VPNs', 'Network Address Translation'],
      color: 'purple-400'
    },
    {
      title: 'Tools & Servers',
      icon: <Tool className="text-blue-400" size={32} />,
      skills: ['Git', 'Apache', 'HTTP', 'Nginx', 'Linux', 'Ubuntu', 'Windows', 'Oracle VirtualBox', 'Docker'],
      color: 'blue-400'
    },
    {
      title: 'Technologies',
      icon: <Code className="text-green-400" size={32} />,
      skills: ['Python', 'SQL', 'HTML', 'CSS'],
      color: 'green-400'
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
            <span className="text-primary">Skill</span> Stack
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4"></div>
          <p className="text-muted-foreground text-lg font-mono">$ cat skills.json</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="cyber-border bg-card/30 backdrop-blur-sm p-8 rounded-lg hover:scale-105 transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="animate-glow">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground font-mono">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 bg-${category.color}/10 text-${category.color} border border-${category.color}/30 rounded-md text-sm font-mono hover:bg-${category.color}/20 transition-all duration-300 hover:scale-105`}
                    style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="cyber-border bg-card/30 backdrop-blur-sm p-8 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4 font-mono">$ echo "Always Learning"</h3>
            <p className="text-muted-foreground leading-relaxed">
              Technology evolves rapidly, and so do I. Currently expanding my knowledge in 
              <span className="text-primary"> Kubernetes</span>, 
              <span className="text-accent"> Terraform</span>, and 
              <span className="text-primary"> CI/CD pipelines</span> to stay at the forefront of cloud innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
