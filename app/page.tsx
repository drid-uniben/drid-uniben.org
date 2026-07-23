import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import { ArrowUpRight } from "@/components/Icons";
import { programmes } from "@/lib/site";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="main">
        <Hero />

        {/* ---------------------------------------------------------- *
         *  Programmes / grants
         * ---------------------------------------------------------- */}
        <section
          id="programmes"
          aria-labelledby="programmes-heading"
          className="scroll-mt-24 border-t border-rule bg-lavender/60"
        >
          <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
            <Reveal className="max-w-2xl">
              <p className="eyebrow">Grants &amp; Proposals</p>
              <h2
                id="programmes-heading"
                className="mt-4 font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
              >
                Where research is funded
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink/70">
                Each grant runs on its own dedicated portal. As new funding
                lines open, they join the list below — each at its own address
                under drid-uniben.org.
              </p>
            </Reveal>

            <ul className="mt-12 flex flex-col gap-6">
              {programmes.map((p, i) => (
                <Reveal as="li" key={p.code} delay={i * 0.06}>
                  <a
                    href={p.href}
                    className="group block rounded-2xl border border-rule bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-plum/20 hover:shadow-xl hover:shadow-plum/10 sm:p-8"
                  >
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <p className="eyebrow text-plum">{p.funder}</p>
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-wider text-[#8a6508]">
                            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                            Open
                          </span>
                        </div>
                        <h3 className="mt-2.5 font-serif text-2xl font-semibold tracking-tight text-ink sm:text-[1.8rem]">
                          {p.name}
                          <span className="ml-2 align-middle text-base font-normal text-plum-500">
                            ({p.code})
                          </span>
                        </h3>
                        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink/70">
                          {p.description}
                        </p>
                      </div>

                      <span className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-plum px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors group-hover:bg-plum-700 sm:self-auto">
                        Open portal
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </a>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------------------------------------------------------- *
         *  Research Diploma — coming soon (no link, by design)
         * ---------------------------------------------------------- */}
        <section
          id="diploma"
          aria-labelledby="diploma-heading"
          className="scroll-mt-24 border-t border-rule"
        >
          <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
            <Reveal className="relative overflow-hidden rounded-2xl bg-plum-900 px-8 py-14 text-paper sm:px-14">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-linear-to-br from-plum-700/50 via-transparent to-transparent"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-16 select-none font-serif text-[13rem] leading-none text-paper/5"
              >
                ◇
              </div>
              <div className="relative max-w-xl">
                <p className="eyebrow text-gold-bright">Coming soon</p>
                <h2
                  id="diploma-heading"
                  className="mt-4 font-serif text-3xl font-semibold tracking-tight sm:text-[2.6rem] sm:leading-[1.08]"
                >
                  The DRID Research Diploma
                </h2>
                <p className="mt-5 text-base leading-relaxed text-paper/80">
                  A structured programme in research method, integrity, and
                  innovation for the University&rsquo;s next generation of
                  scholars. Details and enrolment will be announced here.
                </p>
                <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-paper/25 px-5 py-2 text-sm font-medium text-paper/70">
                  <span
                    aria-hidden
                    className="h-1.5 w-1.5 rounded-full bg-gold-bright"
                  />
                  Enrolment opening soon — no registration yet
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
