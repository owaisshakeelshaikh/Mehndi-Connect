import type { Metadata } from "next";
import { Heart, RotateCcw, ShieldCheck } from "lucide-react";
import { DashboardShell, Metric } from "@/components/dashboard-shell";
import { Button } from "@/components/ui/button";
import ananya from "@/assets/artist-ananya.jpg";

export const metadata: Metadata = {
  title: "My Account — Mehndi Connect",
  description: "Manage upcoming bookings, favourite artists, saved designs, reviews, rewards, and rebooking.",
  openGraph: {
    title: "My Mehndi Connect Account",
    description: "Your bookings, artists, and designs in one place.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Mehndi Connect Account",
    description: "Your bookings, artists, and designs in one place.",
  },
};

function Account() {
  return (
    <DashboardShell
      title="Good morning, Rhea."
      subtitle="Customer account"
      nav={[
        "Overview",
        "Upcoming Booking",
        "Past Bookings",
        "My Artists",
        "Saved Designs",
        "Messages",
        "Reviews",
        "Rewards",
        "Profile",
      ]}
    >
      <div className="grid gap-6 md:grid-cols-3">
        <Metric label="Upcoming" value="01" note="Ananya · 24 September" />
        <Metric label="Saved designs" value="18" note="4 new similar looks" />
        <Metric label="Reward balance" value="₹850" note="Use on your next booking" />
      </div>
      <section className="mt-12 grid gap-6 rounded-2xl bg-primary p-6 text-primary-foreground shadow-[0_20px_50px_-20px_rgba(15,43,32,0.4)] md:grid-cols-[180px_1fr_auto] md:items-center md:p-8">
        <img
          src={ananya.src}
          alt="Ananya Kulkarni"
          width={912}
          height={1200}
          className="aspect-square w-full rounded-xl object-cover"
        />
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
            Upcoming booking
          </p>
          <h2 className="mt-2 text-4xl">Bridal session with Ananya</h2>
          <p className="mt-2 text-sm text-primary-foreground/70">
            24 September · 4:00 PM · Bandra West
          </p>
          <p className="mt-5 flex gap-2 text-xs text-primary-foreground/70">
            <ShieldCheck className="size-4 text-gold" />
            Protected booking · ₹2,400 advance paid
          </p>
        </div>
        <Button variant="gold" className="font-semibold">View details</Button>
      </section>
      <section className="mt-14">
        <p className="text-[10px] uppercase text-muted-foreground">Retention, built on trust</p>
        <h2 className="mt-2 text-5xl">My Artists</h2>
        <div className="mt-7 grid gap-5 border-y border-border py-6 md:grid-cols-[100px_1fr_auto] md:items-center">
          <img
            src={ananya.src}
            alt="Ananya"
            width={912}
            height={1200}
            loading="lazy"
            className="aspect-square w-24 object-cover"
          />
          <div>
            <h3 className="font-sans text-lg font-semibold">Ananya Kulkarni</h3>
            <p className="text-sm text-muted-foreground">Last booked: 12 Sept · Bridal signature</p>
          </div>
          <Button variant="editorial">
            <RotateCcw />
            Rebook
          </Button>
        </div>
      </section>
      <section className="mt-14">
        <p className="flex items-center gap-2 text-sm">
          <Heart />
          Love your Mehndi? Book Ananya again with your previous details already remembered.
        </p>
      </section>
    </DashboardShell>
  );
}


export default Account;
