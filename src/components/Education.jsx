import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, BookOpen, Code2, Cpu, Brain, Network,
  Shield, Layers, BarChart2, GraduationCap,
  Globe, ChevronRight, FolderOpen, Clock
} from 'lucide-react';

// ─── Course Data ────────────────────────────────────────────────────────────

const categories = [
  {
    id: 'foundations',
    label: 'Foundations',
    icon: BookOpen,
    color: '#ff007f',
    glow: 'rgba(255,0,127,0.25)',
    courses: [
      { code: 'CC101', name: 'Introduction to Computing' },
      { code: 'CC102', name: 'Programming 1' },
      { code: 'CC103', name: 'Programming 2' },
      { code: 'OOP', name: 'Object-Oriented Programming' },
      { code: 'PL101', name: 'Programming Languages' },
    ],
  },
  {
    id: 'data-structures',
    label: 'Algorithms & Theory',
    icon: Code2,
    color: '#00f0ff',
    glow: 'rgba(0,240,255,0.25)',
    courses: [
      { code: 'CC104', name: 'Data Structures and Algorithms' },
      { code: 'AL101', name: 'Algorithms and Complexity' },
      { code: 'DS101', name: 'Discrete Structures 1' },
      { code: 'DS102', name: 'Discrete Structures 2' },
      { code: 'AL102', name: 'Automata Theory and Formal Languages' },
    ],
  },
  {
    id: 'ai',
    label: 'AI & Data Science',
    icon: Brain,
    color: '#ff6d00',
    glow: 'rgba(255,109,0,0.25)',
    courses: [
      { code: 'ELECT1', name: 'Introduction to Data Science' },
      { code: 'ELECT2', name: 'Artificial Intelligence and Machine Learning' },
      { code: 'ELECT3', name: 'Data Science Fundamentals with Python and SQL' },
      { code: 'ELECT4', name: 'Data Analytics' },
      { code: 'ISYS101', name: 'Intelligent Systems' },
    ],
  },
  {
    id: 'software',
    label: 'Software & Design',
    icon: Layers,
    color: '#e040fb',
    glow: 'rgba(224,64,251,0.25)',
    courses: [
      { code: 'HCI', name: 'Human Computer Interaction' },
      { code: 'GV101', name: 'Graphics and Visual Computing' },
      { code: 'SAD', name: 'Systems Analysis and Design' },
      { code: 'CC105', name: 'Information Management' },
      { code: 'CC106', name: 'Applications Development and Emerging Technologies' },
    ],
  },
  {
    id: 'systems',
    label: 'Systems & Architecture',
    icon: Cpu,
    color: '#7000ff',
    glow: 'rgba(112,0,255,0.25)',
    courses: [
      { code: 'DIGITAL', name: 'Logic and Digital Circuits Design' },
      { code: 'AR101', name: 'Computer Architecture and Organization' },
      { code: 'OS101', name: 'Operating Systems' },
    ],
  },
  {
    id: 'networking',
    label: 'Networking & Security',
    icon: Network,
    color: '#00e676',
    glow: 'rgba(0,230,118,0.25)',
    courses: [
      { code: 'NC101', name: 'Networks and Communications' },
      { code: 'IAS101', name: 'Information Assurance and Security' },
    ],
  },
  {
    id: 'emerging',
    label: 'Emerging & Professional',
    icon: Globe,
    color: '#ffd600',
    glow: 'rgba(255,214,0,0.25)',
    courses: [
      { code: 'CLOUD', name: 'Cloud Computing' },
      { code: 'SP101', name: 'Social and Professional Issues' },
      { code: 'SYSTH', name: 'Systems Thinking' },
      { code: 'SEMINAR', name: 'Seminars and Field Trip' },
    ],
  },
];

// flatten all courses for quick lookup
const allCourses = categories.flatMap((cat) =>
  cat.courses.map((c) => ({ ...c, category: cat.label, color: cat.color, glow: cat.glow }))
);

