import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  IndianRupee,
  MapPin,
  Repeat,
  ShieldCheck,
  Sparkles,
  Upload,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ArtistCard,
  artists,
  DesignGrid,
  Eyebrow,
  SectionHeading,
  designs,
} from "@/components/marketplace";
import { Reveal } from "@/components/reveal";
import { PublicLayout } from "@/components/site-shell";
import hero from "@/assets/mehndi-hero.jpg";
import ananya from "@/assets/artist-ananya.jpg";

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

const journey = [
  { n: "01", title: "Discover", copy: "Find artists near you" },
  { n: "02", title: "Compare", copy: "Explore portfolios, prices and reviews" },
  { n: "03", title: "Book", copy: "Choose your date and service" },
  { n: "04", title: "Meet", copy: "Your artist arrives at your location" },
  { n: "05", title: "Complete", copy: "Enjoy your mehndi experience" },
  { n: "06", title: "Review", copy: "Share your experience and rebook" },
];

const trustItems = [
  { icon: BadgeCheck, title: "Verified Artists", copy: "Real profiles and portfolios" },
  { icon: ShieldCheck, title: "Secure Bookings", copy: "Protected booking experience" },
  { icon: IndianRupee, title: "Transparent Pricing", copy: "Know what you're booking" },
  { icon: Repeat, title: "Easy Rebooking", copy: "Book your favourite artist again" },
];

