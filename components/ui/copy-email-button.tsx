"use client";

import { Check, Copy } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
import { buttonStyles } from "./button";

/**
 * Copies the email address. The label never changes (so the button keeps its width);
 * the icon swaps to a check and a live region announces the copy. Falls back to mailto if the
 * Clipboard API is unavailable or blocked.
 */
export function CopyEmailButton({
  email,
  label,
  variant = "secondary",
  className,
}: {
  email: string;
  /** Visible label. Defaults to the address itself. Kept constant so the button never changes width. */
  label?: string;
  variant?: "primary" | "secondary" | "highlight";
  className?: string;
}) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy email address ${email}`}
      className={buttonStyles({ variant, withIcon: true, className })}
    >
      <span>{label ?? email}</span>
      <span className="btn-icon grid size-9 place-items-center rounded-full transition-transform duration-500 ease-inertia">
        {copied ? <Check weight="light" size={18} /> : <Copy weight="light" size={18} />}
      </span>
      <span className="sr-only" aria-live="polite">
        {copied ? "Email address copied" : ""}
      </span>
    </button>
  );
}
