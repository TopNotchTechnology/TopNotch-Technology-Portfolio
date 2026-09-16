"use client";
import { motion } from "motion/react";
import { MovingBorderButton } from "./ui/moving-border";
import { Meteors } from "./ui/meteors";
import { contactInfo } from "@/data/content";
import { fadeUp, viewportOnce } from "@/lib/motion";

export default function CTA() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-surface2">
      <div className="animate-aurora absolute left-1/4 top-0 h-[300px] w-[300px] rounded-full bg-iris/25 blur-[110px]" />
      <div className="animate-aurora absolute right-1/4 bottom-0 h-[260px] w-[260px] rounded-full bg-aqua/20 blur-[110px] [animation-delay:2s]" />
      <Meteors number={24} />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={fadeUp}
        className="relative z-10 mx-auto flex max-w-[1180px] flex-col items-center gap-5 px-5 py-20 text-center sm:px-8"
      >
        <span className="font-mono text-[0.78rem] uppercase tracking-[0.25em] text-aqua">
          Ready to scale?
        </span>
        <h2 className="max-w-3xl font-display text-[clamp(1.7rem,3.2vw,2.6rem)] font-semibold leading-tight text-gradient">
          Join businesses across the UK, US, Canada, Ireland and Australia who trust Topnotch.
        </h2>
        <p className="max-w-lg text-mist-dim">
          Message us directly on WhatsApp for a fast response, or send your brief below.
        </p>

        <div className="mt-4">
          <MovingBorderButton
            as="a"
            href={contactInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            borderRadius="1.75rem"
            containerClassName="h-14 w-60"
            className="cursor-pointer"
          >
            Chat on WhatsApp
          </MovingBorderButton>
        </div>
      </motion.div>
    </section>
  );
}