import type { Metadata } from "next";
import Link from "next/link";
import { SlidersHorizontal, Map, GitCompareArrows, Search, MapPin, Sparkles, CalendarDays } from "lucide-react";
import { PublicLayout } from "@/components/site-shell";
import { ArtistCard, artists, Eyebrow } from "@/components/marketplace";
import { Button } from "@/components/ui/button";
import hero from "@/assets/mehndi-hero.jpg";


export const metadata: Metadata = {
  title: "Find Mehndi Artists Near You — Mehndi Connect",
  description: "Compare verified Mehndi artists by location, style, price, rating, and availability.",
  openGraph: {
    title: "Find Mehndi Artists — Mehndi Connect",
    description: "Discover and compare verified local Mehndi artists.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Find Mehndi Artists — Mehndi Connect",
    description: "Discover and compare verified local Mehndi artists.",
  },
};

function ArtistsPage() {
  return (
    <PublicLayout>
      <main>
        <section className="relative overflow-hidden bg-primary px-5 pb-28 pt-20 text-primary-foreground md:px-8 md:pt-28">
          <img
            src={hero.src}
            alt=""
            width={1920}
            height={1280}
            className="absolute inset-0 h-full w-full object-cover object-[64%_top] opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/40" />
          <div className="relative mx-auto max-w-[1440px]">
            <Eyebrow tone="dark">Nearby discovery</Eyebrow>
            <h1 className="max-w-4xl text-6xl leading-[0.95] md:text-8xl">
              Find beautiful work, <em>close to home.</em>
            </h1>
          </div>
        </section>
        <div className="relative z-10 -mt-14 px-5 md:px-8">
          <div className="mx-auto grid max-w-[1240px] overflow-hidden rounded-2xl bg-card shadow-[0_24px_60px_-20px_rgba(23,22,19,0.35)] ring-1 ring-border md:grid-cols-[1.2fr_1fr_1fr_auto]">
            {[
              { label: "Location", value: "Mumbai, Maharashtra", icon: MapPin },
              { label: "Style", value: "Bridal & Arabic", icon: Sparkles },
              { label: "Date", value: "21 September", icon: CalendarDays },
            ].map(({ label, value, icon: Icon }) => (
              <label
                key={label}
                className="flex items-center gap-3.5 border-b border-border px-6 py-5 md:border-b-0 md:border-r"
              >
                <Icon className="size-4 shrink-0 text-gold" />
                <span className="min-w-0 flex-1">
                  <span className="block text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                    {label}
                  </span>
                  <input
                    aria-label={label}
                    defaultValue={value}
                    className="mt-0.5 w-full bg-transparent text-[13px] font-semibold text-foreground outline-none"
                  />
                </span>
              </label>
            ))}
            <div className="flex items-stretch p-3">
              <Button
                variant="editorial"
                className="h-full min-h-12 w-full px-6 text-[10px] font-bold uppercase tracking-[0.16em] md:w-auto"
              >
                <Search />
                Search
              </Button>
            </div>
          </div>
        </div>
        <section className="px-5 py-8 md:px-8">
          <div className="mx-auto flex max-w-[1440px] flex-wrap gap-2">
            {[
              "Available today",
              "Home visit",
              "Verified",
              "Under ₹5,000",
              "4.8+ rating",
              "Within 5 km",
              "Female artist",
              "Bridal specialist",
            ].map((x) => (
              <Button key={x} variant="quiet" size="sm" className="rounded-full">
                {x}
              </Button>
            ))}
            <Button variant="editorial" size="sm" className="rounded-full">
              <SlidersHorizontal />
              All filters
            </Button>
          </div>
        </section>
        <section className="px-5 pb-24 md:px-8">
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-8 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
              <div>
                <h2 className="text-4xl">48 artists near Mumbai</h2>
                <p className="text-sm text-muted-foreground">Sorted by best match for your date</p>
              </div>
              <Button variant="quiet" className="rounded-full">
                <Map />
                Map view
              </Button>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[...artists, ...artists].map((a, i) => (
                <ArtistCard key={`${a.name}-${i}`} artist={a} />
              ))}
            </div>
            <div className="mt-16 rounded-2xl bg-card p-10 text-center ring-1 ring-border">
              <GitCompareArrows className="mx-auto mb-3 text-gold" />
              <h3 className="text-3xl">Shortlist and compare</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Compare availability, pricing, reviews, and portfolio styles side by side.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-secondary px-5 py-20 md:px-8">
          <div className="mx-auto max-w-[1440px]">
            <Eyebrow>Popular locations</Eyebrow>
            <div className="flex flex-wrap gap-x-8 gap-y-4 font-display text-3xl">
              {["Mumbai", "Andheri", "Goregaon", "Malad", "Thane", "Navi Mumbai", "Bandra"].map(
                (x) => (
                  <Link
                    key={x}
                    href="/artists"
                    className="border-b border-gold/50 transition-colors hover:text-pine"
                  >
                    {x}
                  </Link>
                ),
              )}
            </div>
            <p className="mt-12 max-w-3xl text-sm leading-7 text-muted-foreground">
              Explore verified bridal, Arabic, minimal, and festival Mehndi artists across Mumbai.
              Compare portfolios, home-visit availability, transparent starting prices, and trusted
              reviews before you book.
            </p>
          </div>
        </section>
      </main>
    </PublicLayout>
  );
}


export default ArtistsPage;
