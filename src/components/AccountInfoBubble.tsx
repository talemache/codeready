import { Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function AccountInfoBubble() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            type="button"
            aria-label="Why create an account?"
            className="inline-flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <Info className="h-4 w-4" />
          </button>
        </TooltipTrigger>
        <TooltipContent side="bottom" className="max-w-xs text-xs leading-relaxed">
          Creating a free account means your progress and projects are saved — you'll never lose
          your work, and it helps us understand what's working so we can keep improving Northal.
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
