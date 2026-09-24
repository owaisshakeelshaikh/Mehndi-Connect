import Link from "next/link";
import { Bell, CalendarDays, Flower2, LayoutDashboard, Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DashboardShell({
  title,
  subtitle,
  nav,
  children,
}: {
  title: string;
  subtitle: string;
  nav: string[];
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <header className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-ivory/15 bg-primary px-4 py-4 text-primary-foreground md:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-2.5">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-ivory/40 bg-ivory/10 text-ivory">
            <Flower2 className="size-4" strokeWidth={1.75} />
          </span>
          <span className="leading-none">
            <span className="block font-sans text-sm font-extrabold tracking-[0.16em]">MEHNDI</span>
            <span className="block font-sans text-[8px] font-semibold tracking-[0.34em] text-ivory">
              CONNECT
            </span>
          </span>
        </Link>
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Search"
            className="hover:bg-ivory/15 hover:text-ivory"
          >
            <Search />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Notifications"
            className="hover:bg-ivory/15 hover:text-ivory"
          >
            <Bell />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-ivory/15 hover:text-ivory md:hidden"
            aria-label="Menu"
          >
            <Menu />
          </Button>
        </div>
      </header>
      <div className="mx-auto grid max-w-[1600px] md:grid-cols-[220px_minmax(0,1fr)]">
        <aside className="hidden min-h-[calc(100vh-65px)] border-r border-border bg-card p-5 md:block">
          <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
            Workspace
          </p>
          <nav className="space-y-1">
            {nav.map((x, i) => (
              <button
                key={x}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors ${i === 0 ? "bg-primary text-primary-foreground" : "hover:bg-secondary"}`}
              >
                {i === 0 ? <LayoutDashboard className="size-4" /> : <CalendarDays className="size-4" />}
                {x}
              </button>
            ))}
          </nav>
        </aside>
        <main className="min-w-0 px-4 py-8 md:px-8 md:py-12">
          <div className="mb-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">{subtitle}</p>
            <h1 className="mt-2 text-5xl">{title}</h1>
          </div>
          {children}
        </main>
      </div>
    </div>
  );
}

export function Metric({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div className="rounded-2xl bg-card p-6 ring-1 ring-border shadow-[0_10px_30px_-16px_rgba(17,18,13,0.15)]">
      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </p>
      <p className="mt-5 font-display text-5xl text-primary">{value}</p>
      <p className="mt-2 text-xs text-muted-foreground">{note}</p>
    </div>
  );
}
