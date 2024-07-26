"use client";

import { useEffect, useState } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  loopDuration = 6000, // Duration of the entire loop (in milliseconds)
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  loopDuration?: number; // Duration of one complete loop
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  const [animationKey, setAnimationKey] = useState(Date.now()); // Key to trigger re-render

  useEffect(() => {
    // Function to handle animation
    const animateText = () => {
      animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration ? duration : 1,
          delay: stagger(0.2),
          onComplete: () => {
            // Restart animation after loopDuration
            setTimeout(() => {
              setAnimationKey(Date.now()); // Change key to force re-render
            }, loopDuration);
          }
        }
      );
    };

    animateText();
  }, [animationKey]); // Depend on animationKey to restart the animation

  const renderWords = () => {
    return (
      <motion.div ref={scope} key={animationKey}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="dark:text-white text-black opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="">
        <div className="dark:text-white text-black text-[6px] leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
