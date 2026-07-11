import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, BookOpen, Code2, Cpu, Brain, Network,
  Shield, Layers, BarChart2, GraduationCap,
  Globe, ChevronRight, FolderOpen, Clock,
  FileText, Image as ImageIcon, Download
} from 'lucide-react';

const allAssets = import.meta.glob('../assets/**/*', { eager: true, as: 'url' });

const categories = [];

// ─── Course Modal ────────────────────────────────────────────────────────────

const CourseModal = ({ course, onClose }) => {
  if (!course) return null;

  const courseFolderPattern = `../assets/${course.code.toLowerCase()}/`;
  const courseAssets = Object.entries(allAssets)
    .filter(([path]) => path.toLowerCase().includes(courseFolderPattern.toLowerCase()))
    .map(([path, url]) => {
      const parts = path.split('/');
      const fileName = parts[parts.length - 1];
      const extension = fileName.split('.').pop().toLowerCase();
      const subPathIndex = parts.findIndex(p => p.toLowerCase() === course.code.toLowerCase());
      const subFolderParts = parts.slice(subPathIndex + 1, -1);
      const rawSubFolder = subFolderParts.length > 0 ? subFolderParts.join(' / ') : 'General Files';
      const subFolder = rawSubFolder.replace(/_/g, ' ');
      
      return { path, url, fileName, extension, subFolder };
    });

  const groupedAssets = courseAssets.reduce((acc, asset) => {
    if (!acc[asset.subFolder]) acc[asset.subFolder] = [];
    acc[asset.subFolder].push(asset);
    return acc;
  }, {});
  
  const hasAssets = courseAssets.length > 0;

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
          className="relative z-10 w-full max-w-5xl glass rounded-3xl overflow-hidden flex flex-col"
          style={{ border: `1px solid ${course.color}40`, maxHeight: '90vh' }}

          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 30 }}
          transition={{ type: 'spring', stiffness: 300, damping: 28 }}
        >
          {/* ── Sticky Header ── */}
          <div
            className="flex-shrink-0 px-8 py-6"
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

          {/* ── Scrollable Body ── */}
          <div className="flex-1 overflow-y-auto" style={{ scrollbarWidth: 'thin' }}>

            {/* Section label */}
            <div className="px-8 pt-7 pb-4 flex items-center justify-between">
              <div>
                <h4 className="text-base font-bold font-outfit text-white">Course Activities</h4>
                <p className="text-xs text-gray-500 mt-0.5">
                  {hasAssets ? `Found ${courseAssets.length} files` : 'Screenshots and outputs from this course'}
                </p>
              </div>
              {!hasAssets && (
                <div
                  className="flex items-center gap-2 text-xs text-gray-500 px-3 py-1.5 rounded-full"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <Clock size={11} />
                  <span>Uploading soon</span>
                </div>
              )}
            </div>

            {/* Activity image grid */}
            <div className="px-8 pb-8">
              {!hasAssets ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div
                        key={i}
                        className="group relative aspect-[4/3] rounded-2xl flex flex-col items-center justify-center gap-3 overflow-hidden"
                        style={{
                          background: `${course.color}08`,
                          border: `1px dashed ${course.color}30`,
                        }}
                      >
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          style={{ background: `radial-gradient(circle at 50% 50%, ${course.color}10 0%, transparent 70%)` }}
                        />
                        <FolderOpen size={28} style={{ color: `${course.color}60` }} className="relative z-10" />
                        <span className="relative z-10 text-[11px] font-medium text-gray-600 tracking-wide">
                          Activity {i + 1}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="text-center text-xs text-gray-600 mt-6">
                    Activities for{' '}
                    <span style={{ color: course.color }} className="font-semibold">{course.code}</span>{' '}
                    will be uploaded here soon.
                  </p>
                </>
              ) : (
                <div className="flex flex-col gap-6">
                  {Object.entries(groupedAssets).map(([folder, files]) => (
                    <div key={folder}>
                      <h5 className="text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
                        <FolderOpen size={16} style={{ color: course.color }} />
                        {folder}
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {files.map((file, i) => (
                          <a
                            key={i}
                            href={file.url}
                            target="_blank"
                            rel="noreferrer"
                            className="group relative flex items-center gap-3 p-3 rounded-xl transition-all"
                            style={{
                              background: 'rgba(255,255,255,0.03)',
                              border: '1px solid rgba(255,255,255,0.07)',
                            }}
                          >
                            <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${course.color}15` }}>
                              {file.extension === 'heic' || ['png', 'jpg', 'jpeg'].includes(file.extension) ? (
                                <ImageIcon size={20} style={{ color: course.color }} />
                              ) : file.extension === 'c' || file.extension === 'cpp' ? (
                                <Code2 size={20} style={{ color: course.color }} />
                              ) : (
                                <FileText size={20} style={{ color: course.color }} />
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-medium text-white truncate">{file.fileName}</p>
                              <p className="text-[10px] text-gray-500 uppercase tracking-wider">{file.extension} File</p>
                            </div>
                            <Download size={14} className="text-gray-600 group-hover:text-white transition-colors" />
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
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
          </div>
        </motion.div>

        {/* ── University Banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass rounded-2xl p-6 mb-8"
          style={{ border: '1px solid rgba(255,0,127,0.15)' }}
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-start gap-4">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(255,0,127,0.12)' }}
              >
                <GraduationCap size={28} className="text-primary" />
              </div>
              <div>
                <h4 className="font-bold font-outfit text-lg text-white">
                  Bachelor of Science in Computer Science
                </h4>
                <p className="text-gray-400 text-sm mt-0.5">
                  University of Batangas &nbsp;·&nbsp; College of Information and Communications Technology
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <h5 className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                Affiliations
              </h5>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Brahman Integrated Computing Society - Treasurer (2025-2026)</li>
                <li>• Brahman Integrated Computing Society - Vice President for Internal Affairs (2024-2025)</li>
                <li>• Brahman Integrated Computing Society - Seargent-At-Arms (2023-2024)</li>
              </ul>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <h5 className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                Awards
              </h5>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Cum Laude</li>
                <li>• Consistent Dean’s Lister</li>
                <li>• Best Thesis - BRAInTraCS: Batangas Reinforcement-Learning AI for Intelligent Traffic Control System</li>
              </ul>
            </div>
          </div>
        </motion.div>

      </section>

      {/* ── Modal ── */}
      {selectedCourse && (
        <CourseModal course={selectedCourse} onClose={() => setSelectedCourse(null)} />
      )}
    </>
  );
};

export default Education;
