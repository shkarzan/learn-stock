import { Badge } from "@/components/ui/badge";
import type { StockSignal } from "@/data/stocks";
import { cn } from "@/lib/utils";

export function SignalBadge({ signal, className }: { signal: StockSignal; className?: string }) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "min-w-16 justify-center border-transparent font-semibold",
        signal === "BUY" && "bg-buy-soft text-buy",
        signal === "HOLD" && "bg-hold-soft text-hold",
        signal === "SELL" && "bg-sell-soft text-sell",
        className,
      )}
    >
      {signal}
    </Badge>
  );
}
