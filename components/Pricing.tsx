'use client';

import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$0',
    period: '/month',
    description: 'Perfect for exploring due diligence basics',
    highlighted: false,
    cta: 'Get Started Free',
    href: '#contact',
  },
  {
    name: 'Professional',
    price: '$299',
    period: '/month',
    description: 'For active investors and small funds',
    highlighted: true,
    cta: 'Start Free Trial',
    href: '#contact',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large funds and institutions',
    highlighted: false,
    cta: 'Contact Sales',
    href: '#contact',
  },
];

const features = [
  { name: 'Deal flow tracking', starter: true, professional: true, enterprise: true },
  { name: 'Basic due diligence checklists', starter: true, professional: true, enterprise: true },
  { name: 'Document storage (5GB)', starter: true, professional: false, enterprise: false },
  { name: 'Document storage (100GB)', starter: false, professional: true, enterprise: false },
  { name: 'Unlimited document storage', starter: false, professional: false, enterprise: true },
  { name: 'AI-powered risk analysis', starter: false, professional: true, enterprise: true },
  { name: 'Financial model validation', starter: false, professional: true, enterprise: true },
  { name: 'Market intelligence reports', starter: false, professional: true, enterprise: true },
  { name: 'Team collaboration (up to 5)', starter: false, professional: true, enterprise: false },
  { name: 'Unlimited team members', starter: false, professional: false, enterprise: true },
  { name: 'Custom integrations', starter: false, professional: false, enterprise: true },
  { name: 'Dedicated account manager', starter: false, professional: false, enterprise: true },
  { name: 'Priority support', starter: false, professional: true, enterprise: true },
  { name: '24/7 phone support', starter: false, professional: false, enterprise: true },
  { name: 'API access', starter: false, professional: false, enterprise: true },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900 mb-6">
            Transparent Pricing for Every Stage
          </h2>
          <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto">
            From first-time angels to institutional funds. Scale your due diligence as your portfolio grows.
          </p>
        </motion.div>

        {/* Plan Headers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
        >
          {/* Plan Cards Row */}
          <div className="grid grid-cols-4 border-b border-slate-100">
            <div className="p-8 bg-slate-50">
              <h3 className="text-xl font-semibold text-slate-900">Compare Plans</h3>
              <p className="text-slate-500 mt-2 text-sm">Choose the right plan for your investment strategy</p>
            </div>
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`p-8 text-center ${plan.highlighted ? 'bg-violet-50 relative' : ''}`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 left-0 right-0 bg-violet-600 text-white text-xs font-semibold py-1">
                    Most Popular
                  </div>
                )}
                <h3 className={`text-xl font-semibold ${plan.highlighted ? 'mt-4' : ''} text-slate-900`}>
                  {plan.name}
                </h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                  <span className="text-slate-500">{plan.period}</span>
                </div>
                <p className="text-slate-500 text-sm mt-2">{plan.description}</p>
                <a
                  href={plan.href}
                  className={`mt-6 block w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-violet-600 hover:bg-violet-700 text-white shadow-sm hover:shadow-md'
                      : 'border-2 border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>

          {/* Feature Comparison Table */}
          <div className="divide-y divide-slate-100">
            {features.map((feature, index) => (
              <div key={feature.name} className="grid grid-cols-4 hover:bg-slate-50 transition-colors duration-200">
                <div className="p-4 px-8 flex items-center">
                  <span className="text-slate-700 font-medium">{feature.name}</span>
                </div>
                <div className="p-4 flex items-center justify-center">
                  {feature.starter ? (
                    <div className="w-6 h-6 rounded-full bg-emerald-400/20 flex items-center justify-center">
                      <Check className="w-4 h-4 text-emerald-400" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center">
                      <X className="w-4 h-4 text-slate-300" />
                    </div>
                  )}
                </div>
                <div className={`p-4 flex items-center justify-center ${plans[1].highlighted ? 'bg-violet-50/50' : ''}`}>
                  {feature.professional ? (
                    <div className="w-6 h-6 rounded-full bg-emerald-400/20 flex items-center justify-center">
                      <Check className="w-4 h-4 text-emerald-400" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center">
                      <X className="w-4 h-4 text-slate-300" />
                    </div>
                  )}
                </div>
                <div className="p-4 flex items-center justify-center">
                  {feature.enterprise ? (
                    <div className="w-6 h-6 rounded-full bg-emerald-400/20 flex items-center justify-center">
                      <Check className="w-4 h-4 text-emerald-400" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center">
                      <X className="w-4 h-4 text-slate-300" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Row */}
          <div className="grid grid-cols-4 border-t border-slate-100 bg-slate-50">
            <div className="p-8">
              <p className="text-slate-500 text-sm">All plans include a 14-day free trial. No credit card required.</p>
            </div>
            {plans.map((plan) => (
              <div key={`cta-${plan.name}`} className={`p-8 text-center ${plan.highlighted ? 'bg-violet-50' : ''}`}>
                <a
                  href={plan.href}
                  className={`block w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-violet-600 hover:bg-violet-700 text-white shadow-sm hover:shadow-md'
                      : 'border-2 border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-500 text-sm">
            Trusted by <span className="text-violet-600 font-semibold">500+ venture capital firms</span> managing over $50B in assets
          </p>
        </motion.div>
      </div>
    </section>
  );
}