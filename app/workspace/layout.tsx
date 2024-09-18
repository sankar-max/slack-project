"use client";

import { ReactNode } from "react";
import { WorkspaceHeader } from "./_components/header";
import { WorkspaceSideBar } from "./_components/sidebar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full">
      <WorkspaceHeader />
      <div className="flex h-[calc(100dvh-48px)] overflow-y-auto bg-secondary">
        <WorkspaceSideBar />
        <ResizablePanelGroup
          autoSaveId={"workspace-resizable"}
          direction="horizontal"
        >
          <ResizablePanel defaultSize={20} minSize={10}></ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={20} minSize={10}>
            {children}
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
};

export default Layout;
