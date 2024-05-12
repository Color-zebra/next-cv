import { Theme } from "@/app/_providers/ThemeProvider";

export const getFluidColors = (theme: Theme) => {
  if (typeof global.window === undefined || !global.window?.getComputedStyle) {
    return false;
  }

  const root = getComputedStyle(document.documentElement);
  const COLOR_PALETTE = [root.getPropertyValue("--primary-color")];
  const BACK_COLOR = root.getPropertyValue("--bg-color");
  const SUNRAYS = theme === "dark";

  return {
    BACK_COLOR,
    COLOR_PALETTE,
    SUNRAYS,
  };
};
