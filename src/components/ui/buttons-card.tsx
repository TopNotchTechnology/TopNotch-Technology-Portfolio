"use client";
import React from "react";
import { IconSparkles } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export const ButtonsCard = ({
  children,
  className,
  onClick,
}: {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => (
  <div
    onClick={onClick}
    className={cn(
      "group/btn relative flex h-24 w-full items-center justify-center overflow-hidden rounded-xl border border-line bg-surface transition-colors duration-300 hover:border-iris/70",
      className
    )}
  >
    <div className="bg-dot absolute inset-0 opacity-40 transition-opacity duration-300 group-hover/btn:opacity-90" />
    <IconSparkles className="absolute right-2 top-2 hidden h-4 w-4 text-aqua transition duration-200 group-hover/btn:block" />
    <div className="relative z-40 font-mono text-sm text-mist-dim transition-colors group-hover/btn:text-mist">
      {children}
    </div>
  </div>
);