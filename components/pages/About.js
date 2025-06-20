'use client'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

export default function About({ id }) {

  const ref = useRef(null)
  const inView = useInView(ref, { once: true }) // you can tweak margin for early/late trigger


  return (

      <div id="about" className='relative h-[110vh] flex font-inter justify-center items-center bg-speckles bg-cover text-white gap-20 z-1' >
        <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, type: "spring", damping: 14, stiffness: 80, ease: "easeOut" }}
        
        className='relative flex flex-col  p-10 h-[60vh] w-[40vw] z-10'>
          <h1 className='text-7xl font-bold h-[9vh] relative ml-5 mt-10 font-inter z-10'>About Me</h1>
          <p className='relative text-2xl py-5 z-10'>I&apos;m a self-taught <b>Full-stack Developer</b> and a Junior-year Computer Science student at IIITDM Jabalpur. I have over a year of experience in UI/UX and Web Dev and currently diving into the field of AI/ML.</p>
        </motion.div>         {/* Image DIV BELOW vvvv */}
        <div className='border-3 border-blue-600 bg-me bg-cover w-[24vw] h-[70vh]' style={{ boxShadow: `0 5px 15px 1px rgba(0, 0, 0, 0.5)`}}/>

        <motion.div className="absolute bottom-[36vh] left-[20vw] w-full text-gray-300 text-[1vw]"
          ref={ref}
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.4, type: "spring", damping: 14, stiffness: 80, ease: "easeOut" }}
        >
          <h1 className='flex '>Scroll below to see my work and skills. </h1>
        </motion.div>
      </div>
  )
}
