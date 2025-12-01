'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Managing Partner',
    company: 'Sequoia Capital',
    companyLogo: 'S',
    quote: 'GutCheck transformed how we evaluate early-stage deals. The AI-powered due diligence cuts our analysis time by 70% while surfacing risks we would have missed.',
    avatar: 'https://i.pravatar.cc/150?img=5',
  },
  {
    name: 'Marcus Williams',
    role: 'CFO',
    company: 'Stripe',
    companyLogo: 'S',
    quote: 'Before any major financial decision, we run it through GutCheck. It\'s like having a team of analysts working 24/7. Saved us from two potentially disastrous acquisitions.',
    avatar: 'https://i.pravatar.cc/150?img=12',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Investment Director',
    company: 'Andreessen Horowitz',
    companyLogo: 'a16z',
    quote: 'The pattern recognition is incredible. GutCheck identified market trends in our portfolio companies 6 months before traditional analysis. It\'s now essential to our process.',
    avatar: 'https://i.pravatar.cc/150?img=9',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-violet-50 text-violet-600 font-semibold text-sm rounded-full mb-6">
            Trusted by Industry Leaders
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900 mb-6">
            Powering Smarter Investment Decisions
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            See why top venture firms and financial institutions trust GutCheck for their most critical decisions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Company Logo */}
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-900 rounded-xl">
                  <span className="text-white font-bold text-lg">{testimonial.companyLogo}</span>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-slate-600 text-lg leading-relaxed mb-8 flex-grow">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Person Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-500 mb-8">Trusted by 500+ investment firms managing over $2T in assets</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {['Goldman Sachs', 'BlackRock', 'KKR', 'Carlyle', 'TPG'].map((firm) => (
              <span key={firm} className="text-slate-400 font-semibold text-lg tracking-tight">
                {firm}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}