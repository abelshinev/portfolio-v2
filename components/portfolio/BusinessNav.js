'use client';

import { motion } from "framer-motion";

const links = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function BusinessNav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/90 backdrop-blur-md"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-2 text-sm text-white">
          <span className="font-semibold">Abel Shine</span>
          <span className="text-white/40">/</span>
          <span className="text-slate-400">For Business</span>
        </div>

        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="mailto:abelshinevarghese@gmail.com"
            className="rounded-full border border-white px-4 py-2 text-sm text-white transition hover:bg-white hover:text-black"
          >
            Book a Call
          </a>
        </div>
      </div>
    </motion.header>
  );
}
