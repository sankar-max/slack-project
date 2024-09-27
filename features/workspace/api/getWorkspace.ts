import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
type PropsT = {
  id: Id<"workspace">;
};

export const GetWorkSpace = ({ id }: PropsT) => {
  const workspace = useQuery(api.workspace.getById, { id });

  const isLoading = workspace?.data === undefined;

  return { data: workspace?.data, isLoading };
};
