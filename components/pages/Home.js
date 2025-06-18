"use client"
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { LucideRocket } from "lucide-react";
import FlipWordsDemo from "../flip-words-demo";
import { useRef } from "react";
import { useEffect } from "react";


export default function HomePage() {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]); // slower scroll = parallax

  useEffect(() => {
    scrollYProgress.on("change", (v) => console.log("Scroll:", v));
  }, [scrollYProgress]);

  return (
    <motion.main 
      ref={ref}
      className="relative min-h-screen bg-herobg overflow-hidden text-white flex flex-row items-center justify-center p-8 "
    >
      <motion.div
        style={{y}}
        className="absolute inset-0 bg-herobg bg-cover bg-center z-0"
      />
      <div className="absolute inset-0 backdrop-blur-sm bg-black/30 z-10"/> {/* Blur div */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-left space-y-4  z-20"
      >
        <h1 className="text-[8vw] font-bold border-2"> HI. I AM ABEL</h1>
        <FlipWordsDemo />
        <p className="text-lg text-zinc-400">
          Showcasing my projects, skills, and passion.
        </p>
        <motion.div 
            whileHover={{y: -10}}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <Button className="mt-4 hover:bg-zinc-900 transition-colors">
            <LucideRocket className="mr-2 h-5 w-5" /> View Projects
            </Button>
        </motion.div>
      </motion.div>

    </motion.main>
  );
}
