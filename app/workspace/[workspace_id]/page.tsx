"use client";

import { useWorkSpaceId } from "@/components/hooks/useWorkspaceId";
import { Button } from "@/components/ui/button";
import ProfileButton from "@/components/user/profile-btn";
import { GetWorkSpace } from "@/features/workspace/api/getWorkspace";
import { useModal } from "@/store/dialog-modal/useModal";

const WorkSpaceIdPage = () => {
  const { closeModal, isOpen, openModal } = useModal();
  const id = useWorkSpaceId();
  const { data, isLoading } = GetWorkSpace({ id }) || {};
  if (!data)
    return (
      <div className="grid h-full place-items-center">
        <div className="rounded-md border px-10 py-4 shadow-md shadow-gray-50">
          <p>No data</p>
          <div className="flex items-center justify-between gap-x-4">
            <p>Do you wanna create new workspace?</p>
            <Button onClick={() => openModal()}>Create</Button>
          </div>
        </div>
      </div>
    );
  return (
    <div className="grid size-full place-items-center">
      <ProfileButton />
    </div>
  );
};

export default WorkSpaceIdPage;
