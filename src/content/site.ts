export const site = {
  name: "Lohmont",
  descriptor: "Creative studio",
  location: "Newport Beach, CA",
  email: "nick@lohmont.com",
  instagram: "nickbilotto",
  url: "https://lohmont.com",
  title: "Lohmont — Creative studio, Newport Beach",
  description:
    "Lohmont is a creative studio in Newport Beach. Websites, apps, and social for brands with taste.",
} as const;

export const nav = [
  { href: "/studio", label: "Studio" },
  { href: "/start", label: "Start a project" },
] as const;

export const services = [
  {
    index: "01",
    slug: "web",
    name: "Websites",
    line: "Fast, considered, built to be remembered.",
    detail:
      "Sites people actually look at. Designed around one still, one sentence, and the thing you want someone to do next.",
  },
  {
    index: "02",
    slug: "app",
    name: "Apps",
    line: "Dashboards and products, designed before they're built.",
    detail:
      "Custom software with a point of view. We draw every screen before writing a line, then build it to last.",
  },
  {
    index: "03",
    slug: "social",
    name: "Social",
    line: "Content that looks like the brand, posted like a plan.",
    detail:
      "Shooting, editing, and a calendar that holds. For restaurants, cafes, and places people want to be.",
  },
] as const;

export const team = [
  { name: "Nick Bilotto", role: "Founder", instagram: "nickbilotto" },
  { name: "Jellmer Tanig", instagram: "jellmertaniig" },
  { name: "Riley Baumgartner", instagram: "riley.baum" },
] as const;

export const manifesto = [
  "We are a creative studio in Newport Beach. We build websites, apps, and social for brands with taste.",
  "Most things are made to function. Few are made to be looked at. We make the second kind, and we have noticed that it works harder.",
  "We care about the first second. The weight of a line. The space around a word. The way a plate looks at seven in bad light.",
  "We don't do more. We do it right, then we stop.",
  "If you have ever sent something back because it wasn't quite right, we will get along.",
] as const;
