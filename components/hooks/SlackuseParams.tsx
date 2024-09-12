import { Id, TableNames } from "@/convex/_generated/dataModel";
import { SystemTableNames } from "convex/server";
import { useParams } from "next/navigation";

const SlackuseParams = ({
  paramsChar,
  dbType,
}: {
  paramsChar: any;
  dbType: TableNames | SystemTableNames;
}) => {
  const params = useParams();
  return params[paramsChar] as Id<typeof dbType>;
};

export default SlackuseParams;