function Index() {
  return (
    <PublicLayout overlayNav>
      <main>
        <section className="relative flex min-h-svh flex-col overflow-hidden bg-primary text-primary-foreground">
          <img
            src={hero.src}
            alt="A Mehndi artist creating an intricate bridal design"
            width={1920}
            height={1280}
            className="absolute inset-0 h-full w-full animate-[hero-image-in_1.6s_cubic-bezier(0.22,1,0.36,1)_both] object-cover object-[64%_center]"
          />
          <div className="absolute inset-0 bg-primary/50" />
          <div className="relative mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-end px-5 pb-10 pt-28 md:px-8 md:pb-14">
            <p
              className="mb-6 flex animate-[fade-up_0.9s_cubic-bezier(0.22,1,0.36,1)_0.1s_both] items-center gap-3 text-[10px] font-bold uppercase tracking-[0.24em] text-secondary"
            >
              <span className="h-px w-8 bg-secondary/60" aria-hidden />
              India&apos;s marketplace for Mehndi artists
            </p>
            <h1 className="max-w-4xl text-[3.4rem] leading-[0.92] tracking-[-0.02em] sm:text-7xl md:text-[6.5rem] lg:text-[7.5rem]">
              <span className="hero-line">
                <span style={{ animationDelay: "0.2s" }}>Your Moment.</span>
              </span>
              <span className="hero-line">
                <span style={{ animationDelay: "0.38s" }}>
                  <em>Your Mehndi.</em>
                </span>
              </span>
            </h1>
            <p className="mt-7 max-w-md animate-[fade-up_0.9s_cubic-bezier(0.22,1,0.36,1)_0.55s_both] text-sm leading-7 text-secondary md:text-[15px]">
              Discover talented artists near you, compare their work, and book with confidence.
            </p>
            <div className="mt-9 grid animate-[fade-up_0.9s_cubic-bezier(0.22,1,0.36,1)_0.7s_both] overflow-hidden rounded-md border border-secondary/25 bg-primary/70 backdrop-blur-xl md:max-w-4xl md:grid-cols-[1fr_1fr_0.8fr_auto]">
              {[
                { label: "Location", value: "Mumbai", icon: MapPin },
                { label: "Service", value: "Bridal Mehndi", icon: Sparkles },
                { label: "Date", value: "Choose date", icon: CalendarDays },
              ].map(({ label, value, icon: Icon }) => (
                <button
                  key={label}
                  type="button"
                  className="group/field flex items-center gap-3.5 border-b border-secondary/15 px-5 py-4 text-left transition-colors duration-300 last:border-b-0 hover:bg-secondary/10 md:border-b-0 md:border-r md:py-5 md:last:border-r-0"
                >
                  <Icon className="size-4 shrink-0 text-secondary transition-colors duration-300 group-hover/field:text-primary-foreground" />
                  <span>
                    <small className="block text-[9px] font-bold uppercase tracking-[0.2em] text-secondary">
                      {label}
                    </small>
                    <span className="mt-0.5 block text-[13px] font-medium">{value}</span>
                  </span>
                </button>
              ))}
              <Button
                asChild
                variant="inverse"
                size="editorial"
                className="m-2 h-auto min-h-12 font-semibold"
              >
                <Link href="/artists">
                  Find Artists <ArrowRight />
                </Link>
              </Button>
            </div>
            <div className="mt-9 flex animate-[fade-up_0.9s_cubic-bezier(0.22,1,0.36,1)_0.85s_both] items-center gap-6 text-[9px] font-semibold uppercase tracking-[0.22em] text-secondary/80">
              <span>Find</span>
              <span className="size-0.5 rounded-full bg-secondary/50" aria-hidden />
              <span>Compare</span>
              <span className="size-0.5 rounded-full bg-secondary/50" aria-hidden />
              <span>Book</span>
              <span className="size-0.5 rounded-full bg-secondary/50" aria-hidden />
              <span>Celebrate</span>
            </div>
          </div>
        </section>

        <section className="bg-background px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-[1440px]">
            <SectionHeading
              eyebrow="Choose your moment"
              title="What are you celebrating?"
              copy="From intricate bridal storytelling to a quiet festive detail, begin with the moment you are making."
            />
            <div className="no-scrollbar flex snap-x gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-5">
              {[...designs, ...designs.slice(0, 1)].map((item, i) => (
                <Reveal
                  key={`${item.name}-${i}`}
                  delay={i * 80}
                  className="min-w-[68vw] snap-start md:min-w-0"
                >
                  <Link
                    href="/designs"
                    className={`group relative block overflow-hidden rounded-sm ${i === 1 ? "md:translate-y-12" : ""}`}
                  >
                    <img
                      src={item.image.src}
                      alt={`${item.style} Mehndi`}
                      width={912}
                      height={1200}
                      loading="lazy"
                      className="aspect-[3/4] w-full object-cover transition duration-700 ease-editorial group-hover:scale-[1.05]"
                    />
                    <span className="absolute inset-0 bg-primary/10 transition-colors duration-500 group-hover:bg-primary/40" />
                    <p className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4 font-display text-2xl text-primary-foreground transition-transform duration-500 ease-editorial group-hover:-translate-y-1 md:p-5">
                      {item.style}
                      <ArrowRight className="size-5 translate-x-2 opacity-0 transition-all duration-500 ease-editorial group-hover:translate-x-0 group-hover:opacity-100" />
                    </p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-secondary px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-[1440px]">
            <SectionHeading
              eyebrow="Artists near you"
              title="Beautiful work, right around you."
              copy="Discover verified artists, available for home visits and protected bookings."
            />
            <div className="no-scrollbar flex snap-x gap-5 overflow-x-auto pb-5 md:grid md:grid-cols-3 md:gap-8">
              {artists.map((artist, i) => (
                <Reveal
                  key={artist.name}
                  delay={i * 110}
                  className="min-w-[78vw] snap-start sm:min-w-[340px] md:min-w-0"
                >
                  <ArtistCard artist={artist} />
                </Reveal>
              ))}
            </div>
            <Reveal delay={200}>
              <Button asChild variant="quiet" size="editorial" className="mt-12 font-semibold">
                <Link href="/artists">
                  Explore all artists <ArrowRight />
                </Link>
              </Button>
            </Reveal>
            <Reveal delay={100}>
              <div className="mt-16 grid grid-cols-2 border-t border-foreground/15 md:grid-cols-4">
                {trustItems.map(({ icon: Icon, title, copy }, i) => (
                  <div
                    key={title}
                    className={`flex flex-col gap-2.5 px-5 py-7 first:pl-0 md:py-9 ${i > 0 ? "border-l border-foreground/15" : ""} ${i === 2 ? "max-md:border-l-0 max-md:border-t max-md:border-foreground/15" : ""} ${i === 3 ? "max-md:border-t max-md:border-foreground/15" : ""}`}
                  >
                    <Icon className="size-4 text-foreground/70" strokeWidth={1.75} />
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em]">{title}</p>
                    <p className="text-xs leading-5 text-muted-foreground">{copy}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-primary px-5 py-24 text-primary-foreground md:px-8 md:py-32">
          <div className="mx-auto max-w-[1440px]">
            <SectionHeading
              eyebrow="Start with the design"
              title="Find the look. Then find its artist."
              copy="Explore a living archive of Mehndi work and discover artists who specialise in the details you love."
            />
            <DesignGrid />
            <div className="mt-12 grid gap-8 border-t border-secondary/20 pt-10 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h3 className="text-4xl">Have a design in mind?</h3>
                <p className="mt-2 text-sm text-secondary">
                  Upload a reference to discover artists with a similar hand.
                </p>
              </div>
              <Button asChild variant="inverse" size="editorial">
                <Link href="/designs">
                  <Upload /> Find Artists Like This
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-background px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-[1440px]">
            <SectionHeading
              eyebrow="How the marketplace works"
              title="From inspiration to your next celebration."
            />
            <Reveal variant="none" className="relative">
              <div className="absolute inset-x-0 top-0 h-px bg-border" aria-hidden />
              <div
                className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-foreground transition-transform duration-[1800ms] ease-editorial group-[.is-visible]/reveal:scale-x-100"
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
                      <span className="font-display text-[2.6rem] leading-none text-muted-foreground/35">
                        {step.n}
                      </span>
                      <h3 className="mt-9 font-sans text-[11px] font-bold uppercase tracking-[0.18em]">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-xs leading-6 text-muted-foreground">{step.copy}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="grid bg-secondary lg:grid-cols-2">
          <Reveal variant="mask" className="relative min-h-[420px] md:min-h-[560px]">
            <img
              src={ananya.src}
              alt="Ananya, a Mehndi artist, at work"
              width={912}
              height={1200}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </Reveal>
          <div className="flex items-center px-5 py-20 md:px-16 md:py-28">
            <div>
              <Reveal>
                <Eyebrow>The people behind the art</Eyebrow>
                <h2 className="max-w-xl text-[2.9rem] leading-[0.95] md:text-7xl">
                  Meet the hands behind the art.
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-7 max-w-lg text-[15px] leading-8 text-muted-foreground">
                  Great skill shouldn&apos;t need a storefront to be discovered. Mehndi Connect
                  gives artists a professional identity and customers a trusted way to find them.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <Button asChild variant="editorial" size="editorial" className="mt-9 font-semibold">
                  <Link href="/artists">
                    Meet more artists <ArrowRight />
                  </Link>
                </Button>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-primary px-5 py-32 text-primary-foreground md:px-8 md:py-44">
          <div className="mx-auto max-w-[1440px] text-center">
            <Reveal>
              <ShieldCheck className="mx-auto mb-9 size-7 text-secondary" strokeWidth={1.5} />
              <h2 className="mx-auto max-w-4xl text-[2.9rem] leading-[0.95] tracking-[-0.015em] md:text-7xl lg:text-8xl">
                Find the artist behind your <em>perfect</em> Mehndi.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-8 text-sm font-medium tracking-wide text-secondary">
                From your first search to your next celebration.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <div className="mt-11 flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild variant="inverse" size="editorial" className="font-semibold">
                  <Link href="/artists">
                    Find My Artist <ArrowRight />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="quiet"
                  size="editorial"
                  className="border-secondary/30 font-semibold text-primary-foreground hover:bg-secondary/15 hover:text-primary-foreground"
                >
                  <Link href="/become-an-artist">Become an Artist</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </PublicLayout>
  );
}


export default Index;
