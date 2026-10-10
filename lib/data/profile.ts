import { site } from "@/lib/site";

/** Copy comes from the V1 site. The pitch is V1's paragraph tightened to 20 words or fewer for the hero. */
export const profile = {
  name: site.name,
  greeting: "Hi there!",
  pitch:
    "I create clean, functional interfaces with a focus on simplicity, where every element serves a purpose.",
  portrait: {
    src: "/images/portrait.jpg",
    width: 1537,
    height: 2048,
  },
} as const;

export const contactPitch = {
  title: "Let's Create Something Amazing Together",
  text: "Need a developer with a designer's touch or just someone to chat with? I'd love to hear from you!",
} as const;
