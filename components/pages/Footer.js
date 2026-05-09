'use client'
import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
export default function Footer() {
  const [showFooter, setShowFooter] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight
      const pageHeight = document.body.offsetHeight

      // Show when near bottom
      if (pageHeight - scrollPos < 30) {
        setShowFooter(true)
      } else {
        setShowFooter(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

    const ref = useRef(null);
    const isInView = useInView(ref, { threshold: 0.2 });
    const links = [{name: "Splash", to: "#"},{name: "About", to: "#about"},{name: "Tech", to: "#tech"},{name: "Projects", to: "#projects"}]

  return (
    <section id="contact" ref={ref} className={`relative z-40 font-geist bg-zinc-900 text-white px-4 md:px-10 py-20`}>
        <motion.div
            initial={{ y: "100%" }}
            animate={{ y: showFooter ? "0%" : "100%" }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className="fixed bottom-0 left-0 w-full h-1/2 bg-zinc-900 text-white z-50 flex flex-col items-center justify-center"
        >
                {/* Grid Layout for Footer Content */}
                <div className="hidden md:grid grid-cols-4 gap-12 pt-12">
                    {/* Column 1: Navigation */}
                    <div className="space-y-6">
                        <h1 className='text-2xl font-semibold text-white'>Navigate</h1>
                        <ul className='space-y-3'>
                            {links.map((text, i) => (
                                <li key={i} className='text-lg text-zinc-500 hover:text-white transition duration-300'>
                                    <a href={text.to}>{text.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 2 & 3: Get in Touch */}
                    <div className="col-span-2 space-y-6">
                        <h2 className="text-5xl font-bold tracking-tight text-white leading-tight">Let&apos;s Build Something</h2>
                        <p className="text-xl text-zinc-400 max-w-md">Open to collaborations, freelance work, internships, and ambitious ideas.</p>
                        <div className="space-y-2 pt-4">
                            <p className="text-xl font-medium text-white hover:text-blue-400 transition-colors">
                                <a href="mailto:abelshinevarghese@gmail.com">abelshinevarghese@gmail.com</a>
                            </p>
                            <p className="text-lg text-zinc-500">+91 7898670716</p>
                        </div>
                    </div>

                    {/* Column 4: Social */}
                    <div className="space-y-6">
                        <h3 className='text-2xl font-semibold text-white'>Social</h3>
                        <ul className='space-y-3'>
                            <li className='text-lg text-zinc-500 hover:text-white transition duration-300'>
                                <a href='https://www.linkedin.com/in/abel-shine-varghese-354492300/'>LinkedIn</a>
                            </li>
                            <li className='text-lg text-zinc-500 hover:text-white transition duration-300'>
                                <a href='https://github.com/abelshinev/'>Github</a>
                            </li>
                            <li className='text-lg text-zinc-500 hover:text-white transition duration-300'>
                                <a href='https://leetcode.com/u/abelshinev/'>LeetCode</a>
                            </li>
                            <li className='text-lg text-zinc-500 hover:text-white transition duration-300'>
                                <a href='/resume_final_uae.pdf' target='_blank'>Resume</a>
                            </li>
                        </ul>
                    </div>
                </div>
                
                {/* Mobile: Simplified layout */}
                <div className='md:hidden flex flex-col items-center justify-center h-full space-y-12 text-center py-10'>
                    <div className='space-y-4'>
                        <h2 className="text-4xl font-bold">Let&apos;s Build Something</h2>
                        <p className="text-lg text-zinc-400">Open to collaborations, freelance work, internships, and ambitious ideas.</p>
                        <div className="space-y-2">
                            <p className="text-lg font-medium text-white">
                                <a href="mailto:abelshinevarghese@gmail.com">abelshinevarghese@gmail.com</a>
                            </p>
                            <p className="text-sm text-zinc-500">+91 7898670716</p>
                        </div>
                    </div>
                    
                    <div className='space-y-4'>
                        <h3 className='text-xl font-semibold'>Social</h3>
                        <ul className='flex flex-wrap justify-center gap-6'>
                            <li className='text-zinc-500 hover:text-white transition duration-300'>
                                <a href='https://www.linkedin.com/in/abel-shine-varghese-354492300/'>LinkedIn</a>
                            </li>
                            <li className='text-zinc-500 hover:text-white transition duration-300'>
                                <a href='https://github.com/abelshinev/'>Github</a>
                            </li>
                            <li className='text-zinc-500 hover:text-white transition duration-300'>
                                <a href='https://leetcode.com/u/abelshinev/'>LeetCode</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
  )
}
