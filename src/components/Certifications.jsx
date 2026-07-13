import React from 'react';
import { motion } from 'framer-motion';
import osBasics from '../assets/certs/os-basics.png';
import dataAnalytics from '../assets/certs/data-analytics.png';
import itFundamentals from '../assets/certs/it-fundamentals.png';
import dataScience from '../assets/certs/data-science.png';

const Certifications = () => {
  const certifications = [
    {
      title: 'Data Science Essentials with Python',
      issuer: 'Cisco',
      date: 'Oct 9, 2025',
      image: dataScience,
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      title: 'Data Analytics Essentials',
      issuer: 'Cisco',
      date: 'Mar 30, 2025',
      image: dataAnalytics,
      color: 'from-primary/20 to-secondary/20'
    },
    {
      title: 'Operating Systems Basics',
      issuer: 'Cisco',
      date: 'Nov 5, 2024',
      image: osBasics,
      color: 'from-purple-500/20 to-pink-500/20'
    },
    {
      title: 'Information Technology Fundamentals',
      issuer: 'IBM SkillsBuild',
      date: 'Dec 28, 2022',
      image: itFundamentals,
      color: 'from-blue-600/20 to-indigo-600/20'
    }
  ];

  return (
    <section id="certifications" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
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

export default Certifications;
