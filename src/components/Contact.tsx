"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { Meteors } from "./ui/meteors";
import SectionHeading from "./SectionHeading";
import { contactInfo } from "@/data/content";
import { fadeUp, viewportOnce } from "@/lib/motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Enquiry from ${form.name}${form.service ? " â€” " + form.service : ""}`
    );
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-28">
      <Meteors number={30} />
      <div className="animate-aurora absolute -left-20 top-1/3 h-[320px] w-[320px] rounded-full bg-iris/20 blur-[120px]" />

      <div className="relative z-10 mx-auto grid max-w-[1180px] grid-cols-1 gap-12 px-5 sm:px-8 md:grid-cols-2">
        <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={fadeUp}>
          <SectionHeading eyebrow="Get in touch" title="Let's talk about your project" />
          <dl className="flex flex-col gap-4">
            <Row label="Email">
              <a href={`mailto:${contactInfo.email}`} className="transition-colors hover:text-aqua">
                {contactInfo.email}
              </a>
            </Row>
            <Row label="Phone (India)">
              
              <a
                href={`tel:${contactInfo.phoneIndia.replace(/\s/g, "")}`}
                className="transition-colors hover:text-aqua"
              >
                {contactInfo.phoneIndia}
              </a>
            </Row>
            <Row label="Phone (International)">{contactInfo.phoneIntl}</Row>
            <Row label="Studio">{contactInfo.studio}</Row>
          </dl>

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href={contactInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-full border border-line px-6 py-3 text-sm font-semibold text-mist transition-colors hover:border-aqua hover:text-aqua"
          >
            Or message us on WhatsApp
          </motion.a>
        </motion.div>

        <motion.form
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 rounded-2xl border border-line bg-surface/70 p-7 backdrop-blur-md"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" value={form.name} onChange={handleChange} required />
            <Field
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <Field
            label="What do you need?"
            name="service"
            value={form.service}
            onChange={handleChange}
            placeholder="e.g. SEO for a UK e-commerce store"
          />
          <div>
            <label htmlFor="message" className="mb-1 block text-sm text-mist-dim">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-lg border border-line bg-surface2 px-3 py-2 text-mist placeholder:text-muted focus:border-iris focus:outline-none focus:ring-2 focus:ring-iris/40"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="self-start rounded-full bg-gradient-to-r from-iris to-aqua px-7 py-3 text-sm font-bold text-void"
          >
            Send message
          </motion.button>

          <p className="text-xs text-muted">
            {sent
              ? `Your email client should have opened, addressed to ${contactInfo.email}.`
              : `This opens your email client with the details pre-filled, addressed to ${contactInfo.email}.`}
          </p>
        </motion.form>
      </div>
    </section>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col border-b border-line pb-3 sm:flex-row sm:gap-4">
      <dt className="w-44 shrink-0 text-sm text-muted">{label}</dt>
      <dd className="text-mist-dim">{children}</dd>
    </div>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1 block text-sm text-mist-dim">
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-line bg-surface2 px-3 py-2 text-mist placeholder:text-muted focus:border-iris focus:outline-none focus:ring-2 focus:ring-iris/40"
      />
    </div>
  );
}
