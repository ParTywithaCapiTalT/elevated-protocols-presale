import React from 'react';
import { CountdownTimer } from './CountdownTimer';

export const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Animated Background Mesh */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-orange-500/10 via-transparent to-transparent opacity-40" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-blue-500/10 to-transparent opacity-30 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial from-purple-500/10 to-transparent opacity-30 blur-3xl" />
      </div>

      {/* Content Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen px-6 sm:px-8 lg:px-12 py-12">
        {/* Left Column - Text & CTA */}
        <div className="space-y-8 flex flex-col justify-center">
          {/* Logo & Branding */}
          <div className="space-y-4">
            <div className="inline-block">
              <div className="px-4 py-2 bg-gradient-to-r from-orange-500/20 to-orange-500/10 border border-orange-500/30 rounded-full">
                <p className="text-sm font-semibold text-orange-300">🚀 PRESALE LIVE</p>
              </div>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Elevated
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Protocols
              </span>
            </h1>
          </div>

          {/* Tagline */}
          <div className="space-y-3">
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-xl">
              The apex of elevated finance. Build sustainable wealth through decentralized protocols, real-world data integration, and next-generation financial instruments.
            </p>
            <p className="text-sm text-white/60">
              Join the future of Layer 2 finance. Secure. Scalable. Sustainable.
            </p>
          </div>

          {/* Countdown Timer */}
          <CountdownTimer />

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-orange-500/50 flex items-center justify-center gap-2">
              Join Whitelist
              <span>→</span>
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-lg transition-all duration-300 backdrop-blur-sm">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-8">
            {[
              { label: 'Protocols', value: '6' },
              { label: 'Network', value: 'Base L2' },
              { label: 'Status', value: 'Live' },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-lg p-4 backdrop-blur-sm hover:border-white/20 transition-colors"
              >
                <p className="text-xs text-white/60 mb-1">{stat.label}</p>
                <p className="text-lg font-bold text-white">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Hero Graphic */}
        <div className="relative h-full min-h-96 lg:min-h-screen flex items-center justify-center">
          <div className="relative w-full max-w-lg aspect-square">
            {/* Glassmorphic Container */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
              {/* Inner Glow */}
              <div className="absolute inset-0 bg-gradient-radial from-orange-500/20 via-transparent to-transparent opacity-50" />

              {/* Hero Image */}
              <img
                src="/images/hero-graphic.png"
                alt="Summit Vault - Elevated Protocols"
                className="w-full h-full object-cover"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
            </div>

            {/* Floating Accent Elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-radial from-orange-500/20 to-transparent blur-2xl opacity-60 animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-radial from-blue-500/20 to-transparent blur-2xl opacity-60 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <p className="text-xs text-white/60 font-semibold">Scroll to explore</p>
          <svg
            className="w-6 h-6 text-white/40"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
