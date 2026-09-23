import type { Metadata } from "next";
import { EditorialPage } from "@/components/editorial-page";

export const metadata: Metadata = {
  title: "Become a Mehndi Connect Artist",
  description: "Create your professional Mehndi artist profile, receive bookings, manage availability, and grow repeat business.",
  openGraph: {
    title: "Your Skill Deserves to Be Discovered",
    description: "Build your Mehndi artist business with Mehndi Connect.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Skill Deserves to Be Discovered",
    description: "Build your Mehndi artist business with Mehndi Connect.",
  },
};

function Page() {
  return (
    <EditorialPage
      mode="artist"
      eyebrow="For independent artists"
      title="Your skill deserves to be discovered."
      copy="Create your professional identity, showcase your portfolio, receive protected bookings, and grow a business on your terms."
      finalTitle="Let your work find its audience."
      chapters={[
        {
          number: "01",
          title: "Create your profile",
          copy: "Add your story, city, service radius, languages, specialities, and experience.",
        },
        {
          number: "02",
          title: "Show your portfolio",
          copy: "Organise real work by bridal, Arabic, minimal, festival, and custom styles.",
        },
        {
          number: "03",
          title: "Set prices and availability",
          copy: "Keep services, travel, calendar, and time slots accurate and easy to understand.",
        },
        {
          number: "04",
          title: "Receive bookings",
          copy: "Review customer requirements and manage each job in one professional workflow.",
        },
        {
          number: "05",
          title: "Get paid with support",
          copy: "Track advances, settlements, cancellations, and completed service earnings.",
        },
        {
          number: "06",
          title: "Grow repeat business",
          copy: "Build reputation, understand profile views, and welcome returning customers.",
        },
      ]}
    />
  );
}


export default Page;
