const base = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");

/**
 * Prefix a path with the deployed base URL so assets resolve on GitHub Pages
 * and in local development.
 */
export const withBasePath = (path: string) => {
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${base}/${cleanPath}`;
};

/**
 * Convert a relative asset path to an absolute URL (useful for Open Graph).
 */
export const withAbsoluteUrl = (path: string) => {
  const prefixed = withBasePath(path);
  if (typeof window === "undefined") {
    return prefixed;
  }
  return new URL(prefixed, window.location.origin).toString();
};
