'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutB() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <div className="grid gap-12 lg:grid-cols-[60%_40%] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">ABOUT</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            The Person Behind the Work
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/60">
            I&apos;m Abel Shine, a Computer Science student and systems-focused developer who enjoys building products at the intersection of software engineering and intelligent systems. My experience spans frontend development, backend architecture, machine learning, and end-to-end product delivery.
          </p>
          <p className="mt-4 max-w-md text-base leading-relaxed text-white/60">
            I work best on problems that require both technical depth and product thinking — where the output isn&apos;t just code, but something that actually runs, scales, and gets used.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center"
        >
          <div className="max-w-xs overflow-hidden rounded-2xl border border-white/10 grayscale">
            <Image
              src="/about/me.png"
              alt="Abel Shine"
              width={560}
              height={700}
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
