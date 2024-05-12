import { PropsWithChildren } from "react";
import { MediaContextProvider } from "./MediaContext";
import { ThemeProvider } from "./ThemeProvider";
import { ThemeTypeGuard } from "@/shared/libs/ThemeTypeGuard";
import { TouchProvider } from "./TouchContext";

interface AppContextProps extends PropsWithChildren {
  initialValues?: {
    theme?: string;
  };
}

export const AppContext = ({ children, initialValues }: AppContextProps) => {
  const initialTheme = ThemeTypeGuard(initialValues?.theme)
    ? initialValues.theme
    : undefined;

  return (
    <MediaContextProvider>
      <TouchProvider>
        <ThemeProvider initialTheme={initialTheme}>{children}</ThemeProvider>
      </TouchProvider>
    </MediaContextProvider>
  );
};
