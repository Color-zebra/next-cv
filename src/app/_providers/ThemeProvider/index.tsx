"use client";

import {
  PropsWithChildren,
  createContext,
  useCallback,
  useLayoutEffect,
  useState,
} from "react";

export type Theme = "dark" | "light";

type ThemeContextType = {
  toggleTheme: () => void;
  theme: Theme;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
});

interface ThemeProviderProps extends PropsWithChildren {
  initialTheme?: Theme;
}

export const ThemeProvider = ({
  children,
  initialTheme,
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(initialTheme ?? "dark");

  const toggleTheme = useCallback(() => {
    if (theme === "dark") {
      setTheme(() => "light");
      document.cookie = `theme=light;path=/;`;
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      setTheme(() => "dark");
      document.cookie = `theme=dark;path=/;`;
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, [theme]);

  useLayoutEffect(() => {
    if (initialTheme) {
      // turn it on when I find a nice light theme
      //
      // } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      //   setTheme("light");
      //   document.cookie = `theme=light;path=/;`;
    } else {
      setTheme("dark");
      document.cookie = `theme=dark;path=/;`;
    }
  }, [initialTheme]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};
