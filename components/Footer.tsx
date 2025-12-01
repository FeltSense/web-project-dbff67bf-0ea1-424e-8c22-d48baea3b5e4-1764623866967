'use client';

import Link from 'next/link';
import { Twitter, Linkedin, Github } from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'About', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
  ],
  support: [
    { name: 'Contact', href: '#contact' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#' },
  ],
  resources: [
    { name: 'Blog', href: '#' },
    { name: 'Case Studies', href: '#' },
    { name: 'Documentation', href: '#' },
  ],
};

const socialLinks = [
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'GitHub', href: '#', icon: Github },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Section - CTA Banner */}
        <div className="relative mb-20 rounded-3xl bg-slate-900 p-12 md:p-16 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-3">
                Ready to validate your next big idea?
              </h3>
              <p className="text-slate-400 text-lg">
                Join 500+ founders who trust GutCheck for smarter investment decisions.
              </p>
            </div>
            <Link
              href="#contact"
              className="bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-sm hover:shadow-md whitespace-nowrap"
            >
              Get Started Free
            </Link>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="text-2xl font-bold text-white tracking-tight inline-block mb-4">
              GutCheck
            </Link>
            <p className="text-slate-400 mb-6 max-w-sm leading-relaxed">
              AI-powered due diligence for venture capital. Make data-driven investment decisions with confidence.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-violet-600 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-2">
              Company
            </h4>
            {footerLinks.company.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-slate-400 hover:text-violet-400 transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Support Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-2">
              Support
            </h4>
            {footerLinks.support.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-slate-400 hover:text-violet-400 transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Resources Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-2">
              Resources
            </h4>
            {footerLinks.resources.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-slate-400 hover:text-violet-400 transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} GutCheck. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link href="#" className="text-slate-500 hover:text-slate-300 transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="#" className="text-slate-500 hover:text-slate-300 transition-colors duration-300">
              Terms of Service
            </Link>
            <span className="text-emerald-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  </div></div></span>);
}
