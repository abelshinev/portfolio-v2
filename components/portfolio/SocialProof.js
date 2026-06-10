'use client';

import { motion } from "framer-motion";

export default function SocialProof() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className="text-sm uppercase tracking-[0.3em] text-white/50">TRUSTED BY</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold text-white sm:text-4xl">
          Clients and organizations I&apos;ve delivered real work for.
        </h2>
      </motion.div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {clients.map((client, index) => (
          <motion.article
            key={client.name}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/8"
          >
            <div className="flex items-start gap-4">
              <h3 className="text-base font-semibold text-white">{client.name}</h3>
              <span className="ml-auto text-xs text-white/50">{client.tag}</span>
            </div>
            <p className="mt-3 text-sm text-white/50">{client.role}</p>
            <p className="mt-4 text-sm leading-relaxed text-white/70">{client.description}</p>
          </motion.article>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true, amount: 0.25 }}
        className="mt-12 border-t border-white/10 pt-10"
      >
        <div className="flex flex-col items-stretch justify-between gap-6 text-center text-white/80 sm:flex-row">
          <div className="flex-1">
            <p className="text-4xl font-bold text-white">4+</p>
            <p className="mt-2 text-sm text-white/50">Client Deployments</p>
          </div>
          <div className="mx-auto hidden h-10 w-px bg-white/10 sm:block" />
          <div className="flex-1">
            <p className="text-4xl font-bold text-white">20+</p>
            <p className="mt-2 text-sm text-white/50">Projects Shipped</p>
          </div>
          <div className="mx-auto hidden h-10 w-px bg-white/10 sm:block" />
          <div className="flex-1">
            <p className="text-4xl font-bold text-white">2</p>
            <p className="mt-2 text-sm text-white/50">Professional Engagements</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
