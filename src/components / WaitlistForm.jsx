import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
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
      className="bg-background py-28 relative overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--primary)/0.12)_0%,_transparent_65%)] pointer-events-none" />

      <div className="max-w-2xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs text-primary uppercase tracking-[0.25em] font-semibold mb-4">
            Early Access
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-5 tracking-tight">
            Be First to Elevate
          </h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            The protocol launches soon. Join the waitlist and get priority access before the public.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-4"
            >
              <CheckCircle className="w-14 h-14 text-primary" />
              <p className="text-xl font-semibold text-foreground">You're on the list.</p>
              <p className="text-muted-foreground text-sm">We'll reach out when we launch. Stay sharp.</p>
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
                className="flex-1 w-full bg-card border border-border/50 text-foreground placeholder:text-muted-foreground rounded-full px-6 py-4 text-sm outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all"
              />
              <Button
                type="submit"
                disabled={loading}
                className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-7 py-4 h-auto text-sm font-semibold shadow-[0_0_25px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.5)] transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap group"
              >
                {loading ? "Joining..." : "Get Early Access"}
                {!loading && <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}