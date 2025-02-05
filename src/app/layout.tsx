import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

import {NavBar} from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {/* Page Content */}
        {children}
      </body>
    </html>
  );
}
