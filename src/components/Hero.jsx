import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Brain, Database } from 'lucide-react';

import profileImg from '../assets/profile.jpg';
import gradToga from '../assets/grad_toga_new.png';
import gradBarong from '../assets/grad_barong_new.png';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const images = [profileImg, gradToga, gradBarong];
  const extendedImages = [...images, images[0]];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentIndex === images.length) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, images.length]);

  useEffect(() => {
    if (currentIndex === 0 && !isTransitioning) {
      const timeout = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, isTransitioning]);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative pt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl"
      >
        <span className="inline-block px-4 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase mb-6">
          Computer Science Graduate
        </span>

        <div className="flex flex-col md:flex-row md:items-center gap-12 mb-8">
          <div className="flex-1">
            <h1 className="text-6xl md:text-8xl font-bold font-outfit leading-tight mb-6">
              I'm <span className="text-gradient">James Christopher</span> <br />
              <span className="text-white/90">Esteban</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mb-10 leading-relaxed">
              Aspiring <span className="text-white font-medium">Full Stack, AI Engineer, & Data Scientist</span> building intelligent systems that solve real-world problems.
            </p>
          </div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0, x: 20 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative hidden lg:block flex-shrink-0"
          >
            <div className="absolute inset-0 bg-primary/30 blur-[120px] rounded-full animate-pulse-slow" />
            <div className="h-[38rem] xl:h-[45rem] aspect-[1365/1348] rounded-[3rem] border-2 border-primary/40 shadow-2xl shadow-primary/30 relative z-10 overflow-hidden hover:scale-[1.02] transition-transform duration-700 shrink-0">
              <div
                className={`flex h-full w-full ${isTransitioning ? 'transition-transform duration-1000 ease-in-out' : ''}`}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {extendedImages.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`James Christopher Esteban ${idx}`}
                    className="w-full h-full object-cover object-top shrink-0 block"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative inline-block mb-12 lg:hidden text-center w-full"
        >
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-pulse-slow max-w-sm mx-auto" />
          <div className="w-full max-w-[24rem] aspect-[1365/1348] rounded-[2.5rem] border-2 border-primary/50 relative z-10 mx-auto shadow-2xl shadow-primary/20 overflow-hidden block">
            <div
              className={`flex h-full w-full ${isTransitioning ? 'transition-transform duration-1000 ease-in-out' : ''}`}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {extendedImages.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`James Christopher Esteban ${idx}`}
                  className="w-full h-full object-cover object-top shrink-0 block"
                />
              ))}
            </div>
          </div>
        </motion.div>

        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold flex items-center gap-2 transition-all duration-300 glow active:scale-95"
          >
            View Projects <ArrowRight size={20} />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-gray-700 hover:border-gray-500 bg-white/5 hover:bg-white/10 text-white rounded-full font-semibold transition-all duration-300 backdrop-blur-sm active:scale-95"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 border-t border-gray-800/50 pt-12"
      >
        {[
          {
            icon: <Code className="text-primary drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]" />,
            title: "Full-stack Dev",
            desc: "Modern web applications"
          },
          {
            icon: <Database className="text-secondary drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]" />,
            title: "Data Science",
            desc: "Insights & Analytics"
          },
          {
            icon: <Brain className="text-tertiary drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]" />,
            title: "AI Systems",
            desc: "Intelligent RL agents"
          }
        ].map((item, index) => (
          <div key={index} className="flex flex-col gap-3 group translate-y-0 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300 shadow-lg shadow-black/20">
              {item.icon}
            </div>
            <h3 className="text-lg font-bold font-outfit">{item.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;
