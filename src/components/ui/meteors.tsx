"use client";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const Meteors = ({ number = 20, className }: { number?: number; className?: string }) => {
  const [settings, setSettings] = useState<
    { delay: string; duration: string; left: string; top: string }[]
  >([]);

  useEffect(() => {
    setSettings(
      Array.from({ length: number }, (_, idx) => ({
        // Spread across the full width instead of clustering on the left edge.
        left: `${(idx / number) * 130 - 15}%`,
        top: `${Math.random() * -30 - 5}%`,
        delay: `${Math.random() * 5}s`,
        duration: `${Math.floor(Math.random() * 5 + 5)}s`,
      }))
    );
  }, [number]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {settings.map((s, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor-effect absolute h-0.5 w-0.5 rotate-[45deg] rounded-full bg-iris-bright shadow-[0_0_0_1px_#ffffff10]",
            "before:absolute before:top-1/2 before:h-px before:w-[60px] before:-translate-y-1/2 before:bg-gradient-to-r before:from-aqua before:to-transparent before:content-['']",
            className
          )}
          style={{
            left: s.left,
            top: s.top,
            animationDelay: s.delay,
            animationDuration: s.duration,
          }}
        />
      ))}
    </motion.div>
  );
};
