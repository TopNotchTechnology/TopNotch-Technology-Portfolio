"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: { quote: string; name: string; title: string }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  const addAnimation = useCallback(() => {
    if (!containerRef.current || !scrollerRef.current) return;

    // Duplicate the list exactly once so the -50% keyframe loops seamlessly.
    const scrollerContent = Array.from(scrollerRef.current.children);
    scrollerContent.forEach((item) => {
      scrollerRef.current?.appendChild(item.cloneNode(true));
    });

    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );
    containerRef.current.style.setProperty(
      "--animation-duration",
      speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s"
    );
    setStart(true);
  }, [direction, speed]);

  // Empty dep array on purpose: clone once on mount, never on re-render.
  useEffect(() => {
    addAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            key={item.name + item.title}
            className="relative w-[320px] max-w-full shrink-0 rounded-2xl border border-line bg-[linear-gradient(180deg,#141227,#0c0b18)] px-8 py-6 md:w-[440px]"
          >
            <blockquote>
              <span className="font-mono text-[0.72rem] uppercase tracking-widest text-aqua">
                {item.title}
              </span>
              <p className="relative z-20 mt-4 text-sm leading-[1.7] text-mist-dim">{item.quote}</p>
              <footer className="relative z-20 mt-6 font-display text-base font-semibold text-iris-bright">
                {item.name}
              </footer>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};