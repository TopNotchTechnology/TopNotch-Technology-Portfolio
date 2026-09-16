"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { navLinks, services, brand } from "@/data/content";

export default function Navbar() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [active, setActive] = useState("#home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the section currently in the middle of the viewport.
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive("#" + entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="mx-auto flex max-w-[1180px] items-center justify-between px-5 sm:px-8">
        <a href="#home" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-iris to-aqua font-display text-lg font-bold text-void">
            T
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <strong className="font-display text-[0.95rem] font-bold tracking-wide text-mist">
              {brand.name}
            </strong>
            <span className="font-mono text-[0.66rem] text-muted">{brand.city}</span>
          </span>
        </a>

        {/* Desktop pill menu with an animated dropdown */}
        <div className="hidden lg:block">
          <Menu setActive={setHovered}>
            {navLinks.map((link) =>
              link.label === "Services" ? (
                <MenuItem
                  key={link.href}
                  setActive={setHovered}
                  active={hovered}
                  item="Services"
                  href={link.href}
                  isCurrent={active === link.href}
                >
                  <div className="flex flex-col gap-4">
                    {services.slice(0, 2).map((s) => (
                      <ProductItem
                        key={s.name}
                        title={s.name}
                        description={s.tagline}
                        href="#services"
                        src={s.image ?? services[0].image!}
                      />
                    ))}
                    <div className="flex flex-col gap-2 border-t border-line pt-3">
                      {services.slice(2).map((s) => (
                        <HoveredLink key={s.name} href="#services">
                          {s.name}
                        </HoveredLink>
                      ))}
                    </div>
                  </div>
                </MenuItem>
              ) : (
                <MenuItem
                  key={link.href}
                  setActive={setHovered}
                  active={hovered}
                  item={link.label}
                  href={link.href}
                  isCurrent={active === link.href}
                />
              )
            )}
          </Menu>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          
          <a
            href="#contact"
            className="rounded-full border border-line px-4 py-2 text-[0.82rem] font-semibold text-mist-dim transition-colors hover:border-iris hover:text-mist"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="relative h-10 w-10 rounded-lg border border-line bg-surface/70 backdrop-blur lg:hidden"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
            className="absolute left-[10px] right-[10px] top-1/2 block h-px bg-mist"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="absolute left-[10px] right-[10px] top-1/2 block h-px bg-mist"
          />
          <motion.span
            animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
            className="absolute left-[10px] right-[10px] top-1/2 block h-px bg-mist"
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="mx-5 mt-3 overflow-hidden rounded-2xl border border-line bg-surface/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-5">
              {navLinks.map((link) => (
                
                  <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-mist-dim transition-colors hover:text-aqua"
                >
                  {link.label}
                </a>
              ))}
              
                <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-1 rounded-full bg-gradient-to-r from-iris to-aqua py-2 text-center text-sm font-semibold text-void"
              >
                Get in touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
