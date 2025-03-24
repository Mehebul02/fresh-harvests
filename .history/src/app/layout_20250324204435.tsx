import type { Metadata } from "next";
import {  Questrial,  } from "next/font/google";
import "./globals.css";

import { Toaster } from "sonner";
// import StoreProvider from "@/lib/providers/StoreProvider";

import StoreProvider from "@/lib/providers/StoreProvider";
const questrial = Questrial({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "Fresh Harvests",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  -  return children
  return (
    <html lang="en">
      <body className={questrial.className}>
      <StoreProvider>
         <Toaster position="top-center" />
        {children}
      </StoreProvider>
      </body>
    </html>
  );
}
