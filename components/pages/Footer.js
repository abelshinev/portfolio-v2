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
            <div className='w-full md:w-[80vw] h-[40vh] relative px-4 md:px-0 flex flex-col items-center justify-center space-y-8'> {/* Box parent div */}
                <h1 className='text-2xl md:text-3xl font-medium text-center'>Navigate</h1>
                
                <div className='flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-16 w-full'>
                    {/* Navigation Links */}
                    <div className='flex flex-col items-center md:items-start space-y-2'>
                        <h3 className='text-lg font-semibold mb-2'>Quick Links</h3>
                        <ul className='space-y-2 text-center md:text-left'>
                            {links.map((text, i) => (
                                <li
                                    key={i}
                                    className='text-lg md:text-xl text-white/70 hover:text-white transition duration-300'
                                >
                                    <a href={text.to}>{text.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* Contact Info */}
                    <div className='flex flex-col items-center md:items-start text-center md:text-left'>
                        <h2 className="text-3xl md:text-5xl font-semibold mb-4">Get in Touch</h2>
                        <p className="text-base md:text-lg font-normal text-gray-300 mb-4">Let&apos;s get connected, reach out to me with my links.</p>
                        <p className="text-base md:text-lg font-light text-white">
                            <a href="mailto:abelshinevarghese@gmail.com?subject=Hello&body=I'd like to connect.">abelshinevarghese@gmail.com</a>
                        </p>
                        <p className="text-sm md:text-md font-light text-gray-300">+91 7898670716</p>
                    </div>
                    
                    {/* Social Links */}
                    <div className='flex flex-col items-center md:items-start'>
                        <h3 className='text-lg font-semibold mb-2'>Social</h3>
                        <ul className='space-y-2 text-center md:text-left'>
                            <li className='text-lg md:text-xl text-white/70 hover:text-white transition duration-300'>
                                <a href='https://www.linkedin.com/in/abel-shine-varghese-354492300/'>LinkedIn</a>
                            </li>
                            <li className='text-lg md:text-xl text-white/70 hover:text-white transition duration-300'>
                                <a href='https://github.com/abelshinev/'>Github</a>
                            </li>
                            <li className='text-lg md:text-xl text-white/70 hover:text-white transition duration-300'>
                                <a href='https://open.spotify.com/user/8z9w865lusgp7bzbsyyaznb05'>Spotify</a>
                            </li>
                            <li className='text-lg md:text-xl text-white/70 hover:text-white transition duration-300'>
                                <a href='/resume_final_uae.pdf' target='_blank'>Resume</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
  )
}
