import { useWorkSpaceId } from "@/components/hooks/useWorkspaceId";
import { Button } from "@/components/ui/button";
import { GetWorkSpace } from "@/features/workspace/api/getWorkspace";
import { Info, SearchIcon } from "lucide-react";

export const WorkspaceHeader = () => {
  const id = useWorkSpaceId();

  const { data, isLoading } = GetWorkSpace({ id });
  return (
    <nav className="flex h-12 items-center justify-between overflow-hidden bg-primary">
      <div className="flex-1" />
      <div className="flex min-w-[300px] shrink grow-[2] justify-start">
        <Button
          size={"sm"}
          className="w-full justify-start bg-secondary-foreground p-5 hover:bg-secondary-foreground"
        >
          <SearchIcon className="mr-2 size-4" />
          <span> Search {data?.name || "workspace..."}</span>
        </Button>
      </div>
      <div className="ml-auto flex flex-1 items-center justify-end">
        <Button variant={"default"}>
          <Info className="size-5 text-white" />
        </Button>
      </div>
    </nav>
  );
};
