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
    <p className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
      <span className="h-px w-6 bg-current opacity-50" aria-hidden />
      {children}
    </p>
  );
}

export function ArtistCard({ artist = artists[0]! }: { artist?: (typeof artists)[number] }) {
  return (
    <article className="group transition-transform duration-500 ease-editorial hover:-translate-y-1.5">
      <Link
        href="/artists/ananya-kulkarni"
        className="relative block aspect-[4/5] overflow-hidden rounded-md bg-secondary"
      >
        <img
          src={artist.image.src}
          alt={`${artist.name}, Mehndi artist in ${artist.city}`}
          width={912}
          height={1200}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.05]"
        />
        <span className="absolute inset-0 bg-primary/0 transition-colors duration-500 group-hover:bg-primary/15" />
        <Button
          variant="inverse"
          size="icon"
          className="absolute right-3 top-3 opacity-0 transition-all duration-300 group-hover:opacity-100"
          aria-label={`Save ${artist.name}`}
        >
          <Heart />
        </Button>
        <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-sm bg-background/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-foreground backdrop-blur-sm">
          <BadgeCheck className="size-3" /> Verified
        </span>
        <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-sm bg-primary/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-primary-foreground backdrop-blur-sm">
          {artist.availability}
        </span>
      </Link>
      <div className="pt-5">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
          <div className="min-w-0">
            <h3 className="truncate font-sans text-[1.05rem] font-bold tracking-tight">
              {artist.name}
            </h3>
            <p className="mt-0.5 truncate text-[13px] font-medium text-muted-foreground">
              {artist.specialty}
            </p>
          </div>
          <p className="pt-0.5 text-sm font-bold tracking-tight">{artist.price}</p>
        </div>
        <div className="mt-4 flex items-center justify-between border-y border-border py-3 text-xs font-medium text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <MapPin className="size-3.5" />
            {artist.city}
          </span>
          <span className="flex items-center gap-1.5">
            <Star className="size-3.5 fill-current text-foreground" />
            <span className="font-bold text-foreground">{artist.rating}</span> ({artist.reviews})
          </span>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs font-medium text-muted-foreground">
            {artist.distance} away · Home visit
          </span>
          <Link
            href="/artists/ananya-kulkarni"
            className="group/link inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.14em]"
          >
            <span className="link-underline">View profile</span>
            <ArrowRight className="size-3.5 transition-transform duration-300 ease-editorial group-hover/link:translate-x-1" />
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
            className="group relative block h-full overflow-hidden rounded-sm"
          >
          <img
            src={item.image.src}
            alt={`${item.style} Mehndi design — ${item.name}`}
            width={912}
            height={1200}
            loading="lazy"
            className={`w-full object-cover transition duration-700 ease-editorial group-hover:scale-[1.05] ${compact ? "aspect-[3/4]" : index === 0 ? "h-full min-h-[460px]" : "aspect-[4/5]"}`}
          />
          <span className="absolute inset-0 bg-primary/0 transition-colors duration-500 group-hover:bg-primary/30" />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 text-primary-foreground md:p-5">
            <div className="translate-y-1 transition-transform duration-500 ease-editorial group-hover:translate-y-0">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-secondary">
                {item.style}
              </span>
              <p className="font-display text-2xl leading-tight">{item.name}</p>
            </div>
            <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.14em] opacity-0 transition-all duration-500 ease-editorial group-hover:opacity-100">
              View design
              <ArrowRight className="size-4 -translate-x-2 transition-transform duration-500 ease-editorial group-hover:translate-x-0" />
            </span>
          </div>
          </Link>
        </Reveal>
      ))}
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
        <div className="absolute inset-0 bg-primary/45" />
      </div>
      <div className="relative mx-auto flex min-h-[64vh] max-w-[1440px] flex-col justify-end px-5 pb-16 pt-28 md:px-8 md:pb-20">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="max-w-4xl text-6xl leading-[0.9] md:text-8xl">{title}</h1>
        <p className="mt-7 max-w-xl text-sm leading-7 text-secondary md:text-base">{copy}</p>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="mb-12 md:mb-16">
      <Eyebrow>{eyebrow}</Eyebrow>
      <div className="grid gap-6 md:grid-cols-[1.5fr_1fr] md:items-end">
        <h2 className="max-w-3xl text-[2.75rem] leading-[0.95] md:text-6xl lg:text-7xl">{title}</h2>
        {copy && (
          <p className="max-w-md text-sm leading-7 text-muted-foreground md:justify-self-end md:pb-1">
            {copy}
          </p>
        )}
      </div>
    </div>
  );
}
