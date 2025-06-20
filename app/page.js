'use client'
import { useRef } from 'react';
import { useInView } from 'framer-motion'
import HomePage from "@/components/pages/Home";
import TechStack from "@/components/pages/TechStack";
import About from "@/components/pages/About";
import Projects from "@/components/pages/Projects";
import Footer from "@/components/pages/Footer";

export default function Home() {

  const contactRef = useRef(null)
  const isContactInView = useInView(contactRef, { threshold: 0.3 })

  return (
    <div className="font-inter">
      {isContactInView && (
        <div className="fixed top-0 left-0 w-full h-full backdrop-blur-md bg-black/20 z-30 pointer-events-none transition-opacity duration-500" />
      )}
      <HomePage />
      <About />
      <TechStack />
      <Projects />
      {/* Pass the ref to Contact */}
      <section ref={contactRef}>
        <Footer />
      </section>
    </div>
  );
}
