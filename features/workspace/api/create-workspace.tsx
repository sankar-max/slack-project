"use client";
import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";

export const CreateWorkSpace = () => {
  const createApi = useMutation(api.workspace.create);
  createApi({ name: "" });
};
