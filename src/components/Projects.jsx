import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Play, X } from 'lucide-react';
import braintracsImg from '../assets/braintracs.png';
import braintracsPreviewVideo from '../assets/braintracs-preview.mp4';
import schoolaideImg from '../assets/schoolaide.png';
import one900 from '../assets/one900.png';

const filters = ['All', 'Academic', 'Internship', 'Freelance'];

const projects = [
  {
    id: 'braintracs',
    title: 'BrainTracs',
    subtitle: 'AI / ML · Thesis project',
    category: 'Academic',
    image: braintracsImg,
    previewVideo: braintracsPreviewVideo,
    description: 'An AI traffic-simulation environment using Deep Q-Learning and neural networks to explore smarter traffic flow. Built around SUMO, with custom state processing and reward systems.',
    tech: ['Python', 'TensorFlow', 'DQL', 'SUMO'],
    features: [
      'Deep Q-Learning agent for adaptive traffic control',
      'SUMO simulation for complex, multi-lane scenarios',
      'Neural-network state processing and reward tuning',
    ],
    accent: 'coral',
  },
  {
    id: 'schoolaide',
    title: 'SchoolAide Events',
    subtitle: 'Full stack · Internship',
    category: 'Internship',
    image: schoolaideImg,
    description: 'A campus event-management experience with calendars, event registration, and role-based access — designed to make it easier for students and administrators to stay in sync.',
    tech: ['Laravel', 'TypeScript', 'Tailwind CSS', 'SQLite'],
    accent: 'violet',
  },
  {
    id: 'one900-architects',
    title: 'ONE900 Architects',
    subtitle: 'Web design · Freelance',
    category: 'Freelance',
    image: one900,
    link: 'https://one900-architects.vercel.app/',
    description: 'A responsive portfolio for a Batangas architecture studio, bringing its projects, services, and team together in a polished digital home.',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    accent: 'yellow',
  },
];

const ProjectCard = ({ project, index, onOpenPreview }) => (
  <motion.article
    layout
    initial={{ opacity: 0, y: 18 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 10 }}
    transition={{ duration: 0.32, delay: index * 0.05 }}
    className={`project-card project-card-${project.accent}${index === 0 ? ' project-card-featured' : ''}`}
  >
    <div className="project-image-wrap">
      <img src={project.image} alt={`${project.title} project preview`} loading="lazy" />
      <span className="project-index">0{index + 1}</span>
      <span className="project-category">{project.category}</span>
    </div>
    <div className="project-content">
      <div>
        <p className="project-subtitle">{project.subtitle}</p>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tech">
          {project.tech.map((item) => <span key={item}>{item}</span>)}
        </div>
        {project.features && (
          <ul className="project-features">
            {project.features.map((feature) => <li key={feature}>{feature}</li>)}
          </ul>
        )}
      </div>
      {project.previewVideo ? (
        <button type="button" className="project-link" onClick={() => onOpenPreview(project)}>
          <Play size={15} fill="currentColor" /> Watch the demo
        </button>
      ) : project.link ? (
        <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
          Visit project <ArrowUpRight size={17} />
        </a>
      ) : (
        <span className="project-link project-link-muted">Built during internship</span>
      )}
    </div>
  </motion.article>
);

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activePreviewProject, setActivePreviewProject] = useState(null);
  const visibleProjects = projects.filter((project) => activeFilter === 'All' || project.category === activeFilter);

  useEffect(() => {
    if (!activePreviewProject) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setActivePreviewProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePreviewProject]);

  return (
    <section id="projects" className="work-section">
      <div className="section-heading-row">
        <div>
          <p className="section-kicker">01 / Selected work</p>
          <h2 className="display-heading">Things I’ve<br className="heading-break" /> <span>made.</span></h2>
        </div>
        <p className="section-aside">A mix of experiments, school projects, and things made for real people.</p>
      </div>

      <div className="project-filters" role="group" aria-label="Filter projects">
        {filters.map((filter) => (
          <button
            type="button"
            key={filter}
            className={activeFilter === filter ? 'is-active' : ''}
            aria-pressed={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
            {filter === 'All' && <span>{projects.length}</span>}
          </button>
        ))}
      </div>

      <motion.div layout className="project-grid">
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} onOpenPreview={setActivePreviewProject} />
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {activePreviewProject && (
          <motion.div
            className="preview-backdrop"
            role="presentation"
            onClick={() => setActivePreviewProject(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="preview-dialog"
              role="dialog"
              aria-modal="true"
              aria-labelledby="preview-title"
              onClick={(event) => event.stopPropagation()}
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 8 }}
            >
              <div className="preview-heading">
                <div><p className="section-kicker">Project preview</p><h3 id="preview-title">{activePreviewProject.title}</h3></div>
                <button type="button" onClick={() => setActivePreviewProject(null)} aria-label="Close preview"><X size={20} /></button>
              </div>
              <video controls autoPlay playsInline>
                <source src={activePreviewProject.previewVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
