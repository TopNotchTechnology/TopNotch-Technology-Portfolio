"use client";
import { motion } from "motion/react";
import { fadeUp, viewportOnce } from "@/lib/motion";

export default function SectionHeading({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={fadeUp}
      className="mb-12 max-w-[680px]"
    >
      <span className="font-mono text-[0.8rem] uppercase tracking-[0.2em] text-aqua">
        {eyebrow}
      </span>
      <h2 className="mt-3 font-display text-[clamp(1.9rem,3.4vw,2.7rem)] font-semibold leading-tight text-gradient">
        {title}
      </h2>
      {sub && <p className="mt-4 text-[1.02rem] leading-relaxed text-mist-dim">{sub}</p>}
    </motion.div>
  );
}