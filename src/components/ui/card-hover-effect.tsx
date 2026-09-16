"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    tag?: string;
    stat?: string;
    chips?: string[];
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("grid grid-cols-1 py-6 md:grid-cols-2", className)}>
      {items.map((item, idx) => (
        
        <a
          href={item.link}
          key={item.title}
          className="group relative block h-full w-full p-2"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 block h-full w-full rounded-3xl bg-iris/20"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
              />
            )}
          </AnimatePresence>

          <Card>
            {item.tag && (
              <span className="font-mono text-[0.72rem] uppercase tracking-widest text-aqua">
                {item.tag}
              </span>
            )}
            {item.stat && (
              <div className="mt-2 font-mono text-[0.95rem] text-iris-bright">{item.stat}</div>
            )}
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
            {item.chips && (
              <div className="mt-5 flex flex-wrap gap-2">
                {item.chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-line px-2.5 py-1 text-[0.72rem] text-mist-dim"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            )}
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <div
    className={cn(
      "relative z-20 h-full w-full overflow-hidden rounded-2xl border border-line bg-surface p-4 transition-colors duration-300 group-hover:border-iris/60",
      className
    )}
  >
    <div className="relative z-50 p-4">{children}</div>
  </div>
);

export const CardTitle = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <h3 className={cn("mt-3 font-display text-[1.2rem] font-semibold text-mist", className)}>
    {children}
  </h3>
);

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <p className={cn("mt-3 text-sm leading-relaxed text-mist-dim", className)}>{children}</p>
);
