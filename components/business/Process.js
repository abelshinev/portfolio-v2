'use client';

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Understand",
    body: "I start with your goals, not with code. Discovery call, requirement breakdown, scope definition, and timeline estimation.",
  },
  {
    number: "02",
    title: "Architect",
    body: "Design the system before building it. Tech stack selection, component planning, data modeling, and API design.",
  },
  {
    number: "03",
    title: "Build & Iterate",
    body: "Development in focused sprints. Regular check-ins, demos at milestones, and fast iteration based on feedback.",
  },
  {
    number: "04",
    title: "Ship & Support",
    body: "Deployment, documentation, and post-launch support. You get a working product, not just working code.",
  },
];

const stepVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Process() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-white/50">PROCESS</p>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">How I Work</h2>
        <p className="mt-4 max-w-2xl text-base text-white/50">Simple, transparent, and focused on shipping.</p>
      </div>

      <div className="mt-16 flex flex-col gap-8 md:flex-row md:items-start">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={stepVariants}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
            className="relative flex flex-col rounded-2xl bg-white/[0.02] p-6 text-left text-white/80 md:border md:border-white/10 md:p-8 md:shadow-none md:bg-transparent"
          >
            <div className="md:hidden absolute left-0 top-0 h-full w-0.5 bg-white/10" />
            <p className="text-sm font-mono text-white/30 mb-4">{step.number}</p>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
            <p className="max-w-[200px] text-sm leading-relaxed text-white/50">{step.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
