/**
 * Project content. Descriptions and tags come from the V1 site (rewritten only where V1 used a dash or
 * had a grammar slip). Which projects appear on Home is controlled by `featuredSlugs` at the bottom.
 */

export type ProjectCategory = "development" | "design" | "practice";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  /** Short context line shown above the title (role, origin or kind of project). */
  label: string;
  summary: string;
  image: { src: string; width: number; height: number; alt: string };
  stack: string[];
  links: { live?: string; figma?: string; github?: string };
  /** Production-engineering details, shown on the Projects page feature. */
  details?: string[];
};

/** RDCHIME Figma file (from V1). */
const FIGMA_RDCHIME = "https://www.figma.com/design/nXVgXy8TRkn4jZVsUUtGlu/Untitled?node-id=0-1&t=UvM9WCoUYbbSEjPJ-1";
const FIGMA_WEATHERSENSE =
  "https://www.figma.com/design/PPUFaUwr4JDks9rv6tnOmt/Weather-Mobile-App?node-id=0-1&t=eYQAQMqk3c63S1Qb-1";

export const presyo: Project = {
  slug: "presyo",
  title: "Presyo",
  category: "development",
  label: "My startup",
  summary:
    "A costing tool for Filipino food and craft sellers. Know your true cost per unit, and what to charge, in minutes.",
  image: {
    src: "/projects/presyo-mockup.png",
    width: 1920,
    height: 907,
    alt: "Presyo costing app on two phones, showing a product cost breakdown and margin alerts.",
  },
  stack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Better Auth", "Drizzle", "Neon", "Sentry", "PostHog", "Vercel"],
  links: { live: "https://presyoph.com/" },
  details: [
    "Decimal-safe costing engine written in TypeScript, so prices never drift from floating-point rounding.",
    "Better Auth for sign-in, with Drizzle ORM on PostgreSQL hosted on Neon.",
    "Sentry for error tracking and PostHog for product analytics.",
    "Deployed on Vercel.",
  ],
};

export const dotnote: Project = {
  slug: "dotnote",
  title: "DotNote.",
  category: "development",
  label: "Web app",
  summary:
    "A minimalist note-taking web app with public, real-time notes and theme toggling. Fully responsive with no login required, deployed via Vercel and Render.",
  image: {
    src: "/projects/dotnote.png",
    width: 1920,
    height: 907,
    alt: "DotNote note-taking app in dark and light themes, showing a grid of public notes.",
  },
  stack: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
  links: { live: "https://dotnotee.vercel.app/" },
};

export const anemolab: Project = {
  slug: "anemolab",
  title: "AnemoLab",
  category: "practice",
  label: "College project",
  summary:
    "Built in my 2nd year of college. Features the Anemo characters from Genshin Impact, showcasing my early passion for web development.",
  image: {
    src: "/projects/anemolab.png",
    width: 1895,
    height: 905,
    alt: "AnemoLab landing page with a Genshin Impact character standing in a dark forest.",
  },
  stack: ["HTML", "CSS", "JavaScript", "Materialize"],
  links: { live: "https://jhesttt.github.io/AnemoLab/" },
};

export const ursEvents: Project = {
  slug: "urs-event-booking",
  title: "URS Event Booking System",
  category: "development",
  label: "University of Rizal System",
  summary:
    "Led the development of our campus's official event booking system, enabling event reservations for student councils with conflict-free scheduling. Deployed using Vercel, Render, and Railway.",
  image: {
    src: "/projects/ursacevents.png",
    width: 1920,
    height: 907,
    alt: "URS Event Booking System pages showing the campus calendar and event booking form.",
  },
  stack: ["React", "Node.js", "Express.js", "MySQL", "JavaScript", "HTML", "CSS"],
  links: { live: "https://ursevents.vercel.app/" },
};

export const sanjo: Project = {
  slug: "sanjo",
  title: "Sanjo",
  category: "development",
  label: "Client project",
  summary:
    "A portfolio for a photographer, videographer and editor: a filterable photo gallery with a lightbox, films that play without leaving the page, and a toolkit section, in light and dark themes.",
  image: {
    // Temporary thumbnail: a screenshot of the live home page. Replace when a designed mockup exists.
    src: "/projects/sanjo.png",
    width: 1920,
    height: 907,
    alt: "Sanjo portfolio home page with the headline Seen, shot, and cut., a short intro, and View photography and Watch films buttons.",
  },
  stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "React Router"],
  links: { live: "https://shotbysanjo.vercel.app/" },
};

