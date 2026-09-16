"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import SectionHeading from "./SectionHeading";
import { services, type Service } from "@/data/content";
import { fadeUp, viewportOnce } from "@/lib/motion";

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={fadeUp}
      transition={{ delay: index * 0.05 }}
    >
      <CardContainer className="w-full" containerClassName="py-4">
        <CardBody className="group/card relative h-full w-auto rounded-2xl border border-line bg-surface p-6 transition-shadow duration-300 hover:shadow-[0_0_45px_-12px_rgba(139,92,246,0.55)] sm:w-[26rem]">
          <CardItem translateZ="60" className="font-display text-xl font-semibold text-mist">
            {service.name}
          </CardItem>

          <CardItem
            as="p"
            translateZ="50"
            className="mt-2 max-w-sm text-sm leading-relaxed text-mist-dim"
          >
            {service.tagline}
          </CardItem>

          <CardItem translateZ="100" className="mt-5 w-full">
            {service.image ? (
              <Image
                src={service.image}
                alt={service.alt}
                width={900}
                height={500}
                className="h-48 w-full rounded-xl object-cover saturate-[0.85] transition group-hover/card:shadow-xl"
              />
            ) : (
              // No stock photo for this one — animated gradient panel instead.
              <div className="relative h-48 w-full overflow-hidden rounded-xl bg-[linear-gradient(130deg,#8b5cf6,#6366f1,#22d3ee)]">
                <div className="bg-grid absolute inset-0 opacity-30" />
                <span className="absolute bottom-4 left-4 font-mono text-sm text-void">
                  rank · traffic · revenue
                </span>
              </div>
            )}
          </CardItem>

          <CardItem translateZ="40" as="ul" className="mt-6 grid w-full grid-cols-1 gap-y-2">
            {service.list.map((item) => (
              <li key={item} className="relative pl-4 text-[0.88rem] text-mist-dim">
                <span className="absolute left-0 top-[0.55em] h-[5px] w-[5px] rounded-full bg-aqua" />
                {item}
              </li>
            ))}
          </CardItem>

          <div className="mt-8 flex items-center justify-between">
            <CardItem
              translateZ={30}
              as="a"
              href="#contact"
              className="cursor-pointer rounded-xl px-1 py-2 text-xs font-medium text-aqua"
            >
              Discuss this →
            </CardItem>
            <CardItem
              translateZ={30}
              as="a"
              href="#contact"
              className="cursor-pointer rounded-xl bg-gradient-to-r from-iris to-aqua px-4 py-2 text-xs font-bold text-void"
            >
              Get a quote
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="border-b border-line py-20 sm:py-28">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="What we offer"
          title="Our services"
          sub="Premium digital solutions tailored to grow your business across global markets."
        />
        <div className="flex flex-wrap justify-center gap-4">
          {services.map((service, i) => (
            <ServiceCard key={service.name} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}