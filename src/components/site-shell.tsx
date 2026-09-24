"use client";

import Link from "next/link";
import {
  Menu,
  X,
  ArrowRight,
  Instagram,
  Facebook,
  Flower2,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
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

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="flex min-w-0 shrink-0 items-center gap-2.5">
      <span className="flex size-9 items-center justify-center rounded-lg border border-ivory/40 bg-ivory/10 text-ivory">
        <Flower2 className="size-4.5" strokeWidth={1.75} />
      </span>
      <span className="leading-none">
        <span className="block font-sans text-[15px] font-extrabold tracking-[0.16em]">
          MEHNDI
        </span>
        <span
          className={cn(
            "block font-sans font-semibold tracking-[0.34em] text-ivory",
            compact ? "text-[8px]" : "text-[9px]",
          )}
        >
          CONNECT
        </span>
      </span>
    </Link>
  );
}

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const floating = !scrolled && !open;

  return (
    <header
      className={cn(
        "z-50 overflow-hidden border text-primary-foreground transition-all duration-500 ease-editorial",
        overlay ? "fixed" : "sticky",
        floating
          ? cn(
              "inset-x-3 top-3 rounded-2xl md:inset-x-6 md:top-4",
              overlay
                ? "border-transparent bg-transparent"
                : "border-ivory/15 bg-primary/85 backdrop-blur-md",
            )
          : "inset-x-0 top-0 rounded-b-2xl border-x-0 border-t-0 border-b border-ivory/15 bg-primary/95 backdrop-blur-xl",
      )}
    >
      <div
        className={cn(
          "mx-auto grid max-w-[1440px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 transition-all duration-500 ease-editorial sm:flex sm:px-8",
          floating ? "h-16 md:h-[4.5rem]" : "h-14",
        )}
      >
        <Logo />
        <nav className="mx-auto hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {nav.map(([label, to]) => (
            <Link
              key={to}
              href={to}
              className="link-underline text-[10px] font-bold uppercase tracking-[0.2em] text-primary-foreground/80 transition-colors duration-300 hover:text-ivory"
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2 sm:gap-4">
          <Link
            href="/account"
            className="link-underline hidden text-[10px] font-bold uppercase tracking-[0.2em] text-primary-foreground/80 transition-colors hover:text-ivory xl:block"
          >
            Sign in
          </Link>
          <Button
            asChild
            variant="inverse"
            size="sm"
            className="hidden h-9 px-4 text-[10px] font-bold uppercase tracking-[0.16em] md:inline-flex"
          >
            <Link href="/bookings">Book an Artist</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-ivory/15 hover:text-ivory lg:hidden"
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
          "grid overflow-hidden border-ivory/15 bg-primary/95 backdrop-blur-xl transition-all duration-500 ease-editorial lg:hidden",
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
                "block border-b border-primary-foreground/10 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] transition-all duration-300",
                open ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0",
              )}
            >
              {label}
            </Link>
          ))}
          <div className="flex gap-3 border-b border-primary-foreground/10 py-4">
            <Button asChild variant="inverse" size="sm" className="flex-1 font-semibold">
              <Link href="/bookings" onClick={() => setOpen(false)}>
                Book an Artist
              </Link>
            </Button>
            <Button
              asChild
              variant="outline-light"
              size="sm"
              className="flex-1 font-semibold"
            >
              <Link href="/become-an-artist" onClick={() => setOpen(false)}>
                Earn as Artist
              </Link>
            </Button>
          </div>
          <Link
            href="/account"
            onClick={() => setOpen(false)}
            className="block py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-primary-foreground/80"
          >
            My Account
          </Link>
        </div>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  const groups: [string, (string | [string, string])[]][] = [
    [
      "Quick Links",
      [
        ["Home", "/"],
        ["Find Artists", "/artists"],
        ["Explore Designs", "/designs"],
        ["About Us", "/about"],
      ],
    ],
    [
      "Services",
      [
        ["Bridal Mehndi", "/designs"],
        ["Book an Artist", "/bookings"],
        ["Become an Artist", "/become-an-artist"],
        ["How It Works", "/how-it-works"],
      ],
    ],
    [
      "Resources",
      [
        ["Inspiration Journal", "/inspiration"],
        ["Artist Dashboard", "/dashboard"],
        ["My Account", "/account"],
        ["Trust & Safety", "/how-it-works"],
      ],
    ],
  ];
  return (
    <footer className="border-t border-ivory/15 bg-primary px-5 pb-28 pt-16 text-primary-foreground md:px-8 md:pb-8">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-12 border-b border-primary-foreground/10 pb-12 lg:grid-cols-[1.1fr_2fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-6 text-primary-foreground/65">
              India&apos;s marketplace for Mehndi artists. Every hand has a story — we&apos;re here
              to help it be discovered.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex size-9 items-center justify-center rounded-full border border-primary-foreground/15 text-primary-foreground/70 transition-colors hover:border-ivory hover:text-ivory"
                >
                  <Icon className="size-4" />
                </a>
              ))}
              <a
                href="#"
                aria-label="Pinterest"
                className="flex size-9 items-center justify-center rounded-full border border-primary-foreground/15 text-[10px] font-bold text-primary-foreground/70 transition-colors hover:border-ivory hover:text-ivory"
              >
                Pi
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            {groups.map(([title, items]) => (
              <div key={title}>
                <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.22em] text-ivory">
                  {title}
                </p>
                <ul className="space-y-3 text-sm text-primary-foreground/70">
                  {items.map((item) =>
                    Array.isArray(item) ? (
                      <li key={item[0]}>
                        <Link
                          href={item[1] as "/dashboard"}
                          className="transition-colors hover:text-ivory"
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
            <div>
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.22em] text-ivory">
                Contact Us
              </p>
              <ul className="space-y-4 text-sm text-primary-foreground/70">
                <li className="flex gap-2.5">
                  <MapPin className="mt-0.5 size-3.5 shrink-0 text-ivory" />
                  Bandra West, Mumbai 400050
                </li>
                <li className="flex gap-2.5">
                  <Phone className="mt-0.5 size-3.5 shrink-0 text-ivory" />
                  +91 98200 12345
                </li>
                <li className="flex gap-2.5">
                  <Mail className="mt-0.5 size-3.5 shrink-0 text-ivory" />
                  hello@mehndiconnect.in
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 pt-7 text-xs text-primary-foreground/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Mehndi Connect · Privacy · Terms · Cancellation Policy</p>
          <p className="text-[10px] uppercase tracking-[0.2em]">
            Crafted with care in Mumbai
          </p>
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
        variant="gold"
        size="editorial"
        className="w-full font-semibold uppercase tracking-[0.12em] shadow-2xl shadow-primary/40"
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
