import { useEffect } from "react";
import { withAbsoluteUrl, withBasePath } from "@/lib/assetPath";

const needsAssetRewrite = (value?: string | null) =>
  Boolean(value && value.startsWith("/attached_assets/"));

export function useAssetBasePath() {
  useEffect(() => {
    const updateElement = (element: Element) => {
      if (element instanceof HTMLImageElement || element instanceof HTMLSourceElement) {
        const src = element.getAttribute("src");
        if (needsAssetRewrite(src)) {
          element.setAttribute("src", withBasePath(src!));
        }
        const srcset = element.getAttribute("srcset");
        if (needsAssetRewrite(srcset)) {
          element.setAttribute("srcset", withBasePath(srcset!));
        }
      }

      if (element instanceof HTMLLinkElement) {
        const rel = element.getAttribute("rel")?.toLowerCase();
        if (rel && ["icon", "apple-touch-icon", "shortcut icon"].includes(rel) && needsAssetRewrite(element.href)) {
          element.href = withAbsoluteUrl(element.getAttribute("href")!);
        }
      }

      if (element instanceof HTMLMetaElement) {
        const property = element.getAttribute("property") || element.getAttribute("name");
        if (property && ["og:image", "twitter:image"].includes(property) && needsAssetRewrite(element.content)) {
          element.content = withAbsoluteUrl(element.content);
        }
      }

      if (element instanceof HTMLElement) {
        const backgroundImage = element.style.backgroundImage;
        if (backgroundImage && backgroundImage.includes("/attached_assets/")) {
          element.style.backgroundImage = backgroundImage.replace(
            /\/attached_assets\//g,
            `${withBasePath("/attached_assets/")}`,
          );
        }
      }
    };

    const initialNodes = document.querySelectorAll("*");
    initialNodes.forEach((node) => updateElement(node));

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === "attributes" && mutation.target instanceof Element) {
          updateElement(mutation.target);
        }

        mutation.addedNodes.forEach((node) => {
          if (node instanceof Element) {
            updateElement(node);
            node.querySelectorAll?.("*").forEach((child) => updateElement(child));
          }
        });
      }
    });

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["src", "srcset", "href", "style", "content"],
    });

    return () => observer.disconnect();
  }, []);
}
