"use client"
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { LucideRocket } from "lucide-react";
import FlipWordsDemo from "../flip-words-demo";
import { useRef } from "react";
import { useEffect } from "react";


export default function HomePage() {

  return (
    <motion.main 
      className="relative min-h-screen overflow-hidden text-white flex flex-row items-between justify-center p-8 "
    >
      <motion.div
        style={{y}}
        className="absolute inset-0 bg-black bg-cover bg-center z-0"
      />
      <div className="absolute inset-0 backdrop-blur-sm bg-black/30 z-10"/> {/* Blur div */}
      {/* The "ground" - sits on top */}
      <div className="absolute bottom-0  bg-black w-full h-[50vh] z-20" />

      {/* The rising object */}
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: -700, opacity: 1 }}
        transition={{ duration: 3}}
        className="absolute bottom-0  text-[15vw] text-center font-semibold transform -translate-x-1/2 w-full h-[30vh] bg-black z-10"
      >ABEL SHINE</motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-left space-y-0  z-20"
      >
        
        <FlipWordsDemo />
        <p className="text-lg text-zinc-400">
          This is my portfolio <br/>
          Showcasing my projects, skills, and passion.
        </p>
        <motion.div 
            whileHover={{y: -10}}
        >
            <Button className="mt-4 hover:bg-zinc-900 transition-colors">
            <LucideRocket className="mr-2 h-5 w-5" /> View Projects
            </Button>
        </motion.div>
      </motion.div>

    </motion.main>
  );
}
