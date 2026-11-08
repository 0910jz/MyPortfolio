import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Database, Globe, Server, Wrench } from 'lucide-react';

const categories = [
  {
    title: 'Frontend',
    icon: Globe,
    color: '#00f0ff',
    glow: 'rgba(0, 240, 255, 0.28)',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'JavaScript'],
  },
  {
    title: 'Backend',
    icon: Server,
    color: '#ff007f',
    glow: 'rgba(255, 0, 127, 0.28)',
    skills: ['Node.js', 'PHP Blade', 'FastAPI', 'Python'],
  },
  {
    title: 'Database',
    icon: Database,
    color: '#7000ff',
    glow: 'rgba(112, 0, 255, 0.3)',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite', 'Firebase'],
  },
  {
    title: 'AI / Data Science',
    icon: Brain,
    color: '#00e5a8',
    glow: 'rgba(0, 229, 168, 0.26)',
    skills: ['TensorFlow', 'Deep Q-Learning', 'Neural Networks', 'Data Science', 'Data Analytics'],
  },
  {
    title: 'Tools',
    icon: Wrench,
    color: '#ffd166',
    glow: 'rgba(255, 209, 102, 0.24)',
    skills: ['RapidMiner', 'Power BI', 'Tableau', 'Git & GitHub', 'Docker', 'Visual Studio Code', 'Antigravity', 'SUMO'],
  },
];

export const skillTickerItems = [...new Set(categories.flatMap((category) => category.skills))];

const spotlightTools = [
  { name: 'React', short: 'Re', color: '#00f0ff', logo: { slug: 'react', color: '61DAFB' }, x: 310 },
  { name: 'TypeScript', short: 'TS', color: '#3178c6', logo: { slug: 'typescript', color: '3178C6' }, x: 370 },
  { name: 'Tailwind CSS', short: 'Tw', color: '#38bdf8', logo: { slug: 'tailwindcss', color: '38BDF8' }, x: 430 },
  { name: 'JavaScript', short: 'JS', color: '#f7df1e', logo: { slug: 'javascript', color: 'F7DF1E' }, x: 490 },
  { name: 'Node.js', short: 'Nd', color: '#83cd29', logo: { slug: 'nodedotjs', color: '5FA04E' }, x: 550 },
  { name: 'Python', short: 'Py', color: '#ffd43b', logo: { slug: 'python', color: '3776AB' }, x: 610 },
  { name: 'TensorFlow', short: 'Tf', color: '#ff8f00', logo: { slug: 'tensorflow', color: 'FF6F00' }, x: 670 },
];

const orbitTools = [
  { name: 'PHP Blade', short: 'PHP', color: '#777bb4', logo: { slug: 'php', color: '777BB4' }, angle: 205, radius: 31, size: 'sm' },
  { name: 'RapidMiner', short: 'RM', color: '#ffb000', customLogo: 'rapidminer', angle: 228, radius: 28, size: 'sm' },
  { name: 'Power BI', short: 'BI', color: '#f2c811', customLogo: 'powerbi', angle: 250, radius: 27, size: 'sm' },
  { name: 'FastAPI', short: 'API', color: '#009688', logo: { slug: 'fastapi', color: '009688' }, angle: 274, radius: 24, size: 'md' },
  { name: 'MySQL', short: 'SQL', color: '#00758f', logo: { slug: 'mysql', color: '4479A1' }, angle: 300, radius: 29, size: 'md' },
  { name: 'PostgreSQL', short: 'PG', color: '#336791', logo: { slug: 'postgresql', color: '4169E1' }, angle: 325, radius: 30, size: 'sm' },
  { name: 'MongoDB', short: 'MDB', color: '#47a248', logo: { slug: 'mongodb', color: '47A248' }, angle: 348, radius: 27, size: 'md' },
  { name: 'SQLite', short: 'Lite', color: '#58a6ff', logo: { slug: 'sqlite', color: '58A6FF' }, angle: 12, radius: 26, size: 'sm' },
  { name: 'Firebase', short: 'Fb', color: '#ffca28', logo: { slug: 'firebase', color: 'FFCA28' }, angle: 38, radius: 28, size: 'sm' },
  { name: 'Tableau', short: 'Tb', color: '#4e79a7', customLogo: 'tableau', angle: 64, radius: 26, size: 'sm' },
  { name: 'Docker', short: 'Dc', color: '#2496ed', logo: { slug: 'docker', color: '2496ED' }, angle: 88, radius: 28, size: 'sm' },
  { name: 'Git & GitHub', short: 'Git', color: '#f05032', logo: { slug: 'git', color: 'F05032' }, angle: 112, radius: 30, size: 'sm' },
  { name: 'Visual Studio Code', short: 'VS', color: '#007acc', logo: { slug: 'visualstudiocode', color: '007ACC' }, angle: 136, radius: 32, size: 'sm' },
  { name: 'Deep Q-Learning', short: 'DQL', color: '#b86bff', angle: 160, radius: 30, size: 'md' },
  { name: 'Neural Networks', short: 'NN', color: '#00e5a8', angle: 184, radius: 30, size: 'sm' },
  { name: 'Data Science', short: 'DS', color: '#00f0ff', angle: 212, radius: 25, size: 'sm' },
  { name: 'Data Analytics', short: 'DA', color: '#ff007f', angle: 236, radius: 24, size: 'sm' },
  { name: 'SUMO', short: 'SUMO', color: '#a855f7', angle: 296, radius: 33, size: 'md' },
  { name: 'Antigravity', short: 'AG', color: '#ffffff', angle: 324, radius: 25, size: 'sm' },
];

