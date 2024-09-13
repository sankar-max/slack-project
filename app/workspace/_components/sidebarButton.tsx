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

type Props = {
  icon: IconType | LucideIcon;
  label: string;
  isActive?: boolean;
};
export const SidebarButton = ({ icon: Icon, label, isActive }: Props) => {
  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
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
        </TooltipTrigger>
        <TooltipContent side="left" sideOffset={12}>
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
