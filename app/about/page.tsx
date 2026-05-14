"use client";
import Image from "next/image";
import { useScroll, useTransform } from "framer-motion";
import { SparklesCore } from "@/components/ui/sparkles";
import { GlowCard } from "@/components/ui/glow-card";
import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
import {
  Briefcase,
  Award,
  GraduationCap,
  Shield,
  Calendar,
  MapPin,
} from "lucide-react";

const experiences = [
  {
    role: "Operations Manager",
    company: "GardaWorld",
    type: "Permanent · Full-time",
    period: "Oct 2025 — Present",
    location: "Halifax, Nova Scotia",
    highlights: [
      "Ensure customer satisfaction and retention by resolving escalations and driving service excellence",
      "Translate client requirements into clear operational plans and site-level execution",
      "Oversee staffing, training, and compliance to maintain fully operational, high-performing teams",
      "Implement and validate corrective actions in line with corporate policies",
      "Maintain accurate documentation, reports, and annual site assessments",
      "Collaborate with union representatives on personnel matters as needed",
    ],
  },
  {
    role: "Client Services Manager, HIAA",
    company: "Paladin Security Group Ltd",
    type: "Permanent · Full-time",
    period: "Jan 2025 — Oct 2025",
    location: "Halifax, Nova Scotia",
    highlights: [
      "Developed short-term and long-range goals supporting Paladin's vision",
      "Implemented and evaluated security programs across contracts",
      "Monitored incident reports and remained on-call for after-hours emergencies",
      "Managed client accounts receivable and assisted accounting operations",
      "Maintained regular client and staff site visits",
    ],
  },
  {
    role: "Client Service Manager",
    company: "Paladin Security Group Ltd",
    type: "Permanent · Full-time",
    period: "Mar 2024 — Jan 2025",
    location: "Toronto, Ontario",
    highlights: [
      "Oversaw resource scheduling to meet all contractual obligations",
      "Monitored portfolio incident reports and corrective action plans",
      "Visited client sites regularly to ensure operational alignment",
    ],
  },
  {
    role: "Mobile Manager",
    company: "Paladin Security Group Ltd",
    type: "Permanent · Full-time",
    period: "Feb 2023 — Mar 2024",
    location: "Toronto, Ontario",
    highlights: [
      "Managed day-to-day staff interactions and concern resolution",
      "Audited mobile department equipment and logistics",
      "Drove business development through quotes, contracts, and new portfolio growth",
      "Implemented departmental policies to sustain profitability",
    ],
  },
  {
    role: "Field Manager",
    company: "Paladin Security Group Ltd",
    type: "Permanent · Full-time",
    period: "May 2022 — Feb 2023",
    location: "Toronto, Ontario",
    highlights: [
      "Ensured contractual obligations were met across sites",
      "Oversaw disaster response and critical incident attendance",
      "Investigated occupational health & safety incidents and officer-involved motor vehicle incidents",
    ],
  },
  {
    role: "Operations Coordinator",
    company: "Paladin Security Group Ltd",
    type: "Permanent · Full-time",
    period: "Oct 2021 — May 2022",
    location: "Toronto, Ontario",
    highlights: [
      "Harmonized schedulers and dispatchers across functions",
      "Audited field staff duties and incoming communications",
      "Coached operations team members and supervised mobile movements",
      "Hired and trained new team members",
    ],
  },
  {
    role: "Mobile Zone Supervisor",
    company: "Paladin Security Group Ltd",
    type: "Permanent · Full-time",
    period: "Aug 2020 — Oct 2021",
    location: "Toronto, Ontario",
    highlights: [
      "Provided direction, coaching, and training to mobile zone staff",
      "Responded to alarms and investigated causes in a timely manner",
      "Ensured adherence to Paladin and site policies",
      "Conducted proactive patrols and investigated incidents",
    ],
  },
  {
    role: "Mobile Officer",
    company: "Paladin Security Group Ltd",
    type: "Full-time",
    period: "May 2020 — Aug 2020",
    location: "Brampton, Ontario",
    highlights: [
      "Conducted mobile patrols at City of Brampton sites",
      "Attended intrusion and fire alarm calls",
      "Educated the public on updated COVID-19 policies during the pandemic",
    ],
  },
  {
    role: "Career Peer Coach",
    company: "George Brown College",
    type: "Part-time",
    period: "Aug 2019 — Apr 2020",
    location: "Greater Toronto Area",
    highlights: [
      "Provided one-on-one student support on resumes, cover letters, and LinkedIn profiles",
      "Developed and led workshops and class presentations on career topics",
      "Hosted outreach activities in high-traffic campus areas",
    ],
  },
];

