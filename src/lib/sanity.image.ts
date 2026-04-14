import imageUrlBuilder from "@sanity/image-url";
import { getClient } from "./sanity.client";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  const client = getClient();
  if (!client) {
    throw new Error("Sanity client not configured. Set NEXT_PUBLIC_SANITY_PROJECT_ID.");
  }
  return imageUrlBuilder(client).image(source);
}
