import { ArrowUpRight } from "@/components/Icons";
import { OFFICIAL_SITE } from "@/lib/site";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-plum-900 text-paper">
      <div className="mx-auto max-w-6xl px-6 py-14 lg:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-md">
            <p className="font-serif text-2xl font-semibold tracking-tight">
              Directorate of Research,
              <br />
              Innovation &amp; Development
            </p>
            <p className="mt-3 text-sm leading-relaxed text-paper/60">
              University of Benin, Benin City, Edo State, Nigeria.
            </p>
          </div>

          <nav className="flex flex-col gap-2 text-sm md:items-end">
            <a
              href={OFFICIAL_SITE}
              className="inline-flex items-center gap-1.5 text-paper/80 transition-colors hover:text-gold-bright"
            >
              Official University site
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://ibr.drid-uniben.org"
              className="inline-flex items-center gap-2 text-base font-semibold text-paper transition-colors hover:text-gold-bright md:justify-end"
            >
              Institution-Based Research
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-paper/15 pt-6 text-xs text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} DRID, University of Benin. All rights reserved.</p>
          <p className="tracking-wide">drid-uniben.org</p>
        </div>
      </div>
    </footer>
  );
}