const certifications = [
  {
    name: "Root Cause Investigation and Analysis",
    issuer: "CAA International — Part of the UK CAA",
    date: "Sep 2025",
    featured: true,
  },
  {
    name: "Mental Health First Aid",
    issuer: "Mental Health Commission of Canada",
    date: "Sep 2021",
    featured: true,
  },
  {
    name: "Private Investigator And Security Guard",
    issuer: "Ontario Government",
    date: "Feb 2019",
    featured: true,
  },
  { name: "Learn Industrial Automation", issuer: "LinkedIn", date: "May 2020" },
  { name: "PLC Ladder Logic Essential Training", issuer: "LinkedIn", date: "May 2020" },
  { name: "Learning PCB Design with EAGLE", issuer: "LinkedIn", date: "May 2020" },
  { name: "Introduction to Quantum Cryptography", issuer: "LinkedIn", date: "May 2020" },
  { name: "Learning Arduino: Interfacing with Hardware", issuer: "LinkedIn", date: "May 2020" },
  { name: "Professional Networking", issuer: "LinkedIn", date: "Mar 2020" },
  {
    name: "Worker Occupational Health and Safety Awareness Training",
    issuer: "George Brown Polytechnic",
    date: "Nov 2019",
  },
  {
    name: "General Accessibility Requirements Module",
    issuer: "George Brown Polytechnic",
    date: "Nov 2019",
  },
  {
    name: "Accessible Information and Communication Standards",
    issuer: "George Brown Polytechnic",
    date: "Nov 2019",
  },
  {
    name: "Working Together: The Code and the AODA",
    issuer: "George Brown Polytechnic",
    date: "Oct 2019",
  },
  {
    name: "Accessible Customer Service Standards",
    issuer: "George Brown Polytechnic",
    date: "Oct 2019",
  },
];

const coreSkills = [
  "Operations Management",
  "Client Services",
  "Conflict Resolution",
  "Team Leadership",
  "Root Cause Analysis",
  "Security Program Development",
  "Incident Investigation",
  "Compliance & Auditing",
  "Mental Health First Aid",
  "Business Development",
  "Training & Development",
  "Crisis Response",
];

