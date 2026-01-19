'use client';

import { useSyncExternalStore } from 'react';

export const breakpoints = {
  mobile: 450,
  tablet: 600,
  laptop: 970,
  desktop: 1400,
  desktopUp: 1600,
};

export default function useResponsive() {
  const windowWidth = useSyncExternalStore(
    subscribeToWindowChange,
    getWindowWidth,
    getInitialWindowWidth
  );

  return {
    isMobile: windowWidth > 0 && windowWidth <= breakpoints.mobile,
    isTablet:
      windowWidth > breakpoints.mobile && windowWidth < breakpoints.laptop,
    isLaptop:
      windowWidth >= breakpoints.laptop && windowWidth < breakpoints.desktop,
    isDesktop:
      windowWidth >= breakpoints.desktop && windowWidth < breakpoints.desktopUp,
    isDesktopUp: windowWidth >= breakpoints.desktopUp,
    isInitialized: windowWidth > 0,
  };
}

function getInitialWindowWidth() {
  return 0;
}

function getWindowWidth() {
  return window.innerWidth;
}

function subscribeToWindowChange(callback: () => void) {
  window.addEventListener('resize', callback, false);

  return () => window.removeEventListener('resize', callback, false);
}
