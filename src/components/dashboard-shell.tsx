import Link from "next/link";
import { Bell, CalendarDays, LayoutDashboard, Menu, Search } from "lucide-react";
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
      <header className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-border px-4 py-4 md:px-8">
        <Link href="/" className="min-w-0 truncate font-display text-2xl">
          Mehndi Connect
        </Link>
        <div className="flex gap-1">
          <Button variant="ghost" size="icon" aria-label="Search">
            <Search />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Notifications">
            <Bell />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" aria-label="Menu">
            <Menu />
          </Button>
        </div>
      </header>
      <div className="mx-auto grid max-w-[1600px] md:grid-cols-[220px_minmax(0,1fr)]">
        <aside className="hidden min-h-[calc(100vh-65px)] border-r border-border p-5 md:block">
          <p className="mb-6 text-[10px] uppercase text-muted-foreground">Workspace</p>
          <nav className="space-y-1">
            {nav.map((x, i) => (
              <button
                key={x}
                className={`flex w-full items-center gap-3 rounded-sm px-3 py-2 text-left text-sm ${i === 0 ? "bg-primary text-primary-foreground" : "hover:bg-secondary"}`}
              >
                {i === 0 ? <LayoutDashboard /> : <CalendarDays />}
                {x}
              </button>
            ))}
          </nav>
        </aside>
        <main className="min-w-0 px-4 py-8 md:px-8 md:py-12">
          <div className="mb-10">
            <p className="text-[10px] uppercase text-muted-foreground">{subtitle}</p>
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
    <div className="border-t border-border py-6">
      <p className="text-[10px] uppercase text-muted-foreground">{label}</p>
      <p className="mt-5 font-display text-5xl">{value}</p>
      <p className="mt-2 text-xs text-muted-foreground">{note}</p>
    </div>
  );
}
