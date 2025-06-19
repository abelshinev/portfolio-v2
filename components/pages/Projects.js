"use client"
import { motion } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/lib/projects"
import Image from "next/image";

export default function Projects() {

  const ref = useRef(null);

  return (
    <section id="projects" className="min-h-screen bg-zinc-950 text-white pt-20 px-10">
      <motion.div
        ref={ref}
        initial={{ y: 300, opacity: 0 }} // ~text-4xl
        whileInView={{ y: 0, opacity: 1 } }
        viewport={{ once: true }} 
        transition={{ type: "spring", damping: 12, stiffness: 50, duration: 0.5, ease: "easeOut", delay: 0.2 }}
        className="font-semibold text-center"
      >
        <motion.h1
          initial={{ fontSize: "2rem" }}
          animate={{fontSize: "6rem"}}
          transition={{ delay: 0.45, duration: 0.3, ease: "easeOut", type: "spring", stiffness: 50, damping: 12}}
        >

          My Projects
        </motion.h1>
      </motion.div>

      {/* Project Cards */}
      <ul className="mt-24 space-y-8 pb-20">
        {projects.map((project, i) => (
          <motion.li
            ref={ref}
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 + 0.3 * i }}
            className="w-[80vw] h-[40vh] mx-auto flex items-center gap-6 border p-4 relative"
          >
            <div className="w-[25vw] h-[30vh] bg-zinc-700 rounded-md overflow-hidden relative">
              {/* Replace with Image if needed */}
              <Image  
                src={project.imgLink} 
                alt={`project-${i}`} 
                className="object-cover bg-zinc-800 rounded-lg p-4" 
                fill
              />
            </div>
            <div className="space-y-2 absolute right-12 w-[10vw] border">
              <h2 className="text-2xl font-bold">{project.name}</h2>
              <p className="text-sm text-zinc-400">{project.desc}</p>
              <p className="text-xs text-zinc-500">Created: {project.time}</p>
              <a href={project.repo} className="text-blue-400 underline text-sm">View on GitHub</a>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
