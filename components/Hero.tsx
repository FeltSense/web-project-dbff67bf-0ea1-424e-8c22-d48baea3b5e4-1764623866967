'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { TrendingUp, Shield, Zap, BarChart3 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-slate-950 pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden min-h-screen">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-violet-600/10 border border-violet-500/20 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-violet-300 text-sm font-medium">Trusted by 500+ VC firms</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-white mb-8">
              Validate Deals
              <span className="block text-violet-400">Before You Invest</span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              AI-powered due diligence that spots red flags in seconds. Make confident investment decisions backed by data, not just gut feelings.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contact" className="bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-sm hover:shadow-md inline-flex items-center justify-center gap-2">
                Start Free Trial
                <Zap className="w-5 h-5" />
              </a>
              <a href="#services" className="border-2 border-slate-700 text-white hover:bg-slate-800 font-semibold rounded-xl px-8 py-4 transition-all duration-300 inline-flex items-center justify-center gap-2">
                See How It Works
              </a>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-slate-800">
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <p className="text-3xl font-bold text-white">$2.4B+</p>
                  <p className="text-slate-500 text-sm">Deals Analyzed</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">847</p>
                  <p className="text-slate-500 text-sm">Red Flags Caught</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">99.2%</p>
                  <p className="text-slate-500 text-sm">Accuracy Rate</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-violet-600/20 rounded-3xl blur-2xl" />
              
              {/* Main Dashboard Card */}
              <div className="relative bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden">
                {/* Dashboard Header */}
                <div className="bg-slate-800/50 px-6 py-4 border-b border-slate-700 flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-slate-400 text-sm font-medium">GutCheck Dashboard</span>
                </div>
                
                {/* Dashboard Content */}
                <div className="p-6 space-y-6">
                  {/* Deal Score */}
                  <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-slate-400 text-sm">Deal Risk Score</span>
                      <span className="text-emerald-400 text-sm font-medium">Low Risk</span>
                    </div>
                    <div className="flex items-end gap-4">
                      <span className="text-5xl font-bold text-white">87</span>
                      <span className="text-slate-500 mb-2">/100</span>
                      <div className="flex-1 h-3 bg-slate-700 rounded-full overflow-hidden ml-4 mb-3">
                        <div className="h-full w-[87%] bg-emerald-400 rounded-full" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                      <TrendingUp className="w-5 h-5 text-violet-400 mb-2" />
                      <p className="text-white font-semibold">Revenue Growth</p>
                      <p className="text-emerald-400 text-lg font-bold">+127%</p>
                    </div>
                    <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                      <Shield className="w-5 h-5 text-violet-400 mb-2" />
                      <p className="text-white font-semibold">Compliance</p>
                      <p className="text-emerald-400 text-lg font-bold">Verified</p>
                    </div>
                    <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                      <BarChart3 className="w-5 h-5 text-violet-400 mb-2" />
                      <p className="text-white font-semibold">Market Fit</p>
                      <p className="text-emerald-400 text-lg font-bold">Strong</p>
                    </div>
                    <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                      <Zap className="w-5 h-5 text-violet-400 mb-2" />
                      <p className="text-white font-semibold">Team Score</p>
                      <p className="text-emerald-400 text-lg font-bold">92/100</p>
                    </div>
                  </div>
                  
                  {/* Alert Banner */}
                  <div className="bg-violet-600/10 border border-violet-500/30 rounded-xl p-4 flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    <p className="text-violet-300 text-sm">AI analysis complete • 0 red flags detected</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-slate-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-slate-900 font-semibold text-sm">Deal Approved</p>
                    <p className="text-slate-500 text-xs">Ready to proceed</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  </div></div></div></div></div></div></div></div></div></span>);
}