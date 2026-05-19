import React from 'react';
import { CountdownTimer } from './CountdownTimer';

export const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-slate-950 overflow-hidden">
      {/* Animated Background Mesh */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text & CTA */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight">
                Elevate Your
                <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  {' '}Financial Future
                </span>
              </h1>
              <p className="text-lg text-white/70 max-w-md">
                Join the next generation of decentralized finance. Sustainable wealth management through real-world data integration and advanced financial primitives.
              </p>
            </div>

            {/* Countdown Timer */}
            <div className="pt-4">
              <CountdownTimer />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-orange-500/50">
                Join Whitelist
              </button>
              <button className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-lg transition-all duration-300 backdrop-blur-sm">
                Learn More
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10">
              <div>
                <div className="text-2xl font-bold text-orange-400">6</div>
                <p className="text-sm text-white/60">Core Protocols</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400">100%</div>
                <p className="text-sm text-white/60">On-Chain</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400">∞</div>
                <p className="text-sm text-white/60">Scalability</p>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Graphic */}
          <div className="relative h-full min-h-96 lg:min-h-screen flex items-center justify-center">
            {/* Glassmorphic Frame */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
              {/* Inner Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-blue-500/10 opacity-50" />
            </div>

            {/* Hero Image */}
            <div className="relative z-10 w-full h-full flex items-center justify-center p-8">
              <img
                src="/images/file_000000007d8071fb9152d675c2ba6ac7.png"
                alt="Summit Vault - Elevated Protocols"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <p className="text-white/60 text-sm">Scroll to explore</p>
          <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
};
