"use client";
import { motion } from "motion/react";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { team } from "@/data/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export default function Team() {
  return (
    <section id="team" className="relative w-full overflow-hidden border-b border-line">
      <WavyBackground
        containerClassName="min-h-[44rem] w-full"
        className="mx-auto flex w-full max-w-[1180px] flex-col items-center justify-center px-5 py-24 sm:px-8"
      >
        <span className="mb-4 font-mono text-[0.78rem] uppercase tracking-[0.25em] text-aqua">
          Leadership team
        </span>
        <h2 className="mb-4 text-center font-display text-[clamp(2rem,4vw,3.4rem)] font-semibold text-mist">
          The people driving us forward
        </h2>
        <p className="mb-12 max-w-xl text-center text-mist-dim">
          Hover a portrait to meet the person behind the role.
        </p>

        <div className="mb-14 flex flex-row items-center justify-center">
          <AnimatedTooltip items={team} />
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.14)}
          className="grid w-full grid-cols-1 gap-6 md:grid-cols-3"
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={fadeUp}
              whileHover={{ y: -6, borderColor: "#8b5cf6" }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl border border-line bg-surface/80 p-7 backdrop-blur-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-iris to-aqua font-display text-base font-bold text-void">
                {member.initials}
              </div>
              <h3 className="font-display text-[1.08rem] font-semibold text-mist">{member.name}</h3>
              <div className="my-2 font-mono text-[0.74rem] text-aqua">{member.designation}</div>
              <p className="text-[0.9rem] leading-relaxed text-mist-dim">{member.bio}</p>
            </motion.div>
          ))}
        </motion.div>
      </WavyBackground>
    </section>
  );
}