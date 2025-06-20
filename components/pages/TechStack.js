import React from 'react'
import { BentoGridDemo } from '../bento-grid-demo'

export default function TechStack({ id }) {

  return (

      <div id="tech" className="h-[150vh] bg-tsbg bg-cover bg-center ">
        <div className="h-full flex flex-col items-center text-white">
          <h1 className="text-5xl m-28 mb-16 font-geist font-bold">My TechStack</h1>
          <BentoGridDemo />
        </div>
      </div>
  )
}

