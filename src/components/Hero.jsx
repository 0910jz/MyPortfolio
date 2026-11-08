import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';

import profileImg from '../assets/profile.jpg';
import gradToga from '../assets/grad_toga_new.png';
import gradBarong from '../assets/grad_barong_new.png';

const photos = [
  { src: profileImg, label: 'The builder' },
  { src: gradToga, label: 'The graduate' },
  { src: gradBarong, label: 'The celebration' },
];

const Hero = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const stepPhoto = (direction) => {
    setPhotoIndex((current) => (current + direction + photos.length) % photos.length);
  };

  return (
    <section id="home" className="hero-section">
      <motion.div
        className="hero-copy"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
      >
        <p className="hero-eyebrow"><span className="availability-dot" /> Computer Science · Philippines</p>
        <p className="hero-intro">Hello, I’m James Christopher</p>
        <h1 className="hero-title">A little<br /><span>curious.</span></h1>
        <p className="hero-role">Developer <i>✳</i> AI enthusiast <i>✳</i> data explorer</p>
        <p className="hero-description">
          I turn curious ideas into useful things for the web — from thoughtful interfaces to AI-powered experiments.
          Currently exploring what happens when good code meets a little imagination.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="button-primary">See what I make <ArrowUpRight size={17} /></a>
          <a href="#contact" className="button-quiet">Say hello <ArrowDownRight size={17} /></a>
        </div>
        <div className="hero-note"><Sparkles size={15} /> Powered by curiosity (and probably iced coffee)</div>
      </motion.div>

      <motion.div
        className="hero-portrait-wrap"
        style={{ perspective: 1200 }}
        initial={{ opacity: 0, scale: 0.97, x: 18 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.12 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.button
            key={photoIndex}
            type="button"
            className="hero-portrait"
            aria-label={`Show next photo. Current photo ${photoIndex + 1} of ${photos.length}`}
            onClick={() => stepPhoto(1)}
            initial={{ rotateY: -82, opacity: 0.6, scale: 0.96 }}
            animate={{ rotateY: 0, opacity: 1, scale: 1 }}
            exit={{ rotateY: 82, opacity: 0.6, scale: 0.96 }}
            transition={{ duration: 0.38, ease: [0.22, 0.7, 0.2, 1] }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <img src={photos[photoIndex].src} alt={`James Christopher Esteban — ${photos[photoIndex].label}`} />
          </motion.button>
        </AnimatePresence>
        <div className="portrait-controls" aria-label="Choose a portrait">
          <span>{String(photoIndex + 1).padStart(2, '0')} <span className="portrait-count">/ {String(photos.length).padStart(2, '0')}</span></span>
          <div>
            <button type="button" onClick={() => stepPhoto(-1)} aria-label="Previous photo"><ArrowLeft size={17} /></button>
            <button type="button" onClick={() => stepPhoto(1)} aria-label="Next photo"><ArrowRight size={17} /></button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
