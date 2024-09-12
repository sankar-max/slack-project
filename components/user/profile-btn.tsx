"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/components/hooks/useCurrentUser";
import { useAuthActions } from "@convex-dev/auth/react";

const ProfileButton = () => {
  const { signOut } = useAuthActions();
  const { data, isLoading } = useCurrentUser();
  if (isLoading) return "loading";
  if (!data) return null;

  const { name, image, email } = data;
  return (
    <div className="w-80 border shadow-2xl">
      <h1>{name}</h1>
      <p>{email}</p>

      <div className="relative size-40 overflow-hidden rounded-full">
        <Image fill src={image || ""} alt={name || ""} />
      </div>
      <Button onClick={() => signOut()}>Logout</Button>
    </div>
  );
};

export default ProfileButton;
