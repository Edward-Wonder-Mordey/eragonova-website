import metadata from "./routeMeta.json";

export const SITE_URL = "https://eragonova.com";
export const SOCIAL_IMAGE = `${SITE_URL}/eragonova-logo.jpg`;
export const routeMeta = metadata;

export function routePath(route) {
  return routeMeta[route]?.path || "/";
}
