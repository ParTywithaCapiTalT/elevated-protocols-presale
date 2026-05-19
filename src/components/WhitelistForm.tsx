import React, { useState } from 'react';

export const WhitelistForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitted(true);
      setEmail('');
      setWalletAddress('');
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Whitelist signup failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-950 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Join the Whitelist
          </h2>
          <p className="text-lg text-white/60">
            Secure your spot in the exclusive presale. Limited allocation available.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
          {/* Radial Glow */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-purple-500/10 opacity-50" />
          </div>

          <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
              />
            </div>

            {/* Wallet Address Input */}
            <div>
              <label htmlFor="wallet" className="block text-sm font-semibold text-white mb-2">
                Wallet Address (0x...)
              </label>
              <input
                id="wallet"
                type="text"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                placeholder="0x..."
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 font-mono text-sm"
              />
              <p className="text-xs text-white/50 mt-2">
                Your wallet address will be used to receive tokens during the presale.
              </p>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="terms"
                required
                className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5 text-orange-500 focus:ring-orange-500/20"
              />
              <label htmlFor="terms" className="text-sm text-white/70">
                I agree to the terms and conditions and understand the risks associated with cryptocurrency investments.
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 px-6 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-orange-500/50 disabled:shadow-none"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Processing...
                </span>
              ) : (
                'Join Whitelist'
              )}
            </button>

            {/* Success Message */}
            {submitted && (
              <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                <p className="text-green-300 font-semibold">
                  ✓ Successfully added to whitelist! Check your email for next steps.
                </p>
              </div>
            )}
          </form>

          {/* Info Box */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-semibold text-white mb-2">Whitelist Phase</h4>
                <p className="text-sm text-white/60">May 20 - May 23</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-2">Public Phase</h4>
                <p className="text-sm text-white/60">May 24 - May 31</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl mb-2">🔒</div>
            <p className="text-sm text-white/60">Secure</p>
          </div>
          <div>
            <div className="text-2xl mb-2">⚡</div>
            <p className="text-sm text-white/60">Fast</p>
          </div>
          <div>
            <div className="text-2xl mb-2">✓</div>
            <p className="text-sm text-white/60">Verified</p>
          </div>
        </div>
      </div>
    </div>
  );
};
