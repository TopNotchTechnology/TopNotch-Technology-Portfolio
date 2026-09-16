"use client";
import React, { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

export type TooltipItem = {
  id: number;
  name: string;
  designation: string;
  image?: string;
  initials?: string;
};

export const AnimatedTooltip = ({ items }: { items: TooltipItem[] }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig);
  const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.currentTarget;
    x.set(event.nativeEvent.offsetX - target.offsetWidth / 2);
  };

  return (
    <>
      {items.map((item) => (
        <div
          className="group relative -mr-5"
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { type: "spring", stiffness: 260, damping: 10 },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{ translateX, rotate, whiteSpace: "nowrap" }}
                className="absolute -top-16 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center rounded-md border border-line bg-surface2 px-4 py-2 text-xs shadow-xl"
              >
                <div className="absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-aqua to-transparent" />
                <div className="absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-iris to-transparent" />
                <div className="relative z-30 text-base font-bold text-mist">{item.name}</div>
                <div className="text-xs text-mist-dim">{item.designation}</div>
              </motion.div>
            )}
          </AnimatePresence>

          <div
            onMouseMove={handleMouseMove}
            className="relative !m-0 flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border-2 border-mist/70 bg-gradient-to-br from-iris to-aqua !p-0 transition duration-500 group-hover:z-30 group-hover:scale-110"
          >
            {item.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover object-top"
              />
            ) : (
              <span className="font-display text-lg font-bold text-void">{item.initials}</span>
            )}
          </div>
        </div>
      ))}
    </>
  );
};