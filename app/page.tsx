"use client";

import { useCurrentUser } from "@/components/hooks/useCurrentUser";
import { Button } from "@/components/ui/button";
import { useAuthActions } from "@convex-dev/auth/react";
import Image from "next/image";

export default function Home() {
  const { signOut } = useAuthActions();
  const { data, isLoading } = useCurrentUser();
  if (isLoading) return "loading";
  if (!data) return null;

  const { name, image, email } = data;
  return (
    <div className="grid h-full place-items-center">
      <div className="w-80 border shadow-2xl">
        <h1>{name}</h1>
        <p>{email}</p>

        <div className="relative size-40 overflow-hidden rounded-full">
          <Image fill src={image || ""} alt={name || ""} />
        </div>
        <div onClick={() => signOut()}>Logout</div>
      </div>
    </div>
  );
}
