import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { getAuthUserId } from "@convex-dev/auth/server";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("workspace").collect();
  },
});

export const create = mutation({
  args: {
    name: v.string(),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new Error("Unauthorized");
    }
    const joinCode = "12345";
    const workspaceId = await ctx.db.insert("workspace", {
      name: args.name,
      userId,
      joinCode,
    });
    return { workspace_id: workspaceId, status: true };
  },
});

export const getById = query({
  args: { id: v.id("workspace") },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Unauthorized");
    return await ctx.db.get(args.id);
  },
});
