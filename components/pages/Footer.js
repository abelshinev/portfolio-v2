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
    <section id="contact" ref={ref} className={`relative z-40 font-geist bg-zinc-900 text-white px-10 py-20`}>
        <motion.div
            initial={{ y: "100%" }}
            animate={{ y: showFooter ? "0%" : "100%" }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className="fixed bottom-0 left-0 w-full h-1/2 bg-zinc-900 text-white z-50 flex flex-col items-center justify-center"
        >
            <div className=' w-[80vw] h-[40vh] relative'> {/* Box parent div */}
                <h1 className='absolute top-[4vh] text-3xl font-medium'>Navigate</h1>
                <ul className='space-y-2 absolute top-1/4 px-4'>
                    {
                        links.map((text, i) => (
                            <li
                                key={i}
                                className='text-xl text-white/70 hover:text-white transition duration-300'
                            >
                                <a href={text.to}>{text.name}</a>
                            </li>
                        ))
                    }
                </ul>
                <div className='h-[30vh] w-[0.15rem] left-[20vw] top-10 absolute bg-white' />
                <div className='absolute top-10 left-1/3'>
                    <h2 className="text-5xl font-semibold mb-4">Get in Touch</h2>
                    <p className="text-lg font-normal text-gray-300">Let&apos;s get connected, reach out to me with my links.</p>
                    <p className="text-lg font-light mt-12 text-white">
                        <a href="mailto:abelshinevarghese@gmail.com?subject=Hello&body=I'd like to connect.">abelshinevarghese@gmail.com</a>
                    </p>
                    <p className="text-md font-light text-gray-300">+91 7898670716</p>
                </div>
                <div className='absolute top-1/4 right-[15vw]'>
                    <ul className='space-y-2'>
                        <li className='text-xl text-white/70 hover:text-white transition duration-300'>
                            <a href='https://www.linkedin.com/in/abel-shine-varghese-354492300/'>LinkedIn</a>
                        </li>
                        <li className='text-xl text-white/70 hover:text-white transition duration-300'>
                            <a href='https://github.com/abelshinev/'>Github</a>
                        </li>
                        <li className='text-xl text-white/70 hover:text-white transition duration-300'>
                            <a href='https://open.spotify.com/user/8z9w865lusgp7bzbsyyaznb05'>Spotify</a>
                        </li>
                        <li className='text-xl text-white/70 hover:text-white transition duration-300'>
                            <a href='/resume_final_uae.pdf' target='_blank'>Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </motion.div>
    </section>
  )
}
