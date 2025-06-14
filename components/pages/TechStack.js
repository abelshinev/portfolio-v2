import React from 'react'
import { BentoGridDemo } from '../bento-grid-demo'

export default function TechStack() {

  return (

      <div className="h-[108vh] bg-tsbg bg-cover bg-center ">
        <div className="h-full flex flex-col items-center text-white">
          <h1 className="text-5xl m-32 mb-16 font-bold">My TechStack</h1>
          <BentoGridDemo />
        </div>
      </div>
  )
}

