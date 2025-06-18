
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages/Frameworks',
      skills: ['Python', 'SQL', 'HTML', 'CSS', 'Shell Scripting'],
      bgColor: 'bg-green-400/20',
      borderColor: 'border-green-400/50',
      textColor: 'text-green-400'
    },
    {
      title: 'Tools/Others',
      skills: ['Docker', 'Git', 'Jenkins', 'Apache', 'Nginx', 'Oracle VirtualBox'],
      bgColor: 'bg-blue-400/20',
      borderColor: 'border-blue-400/50',
      textColor: 'text-blue-400'
    },
    {
      title: 'Cloud (AWS)',
      skills: ['VPC', 'EC2', 'EBS', 'EFS', 'SNS', 'IAM', 'S3', 'ELB', 'ASG', 'RDS', 'ECS', 'Lambda', 'DynamoDB', 'CloudFormation', 'CloudFront', 'Route 53'],
      bgColor: 'bg-primary/20',
      borderColor: 'border-primary/50',
      textColor: 'text-primary'
    },
    {
      title: 'Linux (RHEL 9)',
      skills: ['User & Group Mgmt', 'SUDO', 'Partitions & File Systems', 'Job Automation', 'Managing SELinux', 'SSH'],
      bgColor: 'bg-red-400/20',
      borderColor: 'border-red-400/50',
      textColor: 'text-red-400'
    },
    {
      title: 'Networking (CCNA)',
      skills: ['OSI Model', 'IP Address', 'IPv4', 'Port Number', 'Subnetting', 'Firewall', 'VPNs', 'Network Address Translation'],
      bgColor: 'bg-purple-400/20',
      borderColor: 'border-purple-400/50',
      textColor: 'text-purple-400'
    },
    {
      title: 'Operating Systems',
      skills: ['Linux', 'Ubuntu', 'Windows', 'Command Line', 'System Administration'],
      bgColor: 'bg-yellow-400/20',
      borderColor: 'border-yellow-400/50',
      textColor: 'text-yellow-400'
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 relative">
      <div className="container mx-auto">
        {/* Terminal Header */}
        <div className="bg-background/90 border border-border rounded-t-lg p-4 font-mono">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-4 text-accent">AdityaMagadum</span>
            <span className="text-muted-foreground">~/welcome</span>
          </div>
          <div className="text-muted-foreground">
            <p>$ ls</p>
            <p className="flex gap-8 mt-1">
              <span>about-me.txt</span>
              <span>skills.md</span>
              <span>personal-projects.md</span>
            </p>
            <p>contact-me.md</p>
          </div>
        </div>

        {/* Terminal Content */}
        <div className="bg-background/90 border-l border-r border-b border-border rounded-b-lg p-6 font-mono">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-accent">AdityaMagadum</span>
              <span className="text-muted-foreground">~/welcome</span>
            </div>
            <p className="text-muted-foreground mb-2">$ cat about-me.txt</p>
            <div className="text-foreground leading-relaxed mb-4">
              <p>Hi I am Mayur Davisiya.I am an Energetic Full Stack Engineer having 5+ years of experience in building robust</p>
              <p>code for next generation applications with a can-do attitude.</p>
              <p>I enjoy learning new things and can assimilate new ideas quickly.</p>
              <p>I am a tech enthusiast, open source supporter-cum-contributor and a strong believer of solving any problem in</p>
              <p>hand with innovation.</p>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-accent">AdityaMagadum</span>
              <span className="text-muted-foreground">~/welcome</span>
            </div>
            <p className="text-muted-foreground mb-2">$ du -sh skills.md</p>
            <p className="text-red-400 mb-4">500 MB skills.md</p>
          </div>

          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-accent">AdityaMagadum</span>
              <span className="text-muted-foreground">~/welcome</span>
            </div>
            <p className="text-muted-foreground mb-4">$ skp-md-viewer skills.md</p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className={`${category.bgColor} ${category.borderColor} border rounded-lg p-4 animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className={`${category.textColor} font-bold text-lg mb-3 text-center`}>
                  {category.title}
                </h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="text-foreground text-sm p-2 bg-background/50 rounded border border-border/30 hover:bg-background/80 transition-all duration-300"
                      style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Terminal Commands */}
        <div className="mt-8 bg-background/90 border border-border rounded-lg p-4 font-mono">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-accent">AdityaMagadum</span>
            <span className="text-muted-foreground">~/welcome</span>
          </div>
          <p className="text-muted-foreground">$ echo "Always Learning"</p>
          <div className="mt-2 text-foreground">
            <p>Technology evolves rapidly, and so do I. Currently expanding my knowledge in</p>
            <p>
              <span className="text-primary">Kubernetes</span>, 
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
