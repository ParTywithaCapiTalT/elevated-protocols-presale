import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Lock, Activity, Shield, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import WaitlistForm from "@/components/WaitlistForm";

/* ─── Hero ───────────────────────────────────────────────── */
function HeroSection() {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,_hsl(var(--primary)/0.18)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--accent)/0.10)_0%,_transparent_50%)]" />
        <div
          className="absolute top-1/4 left-1/3 w-[560px] h-[560px] bg-primary/20 rounded-full blur-[130px] mix-blend-screen"
          style={{ animation: "floatA 10s ease-in-out infinite" }} />
        
        <div
          className="absolute bottom-1/4 right-1/3 w-[640px] h-[640px] bg-accent/12 rounded-full blur-[160px] mix-blend-screen"
          style={{ animation: "floatB 13s ease-in-out infinite alternate" }} />
        
        {/* Grid texture */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_10%,transparent_100%)]" />
      </div>

      {/* Floating side cards */}
      <div className="absolute top-36 right-10 hidden xl:flex flex-col gap-5 z-20" style={{ animation: "fadeInScale 1s ease-out 0.5s both" }}>
        <div className="w-64 bg-card/40 backdrop-blur-md border border-border/40 p-5 rounded-2xl shadow-2xl">
          <div className="flex justify-between items-center mb-3">
            <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em]">Protocol Status</p>
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_hsl(var(--primary))]" />
          </div>
          <p className="text-sm text-primary font-mono tracking-wider mb-4">LAUNCHING SOON</p>
          <div className="h-14 flex items-end gap-1 opacity-50">
            {[35, 55, 40, 75, 50, 88, 70, 95].map((h, i) =>
            <div key={i} className="w-full bg-gradient-to-t from-primary/40 to-primary/10 rounded-t-sm" style={{ height: `${h}%` }} />
            )}
          </div>
        </div>
        <div className="w-64 bg-card/40 backdrop-blur-md border border-border/40 p-5 rounded-2xl shadow-2xl">
          <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] mb-2">Summit Locked</p>
          <p className="text-xs text-foreground font-medium tracking-wide mb-4">SECURE · ELEVATE · TRANSCEND</p>
          <div className="flex gap-0.5">
            {[...Array(16)].map((_, i) =>
            <div key={i} className="h-1 flex-1 bg-primary/20 rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: i < 12 ? "100%" : "0%" }} />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Corner labels */}
      <div className="absolute bottom-10 left-10 hidden lg:block z-20 opacity-50">
        <p className="text-[10px] text-muted-foreground uppercase tracking-[0.3em] mb-1">Elevation</p>
        <p className="text-3xl font-mono text-foreground tracking-wider">8848M</p>
      </div>
      <div className="absolute bottom-10 right-10 hidden lg:block z-20 text-right opacity-50">
        <p className="text-[10px] text-muted-foreground uppercase tracking-[0.3em] mb-1">Protocol Integrity</p>
        <p className="text-3xl font-mono text-foreground tracking-wider">100.00%</p>
      </div>

      {/* Main content */}
      <div className="relative z-30 max-w-5xl mx-auto px-6 w-full text-center pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-primary/30 bg-primary/8 backdrop-blur-sm">
            
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_6px_hsl(var(--primary))]" />
            <p className="text-xs text-primary font-semibold tracking-[0.2em] uppercase">horizon sights.... acquiring target range</p>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[82px] font-bold leading-[1.08] tracking-tight mb-7 text-foreground">
            Automated Wealth<br className="hidden sm:block" /> Management for{" "}
            <span className="relative inline-block mt-2">
              <span className="text-primary drop-shadow-[0_0_30px_hsl(var(--primary)/0.4)]">
                Decentralized Finance
              </span>
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground/80 max-w-2xl mb-5 leading-relaxed font-light">
            ElevateFi combines target-date investing with decentralized indices to automate your wealth accumulation — from $5 to financial freedom, on-chain.
          </p>

          {/* Key pillars */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
            { icon: <TrendingUp className="w-3.5 h-3.5" />, label: "Goal-Based Investing" },
            { icon: <Zap className="w-3.5 h-3.5" />, label: "Automated DCA" },
            { icon: <Shield className="w-3.5 h-3.5" />, label: "Non-Custodial" }].
            map(({ icon, label }) =>
            <div key={label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted/40 border border-border/40 text-xs text-muted-foreground">
                <span className="text-primary">{icon}</span>
                {label}
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={scrollToWaitlist}
              className="group rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 h-auto text-base font-semibold shadow-[0_0_30px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_50px_hsl(var(--primary)/0.5)] transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto">
              
              Get Early Access
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-border/40 text-foreground hover:bg-muted/30 px-8 py-6 h-auto text-base font-semibold transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
              onClick={scrollToWaitlist}>
              
              <Lock className="w-4 h-4 mr-2 text-muted-foreground" />
              Join Waitlist
            </Button>
          </div>
        </motion.div>
      </div>
    </section>);

}

/* ─── Blurred / Locked Preview Sections ──────────────────── */
function LockedStatsPreview() {
  const stats = [
  { label: "Total Value Locked", value: "$45.2M" },
  { label: "Active Vaults", value: "2,847" },
  { label: "Avg. Annual Yield", value: "18.3%" }];

  return (
    <section className="bg-background py-12 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat) =>
          <div key={stat.label} className="bg-card border border-border/30 rounded-2xl p-8 relative overflow-hidden">
              <div className="blur-sm select-none pointer-events-none">
                <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wider">{stat.label}</p>
                <p className="text-5xl font-bold text-foreground mb-3">{stat.value}</p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-background/40 backdrop-blur-[2px]">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/60 border border-border/40">
                  <Lock className="w-3.5 h-3.5 text-primary" />
                  <span className="text-xs text-muted-foreground font-medium">Unlocks at launch</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

function LockedIndexPreview() {
  const indices = [
  { symbol: "$PATH", name: "Growth Index", icon: "📈" },
  { symbol: "$shore", name: "Stable Index", icon: "🛡️" },
  { symbol: "$rwat", name: "RWA Index", icon: "🏛️" },
  { symbol: "$velo", name: "Velocity Index", icon: "⚡" },
  { symbol: "$mind", name: "Multi-Index", icon: "🧠" }];


  return (
    <section className="bg-background py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-foreground mb-4 tracking-tight">Our Index Ecosystem</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">Five specialized indices working together for every stage of your financial journey.</p>
        </div>
        <div className="relative">
          {/* Blurred cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 blur-sm select-none pointer-events-none opacity-60">
            {indices.map((index) =>
            <div key={index.symbol} className="bg-card border border-border/30 rounded-2xl p-6 flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center text-2xl">{index.icon}</div>
                <div>
                  <p className="font-bold text-foreground text-lg">{index.symbol}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">{index.name}</p>
                </div>
                <div className="h-8 bg-muted/40 rounded-lg" />
              </div>
            )}
          </div>
          {/* Lock overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <div className="bg-card/80 backdrop-blur-md border border-border/50 rounded-2xl px-8 py-6 text-center shadow-2xl">
              <Lock className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-base font-semibold text-foreground mb-1">Index details locked until launch</p>
              <p className="text-sm text-muted-foreground">Join the waitlist for early access</p>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

function LockedFeaturesPreview() {
  const features = [
  { icon: "🎯", title: "Target-Date Investing", description: "Automatically adjusts allocation from growth to preservation as you approach your goal." },
  { icon: "⚡", title: "Automated DCA", description: "Dollar-cost averaging via Chainlink Automation without any manual intervention." },
  { icon: "🛡️", title: "Loyalty Rewards", description: "Stake $SUMIT tokens to unlock premium tier status and reduce performance fees." }];


  return (
    <section className="bg-background py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-foreground mb-4 tracking-tight">Why Horizon Sights</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">Smart contracts and decentralized finance powering your wealth strategy.</p>
        </div>
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 blur-sm select-none pointer-events-none opacity-60">
            {features.map((f) =>
            <div key={f.title} className="bg-card border border-border/30 rounded-2xl p-10">
                <div className="w-14 h-14 rounded-2xl bg-muted/50 border border-border/50 flex items-center justify-center mb-8 text-2xl">{f.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
              </div>
            )}
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-card/80 backdrop-blur-md border border-border/50 rounded-2xl px-8 py-6 text-center shadow-2xl">
              <Lock className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-base font-semibold text-foreground mb-1">Full feature set unlocks at launch</p>
              <p className="text-sm text-muted-foreground">Get notified — join the waitlist below</p>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

/* ─── Page ────────────────────────────────────────────────── */
export default function Home() {
  return (
    <div className="bg-background min-h-screen font-sans selection:bg-primary/30">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes floatA { 0%, 100% { transform: translateY(0) scale(1); } 50% { transform: translateY(-30px) scale(1.05); } }
        @keyframes floatB { 0%, 100% { transform: translateY(0) scale(1); } 50% { transform: translateY(20px) scale(0.95); } }
        @keyframes fadeInScale { 0% { opacity: 0; transform: scale(0.9) translateY(20px); } 100% { opacity: 1; transform: scale(1) translateY(0); } }
      ` }} />
      <HeroSection />
      <LockedStatsPreview />
      <LockedIndexPreview />
      <LockedFeaturesPreview />
      <WaitlistForm />
    </div>);

}