import React from "react";
import { FlipWords } from "../ui/filp-words"; // Ensure you have FlipWords implemented

export function FlipWordsDemo() {
  const words = [
    "stronger", "united", "healed", "empowered", "supported",
    "braver", "resilient", "courageous", "uplifted", "hopeful",
    "connected", "freer", "inspired", "motivated", "encouraged",
    "better", "kinder", "compassionate", "lighthearted", "balanced"
  ];

  return (
    <div className="h-[10rem] flex justify-center items-center px-4">
      <div className="text-4xl font-normal text-neutral-700 dark:text-neutral-400 text-center">
        A burden shared is a burden halved, and{""}
        <FlipWords words={words} />
      </div>
    </div>
  );
}
