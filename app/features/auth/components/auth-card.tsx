import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { AuthSubmit, wait } from "@/helpers/auth-submit";
import { AuthFlow } from "@/types/auth";
import React, { Dispatch, SetStateAction, useState } from "react";
import { FaGithub } from "react-icons/fa";

import { FcGoogle } from "react-icons/fc";
import { useAuthActions } from "@convex-dev/auth/react";

type Props = {
  authPage: AuthFlow;
  setAuthPage: Dispatch<SetStateAction<AuthFlow>>;
};

export const AuthCard: React.FC<Props> = (props) => {
  const { signIn } = useAuthActions();

  const { authPage, setAuthPage } = props;
  const [form, setForm] = useState({});

  function onProvider(authLogin: "google" | "github") {
    signIn(authLogin);
  }

  async function submit(data: FormData) {
    const email = data.get("email") as string;
    const password = data.get("password") as string;
    const confirmPassword = data.get("confirmPassword") as string;
    // await wait({ email, password, confirmPassword });
    setForm({ ...form, email, password, confirmPassword });
  }
  console.log(form);
  const currentAuthPage = authPage === "signIn";
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>
          {currentAuthPage ? "Login to continue" : "Sign up to continue"}
        </CardTitle>
        <CardDescription className="pt-3">
          Use your email or another service to continue
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <form action={submit} className="space-y-2">
          <Input
            type="email"
            name="email"
            required
            autoComplete="off"
            placeholder="Email"
            disabled={false}
          />
          <Input
            type="password"
            required
            name="password"
            autoComplete="off"
            placeholder="Password"
            disabled={false}
          />
          {!currentAuthPage && (
            <Input
              type="password"
              required
              autoComplete="off"
              name="confirmPassword"
              placeholder="Password"
              disabled={false}
            />
          )}
          <AuthSubmit />
        </form>
        <Separator />
        <div className="flex flex-col gap-y-2.5">
          <Button variant={"outline"} size={"lg"} className="relative w-full">
            <FcGoogle className="absolute left-2.5 top-2.5" size={20} />{" "}
            Continue with Google
          </Button>
        </div>

        <div className="flex flex-col gap-y-2.5">
          <Button
            onClick={() => onProvider("github")}
            variant={"outline"}
            size={"lg"}
            className="relative w-full"
          >
            <FaGithub className="absolute left-2.5 top-2.5" size={20} />{" "}
            Continue with Github
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">
          Don&apos;t have an account?
          <span
            onClick={() =>
              setAuthPage((prev) => (prev === "signIn" ? "signUp" : "signIn"))
            }
            className="cursor-pointer pl-1 text-sky-700 hover:underline"
          >
            {authPage === "signUp" ? "Sign in" : "Sign up"}
          </span>
        </p>
      </CardContent>
    </Card>
  );
};
