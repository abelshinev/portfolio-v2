'use client';

import Image from "next/image";
import { motion } from "framer-motion";

const iconMap = {
  "Next.js": "/tech/icons/nextjs.png",
  TypeScript: "/tech/icons/typescript.png",
  TailwindCSS: "/tech/icons/tailwind.png",
  FastAPI: "/tech/icons/fastapi.png",
  "Express.js": "/tech/icons/expressjs.png",
  PostgreSQL: "/tech/icons/postgresql.png",
  PyTorch: "/tech/icons/pytorch.png",
  TensorFlow: "/tech/icons/tensorflow.png",
  YOLOv8: "/tech/icons/yolo.png",
  "Three.js": "/tech/icons/threejs.png",
  Git: "/tech/icons/git.png",
};

const categories = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion", "Three.js"],
  },
  {
    label: "Backend",
    items: ["Node.js", "FastAPI", "Express.js", "PostgreSQL", "MongoDB", "REST APIs"],
  },
  {
    label: "AI & Machine Learning",
    items: ["PyTorch", "TensorFlow", "Scikit-Learn", "XGBoost", "YOLOv8", "Grad-CAM"],
  },
  {
    label: "DevOps & Tools",
    items: ["Git", "GitHub Actions", "OCI", "Vercel", "CI/CD", "Linux"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const blockVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Expertise() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className="text-sm uppercase tracking-[0.3em] text-white/50">EXPERTISE</p>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Technical Stack</h2>
        <p className="mt-4 max-w-2xl text-base text-white/50">
          Technologies I&apos;ve used in production.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-16 grid gap-6 sm:grid-cols-2"
      >
        {categories.map((category) => (
          <motion.div
            key={category.label}
            variants={blockVariants}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-white/40 mb-4">
              {category.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {category.items.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/60"
                >
                  {iconMap[item] ? (
                    <Image
                      src={iconMap[item]}
                      alt={item}
                      width={14}
                      height={14}
                      className="inline-block"
                    />
                  ) : null}
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
