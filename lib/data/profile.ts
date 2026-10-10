import { site } from "@/lib/site";

/** Copy comes from the V1 site. The pitch is V1's paragraph tightened to 20 words or fewer for the hero. */
export const profile = {
  name: site.name,
  nickname: "Jhest",
  greeting: "Hi there!",
  pitch:
    "I create clean, functional interfaces with a focus on simplicity, where every element serves a purpose.",
  portrait: {
    src: "/images/portrait.jpg",
    width: 1537,
    height: 2048,
    alt: "Jhestin Digap smiling in a black jacket, standing on a grassy hillside with mountains behind.",
  },
} as const;

/** About page. Built from the V1 bio and socials, with the current role and Presyo from the brief. */
export const about = {
  headline: "I enjoy bringing ideas to life through code.",
  bio: [
    "I'm Jhestin Digap, a web developer from Antipolo City and a BS Computer Engineering graduate of the University of Rizal System. Years of photo editing gave me a feel for design principles, and that eye shapes every interface I build: clean, intuitive, and purposeful.",
    "Today I work as a Technical Solutions Engineer at Rival (formerly SilkRoad Technology), supporting Fortune 500 clients' eForms and portals on a legacy enterprise stack. Outside of work, I build my own products with modern stacks, like Presyo, a costing tool that helps Filipino small businesses understand their costs and price smarter.",
  ],
  hobbies: {
    title: "Outside of code",
    text: "Music has always been my quiet escape, whether I'm on the guitar, bass, keys, or just drumming along to the rhythm. Outside of music, I enjoy getting lost in games, vibing to J-pop, and unwinding with anime.",
    video: {
      id: "9CMIGRBGy4s",
      title: "Summer Haze (Atarayo), one-man band cover",
    },
  },
} as const;

/** V1 gallery photos (square). img2 is only 320px wide, so the grid is kept small enough not to upscale it much. */
export const gallery = [
  { src: "/images/img1.webp", width: 1080, height: 1080, alt: "Jhestin in a white T-shirt and black face mask, standing among trees and bougainvillea." },
  { src: "/images/img3.jpg", width: 960, height: 960, alt: "Jhestin smiling in a striped T-shirt in front of a garden fence." },
  { src: "/images/img2.jpg", width: 320, height: 320, alt: "Mirror selfie of Jhestin in an olive button-up shirt." },
] as const;

export const contactPitch = {
  title: "Let's Create Something Amazing Together",
  text: "Need a developer with a designer's touch or just someone to chat with? I'd love to hear from you!",
} as const;
