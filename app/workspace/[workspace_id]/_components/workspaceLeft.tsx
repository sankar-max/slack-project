"use client";
import { useWorkSpaceId } from "@/components/hooks/useWorkspaceId";
import GetCurrentMember from "@/features/members/getCurrentMember";
import { GetWorkSpace } from "@/features/workspace/api/getWorkspace";
import { AlertTriangle, Loader2Icon } from "lucide-react";
import WorkspaceHeader from "./workspaceHeader";

export const WorkspaceLeft = () => {
  const workspaceId = useWorkSpaceId();

  const { data: memberData, isLoading: memberLoading } = GetCurrentMember({
    workspaceId,
  });
  const { data: workspaceData, isLoading: workspaceLoading } = GetWorkSpace({
    id: workspaceId,
  });

  if (memberLoading || workspaceLoading) {
    return (
      <div className="grid h-full place-items-center">
        <Loader2Icon className="animate-spin text-2xl" />
      </div>
    );
  }

  if (!memberData || !workspaceData) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-y-1">
        <AlertTriangle className="text-2xl" />
        <p>There is no workspace</p>
      </div>
    );
  }
  console.log("sankar", memberData);
  console.log("vijayt", workspaceData);

  return (
    <div className="h-full">
      <WorkspaceHeader workspaceData={workspaceData} memberData={memberData} />
    </div>
  );
};
