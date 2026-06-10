'use client';

import { motion } from "framer-motion";

const stackItems = [
  "React",
  "Next.js",
  "FastAPI",
  "PostgreSQL",
  "PyTorch",
  "YOLOv8",
  "TypeScript",
  "Framer Motion",
];

export default function HeroB() {
  const handleWorkScroll = () => {
    const target = document.getElementById("work");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="min-h-screen flex items-center">
      <div className="mx-auto max-w-5xl px-6 pt-32 pb-20 text-left">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-sm uppercase tracking-[0.35em] text-white/50"
        >
          AVAILABLE FOR PROJECTS
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="mt-6 max-w-3xl text-4xl font-bold leading-tight text-white md:text-7xl"
        >
          Building Fullstack
          <br />
          Applications,
          <span className="underline decoration-white/20 decoration-2 underline-offset-4 text-white/90">
            AI Systems,
          </span>
          <br />
          and Digital Products.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
          className="mt-6 max-w-xl text-lg text-slate-300 md:text-xl"
        >
          From frontend experiences to backend infrastructure, I help turn ideas into production-ready software.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          className="mt-8 flex w-full flex-col gap-4 sm:flex-row sm:items-center"
        >
          <button
            type="button"
            onClick={handleWorkScroll}
            className="w-full rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90 sm:w-auto"
          >
            View My Work
          </button>

          <a
            href="mailto:abelshinevarghese@gmail.com"
            className="w-full rounded-full border border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black sm:w-auto"
          >
            Book a Call
          </a>

          <a
            href="/abel_fl_resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="w-full rounded-full px-6 py-3 text-sm font-semibold text-slate-300 transition hover:underline sm:w-auto"
          >
            Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.65 }}
          className="mt-12 flex flex-wrap gap-2"
        >
          {stackItems.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium text-white/60"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
