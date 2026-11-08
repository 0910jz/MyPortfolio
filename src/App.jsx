import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import TechStack, { skillTickerItems } from './components/TechStack';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function SkillCarousel() {
  return (
    <div className="skill-ticker" role="region" aria-label={`Moving technology carousel, ${skillTickerItems.length} skills`}>
      <div className="skill-ticker-viewport">
        <div className="skill-ticker-track">
          {[...skillTickerItems, ...skillTickerItems].map((skill, index) => (
            <span key={`${skill}-${index}`} aria-hidden={index >= skillTickerItems.length}>
              {skill}<i aria-hidden="true">✳</i>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState('dark');

  return (
    <div className="portfolio-app" data-theme={theme}>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="ambient-glow" aria-hidden="true" />
      <Navbar theme={theme} onToggleTheme={() => setTheme((current) => current === 'dark' ? 'light' : 'dark')} />
      <main id="main-content">
        <Hero />
        <SkillCarousel />
        <Projects />
        <About />
        <Education />
        <TechStack />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