function SectionHeading({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm text-accent">
        {icon}
        <span className="text-[11px] uppercase tracking-[0.18em] text-white/80 font-medium">
          {label}
        </span>
      </div>
      <div className="flex-1 h-px bg-gradient-to-r from-white/15 to-transparent" />
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="relative min-h-screen w-full bg-ink overflow-hidden">
      <Navbar />

      <div className="fixed inset-0 z-0">
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={70}
          particleColor="#ffffff"
          speed={1}
          className="w-full h-full"
        />
      </div>

      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full bg-accent/[0.06] blur-[140px]" />
        <div className="absolute bottom-1/4 -right-40 w-[600px] h-[600px] rounded-full bg-accent/[0.04] blur-[160px]" />
      </div>

      <div className="relative z-10 px-6 md:px-12 pt-32 pb-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm">
            <Shield className="w-3 h-3 text-accent" />
            <span className="text-[11px] uppercase tracking-[0.18em] text-white/70 font-medium">
              About Me
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-semibold tracking-tight text-gradient leading-[1]">
            Building operations
            <br />
            that don't break.
          </h1>
          <p className="mt-8 max-w-2xl mx-auto text-white/60 text-lg leading-relaxed">
            From mobile patrol officer to operations manager — a deliberate
            path through every layer of security operations across Ontario and
            Nova Scotia. I lead with the experience of having done the work.
          </p>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-24"
        >
          <SectionHeading icon={<Shield className="w-4 h-4" />} label="Core Strengths" />
          <div className="mt-8 flex flex-wrap gap-3">
            {coreSkills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.4 }}
                className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-sm text-white/80 hover:border-accent/40 hover:bg-accent/[0.05] hover:text-white transition-all backdrop-blur-sm"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-24"
        >
          <SectionHeading
            icon={<Briefcase className="w-4 h-4" />}
            label="Professional Journey"
          />

          <div className="mt-12 relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent md:-translate-x-1/2" />

            <div className="space-y-12">
              {experiences.map((exp, i) => (
                <motion.div
                  key={`${exp.company}-${exp.period}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-6 ${
                    i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                  }`}
                >
                  <div className="absolute left-4 md:left-1/2 top-6 w-3 h-3 rounded-full bg-accent shadow-[0_0_20px_rgba(225,29,42,0.6)] md:-translate-x-1/2 z-10" />

                  <div
                    className={`pl-12 md:pl-0 ${
                      i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                    }`}
                  >
                    <GlowCard
                      customSize
                      glowColor={i === 0 ? "red" : "blue"}
                      className="!aspect-auto !p-0 hover:scale-[1.01] transition-transform duration-500"
                    >
                      <div className="p-6 md:p-7">
                        <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-accent font-mono mb-3">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </div>
                        <h3 className="font-display text-xl md:text-2xl font-semibold text-white leading-tight">
                          {exp.role}
                        </h3>
                        <div className="mt-1 text-white/70 text-sm font-medium">
                          {exp.company}
                        </div>
                        <div className="mt-1 flex items-center gap-1.5 text-xs text-white/40">
                          <MapPin className="w-3 h-3" />
                          {exp.location} · {exp.type}
                        </div>
                        <ul
                          className={`mt-4 space-y-2 ${
                            i % 2 === 0 ? "md:text-left" : ""
                          }`}
                        >
                          {exp.highlights.map((h, j) => (
                            <li
                              key={j}
                              className="text-sm text-white/65 leading-relaxed flex gap-2"
                            >
                              <span className="text-accent mt-1.5 shrink-0">
                                <span className="block w-1 h-1 rounded-full bg-accent" />
                              </span>
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </GlowCard>
                  </div>
                  <div className="hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <SectionHeading
            icon={<Award className="w-4 h-4" />}
            label="Licenses & Certifications"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
              >
                <GlowCard
                  customSize
                  glowColor={cert.featured ? "red" : "blue"}
                  className="!aspect-auto !p-0 h-full hover:scale-[1.02] transition-transform duration-500"
                >
                  <div className="p-5 h-full flex flex-col">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                          cert.featured
                            ? "bg-accent/15 text-accent"
                            : "bg-white/5 text-white/70"
                        }`}
                      >
                        {cert.featured ? (
                          <Award className="w-4 h-4" />
                        ) : (
                          <GraduationCap className="w-4 h-4" />
                        )}
                      </div>
                      {cert.featured && (
                        <span className="text-[9px] uppercase tracking-[0.15em] text-accent font-mono px-2 py-1 rounded-full border border-accent/30 bg-accent/5">
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="font-display text-base font-semibold text-white leading-snug mb-2 flex-1">
                      {cert.name}
                    </h3>
                    <div className="mt-auto pt-3 border-t border-white/5">
                      <div className="text-xs text-white/60">{cert.issuer}</div>
                      <div className="mt-1 flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-white/40 font-mono">
                        <Calendar className="w-2.5 h-2.5" />
                        Issued {cert.date}
                      </div>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
}
