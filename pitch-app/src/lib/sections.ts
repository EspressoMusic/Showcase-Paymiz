export const SECTIONS = [
  { id: "opening", index: 0 },
  { id: "problem", index: 1 },
  { id: "solution", index: 2 },
  { id: "simplicity", index: 3 },
  { id: "how-it-works", index: 4 },
  { id: "business-modes", index: 5 },
  { id: "customer", index: 6 },
  { id: "owner", index: 7 },
  { id: "vs-custom-app", index: 8 },
  { id: "differentiation", index: 9 },
  { id: "built", index: 10 },
  { id: "revenue", index: 11 },
  { id: "subscription", index: 12 },
  { id: "links", index: 13 },
  { id: "security", index: 14 },
  { id: "employees", index: 15 },
  { id: "marketplace", index: 16 },
  { id: "opportunity", index: 17 },
  { id: "investment", index: 18 },
  { id: "use-of-funds", index: 19 },
  { id: "roadmap", index: 20 },
  { id: "closing", index: 21 },
] as const;

export type SectionId = (typeof SECTIONS)[number]["id"];

export const SECTION_COUNT = SECTIONS.length;
