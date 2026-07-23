import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@/components/Icons";
import { OFFICIAL_SITE } from "@/lib/site";

/**
 * Slim editorial masthead: the official DRID lockup on the left, a
 * deliberately quiet link out to the official University site on the right.
 */
export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-2 lg:px-10">
        <Link href="/" aria-label="DRID — University of Benin home">
          <Image
            src="/logo-header.png"
            alt="Directorate of Research, Innovation and Development"
            width={853}
            height={293}
            priority
            className="h-14 w-auto sm:h-16"
          />
        </Link>

        <a
          href={OFFICIAL_SITE}
          className="group inline-flex shrink-0 items-center gap-1.5 text-sm text-plum transition-colors hover:text-plum-700"
        >
          <span className="hidden sm:inline text-ink/50">
            Official University site
          </span>
          <span className="font-semibold">drid.uniben.edu</span>
          <ArrowUpRight className="h-3.5 w-3.5 text-gold" />
        </a>
      </div>
    </header>
  );
}
