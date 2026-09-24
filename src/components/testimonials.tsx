"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import bridal from "@/assets/design-bridal.jpg";
import arabic from "@/assets/design-arabic.jpg";
import minimal from "@/assets/design-minimal.jpg";

// TODO: replace with real, verified customer testimonials before launch.
// Fields are generic on purpose — swap in real names, photos and quotes
// once review data is available.
const testimonials = [
  {
    quote:
      "The artist turned our mehndi vision into a stunning reality. Her attention to detail, creativity and professionalism made the entire experience seamless and enjoyable.",
    name: "Verified customer",
    city: "Wedding · Mumbai",
    image: bridal,
  },
  {
    quote:
      "From the first sketch to the final stain, everything felt considered. Our guests kept asking who the artist was — booking was effortless.",
    name: "Verified customer",
    city: "Engagement · Andheri",
    image: arabic,
  },
  {
    quote:
      "She understood exactly what I wanted before I could explain it. Punctual, warm, and the design photographed beautifully.",
    name: "Verified customer",
    city: "Festival · Thane",
    image: minimal,
  },
];

const AUTOPLAY_MS = 4000;

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState<"right" | "left">("right");
  const [paused, setPaused] = useState(false);
  const t = testimonials[index]!;

  const go = (d: 1 | -1) => {
    setDir(d === 1 ? "right" : "left");
    setIndex((i) => (i + d + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => go(1), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused]);

  const arrowClass =
    "flex size-9 shrink-0 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/70 transition-all duration-300 hover:border-ivory hover:text-ivory";

  return (
    <section
      className="bg-primary px-5 py-14 text-primary-foreground md:px-8 md:py-16"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto grid max-w-[1240px] gap-8 lg:grid-cols-[0.8fr_1.6fr] lg:items-center">
        <div>
          <p className="mb-4 flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.24em] text-ivory">
            <span className="h-px w-5 bg-current opacity-60" aria-hidden />
            Clients love our work
          </p>
          <h2 className="max-w-sm text-3xl leading-[1.05] md:text-[2.6rem]">
            Trusted by brides and families alike.
          </h2>
          <div className="mt-5 flex gap-1.5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => {
                  setDir(i > index ? "right" : "left");
                  setIndex(i);
                }}
                className={cn(
                  "h-1 rounded-full transition-all duration-500 ease-editorial",
                  i === index
                    ? "w-6 bg-ivory"
                    : "w-2.5 bg-primary-foreground/20 hover:bg-primary-foreground/40",
                )}
              />
            ))}
          </div>
        </div>

        <div className="relative flex items-center gap-3">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className={cn(arrowClass, "hidden lg:flex")}
          >
            <ChevronLeft className="size-4" />
          </button>

          <figure className="w-full overflow-hidden rounded-2xl bg-primary-foreground/[0.05] px-7 py-7 ring-1 ring-primary-foreground/10 md:px-10 md:py-8">
            <div
              key={index}
              className={cn(
                "grid gap-6 md:grid-cols-[1fr_auto] md:items-center",
                dir === "right"
                  ? "animate-[slide-in-right_0.55s_cubic-bezier(0.22,1,0.36,1)_both]"
                  : "animate-[slide-in-left_0.55s_cubic-bezier(0.22,1,0.36,1)_both]",
              )}
            >
              <div>
                <span className="font-display text-4xl leading-none text-ivory" aria-hidden>
                  &ldquo;
                </span>
                <blockquote className="mt-1 font-display text-base leading-relaxed text-primary-foreground/90 md:text-lg">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-2.5">
                  <span className="flex gap-0.5 text-ivory">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} className="size-3 fill-current" />
                    ))}
                  </span>
                  <span className="text-[11px] font-semibold text-primary-foreground/60">
                    Verified booking
                  </span>
                </figcaption>
              </div>
              <div className="flex items-center gap-3 md:flex-col md:justify-center md:gap-2 md:text-center">
                <img
                  src={t.image.src}
                  alt={t.name}
                  width={912}
                  height={1200}
                  loading="lazy"
                  className="size-12 rounded-full object-cover ring-2 ring-ivory/60 md:size-14"
                />
                <div>
                  <p className="text-[13px] font-bold">{t.name}</p>
                  <p className="mt-0.5 text-[11px] text-primary-foreground/55">{t.city}</p>
                </div>
              </div>
            </div>
          </figure>

          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className={cn(arrowClass, "hidden lg:flex")}
          >
            <ChevronRight className="size-4" />
          </button>
        </div>

        <div className="flex gap-2.5 lg:col-start-2 lg:hidden">
          <button type="button" onClick={() => go(-1)} aria-label="Previous testimonial" className={arrowClass}>
            <ChevronLeft className="size-4" />
          </button>
          <button type="button" onClick={() => go(1)} aria-label="Next testimonial" className={arrowClass}>
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
