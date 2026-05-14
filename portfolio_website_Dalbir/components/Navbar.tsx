"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 backdrop-blur-md bg-black/20 border-b border-white/5">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-3 text-white">
          <div className="relative">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent to-accent-dim flex items-center justify-center font-display font-bold text-white text-lg shadow-lg shadow-accent/20">
              D
            </div>
            <div className="absolute inset-0 rounded-lg bg-accent/40 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          </div>
          <div className="hidden sm:block">
            <div className="font-display text-sm font-semibold tracking-tight">
              Dalbir Singh Badwal
            </div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-white/40">
              Operations Manager
            </div>
          </div>
        </Link>

        <ul className="flex items-center gap-1 md:gap-2 p-1 rounded-full border border-white/10 bg-white/[0.02]">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative px-4 md:px-5 py-2 text-xs md:text-sm font-medium tracking-wide transition-colors rounded-full",
                    active ? "text-white" : "text-white/50 hover:text-white/90"
                  )}
                >
                  {active && (
                    <span className="absolute inset-0 rounded-full bg-white/10 border border-white/10" />
                  )}
                  <span className="relative">{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
