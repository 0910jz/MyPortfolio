import React from 'react';
import { Facebook, Instagram, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-900 py-12 bg-dark relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start">
          <a href="#home" className="text-2xl font-bold font-outfit text-gradient mb-2">
            JE<span className="text-white">.</span>
          </a>
          <p className="text-gray-500 text-sm">Building intelligent systems for a better future.</p>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://www.facebook.com/0910jz" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-all hover:scale-110">
            <Facebook size={20} />
          </a>
          <a href="https://www.instagram.com/0910jz/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-all hover:scale-110">
            <Instagram size={20} />
          </a>
          <a href="https://github.com/0910jz" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-all hover:scale-110">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/jcce0932/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-all hover:scale-110">
            <Linkedin size={20} />
          </a>
        </div>

        <div className="text-center md:text-right">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-1">© 2026 James Christopher Esteban</p>
          <p className="text-[10px] text-gray-700 font-medium tracking-widest uppercase">Designed & Built with React + Tailwind</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
