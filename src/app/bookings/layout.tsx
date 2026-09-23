import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Book Ananya — Mehndi Connect",
  description: "Choose service, date, time, location, design, and payment for your Mehndi booking.",
  openGraph: {
    title: "Book a Mehndi Artist — Mehndi Connect",
    description: "A simple, protected Mehndi booking flow.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Mehndi Artist — Mehndi Connect",
    description: "A simple, protected Mehndi booking flow.",
  },
};

export default function BookingsLayout({ children }: { children: ReactNode }) {
  return children;
}
