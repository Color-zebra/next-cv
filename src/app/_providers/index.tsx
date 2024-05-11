import { PropsWithChildren } from "react";
import { MediaContextProvider } from "./MediaContext";

export const AppContext = ({ children }: PropsWithChildren) => (
  <MediaContextProvider>{children}</MediaContextProvider>
);
