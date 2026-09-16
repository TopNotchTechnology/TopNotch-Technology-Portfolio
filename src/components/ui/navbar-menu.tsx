"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Transition } from "motion/react";
import { cn } from "@/lib/utils";

const transition: Transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const Menu = ({
  setActive,
  children,
  className,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
  className?: string;
}) => (
  <nav
    onMouseLeave={() => setActive(null)}
    className={cn(
      "relative flex items-center justify-center gap-7 rounded-full border border-line bg-surface/70 px-7 py-3 shadow-[0_0_30px_-12px_rgba(139,92,246,0.7)] backdrop-blur-xl",
      className
    )}
  >
    {children}
  </nav>
);

export const MenuItem = ({
  setActive,
  active,
  item,
  href,
  isCurrent,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  href?: string;
  isCurrent?: boolean;
  children?: React.ReactNode;
}) => (
  <div onMouseEnter={() => setActive(item)} className="relative">
    {href ? (
      
        <a
        href={href}
        className={cn(
          "relative cursor-pointer py-1 text-[0.9rem] transition-colors hover:opacity-90",
          isCurrent ? "text-mist" : "text-mist-dim hover:text-mist"
        )}
      >
        {item}
        {isCurrent && (
          <motion.span
            layoutId="nav-underline"
            className="absolute -bottom-1 left-0 h-px w-full bg-gradient-to-r from-iris to-aqua"
          />
        )}
      </a>
    ) : (
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer py-1 text-[0.9rem] text-mist-dim transition-colors hover:text-mist"
      >
        {item}
      </motion.p>
    )}

    {active !== null && (
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={transition}
      >
        {active === item && children && (
          <div className="absolute left-1/2 top-[calc(100%_+_1.2rem)] -translate-x-1/2 pt-4">
            <motion.div
              transition={transition}
              layoutId="active-dropdown"
              className="overflow-hidden rounded-2xl border border-line bg-surface/95 shadow-xl backdrop-blur-lg"
            >
              <motion.div layout className="h-full w-max p-4">
                {children}
              </motion.div>
            </motion.div>
          </div>
        )}
      </motion.div>
    )}
  </div>
);

export const HoveredLink = ({
  href,
  children,
  className,
  ...rest
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <Link
    href={href}
    className={cn("text-sm text-mist-dim transition-colors hover:text-aqua", className)}
    {...rest}
  >
    {children}
  </Link>
);

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => (
  <a href={href} className="flex items-center space-x-4 no-underline">
    <Image
      src={src}
      width={140}
      height={70}
      alt={title}
      className="h-[70px] w-[140px] shrink-0 rounded-md object-cover shadow-2xl"
    />
    <div>
      <h4 className="mb-1 font-display text-base font-semibold text-mist">{title}</h4>
      <p className="max-w-[16rem] text-xs text-mist-dim">{description}</p>
    </div>
  </a>
);
