import type { Metadata } from "next";
import { Questrial } from "next/font/google";
import "./globals.css";

import { Toaster } from "sonner";
import StoreProvider from "@/lib/providers/StoreProvider";

const questrial = Questrial({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Fresh Harvests",
  description: "Generated by create next app",
};

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <StoreProvider>
          <Toaster position="top-center" />
        <body className={questrial.className}>
          {children}
        </body>
      </StoreProvider>
    </html>
  );
}
