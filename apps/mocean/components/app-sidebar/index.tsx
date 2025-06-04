import {
  Calendar,
  EthernetPort,
  Inbox,
  LucideIcon,
  Search,
  Settings,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { UserAvatar } from "./Avatar";
import { MenuItemWithTooltip } from "./MenuItemWithTooltip";

// Menu items.
const items: { title: string; url: string; Icon: LucideIcon }[] = [
  {
    title: "对话",
    url: "/",
    Icon: EthernetPort,
  },
  {
    title: "智能体",
    url: "/assistant",
    Icon: Inbox,
  },
  {
    title: "MCP工具",
    url: "/mcp",
    Icon: Calendar,
  },
  {
    title: "知识库",
    url: "/rag",
    Icon: Search,
  },
  {
    title: "文件",
    url: "/file",
    Icon: Settings,
  },
];

export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-4">
              <UserAvatar />
              {items.map((item) => (
                <MenuItemWithTooltip title={item.title} key={item.title}>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      className="flex items-center justify-center"
                    >
                      <a href={item.url} className="!h-10 !w-10">
                        <item.Icon size={48} className="h-full w-full" />
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </MenuItemWithTooltip>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
