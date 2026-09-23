import type { Metadata } from "next";
import { Check, X } from "lucide-react";
import { DashboardShell, Metric } from "@/components/dashboard-shell";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Artist Dashboard — Mehndi Connect",
  description: "Manage Mehndi bookings, availability, earnings, portfolio, services, customers, and reviews.",
  openGraph: {
    title: "Mehndi Connect Artist Dashboard",
    description: "A professional home for independent Mehndi artists.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehndi Connect Artist Dashboard",
    description: "A professional home for independent Mehndi artists.",
  },
};

function Dashboard() {
  return (
    <DashboardShell
      title="Your work is moving."
      subtitle="Ananya's studio · Mumbai"
      nav={[
        "Dashboard",
        "Bookings",
        "Calendar",
        "Earnings",
        "Portfolio",
        "Services",
        "Availability",
        "Customers",
        "Reviews",
        "Profile",
      ]}
    >
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
        <Metric label="Today's bookings" value="02" note="First at 11:00 AM" />
        <Metric label="Upcoming" value="14" note="Next 30 days" />
        <Metric label="Earnings" value="₹68k" note="September to date" />
        <Metric label="Rating" value="4.9" note="124 verified reviews" />
        <Metric label="Profile views" value="2.4k" note="+18% this month" />
      </div>
      <div className="mt-14 grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
        <section>
          <div className="mb-5 flex items-end justify-between">
            <div>
              <p className="text-[10px] uppercase text-muted-foreground">Action required</p>
              <h2 className="text-4xl">New booking request</h2>
            </div>
            <span className="text-xs text-muted-foreground">Respond in 42 min</span>
          </div>
          <article className="border border-border p-6">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <p className="text-[10px] uppercase text-muted-foreground">Customer</p>
                <h3 className="mt-2 font-sans text-lg font-semibold">Ishita Rao</h3>
                <p className="text-sm text-muted-foreground">Powai · 6.2 km</p>
              </div>
              <div>
                <p className="text-[10px] uppercase text-muted-foreground">Service</p>
                <h3 className="mt-2 font-sans text-lg font-semibold">Guest Mehndi · 8 people</h3>
                <p className="text-sm text-muted-foreground">28 September · 3:00 PM · ₹8,400</p>
              </div>
            </div>
            <div className="mt-7 flex gap-3">
              <Button variant="editorial">
                <Check />
                Accept
              </Button>
              <Button variant="quiet">
                <X />
                Decline
              </Button>
            </div>
          </article>
        </section>
        <section className="bg-secondary p-6">
          <p className="text-[10px] uppercase text-muted-foreground">Repeat customers</p>
          <h2 className="mt-2 text-4xl">People who know your work.</h2>
          <div className="mt-6 divide-y divide-border">
            {[
              "Rhea Kapoor · 3 bookings",
              "Sana Sheikh · 2 bookings",
              "Aditi Shah · 2 bookings",
            ].map((x) => (
              <div key={x} className="flex justify-between py-4 text-sm">
                <span>{x}</span>
                <Button variant="ghost" size="sm">
                  Message
                </Button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </DashboardShell>
  );
}


export default Dashboard;