// ─── Course Modal ────────────────────────────────────────────────────────────

const CourseModal = ({ course, onClose }) => {
  if (!course) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />

        {/* Panel */}
        <motion.div
          className="relative z-10 w-full max-w-xl glass rounded-3xl overflow-hidden"
          style={{ border: `1px solid ${course.color}40` }}
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 30 }}
          transition={{ type: 'spring', stiffness: 300, damping: 28 }}
        >
          {/* Header */}
          <div
            className="relative px-8 py-6"
            style={{
              background: `linear-gradient(135deg, ${course.color}20 0%, transparent 70%)`,
              borderBottom: `1px solid ${course.color}25`,
            }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span
                  className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3"
                  style={{ background: `${course.color}20`, color: course.color }}
                >
                  {course.code}
                </span>
                <h3 className="text-2xl font-bold font-outfit text-white leading-snug">
                  {course.name}
                </h3>
                <p className="text-sm text-gray-400 mt-1">{course.category}</p>
              </div>
              <button
                onClick={onClose}
                className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                style={{ background: 'rgba(255,255,255,0.06)' }}
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="px-8 py-8">
            <div className="flex flex-col items-center justify-center text-center gap-4 py-8">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center"
                style={{ background: `${course.color}15`, border: `1px dashed ${course.color}50` }}
              >
                <FolderOpen size={32} style={{ color: course.color }} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white/80 mb-2">
                  Activities Coming Soon
                </h4>
                <p className="text-sm text-gray-500 max-w-xs">
                  Course activities and outputs for{' '}
                  <span style={{ color: course.color }} className="font-medium">
                    {course.code}
                  </span>{' '}
                  will be uploaded here. Check back soon!
                </p>
              </div>
              <div
                className="flex items-center gap-2 text-xs text-gray-600 mt-2 px-4 py-2 rounded-full"
                style={{ background: 'rgba(255,255,255,0.04)' }}
              >
                <Clock size={12} />
                <span>Content upload in progress</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// ─── Course Pill ─────────────────────────────────────────────────────────────

const CoursePill = ({ course, color, glow, onClick }) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.03, boxShadow: `0 0 18px ${glow}` }}
    whileTap={{ scale: 0.97 }}
    className="group w-full text-left px-4 py-3 rounded-xl transition-all duration-200 flex items-center gap-3"
    style={{
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.07)',
    }}
  >
    <span
      className="flex-shrink-0 text-[10px] font-bold tracking-widest uppercase px-2 py-1 rounded-lg min-w-[60px] text-center"
      style={{ background: `${color}18`, color }}
    >
      {course.code}
    </span>
    <span className="text-sm text-gray-300 group-hover:text-white transition-colors leading-snug flex-1">
      {course.name}
    </span>
    <ChevronRight
      size={14}
      className="flex-shrink-0 text-gray-600 group-hover:text-gray-400 group-hover:translate-x-0.5 transition-all"
    />
  </motion.button>
);

// ─── Category Card ───────────────────────────────────────────────────────────

const CategoryCard = ({ category, onCourseClick, index }) => {
  const Icon = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="glass rounded-2xl overflow-hidden"
      style={{ border: `1px solid ${category.color}18` }}
    >
      {/* Card Header */}
      <div
        className="px-5 py-4 flex items-center gap-3"
        style={{
          background: `linear-gradient(135deg, ${category.color}15 0%, transparent 80%)`,
          borderBottom: `1px solid ${category.color}18`,
        }}
      >
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: `${category.color}20` }}
        >
          <Icon size={18} style={{ color: category.color }} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold font-outfit text-sm text-white">{category.label}</h3>
          <p className="text-xs text-gray-500">{category.courses.length} courses</p>
        </div>
        <div
          className="w-2 h-2 rounded-full flex-shrink-0"
          style={{ background: category.color, boxShadow: `0 0 8px ${category.color}` }}
        />
      </div>

      {/* Courses */}
      <div className="p-3 flex flex-col gap-2">
        {category.courses.map((course) => (
          <CoursePill
            key={course.code}
            course={course}
            color={category.color}
            glow={category.glow}
            onClick={() =>
              onCourseClick({
                ...course,
                category: category.label,
                color: category.color,
                glow: category.glow,
              })
            }
          />
        ))}
      </div>
    </motion.div>
  );
};

