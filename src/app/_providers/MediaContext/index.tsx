"use client";

import {
  PropsWithChildren,
  createContext,
  useCallback,
  useLayoutEffect,
  useState,
} from "react";

type MediaContext = {
  isMobile: boolean;
  isMobileL: boolean;
  isTablet: boolean;
  isTabletL: boolean;
  isLaptop: boolean;
  isLaptopL: boolean;
  isDesktop: boolean;
  isDesktopL: boolean;
};

const defaultContext: MediaContext = {
  isMobile: false,
  isMobileL: false,
  isTablet: false,
  isTabletL: false,
  isLaptop: false,
  isLaptopL: false,
  isDesktop: false,
  isDesktopL: false,
};

const MediaContext = createContext(defaultContext);

export const MediaContextProvider = ({ children }: PropsWithChildren) => {
  const [mediaDevices, setMediaDevices] =
    useState<MediaContext>(defaultContext);

  const handleResize = useCallback(
    (windowWidth: number) => {
      const newMedia = { ...defaultContext };
      newMedia.isMobile = windowWidth >= 360;
      newMedia.isMobileL = windowWidth >= 450;
      newMedia.isTablet = windowWidth >= 768;
      newMedia.isTabletL = windowWidth >= 1024;
      newMedia.isLaptop = windowWidth >= 1280;
      newMedia.isLaptopL = windowWidth >= 1440;
      newMedia.isDesktop = windowWidth >= 1920;
      newMedia.isDesktopL = windowWidth >= 2560;

      if (JSON.stringify(newMedia) !== JSON.stringify(mediaDevices)) {
        setMediaDevices(newMedia);
      }
    },
    [mediaDevices],
  );

  useLayoutEffect(() => {
    handleResize(window.innerWidth);
    window.onresize = () => handleResize(window.innerWidth);
  }, [handleResize]);

  return (
    <MediaContext.Provider value={mediaDevices}>
      {children}
    </MediaContext.Provider>
  );
};
