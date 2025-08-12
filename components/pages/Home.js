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
        <h1>ABEL SHINE</h1>
      </motion.div>                {/* Splash Name */}
      
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }} 
        transition={{
          duration: 0.6, 
          ease: "easeOut" 
        }}
        className="absolute h-[3px] z-30 bg-white w-[90vw] md:w-[70vw] top-1/2"
      />                                        {/* Seperator Line above */}
      
      <motion.div                                 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 1, type: "spring",  damping: 20, stiffness: 80}}
        className="text-center md:text-left space-y-4 z-20 absolute bottom-[16vh] left-4 md:left-[15vw] w-[calc(100vw-2rem)] md:w-[70vw] h-[30vh]"
      >                                           {/** Container */}
        <FlipWordsDemo />                         {/* Flip Words */}
        <p className="text-lg md:text-2xl text-zinc-400 px-4 md:px-0">
          This is my portfolio <br className="hidden md:block"/>
          Showcasing my projects, skills, and passion.
        </p>
        <motion.div   
            whileHover={{y: -10}} className="w-8"
        >                                         {/* For the Projects hotkey */}
            <Button className="mt-4 hover:bg-zinc-900 transition-colors">
              <LucideRocket className="mr-2 h-5 w-5" /><a href="#projects"> View Projects </a>
             
            </Button>
        </motion.div>
        
        {/* Social Links - Mobile */}
        <div className="md:hidden flex justify-center mt-8">
          <ul className="flex flex-row gap-6">
            <li className="h-12 w-12 bg-white rounded-md flex items-center justify-center cursor-pointer" >
              <motion.div whileHover={glow} transition={glowTransition}>
                <a href="https://www.linkedin.com/in/abel-shine-varghese-354492300/" target='_blank'><FaLinkedinIn className="text-grey-200 bg-white text-black h-10 w-10 rounded" /></a>
              </motion.div>
            </li>
            <li className="h-12 w-12 bg-white rounded-md flex items-center justify-center cursor-pointer" >
              <motion.div whileHover={glow} transition={glowTransition}>
                <a href="https://github.com/abelshinev/" target='_blank'><FaGithub className="text-grey-200 bg-white text-black h-10 w-10 rounded" /></a>
              </motion.div>
            </li>
            <li className="h-12 w-12 bg-white rounded-md flex items-center justify-center cursor-pointer" >
              <motion.div whileHover={glow} transition={glowTransition}>
                <a href="mailto:abelshinevarghese@gmail.com" target="_blank"><SiGmail className="text-grey-200 bg-white text-black h-10 w-10 rounded" /></a>
              </motion.div>
            </li>
          </ul>
        </div>
        
        {/* Social Links - Desktop */}
        <div className="hidden md:block w-1/3 h-10 right-3 bottom-5 absolute">
          <ul className="flex flex-row gap-10 justify-end mr-5 relative">
            <li className="h-12 w-12 bg-white rounded-md flex items-center justify-center cursor-pointer" >
              <motion.div whileHover={glow} transition={glowTransition}>
                <a href="https://www.linkedin.com/in/abel-shine-varghese-354492300/" target='_blank'><FaLinkedinIn className="text-grey-200 bg-white text-black  h-10 w-10 rounded" /></a>
              </motion.div>
            </li>
            <li className="h-12 w-12 bg-white rounded-md flex items-center justify-center cursor-pointer" >
              <motion.div whileHover={glow} transition={glowTransition}>
                <a href="https://github.com/abelshinev/" target='_blank'><FaGithub className="text-grey-200 bg-white text-black  h-10 w-10 rounded" /></a>
              </motion.div>
            </li>
            <li className="h-12 w-12 bg-white rounded-md flex items-center justify-center cursor-pointer" >
              <motion.div whileHover={glow} transition={glowTransition}>
                <a href="mailto:abelshinevarghese@gmail.com" target="_blank"><SiGmail className="text-grey-200 bg-white text-black  h-10 w-10 rounded" /></a>
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
          <h1>Scroll below to About</h1>
        </a>
          <IoIosArrowDown />
      </motion.div>
    </motion.main>
  );
}
