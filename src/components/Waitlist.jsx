import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { base44 } from "@/api/base44Client";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    await base44.integrations.Core.SendEmail({
      to: email,
      subject: "You're on the ElevateFi waitlist 🚀",
      body: `Welcome to ElevateFi!\n\nYou've secured your spot on the early access waitlist. We'll notify you the moment the protocol launches.\n\nSecure. Elevate. Transcend.\n\n— The ElevateFi Team`,
    });
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      id="waitlist"
      className="py-28 relative overflow-hidden"
      style={{ background: "#070d1c" }}
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(249,115,22,0.1)_0%,_transparent_65%)] pointer-events-none" />

      <div className="max-w-2xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[10px] text-orange-400/70 uppercase tracking-[0.35em] font-mono mb-4">
            Early Access
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5 tracking-tight">
            Be First to the Summit
          </h2>
          <p className="text-slate-400/70 text-lg mb-10 leading-relaxed">
            The protocol launches soon. Join the waitlist and get priority access before the public.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-4"
            >
              <CheckCircle className="w-14 h-14 text-orange-400" />
              <p className="text-xl font-semibold text-white">You're on the list.</p>
              <p className="text-slate-400/70 text-sm font-mono">SECURE · ELEVATE · TRANSCEND</p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center gap-3 max-w-lg mx-auto"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 w-full bg-[#0a1628] border border-orange-500/20 text-white placeholder:text-slate-500 rounded-full px-6 py-4 text-sm outline-none focus:border-orange-400/50 focus:ring-2 focus:ring-orange-400/15 transition-all"
              />
              <button
                type="submit"
                disabled={loading}
                className="group relative flex items-center gap-2 px-7 py-4 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #c2410c, #ea580c, #f97316)",
                  boxShadow: "0 0 25px rgba(249,115,22,0.35), inset 0 1px 0 rgba(255,255,255,0.15)"
                }}
              >
                <span>{loading ? "Joining..." : "Get Early Access"}</span>
                {!loading && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}