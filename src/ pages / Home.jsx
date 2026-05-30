import { motion } from "framer-motion";
import { ArrowRight, Lock, TrendingUp, Zap, Shield } from "lucide-react";
import WaitlistForm from "@/components/WaitlistForm";

/* ─── Hero ───────────────────────────────────────────────── */
function HeroSection() {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: "#060c1a" }}>
      {/* Full-bleed mountain artwork */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://media.base44.com/images/public/6a178c5877f1cdde1194ac35/f7600bfae_file_000000007d8071fb9152d675c2ba6ac7.png"
          alt=""
          className="w-full h-full object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060c1a]/80 via-transparent to-[#060c1a]/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060c1a]/70 via-transparent to-[#060c1a]/70" />
      </div>

      {/* HUD corner labels */}
      <div className="absolute top-28 left-10 hidden lg:block z-20">
        <p className="text-[9px] text-orange-400/70 uppercase tracking-[0.3em] font-mono mb-1">ELEV.</p>
        <p className="text-2xl font-mono text-orange-300/80 tracking-widest">8848M</p>
      </div>
      <div className="absolute top-28 right-10 hidden lg:block z-20 text-right">
        <p className="text-[9px] text-orange-400/70 uppercase tracking-[0.3em] font-mono mb-1">COORDINATES</p>
        <p className="text-xs font-mono text-orange-300/70">N 27.9881°</p>
        <p className="text-xs font-mono text-orange-300/70">E 86.9250°</p>
      </div>

      {/* Right HUD cards */}
      <div className="absolute top-1/2 -translate-y-1/2 right-8 hidden xl:flex flex-col gap-4 z-20" style={{ animation: "fadeInScale 1s ease-out 0.6s both" }}>
        <div className="w-52 bg-[#0a1628]/80 backdrop-blur-md border border-orange-500/20 p-4 rounded-xl shadow-2xl">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[9px] text-orange-400/70 uppercase tracking-[0.2em] font-mono">SUMMIT LOCKED</p>
            <Lock className="w-3 h-3 text-orange-400/70" />
          </div>
          <p className="text-[10px] text-orange-300/60 font-mono tracking-widest mb-3">SECURE · ELEVATE · TRANSCEND</p>
          <div className="flex gap-0.5">
            {[...Array(14)].map((_, i) => (
              <div key={i} className="h-1 flex-1 rounded-full overflow-hidden bg-orange-900/30">
                <div className="h-full bg-orange-400/60 rounded-full" style={{ width: i < 11 ? "100%" : "0%" }} />
              </div>
            ))}
          </div>
        </div>
        <div className="w-52 bg-[#0a1628]/80 backdrop-blur-md border border-orange-500/20 p-4 rounded-xl shadow-2xl">
          <p className="text-[9px] text-orange-400/70 uppercase tracking-[0.2em] font-mono mb-1">NETWORK STATUS</p>
          <p className="text-sm text-orange-300 font-mono tracking-wider mb-3">OPERATIONAL</p>
          <div className="h-10 flex items-end gap-0.5">
            {[30, 50, 35, 65, 45, 80, 60, 90, 70, 100].map((h, i) => (
              <div key={i} className="flex-1 rounded-t-sm bg-orange-400/30" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
        <div className="w-52 bg-[#0a1628]/80 backdrop-blur-md border border-orange-500/20 p-4 rounded-xl shadow-2xl">
          <p className="text-[9px] text-orange-400/70 uppercase tracking-[0.2em] font-mono mb-1">PROTOCOL INTEGRITY</p>
          <p className="text-2xl font-mono text-orange-300 tracking-wider">100.00%</p>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-30 max-w-5xl mx-auto px-6 w-full text-center pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          {/* Shield badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <div className="relative w-16 h-16 mx-auto mb-4">
              <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-xl animate-pulse" />
              <div className="relative w-16 h-16 border-2 border-orange-400/60 rounded-full flex items-center justify-center bg-[#0a1628]/80 backdrop-blur-sm shadow-[0_0_25px_rgba(251,146,60,0.3)]">
                <span className="text-orange-300 font-bold text-xl tracking-tighter">EP</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 px-5 py-2 rounded-full border border-orange-500/30 bg-orange-500/8 backdrop-blur-sm mx-auto w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse shadow-[0_0_6px_rgba(251,146,60,0.8)]" />
              <p className="text-xs text-orange-300 font-semibold tracking-[0.25em] uppercase font-mono">Protocol Launching Soon</p>
            </div>
          </motion.div>

          {/* Wordmark */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-3"
          >
            <p className="text-[11px] text-orange-400/70 uppercase tracking-[0.4em] font-mono mb-4">The Elevate Protocols</p>
            <h1 className="text-5xl sm:text-6xl lg:text-[76px] font-bold leading-[1.06] tracking-tight text-white">
              Summit Vault
            </h1>
            <div className="flex items-center justify-center gap-3 mt-3">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-orange-400/60" />
              <p className="text-xl sm:text-2xl font-mono font-bold text-orange-400 tracking-widest" style={{ textShadow: "0 0 20px rgba(251,146,60,0.7)" }}>$SUMIT</p>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-orange-400/60" />
            </div>
            <p className="text-xs text-orange-300/50 uppercase tracking-[0.3em] font-mono mt-2">The Apex of Elevated Finance</p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-base sm:text-lg text-slate-300/70 max-w-xl mb-10 leading-relaxed font-light mt-6"
          >
            Target-date investing on-chain. Automated wealth management from $5 to financial freedom — non-custodial, built on Base.
          </motion.p>

          {/* Strategy · Elevation · Execution pillars */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.7 }}
            className="flex items-center justify-center gap-4 sm:gap-8 mb-10"
          >
            {["STRATEGY", "ELEVATION", "EXECUTION"].map((p, i) => (
              <div key={p} className="flex items-center gap-3">
                {i > 0 && <span className="text-orange-500/30 hidden sm:inline font-mono">+</span>}
                <span className="text-[10px] text-orange-300/70 uppercase tracking-[0.25em] font-mono">{p}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={scrollToWaitlist}
              className="group relative flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto justify-center overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #c2410c, #ea580c, #f97316)",
                boxShadow: "0 0 30px rgba(249,115,22,0.4), inset 0 1px 0 rgba(255,255,255,0.15)"
              }}
            >
              <span className="relative z-10">Get Early Access</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
            </button>
            <button
              onClick={scrollToWaitlist}
              className="flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-orange-300/80 border border-orange-500/30 bg-orange-500/5 backdrop-blur-sm hover:bg-orange-500/10 hover:border-orange-400/50 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto justify-center"
            >
              <Lock className="w-3.5 h-3.5" />
              Join Waitlist
            </button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-10 text-[9px] text-slate-600 uppercase tracking-[0.35em] font-mono"
          >
            BUILT FOR THE ASCENT · SECURE · ELEVATE · TRANSCEND
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Blurred / Locked Preview Sections ──────────────────── */
function LockedStatsPreview() {
  const stats = [
    { label: "Total Value Locked", value: "$45.2M" },
    { label: "Active Vaults", value: "2,847" },
    { label: "Avg. Annual Yield", value: "18.3%" },
  ];
  return (
    <section className="py-12 relative" style={{ background: "#070d1c" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-[#0a1628]/80 border border-orange-500/10 rounded-2xl p-8 relative overflow-hidden">
              <div className="blur-sm select-none pointer-events-none">
                <p className="text-xs text-orange-400/50 mb-3 uppercase tracking-wider font-mono">{stat.label}</p>
                <p className="text-5xl font-bold text-white mb-3">{stat.value}</p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-[#070d1c]/40 backdrop-blur-[2px]">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0a1628]/80 border border-orange-500/20">
                  <Lock className="w-3.5 h-3.5 text-orange-400/70" />
                  <span className="text-xs text-orange-300/60 font-mono">Unlocks at launch</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LockedIndexPreview() {
  const indices = [
    { symbol: "$PATH", name: "Growth Index", icon: "📈" },
    { symbol: "$SHORE", name: "Stable Index", icon: "🛡️" },
    { symbol: "$RWAT", name: "RWA Index", icon: "🏛️" },
    { symbol: "$VELO", name: "Velocity Index", icon: "⚡" },
    { symbol: "$MIND", name: "Multi-Index", icon: "🧠" },
  ];

  return (
    <section className="py-24 relative" style={{ background: "#070d1c" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-[10px] text-orange-400/60 uppercase tracking-[0.3em] font-mono mb-3">Index Ecosystem</p>
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Five Indices. One Protocol.</h2>
          <p className="text-slate-400/70 max-w-xl mx-auto text-base">Specialized indices working in concert for every stage of your financial ascent.</p>
        </div>
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 blur-sm select-none pointer-events-none opacity-50">
            {indices.map((index) => (
              <div key={index.symbol} className="bg-[#0a1628]/80 border border-orange-500/10 rounded-2xl p-6 flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-2xl">{index.icon}</div>
                <div>
                  <p className="font-bold text-orange-300 text-lg font-mono">{index.symbol}</p>
                  <p className="text-xs text-slate-400/70 uppercase tracking-wide">{index.name}</p>
                </div>
                <div className="h-8 bg-orange-400/5 rounded-lg border border-orange-500/10" />
              </div>
            ))}
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <div className="bg-[#0a1628]/90 backdrop-blur-md border border-orange-500/25 rounded-2xl px-8 py-6 text-center shadow-2xl">
              <Lock className="w-8 h-8 text-orange-400/80 mx-auto mb-3" />
              <p className="text-base font-semibold text-white mb-1">Index details locked until launch</p>
              <p className="text-sm text-slate-400/60 font-mono text-xs">Join the waitlist for early access</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LockedFeaturesPreview() {
  const features = [
    { icon: "🎯", title: "Target-Date Investing", description: "Automatically adjusts allocation from growth to preservation as you approach your financial summit." },
    { icon: "⚡", title: "Automated DCA", description: "Dollar-cost averaging via Chainlink Automation without any manual intervention." },
    { icon: "🛡️", title: "$SUMIT Loyalty Rewards", description: "Stake $SUMIT tokens to unlock premium tier status and reduce performance fees." },
  ];

  return (
    <section className="py-24 relative" style={{ background: "#070d1c" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-[10px] text-orange-400/60 uppercase tracking-[0.3em] font-mono mb-3">Why Elevate</p>
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Built for the Ascent</h2>
          <p className="text-slate-400/70 max-w-xl mx-auto text-base">Smart contracts and decentralized infrastructure powering your wealth strategy.</p>
        </div>
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 blur-sm select-none pointer-events-none opacity-50">
            {features.map((f) => (
              <div key={f.title} className="bg-[#0a1628]/80 border border-orange-500/10 rounded-2xl p-10">
                <div className="w-14 h-14 rounded-2xl bg-orange-500/8 border border-orange-500/15 flex items-center justify-center mb-8 text-2xl">{f.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
                <p className="text-slate-400/70 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#0a1628]/90 backdrop-blur-md border border-orange-500/25 rounded-2xl px-8 py-6 text-center shadow-2xl">
              <Lock className="w-8 h-8 text-orange-400/80 mx-auto mb-3" />
              <p className="text-base font-semibold text-white mb-1">Full feature set unlocks at launch</p>
              <p className="text-xs text-slate-400/60 font-mono">Get notified — join the waitlist below</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Page ────────────────────────────────────────────────── */
export default function Home() {
  return (
    <div className="min-h-screen font-sans" style={{ background: "#060c1a" }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeInScale { 0% { opacity: 0; transform: scale(0.9) translateY(20px); } 100% { opacity: 1; transform: scale(1) translateY(0); } }
      ` }} />
      <HeroSection />
      <LockedStatsPreview />
      <LockedIndexPreview />
      <LockedFeaturesPreview />
      <WaitlistForm />
    </div>
  );
}