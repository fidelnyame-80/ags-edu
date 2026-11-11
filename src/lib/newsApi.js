import { fallbackBriefs, fallbackNewsItems } from "../data/newsContent";

export const getFallbackNewsFeed = () => ({
  items: fallbackNewsItems,
  briefs: fallbackBriefs,
});

// News is bundled with the Bluehost site; no external CMS request is made.
export async function fetchNewsFeed() {
  return getFallbackNewsFeed();
}
