"use client";

import { useCurrentUser } from "@/components/hooks/useCurrentUser";
import ProfileButton from "@/components/user/profile-btn";
import { GetWorkSpaces } from "@/features/workspace/api/getWorkspaces";
import { useModal } from "@/store/dialog-modal/useModal";
import { useRouter } from "next/navigation";
import { useEffect, useMemo } from "react";

export default function Home() {
  const router = useRouter();
  const { data, isLoading } = GetWorkSpaces();
  const { isOpen, setIsOpen } = useModal();
  const { data: userData } = useCurrentUser();

  const workspaceId = useMemo(() => {
    return data?.[0]?._id;
  }, [data]);

  useEffect(() => {
    if (isLoading || !userData) return;

    if (workspaceId) {
      router.replace(`/workspace/${workspaceId}`);
      setIsOpen(false);
    } else if (!workspaceId) {
      setIsOpen(true);
    }
  }, [isLoading, isOpen, router, setIsOpen, userData, workspaceId]);

  return (
    <div>
      {data?.map((value) => {
        return <h1 key={value.name}>{value.joinCode}</h1>;
      })}
    </div>
  );
}
