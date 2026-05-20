import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Mail, Lock, Zap, CheckCircle, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { Link } from "wouter";

/**
 * PRESALE PAGE - WHITELIST APPLICATION ONLY
 * Design: Geometric Luxury Minimalism
 * - Hero section with mountain/pyramid imagery
 * - Whitelist application form (name, phone, location, age, wallet)
 * - Feature highlights with hexagon badges
 * - Minimal, premium aesthetic
 * - Form submissions sent to javier.santos@30@gmail.com
 * - NO PURCHASE FUNCTIONALITY (Private Portal only)
 */

export default function Presale() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    age: "",
    wallet: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    if (
      !formData.name ||
      !formData.phone ||
      !formData.location ||
      !formData.age ||
      !formData.wallet
    ) {
      toast.error("Please fill in all fields");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/xyzabc123", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          location: formData.location,
          age: formData.age,
          wallet: formData.wallet,
          email: "javier.santos@30@gmail.com",
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", phone: "", location: "", age: "", wallet: "" });
        toast.success("Application submitted! We'll be in touch soon.");
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        toast.error("Failed to submit application. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-primary/10 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-slate-950 font-bold text-lg">EP</span>
            </div>
            <span className="font-bold text-lg text-white">Elevate Protocols</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/presale" className="text-primary font-semibold hover:text-primary/80 transition">
              Presale
            </Link>
            <Link href="/tokenomics" className="text-muted-foreground hover:text-foreground transition">
              Tokenomics
            </Link>
            <Link href="/indices" className="text-muted-foreground hover:text-foreground transition">
              Indices
            </Link>
            <Link href="/about" className="text-muted-foreground hover:text-foreground transition">
              About
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: `url('/manus-storage/hero-mountain_556ea912.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/50 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
                  <span className="text-primary text-sm font-semibold">PRIVATE WHITELIST</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                  Build the Future
                </h1>
                <p className="text-xl text-muted-foreground">
                  Join the exclusive whitelist for Elevate Protocols. Early investors. Greater rewards.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Lock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">Secure</h3>
                    <p className="text-sm text-muted-foreground">
                      Smart contract audited & battle-tested
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">Elevated</h3>
                    <p className="text-sm text-muted-foreground">
                      Premium index vaults with strategic weighting
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">Exclusive</h3>
                    <p className="text-sm text-muted-foreground">
                      Limited spots for Strategic Scouts only
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Application Form */}
            <div className="relative">
              <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 p-8 backdrop-blur-sm">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Whitelist Application</h2>
                    <p className="text-sm text-muted-foreground">
                      Secure your spot in the Elevate Protocols presale.
                    </p>
                  </div>

                  {!submitted ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs font-semibold text-muted-foreground mb-2 uppercase">
                          Full Name
                        </label>
                        <Input
                          type="text"
                          name="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          className="bg-slate-900/50 border-primary/20 text-white placeholder:text-muted-foreground"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-muted-foreground mb-2 uppercase">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          placeholder="+1 (555) 123-4567"
                          value={formData.phone}
                          onChange={handleChange}
                          className="bg-slate-900/50 border-primary/20 text-white placeholder:text-muted-foreground"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-muted-foreground mb-2 uppercase">
                          Location
                        </label>
                        <Input
                          type="text"
                          name="location"
                          placeholder="City, Country"
                          value={formData.location}
                          onChange={handleChange}
                          className="bg-slate-900/50 border-primary/20 text-white placeholder:text-muted-foreground"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-muted-foreground mb-2 uppercase">
                          Age
                        </label>
                        <Input
                          type="number"
                          name="age"
                          placeholder="25"
                          value={formData.age}
                          onChange={handleChange}
                          className="bg-slate-900/50 border-primary/20 text-white placeholder:text-muted-foreground"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-muted-foreground mb-2 uppercase">
                          Wallet Address
                        </label>
                        <Input
                          type="text"
                          name="wallet"
                          placeholder="0x..."
                          value={formData.wallet}
                          onChange={handleChange}
                          className="bg-slate-900/50 border-primary/20 text-white placeholder:text-muted-foreground font-mono text-sm"
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-primary hover:bg-primary/90 text-slate-950 font-bold py-2 rounded-lg transition"
                      >
                        {loading ? "Submitting..." : "Apply to Whitelist"}
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        We respect your privacy. No spam, ever.
                      </p>
                    </form>
                  ) : (
                    <div className="text-center space-y-4 py-8">
                      <CheckCircle className="w-12 h-12 text-primary mx-auto" />
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2">Application Submitted!</h3>
                        <p className="text-sm text-muted-foreground">
                          We'll review your application and get back to you soon.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 p-6">
              <h3 className="text-lg font-bold text-white mb-2">Private Seed</h3>
              <p className="text-primary text-2xl font-bold mb-4">$0.015</p>
              <p className="text-sm text-muted-foreground">
                Exclusive pricing for Strategic Scouts. Limited availability.
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 p-6">
              <h3 className="text-lg font-bold text-white mb-2">Private Presale</h3>
              <p className="text-primary text-2xl font-bold mb-4">$0.025</p>
              <p className="text-sm text-muted-foreground">
                Coming soon. Whitelist members get priority access.
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 p-6">
              <h3 className="text-lg font-bold text-white mb-2">Public ITO</h3>
              <p className="text-primary text-2xl font-bold mb-4">$0.040</p>
              <p className="text-sm text-muted-foreground">
                Public launch. Open to all investors.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Join?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Apply to the whitelist above and secure your spot in the Elevate Protocols presale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary hover:bg-primary/90 text-slate-950 font-bold px-8 py-3 rounded-lg inline-flex items-center gap-2">
              Learn More <ArrowRight className="w-4 h-4" />
            </Button>
            <Link href="/about">
              <Button variant="outline" className="border-primary/30 text-white hover:bg-primary/10 font-bold px-8 py-3 rounded-lg">
                About Elevate
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary/10 bg-slate-950/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-white mb-4">Elevate Protocols</h4>
              <p className="text-sm text-muted-foreground">
                The apex of elevated finance.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Pages</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/presale" className="hover:text-primary transition">Presale</Link></li>
                <li><Link href="/tokenomics" className="hover:text-primary transition">Tokenomics</Link></li>
                <li><Link href="/indices" className="hover:text-primary transition">Indices</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Community</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="https://x.com/lifeelev" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">X / Twitter</a></li>
                <li><a href="https://x.com/javtsant" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">Founder (@javtsant)</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <p className="text-sm text-muted-foreground">
                <a href="mailto:javier.santos@30@gmail.com" className="hover:text-primary transition">
                  javier.santos@30@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="border-t border-primary/10 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 Elevate Protocols. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
