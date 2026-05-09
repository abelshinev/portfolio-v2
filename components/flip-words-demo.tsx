import React from "react";
import { FlipWords } from "./ui/flip-word";

export default function FlipWordsDemo() {
  const words = ["Scalable Web Apps", "Intelligent Systems", "Real-Time Experiences", "Modern Interfaces"];

  return (
    <div className="flex flex-row justify-start min-h-[140px] md:min-h-[160px]">
      <div className="text-4xl md:text-7xl text-neutral-600 dark:text-neutral-200 font-bold leading-tight">
        Building <br className="md:hidden" /><FlipWords words={words} />
      </div>
    </div>
  );
}
