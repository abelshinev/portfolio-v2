'use client';

import { motion } from "framer-motion";


export default function Services() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className="text-sm uppercase tracking-[0.3em] text-white/50">SERVICES</p>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
          What I Build For You
        </h2>
        <p className="mt-4 max-w-2xl text-base text-white/50">
          Not a list of technologies. A list of outcomes.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-12 space-y-4"
      >
        {services.map((service) => (
          <motion.article
            key={service.number}
            variants={cardVariants}
            className="flex flex-col gap-8 rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] lg:flex-row"
          >
            <div className="lg:w-[40%]">
              <p className="text-5xl font-bold text-white/10">{service.number}</p>
              <h3 className="mt-2 text-xl font-semibold text-white">{service.name}</h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/60">
                {service.description}
              </p>
            </div>

            <div className="flex w-full flex-wrap gap-2 lg:w-[60%]">
              {service.examples.map((example) => (
                <span
                  key={example}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/50"
                >
                  {example}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
