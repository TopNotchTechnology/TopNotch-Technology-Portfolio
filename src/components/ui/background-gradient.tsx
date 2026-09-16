"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const GRADIENT =
  "bg-[radial-gradient(circle_farthest-side_at_0_100%,#22d3ee,transparent),radial-gradient(circle_farthest-side_at_100%_0,#8b5cf6,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#f472b6,transparent),radial-gradient(circle_farthest-side_at_0_0,#6366f1,#141227)]";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const variants = {
    initial: { backgroundPosition: "0 50%" },
    animate: { backgroundPosition: ["0 50%", "100% 50%", "0 50%"] },
  };

  const common = {
    variants: animate ? variants : undefined,
    initial: animate ? "initial" : undefined,
    animate: animate ? "animate" : undefined,
    transition: animate
      ? { duration: 5, repeat: Infinity, repeatType: "reverse" as const }
      : undefined,
    style: { backgroundSize: animate ? "400% 400%" : undefined },
  };

  return (
    <div className={cn("group relative p-[4px]", containerClassName)}>
      <motion.div
        {...common}
        className={cn(
          "absolute inset-0 z-[1] rounded-3xl opacity-50 blur-xl transition duration-500 will-change-transform group-hover:opacity-100",
          GRADIENT
        )}
      />
      <motion.div
        {...common}
        className={cn("absolute inset-0 z-[1] rounded-3xl will-change-transform", GRADIENT)}
      />
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};