/**
 * Professional history. Facts mirror CLAUDE.md section 5.2 exactly. Role, organization and
 * period are separate fields so the UI never needs a dash as a separator.
 */

export type Experience = {
  id: string;
  kind: "work" | "education";
  title: string;
  org: string;
  period: { start: string; end: string };
  highlights: string[];
};

export const experience: Experience[] = [
  {
    id: "rival",
    kind: "work",
    title: "Technical Solutions Engineer",
    org: "Rival (formerly SilkRoad Technology)",
    period: { start: "Oct 2025", end: "Present" },
    highlights: [
      "Fortune 500 client eForms and portals.",
      "200+ Jira tickets resolved.",
      "Legacy ePrise system work in XML, jQuery and Bootstrap.",
      "PDF output engineering fixes shared across the team.",
    ],
  },
  {
    id: "ap-global",
    kind: "work",
    title: "Full-Stack Web Developer (OJT)",
    org: "AP Global IT Solutions Inc.",
    period: { start: "Jun", end: "Jul 2024" },
    highlights: ["240+ hours.", "React and reusable components.", "Git workflows."],
  },
  {
    id: "urs",
    kind: "education",
    title: "BS Computer Engineering",
    org: "University of Rizal System, Antipolo",
    period: { start: "2021", end: "2025" },
    highlights: [],
  },
];

export function formatPeriod({ start, end }: Experience["period"]) {
  return `${start} - ${end}`;
}

export const currentRole = experience[0];
export const currentRoleStat = { value: "200+", label: "Jira tickets resolved for Fortune 500 eForms and portals" };
