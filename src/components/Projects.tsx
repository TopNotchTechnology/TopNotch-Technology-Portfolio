"use client";
import { motion } from "motion/react";
import { HoverEffect } from "./ui/card-hover-effect";
import SectionHeading from "./SectionHeading";
import { projects, projectFooterStats } from "@/data/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export default function Projects() {
  return (
    <section id="work" className="relative border-b border-line py-20 sm:py-28">
      <div className="bg-dot pointer-events-none absolute inset-0 opacity-20" />

      <div className="relative mx-auto max-w-[1180px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our work"
          title="Projects & results"
          sub="Real campaigns, real results — a showcase of what we've delivered for clients worldwide."
        />

        <HoverEffect
          items={projects.map((p) => ({
            title: p.title,
            description: p.body,
            link: "#contact",
            tag: p.tag,
            stat: p.stat,
            chips: p.chips,
          }))}
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.1)}
          className="mt-14 flex flex-wrap justify-center gap-12"
        >
          {projectFooterStats.map((s) => (
            <motion.div key={s.label} variants={fadeUp} className="text-center">
              <div className="font-mono text-2xl text-iris-bright">{s.num}</div>
              <div className="mt-1 text-sm text-muted">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}