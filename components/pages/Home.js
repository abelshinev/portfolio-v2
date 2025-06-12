"use client"
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { LucideRocket } from "lucide-react";
import FlipWordsDemo from "../flip-words-demo";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-herobg bg-fixed bg-cover text-white flex flex-row items-center justify-center p-8 ">
      <div className="absolute inset-0 backdrop-blur-sm bg-black/30 z-1"></div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-left space-y-4 w-[50vw] z-10"
      >
        <h1 className="text-8xl font-bold"> Hi. I&apos;m Abel</h1>
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
      <div className="z-10">
        <div className="w-[360px] h-[60vh] bg-white border border-red-900 m-3 " />
      </div>
    </main>
  );
}
