/**
 * Central content for the DRID landing page.
 *
 * To publish a future grant, add an entry to `programmes` with its own
 * subdomain URL and `status: "open"`. The card renders automatically.
 */

export const OFFICIAL_SITE = "https://drid.uniben.edu";

export type ProgrammeStatus = "open" | "coming-soon";

export interface Programme {
  /** Short code shown as the printed index label, e.g. "IBR". */
  code: string;
  name: string;
  /** Funder or sponsoring body, shown as a small caption. */
  funder: string;
  description: string;
  /** Live subdomain. Omit for programmes that are not yet open. */
  href?: string;
  status: ProgrammeStatus;
}

export const programmes: Programme[] = [
  {
    code: "IBR",
    name: "Institution-Based Research",
    funder: "TETFund Intervention",
    description:
      "Submit, review, and manage Institution-Based Research proposals under the TETFund intervention — the University of Benin's flagship internal research grant.",
    href: "https://ibr.drid-uniben.org",
    status: "open",
  },
];
