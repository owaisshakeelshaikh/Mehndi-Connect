import type { Metadata } from "next";
import { CheckCircle2, Flag, ShieldCheck } from "lucide-react";
import { DashboardShell, Metric } from "@/components/dashboard-shell";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Admin Panel — Mehndi Connect",
  description: "Marketplace verification, booking, trust, support, and quality operations.",
  openGraph: {
    title: "Mehndi Connect Admin",
    description: "Marketplace operations and trust oversight.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehndi Connect Admin",
    description: "Marketplace operations and trust oversight.",
  },
};

function Admin() {
  return (
    <DashboardShell
      title="Marketplace pulse."
      subtitle="Admin operations"
      nav={[
        "Overview",
        "Artist Verification",
        "Bookings",
        "Payments",
        "Disputes",
        "Reviews",
        "Content",
        "Users",
      ]}
    >
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <Metric label="Active artists" value="4,812" note="+86 this week" />
        <Metric label="Bookings today" value="324" note="92% confirmed" />
        <Metric label="Protection rate" value="99.2%" note="Resolved without escalation" />
        <Metric label="Pending reviews" value="18" note="Median wait 3.4 hours" />
      </div>
      <div className="mt-14 grid gap-8 xl:grid-cols-2">
        <section>
          <p className="text-[10px] uppercase text-muted-foreground">Verification queue</p>
          <h2 className="mt-2 text-4xl">Artists ready for review</h2>
          <div className="mt-6 divide-y divide-border rounded-2xl bg-card px-6 ring-1 ring-border">
            {[
              "Nisha Verma · Pune · 24 portfolio images",
              "Farah Ansari · Mumbai · Identity resubmitted",
              "Kavita Singh · Thane · Services updated",
            ].map((x, i) => (
              <div key={x} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-5">
                <span className="min-w-0 text-sm">{x}</span>
                <Button variant={i ? "quiet" : "editorial"} size="sm">
                  {i ? <Flag /> : <CheckCircle2 />}
                  {i ? "Review" : "Approve"}
                </Button>
              </div>
            ))}
          </div>
        </section>
        <section className="rounded-2xl bg-primary p-8 text-primary-foreground shadow-[0_20px_50px_-20px_rgba(23,22,19,0.4)]">
          <ShieldCheck className="mb-7 text-saffron" />
          <h2 className="text-5xl">Trust is a product surface.</h2>
          <p className="mt-5 text-sm leading-7 text-primary-foreground/70">
            Artist verification, portfolio authenticity, secure payments, cancellation support,
            response quality, and review integrity are monitored together—not as separate admin
            chores.
          </p>
        </section>
      </div>
    </DashboardShell>
  );
}


export default Admin;
