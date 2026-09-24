import Link from "next/link";
import { ArrowRight, BadgeCheck, Heart, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import ananya from "@/assets/artist-ananya.jpg";
import zoya from "@/assets/artist-zoya.jpg";
import meera from "@/assets/artist-meera.jpg";
import bridal from "@/assets/design-bridal.jpg";
import arabic from "@/assets/design-arabic.jpg";
import minimal from "@/assets/design-minimal.jpg";
import festival from "@/assets/design-festival.jpg";

export const artists = [
  {
    name: "Ananya Kulkarni",
    city: "Bandra, Mumbai",
    specialty: "Contemporary Arabic",
    price: "₹4,500+",
    rating: "4.9",
    reviews: "124",
    distance: "2.4 km",
    availability: "Available today",
    image: ananya,
  },
  {
    name: "Zoya Qureshi",
    city: "Andheri, Mumbai",
    specialty: "Bridal & Khafif",
    price: "₹6,200+",
    rating: "5.0",
    reviews: "89",
    distance: "4.1 km",
    availability: "Tomorrow",
    image: zoya,
  },
  {
    name: "Meera Iyer",
    city: "Thane, Mumbai",
    specialty: "Minimalist Fusion",
    price: "₹3,800+",
    rating: "4.8",
    reviews: "210",
    distance: "6.8 km",
    availability: "This weekend",
    image: meera,
  },
];

export const designs = [
  { name: "The Bridal Edit", style: "Bridal", image: bridal },
  { name: "Botanical Flow", style: "Arabic", image: arabic },
  { name: "Quiet Lines", style: "Minimal", image: minimal },
  { name: "Gathered Hands", style: "Festival", image: festival },
];

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.24em] text-gold">
      <span className="h-px w-6 bg-current opacity-60" aria-hidden />
      {children}
    </p>
  );
}

