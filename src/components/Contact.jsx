import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, Send, Facebook, Instagram, MessageSquare, CheckCircle2, AlertCircle, Copy } from 'lucide-react';

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus(null);

    const formData = new FormData(form.current);
    const data = {
      service_id: 'service_s8cmkiq',
      template_id: 'template_dwrn48o',
      user_id: 'XPzetGgpkGQAqV3le',
      template_params: {
        from_name: formData.get('from_name'),
        from_email: formData.get('from_email'),
        message: formData.get('message'),
      },
    };

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        form.current.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Email error:', error);
      setStatus('error');
    } finally {
      setIsSending(false);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('jcce0932@gmail.com');
    // Optional: Add a temporary "Copied!" state
  };

  const socialLinks = [
    { icon: <Facebook />, name: 'Facebook', url: 'https://www.facebook.com/0910jz', color: 'hover:text-blue-500' },
    { icon: <Instagram />, name: 'Instagram', url: 'https://www.instagram.com/0910jz/', color: 'hover:text-pink-500' },
    { icon: <Github />, name: 'GitHub', url: 'https://github.com/0910jz', color: 'hover:text-white' },
    { icon: <Linkedin />, name: 'LinkedIn', url: 'https://www.linkedin.com/in/jcce0932/', color: 'hover:text-blue-400' },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-96 bg-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-4">
            Get In Touch
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold font-outfit mb-6">
            Let's Build Something <span className="text-secondary">Intelligent.</span>
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h4 className="text-xl font-bold font-outfit flex items-center gap-3">
                <MessageSquare className="text-primary" /> Contact Information
              </h4>
              
              {/* Email Card */}
              <div className="glass p-6 rounded-2xl group hover:border-primary/50 transition-all duration-500">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Mail size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Email Me</p>
                    <p className="text-lg font-medium text-gray-200">jcce0932@gmail.com</p>
                  </div>
                  <button 
                    onClick={copyEmail}
                    className="p-3 bg-white/5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                    title="Copy Email"
                  >
                    <Copy size={18} />
                  </button>
                </div>
              </div>

              {/* Social Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`glass p-6 rounded-2xl flex flex-col items-center gap-3 group transition-all duration-300 hover:scale-105 hover:bg-white/5 ${social.color}`}
                  >
                    <div className="text-gray-400 group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 text-center">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-8 rounded-3xl"
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Full Name</label>
                <input
                  type="text"
                  name="from_name"
                  required
                  placeholder="Your Name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Email Address</label>
                <input
                  type="email"
                  name="from_email"
                  required
                  placeholder="email@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all text-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Message</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  placeholder="How can I help you?"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 focus:border-tertiary focus:ring-1 focus:ring-tertiary outline-none transition-all text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className={`mt-4 w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95 group ${
                  isSending 
                  ? 'bg-gray-700 cursor-not-allowed text-gray-400' 
                  : 'bg-primary text-white hover:shadow-[0_0_20px_rgba(255,0,127,0.4)]'
                }`}
              >
                {isSending ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>

              {/* Status Messages */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-green-400 text-sm justify-center py-2"
                  >
                    <CheckCircle2 size={16} /> Message sent successfully!
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-red-400 text-sm justify-center py-2"
                  >
                    <AlertCircle size={16} /> Something went wrong. Please try again.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
