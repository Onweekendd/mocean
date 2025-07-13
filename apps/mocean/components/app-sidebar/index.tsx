"use client";

import { usePathname } from "next/navigation";

import { Book, Bot, Brain, Folder, LucideIcon, Wrench } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

import { UserAvatar } from "./Avatar";
import { MenuItemWithTooltip } from "./MenuItemWithTooltip";

// Menu items.
const items: { title: string; url: string; Icon: LucideIcon }[] = [
  {
    title: "对话",
    url: "/",
    Icon: Bot,
  },
  {
    title: "智能体",
    url: "/assistant",
    Icon: Brain,
  },
  {
    title: "MCP工具",
    url: "/mcp",
    Icon: Wrench,
  },
  {
    title: "知识库",
    url: "/rag",
    Icon: Book,
  },
  {
    title: "文件",
    url: "/file",
    Icon: Folder,
  },
];

/**
 * 判断菜单项是否处于激活状态
 *
 * @param itemUrl - 菜单项的URL路径
 * @param currentPath - 当前页面路径
 * @returns 是否激活
 */
const isActiveItem = (itemUrl: string, currentPath: string): boolean => {
  if (itemUrl === "/") {
    return currentPath === "/" || currentPath.startsWith("/(chat)");
  }
  return currentPath.startsWith(itemUrl);
};

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              <UserAvatar />
              {items.map((item) => {
                const isActive = isActiveItem(item.url, pathname);

                return (
                  <MenuItemWithTooltip title={item.title} key={item.title}>
                    <SidebarMenuItem>
                      <SidebarMenuButton
                        asChild
                        className={cn(
                          "flex items-center justify-center rounded-lg transition-all duration-200",
                          isActive
                            ? "bg-purple-100 hover:bg-purple-200 dark:bg-purple-900/30 dark:hover:bg-purple-900/40"
                            : "bg-transparent hover:bg-muted/50",
                        )}
                      >
                        <a href={item.url} className="!h-12 w-full">
                          <item.Icon
                            size={24}
                            className={cn(
                              "h-6 w-6 transition-colors duration-200",
                              isActive
                                ? "text-purple-600"
                                : "text-muted-foreground hover:text-foreground",
                            )}
                          />
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </MenuItemWithTooltip>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
