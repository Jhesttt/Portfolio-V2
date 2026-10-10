export function SkipLink() {
  return (
    <a
      href="#content"
      className="sr-only rounded-full bg-brand px-5 py-3 text-small font-medium text-on-brand focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-60"
    >
      Skip to content
    </a>
  );
}
