import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Cpu, Layers } from 'lucide-react';
import braintracsImg from '../assets/braintracs.png';
import ubshoppeImg from '../assets/ubshoppe.png';
import schoolaideImg from '../assets/schoolaide.png';

const ProjectCard = ({ project, featured = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`glass rounded-3xl overflow-hidden group hover:border-primary/50 transition-all duration-500 flex flex-col ${featured ? 'md:flex-row' : ''}`}
  >
    <div className={`relative overflow-hidden ${featured ? 'md:w-1/2 aspect-video' : 'aspect-video'}`}>
      <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent z-10" />
      {project.image ? (
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
      ) : (
        <div className={`w-full h-full bg-gradient-to-br transition-transform duration-700 group-hover:scale-110 ${project.gradient}`} />
      )}
      
      <div className="absolute bottom-4 left-6 z-20">
        <div className="flex gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="text-[10px] uppercase font-bold tracking-widest px-2 py-1 bg-white/10 backdrop-blur-md rounded-md border border-white/10">{tag}</span>
          ))}
        </div>
      </div>
    </div>

    <div className={`p-8 flex flex-col justify-between ${featured ? 'md:w-1/2' : ''}`}>
      <div>
        <h3 className={`font-bold font-outfit mb-3 ${featured ? 'text-4xl' : 'text-2xl'}`}>{project.title}</h3>
        <p className="text-gray-400 mb-6 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">{project.description}</p>
        
        <div className="flex flex-wrap gap-4 mb-6">
          {project.tech.map(t => (
            <div key={t} className="flex items-center gap-1 text-xs text-gray-500">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              {t}
            </div>
          ))}
        </div>

        {featured && project.features && (
          <ul className="mb-6 space-y-2">
            {project.features.map((f, i) => (
              <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                <div className="mt-1.5 w-1 h-1 rounded-full bg-secondary" />
                {f}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="flex items-center gap-4">
        <a href="#" className="p-3 glass rounded-xl hover:bg-primary/20 hover:text-primary transition-all group/btn">
          <Github size={20} className="group-hover/btn:scale-110 transition-transform" />
        </a>
        <a href="#" className="flex items-center gap-2 px-6 py-3 glass rounded-xl hover:bg-secondary/20 hover:text-secondary transition-all group/btn font-medium">
          Live Demo <ExternalLink size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
        </a>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const featuredProject = {
    id: 'braintracs',
    title: 'BrainTracs',
    subtitle: 'AI/ML Simulation Environment',
    image: braintracsImg,
    description: 'An advanced AI/ML simulation environment leveraging Deep Q-Learning (DQL) and Neural Networks to optimize traffic systems. Integrated with SUMO (Simulation of Urban MObility), this environment provides a robust framework for training agents in complex, multi-lane scenarios.',
    tech: ['Python', 'TensorFlow', 'DQL', 'Neural Networks', 'SUMO'],
    tags: ['AI / ML', 'SIMULATION'],
    gradient: 'from-pink-600 via-purple-600 to-indigo-600',
    features: [
      'Deep Q-Learning (DQL) agent architectural design',
      'High-fidelity traffic simulation using SUMO',
      'Custom Neural Network for real-time state processing',
      'Optimized reward systems for minimal wait times'
    ]
  };

  const otherProjects = [
    {
      id: 'ubshoppe',
      title: 'UB Shoppe',
      image: ubshoppeImg,
      description: 'A full-stack inventory and ordering management system designed for students and admins. Features role-based dashboards, MySQL integration, and a seamless checkout experience with diverse payment options.',
      tech: ['Python', 'MySQL', 'Tkinter GUI'],
      tags: ['SYSTEMS', 'DATABASE'],
      gradient: 'from-cyan-600 to-blue-600'
    },
    {
      id: 'schoolaide',
      title: 'SchoolAide Events',
      image: schoolaideImg,
      description: 'A comprehensive campus event management module featuring real-time calendars, event registration, and role-based access control. Built with a focus on seamless student engagement and administrative efficiency.',
      tech: ['PHP Blade', 'TypeScript', 'Tailwind', 'SQLite'],
      tags: ['FULL STACK', 'ACADEMIC'],
      gradient: 'from-indigo-600 to-purple-600'
    }
  ];

  return (
    <section id="projects">
      <div className="mb-16">
        <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-4">Featured Work</h2>
        <div className="flex items-end justify-between">
          <h3 className="text-4xl md:text-5xl font-bold font-outfit">Showcasing <span className="text-white/60">Innovation.</span></h3>
        </div>
      </div>

      <div className="flex flex-col gap-8 mb-12">
        <ProjectCard project={featuredProject} featured={true} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {otherProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
        {/* Empty slot placeholder for future projects */}
        <div className="glass rounded-3xl border-dashed border-2 border-white/5 flex flex-col items-center justify-center p-12 text-center group cursor-pointer hover:border-primary/30 transition-colors">
          <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Code className="text-gray-600 group-hover:text-primary transition-colors" size={32} />
          </div>
          <h4 className="text-xl font-bold font-outfit text-gray-500 group-hover:text-white transition-colors">Next Big Project</h4>
          <p className="text-gray-600 mt-2">Currently developing something amazing...</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
