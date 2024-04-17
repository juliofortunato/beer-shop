import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "BrewNest",
  description: "Your Gateway to Beer Bliss!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`md:max-w-[80%] md:mx-auto ${dmSans.className}`}>
        {children}
      </body>
    </html>
  );
}
