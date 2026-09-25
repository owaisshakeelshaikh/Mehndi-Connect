import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  ChevronDown,
  HeartHandshake,
  IndianRupee,
  MapPin,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Upload,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ArtistCard,
  artists,
  DesignGrid,
  Eyebrow,
  SectionHeading,
} from "@/components/marketplace";
import { Reveal } from "@/components/reveal";
import { Testimonials } from "@/components/testimonials";
import { PublicLayout } from "@/components/site-shell";
import hero from "@/assets/mehndi-hero.jpg";
import ananya from "@/assets/artist-ananya.jpg";
import bridal from "@/assets/design-bridal.jpg";
import arabic from "@/assets/design-arabic.jpg";
import minimal from "@/assets/design-minimal.jpg";
import festival from "@/assets/design-festival.jpg";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).

export const metadata: Metadata = {
  title: "Mehndi Connect — Find & Book Mehndi Artists Near You",
  description: "Discover verified Mehndi artists nearby, compare portfolios and prices, and book with confidence.",
  openGraph: {
    title: "Mehndi Connect — Your Moment. Your Mehndi.",
    description: "India's premium marketplace for discovering and booking Mehndi artists.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehndi Connect — Your Moment. Your Mehndi.",
    description: "India's premium marketplace for discovering and booking Mehndi artists.",
  },
};

const searchFields = [
  { label: "Where?", value: "Mumbai", icon: MapPin },
  { label: "What?", value: "Bridal Mehndi", icon: Sparkles },
  { label: "When?", value: "Select Date", icon: CalendarDays },
  { label: "Budget", value: "Any Price", icon: IndianRupee },
];

const whyUs = [
  {
    icon: BadgeCheck,
    title: "Verified Artists",
    copy: "Every portfolio and profile is checked by our team before it goes live.",
  },
  {
    icon: MapPin,
    title: "Artists Near You",
    copy: "Find trusted Mehndi artists offering home visits across your city.",
  },
  {
    icon: ShieldCheck,
    title: "Protected Bookings",
    copy: "Advances, payments, and cancellations stay protected end to end.",
  },
  {
    icon: HeartHandshake,
    title: "Loved by Clients",
    copy: "A track record of happy celebrations and returning customers.",
  },
];

// Trust markers — replace `title`/`label` with real metrics once verified data exists.
const stats = [
  { icon: BadgeCheck, title: "Verified", label: "Every artist portfolio reviewed" },
  { icon: ShieldCheck, title: "Protected", label: "Payments & bookings secured" },
  { icon: Star, title: "Reviewed", label: "Real feedback from real bookings" },
  { icon: HeartHandshake, title: "Supported", label: "Human help when you need it" },
];

const checklist = [
  "Personalised artist matching",
  "Verified portfolios & reviews",
  "Protected payments & support",
  "Transparent, honest pricing",
];

const occasions = [
  {
    name: "Weddings",
    note: "Full bridal coverage",
    price: "from ₹12,000",
    image: bridal,
  },
  {
    name: "Eid & Festivals",
    note: "Group & guest bookings",
    price: "from ₹2,800",
    image: festival,
  },
  {
    name: "Engagements",
    note: "Elegant modern styles",
    price: "from ₹4,500",
    image: arabic,
  },
  {
    name: "Parties & Events",
    note: "Quick, minimal designs",
    price: "from ₹1,500",
    image: minimal,
  },
];

const journey = [
  { n: "01", title: "Discover", copy: "Find artists near you" },
  { n: "02", title: "Compare", copy: "Explore portfolios, prices and reviews" },
  { n: "03", title: "Book", copy: "Choose your date and service" },
  { n: "04", title: "Meet", copy: "Your artist arrives at your location" },
  { n: "05", title: "Complete", copy: "Enjoy your mehndi experience" },
  { n: "06", title: "Review", copy: "Share your experience and rebook" },
];

