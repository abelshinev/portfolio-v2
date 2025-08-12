'use client'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

export default function About({ id }) {

  const ref = useRef(null)
  const inView = useInView(ref, { once: true }) // you can tweak margin for early/late trigger


  return (

      <div id="about" className='relative min-h-screen flex flex-col md:flex-row font-inter justify-center items-center bg-speckles bg-cover text-white gap-8 md:gap-20 z-1 px-4 md:px-0' >
        <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, type: "spring", damping: 14, stiffness: 80, ease: "easeOut" }}
        
        className='relative flex flex-col p-6 md:p-10 h-auto md:h-[60vh] w-full md:w-[40vw] z-10 order-2 md:order-1'>
          <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-0 md:h-[9vh] relative md:ml-5 md:mt-10 font-inter z-10 text-center md:text-left'>About Me</h1>
          <p className='relative text-lg md:text-xl lg:text-2xl py-2 md:py-5 z-10 text-center md:text-left'>I&apos;m a self-taught <b>Full-stack Developer</b> and a Junior-year Computer Science student at IIITDM Jabalpur. I have over a year of experience in UI/UX and Web Dev and currently diving into the field of AI/ML.</p>
        </motion.div>         
        
        {/* Image DIV */}
        <div className='border-3 border-blue-600 bg-me bg-cover w-full md:w-[24vw] h-[40vh] md:h-[70vh] order-1 md:order-2' style={{ boxShadow: `0 5px 15px 1px rgba(0, 0, 0, 0.5)`}}/>

        <motion.div className="absolute bottom-8 md:bottom-[36vh] left-4 md:left-[20vw] w-full text-gray-300 text-sm md:text-base lg:text-lg"
          ref={ref}
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.4, type: "spring", damping: 14, stiffness: 80, ease: "easeOut" }}
        >
          <h1 className='flex justify-center md:justify-start'>Scroll below to see my work and skills. </h1>
        </motion.div>
      </div>
  )
}
