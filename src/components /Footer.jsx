import { Link } from "react-router-dom";
import { Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-primary flex items-center justify-center flex-shrink-0">
                <span className="text-primary-foreground font-bold text-sm"></span>
              </div>
              <span className="font-bold text-lg text-foreground">Elevate Protocols</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Decentralized wealth management for the modern investor. Start with $5.
            </p>
          </div>

          {/* Product */}
          <div>
            <p className="text-sm font-semibold text-foreground uppercase tracking-wider mb-5">Product</p>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  Dashboard
                </a>
              </li>
              <li>
                <Link to="/Indices" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  Indices
                </Link>
              </li>
              <li>
                <Link to="/About" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <p className="text-sm font-semibold text-foreground uppercase tracking-wider mb-5">Resources</p>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  Smart Contracts
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-sm font-semibold text-foreground uppercase tracking-wider mb-5">Legal</p>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© 2026 ElevateFi. All rights reserved.</p>
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-primary rounded-full inline-block" />
            Built on Base • Powered by Chainlink
          </p>
        </div>
      </div>
    </footer>);

}