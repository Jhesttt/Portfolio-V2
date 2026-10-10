import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/shared/page-intro";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <PageIntro
      id="not-found-title"
      label="Error 404"
      title="This page doesn't exist."
      actions={
        <>
          <Button href="/" icon={<ArrowUpRight weight="light" size={18} />}>
            Back to home
          </Button>
          <Button href="/projects" variant="secondary" icon={<ArrowUpRight weight="light" size={18} />}>
            View Projects
          </Button>
        </>
      }
    >
      The link may be broken, or the page may have moved.
    </PageIntro>
  );
}
