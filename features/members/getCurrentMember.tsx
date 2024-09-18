import { useWorkSpaceId } from "@/components/hooks/useWorkspaceId";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";

const GetCurrentMember = ({ workspaceId }: { workspaceId :Id<"workspace">}) => {
  const data = useQuery(api.members.current, { workspaceId });
  const isLoading = data === undefined;
  return { data, isLoading };
};
 
export default GetCurrentMember;