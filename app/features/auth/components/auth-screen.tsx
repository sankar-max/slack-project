"use client";

import { AuthFlow } from "@/types/auth";
import { useState } from "react";
import { AuthCard } from "./auth-card";

export const AuthScreen = () => {
  const [authPage, setAuthPage] = useState<AuthFlow>("signIn");

  return (
    <div className="flex h-full overflow-y-auto items-center justify-center bg-violet-500">
      <div className="md:h-auto  md:w-[420px]">
        <AuthCard authPage={authPage} setAuthPage={setAuthPage} />
      </div>
    </div>
  );
};
