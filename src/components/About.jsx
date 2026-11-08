import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative space-y-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary/50 -translate-x-4 -translate-y-4" />

          <div className="glass rounded-3xl p-8 relative overflow-hidden group">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-secondary/10 blur-3xl rounded-full group-hover:bg-secondary/20 transition-colors" />

            <h2 className="text-4xl font-bold font-outfit mb-6 text-white text-glow-sm">About Me</h2>
            <p className="text-gray-400 leading-relaxed mb-6 font-light text-lg">
              Hello! I'm <span className="text-white font-medium">James Christopher Esteban</span>, a Computer Science graduate based in the Philippines. I specialize in bridging the gap between high-performance backends and intuitive user interfaces, with a deep interest in Artificial Intelligence.
            </p>
            <p className="text-gray-400 leading-relaxed font-light text-lg">
              I also have extensive experience handling and analyzing data using <span className="text-secondary font-medium">RapidMiner</span>, <span className="text-primary font-medium">Power BI</span>, and <span className="text-tertiary font-medium">Tableau</span>. My mission is to build intelligent systems that solve real-world problems.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-8"
        >
          <div className="glass p-8 rounded-3xl border-l-4 border-secondary">
            <h3 className="text-xl font-bold mb-3 text-secondary uppercase tracking-wider">My Vision</h3>
            <p className="text-gray-400">To lead the development of AI-driven solutions that empower developers and simplify complex business processes.</p>
          </div>

          <div className="glass p-8 rounded-3xl border-l-4 border-tertiary">
            <h3 className="text-xl font-bold mb-3 text-tertiary uppercase tracking-wider">Education</h3>
            <p className="text-white font-medium">Bachelor of Science in Computer Science</p>
            <p className="text-gray-400">University of Batangas (2022-2026)</p>
          </div>

          <div className="glass p-8 rounded-3xl border-l-4 border-primary">
            <h3 className="text-xl font-bold mb-3 text-primary uppercase tracking-wider">Location</h3>
            <p className="text-gray-400">Batangas, Philippines (Available for remote opportunities)</p>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default About;
