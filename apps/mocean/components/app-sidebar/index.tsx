"use client";

import { usePathname } from "next/navigation";

import {
  Book,
  Bot,
  Brain,
  Folder,
  LucideIcon,
  RadioTower,
  Wrench,
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
    title: "模型服务",
    url: "/provider",
    Icon: RadioTower,
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
  // 先检查除对话外的其他页面是否激活
  const otherPages = items.filter((item) => item.url !== "/");
  const isOtherPageActive = otherPages.some((item) =>
    currentPath.startsWith(item.url),
  );

  // 如果是对话页面，且没有其他页面激活，则对话页面激活
  if (itemUrl === "/") {
    return !isOtherPageActive;
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
                            ? "bg-brand-primary-100 hover:bg-brand-primary-200 dark:bg-brand-primary-900/30 dark:hover:bg-brand-primary-900/40"
                            : "bg-transparent hover:bg-muted/50",
                        )}
                      >
                        <a href={item.url} className="!h-12 w-full">
                          <item.Icon
                            size={24}
                            className={cn(
                              "h-6 w-6 transition-colors duration-200",
                              isActive
                                ? "text-brand-primary"
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
