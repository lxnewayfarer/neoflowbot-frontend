import type React from "react"
import "./globals.css";
import type { Metadata } from "next"
import { Open_Sans } from 'next/font/google';
import { Header } from "@/components/layout/header";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "InFlowBot - Умные боты для вашего бизнеса",
  description:
    "InFlowBot - платформа, которая помогает магазинам увеличивать продажи с помощью интеллектуальных чат-ботов",
};

const openSans = Open_Sans({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={openSans.className}>
      <body>
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}


