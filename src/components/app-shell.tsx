import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { BarChart3, Eye, LayoutDashboard, LogOut, Menu, Search, Settings, Sparkles, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { useSession } from "@/lib/mock-storage";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/watchlist", label: "Watchlist", icon: Eye },
  { to: "/analyze", label: "Analyze Stock", icon: Search },
  { to: "/top-signals", label: "Top 20 Signals", icon: BarChart3 },
  { to: "/settings", label: "Settings", icon: Settings },
] as const;

export function Brand() {
  return (
    <Link to="/" className="flex items-center gap-2 font-semibold text-foreground" aria-label="StockSignal AI home">
      <span className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground"><Sparkles className="size-4" /></span>
      <span>StockSignal <span className="text-primary">AI</span></span>
    </Link>
  );
}

export function AppShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [, setSession] = useSession();
  const navigate = useNavigate();

  const logout = () => {
    setSession(false);
    navigate({ to: "/login" });
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-background px-4 md:hidden">
        <Brand />
        <Button variant="ghost" size="icon" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation">
          {open ? <X /> : <Menu />}
        </Button>
      </header>
      <aside className={cn("fixed inset-y-0 left-0 z-20 w-64 border-r bg-background p-5 transition-transform md:translate-x-0", open ? "translate-x-0" : "-translate-x-full")}>
        <Brand />
        <nav className="mt-10 space-y-1" aria-label="Dashboard navigation">
          {navItems.map((item) => {
            const active = pathname === item.to;
            return (
              <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className={cn("flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground", active && "bg-primary/10 text-primary")}>
                <item.icon className="size-4" />{item.label}
              </Link>
            );
          })}
        </nav>
        <Button variant="ghost" className="absolute bottom-6 left-5 right-5 w-[calc(100%-2.5rem)] justify-start text-muted-foreground" onClick={logout}>
          <LogOut /> Logout
        </Button>
      </aside>
      {open && <button className="fixed inset-0 z-10 bg-foreground/20 md:hidden" onClick={() => setOpen(false)} aria-label="Close navigation" />}
      <main className="md:pl-64">
        <div className="mx-auto max-w-7xl p-5 sm:p-8 lg:p-10">{children}</div>
      </main>
    </div>
  );
}

export function PageHeading({ title, subtitle, action }: { title: string; subtitle?: string; action?: ReactNode }) {
  return (
    <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div><h1 className="text-2xl font-bold text-foreground sm:text-3xl">{title}</h1>{subtitle && <p className="mt-1 text-sm text-muted-foreground sm:text-base">{subtitle}</p>}</div>
      {action}
    </div>
  );
}