"use client";

import { ThemeProvider } from "next-themes";

import ToasterProvider from "@/app/context/ToasterProvider";
import AppSidebar from "@/components/app-sidebar";
import { TitleBar } from "@/components/custom/title-bar";
import { SidebarProvider } from "@/components/ui/sidebar";

import "./globals.css";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body className="flex h-screen flex-col overflow-hidden bg-primary-light-100 font-bricolage-grotesque dark:bg-background">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="dark:bg-card">
            <TitleBar />
          </div>
          <div className="flex min-h-0 flex-1 overflow-hidden">
            <SidebarProvider>
              <ToasterProvider>
                <AppSidebar />
                <main className="h-full min-h-0 flex-1 overflow-hidden">
                  {children}
                </main>
              </ToasterProvider>
            </SidebarProvider>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
