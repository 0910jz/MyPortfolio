import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Brain, Wrench, Globe } from 'lucide-react';

const TechStack = () => {
  const categories = [
    {
      title: "Frontend",
      icon: <Globe className="text-secondary" />,
      skills: ["React", "TypeScript", "Tailwind CSS", "JavaScript"]
    },
    {
      title: "Backend",
      icon: <Server className="text-primary" />,
      skills: ["Node.js", "PHP Blade", "FastAPI", "Python"]
    },
    {
      title: "Database",
      icon: <Database className="text-tertiary" />,
      skills: ["MySQL", "SQLite", "Firebase"]
    },
    {
      title: "AI / Data Science",
      icon: <Brain className="text-secondary" />,
      skills: ["TensorFlow", "Deep Q-Learning", "Neural Networks", "Data Science", "Data Analytics"]
    },
    {
      title: "Tools",
      icon: <Wrench className="text-primary" />,
      skills: ["RapidMiner", "Power BI", "Tableau", "Git & GitHub", "Docker", "Visual Studio Code", "Antigravity", "SUMO"]
    }
  ];

  return (
    <section id="skills" className="relative">
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent -z-10" />

      <div className="mb-16 text-center">
        <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-secondary mb-4">Expertise</h2>
        <h3 className="text-4xl md:text-5xl font-bold font-outfit">Technical <span className="text-white/60">Toolkit.</span></h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.slice(0, 3).map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass p-8 rounded-3xl hover:bg-white/[0.05] transition-colors group"
          >
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              {cat.icon}
            </div>
            <h4 className="text-xl font-bold font-outfit mb-4">{cat.title}</h4>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map(skill => (
                <span key={skill} className="px-3 py-1 bg-dark rounded-full text-xs text-gray-400 border border-gray-800 hover:border-gray-600 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-6">
        {categories.slice(3).map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass p-8 rounded-3xl hover:bg-white/[0.05] transition-colors group w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)]"
          >
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              {cat.icon}
            </div>
            <h4 className="text-xl font-bold font-outfit mb-4">{cat.title}</h4>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map(skill => (
                <span key={skill} className="px-3 py-1 bg-dark rounded-full text-xs text-gray-400 border border-gray-800 hover:border-gray-600 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
