import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

export const GetWorkSpaces = () => {
  const data = useQuery(api.workspace.get);

  const isLoading = data === undefined;

  return { data, isLoading };
};
