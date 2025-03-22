import type { Metadata } from "next";
import {  Jost, Questrial,  } from "next/font/google";
import "./globals.css";

import { Toaster } from "sonner";
import StoreProvider from "@/lib/providers/StoreProvider";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// const rubik = Rubik({
//   weight: '400',
//   subsets: ['latin'],
// })
// const questrial = Questrial({
//   weight: '400',
//   subsets: ['latin'],
// })
const jost = Q({
  weight: '400',
  subsets: ['latin'],
})
export const metadata: Metadata = {
  title: "Fresh Harvests",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jost.className}>
      <StoreProvider>
         <Toaster position="top-center" />
        {children}
      </StoreProvider>
      </body>
    </html>
  );
}