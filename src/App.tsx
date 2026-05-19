import { HeroSection } from './components/HeroSection';
import { TokenGrid } from './components/TokenGrid';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      {/* Hero Section */}
      <HeroSection />

      {/* Token Grid Section */}
      <section className="relative z-10 px-6 sm:px-8 lg:px-12 py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Explore Our Protocols
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Six powerful financial instruments designed for sustainable wealth building and long-term value creation.
            </p>
          </div>

          {/* Token Grid */}
          <TokenGrid />
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-slate-950/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="text-white font-bold">Elevated Protocols</h3>
              <p className="text-sm text-white/60">
                Building the future of sustainable finance on Layer 2.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-semibold text-sm">Resources</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Whitepaper</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-semibold text-sm">Community</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Telegram</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-semibold text-sm">Legal</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Disclaimer</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-white/60">
            <p>&copy; 2026 Elevated Protocols. All rights reserved.</p>
            <p>Built on Base L2 • Powered by Ethereum</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
