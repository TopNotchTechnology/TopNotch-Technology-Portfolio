"use client";
import { motion } from "motion/react";
import { ButtonsCard } from "./ui/buttons-card";
import SectionHeading from "./SectionHeading";
import { techStack } from "@/data/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export default function TechStack() {
  return (
    <section className="border-b border-line py-20 sm:py-24">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our toolkit"
          title="The stack behind the results"
          sub="Modern, well-supported tools chosen for performance, measurability and long-term maintainability."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.06)}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          {techStack.map((tech) => (
            <motion.div key={tech} variants={fadeUp} whileHover={{ y: -4 }}>
              <ButtonsCard>{tech}</ButtonsCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}