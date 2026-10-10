"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { profile } from "@/lib/data/profile";
import { popIn, stagger, wordUp } from "@/lib/motion";

type Token = { word: string; accent?: boolean } | { portrait: true };

/** "I'm Jhestin, [portrait] a Web Developer with a designer's touch from the Philippines." */
const tokens: Token[] = [
  { word: "I'm" },
  { word: "Jhestin," },
  { portrait: true },
  { word: "a" },
  { word: "Web", accent: true },
  { word: "Developer", accent: true },
  { word: "with" },
  { word: "a" },
  { word: "designer's" },
  { word: "touch" },
  { word: "from" },
  { word: "the" },
  { word: "Philippines." },
];

const spoken = "I'm Jhestin, a Web Developer with a designer's touch from the Philippines.";

/**
 * Hero headline. Screen readers get the sentence once (sr-only); the visual copy is split into words
 * so each can rise out of its own clipped line. The portrait sits inline as a pill and pops in with the words.
 * Must live under a <Stagger> parent so the variants flow.
 */
export function HeroHeadline() {
  return (
    <motion.h1
      id="hero-title"
      variants={stagger(0.05, 0.05)}
      className="text-hero font-semibold text-fg [font-stretch:90%]"
    >
      <span className="sr-only">{spoken}</span>
      <span aria-hidden="true">
        {tokens.map((token, index) => (
          <span key={index}>
            {"portrait" in token ? (
              <span className="mx-[0.05em] mt-[0.1em] inline-block align-top">
                <motion.span
                  variants={popIn}
                  className="relative block h-[0.92em] w-[2.1em] overflow-hidden rounded-full border border-glass-line shadow-soft"
                >
                  <Image
                    src={profile.portrait.src}
                    alt=""
                    fill
                    priority
                    sizes="(min-width: 1024px) 140px, 100px"
                    className="object-cover object-[50%_38%]"
                  />
                </motion.span>
              </span>
            ) : (
              <span className="-mb-[0.14em] inline-block overflow-hidden pb-[0.14em] align-top">
                <motion.span variants={wordUp} className={token.accent ? "inline-block text-accent" : "inline-block"}>
                  {token.word}
                </motion.span>
              </span>
            )}{" "}
          </span>
        ))}
      </span>
    </motion.h1>
  );
}
