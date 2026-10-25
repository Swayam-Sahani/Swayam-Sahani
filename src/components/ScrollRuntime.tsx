"use client";

import Script from "next/script";
import { useRef } from "react";

type ScrollCraftWindow = Window & {
  ScrollCraft?: {
    mount: (root: HTMLElement) => unknown;
  };
};

export function ScrollRuntime() {
  const mounted = useRef(false);

  return (
    <Script
      src="/scrollcraft.js"
      strategy="afterInteractive"
      onReady={() => {
        const browserWindow = window as ScrollCraftWindow;
        if (!mounted.current && browserWindow.ScrollCraft) {
          browserWindow.ScrollCraft.mount(document.body);
          mounted.current = true;
        }
      }}
    />
  );
}
