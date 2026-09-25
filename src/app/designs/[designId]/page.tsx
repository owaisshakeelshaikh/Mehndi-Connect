import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Gauge, Sparkles } from "lucide-react";
import { PublicLayout } from "@/components/site-shell";
import { ArtistCard, artists, DesignGrid, Eyebrow } from "@/components/marketplace";
import { Button } from "@/components/ui/button";
import bridal from "@/assets/design-bridal.jpg";

export const metadata: Metadata = {
  title: "The Bridal Edit — Mehndi Design Inspiration",
  description: "Explore this intricate bridal Mehndi design and find artists who specialise in the style.",
  openGraph: {
    title: "The Bridal Edit — Mehndi Connect",
    description: "A premium bridal Mehndi design with matching artists.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Bridal Edit — Mehndi Connect",
    description: "A premium bridal Mehndi design with matching artists.",
  },
};

function Detail() {
  return (
    <PublicLayout>
      <main>
        <section className="grid bg-primary text-primary-foreground lg:grid-cols-[1.3fr_0.7fr]">
          <img
            src={bridal.src}
            alt="Intricate full-palm bridal Mehndi design"
            width={912}
            height={1200}
            className="max-h-[88vh] h-full w-full object-cover"
          />
          <div className="flex items-end p-6 md:p-12">
            <div>
              <Eyebrow tone="dark">Design no. 024</Eyebrow>
              <h1 className="text-7xl">The Bridal Edit</h1>
              <p className="mt-5 text-sm leading-7 text-primary-foreground/70">
                Dense floral storytelling, architectural bands, and a deep stain—made for a long,
                unhurried bridal sitting.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-5 border-y border-primary-foreground/15 py-6 text-sm text-primary-foreground/80">
                <span>
                  <Sparkles className="mb-2 size-4 text-saffron" />
                  Traditional bridal
                </span>
                <span>
                  <Clock className="mb-2 size-4 text-saffron" />
                  6–8 hours
                </span>
                <span>
                  <Gauge className="mb-2 size-4 text-saffron" />
                  High complexity
                </span>
                <span>Wedding · Full hands</span>
              </div>
              <Button asChild variant="inverse" size="editorial" className="mt-8 font-semibold">
                <Link href="/artists">Find an artist for this design</Link>
              </Button>
            </div>
          </div>
        </section>
        <section className="px-5 py-24 md:px-8">
          <div className="mx-auto max-w-[1440px]">
            <Eyebrow>Created by</Eyebrow>
            <div className="grid gap-10 md:grid-cols-[0.55fr_1fr] md:items-center">
              <ArtistCard artist={artists[0]!} />
              <div>
                <h2 className="text-6xl">Ananya&apos;s signature is detail without noise.</h2>
                <p className="mt-6 max-w-lg leading-8 text-muted-foreground">
                  Her bridal work balances close-set detail with clear visual rhythm, adapting
                  family motifs without losing the client&apos;s own point of view.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-secondary px-5 py-24 md:px-8">
          <div className="mx-auto max-w-[1440px]">
            <Eyebrow>Similar designs</Eyebrow>
            <h2 className="mb-10 text-6xl">Continue the story.</h2>
            <DesignGrid compact />
          </div>
        </section>
      </main>
    </PublicLayout>
  );
}


export default Detail;
