'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
    };

    try {
      const response = await fetch('https://deep-api-server-2moiw.kinsta.app/api/form_submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          form_id: 'contact_form',
          form_data: data,
          project_id: 'dbff67bf-0ea1-424e-8c22-d48baea3b5e4',
          founder_id: 'beb5ca5c-4a08-40c2-b958-a74f5864289d',
        }),
      });

      if (response.ok) {
        setStatus('success');
        e.currentTarget.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="bg-slate-900 py-24 md:py-32 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-emerald-400 font-semibold text-sm tracking-wider uppercase mb-4">Get Started</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-white mb-6">Ready to Validate Your Next Investment?</h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">Join 500+ venture capitalists and founders using GutCheck to make data-driven decisions.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto"
        >
          {status === 'success' ? (
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-12 text-center">
              <div className="w-16 h-16 bg-emerald-400/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900">Thanks for signing up!</h3>
              <p className="text-slate-500">We will be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-10 space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-slate-900">Name</label>
                <input type="text" id="name" name="name" required className="w-full rounded-xl border-slate-200 border focus:ring-2 py-4 px-5 focus:border-violet-600 focus:ring-violet-600/20 transition-all duration-300 text-slate-900 placeholder:text-slate-400" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-slate-900">Email</label>
                <input type="email" id="email" name="email" required className="w-full rounded-xl border-slate-200 border focus:ring-2 py-4 px-5 focus:border-violet-600 focus:ring-violet-600/20 transition-all duration-300 text-slate-900 placeholder:text-slate-400" placeholder="you@example.com" />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-slate-900">Phone <span className="text-slate-400 font-normal">(optional)</span></label>
                <input type="tel" id="phone" name="phone" className="w-full rounded-xl border-slate-200 border focus:ring-2 py-4 px-5 focus:border-violet-600 focus:ring-violet-600/20 transition-all duration-300 text-slate-900 placeholder:text-slate-400" placeholder="+1 (555) 000-0000" />
              </div>
              <button type="submit" disabled={status === 'loading'} className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed">
                {status === 'loading' ? 'Submitting...' : 'Get Started'}
                <Send className="w-5 h-5 ml-2" />
              </button>
              {status === 'error' && (
                <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
              )}
            </form>
          )}
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-500 text-sm">Trusted by teams at Sequoia, a16z, and 200+ other firms</p>
        </motion.div>
      </div>
    </section>
  </div>);
}
