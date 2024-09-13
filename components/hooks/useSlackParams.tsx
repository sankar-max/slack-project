import { Id, TableNames } from "@/convex/_generated/dataModel";
import { SystemTableNames } from "convex/server";
import { useParams } from "next/navigation";

export const useSlackParams = <T extends TableNames | SystemTableNames>({
  paramsChar,
  db_type,
}: {
  paramsChar: string;
  db_type: T;
}) => {
  const params = useParams();
  return params[paramsChar] as Id<typeof db_type>;
};
