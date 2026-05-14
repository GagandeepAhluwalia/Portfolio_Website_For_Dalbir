"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "7+", label: "Years Experience" },
  { number: "15+", label: "Certifications" },
  { number: "3", label: "Provinces" },
  { number: "24/7", label: "Operations Oversight" },
];

export function StatsStrip() {
  return (
    <section className="mt-14">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + i * 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-4"
          >
            <div className="text-2xl md:text-3xl font-display text-white">
              {stat.number}
            </div>
            <div className="mt-1 text-[10px] uppercase tracking-widest text-white/45">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}