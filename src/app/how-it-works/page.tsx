import type { Metadata } from "next";
import { EditorialPage } from "@/components/editorial-page";

export const metadata: Metadata = {
  title: "How Mehndi Connect Works — Safe, Simple Booking",
  description: "From inspiration and comparison to protected payment, service, review, and rebooking.",
  openGraph: {
    title: "How Mehndi Connect Works",
    description: "A trusted journey from inspiration to celebration.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How Mehndi Connect Works",
    description: "A trusted journey from inspiration to celebration.",
  },
};

function Page() {
  return (
    <EditorialPage
      eyebrow="The booking journey"
      title="From inspiration to celebration."
      copy="Discover, compare, select, book, pay, meet, review, and return—with clarity at every step."
      finalTitle="Ready to find your artist?"
      chapters={[
        {
          number: "01",
          title: "Search by what matters",
          copy: "Location, date, style, budget, home visit, and real availability.",
        },
        {
          number: "02",
          title: "Compare the work",
          copy: "Verified portfolios, transparent prices, response times, and customer reviews.",
        },
        {
          number: "03",
          title: "Book with protection",
          copy: "Pay 20% in advance and 80% after service, or settle fully online.",
        },
        {
          number: "04",
          title: "Meet your artist",
          copy: "Confirmed details, location, timing, requirements, and support stay in one place.",
        },
        {
          number: "05",
          title: "Review the experience",
          copy: "Share authentic feedback and photographs after the service is completed.",
        },
        {
          number: "06",
          title: "Rebook in one click",
          copy: "Choose a new date and service from the artists you already trust.",
        },
      ]}
    />
  );
}


export default Page;
