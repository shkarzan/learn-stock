import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AppShell, PageHeading } from "@/components/app-shell";
import { StockTable } from "@/components/stock-table";
import { Button } from "@/components/ui/button";
import { stocks, type StockSignal } from "@/data/stocks";

type Filter = "ALL" | StockSignal;
export const Route = createFileRoute("/top-signals")({ head: () => ({ meta: [
  { title: "Top 20 Stock Signals — StockSignal AI" }, { name: "description", content: "Filter 20 mock NSE stocks by BUY, HOLD, or SELL signal." },
  { property: "og:title", content: "Top 20 Stock Signals" }, { property: "og:description", content: "Explore and filter educational ML stock signals." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: TopSignalsPage });
function TopSignalsPage() { const [filter, setFilter] = useState<Filter>("ALL"); const filtered = filter === "ALL" ? stocks : stocks.filter((item) => item.signal === filter); return <AppShell><PageHeading title="Top 20 Stock Signals" subtitle="Mock ML-generated signals ranked by confidence" /><div className="mb-5 flex flex-wrap gap-2">{(["ALL", "BUY", "HOLD", "SELL"] as Filter[]).map((item) => <Button key={item} variant={filter === item ? "default" : "outline"} size="sm" onClick={() => setFilter(item)}>{item}</Button>)}</div><StockTable stocks={filtered} showRank /></AppShell>; }