"use client";
import React from "react";
import { motion } from "motion/react";
import { brand, contactInfo, navLinks, services } from "@/data/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-surface/40">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={staggerContainer(0.1)}
        className="relative z-10 mx-auto max-w-[1180px] px-5 py-16 sm:px-8"
      >
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
          <motion.div variants={fadeUp}>
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-iris to-aqua font-display text-lg font-bold text-void">
                T
              </span>
              <span className="flex flex-col leading-tight">
                <strong className="font-display text-[0.95rem] font-bold text-mist">
                  {brand.name}
                </strong>
                <span className="font-mono text-[0.66rem] text-muted">{brand.city}</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-mist-dim">
              Premium digital marketing, SEO, content and tech solutions trusted by clients across
              the UK, US, Canada, Ireland and Australia.
            </p>
          </motion.div>

          <FooterCol title="Quick links">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-aqua">
                  {l.label}
                </a>
              </li>
            ))}
          </FooterCol>

          <FooterCol title="Services">
            {services.map((s) => (
              <li key={s.name}>
                <a href="#services" className="transition-colors hover:text-aqua">
                  {s.name}
                </a>
              </li>
            ))}
          </FooterCol>

          <FooterCol title="Contact">
            <li>
              <a href={`mailto:${contactInfo.email}`} className="transition-colors hover:text-aqua">
                {contactInfo.email}
              </a>
            </li>
            <li>
              
              <a
                href={`tel:${contactInfo.phoneIndia.replace(/\s/g, "")}`}
                className="transition-colors hover:text-aqua"
              >
                {contactInfo.phoneIndia}
              </a>
            </li>
            <li>{contactInfo.phoneIntl} (Int)</li>
            <li>Jaipur, Rajasthan 302012</li>
          </FooterCol>
        </div>

        <motion.div
          variants={fadeUp}
          className="mt-12 flex flex-col justify-between gap-2 border-t border-line pt-6 text-xs text-muted sm:flex-row"
        >
          <span>Â© {new Date().getFullYear()} {brand.name}. All rights reserved.</span>
          <span>Designed for global growth.</span>
        </motion.div>
      </motion.div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.div variants={fadeUp}>
      <h4 className="mb-4 font-display text-sm font-semibold text-mist">{title}</h4>
      <ul className="flex flex-col gap-2 text-sm text-mist-dim">{children}</ul>
    </motion.div>
  );
}
