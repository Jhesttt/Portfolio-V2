import type { Metadata } from "next";
import { PageTransition } from "@/components/layout/page-transition";

export const metadata: Metadata = { title: "Projects" };

export default function Page() {
  return (
    <PageTransition>
      <section className="mx-auto w-full max-w-7xl px-4 pt-36 pb-24 sm:px-6 lg:px-8">
        <h1 className="text-h1 font-semibold text-fg">Projects</h1>
        <p className="mt-4 max-w-prose text-fg-muted">Placeholder page. The Presyo feature and project grid arrive in Phase 4.</p>
      </section>
    </PageTransition>
  );
}
