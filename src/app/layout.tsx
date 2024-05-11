import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.scss";
import { FluidCanvasBg } from "@/features/FluidCanvasBg";
import Head from "next/head";
import clsx from "clsx";
import Header from "@/widgets/Header";

const roboto = Roboto_Mono({
  subsets: ["cyrillic", "latin"],
  variable: "--roboto",
});

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
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <body className={clsx(roboto.className)}>
        <Header />
        <FluidCanvasBg>{children}</FluidCanvasBg>
      </body>
    </html>
  );
}
