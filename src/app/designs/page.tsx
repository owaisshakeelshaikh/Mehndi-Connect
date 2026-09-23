import type { Metadata } from "next";
import { Upload } from "lucide-react";
import { PublicLayout } from "@/components/site-shell";
import { DesignGrid, designs, Eyebrow, SectionHeading } from "@/components/marketplace";
import { Button } from "@/components/ui/button";
import festival from "@/assets/design-festival.jpg";

export const metadata: Metadata = {
  title: "Explore Mehndi Designs — Mehndi Connect",
  description: "Explore bridal, Arabic, mandala, minimal, traditional, and festival Mehndi designs.",
  openGraph: {
    title: "Find Your Mehndi — Mehndi Connect",
    description: "An editorial archive of Mehndi design inspiration.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Find Your Mehndi — Mehndi Connect",
    description: "An editorial archive of Mehndi design inspiration.",
  },
};

function Designs() {
  return (
    <PublicLayout>
      <main>
        <section className="grid min-h-[78vh] bg-primary text-primary-foreground lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col justify-end p-6 pb-16 md:p-14">
            <Eyebrow>The living archive</Eyebrow>
            <h1 className="text-7xl leading-[0.85] md:text-9xl">
              Find Your
              <br />
              <em>Mehndi.</em>
            </h1>
            <p className="mt-7 max-w-md text-sm leading-7 text-secondary">
              Start with a line, a motif, or a feeling. Then discover the artist who can make it
              yours.
            </p>
          </div>
          <img
            src={festival.src}
            alt="Festival Mehndi designs on varied hands"
            width={912}
            height={1200}
            className="h-full max-h-[78vh] w-full object-cover"
          />
        </section>
        <section className="px-5 py-24 md:px-8">
          <div className="mx-auto max-w-[1440px]">
            <SectionHeading eyebrow="Style explorer" title="A language for every hand." />
            <div className="no-scrollbar flex gap-3 overflow-x-auto pb-4">
              {[
                "Bridal",
                "Arabic",
                "Mandala",
                "Minimal",
                "Traditional",
                "Pakistani",
                "Rajasthani",
                "Indo-Western",
                "Festival",
                "Kids",
              ].map((x) => (
                <Button key={x} variant="quiet" className="shrink-0">
                  {x}
                </Button>
              ))}
            </div>
            <div className="mt-14">
              <DesignGrid />
            </div>
          </div>
        </section>
        <section className="bg-secondary px-5 py-24 md:px-8">
          <div className="mx-auto max-w-[1440px]">
            <SectionHeading eyebrow="Design by occasion" title="Made for the moment." />
            <div className="grid grid-cols-2 border-l border-t border-border md:grid-cols-4">
              {[
                "Wedding",
                "Engagement",
                "Eid",
                "Diwali",
                "Karwa Chauth",
                "Teej",
                "Festivals",
                "Party",
              ].map((x, i) => (
                <div key={x} className="border-b border-r border-border p-6 md:p-10">
                  <span className="text-[10px] text-muted-foreground">0{i + 1}</span>
                  <h3 className="mt-8 font-sans text-base font-semibold">{x}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-primary px-5 py-24 text-primary-foreground md:px-8">
          <div className="mx-auto grid max-w-[1440px] gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <Eyebrow>Visual matching</Eyebrow>
              <h2 className="text-6xl">Have a reference?</h2>
              <p className="mt-3 text-secondary">
                Upload it and find artists whose portfolios speak the same visual language.
              </p>
            </div>
            <Button variant="inverse" size="editorial">
              <Upload />
              Find Artists Like This
            </Button>
          </div>
        </section>
        <section className="px-5 py-24 md:px-8">
          <article className="mx-auto max-w-4xl">
            <Eyebrow>Popular Mehndi designs in India</Eyebrow>
            <h2 className="text-5xl">Craft, occasion, and a changing visual culture.</h2>
            <p className="mt-7 text-base leading-8 text-muted-foreground">
              India&apos;s Mehndi traditions are wonderfully plural—from dense bridal storytelling
              and Rajasthani portraiture to spacious Arabic florals, Khafif detail, mandalas, and
              new minimal forms. Our archive connects inspiration back to the working artists and
              cities behind it.
            </p>
          </article>
        </section>
      </main>
    </PublicLayout>
  );
}


export default Designs;