const toolsByName = [...spotlightTools, ...orbitTools].reduce((acc, tool) => {
  acc[tool.name] = tool;
  return acc;
}, {});

const getLogoSrc = (tool) => {
  if (!tool.logo) return null;

  const color = (tool.logo.color || tool.color || 'ffffff').replace('#', '');
  return `https://cdn.simpleicons.org/${tool.logo.slug}/${color}`;
};

const CustomTechLogo = ({ type, className }) => {
  if (type === 'powerbi') {
    return (
      <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
        <rect x="5" y="16" width="5" height="10" rx="2" fill="#F2C811" />
        <rect x="13" y="10" width="5" height="16" rx="2" fill="#F7D752" />
        <rect x="21" y="5" width="5" height="21" rx="2" fill="#F2C811" />
      </svg>
    );
  }

  if (type === 'tableau') {
    return (
      <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
        <path d="M15 3h2v6h-2zM13 5h6v2h-6z" fill="#4E79A7" />
        <path d="M15 23h2v6h-2zM13 25h6v2h-6z" fill="#E15759" />
        <path d="M3 15h6v2H3zM5 13h2v6H5z" fill="#F28E2B" />
        <path d="M23 15h6v2h-6zM25 13h2v6h-2z" fill="#59A14F" />
        <path d="M15 13h2v6h-2zM13 15h6v2h-6z" fill="#B07AA1" />
      </svg>
    );
  }

  if (type === 'rapidminer') {
    return (
      <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
        <path
          d="M4 19c3.6-9.2 12.8-14.4 23.5-12.5-4.1 1.8-5.3 4.7-5.9 8.2-.8 4.9-4.6 8.6-9.7 8.6-2.9 0-5.4-1.1-7.9-4.3Z"
          fill="#FFB000"
        />
        <path
          d="M9 18.5c4.5-.3 8.2-2.1 11.3-5.4-.4 5.1-3.5 8.1-8 8.1-1.4 0-2.5-.3-3.3-.8Z"
          fill="#0A0A0A"
          opacity="0.55"
        />
      </svg>
    );
  }

  return null;
};

