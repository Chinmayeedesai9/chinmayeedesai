import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experiences';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import background from './assets/wallpaper.jpeg';

function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-repeat"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="min-h-screen">
        <Navbar />
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}


export default App;
