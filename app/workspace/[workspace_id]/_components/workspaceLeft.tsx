"use client"
import { useWorkSpaceId } from "@/components/hooks/useWorkspaceId";
import GetCurrentMember from "@/features/members/getCurrentMember";
import { GetWorkSpace } from "@/features/workspace/api/getWorkspace";

export const WorkspaceLeft = () => {
  const workspaceId=useWorkSpaceId()

  const data=GetCurrentMember({workspaceId})
 const data1= GetWorkSpace({id:workspaceId})

  console.log("sankar", data.data);
  console.log("vijayt", data1.workspace);
  
  return (
    <div>
      <h1>Admin can only see below </h1>

      {data1.workspace?.data.member?.role === "admin" && <h1>Yes i am admin</h1>}
    </div>
  );
};
