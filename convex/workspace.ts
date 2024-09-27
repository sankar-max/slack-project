import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { getAuthUserId } from "@convex-dev/auth/server";

export function generateOtp(length: number) {
  const char = "0123456789abcdefghijklmnopqrstuvwxyz";
  let otp: string = "";

  for (let i = 0; i < length; i++) {
    const randomValue = Math.floor(Math.random() * char.length);
    otp += char[randomValue];
  }
  return otp;
}

export const get = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      return [];
    }

    const members = await ctx.db
      .query("members")
      .withIndex("by_user_id", (q) => q.eq("userId", userId))
      .collect();

    let workspaces = [];

    for (const { workspaceId } of members) {
      const workspace = await ctx.db.get(workspaceId);
      if (workspace) {
        workspaces.push(workspace);
      }
    }
    const data = await ctx.db.get(userId);

    return workspaces;
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
    const joinCode = generateOtp(6);
    const workspaceId = await ctx.db.insert("workspace", {
      name: args.name,
      userId,
      joinCode,
    });
    await ctx.db.insert("members", {
      userId,
      workspaceId,
      role: "admin",
    });
    const data = await ctx.db.get(workspaceId);
    return {
      workspace_id: workspaceId,
      data,
      status: true,
      message: `${args.name} workspace is created`,
    };
  },
});

export const getById = query({
  args: { id: v.id("workspace") },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Unauthorized");

    const user = await ctx.db.get(args.id);

    const member = await ctx.db
      .query("members")
      .withIndex("by_workspace_id_user_id", (q) =>
        q.eq("workspaceId", args.id).eq("userId", userId),
      )
      .unique();

    return { data: user };
  },
});
