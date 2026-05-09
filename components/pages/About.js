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
          <div className='relative space-y-4 text-lg md:text-xl lg:text-2xl py-2 md:py-5 z-10 text-center md:text-left'>
            <p>
              I&apos;m a <b>Fullstack Developer and Systems Builder</b> currently pursuing Computer Science at IIITDM Jabalpur. Over the past few years, I&apos;ve worked across modern web development, backend architecture, machine learning, and real-time systems.
            </p>
            <p>
              I enjoy building products end-to-end. From designing frontend experiences and scalable APIs to developing intelligent systems powered by computer vision, behavioral analytics, and forecasting models.
            </p>
            <p>
              Recently, I&apos;ve been focused on AI-integrated applications, browser instrumentation systems, explainable computer vision, and production-ready web platforms.
            </p>
          </div>
          
          {/* Stats Strip */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className='flex flex-wrap gap-4 mt-8 md:ml-5 z-10 justify-center md:justify-start'
          >
            {["Fullstack Developer", "ML + Systems Engineering", "20+ Production Projects", "React / Next.js / FastAPI", "Computer Vision & Forecasting"].map((stat, i) => (
              <span key={i} className='px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs md:text-sm font-medium backdrop-blur-sm'>
                • {stat}
              </span>
            ))}
          </motion.div>
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
          <h1 className='flex justify-center md:justify-start'>Technologies, systems, and tools I work with ↓ </h1>
        </motion.div>
      </div>
  )
}
