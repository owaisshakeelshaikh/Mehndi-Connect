"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function NewsletterForm() {
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <p className="flex h-12 items-center gap-2 text-sm font-semibold text-saffron">
        <Check className="size-4" /> You&apos;re subscribed. Welcome to the family.
      </p>
    );
  }

  return (
    <form
      className="flex w-full max-w-md gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
    >
      <input
        type="email"
        required
        placeholder="Enter your email"
        aria-label="Email address"
        className="h-12 min-w-0 flex-1 rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 px-4 text-sm text-primary-foreground outline-none transition-colors placeholder:text-primary-foreground/50 focus:border-saffron"
      />
      <Button
        type="submit"
        variant="inverse"
        className="h-12 px-6 text-[10px] font-bold uppercase tracking-[0.16em]"
      >
        Subscribe
      </Button>
    </form>
  );
}
