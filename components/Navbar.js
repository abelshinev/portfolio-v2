"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { trans } from '@/lib/transitons';
import { Inter } from 'next/font/google';
import { Menu, X } from 'lucide-react';

const inter = Inter({
    subsets: ['latin'],
    weight: ["300", "400", "500", "600", "700", "800", "900"]
})

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const underlineVariants = {
        initial: { width: 0 },
        hover: { width: "100%", transition: { duration: 0.3, ease: "easeOut" } },
    };

    const menuItems = ["About", "Tech", "Projects"];

    return (
        <div className={`fixed w-full h-16 md:h-20 top-0 text-white ${inter.className} px-4 md:px-8 lg:px-12 flex items-center justify-between z-30 bg-black/10 backdrop-blur-sm`}>
            <h1 className="text-lg md:text-xl lg:text-2xl">
                <a href='#'>Coverslide</a>
            </h1>
            
            {/* Desktop Menu */}
            <ul className="hidden md:flex flex-row items-center space-x-6 lg:space-x-8">
                {menuItems.map((text, i) => (
                    <motion.li key={i}            
                        className="relative cursor-pointer text-sm lg:text-base"
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
                ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-full left-0 w-full bg-black/10 backdrop-blur-sm md:hidden"
                >
                    <ul className="flex flex-col space-y-4 p-6">
                        {menuItems.map((text, i) => (
                            <motion.li key={i}
                                className="cursor-pointer text-lg border-b border-white/20 pb-2"
                                whileHover={{ x: 10 }}
                                transition={{ duration: 0.2 }}
                            >
                                <a 
                                    href={`#${text.toLowerCase()}`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {text}
                                </a>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </div>
    )
}