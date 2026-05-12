"use client"
import { motion } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/lib/projects"
import Image from "next/image";

export default function Projects() {

  const ref = useRef(null);

  return (
    <section id="projects" className="min-h-screen bg-zinc-950 text-white pt-32 pb-20 px-4 md:px-10">
      <motion.div
        ref={ref}
        initial={{ y: 300, opacity: 0 }} // ~text-4xl
        whileInView={{ y: 0, opacity: 1 } }
        viewport={{ once: true }} 
        transition={{ type: "spring", damping: 12, stiffness: 50, duration: 0.5, ease: "easeOut", delay: 0.2 }}
        className="font-semibold font-geist text-center"
      >
        <motion.h1
          initial={{ fontSize: "2rem" }}
          animate={{fontSize: "clamp(2rem, 8vw, 6rem)"}}
          transition={{ delay: 0.1, duration: 0.3, ease: "easeOut", type: "spring", stiffness: 50, damping: 12}}
        >
          Featured Work
        </motion.h1>
      </motion.div>

      {/* Project Cards */}
      <ul className="mt-12 md:mt-24 space-y-8 pb-32 md:pb-64">
        {projects.map((project, i) => (
          <motion.li
            ref={ref}
            key={i}
            initial={{ opacity: 0.1, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 * i }}
            className="w-full md:w-[80vw] h-auto md:h-auto mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-12 p-4 relative border-b border-white/5 pb-16 md:pb-12"
          >
            <div className="w-full md:w-[30vw] h-[30vh] md:h-[35vh] bg-zinc-900 rounded-md overflow-hidden relative border border-white/10 group">
              <Image  
                src={project.imgLink} 
                alt={project.name} 
                className="object-cover bg-zinc-950 p-2 grayscale group-hover:grayscale-0 transition-all duration-500" 
                fill
              />
            </div>
            <div className="space-y-4 w-full md:w-[45vw] text-center md:text-left">
              <h2 className="text-2xl md:text-5xl font-bold tracking-tight">{project.name}</h2>
              <p className="text-base md:text-lg text-zinc-400 leading-relaxed">{project.desc}</p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2 justify-center md:justify-start">
                {project.tags && project.tags.map((tag, j) => (
                  <span key={j} className="text-[10px] md:text-xs uppercase tracking-widest px-2 py-1 bg-zinc-900 border border-white/10 text-zinc-300">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col md:flex-row items-center gap-4 pt-4">
                <p className="text-sm text-zinc-500">Duration: {project.time}</p>
                <a href={project.repo} className="text-white hover:text-blue-400 underline underline-offset-4 text-sm md:text-base font-medium transition-colors">View on GitHub</a>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