export const portfolioV1: Project = {
  slug: "portfolio-v1",
  title: "Portfolio V1",
  category: "development",
  label: "Personal project",
  summary:
    "My first personal portfolio, with a hero introduction, a searchable project showcase, an About Me profile and a fully responsive layout, built with plain HTML, CSS and JavaScript.",
  image: {
    src: "/projects/portfolio-v1.png",
    width: 2560,
    height: 1280,
    alt: "Portfolio V1 promo: a browser window showing the old site's hero, I'm Jhestin, a Web Developer with a designer's touch from the Philippines, beside a list of its features.",
  },
  stack: ["HTML", "CSS", "JavaScript", "AOS"],
  links: { live: "https://jhestin.vercel.app/" },
};

export const gwaCalculator: Project = {
  slug: "gwa-calculator",
  title: "GWA Calculator",
  category: "practice",
  label: "Built for my classmates",
  summary:
    "Wanting to help my classmates who struggled to compute their GWA, I made a web app that lets them calculate it more easily.",
  image: {
    src: "/projects/gwa.png",
    width: 1918,
    height: 907,
    alt: "GWA Calculator form on a frosted glass card over a purple background, listing subjects and a Calculate Average button.",
  },
  stack: ["HTML", "CSS", "JavaScript"],
  links: { live: "https://jhesttt.github.io/GWACalculator/" },
};

export const rdchimeInventory: Project = {
  slug: "rdchime-inventory",
  title: "RDCHIME Inventory System",
  category: "design",
  label: "Lead UI/UX Designer",
  summary:
    "Guided the team in crafting the interface for RDCHIME's Inventory System, covering the dashboard, item management, user management and history.",
  image: {
    src: "/projects/rdchime-inventory-cover.jpg",
    width: 1920,
    height: 907,
    alt: "RDCHIME Inventory System screens: item management table, history log, create-item and user management dialogs.",
  },
  stack: ["Figma"],
  links: { figma: FIGMA_RDCHIME },
};

export const weatherSense: Project = {
  slug: "weathersense-ui",
  title: "WeatherSense UI",
  category: "design",
  label: "Group project, mobile UI",
  summary:
    "My part of a group project: the UI for a mobile app that reads temperature and humidity from a DHT11 sensor.",
  image: {
    src: "/projects/weather.png",
    width: 1895,
    height: 907,
    alt: "WeatherSense mobile screens: a temperature gauge at 28 degrees, the splash screen, and a humidity gauge at 40 percent.",
  },
  stack: ["Figma"],
  links: { figma: FIGMA_WEATHERSENSE },
};

/* Practice projects: Frontend Mentor challenges, internship exercises and a course project (V1 copy). */

export const newsHomepage: Project = {
  slug: "news-homepage",
  title: "News Homepage",
  category: "practice",
  label: "Frontend Mentor challenge",
  summary:
    "A Frontend Mentor challenge built with Next.js that sharpened my skills with React components and Next.js.",
  image: {
    src: "/projects/news.png",
    width: 1895,
    height: 905,
    alt: "W. news homepage with a colourful 3D blocks illustration, the headline The Bright Future of Web 3.0, and a New sidebar of article teasers.",
  },
  stack: ["Next.js", "React", "JavaScript", "HTML", "CSS"],
  links: { live: "https://jhesttt-newspage.netlify.app/" },
};

export const fyloLanding: Project = {
  slug: "fylo-landing",
  title: "Fylo Landing Page",
  category: "practice",
  label: "Frontend Mentor challenge",
  summary:
    "A Frontend Mentor landing page I built with React to improve my knowledge of React.",
  image: {
    src: "/projects/fylo.png",
    width: 1918,
    height: 907,
    alt: "Fylo landing page with an illustration of two people filing documents into a folder, the headline All your files in one secure location, and a Get Started button.",
  },
  stack: ["React", "JavaScript", "HTML", "CSS"],
  links: { live: "https://jhest-fylo.netlify.app/" },
};

export const testimonials: Project = {
  slug: "testimonials",
  title: "Testimonials",
  category: "practice",
  label: "Frontend Mentor challenge",
  summary:
    "A Frontend Mentor testimonial page with next, previous and shuffle controls. One of my first stepping stones as a frontend developer.",
  image: {
    src: "/projects/testimonials.png",
    width: 1270,
    height: 600,
    alt: "Testimonial page showing a quote, the reviewer's photo, and next and previous buttons.",
  },
  stack: ["JavaScript", "HTML", "CSS"],
  links: { live: "https://jhesttt.github.io/Testimonial-Webpage/" },
};

