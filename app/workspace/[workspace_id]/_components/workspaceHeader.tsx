import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Doc } from "@/convex/_generated/dataModel";
import { ChevronDown, Pencil } from "lucide-react";

type PropsT = {
  workspaceData: Doc<"workspace">;
  memberData: Doc<"members">;
};
// type PropsT = {
//   workspaceData: { member: Doc<"members"> } & Doc<"workspace">;
// };
const WorkspaceHeader = ({ workspaceData, memberData }: PropsT) => {
  return (
    <div className="flex h-[49px] items-center justify-between gap-0.5 px-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="gap-x-2" variant={"transparent"}>
            <span className="truncate">{workspaceData.name}</span>
            <ChevronDown className="text-lg" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="ml-2 max-h-72 w-64 overflow-y-auto"
          align="start"
          side="bottom"
        >
          <DropdownMenuItem className="flex items-center">
            <div className="flex size-8 items-center justify-center rounded-md border">
              {workspaceData.name.charAt(0).toUpperCase()}
            </div>
          </DropdownMenuItem>
          {memberData.role === "admin" && (
            <>
              <DropdownMenuItem className="cursor-pointer">
                Invite people to {workspaceData.name}
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                Preference
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
      <Button className="" size={"sm"}>
        <Pencil className="size-4" />
      </Button>
    </div>
  );
};

export default WorkspaceHeader;
