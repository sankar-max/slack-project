"use client";

import { ReactNode } from "react";
import { WorkspaceHeader } from "./_components/header";
import { WorkSpaceSideBar } from "./_components/sidebar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full">
      <WorkspaceHeader />
      <div className="flex h-[calc(100dvh-48px)] overflow-y-auto bg-secondary">
        <WorkSpaceSideBar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
