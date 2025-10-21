"use client";

import { useEffect } from "react";
import type { JarallaxOptions } from "jarallax";

// Extend HTMLElement to include optional jarallax instance
interface JarallaxHTMLElement extends HTMLElement {
   jarallax?: {
      destroy: () => void;
   };
}

/**
 * Reusable hook to apply Jarallax parallax effect to elements with class `jarallax`.
 * @param speed Parallax speed (default 0.2)
 * @param options Additional Jarallax options
 */
export const useJarallax = (
   speed: number = 0.2,
   options?: Partial<JarallaxOptions>
) => {
   useEffect(() => {
      if (typeof window === "undefined") return; // SSR safety

      // Dynamically import jarallax only on client
      import("jarallax").then((mod) => {
         const jarallax = mod.jarallax as (
            elements: NodeListOf<JarallaxHTMLElement>,
            userOptions: JarallaxOptions
         ) => void;

         const elements = document.querySelectorAll<JarallaxHTMLElement>(".jarallax");

         if (elements.length > 0) {
            jarallax(elements, { speed, ...options });
         }

         return () => {
            elements.forEach((el) => {
               el.jarallax?.destroy();
            });
         };
      });
   }, [speed, options]);
};
