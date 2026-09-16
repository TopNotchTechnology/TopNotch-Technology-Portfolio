"use client";
import { motion } from "motion/react";
import { Spotlight } from "./ui/spotlight";
import { MovingBorderButton } from "./ui/moving-border";
import { brand, contactInfo, heroVideoUrl, markets } from "@/data/content";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center overflow-hidden border-b border-line"
    >
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-[0.18] saturate-[0.6]"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      >
        <source src={heroVideoUrl} type="video/mp4" />
      </video>

      {/* Grid + aurora + vignette layers */}
      <div className="bg-grid absolute inset-0 opacity-60" />
      <div className="animate-aurora absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-iris/30 blur-[120px]" />
      <div className="animate-aurora absolute -right-32 bottom-0 h-[380px] w-[380px] rounded-full bg-aqua/20 blur-[120px] [animation-delay:3s]" />
      <div className="absolute inset-0 bg-gradient-to-b from-void/50 via-void/80 to-void" />

      <Spotlight className="-top-40 left-0 md:-top-24 md:left-56" fill="#a78bfa" />

      <motion.div
        variants={staggerContainer(0.14)}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto w-full max-w-[1180px] px-5 pb-20 pt-36 sm:px-8"
      >
        <motion.span
          variants={fadeUp}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-4 py-1.5 font-mono text-[0.72rem] uppercase tracking-[0.2em] text-aqua backdrop-blur"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-aqua" />
          {brand.city} · serving 5 Tier-1 markets
        </motion.span>

        <motion.h1
          variants={fadeUp}
          className="max-w-[18ch] font-display text-[2.6rem] font-semibold leading-[1.05] text-gradient sm:text-[3.6rem] lg:text-[4.4rem]"
        >
          {brand.tagline}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-[48ch] text-[1.06rem] leading-relaxed text-mist-dim"
        >
          Web &amp; app development, data analytics, digital marketing, SEO and content writing —
          trusted by businesses across the UK, Ireland, US, Canada and Australia.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-5">
          <MovingBorderButton
            as="a"
            href="#services"
            borderRadius="1.75rem"
            className="cursor-pointer px-6"
          >
            Explore services
          </MovingBorderButton>

          <motion.a
            whileHover={{ scale: 1.04, borderColor: "#22d3ee", color: "#67e8f9" }}
            whileTap={{ scale: 0.97 }}
            href={contactInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-4 text-[0.92rem] font-semibold text-mist"
          >
            Chat on WhatsApp
          </motion.a>
        </motion.div>

        <motion.ul
          variants={fadeUp}
          className="mt-14 flex flex-wrap gap-x-8 gap-y-3 font-mono text-[0.76rem] uppercase tracking-[0.18em] text-muted"
        >
          {markets.map((m) => (
            <li key={m} className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-iris" />
              {m}
            </li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 10, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 font-mono text-[0.68rem] uppercase tracking-[0.3em] text-muted"
      >
        Scroll
      </motion.div>
    </section>
  );
}