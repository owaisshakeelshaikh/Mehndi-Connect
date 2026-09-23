import Link from "next/link";
import { ArrowRight, BadgeCheck, CreditCard, Headphones, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow, PageIntro, SectionHeading } from "@/components/marketplace";
import { PublicLayout } from "@/components/site-shell";
import hero from "@/assets/mehndi-hero.jpg";
import artist from "@/assets/artist-meera.jpg";

type Chapter = { number: string; title: string; copy: string };

export function EditorialPage({
  eyebrow,
  title,
  copy,
  chapters,
  mode = "process",
  finalTitle,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  chapters: Chapter[];
  mode?: "process" | "artist" | "story";
  finalTitle: string;
}) {
  return (
    <PublicLayout>
      <main>
        <PageIntro
          eyebrow={eyebrow}
          title={title}
          copy={copy}
          image={mode === "artist" ? artist : hero}
        />
        <section className="px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-[1440px]">
            <SectionHeading
              eyebrow={mode === "story" ? "Why we exist" : "The journey"}
              title={
                mode === "artist"
                  ? "Your craft, made visible."
                  : mode === "story"
                    ? "Skill should be enough to begin."
                    : "Clear at every step."
              }
              copy={
                mode === "artist"
                  ? "Build a professional identity without needing a storefront, a marketing team, or a large investment."
                  : "Every interaction is designed around transparency, care, and trust."
              }
            />
            <div className="grid border-l border-t border-border md:grid-cols-3">
              {chapters.map((c) => (
                <article
                  key={c.number}
                  className="min-h-64 border-b border-r border-border p-7 md:p-10"
                >
                  <span className="font-display text-5xl text-muted-foreground/30">{c.number}</span>
                  <h3 className="mt-12 font-sans text-lg font-semibold">{c.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{c.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="grid bg-secondary lg:grid-cols-2">
          <img
            src={artist.src}
            alt="A professional Mehndi artist working with a customer"
            width={912}
            height={1200}
            loading="lazy"
            className="h-full max-h-[720px] w-full object-cover"
          />
          <div className="flex items-center px-5 py-20 md:px-16">
            <div>
              <Eyebrow>
                {mode === "artist" ? "Built for independent artists" : "Platform protection"}
              </Eyebrow>
              <h2 className="max-w-xl text-6xl leading-none">
                {mode === "artist"
                  ? "A livelihood should not require a storefront."
                  : "Stay for the value, not the restriction."}
              </h2>
              <p className="mt-7 max-w-lg leading-8 text-muted-foreground">
                {mode === "artist"
                  ? "Profile, portfolio, calendar, trusted payments, customer reviews, and repeat bookings—together in one professional home."
                  : "Booking history, secure payment, customer support, cancellation protection, rewards, reviews, and one-click rebooking keep every celebration easier."}
              </p>
              <div className="mt-8 flex flex-wrap gap-5 text-xs">
                <span className="flex gap-2">
                  <BadgeCheck />
                  Verified artists
                </span>
                <span className="flex gap-2">
                  <CreditCard />
                  Secure payments
                </span>
                <span className="flex gap-2">
                  <Headphones />
                  Human support
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-primary px-5 py-28 text-primary-foreground md:px-8 md:py-36">
          <div className="mx-auto max-w-[1440px] text-center">
            <ShieldCheck className="mx-auto mb-7 text-secondary" />
            <h2 className="mx-auto max-w-4xl text-6xl leading-none md:text-8xl">{finalTitle}</h2>
            <Button asChild variant="inverse" size="editorial" className="mt-10">
              <Link href={mode === "artist" ? "/dashboard" : "/artists"}>
                {mode === "artist" ? "Create Your Artist Profile" : "Find My Artist"}
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </PublicLayout>
  );
}
