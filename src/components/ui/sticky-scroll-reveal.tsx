"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: { title: string; description: string; eyebrow?: string; content?: React.ReactNode }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const breakpoints = content.map((_, index) => index / cardLength);
    const closest = breakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);
      return distance < Math.abs(latest - breakpoints[acc]) ? index : acc;
    }, 0);
    setActiveCard(closest);
  });

  const backgroundColors = ["#0c0b18", "#06060d", "#141227"];
  const linearGradients = React.useMemo(
    () => [
      "linear-gradient(to bottom right, #8b5cf6, #22d3ee)",
      "linear-gradient(to bottom right, #22d3ee, #6366f1)",
      "linear-gradient(to bottom right, #f472b6, #8b5cf6)",
    ],
    []
  );

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard, linearGradients]);

  return (
    <motion.div
      animate={{ backgroundColor: backgroundColors[activeCard % backgroundColors.length] }}
      className="relative flex h-[30rem] justify-center space-x-10 overflow-y-auto rounded-2xl border border-line p-6 sm:p-10"
      ref={ref}
    >
      <div className="relative flex items-start px-2 sm:px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              {item.eyebrow && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="mb-3 block font-mono text-[0.78rem] tracking-wide text-aqua"
                >
                  {item.eyebrow}
                </motion.span>
              )}
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="font-display text-2xl font-semibold text-mist"
              >
                {item.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="mt-6 max-w-md text-[0.97rem] leading-relaxed text-mist-dim"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>

      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-10 hidden h-64 w-80 shrink-0 overflow-hidden rounded-2xl lg:flex lg:items-center lg:justify-center",
          contentClassName
        )}
      >
        <span className="px-6 text-center font-display text-lg font-semibold text-void">
          {content[activeCard]?.title}
        </span>
      </div>
    </motion.div>
  );
};