function Index() {
  return (
    <PublicLayout overlayNav>
      <main>
        {/* ——— Hero ——— */}
        <section className="relative flex min-h-svh flex-col overflow-hidden bg-primary text-primary-foreground">
          <img
            src={hero.src}
            alt="A Mehndi artist creating an intricate bridal design"
            width={1920}
            height={1280}
            className="absolute inset-0 h-full w-full animate-[hero-image-in_1.6s_cubic-bezier(0.22,1,0.36,1)_both] object-cover object-[70%_top]"
          />
          <div className="absolute inset-0 bg-ink/30" />
          <div className="relative mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-end px-5 pb-32 pt-28 md:px-8">
            <h1 className="max-w-3xl text-[3rem] leading-[1.02] sm:text-6xl md:text-7xl">
              <span className="hero-line">
                <span style={{ animationDelay: "0.2s" }}>Find an Artist</span>
              </span>
              <span className="hero-line">
                <span style={{ animationDelay: "0.38s" }}>
                  That Fits Your <em>Celebration</em>
                </span>
              </span>
            </h1>
            <p className="mt-7 max-w-md animate-[fade-up_0.9s_cubic-bezier(0.22,1,0.36,1)_0.55s_both] text-sm leading-7 text-primary-foreground/75 md:text-[15px]">
              Discover exceptional Mehndi artists in prime locations and secure your perfect
              artist for the big day.
            </p>
            <div className="mt-9 flex animate-[fade-up_0.9s_cubic-bezier(0.22,1,0.36,1)_0.7s_both] flex-wrap gap-3">
              <Button
                asChild
                variant="editorial"
                size="editorial"
                className="bg-pine text-[11px] font-bold uppercase tracking-[0.18em] hover:bg-primary"
              >
                <Link href="/artists">
                  Explore Artists <ArrowRight />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline-light"
                size="editorial"
                className="text-[11px] font-bold uppercase tracking-[0.18em]"
              >
                <Link href="/how-it-works">How It Works</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ——— Search card ——— */}
        <div className="relative z-10 -mt-16 px-5 md:px-8">
          <div className="mx-auto grid max-w-[1240px] animate-[fade-up_0.9s_cubic-bezier(0.22,1,0.36,1)_0.85s_both] overflow-hidden rounded-2xl bg-card shadow-[0_24px_60px_-20px_rgba(23,22,19,0.35)] ring-1 ring-border md:grid-cols-[1fr_1fr_1fr_1fr_auto]">
            {searchFields.map(({ label, value, icon: Icon }) => (
              <button
                key={label}
                type="button"
                className="group/field flex items-center gap-3.5 border-b border-border px-6 py-5 text-left transition-colors duration-300 last:border-b-0 hover:bg-secondary/50 md:border-b-0 md:border-r md:last:border-r-0"
              >
                <Icon className="size-4 shrink-0 text-gold transition-colors duration-300 group-hover/field:text-primary" />
                <span className="min-w-0 flex-1">
                  <small className="block text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                    {label}
                  </small>
                  <span className="mt-0.5 flex items-center justify-between gap-2 text-[13px] font-semibold text-foreground">
                    {value}
                    <ChevronDown className="size-3.5 text-muted-foreground" />
                  </span>
                </span>
              </button>
            ))}
            <div className="flex items-stretch p-3">
              <Button
                asChild
                variant="editorial"
                className="h-full min-h-12 w-full px-6 text-[10px] font-bold uppercase tracking-[0.16em] md:w-auto"
              >
                <Link href="/artists">
                  <Search /> Find Artists
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* ——— Featured artists ——— */}
        <section className="bg-background px-5 pb-16 pt-14 md:px-8 md:pb-20">
          <div className="mx-auto max-w-[1440px]">
            <SectionHeading
              eyebrow="Featured Artists"
              title="Handpicked Artists for You"
              copy="Explore our curated selection of exceptional Mehndi artists."
              action={
                <Link
                  href="/artists"
                  className="group inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gold"
                >
                  <span className="link-underline">View All Artists</span>
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              }
            />
            <div className="grid gap-6 md:grid-cols-3 md:gap-8">
              {artists.map((artist, i) => (
                <Reveal key={artist.name} delay={i * 110}>
                  <ArtistCard artist={artist} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ——— Why choose us ——— */}
        <section className="bg-background px-5 pb-16 md:px-8 md:pb-20">
          <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal>
              <Eyebrow>Why Choose Us</Eyebrow>
              <h2 className="text-[2.75rem] leading-[1] md:text-6xl">
                We Make Mehndi <em>Simple &amp; Rewarding</em>
              </h2>
              <p className="mt-6 max-w-md text-sm leading-7 text-muted-foreground">
                From finding your dream artist to the final design, we&apos;re with you every step
                of the way.
              </p>
              <Button
                asChild
                variant="editorial"
                size="editorial"
                className="mt-9 text-[10px] font-bold uppercase tracking-[0.18em]"
              >
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2">
              {whyUs.map(({ icon: Icon, title, copy }, i) => (
                <Reveal
                  key={title}
                  delay={i * 100}
                  className="rounded-2xl bg-card p-7 shadow-[0_1px_2px_rgba(23,22,19,0.05),0_10px_30px_-14px_rgba(23,22,19,0.15)] ring-1 ring-border transition-shadow duration-500 hover:shadow-[0_16px_40px_-16px_rgba(23,22,19,0.25)]"
                >
                  <span className="flex size-12 items-center justify-center rounded-full bg-primary text-saffron">
                    <Icon className="size-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-6 font-sans text-base font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{copy}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ——— Stats bar ——— */}
        <section className="px-5 pb-16 md:px-8 md:pb-20">
          <Reveal className="mx-auto max-w-[1440px] rounded-2xl bg-primary px-8 py-12 text-primary-foreground shadow-[0_24px_60px_-24px_rgba(23,22,19,0.5)] md:px-14 md:py-14">
            <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
              {stats.map(({ icon: Icon, title, label }) => (
                <div key={title} className="flex items-center gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-saffron/40 bg-saffron/10 text-saffron">
                    <Icon className="size-5" strokeWidth={1.75} />
                  </span>
                  <span>
                    <span className="block font-display text-3xl leading-none md:text-4xl">
                      {title}
                    </span>
                    <span className="mt-1.5 block text-[11px] font-semibold text-primary-foreground/60">
                      {label}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ——— About split ——— */}
        <section className="bg-background px-5 pb-16 md:px-8 md:pb-20">
          <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-2 lg:items-center">
            <Reveal className="relative">
              <img
                src={ananya.src}
                alt="Ananya, a Mehndi artist, at work"
                width={912}
                height={1200}
                className="aspect-[4/3] w-full rounded-2xl object-cover shadow-[0_24px_60px_-24px_rgba(23,22,19,0.4)]"
              />

            </Reveal>
            <div className="lg:pl-8">
              <Reveal>
                <Eyebrow>About Mehndi Connect</Eyebrow>
                <h2 className="max-w-xl text-[2.75rem] leading-[1] md:text-6xl">
                  Your Trusted Partner in Celebration
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-7 max-w-lg text-sm leading-8 text-muted-foreground">
                  At Mehndi Connect, we believe great skill shouldn&apos;t need a storefront to be
                  discovered. We&apos;re committed to finding you the perfect artist for every
                  occasion — and giving artists a professional home of their own.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <ul className="mt-8 space-y-4">
                  {checklist.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-medium">
                      <span className="flex size-6 items-center justify-center rounded-full bg-primary text-saffron">
                        <BadgeCheck className="size-3.5" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ——— Testimonials ——— */}
        <Testimonials />

        {/* ——— Designs ——— */}
        <section className="bg-secondary px-5 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-[1440px]">
            <SectionHeading
              eyebrow="The Living Archive"
              title="Find the look. Then find its artist."
              copy="Explore a living archive of Mehndi work and discover artists who specialise in the details you love."
              action={
                <Link
                  href="/designs"
                  className="group inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gold"
                >
                  <span className="link-underline">View All Designs</span>
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              }
            />
            <DesignGrid />
            <Reveal delay={100}>
              <div className="mt-14 grid gap-8 rounded-2xl bg-card p-8 ring-1 ring-border md:grid-cols-[auto_1fr_auto] md:items-center md:p-10">
                <img
                  src={bridal.src}
                  alt="Intricate bridal Mehndi design"
                  width={912}
                  height={1200}
                  loading="lazy"
                  className="hidden aspect-square w-24 rounded-xl object-cover ring-1 ring-border md:block"
                />
                <div>
                  <h3 className="text-3xl md:text-4xl">Have a design in mind?</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Upload a reference to discover artists with a similar hand.
                  </p>
                </div>
                <Button asChild variant="editorial" size="editorial">
                  <Link href="/designs">
                    <Upload /> Find Artists Like This
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ——— Journey ——— */}
        <section className="bg-background px-5 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-[1440px]">
            <SectionHeading
              eyebrow="How the marketplace works"
              title="From inspiration to your next celebration."
            />
            <Reveal variant="none" className="relative">
              <div className="absolute inset-x-0 top-0 h-px bg-border" aria-hidden />
              <div
                className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-saffron transition-transform duration-[1800ms] ease-editorial group-[.is-visible]/reveal:scale-x-100"
                aria-hidden
              />
              <div className="no-scrollbar flex snap-x overflow-x-auto border-b border-border md:grid md:grid-cols-6">
                {journey.map((step, i) => (
                  <Reveal
                    key={step.title}
                    delay={150 + i * 110}
                    className="min-w-[190px] snap-start border-r border-border last:border-r-0 md:min-w-0"
                  >
                    <div className={`py-10 pr-5 md:py-12 ${i === 0 ? "pl-0" : "pl-5"}`}>
                      <span className="font-display text-[2.6rem] leading-none text-gold/50">
                        {step.n}
                      </span>
                      <h3 className="mt-9 font-sans text-[11px] font-bold uppercase tracking-[0.18em]">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-[13px] leading-6 text-muted-foreground">{step.copy}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ——— Newsletter ——— */}
        <section className="px-5 pb-16 md:px-8 md:pb-20">
          <div className="mx-auto max-w-[1440px]">
            <SectionHeading
              eyebrow="Book by occasion"
              title="Mehndi for every celebration."
              copy="Whatever the moment, there's an artist who specialises in it."
              action={
                <Link
                  href="/artists"
                  className="group inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gold"
                >
                  <span className="link-underline">Browse Artists</span>
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              }
            />
            <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
              {occasions.map((o, i) => (
                <Reveal key={o.name} delay={i * 90}>
                  <Link
                    href="/artists"
                    className="group block overflow-hidden rounded-2xl bg-card ring-1 ring-border transition-all duration-500 ease-editorial hover:-translate-y-1 hover:shadow-[0_16px_40px_-16px_rgba(23,22,19,0.25)]"
                  >
                    <div className="overflow-hidden">
                      <img
                        src={o.image.src}
                        alt={`${o.name} Mehndi`}
                        width={912}
                        height={1200}
                        loading="lazy"
                        className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="flex items-center justify-between gap-3 p-4">
                      <div className="min-w-0">
                        <h3 className="truncate font-sans text-[15px] font-bold">{o.name}</h3>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          {o.note} · {o.price}
                        </p>
                      </div>
                      <ArrowRight className="size-4 shrink-0 text-gold transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PublicLayout>
  );
}


export default Index;
