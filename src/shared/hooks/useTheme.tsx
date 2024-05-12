import { ThemeContext } from "@/app/_providers/ThemeProvider";
import { useContext } from "react";

export const useTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return { theme, toggleTheme };
};