export function ArtistCard({ artist = artists[0]! }: { artist?: (typeof artists)[number] }) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-card shadow-[0_1px_2px_rgba(15,43,32,0.06),0_12px_32px_-12px_rgba(15,43,32,0.18)] ring-1 ring-border transition-all duration-500 ease-editorial hover:-translate-y-1 hover:shadow-[0_1px_2px_rgba(15,43,32,0.08),0_20px_44px_-14px_rgba(15,43,32,0.28)]">
      <Link
        href="/artists/ananya-kulkarni"
        className="relative block aspect-[4/3] overflow-hidden"
      >
        <img
          src={artist.image.src}
          alt={`${artist.name}, Mehndi artist in ${artist.city}`}
          width={912}
          height={1200}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.04]"
        />
        <span className="absolute inset-0 bg-primary/0 transition-colors duration-500 group-hover:bg-primary/15" />
        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-primary-foreground shadow-md">
          <BadgeCheck className="size-3 text-gold" /> Verified
        </span>
        <button
          type="button"
          aria-label={`Save ${artist.name}`}
          className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full bg-card/90 text-foreground shadow-md backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:text-destructive"
        >
          <Heart className="size-4" />
        </button>
        <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-primary/80 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-primary-foreground backdrop-blur-sm">
          {artist.availability}
        </span>
      </Link>
      <div className="p-5 md:p-6">
        <h3 className="font-sans text-lg font-bold tracking-tight">{artist.name}</h3>
        <p className="mt-0.5 text-sm font-medium text-muted-foreground">{artist.specialty}</p>
        <div className="mt-4 flex items-center gap-4 border-t border-border pt-4 text-[13px] font-medium text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Star className="size-4 fill-gold text-gold" />
            <span className="font-bold text-foreground">{artist.rating}</span> ({artist.reviews})
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="size-4" />
            {artist.city}
          </span>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <p className="text-[13px] font-medium text-muted-foreground">
            From{" "}
            <span className="font-sans text-lg font-extrabold tracking-tight text-primary">
              {artist.price}
            </span>
          </p>
          <Link
            href="/artists/ananya-kulkarni"
            className="group/link inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-gold"
          >
            <span className="link-underline">View profile</span>
            <ArrowRight className="size-4 transition-transform duration-300 ease-editorial group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export function DesignGrid({ compact = false }: { compact?: boolean }) {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-12 md:gap-5">
      {designs.map((item, index) => (
        <Reveal
          key={item.name}
          delay={index * 90}
          className={
            compact
              ? "md:col-span-3"
              : index === 0
                ? "md:col-span-5 md:row-span-2"
                : index === 3
                  ? "md:col-span-4"
                  : "md:col-span-3"
          }
        >
          <Link
            href={`/designs/${item.name.toLowerCase().replaceAll(" ", "-")}`}
            className="group relative block h-full overflow-hidden rounded-xl shadow-[0_10px_30px_-12px_rgba(15,43,32,0.25)]"
          >
          <img
            src={item.image.src}
            alt={`${item.style} Mehndi design — ${item.name}`}
            width={912}
            height={1200}
            loading="lazy"
            className={`w-full object-cover transition duration-700 ease-editorial group-hover:scale-[1.04] ${compact ? "aspect-[3/4]" : index === 0 ? "aspect-[4/5] md:aspect-auto md:h-full md:min-h-[460px]" : "aspect-[4/5]"}`}
          />
          <span className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent transition-colors duration-500 group-hover:from-primary/80" />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-3.5 text-primary-foreground md:p-5">
            <div className="translate-y-1 transition-transform duration-500 ease-editorial group-hover:translate-y-0">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold">
                {item.style}
              </span>
              <p className="font-display text-xl leading-tight md:text-2xl">{item.name}</p>
            </div>
            <span className="hidden items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.14em] opacity-0 transition-all duration-500 ease-editorial group-hover:opacity-100 md:flex">
              View design
              <ArrowRight className="size-4 -translate-x-2 transition-transform duration-500 ease-editorial group-hover:translate-x-0" />
            </span>
          </div>
          </Link>
        </Reveal>
      ))}
      {!compact && (
        <Reveal delay={360} className="hidden md:col-span-3 md:block">
          <div className="flex h-full flex-col overflow-hidden rounded-xl bg-primary p-6 text-primary-foreground shadow-[0_10px_30px_-12px_rgba(15,43,32,0.25)]">
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold">
              The archive
            </span>
            <p className="mt-4 font-display text-5xl leading-none">
              300<span className="text-gold">+</span>
            </p>
            <p className="mt-2 text-[13px] leading-6 text-primary-foreground/65">
              designs, and counting — from bridal storytelling to quiet minimal lines.
            </p>
            <div className="mt-5 flex items-center gap-2.5">
              {designs.slice(1).map((d) => (
                <Link
                  key={d.name}
                  href={`/designs/${d.name.toLowerCase().replaceAll(" ", "-")}`}
                  className="group/thumb relative flex-1 overflow-hidden rounded-lg ring-1 ring-primary-foreground/15"
                >
                  <img
                    src={d.image.src}
                    alt={`${d.style} Mehndi design`}
                    width={912}
                    height={1200}
                    loading="lazy"
                    className="aspect-square w-full object-cover transition-transform duration-500 group-hover/thumb:scale-110"
                  />
                  <span className="absolute inset-0 bg-primary/10 transition-colors group-hover/thumb:bg-primary/0" />
                </Link>
              ))}
            </div>
            <p className="mt-3 flex items-center gap-2 text-[11px] font-semibold text-primary-foreground/55">
              <span className="size-1.5 rounded-full bg-gold" aria-hidden />
              24 new designs added this week
            </p>
            <div className="mt-5 flex flex-1 items-end">
              <Button
                asChild
                variant="gold"
                className="w-full text-[10px] font-bold uppercase tracking-[0.16em]"
              >
                <Link href="/designs">View All Designs</Link>
              </Button>
            </div>
          </div>
        </Reveal>
      )}
    </div>
  );
}

export function PageIntro({
  eyebrow,
  title,
  copy,
  image,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  image?: { src: string };
}) {
  return (
    <section className="relative min-h-[64vh] overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0">
        {image && <img src={image.src} alt="" className="h-full w-full object-cover opacity-40" />}
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/40" />
      </div>
      <div className="relative mx-auto flex min-h-[64vh] max-w-[1440px] flex-col justify-end px-5 pb-16 pt-28 md:px-8 md:pb-20">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="max-w-4xl text-6xl leading-[0.9] md:text-8xl">{title}</h1>
        <p className="mt-7 max-w-xl text-sm leading-7 text-primary-foreground/70 md:text-base">
          {copy}
        </p>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  copy,
  action,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-10 md:mb-12">
      <Eyebrow>{eyebrow}</Eyebrow>
      <div className="grid gap-6 md:grid-cols-[1.5fr_1fr] md:items-end">
        <h2 className="max-w-3xl text-[2.75rem] leading-[0.95] md:text-6xl lg:text-7xl">{title}</h2>
        {copy && !action && (
          <p className="max-w-md text-[15px] leading-7 text-muted-foreground md:justify-self-end md:pb-1">
            {copy}
          </p>
        )}
        {action && <div className="md:justify-self-end md:pb-2">{action}</div>}
      </div>
    </div>
  );
}
