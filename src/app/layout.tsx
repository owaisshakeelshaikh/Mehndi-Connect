import type { Metadata } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-display-next",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-sans-next",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Mehndi Connect",
  description: "India's marketplace for exceptional Mehndi artists.",
  openGraph: {
    title: "Mehndi Connect",
    description: "India's marketplace for exceptional Mehndi artists.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehndi Connect",
    description: "India's marketplace for exceptional Mehndi artists.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
