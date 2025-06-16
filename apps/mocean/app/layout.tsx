"use client";

import ToasterProvider from "@/app/context/ToasterProvider";
import AppSidebar from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <SidebarProvider>
          <ToasterProvider>
            <AppSidebar />
            <main className="min-h-svh flex-1">{children}</main>
          </ToasterProvider>
        </SidebarProvider>
      </body>
    </html>
  );
}
