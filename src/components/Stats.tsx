"use client";
import { useEffect, useRef } from "react";
import { animate, motion, useInView, useMotionValue, useTransform } from "motion/react";
import { stats } from "@/data/content";

function Counter({ value, suffix }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, { duration: 1.2, ease: [0.22, 1, 0.36, 1] });
    return controls.stop;
  }, [inView, value, count]);

  return (
    <span ref={ref} className="font-mono text-[clamp(1.7rem,3vw,2.2rem)] font-medium text-iris-bright">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative border-b border-line bg-surface/40">
      <div className="mx-auto grid max-w-[1180px] grid-cols-2 sm:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className={`px-5 py-10 text-center ${
              i !== stats.length - 1 ? "border-r border-line" : ""
            }`}
          >
            {stat.isStatic ? (
              <span className="font-mono text-[clamp(1.7rem,3vw,2.2rem)] font-medium text-iris-bright">
                {stat.staticLabel}
              </span>
            ) : (
              <Counter value={stat.value} suffix={stat.suffix} />
            )}
            <div className="mt-2 text-[0.8rem] text-muted">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}