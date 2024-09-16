import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
type Props = {
  children: ReactNode;
  name: string;
  delayDuration?: number;
  side?: "left" | "top" | "right" | "bottom";
  sideOffset?: number;
};
export const SlackTooltipButton = ({
  children,
  delayDuration = 200,
  name,
  side = "bottom",
  sideOffset = 4,
}: Props) => {
  return (
    <TooltipProvider delayDuration={delayDuration}>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent side={side} sideOffset={sideOffset}>
          <p>{name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
