'use client';
import { useState } from "react";
import Link from "next/link";
import { Check, ChevronLeft, ChevronRight, Flower2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import ananya from "@/assets/artist-ananya.jpg";

const steps = [
  "Service",
  "Style",
  "Date",
  "Time",
  "Location",
  "Design",
  "Artist",
  "Addons",
  "Payment",
  "Confirmation",
];

function Booking() {
  const [step, setStep] = useState(0);
  return (
    <main className="min-h-screen bg-background">
      <header className="grid grid-cols-[minmax(0,1fr)_auto] items-center border-b border-border bg-primary px-5 py-4 text-primary-foreground md:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex size-8 items-center justify-center rounded-lg border border-ivory/40 bg-ivory/10 text-ivory">
            <Flower2 className="size-4" strokeWidth={1.75} />
          </span>
          <span className="leading-none">
            <span className="block font-sans text-sm font-extrabold tracking-[0.16em]">MEHNDI</span>
            <span className="block font-sans text-[8px] font-semibold tracking-[0.34em] text-ivory">
              CONNECT
            </span>
          </span>
        </Link>
        <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-primary-foreground/70">
          <ShieldCheck className="size-4 text-ivory" /> Protected booking
        </span>
      </header>
      <div className="h-1 bg-secondary">
        <div
          className="h-full bg-gold transition-all"
          style={{ width: `${(step + 1) * 10}%` }}
        />
      </div>
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-10 md:grid-cols-[1fr_300px] md:px-8 md:py-16">
        <section>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
            Step {step + 1} of 10 · {steps[step]}
          </p>
          <h1 className="mt-4 text-5xl md:text-7xl">
            {step === 9 ? "Your artist is reserved." : `Choose your ${steps[step]!.toLowerCase()}.`}
          </h1>
          <div className="mt-10 min-h-72 border-y border-border py-7">
            {step === 9 ? (
              <div>
                <span className="mb-6 flex size-14 items-center justify-center rounded-full bg-primary text-ivory">
                  <Check className="size-7" />
                </span>
                <p className="text-lg">
                  Ananya has received your request for 24 September at 4:00 PM.
                </p>
                <p className="mt-3 text-sm text-muted-foreground">
                  Your booking remains protected through Mehndi Connect. We&apos;ll keep every
                  detail and payment update here.
                </p>
              </div>
            ) : (
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  `${steps[step]} option 01`,
                  `${steps[step]} option 02`,
                  `${steps[step]} option 03`,
                  "I’ll decide with the artist",
                ].map((x, i) => (
                  <button
                    key={x}
                    className={`rounded-xl border p-5 text-left transition ${i === 0 ? "border-primary bg-gold/15" : "border-border bg-card hover:bg-secondary"}`}
                  >
                    <span className="block text-xs font-bold text-gold">0{i + 1}</span>
                    <strong className="mt-6 block">
                      {step === 0
                        ? [
                            "Bridal signature · ₹12,000",
                            "Guest Mehndi · ₹4,500",
                            "Arabic edit · ₹2,800",
                            "Custom consultation",
                          ][i]
                        : x}
                    </strong>
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="mt-8 flex justify-between">
            <Button
              variant="quiet"
              disabled={step === 0}
              onClick={() => setStep((s) => Math.max(0, s - 1))}
            >
              <ChevronLeft />
              Back
            </Button>
            <Button variant="editorial" onClick={() => setStep((s) => Math.min(9, s + 1))}>
              {step === 8 ? "Pay ₹2,400" : step === 9 ? "View booking" : "Continue"}
              <ChevronRight />
            </Button>
          </div>
        </section>
        <aside className="h-fit rounded-2xl bg-card p-5 ring-1 ring-border shadow-[0_20px_50px_-20px_rgba(17,18,13,0.25)] md:sticky md:top-8">
          <img
            src={ananya.src}
            alt="Ananya Kulkarni"
            width={912}
            height={1200}
            className="aspect-video w-full rounded-xl object-cover"
          />
          <h2 className="mt-5 font-sans text-lg font-semibold">Ananya Kulkarni</h2>
          <p className="text-sm text-muted-foreground">Bridal &amp; Arabic · Bandra</p>
          <dl className="mt-6 space-y-3 border-y border-border py-5 text-sm">
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Service</dt>
              <dd className="font-semibold">Bridal signature</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Advance</dt>
              <dd className="font-semibold text-primary">₹2,400</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground">After service</dt>
              <dd className="font-semibold">₹9,600</dd>
            </div>
          </dl>
          <p className="mt-5 flex gap-2 text-xs text-muted-foreground">
            <ShieldCheck className="size-4 shrink-0 text-gold" />
            Booking through Mehndi Connect keeps your booking protected.
          </p>
        </aside>
      </div>
    </main>
  );
}


export default Booking;
