"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "@/components/Icons";

const TAGLINE = ["Advancing Research.", "Fostering Innovation.", "Catalyzing Development."];

export default function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.14, delayChildren: reduce ? 0 : 0.1 },
    },
  };
  const line = {
    hidden: { opacity: 0, y: reduce ? 0 : 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
  };
  const fade = {
    hidden: { opacity: 0, y: reduce ? 0 : 16 },
    show: { opacity: 1, y: 0, transition: { duration: reduce ? 0 : 0.6 } },
  };

  return (
    <section
      aria-labelledby="hero-heading"
      className="hero-surface relative overflow-hidden text-paper"
    >
      {/* gold hairline top */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-gold-bright/50 to-transparent"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-6xl px-5 pt-14 pb-14 lg:px-10 lg:pt-20 lg:pb-20"
      >
        <motion.p variants={fade} className="eyebrow text-gold-bright">
          Directorate of Research, Innovation &amp; Development · University of
          Benin
        </motion.p>

        <h1
          id="hero-heading"
          className="mt-6 max-w-4xl font-serif text-[2.6rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.5rem]"
        >
          {TAGLINE.map((text, i) => (
            <span key={text} className="block overflow-hidden">
              <motion.span variants={line} className="block">
                {i === 1 ? (
                  <span className="text-gold-bright">{text}</span>
                ) : (
                  text
                )}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          variants={fade}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-paper/85"
        >
          The engine room for advancing high-impact research, fostering
          innovation, and catalyzing sustainable development at the University
          of Benin — and the home of DRID&rsquo;s grants, proposals, and
          programmes.
        </motion.p>

        <motion.div
          variants={fade}
          className="mt-11 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
        >
          <a
            href="#programmes"
            className="inline-flex items-center gap-2 rounded-full bg-gold-bright px-7 py-3.5 text-sm font-semibold text-plum-900 shadow-sm transition-transform hover:-translate-y-0.5"
          >
            Explore grants &amp; proposals
            <ArrowDown className="h-4 w-4" />
          </a>
          <a
            href="#diploma"
            className="inline-flex items-center gap-2 border-b border-paper/30 px-1 pb-0.5 text-sm font-medium text-paper/90 transition-colors hover:border-gold-bright hover:text-gold-bright"
          >
            DRID Research Diploma
            <span className="text-gold-bright" aria-hidden>
              ·
            </span>
            <span className="text-paper/60">coming soon</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
