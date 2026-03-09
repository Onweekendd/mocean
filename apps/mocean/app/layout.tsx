"use client";

import { ThemeProvider } from "next-themes";

import { SWRConfig } from "swr";

import ToasterProvider from "@/app/context/ToasterProvider";
import AppSidebar from "@/components/app-sidebar";
import { TitleBar } from "@/components/custom/title-bar";
import { SidebarProvider } from "@/components/ui/sidebar";

import "./globals.css";

const defaultSWRConfig = {
  refreshInterval: 0,
  revalidateOnFocus: false,
  revalidateOnReconnect: true,
  dedupingInterval: 60000,
  errorRetryCount: 3,
  errorRetryInterval: 5000
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning className="bg-transparent">
      <body className="h-screen bg-transparent">
        <div
          id="app"
          className="flex h-full flex-col overflow-hidden rounded-[1rem] bg-brand-main font-bricolage-grotesque"
        >
          <SWRConfig value={defaultSWRConfig}>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <TitleBar />
              <div className="flex min-h-0 flex-1 overflow-hidden">
                <SidebarProvider>
                  <ToasterProvider>
                    <AppSidebar />
                    <main className="h-full min-h-0 flex-1 overflow-hidden bg-brand-main">
                      {children}
                    </main>
                  </ToasterProvider>
                </SidebarProvider>
              </div>
            </ThemeProvider>
          </SWRConfig>
        </div>
      </body>
    </html>
  );
}
