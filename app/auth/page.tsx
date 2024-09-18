"use client";

import { AuthFlow } from "@/types/auth";
import { useState } from "react";
import { AuthCard } from "../features/auth/components/auth-card";

 const AuthScreen = () => {
  const [authPage, setAuthPage] = useState<AuthFlow>("signIn");

  return (
    <div className="flex h-full items-center justify-center overflow-y-auto bg-gradient-to-br from-slate-300/10 to-slate-800/70">
      <div className="md:h-auto md:w-[420px]">
        <AuthCard authPage={authPage} setAuthPage={setAuthPage} />
      </div>
    </div>
  );
};
export default AuthScreen