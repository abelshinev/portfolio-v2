"use client"
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { LucideRocket } from "lucide-react";
import FlipWordsDemo from "../flip-words-demo";
import { glow, glowTransition, trans } from '@/lib/transitons'


export default function HomePage() {

  return (

    <motion.main 
      id=""
      className="relative min-h-screen overflow-hidden text-white flex flex-row items-between justify-center p-8 "
    >
      <motion.div
        className="absolute inset-0 bg-black bg-cover bg-center z-0"
      />
      

      {/* The rising object */}
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 10, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut",  type: "spring",
          stiffness: 60,
          damping: 14,
          delay: 0.4
        }}
        className="absolute top-16 text-[16vw] text-center font-semibold transform -translate-x-1/2 w-full h-[30vh] bg-black z-10"
      ><h1>ABEL SHINE</h1></motion.div>                {/* Splash Name */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }} 
        transition={{
          duration: 0.6, 
          ease: "easeOut" 
        }}
        className="absolute h-[3px] z-30 bg-white w-[70vw] top-1/2"
      />                                        {/* Seperator Line above */}
      <motion.div                                 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 1, type: "spring",  damping: 20, stiffness: 80}}
        className="text-left space-y-0  z-20 absolute bottom-[16vh] left-[15vw] w-[70vw] h-[30vh]"
      >                                           {/** Container */}
        <FlipWordsDemo />                         {/* Flip Words */}
        <p className="text-2xl text-zinc-400 ">
          This is my portfolio <br/>
          Showcasing my projects, skills, and passion.
        </p>
        <motion.div   
            whileHover={{y: -10}} className="w-8"
        >                                         {/* For the Projects hotkey */}
            <Button className="mt-4 hover:bg-zinc-900 transition-colors">
              <LucideRocket className="mr-2 h-5 w-5" /><a href="#projects"> View Projects </a>
             
            </Button>
        </motion.div>
        <div className=" w-1/3 h-10 right-3 bottom-5 absolute"
        >                                     {/* For the links */}
          <ul className="flex flex-row gap-10 justify-end mr-5">
            <motion.li className="h-10 w-10 bg-white rounded-md cursor-pointer" whileHover={glow}
            transition={glowTransition}></motion.li>
            <motion.li className="h-10 w-10 bg-white rounded-md cursor-pointer" whileHover={glow}
            transition={glowTransition}></motion.li>
            <motion.li className="h-10 w-10 bg-white rounded-md cursor-pointer" whileHover={glow}
            transition={glowTransition}></motion.li>
            <motion.li className="h-10 w-10 bg-white rounded-md cursor-pointer" whileHover={glow}
            transition={glowTransition}></motion.li>
          </ul>
        </div>
      </motion.div>

      <motion.div className="absolute bottom-16 w-full flex justify-center text-gray-100 text-[1vw]"
        initial={{opacity: 0}}
        animate={{opacity: 0.5}}
        transition={{delay:0.7}}>
        <h1>Scroll below to About</h1>
      </motion.div>
    </motion.main>
  );
}
