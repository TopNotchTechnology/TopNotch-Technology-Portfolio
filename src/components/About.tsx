"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { BackgroundGradient } from "./ui/background-gradient";
import SectionHeading from "./SectionHeading";
import { aboutCopy, aboutPhotoUrl, missionVision } from "@/data/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export default function About() {
  return (
    <section id="about" className="border-b border-line py-20 sm:py-28">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-12 px-5 sm:px-8 md:grid-cols-[1.15fr_0.85fr] md:gap-16">
        <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={staggerContainer(0.14)}>
          <SectionHeading eyebrow="Our story" title="Built in Jaipur, delivering worldwide" />
          <div className="flex flex-col gap-5">
            {aboutCopy.map((p, i) => (
              <motion.p key={i} variants={fadeUp} className="leading-relaxed text-mist-dim">
                {p}
              </motion.p>
            ))}
          </div>

          <motion.div variants={fadeUp} className="mt-8 overflow-hidden rounded-2xl border border-line">
            <Image
              src={aboutPhotoUrl}
              alt="Team working together on laptops"
              width={1000}
              height={420}
              className="h-[240px] w-full object-cover saturate-[0.8] transition duration-700 hover:scale-[1.04]"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.18)}
          className="flex flex-col gap-7 md:pt-24"
        >
          {missionVision.map((card) => (
            <motion.div key={card.eyebrow} variants={fadeUp}>
              <BackgroundGradient className="rounded-[20px] bg-surface p-7">
                <span className="mb-3 block font-mono text-[0.76rem] uppercase tracking-[0.2em] text-aqua">
                  {card.eyebrow}
                </span>
                <h3 className="mb-3 font-display text-[1.2rem] font-semibold text-mist">
                  {card.title}
                </h3>
                <p className="text-[0.92rem] leading-relaxed text-mist-dim">{card.body}</p>
              </BackgroundGradient>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}