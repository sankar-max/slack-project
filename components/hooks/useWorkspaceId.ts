import { Id, } from "@/convex/_generated/dataModel";
import { useParams } from "next/navigation";

export const useWorkSpaceId =() => {
  const params = useParams();
  return params.workspace_id as Id<"workspace">;
};
