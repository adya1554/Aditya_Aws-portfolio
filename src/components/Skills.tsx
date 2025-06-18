
import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 relative bg-black">
      <div className="container mx-auto">
        <div className="terminal-window mb-8">
          <div className="terminal-header">
            <div className="terminal-dot close"></div>
            <div className="terminal-dot minimize"></div>
            <div className="terminal-dot maximize"></div>
            <span className="text-green-400 ml-4">aditya@skills:~$</span>
          </div>
          <div className="p-6">
            <div className="terminal-line">
              <span className="text-green-400">aditya@portfolio:~$</span>
              <span className="text-white ml-2">./skills.sh --display-all</span>
            </div>
            <div className="terminal-line">
              <span className="text-green-400">Loading skill modules...</span>
            </div>
          </div>
        </div>

        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-dot close"></div>
            <div className="terminal-dot minimize"></div>
            <div className="terminal-dot maximize"></div>
            <span className="text-green-400 ml-4">skills_output.log</span>
          </div>
          <div className="p-6">
            {/* Languages/Frameworks */}
            <div className="mb-8">
              <div className="terminal-line mb-4">
                <span className="text-green-400">[INFO] Loading Languages/Frameworks module...</span>
              </div>
              <div className="skill-box p-4 border border-green-400">
                <div className="terminal-line mb-3">
                  <span className="text-white font-bold">## LANGUAGES_FRAMEWORKS ##</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {['Python', 'SQL', 'HTML', 'CSS', 'Shell Scripting'].map((skill) => (
                    <div key={skill} className="terminal-line">
                      <span className="text-green-400">├─</span>
                      <span className="text-green-300 ml-2">{skill}</span>
                      <span className="text-green-400 ml-auto">[OK]</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tools/Others */}
            <div className="mb-8">
              <div className="terminal-line mb-4">
                <span className="text-green-400">[INFO] Loading Tools/Others module...</span>
              </div>
              <div className="skill-box p-4 border border-blue-400">
                <div className="terminal-line mb-3">
                  <span className="text-blue-400 font-bold">## TOOLS_OTHERS ##</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {['Docker', 'Git', 'Jenkins', 'Apache', 'Nginx', 'Oracle VirtualBox'].map((skill) => (
                    <div key={skill} className="terminal-line">
                      <span className="text-blue-400">├─</span>
                      <span className="text-blue-300 ml-2">{skill}</span>
                      <span className="text-blue-400 ml-auto">[OK]</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Cloud (AWS) */}
            <div className="mb-8">
              <div className="terminal-line mb-4">
                <span className="text-green-400">[INFO] Loading AWS Cloud module...</span>
              </div>
              <div className="skill-box p-4 border border-yellow-400">
                <div className="terminal-line mb-3">
                  <span className="text-yellow-400 font-bold">## AWS_CLOUD_SERVICES ##</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {['VPC', 'EC2', 'EBS', 'EFS', 'SNS', 'IAM', 'S3', 'ELB', 'ASG', 'RDS', 'ECS', 'Lambda', 'DynamoDB', 'CloudFormation', 'CloudFront', 'Route 53'].map((skill) => (
                    <div key={skill} className="terminal-line">
                      <span className="text-yellow-400">├─</span>
                      <span className="text-yellow-300 ml-2">{skill}</span>
                      <span className="text-yellow-400 ml-auto">[OK]</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Linux (RHEL 9) */}
            <div className="mb-8">
              <div className="terminal-line mb-4">
                <span className="text-green-400">[INFO] Loading Linux RHEL 9 module...</span>
              </div>
              <div className="skill-box p-4 border border-red-400">
                <div className="terminal-line mb-3">
                  <span className="text-red-400 font-bold">## LINUX_RHEL9 ##</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {['User & Group Mgmt', 'SUDO', 'Partitions & File Systems', 'Job Automation', 'Managing SELinux', 'SSH'].map((skill) => (
                    <div key={skill} className="terminal-line">
                      <span className="text-red-400">├─</span>
                      <span className="text-red-300 ml-2">{skill}</span>
                      <span className="text-red-400 ml-auto">[OK]</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Networking (CCNA) */}
            <div className="mb-8">
              <div className="terminal-line mb-4">
                <span className="text-green-400">[INFO] Loading Networking CCNA module...</span>
              </div>
              <div className="skill-box p-4 border border-purple-400">
                <div className="terminal-line mb-3">
                  <span className="text-purple-400 font-bold">## NETWORKING_CCNA ##</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {['OSI Model', 'IP Address', 'IPv4', 'Port Number', 'Subnetting', 'Firewall', 'VPNs', 'Network Address Translation'].map((skill) => (
                    <div key={skill} className="terminal-line">
                      <span className="text-purple-400">├─</span>
                      <span className="text-purple-300 ml-2">{skill}</span>
                      <span className="text-purple-400 ml-auto">[OK]</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Operating Systems */}
            <div className="mb-8">
              <div className="terminal-line mb-4">
                <span className="text-green-400">[INFO] Loading Operating Systems module...</span>
              </div>
              <div className="skill-box p-4 border border-cyan-400">
                <div className="terminal-line mb-3">
                  <span className="text-cyan-400 font-bold">## OPERATING_SYSTEMS ##</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {['Linux', 'Ubuntu', 'Windows', 'Command Line', 'System Administration'].map((skill) => (
                    <div key={skill} className="terminal-line">
                      <span className="text-cyan-400">├─</span>
                      <span className="text-cyan-300 ml-2">{skill}</span>
                      <span className="text-cyan-400 ml-auto">[OK]</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Status */}
            <div className="terminal-line">
              <span className="text-green-400">[SUCCESS] All skill modules loaded successfully</span>
            </div>
            <div className="terminal-line">
              <span className="text-green-400">aditya@portfolio:~$</span>
              <span className="terminal-cursor ml-1"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
