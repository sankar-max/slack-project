import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
type PropsT = {
  id: Id<"workspace">;
};

export const GetWorkSpace = ({ id }: PropsT) => {
  const data = useQuery(api.workspace.getById, { id });

  const isLoading = data === undefined;

  return { data, isLoading };
};
