import React from 'react';
import { TOKEN_LIST } from '../config/tokens';

export const TokenCards: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-slate-950 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            The Elevated Ecosystem
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Six specialized protocols working in harmony to create sustainable, scalable financial infrastructure.
          </p>
        </div>

        {/* Token Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TOKEN_LIST.map((token) => (
            <div
              key={token.id}
              className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div
                  className="absolute inset-0 opacity-20 blur-xl"
                  style={{ backgroundColor: token.accent }}
                />
              </div>

              <div className="relative z-10 space-y-4">
                {/* Token Image */}
                <div className="relative h-48 rounded-lg overflow-hidden bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                  <img
                    src={token.image}
                    alt={token.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Token Info */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">{token.symbol}</h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        token.status === 'ACTIVE'
                          ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                          : 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                      }`}
                    >
                      {token.status}
                    </span>
                  </div>
                  <h4 className="text-sm text-white/80">{token.name}</h4>
                  <p className="text-sm text-white/60 leading-relaxed">{token.description}</p>
                </div>

                {/* Accent Line */}
                <div
                  className="h-1 rounded-full opacity-50"
                  style={{ backgroundColor: token.accent }}
                />

                {/* CTA Button */}
                <button
                  className="w-full py-3 px-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-lg transition-all duration-300 backdrop-blur-sm mt-4"
                  style={{
                    borderColor: `${token.accent}40`,
                    color: token.accent,
                  }}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-orange-500/50">
            Start Your Presale Journey
          </button>
        </div>
      </div>
    </div>
  );
};
