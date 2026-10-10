"use client";

import { Play } from "@phosphor-icons/react";
import Image from "next/image";
import { useState } from "react";

/**
 * Click-to-load YouTube embed. Shows the thumbnail and a play button; the real iframe (and all of
 * YouTube's scripts) only loads after the visitor asks for it. Uses the privacy-enhanced domain.
 */
export function YouTubeLite({ id, title }: { id: string; title: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-video overflow-hidden rounded-core bg-bg-sunken">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute inset-0 size-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0 size-full"
        >
          <Image
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt=""
            fill
            sizes="(min-width: 1024px) 40vw, 92vw"
            className="object-cover transition-transform duration-700 ease-settle group-hover:scale-[1.03]"
          />
          <span className="absolute inset-0 grid place-items-center">
            <span className="grid size-16 place-items-center rounded-full bg-brand text-on-brand shadow-lift transition-transform duration-500 ease-inertia group-hover:scale-105">
              <Play weight="fill" size={26} className="translate-x-0.5" />
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
