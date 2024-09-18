import {
  Bell,
  HomeIcon,
  Menu,
  MessageCircleMore,
  MessageSquare,
  MoreHorizontal,
} from "lucide-react";
import { SidebarButton } from "./sidebarButton";
import { WorkspaceSwitcher } from "./workspaceSwitcher";
import { usePathname } from "next/navigation";

export const WorkspaceSideBar = () => {
  const urlPath = usePathname();
  return (
    <aside className="flex h-full w-16 flex-col items-center gap-y-4 bg-primary p-1">
      <WorkspaceSwitcher />
      <SidebarButton
        icon={HomeIcon}
        label="Home"
        isActive={urlPath.includes("/workspace")}
      />
      <SidebarButton icon={MessageSquare} label="Dm's" />
      <SidebarButton icon={Bell} label="Notification" />
      <SidebarButton icon={MoreHorizontal} label="More" />
    </aside>
  );
};
