import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { formatPrice, type Stock } from "@/data/stocks";
import { SignalBadge } from "@/components/signal-badge";
import { cn } from "@/lib/utils";

export function StockTable({ stocks, showRank = false }: { stocks: Stock[]; showRank?: boolean }) {
  return (
    <div className="overflow-hidden rounded-lg border bg-card">
      <Table>
        <TableHeader className="bg-muted/50">
          <TableRow>
            {showRank && <TableHead className="w-16 pl-5">Rank</TableHead>}
            <TableHead className="pl-5">Stock</TableHead>
            <TableHead>Current Price</TableHead>
            <TableHead>Change</TableHead>
            <TableHead>Signal</TableHead>
            <TableHead>Confidence</TableHead>
            <TableHead className="pr-5 text-right">View</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {stocks.map((stock, index) => (
            <TableRow key={stock.symbol}>
              {showRank && <TableCell className="pl-5 font-medium text-muted-foreground">{index + 1}</TableCell>}
              <TableCell className="pl-5">
                <Link to="/stock/$symbol" params={{ symbol: stock.symbol }} className="font-semibold text-foreground hover:text-primary">
                  {stock.symbol}
                </Link>
                <span className="mt-0.5 block max-w-48 truncate text-xs text-muted-foreground">{stock.companyName}</span>
              </TableCell>
              <TableCell className="whitespace-nowrap font-medium">{formatPrice(stock.currentPrice)}</TableCell>
              <TableCell className={cn("whitespace-nowrap font-medium", stock.changePercent >= 0 ? "text-buy" : "text-sell")}>
                {stock.changePercent >= 0 ? "+" : ""}{stock.changePercent.toFixed(2)}%
              </TableCell>
              <TableCell><SignalBadge signal={stock.signal} /></TableCell>
              <TableCell>{stock.confidence}%</TableCell>
              <TableCell className="pr-5 text-right">
                <Button variant="ghost" size="icon" asChild title={`View ${stock.symbol}`}>
                  <Link to="/stock/$symbol" params={{ symbol: stock.symbol }} aria-label={`View ${stock.symbol}`}><ArrowRight /></Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