export const ageCalculator: Project = {
  slug: "age-calculator",
  title: "Age Calculator",
  category: "practice",
  label: "Frontend Mentor challenge",
  summary:
    "A Frontend Mentor challenge that calculates your age in years, months and days.",
  image: {
    src: "/projects/age-calculator.png",
    width: 1918,
    height: 911,
    alt: "Age Calculator card with month, day and year inputs above large years, months and days results on a purple background.",
  },
  stack: ["JavaScript", "HTML", "CSS"],
  links: { live: "https://jhesttt.github.io/Age-Calculator/" },
};

export const accordion: Project = {
  slug: "accordion-glassmorphism",
  title: "Accordion & Glassmorphism",
  category: "practice",
  label: "Frontend Mentor challenge",
  summary:
    "An accordion challenge from Frontend Mentor that I restyled with glassmorphism and a slideshow background.",
  image: {
    src: "/projects/accordion.png",
    width: 1918,
    height: 906,
    alt: "FAQ accordion on a frosted glass panel over a photo of a mountain lake with wooden rowing boats.",
  },
  stack: ["JavaScript", "HTML", "CSS"],
  links: { live: "https://jhesttt.github.io/Accordion-Glassmorphism/" },
};

export const diceRoll: Project = {
  slug: "dice-roll",
  title: "Dice Roll Web App",
  category: "practice",
  label: "Udemy course project",
  summary:
    "A 2-player web app that tests the players' luck for fun. I designed the dice in Figma; the idea came from a Udemy course I took in 2024.",
  image: {
    src: "/projects/dice.png",
    width: 1916,
    height: 905,
    alt: "Dice Roll game: Player 1 rolled a six and Player 2 a three, with a Player 1 Wins message and a Roll Dice button.",
  },
  stack: ["JavaScript", "HTML", "CSS", "Figma"],
  links: { live: "https://jhesttt.github.io/Dice-Project/" },
};

export const charactersFilter: Project = {
  slug: "characters-filter",
  title: "Characters' Filter",
  category: "practice",
  label: "Internship exercise",
  summary:
    "Filters a list of characters by their selected element, built during my internship to improve my understanding of JavaScript array functions.",
  image: {
    src: "/projects/characters-filter.png",
    width: 1892,
    height: 903,
    alt: "Genshin Impact 5-star characters page with element filter buttons above cards listing each character's name, element, weapon and region.",
  },
  stack: ["JavaScript", "HTML", "CSS"],
  links: { live: "https://jhesttt.github.io/Characters-Filter/" },
};

export const tabs: Project = {
  slug: "tabs",
  title: "Tabs",
  category: "practice",
  label: "Internship exercise",
  summary:
    "A tab component for switching between About, Vision and Mission, built as practice during my internship at AP Global IT Solutions.",
  image: {
    src: "/projects/tabs.png",
    width: 1460,
    height: 683,
    alt: "Tab component with About, Vision and Mission tabs beside a photo of a bamboo forest.",
  },
  stack: ["JavaScript", "HTML", "CSS"],
  links: { live: "https://jhesttt.github.io/Tabs/" },
};

export const counter: Project = {
  slug: "counter",
  title: "Counter",
  category: "practice",
  label: "Internship exercise",
  summary:
    "One of the tasks from my internship at AP Global IT Solutions, to strengthen my understanding of increment and decrement operators.",
  image: {
    src: "/projects/counter.png",
    width: 1402,
    height: 660,
    alt: "Counter card showing 0 with minus, Reset and plus buttons.",
  },
  stack: ["JavaScript", "HTML", "CSS"],
  links: { live: "https://jhesttt.github.io/Counter/" },
};

export const allProjects: Project[] = [
  presyo,
  // Web development, in display order
  sanjo,
  dotnote,
  portfolioV1,
  ursEvents,
  // UI/UX design
  rdchimeInventory,
  weatherSense,
  // Practice
  anemolab,
  gwaCalculator,
  newsHomepage,
  fyloLanding,
  testimonials,
  ageCalculator,
  accordion,
  diceRoll,
  charactersFilter,
  tabs,
  counter,
];

/** The four projects shown on Home, in order. Change these slugs to swap them. */
export const featuredSlugs = ["presyo", "dotnote", "anemolab", "urs-event-booking"] as const;

const bySlug = (slug: string) => allProjects.find((p) => p.slug === slug);

export const featuredProjects: Project[] = featuredSlugs.map(bySlug).filter((p): p is Project => Boolean(p));

/** Projects page: Presyo is the feature; everything else is grouped by discipline. */
export const otherProjects = allProjects.filter((p) => p.slug !== presyo.slug);
export const developmentProjects = otherProjects.filter((p) => p.category === "development");
export const designProjects = otherProjects.filter((p) => p.category === "design");
export const practiceProjects = otherProjects.filter((p) => p.category === "practice");
