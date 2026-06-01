"use client";

import { useEffect } from "react";

export const useScrollLock = (isLocked: boolean) => {
  useEffect(() => {
    if (typeof document === "undefined" || !isLocked) return;

    const html = document.documentElement;
    const { body } = document;

    const originalHtmlOverflow = html.style.overflow;
    const originalBodyOverflow = body.style.overflow;
    const originalPaddingRight = body.style.paddingRight;
    const originalHtmlOverscroll = html.style.overscrollBehavior;

    const scrollBarWidth = window.innerWidth - html.clientWidth;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";

    html.style.overflowX = "hidden";
    body.style.overflowX = "hidden";

    html.style.overscrollBehavior = "none";
    body.style.overscrollBehavior = "none";

    if (scrollBarWidth > 0) {
      body.style.paddingRight = `${scrollBarWidth}px`;
    }

    return () => {
      html.style.overflow = originalHtmlOverflow;
      body.style.overflow = originalBodyOverflow;
      html.style.overflowX = "";
      body.style.overflowX = "";
      body.style.paddingRight = originalPaddingRight;
      html.style.overscrollBehavior = originalHtmlOverscroll;
      body.style.overscrollBehavior = "";
    };
  }, [isLocked]);
};
