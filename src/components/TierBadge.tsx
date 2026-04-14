import { cn } from "@/lib/utils";
import type { Tier } from "@/data/products";

const tierConfig: Record<Tier, { label: string; className: string }> = {
  S: { label: "Tier S", className: "bg-tier-s/15 text-tier-s border-tier-s/30" },
  A: { label: "Tier A", className: "bg-primary/10 text-primary border-primary/30" },
  B: { label: "Tier B", className: "bg-tier-b/15 text-tier-b border-tier-b/30" },
  C: { label: "Basic", className: "bg-muted text-muted-foreground border-border" },
};

const TierBadge = ({ tier }: { tier: Tier }) => {
  const config = tierConfig[tier];
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold border",
        config.className
      )}
    >
      {config.label}
    </span>
  );
};

export default TierBadge;
