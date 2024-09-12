"use client";

import { UserGetWorkSpaces } from "@/features/workspace/api/use-get-workspaces";
import { useModal } from "@/store/dialog-modal/use-modal";
import { useRouter } from "next/navigation";
import { useEffect, useMemo } from "react";

export default function Home() {
  const router = useRouter();
  const { data, isLoading } = UserGetWorkSpaces();
  const [isOpen, setIsOpen] = useModal();

  const workspeacId = useMemo(() => {
    return data?.[0]?._id;
  }, [data]);

  useEffect(() => {
    if (isLoading) return;

    if (workspeacId) {
      router.replace(`/workspace/${workspeacId}`);
      setIsOpen(false);
    } else if (!isOpen) {
      setIsOpen(!isOpen);
    }
  }, [isLoading, isOpen, router, setIsOpen, workspeacId]);

  return (
    <div>
      {data?.map((value) => {
        return <h1 key={value.name}>{value.joinCode}</h1>;
      })}
    </div>
  );
}
