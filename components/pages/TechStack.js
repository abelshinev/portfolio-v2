import React from 'react'
import { BentoGridDemo } from '../bento-grid-demo'

export default function TechStack({ id }) {

  return (

      <div id="tech" className="min-h-screen bg-tsbg bg-cover bg-center px-4 md:px-0">
        <div className="h-full flex flex-col items-center text-white pt-20 md:pt-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl m-8 md:m-28 mb-8 md:mb-16 font-geist font-bold text-center">My TechStack</h1>
          <BentoGridDemo />
        </div>
      </div>
  )
}

