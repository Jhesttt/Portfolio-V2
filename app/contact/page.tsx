import { DownloadSimple } from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import { PageTransition } from "@/components/layout/page-transition";
import { ContactMethods } from "@/components/sections/contact/contact-methods";
import { PageIntro } from "@/components/sections/shared/page-intro";
import { Button } from "@/components/ui/button";
import { contactPitch } from "@/lib/data/profile";
import { links } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Jhestin Digap by email, LinkedIn or GitHub. Based in Antipolo City, PH.",
};

export default function ContactPage() {
  return (
    <PageTransition>
      <PageIntro
        id="contact-title"
        label="Contact"
        title={contactPitch.title}
        actions={
          <Button
            href={links.resume}
            download="Jhestin-Digap-Resume.pdf"
            variant="secondary"
            icon={<DownloadSimple weight="light" size={18} />}
          >
            Download Resume
          </Button>
        }
      >
        {contactPitch.text}
      </PageIntro>
      <ContactMethods />
    </PageTransition>
  );
}
