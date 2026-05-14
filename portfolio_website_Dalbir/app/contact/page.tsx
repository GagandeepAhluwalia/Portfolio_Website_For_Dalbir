"use client";

import { SparklesCore } from "@/components/ui/sparkles";
import { GlowCard } from "@/components/ui/glow-card";
import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Building2, Phone } from "lucide-react";

function ContactCard({
  icon,
  label,
  value,
  hint,
  href,
  glowColor,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  hint: string;
  href?: string;
  glowColor: "blue" | "red";
}) {
  const Content = (
    <GlowCard customSize glowColor={glowColor} className="!aspect-auto !p-0">
      <div className="bg-white/[0.03] backdrop-blur-md border border-white/10">
        <div className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0 bg-accent/15 text-accent">
          {icon}
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-[0.18em] text-white/40 font-mono mb-1">
            {label}
          </div>
          <div className="font-display text-lg font-semibold text-white">
            {value}
          </div>
          <div className="mt-1 text-sm text-white/50">{hint}</div>
        </div>
      </div>
    </GlowCard>
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block">
      {Content}
    </a>
  ) : (
    Content
  );
}

export default function ContactPage() {
  return (
    <main className="relative min-h-screen w-full bg-ink overflow-hidden">
      <Navbar />

      <div className="fixed inset-0 z-0">
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={80}
          particleColor="#ffffff"
          speed={1}
          className="w-full h-full"
        />
      </div>

      <div className="relative z-10 px-6 md:px-12 pt-32 pb-24 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-14 text-center"
        >
          <h1 className="font-display text-5xl md:text-7xl font-semibold tracking-tight text-gradient">
            Contact
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-white/60 text-lg">
            For professional inquiries, operations discussions, or networking,
            connect directly using the details below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ContactCard
            icon={<Mail className="w-5 h-5" />}
            label="Professional Email"
            value="contact@example.com"
            hint="Best for formal inquiries"
            href="mailto:contact@example.com"
            glowColor="red"
          />

          <ContactCard
            icon={<Phone className="w-5 h-5" />}
            label="Work Cell"
            value="+1 (000) 000-0000"
            hint="Available during business hours"
            href="tel:+10000000000"
            glowColor="blue"
          />

          <ContactCard
            icon={<Linkedin className="w-5 h-5" />}
            label="LinkedIn"
            value="dalbir-singh-badwal"
            hint="Connect professionally on LinkedIn"
            href="https://www.linkedin.com/in/dalbir-singh-badwal-ba0733113/"
            glowColor="blue"
          />

          <ContactCard
            icon={<MapPin className="w-5 h-5" />}
            label="Location"
            value="Halifax, Nova Scotia"
            hint="Atlantic Canada"
            glowColor="red"
          />

          <ContactCard
            icon={<Building2 className="w-5 h-5" />}
            label="Current Role"
            value="Operations Manager at GardaWorld"
            hint="Security operations and team leadership"
            glowColor="red"
          />
        </div>

        <div className="mt-20 pt-10 border-t border-white/5 text-center">
          <p className="text-xs text-white/30 uppercase tracking-[0.2em] font-mono">
            Dalbir Singh Badwal · Operations Manager · Halifax, NS
          </p>
        </div>
      </div>
    </main>
  );
}