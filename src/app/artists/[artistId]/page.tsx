import type { Metadata } from "next";
import Link from "next/link";
import { BadgeCheck, CalendarDays, Clock, MapPin, Star } from "lucide-react";
import { PublicLayout } from "@/components/site-shell";
import { DesignGrid, Eyebrow } from "@/components/marketplace";
import { Button } from "@/components/ui/button";
import ananya from "@/assets/artist-ananya.jpg";
import bridal from "@/assets/design-bridal.jpg";


export const metadata: Metadata = {
  title: "Ananya Kulkarni — Bridal Mehndi Artist in Mumbai",
  description: "View Ananya Kulkarni's verified portfolio, services, availability, pricing, and reviews.",
  openGraph: {
    title: "Ananya Kulkarni — Mehndi Connect",
    description: "Verified bridal and Arabic Mehndi artist in Mumbai.",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ananya Kulkarni — Mehndi Connect",
    description: "Verified bridal and Arabic Mehndi artist in Mumbai.",
  },
};

function Profile() {
  return (
    <PublicLayout>
      <main className="bg-background">
        <section className="grid min-h-[72vh] bg-primary text-primary-foreground lg:grid-cols-[0.8fr_1.2fr]">
          <div className="relative min-h-[55vh]">
            <img
              src={ananya.src}
              alt="Ananya Kulkarni, Mehndi artist"
              width={912}
              height={1200}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="flex items-end p-6 md:p-12">
            <div className="w-full">
              <Eyebrow>Verified creator profile</Eyebrow>
              <h1 className="text-6xl md:text-8xl">Ananya Kulkarni</h1>
              <p className="mt-3 text-secondary">Contemporary Arabic · Bridal specialist</p>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-y border-secondary/20 py-5 text-sm">
                <span className="flex gap-2">
                  <BadgeCheck /> Portfolio verified
                </span>
                <span className="flex gap-2">
                  <Star /> 4.9 · 124 reviews
                </span>
                <span className="flex gap-2">
                  <MapPin /> Bandra · 15 km radius
                </span>
              </div>
              <Button asChild variant="inverse" size="editorial" className="mt-8">
                <Link href="/bookings">Book Ananya</Link>
              </Button>
            </div>
          </div>
        </section>
        <div className="mx-auto grid max-w-[1440px] gap-14 px-5 py-20 md:px-8 lg:grid-cols-[minmax(0,1fr)_340px]">
          <div className="space-y-24">
            <section>
              <Eyebrow>Selected work</Eyebrow>
              <h2 className="mb-10 text-5xl">Portfolio</h2>
              <DesignGrid compact />
            </section>
            <section className="grid gap-8 md:grid-cols-2">
              <div>
                <Eyebrow>About the artist</Eyebrow>
                <h2 className="text-5xl">A precise hand, with room for your story.</h2>
              </div>
              <div className="text-sm leading-7 text-muted-foreground">
                <p>
                  Ananya has spent eight years translating family references, textile motifs, and
                  contemporary linework into deeply personal designs.
                </p>
                <dl className="mt-8 grid grid-cols-2 gap-5 border-t border-border pt-6">
                  <div>
                    <dt>Languages</dt>
                    <dd>Hindi, Marathi, English</dd>
                  </div>
                  <div>
                    <dt>Experience</dt>
                    <dd>8 years</dd>
                  </div>
                  <div>
                    <dt>Home visits</dt>
                    <dd>Up to 15 km</dd>
                  </div>
                  <div>
                    <dt>Response</dt>
                    <dd>Usually within 1 hour</dd>
                  </div>
                </dl>
              </div>
            </section>
            <section>
              <Eyebrow>Services & pricing</Eyebrow>
              <div className="divide-y divide-border border-y border-border">
                {[
                  ["Bridal signature", "6–8 hours", "₹12,000"],
                  ["Guest Mehndi", "2–4 hours", "₹4,500"],
                  ["Arabic edit", "60–90 mins", "₹2,800"],
                  ["Custom occasion", "From 2 hours", "₹5,500"],
                ].map((x) => (
                  <div key={x[0]} className="grid gap-2 py-6 md:grid-cols-[1fr_1fr_auto]">
                    <h3 className="font-sans text-lg font-semibold">{x[0]}</h3>
                    <span className="text-sm text-muted-foreground">
                      {x[1]} · cones & aftercare included
                    </span>
                    <strong>{x[2]}</strong>
                  </div>
                ))}
              </div>
            </section>
            <section>
              <Eyebrow>Client notes</Eyebrow>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  "Ananya understood the references immediately and made the design feel completely ours.",
                  "Calm, punctual and incredibly detailed. Booking protection gave us confidence.",
                ].map((q, i) => (
                  <blockquote key={q} className="border border-border p-7">
                    <Star className="mb-5 size-4" />
                    <p className="font-display text-2xl">“{q}”</p>
                    <footer className="mt-5 text-xs text-muted-foreground">
                      {i ? "Sana · Eid · August 2026" : "Rhea · Wedding · September 2026"}
                    </footer>
                  </blockquote>
                ))}
              </div>
            </section>
          </div>
          <aside className="h-fit border border-border p-6 lg:sticky lg:top-24">
            <img
              src={bridal.src}
              alt="Ananya's featured bridal Mehndi design"
              width={912}
              height={1200}
              loading="lazy"
              className="mb-6 aspect-video w-full object-cover"
            />
            <h2 className="text-3xl">Reserve your date</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Starting at ₹4,500 · 20% booking advance
            </p>
            <div className="my-6 grid grid-cols-2 gap-2">
              <Button variant="quiet">
                <CalendarDays />
                Sep 24
              </Button>
              <Button variant="quiet">
                <Clock />
                4:00 PM
              </Button>
            </div>
            <Button asChild variant="editorial" size="editorial" className="w-full">
              <Link href="/bookings">Book Ananya</Link>
            </Button>
            <p className="mt-4 text-center text-[10px] text-muted-foreground">
              Protected booking · secure payment · customer support
            </p>
          </aside>
        </div>
      </main>
    </PublicLayout>
  );
}


export default Profile;
