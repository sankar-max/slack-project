"use client";

import { UserGetWorkSpace } from "@/features/workspace/api/use-get-workspace";
import { useParams } from "next/navigation";

const WorkSpaceIdPage = () => {
  const params = useParams();

  const data = UserGetWorkSpace({ id });
  return <div className="">{params.workspace_id}</div>;
};

export default WorkSpaceIdPage;
