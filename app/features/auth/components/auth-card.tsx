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
import { AuthSubmitButton } from "@/helpers/authSubmit";
import { AuthFlow } from "@/types/auth";
import React, { Dispatch, SetStateAction, useState } from "react";
import { FaGithub } from "react-icons/fa";

import { FcGoogle } from "react-icons/fc";
import { useAuthActions } from "@convex-dev/auth/react";
import { authValidation } from "@/helpers/authCheck";

type Props = {
  authPage: AuthFlow;
  setAuthPage: Dispatch<SetStateAction<AuthFlow>>;
};

export const AuthCard: React.FC<Props> = (props) => {
  const { signIn } = useAuthActions();

  const { authPage, setAuthPage } = props;
  const [form, setForm] = useState({});
  const [pending, setPending] = useState(false);

  function onProvider(authLogin: "google" | "github") {
    setPending(true);
    signIn(authLogin).finally(() => setPending(false));
  }
  const isSignInPage = authPage === "signIn";

  async function submit(data: FormData) {
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const password = data.get("password") as string;
    const confirmPassword = data.get("confirmPassword") as string;

    if (!isSignInPage) {
      authValidation({ email, password, confirmPassword, name }, isSignInPage);
    }
    signIn("password", { email, password, name, flow: "signUp" }).catch((err) =>
      console.error(err),
    );
    // setForm({ ...form, email, password, confirmPassword, name });
  }
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>
          {isSignInPage ? "Login to continue" : "Sign up to continue"}
        </CardTitle>
        <CardDescription className="pt-3">
          Use your email or another service to continue
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <form action={submit} className="space-y-2">
          {!isSignInPage && (
            <Input
              type="text"
              name="name"
              required
              autoComplete="off"
              placeholder="Full Name"
              disabled={pending}
            />
          )}
          <Input
            type="email"
            name="email"
            required
            autoComplete="off"
            placeholder="Email"
            disabled={pending}
          />
          <Input
            type="password"
            required
            name="password"
            autoComplete="off"
            placeholder="Password"
            disabled={pending}
          />
          {!isSignInPage && (
            <Input
              type="password"
              required
              autoComplete="off"
              name="confirmPassword"
              placeholder="Confirm Password"
              disabled={pending}
            />
          )}
          <AuthSubmitButton />
        </form>
        <Separator />
        <div className="flex flex-col gap-y-2.5">
          <Button
            onClick={() => onProvider("google")}
            disabled={pending}
            variant={"outline"}
            size={"lg"}
            className="relative w-full"
          >
            <FcGoogle className="absolute left-2.5 top-2.5" size={20} />{" "}
            Continue with Google
          </Button>
        </div>

        <div className="flex flex-col gap-y-2.5">
          <Button
            disabled={pending}
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
