import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.scss";
import { FluidCanvasBg } from "@/features/FluidCanvasBg";
import clsx from "clsx";
import Header from "@/widgets/Header";
import { AppContext } from "./_providers";
import { cookies } from "next/headers";

const roboto = Roboto_Mono({
  subsets: ["cyrillic", "latin"],
  variable: "--roboto",
  preload: true,
});

export const metadata: Metadata = {
  title: "Дмитрий Романенков",
  description: "Сайт - визитка",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");
  return (
    <html lang="ru" data-theme={theme?.value ?? "dark"}>
      <AppContext initialValues={{ theme: theme?.value }}>
        <body className={clsx(roboto.className)}>
          <Header />
          <FluidCanvasBg>{children}</FluidCanvasBg>
        </body>
      </AppContext>
    </html>
  );
}
