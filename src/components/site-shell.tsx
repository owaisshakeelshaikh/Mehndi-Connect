"use client";

import Link from "next/link";
import { Menu, X, Search, MapPin, ArrowRight, Instagram, Facebook } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const nav = [
  ["Find Artists", "/artists"],
  ["Explore Designs", "/designs"],
  ["How It Works", "/how-it-works"],
  ["For Artists", "/become-an-artist"],
  ["Inspiration", "/inspiration"],
] as const;

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!overlay) return;
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overlay]);

  const solid = !overlay || scrolled || open;

  return (
    <header
      className={cn(
        "inset-x-0 top-0 z-50 border-b text-primary-foreground transition-all duration-500 ease-editorial",
        overlay ? "fixed" : "sticky",
        solid
          ? "border-secondary/15 bg-primary/90 backdrop-blur-xl"
          : "border-transparent bg-transparent",
      )}
    >
      <div
        className={cn(
          "mx-auto grid max-w-[1440px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 transition-all duration-500 ease-editorial sm:flex sm:px-8",
          solid ? "h-14" : "h-16 md:h-[4.5rem]",
        )}
      >
        <Link href="/" className="min-w-0 shrink-0 font-display text-[1.55rem] leading-none tracking-tight">
          Mehndi Connect
        </Link>
        <nav className="mx-auto hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {nav.map(([label, to]) => (
            <Link
              key={to}
              href={to}
              className="link-underline text-[11px] font-semibold uppercase tracking-[0.14em] text-secondary transition-colors duration-300 hover:text-primary-foreground"
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-1 sm:gap-3">
          <Button variant="ghost" size="icon" aria-label="Search" className="hover:bg-secondary/10 hover:text-primary-foreground">
            <Search />
          </Button>
          <Link
            href="/artists"
            className="hidden items-center gap-1.5 text-xs font-medium text-secondary transition-colors hover:text-primary-foreground xl:flex"
          >
            <MapPin className="size-3.5" /> Mumbai
          </Link>
          <Link
            href="/account"
            className="link-underline hidden text-xs font-medium text-secondary transition-colors hover:text-primary-foreground sm:block"
          >
            Sign in
          </Link>
          <Button
            asChild
            variant="quiet"
            size="sm"
            className="hidden border-secondary/30 font-semibold text-primary-foreground hover:bg-secondary/15 hover:text-primary-foreground md:inline-flex"
          >
            <Link href="/become-an-artist">Earn as Artist</Link>
          </Button>
          <Button asChild variant="inverse" size="sm" className="hidden font-semibold md:inline-flex">
            <Link href="/bookings">Book an Artist</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-secondary/10 hover:text-primary-foreground lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      <nav
        aria-label="Mobile navigation"
        className={cn(
          "grid overflow-hidden border-secondary/15 bg-primary/95 backdrop-blur-xl transition-all duration-500 ease-editorial lg:hidden",
          open ? "grid-rows-[1fr] border-t" : "grid-rows-[0fr]",
        )}
      >
        <div className="min-h-0 overflow-hidden px-4">
          {nav.map(([label, to], i) => (
            <Link
              key={to}
              href={to}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
              className={cn(
                "block border-b border-secondary/10 py-3.5 text-sm font-medium transition-all duration-300",
                open ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0",
              )}
            >
              {label}
            </Link>
          ))}
          <div className="flex gap-3 border-b border-secondary/10 py-4">
            <Button asChild variant="inverse" size="sm" className="flex-1 font-semibold">
              <Link href="/bookings" onClick={() => setOpen(false)}>
                Book an Artist
              </Link>
            </Button>
            <Button
              asChild
              variant="quiet"
              size="sm"
              className="flex-1 border-secondary/30 font-semibold text-primary-foreground"
            >
              <Link href="/become-an-artist" onClick={() => setOpen(false)}>
                Earn as Artist
              </Link>
            </Button>
          </div>
          <Link
            href="/account"
            onClick={() => setOpen(false)}
            className="block py-3.5 text-sm font-medium"
          >
            My Account
          </Link>
        </div>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  const groups = [
    ["Discover", ["Find Artists", "Designs", "Categories", "Locations"]],
    [
      "For Artists",
      [
        ["Become an Artist", "/become-an-artist"],
        ["Artist Benefits", "/become-an-artist"],
        ["Artist Help", "/how-it-works"],
        ["Dashboard", "/dashboard"],
      ],
    ],
    ["Company", ["About", "Our Story", "Contact", "Trust & Safety"]],
    ["Resources", ["Blog", "Mehndi Guides", "Design Inspiration", "FAQs"]],
  ];
  return (
    <footer className="border-t border-secondary/15 bg-primary px-5 pb-28 pt-20 text-primary-foreground md:px-8 md:pb-10">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-14 border-b border-secondary/15 pb-16 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <p className="font-display text-5xl">Mehndi Connect</p>
            <p className="mt-5 max-w-sm text-sm leading-7 text-secondary">
              India&apos;s marketplace for Mehndi artists. Every hand has a story. We&apos;re here
              to help it be discovered.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {groups.map(([title, items]) => (
              <div key={title as string}>
                <p className="mb-5 text-[10px] uppercase text-secondary">{title}</p>
                <ul className="space-y-3 text-sm">
                  {(items as (string | [string, string])[]).map((item) =>
                    Array.isArray(item) ? (
                      <li key={item[0]}>
                        <Link
                          href={item[1] as "/dashboard"}
                          className="transition-colors hover:text-primary-foreground"
                        >
                          {item[0]}
                        </Link>
                      </li>
                    ) : (
                      <li key={item}>{item}</li>
                    ),
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5 pt-8 text-xs text-secondary sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Mehndi Connect · Privacy · Terms · Cancellation Policy</p>
          <div className="flex gap-4">
            <Instagram className="size-4" />
            <Facebook className="size-4" />
            <span>Pinterest</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function MobileCta() {
  return (
    <div className="fixed inset-x-4 bottom-4 z-40 md:hidden">
      <Button
        asChild
        variant="inverse"
        size="editorial"
        className="w-full font-semibold shadow-2xl shadow-primary/40"
      >
        <Link href="/artists">
          Find My Artist <ArrowRight />
        </Link>
      </Button>
    </div>
  );
}

export function PublicLayout({
  children,
  overlayNav = false,
}: {
  children: React.ReactNode;
  overlayNav?: boolean;
}) {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader overlay={overlayNav} />
      {children}
      <SiteFooter />
      <MobileCta />
    </div>
  );
}
