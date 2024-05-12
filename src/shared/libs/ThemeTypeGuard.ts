import { Theme } from "@/app/_providers/ThemeProvider";

export const ThemeTypeGuard = (string: string | undefined): string is Theme =>
  string === "dark" || string === "light";
