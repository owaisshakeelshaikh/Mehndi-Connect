import type { Metadata } from "next";
import { EditorialPage } from "@/components/editorial-page";

export const metadata: Metadata = {
  title: "Our Story — Mehndi Connect",
  description: "Why Mehndi Connect exists: to give talented Mehndi artists identity, opportunity, and trusted discovery.",
  openGraph: {
    title: "Every Hand Carries a Story",
    description: "The social mission behind Mehndi Connect.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Every Hand Carries a Story",
    description: "The social mission behind Mehndi Connect.",
  },
};

function Page() {
  return (
    <EditorialPage
      mode="story"
      eyebrow="Our story"
      title="Every hand carries a story."
      copy="We are building the infrastructure that helps beautiful skill become visible, trusted, and economically independent."
      finalTitle="Every skilled artist deserves a way to be discovered."
      chapters={[
        {
          number: "01",
          title: "The skill is already here",
          copy: "Across India, talented artists practise extraordinary craft in homes and communities.",
        },
        {
          number: "02",
          title: "Discovery is fragmented",
          copy: "Many have no digital identity, reliable marketing, or professional booking system.",
        },
        {
          number: "03",
          title: "A profile creates presence",
          copy: "Portfolio, location, services, availability, and reviews make skill findable.",
        },
        {
          number: "04",
          title: "Trust creates opportunity",
          copy: "Verification, clear booking details, support, and payment protection reduce uncertainty.",
        },
        {
          number: "05",
          title: "History creates loyalty",
          copy: "Customers remember their artists, rebook easily, and build relationships over time.",
        },
        {
          number: "06",
          title: "Opportunity creates impact",
          copy: "More bookings can become income, confidence, and independent professional identity.",
        },
      ]}
    />
  );
}


export default Page;
