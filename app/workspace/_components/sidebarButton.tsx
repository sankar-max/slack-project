import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons/lib";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SlackTooltipButton } from "@/utility/slackTooltip";

type Props = {
  icon: IconType | LucideIcon;
  label: string;
  isActive?: boolean;
};
export const SidebarButton = ({ icon: Icon, label, isActive }: Props) => {
  return (
    <SlackTooltipButton
      name={label}
      side="left"
      sideOffset={10}
      delayDuration={80}
    >
      <div
        className={cn(
          "flex size-10 flex-col items-center justify-center overflow-hidden rounded-lg bg-secondary-foreground hover:bg-secondary",
          isActive && "border-b-[3px]",
        )}
      >
        <Button size={"sm"} variant={"transparent"}>
          <Icon />
        </Button>
      </div>
    </SlackTooltipButton>
  );
};
