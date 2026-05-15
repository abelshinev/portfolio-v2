"use client"
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { LucideRocket } from "lucide-react";
import FlipWordsDemo from "../flip-words-demo";
import { glow, glowTransition, trans } from '@/lib/transitons'
import { Archivo, Red_Hat_Display } from "next/font/google";
import { IoIosArrowDown } from "react-icons/io";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], // Adjust as needed
});

export default function HomePage() {

  return (

    <motion.main 
      id=""
      className="relative min-h-screen overflow-hidden text-white flex flex-col md:flex-row items-center justify-center p-4 md:p-8"
    >
      <motion.div         
        className="absolute inset-0 bg-black bg-cover bg-center z-0"
      />{/* Black BG */}
      
      <div 
        className="absolute top-[48vh] w-full h-full bg-black z-20"
      />  {/* Blockade */}
      
      {/* The rising object */}
      <motion.div
        initial={{ y: 1000, opacity: 0 }}
        animate={{ y: 10, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut",  type: "spring",
          stiffness: 60,
          damping: 14,
          delay: 0.4
        }}
        className={`absolute top-16 text-[16vw] text-center ${archivo.className} tracking-tight font-medium z-10 w-full h-[30vh]`}
      >
        <h1 className="text-[14vw] md:text-[16vw]">ABEL SHINE</h1>
      </motion.div>                {/* Splash Name */}
      
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }} 
        transition={{
          duration: 0.6, 
          ease: "easeOut" 
        }}
        className="absolute h-[3px] z-30 bg-white w-[90vw] md:w-[80vw] top-1/2"
      />                                        {/* Seperator Line above */}
      
      <motion.div                                 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 1, type: "spring",  damping: 20, stiffness: 80}}
        className="z-30 absolute bottom-[6vh] md:bottom-[6vh] left-4 md:left-[15vw] w-[calc(100vw-2rem)] md:w-[70vw] flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-8"
      >                                           {/** Container */}
        <div className="space-y-4 text-center md:text-left">
          <FlipWordsDemo />                         {/* Flip Words */}
          <p className="text-lg md:text-2xl text-zinc-400 max-w-2xl leading-relaxed">
            Fullstack developer and systems builder focused on scalable web platforms, <br className="hidden md:block"/>
            intelligent applications, and real-time user experiences.
          </p>
          <motion.div   
              whileHover={{y: -5}} className="w-fit mx-auto md:mx-0"
          >                                         {/* For the Projects hotkey */}
              <Button className="mt-4 hover:bg-zinc-900 transition-all px-8 py-6 text-lg">
                <LucideRocket className="mr-2 h-6 w-6" /><a href="#projects"> See What I&apos;ve Built </a>
              </Button>
          </motion.div>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center md:justify-end pb-4">
          <ul className="flex flex-row gap-6">
            <li className="h-14 w-14 bg-white/10 hover:bg-white transition-colors rounded-xl flex items-center justify-center cursor-pointer group" >
              <motion.div whileHover={glow} transition={glowTransition}>
                <a href="https://www.linkedin.com/in/abel-shine-varghese-354492300/" target='_blank'>
                  <FaLinkedinIn className="text-white group-hover:text-black h-8 w-8 transition-colors" />
                </a>
              </motion.div>
            </li>
            <li className="h-14 w-14 bg-white/10 hover:bg-white transition-colors rounded-xl flex items-center justify-center cursor-pointer group" >
              <motion.div whileHover={glow} transition={glowTransition}>
                <a href="https://github.com/abelshinev/" target='_blank'>
                  <FaGithub className="text-white group-hover:text-black h-8 w-8 transition-colors" />
                </a>
              </motion.div>
            </li>
            <li className="h-14 w-14 bg-white/10 hover:bg-white transition-colors rounded-xl flex items-center justify-center cursor-pointer group" >
              <motion.div whileHover={glow} transition={glowTransition}>
                <a href="mailto:abelshinevarghese@gmail.com" target="_blank">
                  <SiGmail className="text-white group-hover:text-black h-8 w-8 transition-colors" />
                </a>
              </motion.div>
            </li>
          </ul>
        </div>
      </motion.div>

      <motion.div className="absolute z-30 bottom-16 w-full flex flex-col items-center justify-center text-gray-100 text-sm md:text-base lg:text-lg"
        initial={{opacity: 0}}
        animate={{opacity: 0.5}}
        transition={{delay:1.7}}>
        <a href="#about">
          <h1>Explore my journey ↓</h1>
        </a>
          <IoIosArrowDown />
      </motion.div>
    </motion.main>
  );
}