// ─── Main Section ────────────────────────────────────────────────────────────

const Education = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const totalCourses = categories.reduce((s, c) => s + c.courses.length, 0);

  return (
    <>
      <section id="education" className="relative">
        {/* Ambient glow behind section */}
        <div
          className="absolute inset-0 pointer-events-none -z-10"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 50% 40%, rgba(112,0,255,0.06) 0%, transparent 70%)',
          }}
        />

        {/* ── Section Header ── */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-4">
            Academic Journey
          </h2>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h3 className="text-4xl md:text-5xl font-bold font-outfit">
              Educational{' '}
              <span className="text-white/60">Background.</span>
            </h3>
            <p className="text-gray-500 text-sm md:text-right max-w-xs">
              {totalCourses} courses across {categories.length} disciplines — click any course to explore my activities.
            </p>
          </div>
        </motion.div>

        {/* ── University Banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass rounded-2xl p-6 mb-12 flex flex-col sm:flex-row items-start sm:items-center gap-5"
          style={{ border: '1px solid rgba(255,0,127,0.15)' }}
        >
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{ background: 'rgba(255,0,127,0.12)' }}
          >
            <GraduationCap size={28} className="text-primary" />
          </div>
          <div className="flex-1">
            <h4 className="font-bold font-outfit text-lg text-white">
              Bachelor of Science in Computer Science
            </h4>
            <p className="text-gray-400 text-sm mt-0.5">
              University of Batangas &nbsp;·&nbsp; College of Information and Communications Technology
            </p>
          </div>
          <div className="flex gap-3">
            <div className="text-center px-4 py-2 rounded-xl" style={{ background: 'rgba(255,255,255,0.04)' }}>
              <div className="text-2xl font-bold font-outfit text-gradient">{totalCourses}</div>
              <div className="text-[10px] uppercase tracking-widest text-gray-500">Courses</div>
            </div>
            <div className="text-center px-4 py-2 rounded-xl" style={{ background: 'rgba(255,255,255,0.04)' }}>
              <div className="text-2xl font-bold font-outfit text-gradient">{categories.length}</div>
              <div className="text-[10px] uppercase tracking-widest text-gray-500">Areas</div>
            </div>
          </div>
        </motion.div>

        {/* ── Category Filter Tabs ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <a
                key={cat.id}
                href={`#edu-cat-${cat.id}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-gray-400 hover:text-white transition-colors"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: `1px solid ${cat.color}25`,
                }}
              >
                <Icon size={11} style={{ color: cat.color }} />
                {cat.label}
              </a>
            );
          })}
        </motion.div>

        {/* ── Course Masonry ── */}
        <div className="columns-1 md:columns-2 xl:columns-3 gap-5">
          {categories.map((cat, i) => (
            <div
              key={cat.id}
              id={`edu-cat-${cat.id}`}
              className="break-inside-avoid mb-5"
            >
              <CategoryCard
                category={cat}
                index={i}
                onCourseClick={setSelectedCourse}
              />
            </div>
          ))}
        </div>

        {/* ── Bottom note ── */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-xs text-gray-600 mt-10"
        >
          Click any course card to view activities and outputs.
        </motion.p>
      </section>

      {/* ── Modal ── */}
      {selectedCourse && (
        <CourseModal course={selectedCourse} onClose={() => setSelectedCourse(null)} />
      )}
    </>
  );
};

export default Education;
