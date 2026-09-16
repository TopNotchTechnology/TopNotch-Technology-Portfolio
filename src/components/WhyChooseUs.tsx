"use client";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import SectionHeading from "./SectionHeading";
import { whyScroll } from "@/data/content";

export default function WhyChooseUs() {
  return (
    <section id="why" className="border-b border-line py-20 sm:py-28">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why choose us"
          title="Consistent growth, trusted worldwide."
          sub="Scroll the panel below — each principle reveals as you go."
        />
        <StickyScroll content={whyScroll} />
      </div>
    </section>
  );
}