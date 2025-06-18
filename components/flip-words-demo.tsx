import React from "react";
import { FlipWords } from "./ui/flip-word";

export default function FlipWordsDemo() {
  const words = ["Guitarist", "UI/UX Designer", "Fullstack Developer", "Hooper"];

  return (
    <div className="flex flex-row justify-start ">
      <div className="text-6xl text-neutral-600 dark:text-neutral-200 font-bold">
        I am a <FlipWords words={words} /> <br />
        
      </div>
    </div>
  );
}
