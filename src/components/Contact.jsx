import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, MessageSquare, Facebook, Instagram } from 'lucide-react';

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    emailjs.sendForm(
      'service_s8cmkiq',
      'template_dwrn48o',
      formRef.current,
      'XPzetGgpkGQAqV3le'
    )
      .then(() => {
        setLoading(false);
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        setStatus('error');
      });
  };

  return (
    <section id="contact" className="relative overflow-hidden pt-24 pb-12">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-96 bg-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="text-center mb-16">
        <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-tertiary mb-4">Get In Touch</h2>
        <h3 className="text-4xl md:text-5xl font-bold font-outfit mb-6">Let's Build Something <span className="text-gradient">Intelligent.</span></h3>
        <p className="text-gray-400 max-w-xl mx-auto text-lg leading-relaxed">
          I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <h4 className="text-xl font-bold font-outfit mb-4 flex items-center gap-2">
            <MessageSquare className="text-primary" /> Contact Information
          </h4>

          <div className="glass p-6 rounded-2xl flex items-center gap-6 group hover:border-primary/50 transition-all cursor-pointer">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
              <Mail className="group-hover:text-white transition-colors" />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Email Me</p>
              <p className="text-lg font-medium text-gray-200 group-hover:text-white transition-colors">jcce0932@gmail.com</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <a href="https://www.facebook.com/0910jz" target="_blank" rel="noopener noreferrer" className="glass p-6 rounded-2xl flex flex-col items-center gap-3 group hover:border-blue-600/50 transition-all">
              <Facebook className="text-gray-400 group-hover:text-blue-600 group-hover:scale-110 transition-all" size={32} />
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500 text-center">Facebook</span>
            </a>
            <a href="https://www.instagram.com/0910jz/" target="_blank" rel="noopener noreferrer" className="glass p-6 rounded-2xl flex flex-col items-center gap-3 group hover:border-pink-500/50 transition-all">
              <Instagram className="text-gray-400 group-hover:text-pink-500 group-hover:scale-110 transition-all" size={32} />
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500 text-center">Instagram</span>
            </a>
            <a href="https://github.com/0910jz" className="glass p-6 rounded-2xl flex flex-col items-center gap-3 group hover:border-secondary/50 transition-all">
              <Github className="text-gray-400 group-hover:text-secondary group-hover:scale-110 transition-all" size={32} />
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500 text-center">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/jcce0932/" className="glass p-6 rounded-2xl flex flex-col items-center gap-3 group hover:border-blue-500/50 transition-all">
              <Linkedin className="text-gray-400 group-hover:text-blue-500 group-hover:scale-110 transition-all" size={32} />
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500 text-center">LinkedIn</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass p-8 rounded-3xl"
        >
          <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Full Name</label>
              <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your Name" className="bg-white/5 border border-gray-800 rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors text-sm" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Email Address</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="email@example.com" className="bg-white/5 border border-gray-800 rounded-xl px-4 py-3 focus:border-secondary outline-none transition-colors text-sm" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Message</label>
              <textarea name="message" rows="4" value={form.message} onChange={handleChange} placeholder="How can I help you?" className="bg-white/5 border border-gray-800 rounded-xl px-4 py-3 focus:border-tertiary outline-none transition-colors text-sm resize-none" />
            </div>
            <button type="submit" disabled={loading} className="mt-4 w-full py-4 bg-gradient text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:glow glow-hover transition-all active:scale-95 group disabled:opacity-50"> {loading ? 'Sending...' : 'Send Message'} <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            {status === 'success' && (
              <p className="text-green-500 text-sm mt-2">
                Message sent successfully!
              </p>
            )}

            {status === 'error' && (
              <p className="text-red-500 text-sm mt-2">
                Something went wrong. Try again.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
