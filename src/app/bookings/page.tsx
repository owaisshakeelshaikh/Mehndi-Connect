'use client';
import { useState } from "react";
import { Check, ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";
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
      <header className="grid grid-cols-[minmax(0,1fr)_auto] items-center border-b border-border px-5 py-4 md:px-8">
        <p className="font-display text-2xl">Mehndi Connect</p>
        <span className="text-xs text-muted-foreground">Protected booking</span>
      </header>
      <div className="h-1 bg-secondary">
        <div
          className="h-full bg-primary transition-all"
          style={{ width: `${(step + 1) * 10}%` }}
        />
      </div>
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-10 md:grid-cols-[1fr_300px] md:px-8 md:py-16">
        <section>
          <p className="text-[10px] uppercase text-muted-foreground">
            Step {step + 1} of 10 · {steps[step]}
          </p>
          <h1 className="mt-4 text-5xl md:text-7xl">
            {step === 9 ? "Your artist is reserved." : `Choose your ${steps[step]!.toLowerCase()}.`}
          </h1>
          <div className="mt-10 min-h-72 border-y border-border py-7">
            {step === 9 ? (
              <div>
                <Check className="mb-6 size-10" />
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
                    className={`border p-5 text-left transition ${i === 0 ? "border-primary bg-secondary" : "border-border hover:bg-secondary"}`}
                  >
                    <span className="block text-xs text-muted-foreground">0{i + 1}</span>
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
        <aside className="h-fit border border-border p-5 md:sticky md:top-8">
          <img
            src={ananya.src}
            alt="Ananya Kulkarni"
            width={912}
            height={1200}
            className="aspect-video w-full object-cover"
          />
          <h2 className="mt-5 font-sans text-lg font-semibold">Ananya Kulkarni</h2>
          <p className="text-sm text-muted-foreground">Bridal & Arabic · Bandra</p>
          <dl className="mt-6 space-y-3 border-y border-border py-5 text-sm">
            <div className="flex justify-between">
              <dt>Service</dt>
              <dd>Bridal signature</dd>
            </div>
            <div className="flex justify-between">
              <dt>Advance</dt>
              <dd>₹2,400</dd>
            </div>
            <div className="flex justify-between">
              <dt>After service</dt>
              <dd>₹9,600</dd>
            </div>
          </dl>
          <p className="mt-5 flex gap-2 text-xs text-muted-foreground">
            <ShieldCheck className="size-4 shrink-0" />
            Booking through Mehndi Connect keeps your booking protected.
          </p>
        </aside>
      </div>
    </main>
  );
}


export default Booking;
