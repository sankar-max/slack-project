import { Button } from "@/components/ui/button";
import { GetWorkSpace } from "@/features/workspace/api/getWorkspace";
import { GetWorkSpaces } from "@/features/workspace/api/getWorkspaces";
import { useModal } from "@/store/dialog-modal/useModal";
import { Loader, Plus, User } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { WorkspaceListItem } from "./workspaceItem";
import { useWorkSpaceId } from "@/components/hooks/useWorkspaceId";
type Props = {};

export const WorkspaceSwitcher = ({}: Props) => {
  const router = useRouter();
  const { openModal } = useModal();
  const id = useWorkSpaceId();

  const { data: workspaces, isLoading: workspacesLoading } = GetWorkSpaces();
  const { data, isLoading } = GetWorkSpace({ id });

  const listOfWorkspaces = workspaces?.filter(({ _id }) => _id !== id);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="size-10 overflow-hidden rounded-lg bg-secondary-foreground text-base hover:bg-secondary">
          {isLoading ? (
            <Loader className="size-5 shrink-0 animate-spin" />
          ) : (
            data?.name?.charAt(0).toUpperCase()
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="ml-2 max-h-72 w-64 overflow-y-auto"
        align="start"
        side="bottom"
      >
        <DropdownMenuItem className="flex flex-col items-start justify-start overflow-hidden">
          <span className="t truncate">{data?.name}</span>
          <span className="text-muted-foreground">Active workspace</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <div className="flex flex-col gap-y-1">
          {listOfWorkspaces?.map((workspace) => {
            return (
              <WorkspaceListItem key={workspace._id} workspace={workspace} />
            );
          })}
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => openModal()}
            className="group flex items-center gap-x-3"
          >
            <div className="flex items-center justify-center rounded-md border bg-primary-foreground p-1">
              <Plus className="text-base text-primary/50 transition-colors duration-200 group-hover:text-primary" />
            </div>
            <p>Create a new workspace</p>
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
