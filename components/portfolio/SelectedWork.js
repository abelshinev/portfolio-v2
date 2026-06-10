'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function SelectedWork() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className="text-sm uppercase tracking-[0.3em] text-white/50">SELECTED WORK</p>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
          Built. Shipped. Delivered.
        </h2>
        <p className="mt-4 max-w-2xl text-base text-white/50">
          A few things I&apos;ve built that are worth looking at.
        </p>
      </motion.div>

      <div className="mt-12 space-y-6">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={cardVariants}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
            className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-all duration-300 hover:border-white/20"
          >
            <div
              className={`flex flex-col lg:flex-row ${project.swap ? "lg:flex-row-reverse" : ""}`}
            >
              <div className="relative aspect-[4/3] w-full lg:w-[45%] lg:rounded-l-2xl lg:rounded-r-none rounded-t-2xl overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>

              <div className="flex w-full flex-col justify-between p-8 lg:w-[55%]">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-white/40">
                    {project.type}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-white md:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/60">
                    {project.pitch}
                  </p>
                </div>

                <div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-block text-sm text-white/50 transition-colors hover:text-white"
                  >
                    View on GitHub →
                  </a>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
