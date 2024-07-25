"use client";
import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const FlipWords = ({
  words,
  duration = 3000,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const startAnimation = useCallback(() => {
    const nextWord = words[(words.indexOf(currentWord) + 1) % words.length];
    setCurrentWord(nextWord);
    setIsAnimating(true);
  }, [currentWord, words]);

  useEffect(() => {
    if (!isAnimating) {
      const timer = setTimeout(() => {
        startAnimation();
      }, duration);
      return () => clearTimeout(timer); // Clear timeout on unmount
    }
  }, [isAnimating, duration, startAnimation]);

  const getTextGradient = (word: string) => {
    switch (word) {
      case "Generate":
        return "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)";
      case "Enhance":
        return "linear-gradient(160deg, #FBDA61 0%, #FF5ACD 100%)";
      default:
        return "linear-gradient(160deg, #000 0%, #000 100%)"; // Default gradient
    }
  };

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false);
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        exit={{
          opacity: 0,
          y: -40,
          x: 40,
          filter: "blur(8px)",
          scale: 2,
          position: "absolute",
        }}
        className={cn(
          "z-10 inline-block relative text-left px-2",
          className
        )}
        key={currentWord}
        style={{ color: "transparent", background: "none" }} // Ensure background is transparent
      >
        <motion.div
          style={{
            background: getTextGradient(currentWord),
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent", // Make sure the text color is transparent to show gradient
          }}
        >
          {currentWord.split("").map((letter, index) => (
            <motion.span
              key={currentWord + index}
              initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                delay: index * 0.08,
                duration: 0.4,
              }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
