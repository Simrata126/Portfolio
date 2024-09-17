import React from 'react';
// Import the PNG image from the components folder
import myImage from './myImage.png'; // Update this path if needed

function About() {
  return (
    <section id="about">
      {/* Use the imported PNG image in the img tag */}
      <img src={myImage} alt="Simrata Singh" />
      <div className="description">
        <h2>About Me</h2>
        <p>I am a passionate security engineer with expertise in web development and cybersecurity. I specialize in...</p>
      </div>
    </section>
  );
}

export default About;
