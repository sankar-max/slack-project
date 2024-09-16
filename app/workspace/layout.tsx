"use client";

import { ReactNode } from "react";
import { WorkspaceHeader } from "./_components/header";
import { WorkSpaceSideBar } from "./_components/sidebar";
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
        <WorkSpaceSideBar />
        <ResizablePanelGroup
          autoSaveId={"workspace-resizable"}
          direction="horizontal"
        >
          <ResizablePanel>
            <div className="">work space</div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel>{children}</ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
};

export default Layout;
