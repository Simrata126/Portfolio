import React from 'react';

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      
      <div className="project">
        <h3>E-Commerce Website</h3>
        <p><strong>June 2022 - July 2022</strong></p>
        <ul>
          <li><strong>Tech Stack:</strong> Django Framework, Python, JavaScript</li>
          <li>Developed a highly secure and user-friendly e-commerce platform for Splen Technologies.</li>
          <li>Gained comprehensive expertise in the Django framework, including models, views, templates, and forms.</li>
          <li>Ensured data security and compliance with OWASP best practices.</li>
        </ul>
      </div>

      <div className="project">
        <h3>CodeHound</h3>
        <p><strong>April 2024 - May 2024</strong></p>
        <ul>
          <li><strong>Tech Stack:</strong> Python, Flask, Bash Scripting, Security Tools</li>
          <li>Designed and developed CodeHound, an automation tool aimed at bug bounty hunters for efficient enumeration and vulnerability discovery.</li>
          <li>Integrated multiple industry-leading security tools to streamline reconnaissance and vulnerability scanning.</li>
        </ul>
      </div>

      <div className="project">
        <h3>Keyloggers Detection Tool</h3>
        <p><strong>November 2023 - December 2023</strong></p>
        <ul>
          <li><strong>Tech Stack:</strong> Python, System-Level Security Tools</li>
          <li>Developed an automated keylogger detection tool designed to identify and remove malicious keylogging software from systems.</li>
          <li>Improved system security by providing users with instant remediation.</li>
        </ul>
      </div>
    </section>
  );
}

export default Projects;
