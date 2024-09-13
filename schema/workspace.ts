import { z } from "zod";

export const workspace_schema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Workspace name should be more then 2 character's",
    })
    .max(50),
});
