"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { outcomeCards } from "@/data/content";
import { cn } from "@/lib/utils";

export default function Outcomes() {
  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden border-b border-line py-20 sm:py-24">
      <div className={cn("bg-grid absolute inset-0")} />
      <div className="pointer-events-none absolute inset-0 bg-void [mask-image:radial-gradient(ellipse_at_center,transparent_15%,black)]" />

      <h2 className="relative z-10 mb-3 text-center font-display text-3xl font-semibold text-gradient">
        Results in motion
      </h2>
      <p className="relative z-10 mb-10 text-center text-sm text-mist-dim">
        A rolling snapshot of outcomes delivered across five markets.
      </p>

      <div className="relative z-10 flex w-full justify-center px-4">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards items={outcomeCards} direction="right" speed="normal" />
        </div>
      </div>
    </section>
  );
}