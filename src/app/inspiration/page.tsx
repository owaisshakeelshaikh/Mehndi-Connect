import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PublicLayout } from "@/components/site-shell";
import { designs, Eyebrow, SectionHeading } from "@/components/marketplace";
import { Reveal } from "@/components/reveal";
import hero from "@/assets/mehndi-hero.jpg";

export const metadata: Metadata = {
  title: "Mehndi Inspiration, Artist Stories & City Guides",
  description: "Editorial Mehndi design inspiration, bridal guides, artist stories, and city discovery.",
  openGraph: {
    title: "The Mehndi Connect Journal",
    description: "Stories, designs, and working artists from across India.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Mehndi Connect Journal",
    description: "Stories, designs, and working artists from across India.",
  },
};

function Journal() {
  const stories = [
    "The new language of bridal Mehndi",
    "Inside a home studio in Bandra",
    "A guide to Arabic flow and negative space",
    "The quiet return of the mandala",
  ];
  return (
    <PublicLayout>
      <main>
        <section className="relative min-h-[80vh] bg-primary text-primary-foreground">
          <img
            src={hero.src}
            alt="Mehndi artist at work for the featured story"
            width={1920}
            height={1280}
            className="absolute inset-0 h-full w-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-primary/30" />
          <div className="relative mx-auto flex min-h-[80vh] max-w-[1440px] flex-col justify-end px-5 pb-16 md:px-8">
            <Eyebrow>Featured story · Craft</Eyebrow>
            <h1 className="max-w-4xl text-7xl leading-[0.9] md:text-9xl">
              The hands shaping a <em className="text-gold">modern tradition.</em>
            </h1>
            <Link
              href="/about"
              className="group mt-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gold"
            >
              <span className="link-underline">Read the story</span>
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </section>
        <section className="px-5 py-24 md:px-8">
          <div className="mx-auto max-w-[1440px]">
            <SectionHeading eyebrow="Latest" title="Stories worth keeping." />
            <div className="grid gap-12 md:grid-cols-2">
              {stories.map((story, i) => (
                <Reveal
                  key={story}
                  delay={i * 100}
                  className={i % 2 ? "md:mt-20" : ""}
                >
                  <article className="group">
                    <div className="overflow-hidden rounded-2xl shadow-[0_16px_44px_-18px_rgba(15,43,32,0.3)]">
                      <img
                        src={designs[i]!.image.src}
                        alt={story}
                        width={912}
                        height={1200}
                        loading="lazy"
                        className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.04]"
                      />
                    </div>
                    <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
                      {["Bridal guide", "Artist story", "Design literacy", "Inspiration"][i]}
                    </p>
                    <h2 className="mt-2 text-4xl leading-tight">{story}</h2>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      A closer look at the artists, references, and changing visual culture behind
                      the work.
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-secondary px-5 py-24 md:px-8">
          <div className="mx-auto max-w-[1440px]">
            <SectionHeading eyebrow="City guides" title="Find the work around you." />
            <div className="divide-y divide-border rounded-2xl bg-card px-6 ring-1 ring-border md:px-8">
              {[
                "Best Mehndi Artists in Mumbai",
                "Bridal Mehndi Artists in Andheri",
                "Arabic Mehndi Artists in Mumbai",
                "Mehndi Artists in Thane",
              ].map((x) => (
                <Link
                  key={x}
                  href="/artists"
                  className="group flex items-center justify-between py-6 font-display text-2xl transition-colors hover:text-pine md:text-3xl"
                >
                  {x}
                  <ArrowRight className="size-5 text-gold transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PublicLayout>
  );
}


export default Journal;
