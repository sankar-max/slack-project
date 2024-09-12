import SlackuseParams from "@/components/hooks/SlackuseParams";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

export const UserGetWorkSpaces = () => {
  const sankr = SlackuseParams({ dbType: "workspace", paramsChar: "" });

  const data = useQuery(api.workspace.get);

  const isLoading = data === undefined;

  return { data, isLoading };
};
