import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import { ArrowUpRight } from "@/components/Icons";
import { OFFICIAL_SITE, programmes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "The page you were looking for could not be found. Return to the DRID home or explore the University of Benin's open research programmes.",
};

export default function NotFound() {
  const open = programmes.filter((p) => p.status === "open" && p.href);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <p className="eyebrow">Error 404 — Page not found</p>

            <p className="index-numeral mt-6 bg-gradient-to-br from-plum-900 via-plum to-plum-500 bg-clip-text text-[5.5rem] font-semibold leading-none text-transparent sm:text-[8rem]">
              404
            </p>

            <h1 className="mt-6 max-w-2xl font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              This page has wandered off the record.
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/70">
              The link may be outdated or mistyped. Nothing is lost — you can
              return to the Directorate&apos;s home, or head straight to an open
              research programme below.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full bg-plum px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-plum-700"
              >
                Back to DRID home
              </Link>
              <a
                href={OFFICIAL_SITE}
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-plum transition-colors hover:text-plum-700"
              >
                Official University site
                <ArrowUpRight className="h-3.5 w-3.5 text-gold" />
              </a>
            </div>
          </Reveal>

          {open.length > 0 && (
            <Reveal delay={0.1} className="mt-16">
              <p className="eyebrow">Open programmes</p>
              <ul className="mt-5 divide-y divide-rule border-t border-rule">
                {open.map((p) => (
                  <li key={p.code}>
                    <a
                      href={p.href}
                      className="group flex items-baseline gap-5 py-5 transition-colors hover:bg-lavender/40"
                    >
                      <span className="index-numeral shrink-0 text-lg font-semibold text-plum-300">
                        {p.code}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="flex items-center gap-1.5 font-serif text-lg font-semibold text-ink">
                          {p.name}
                          <ArrowUpRight className="h-4 w-4 text-gold opacity-0 transition-opacity group-hover:opacity-100" />
                        </span>
                        <span className="mt-0.5 block text-sm text-ink/60">
                          {p.funder}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          )}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}