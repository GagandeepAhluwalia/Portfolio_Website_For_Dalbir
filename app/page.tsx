"use client";

import { StatsStrip } from "@/components/StatsStrip";
import { SplineScene } from "@/components/SplineScene";
import { Navbar } from "@/components/Navbar";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-ink">
      <Navbar />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-accent/10 blur-[150px]" />
        <div className="absolute top-1/3 -right-40 w-[700px] h-[700px] rounded-full bg-white/[0.03] blur-[180px]" />
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <section className="relative z-10 flex min-h-screen items-center px-6 md:px-12 pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="inline-flex items-center gap-2 self-start mb-8 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>

              <span className="text-[11px] uppercase tracking-[0.18em] text-white/70 font-medium">
                Available for collaboration
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold leading-[0.95] tracking-tight text-white"
            >
              Dalbir
              <br />
              <span className="text-gradient-accent">Singh Badwal</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35 }}
              className="mt-6 flex flex-col gap-3"
            >
              <p className="font-display text-xl md:text-2xl text-white/90 font-light">
                Operations Manager at{" "}
                <span className="font-medium text-white">GardaWorld</span>
              </p>

              <div className="flex items-center gap-2 text-sm text-white/50">
                <MapPin className="w-3.5 h-3.5" />
                <span>Halifax, Nova Scotia · Canada</span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="mt-8 max-w-xl text-base md:text-lg text-white/60 leading-relaxed"
            >
              Seven years architecting security operations across Canada — from
              mobile patrol fleets in the GTA to client services at Halifax
              International Airport. I translate client requirements into
              ground-level execution, build teams that perform, and resolve
              what others escalate.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.65 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-ink font-medium text-sm hover:bg-white/90 transition-all"
              >
                About Myself
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 text-white font-medium text-sm hover:bg-white/5 hover:border-white/25 transition-all"
              >
                Contact Me
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>

            <StatsStrip />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="relative h-[400px] lg:h-[700px] order-1 lg:order-2"
          >
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/30 text-[10px] uppercase tracking-[0.25em] font-mono"
      >
        <span>Scroll to explore</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </motion.div>
    </main>
  );
}