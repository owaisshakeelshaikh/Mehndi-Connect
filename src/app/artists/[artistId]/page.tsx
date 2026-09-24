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
            <span className="absolute left-6 top-24 inline-flex items-center gap-1.5 rounded-md bg-gold px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-gold-foreground shadow-md lg:top-28">
              <BadgeCheck className="size-3" /> Verified Artist
            </span>
          </div>
          <div className="flex items-end p-6 md:p-12">
            <div className="w-full">
              <Eyebrow>Verified creator profile</Eyebrow>
              <h1 className="text-6xl md:text-8xl">Ananya Kulkarni</h1>
              <p className="mt-3 text-gold">Contemporary Arabic · Bridal specialist</p>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-y border-primary-foreground/15 py-5 text-sm text-primary-foreground/80">
                <span className="flex items-center gap-2">
                  <BadgeCheck className="size-4 text-gold" /> Portfolio verified
                </span>
                <span className="flex items-center gap-2">
                  <Star className="size-4 fill-gold text-gold" /> 4.9 · 124 reviews
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="size-4 text-gold" /> Bandra · 15 km radius
                </span>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button asChild variant="gold" size="editorial" className="font-semibold">
                  <Link href="/bookings">Book Ananya</Link>
                </Button>
                <p className="text-sm text-primary-foreground/70">
                  From <span className="font-bold text-primary-foreground">₹4,500</span>
                </p>
              </div>
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
                <dl className="mt-8 grid grid-cols-2 gap-5 border-t border-border pt-6 text-foreground">
                  <div>
                    <dt className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                      Languages
                    </dt>
                    <dd className="mt-1">Hindi, Marathi, English</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                      Experience
                    </dt>
                    <dd className="mt-1">8 years</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                      Home visits
                    </dt>
                    <dd className="mt-1">Up to 15 km</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                      Response
                    </dt>
                    <dd className="mt-1">Usually within 1 hour</dd>
                  </div>
                </dl>
              </div>
            </section>
            <section>
              <Eyebrow>Services &amp; pricing</Eyebrow>
              <div className="divide-y divide-border rounded-2xl bg-card px-6 ring-1 ring-border md:px-8">
                {[
                  ["Bridal signature", "6–8 hours", "₹12,000"],
                  ["Guest Mehndi", "2–4 hours", "₹4,500"],
                  ["Arabic edit", "60–90 mins", "₹2,800"],
                  ["Custom occasion", "From 2 hours", "₹5,500"],
                ].map((x) => (
                  <div key={x[0]} className="grid gap-2 py-6 md:grid-cols-[1fr_1fr_auto] md:items-center">
                    <h3 className="font-sans text-lg font-semibold">{x[0]}</h3>
                    <span className="text-sm text-muted-foreground">
                      {x[1]} · cones &amp; aftercare included
                    </span>
                    <strong className="text-primary">{x[2]}</strong>
                  </div>
                ))}
              </div>
            </section>
            <section>
              <Eyebrow>Client notes</Eyebrow>
              <div className="grid gap-5 md:grid-cols-2">
                {[
                  "Ananya understood the references immediately and made the design feel completely ours.",
                  "Calm, punctual and incredibly detailed. Booking protection gave us confidence.",
                ].map((q, i) => (
                  <blockquote
                    key={q}
                    className="rounded-2xl bg-card p-7 ring-1 ring-border shadow-[0_10px_30px_-16px_rgba(15,43,32,0.15)]"
                  >
                    <div className="mb-5 flex gap-1 text-gold">
                      {[...Array(5)].map((_, s) => (
                        <Star key={s} className="size-3.5 fill-current" />
                      ))}
                    </div>
                    <p className="font-display text-2xl leading-snug">“{q}”</p>
                    <footer className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      {i ? "Sana · Eid · August 2026" : "Rhea · Wedding · September 2026"}
                    </footer>
                  </blockquote>
                ))}
              </div>
            </section>
          </div>
          <aside className="h-fit rounded-2xl bg-card p-6 ring-1 ring-border shadow-[0_20px_50px_-20px_rgba(15,43,32,0.25)] lg:sticky lg:top-24">
            <img
              src={bridal.src}
              alt="Ananya's featured bridal Mehndi design"
              width={912}
              height={1200}
              loading="lazy"
              className="mb-6 aspect-video w-full rounded-xl object-cover"
            />
            <h2 className="text-3xl">Reserve your date</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Starting at <span className="font-bold text-foreground">₹4,500</span> · 20% booking
              advance
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
            <Button asChild variant="gold" size="editorial" className="w-full font-semibold">
              <Link href="/bookings">Book Ananya</Link>
            </Button>
            <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              <BadgeCheck className="size-3.5 text-gold" /> Protected booking · secure payment
            </p>
          </aside>
        </div>
      </main>
    </PublicLayout>
  );
}


export default Profile;
