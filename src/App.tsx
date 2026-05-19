import { HeroSection, TokenCards, WhitelistForm } from './components';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">EP</span>
            </div>
            <span className="text-xl font-bold">Elevated Protocols</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#ecosystem" className="text-white/60 hover:text-white transition-colors">
              Ecosystem
            </a>
            <a href="#whitelist" className="text-white/60 hover:text-white transition-colors">
              Whitelist
            </a>
            <button className="px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold transition-colors">
              Connect Wallet
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20">
        <HeroSection />
      </section>

      {/* Token Cards Section */}
      <section id="ecosystem" className="scroll-mt-20">
        <TokenCards />
      </section>

      {/* Whitelist Form Section */}
      <section id="whitelist" className="scroll-mt-20">
        <WhitelistForm />
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-white mb-4">Elevated Protocols</h4>
              <p className="text-white/60 text-sm">
                Sustainable wealth management through real-world data integration.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Whitepaper</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Community</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Telegram</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Disclaimer</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm">
            <p>&copy; 2026 Elevated Protocols. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
