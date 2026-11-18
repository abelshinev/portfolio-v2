'use client';

import { motion } from "framer-motion";

const links = [
  {
    label: "Email Me",
    href: "mailto:abelshinevarghese@gmail.com",
    variant: "solid",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abel-shine-varghese-354492300/",
    variant: "outline",
  },
  {
    label: "GitHub",
    href: "https://github.com/abelshinev/",
    variant: "outline",
  },
  {
    label: "Resume",
    href: "/abel_fl_resume.pdf",
    target: "_blank",
    variant: "outline",
  },
];

export default function ContactB() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-32 text-center border-t border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="text-sm uppercase tracking-[0.3em] text-white/50">CONTACT</p>
        <h2 className="mt-6 text-4xl font-bold text-white md:text-6xl">
          Let&apos;s Build
          <br />
          Something Useful.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-white/50">
          Whether you&apos;re launching a startup, improving an existing product, or exploring an AI-powered idea — I&apos;d be happy to discuss it.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        viewport={{ once: true, amount: 0.3 }}
        className="mt-10 flex flex-wrap justify-center gap-4"
      >
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.target || "_self"}
            rel={link.target === "_blank" ? "noreferrer" : undefined}
            className={`rounded-full px-6 py-3 text-sm font-medium transition ${
              link.variant === "solid"
                ? "bg-white text-black"
                : "border border-white/30 text-white hover:border-white"
            }`}
          >
            {link.label}
          </a>
        ))}
      </motion.div>

      <p className="mt-16 text-xs text-white/20">© Abel Shine Varghese · 2026</p>
    </section>
  );
}
