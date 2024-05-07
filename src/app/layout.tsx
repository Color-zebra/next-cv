import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FluidCanvasBg } from "@/features/FluidCanvasBg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Дмитрий Романенков",
  description: "Сайт - портфолио",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FluidCanvasBg>{children}</FluidCanvasBg>
      </body>
    </html>
  );
}
