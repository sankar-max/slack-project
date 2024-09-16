import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Doc } from "@/convex/_generated/dataModel";
import { useRouter } from "next/navigation";

export const WorkspaceListItem = ({
  workspace,
}: {
  workspace: Doc<"workspace">;
}) => {
  const router = useRouter();
  return (
    <DropdownMenuItem
      className="group flex items-center gap-x-3"
      onClick={() => router.push(`/workspace/${workspace._id}`)}
    >
      <div className="flex size-7 items-center justify-center rounded-full bg-accent p-2 group-hover:border">
        <span className="p-2 text-primary">
          {workspace._id.charAt(0).toUpperCase()}
        </span>
      </div>
      <span>{workspace.name}</span>
    </DropdownMenuItem>
  );
};
