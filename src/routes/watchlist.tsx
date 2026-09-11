import { createFileRoute, Link } from "@tanstack/react-router";
import { Plus, Trash2 } from "lucide-react";
import { AppShell, PageHeading } from "@/components/app-shell";
import { SignalBadge } from "@/components/signal-badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { formatPrice, stocks } from "@/data/stocks";
import { useWatchlist } from "@/lib/mock-storage";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/watchlist")({ head: () => ({ meta: [
  { title: "My Watchlist — StockSignal AI" }, { name: "description", content: "Manage a locally saved watchlist of mock NSE stocks." },
  { property: "og:title", content: "My Watchlist — StockSignal AI" }, { property: "og:description", content: "Review and manage watched stock signals." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: WatchlistPage });
function WatchlistPage() {
  const [symbols, setSymbols] = useWatchlist(); const watched = symbols.map((symbol) => stocks.find((item) => item.symbol === symbol)).filter((item) => item !== undefined);
  const add = (symbol: string) => setSymbols((current) => current.includes(symbol) ? current : [...current, symbol]);
  return <AppShell><PageHeading title="My Watchlist" subtitle="Track selected stocks and their latest mock signals" action={<Select onValueChange={add}><SelectTrigger className="w-44"><Plus className="size-4" /><SelectValue placeholder="Add Stock" /></SelectTrigger><SelectContent>{stocks.filter((item) => !symbols.includes(item.symbol)).map((item) => <SelectItem key={item.symbol} value={item.symbol}>{item.symbol}</SelectItem>)}</SelectContent></Select>} />{watched.length ? <div className="overflow-hidden rounded-lg border bg-card"><Table><TableHeader className="bg-muted/50"><TableRow><TableHead className="pl-5">Stock</TableHead><TableHead>Price</TableHead><TableHead>Change</TableHead><TableHead>Signal</TableHead><TableHead className="pr-5 text-right">Action</TableHead></TableRow></TableHeader><TableBody>{watched.map((item) => <TableRow key={item.symbol}><TableCell className="pl-5 font-semibold">{item.symbol}<span className="block text-xs font-normal text-muted-foreground">{item.companyName}</span></TableCell><TableCell>{formatPrice(item.currentPrice)}</TableCell><TableCell className={cn("font-medium", item.changePercent >= 0 ? "text-buy" : "text-sell")}>{item.changePercent >= 0 ? "+" : ""}{item.changePercent.toFixed(2)}%</TableCell><TableCell><SignalBadge signal={item.signal} /></TableCell><TableCell className="pr-5 text-right"><div className="flex justify-end gap-1"><Button variant="ghost" size="sm" asChild><Link to="/stock/$symbol" params={{ symbol: item.symbol }}>View</Link></Button><Button variant="ghost" size="icon" onClick={() => setSymbols((current) => current.filter((symbol) => symbol !== item.symbol))} aria-label={`Remove ${item.symbol}`} title="Remove"><Trash2 className="text-destructive" /></Button></div></TableCell></TableRow>)}</TableBody></Table></div> : <div className="rounded-lg border bg-card p-12 text-center"><p className="font-medium">Your watchlist is empty</p><p className="mt-1 text-sm text-muted-foreground">Use Add Stock to start tracking a company.</p></div>}</AppShell>;
}