import { createFileRoute } from "@tanstack/react-router";
import { BarChart3, CircleDollarSign, ShoppingCart, Timer } from "lucide-react";
import { AppShell, PageHeading } from "@/components/app-shell";
import { StockTable } from "@/components/stock-table";
import { Card, CardContent } from "@/components/ui/card";
import { stocks } from "@/data/stocks";

export const Route = createFileRoute("/dashboard")({ head: () => ({ meta: [
  { title: "Dashboard — StockSignal AI" }, { name: "description", content: "View an overview of mock stock BUY, HOLD, and SELL signals." },
  { property: "og:title", content: "Dashboard — StockSignal AI" }, { property: "og:description", content: "Stock market signals at a glance." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: DashboardPage });

function DashboardPage() {
  const summary = [{ label: "Total Stocks", value: stocks.length, icon: BarChart3, tone: "text-primary bg-primary/10" }, { label: "BUY Signals", value: 8, icon: ShoppingCart, tone: "text-buy bg-buy-soft" }, { label: "HOLD Signals", value: 7, icon: Timer, tone: "text-hold bg-hold-soft" }, { label: "SELL Signals", value: 5, icon: CircleDollarSign, tone: "text-sell bg-sell-soft" }];
  return <AppShell><PageHeading title="Dashboard" subtitle="Stock market signals at a glance" /><div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{summary.map((item) => <Card key={item.label} className="shadow-sm"><CardContent className="flex items-center justify-between p-5"><div><p className="text-sm text-muted-foreground">{item.label}</p><p className="mt-2 text-3xl font-bold">{item.value}</p></div><span className={`flex size-10 items-center justify-center rounded-md ${item.tone}`}><item.icon className="size-5" /></span></CardContent></Card>)}</div><section className="mt-8"><h2 className="mb-4 text-lg font-semibold">Recent Signals</h2><StockTable stocks={stocks.slice(0, 4)} /></section></AppShell>;
}