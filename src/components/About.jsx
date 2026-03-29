import React from 'react';
import { motion } from 'framer-motion';
import osBasics from '../assets/certs/os-basics.png';
import dataAnalytics from '../assets/certs/data-analytics.png';
import itFundamentals from '../assets/certs/it-fundamentals.png';
import dataScience from '../assets/certs/data-science.png';

const About = () => {
  const certifications = [
    {
      title: "Data Science Essentials with Python",
      issuer: "Cisco",
      date: "Oct 9, 2025",
      image: dataScience,
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Data Analytics Essentials",
      issuer: "Cisco",
      date: "Mar 30, 2025",
      image: dataAnalytics,
      color: "from-primary/20 to-secondary/20"
    },
    {
      title: "Operating Systems Basics",
      issuer: "Cisco",
      date: "Nov 5, 2024",
      image: osBasics,
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Information Technology Fundamentals",
      issuer: "IBM SkillsBuild",
      date: "Dec 28, 2022",
      image: itFundamentals,
      color: "from-blue-600/20 to-indigo-600/20"
    }
  ];

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
          {/* Decorative element */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary/50 -translate-x-4 -translate-y-4" />

          <div className="glass rounded-3xl p-8 relative overflow-hidden group">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-secondary/10 blur-3xl rounded-full group-hover:bg-secondary/20 transition-colors" />

            <h2 className="text-4xl font-bold font-outfit mb-6 text-white text-glow-sm">About Me</h2>
            <p className="text-gray-400 leading-relaxed mb-6 font-light text-lg">
              Hello! I'm <span className="text-white font-medium">James Christopher Esteban</span>, a passionate Computer Science student based in the Philippines. I specialize in bridging the gap between high-performance backends and intuitive user interfaces, with a deep interest in Artificial Intelligence.
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
            <p className="text-white font-medium">BS in Computer Science</p>
            <p className="text-gray-400">Current Student • Aspiring AI Engineer & Full Stack Developer</p>
          </div>

          <div className="glass p-8 rounded-3xl border-l-4 border-primary">
            <h3 className="text-xl font-bold mb-3 text-primary uppercase tracking-wider">Location</h3>
            <p className="text-gray-400">Batangas,Philippines (Available for remote opportunities)</p>
          </div>
        </motion.div>
      </div>

      {/* Certifications Row */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="pt-8"
      >
        <div className="mb-10">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-secondary mb-2">Verification</h2>
          <h3 className="text-3xl font-bold font-outfit">Professional <span className="text-white/60">Certifications.</span></h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`glass p-6 rounded-3xl group relative overflow-hidden bg-gradient-to-br ${cert.color} border-white/5 hover:border-white/20 transition-all duration-500`}
            >
              <div className="relative z-10">
                <div className="aspect-square rounded-2xl overflow-hidden mb-6 bg-dark/40 border border-white/10 group-hover:scale-105 transition-transform duration-500 shadow-2xl">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover p-2"
                  />
                </div>
                <div className="space-y-1">
                  <h4 className="text-white font-bold text-sm leading-tight line-clamp-2 h-10">{cert.title}</h4>
                  <div className="flex items-center justify-between text-[10px] text-gray-400 uppercase tracking-widest font-medium">
                    <span>{cert.issuer}</span>
                    <span className="text-white/30">•</span>
                    <span>{cert.date}</span>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-2 h-2 rounded-full bg-white/40 animate-ping" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