const TechMark = ({ tool, compact = false, inline = false }) => {
  const [logoFailed, setLogoFailed] = React.useState(false);
  const logoSrc = getLogoSrc(tool);
  const logoSize = inline ? 'h-3.5 w-3.5' : compact ? 'h-5 w-5' : tool.size === 'md' ? 'h-7 w-7' : 'h-5 w-5';
  const textSize = inline ? 'text-[9px]' : compact ? 'text-sm' : tool.size === 'md' ? 'text-sm' : 'text-[11px]';

  if (tool.customLogo) {
    return <CustomTechLogo type={tool.customLogo} className={`${logoSize} drop-shadow-[0_0_10px_rgba(255,255,255,0.18)]`} />;
  }

  if (logoSrc && !logoFailed) {
    return (
      <img
        src={logoSrc}
        alt=""
        aria-hidden="true"
        onError={() => setLogoFailed(true)}
        className={`${logoSize} object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.18)]`}
        loading="lazy"
      />
    );
  }

  return (
    <span className={`font-outfit font-bold ${textSize}`} style={{ color: tool.color }}>
      {tool.short}
    </span>
  );
};

const TechBadge = ({ tool, index, compact = false }) => (
  <motion.div
    initial={{ opacity: 0, y: compact ? 10 : 18, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.45, delay: index * 0.04 }}
    whileHover={{ y: -4, scale: 1.04 }}
    className={`group relative flex shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.055] text-white shadow-2xl shadow-black/30 backdrop-blur-md transition-colors hover:bg-white/[0.09] ${
      compact ? 'h-12 min-w-12 px-3' : tool.size === 'md' ? 'h-14 min-w-14 px-3' : 'h-11 min-w-11 px-2'
    }`}
    style={{
      boxShadow: `0 0 28px ${tool.color}20`,
    }}
    aria-label={tool.name}
    title={tool.name}
  >
    <TechMark tool={tool} compact={compact} />
    <span className="pointer-events-none absolute left-1/2 top-full z-20 mt-2 -translate-x-1/2 whitespace-nowrap rounded-lg border border-white/10 bg-dark/95 px-2 py-1 text-[10px] font-medium text-gray-300 opacity-0 shadow-xl shadow-black/40 transition-opacity group-hover:opacity-100">
      {tool.name}
    </span>
  </motion.div>
);

const SkillPill = ({ skill, color }) => {
  const tool = toolsByName[skill];

  return (
    <span
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-dark/70 px-3 py-1.5 text-xs text-gray-300 transition-colors hover:text-white"
      style={{ borderColor: `${color}25` }}
    >
      {tool && <TechMark tool={tool} inline />}
      {skill}
    </span>
  );
};

const CategoryStrip = ({ category, index }) => {
  const Icon = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="glass rounded-2xl p-5 transition-colors hover:bg-white/[0.045]"
      style={{ borderColor: `${category.color}20` }}
    >
      <div className="mb-4 flex items-center gap-3">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl"
          style={{ background: `${category.color}16`, boxShadow: `0 0 24px ${category.glow}` }}
        >
          <Icon size={19} style={{ color: category.color }} />
        </div>
        <div>
          <h4 className="font-outfit text-base font-bold text-white">{category.title}</h4>
          <p className="text-xs text-gray-500">{category.skills.length} tools</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <SkillPill key={skill} skill={skill} color={category.color} />
        ))}
      </div>
    </motion.div>
  );
};

const TechStack = () => {
  return (
    <section id="skills" className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-1/2 -z-10 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-28 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-tertiary/10 blur-[140px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="mx-auto mb-10 max-w-4xl text-center"
      >
        <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-secondary">Expertise</h2>
        <h3 className="font-outfit text-4xl font-bold leading-tight md:text-5xl">
          Technical <span className="text-white/60">Toolkit.</span>
        </h3>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg">
          I am currently looking to join a <span className="font-medium text-primary">cross-functional</span> team
          where frontend, backend, data, and AI work together cleanly.
        </p>
      </motion.div>

      <div className="relative mx-auto mb-10 hidden max-w-6xl md:block">
        <div className="mb-8 flex flex-wrap items-center justify-center gap-4">
          {spotlightTools.map((tool, index) => (
            <TechBadge key={tool.name} tool={{ ...tool, size: 'md' }} index={index} />
          ))}
        </div>
      </div>

      <div className="mb-10 flex flex-wrap justify-center gap-3 md:hidden">
        {spotlightTools.map((tool, index) => (
          <TechBadge key={tool.name} tool={tool} index={index} compact />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {categories.map((category, index) => (
          <CategoryStrip key={category.title} category={category} index={index} />
        ))}
      </div>
    </section>
  );
};

export default TechStack;
