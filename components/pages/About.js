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
        
        className='relative flex flex-col p-6 md:p-10 min-h-[70vh] w-full md:w-[50vw] z-10 order-2 md:order-1 justify-center'>
          <h1 className='text-4xl md:text-7xl font-bold mb-8 font-inter z-10 text-center md:text-left'>About Me</h1>
          <div className='relative space-y-6 text-lg md:text-xl lg:text-2xl py-2 z-10 text-center md:text-left leading-relaxed text-zinc-300'>
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
            className='flex flex-wrap gap-3 mt-10 z-10 justify-center md:justify-start'
          >
            {["Fullstack Developer", "ML + Systems Engineering", "20+ Production Projects", "React / Next.js / FastAPI", "Computer Vision & Forecasting"].map((stat, i) => (
              <span key={i} className='px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs md:text-sm font-medium backdrop-blur-md text-zinc-400'>
                • {stat}
              </span>
            ))}
          </motion.div>

          <motion.div className="mt-12 text-gray-400 text-sm md:text-base lg:text-lg italic"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <h1 className='flex justify-center md:justify-start'>Technologies, systems, and tools I work with ↓ </h1>
          </motion.div>
        </motion.div>         
        
        {/* Image DIV */}
        <div className='border-2 border-white/10 bg-me bg-cover w-full md:w-[30vw] h-[50vh] md:h-[75vh] order-1 md:order-2 rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl shadow-blue-900/20'/>
      </div>
      </div>
  )
}
