"use client";

import {
  PropsWithChildren,
  createContext,
  useLayoutEffect,
  useState,
} from "react";

type TouchContext = {
  isTouch: boolean;
};

export const TouchContext = createContext<TouchContext>({
  isTouch: true,
});

export const TouchProvider = ({ children }: PropsWithChildren) => {
  const [isTouch, setIsTouch] = useState<boolean>(false);

  useLayoutEffect(() => {
    const matcher = window.matchMedia("(pointer: coarse)");

    if (matcher.matches !== isTouch) {
      setIsTouch(matcher.matches);
    }

    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches !== isTouch) {
        setIsTouch(e.matches);
      }
    };

    matcher.addEventListener("change", handleChange);

    return () => {
      matcher.removeEventListener("change", handleChange);
    };
  }, [isTouch]);

  return (
    <TouchContext.Provider value={{ isTouch }}>
      {children}
    </TouchContext.Provider>
  );
};
