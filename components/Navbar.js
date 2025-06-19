"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { trans } from '@/lib/transitons';

export default function Navbar() {

    const underlineVariants = {
        initial: { width: 0 },
        hover: { width: "100%", transition: { duration: 0.3, ease: "easeOut" } },
    };

  return (
    
    <div className="fixed  w-full h-20 top-0 text-white text-[1.2vw] px-[2vw] flex items-center z-30"> {/* NAVBAR */}
        <h1><a href='#'>Coverslide</a> </h1>
        <ul className="flex flex-row flex-end w-[20vw] absolute right-0 justify-evenly">
          {
            ["About", "Tech", "Projects"].map((text, i) => (
              <motion.li key={i}            
                className="relative cursor-pointer"
                whileHover="hover"
                initial="initial"
                animate="initial"
                transition={trans}
              >
                <a href={`#${text.toLowerCase()}`}>{text}</a>
                <motion.div
                  variants={underlineVariants}
                  className="absolute left-0 -bottom-1 h-[2px] bg-white"
                />
              </motion.li>
            ))
          }
          
        </ul>
      </div>
  )
}