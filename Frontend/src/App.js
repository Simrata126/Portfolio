import React, { useState, useEffect } from 'react';
import Header from './components/header';
import Projects from './components/projects';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';
import './App.css';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/projects')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  return (
    <div className="App">
      <Header />
      <About />
      <Projects projects={projects} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
