import { fallbackBriefs, fallbackNewsItems } from "../data/newsContent";

const API_BASE_URL =
  import.meta.env.VITE_CMS_API_URL ||
  import.meta.env.VITE_API_BASE_URL ||
  "https://ags-dashboard.vercel.app/api";

const formatDate = (dateTime) =>
  new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${dateTime}T00:00:00`));

const stripHtml = (value = "") => value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

const normalizeNewsItem = (item) => {
  const dateTime = item.dateTime || item.date_time || item.published_at || item.created_at;
  const content = item.body || item.content || item.summary || item.excerpt || "";
  const plainContent = stripHtml(content);

  return {
    slug: item.slug,
    category: item.category,
    title: item.title,
    date: item.date || (dateTime ? formatDate(String(dateTime).slice(0, 10)) : ""),
    dateTime: dateTime ? String(dateTime).slice(0, 10) : "",
    summary: item.summary || item.excerpt || plainContent,
    body: plainContent,
    image: item.image || "",
    featured: Boolean(item.featured),
  };
};

export const getFallbackNewsFeed = () => ({
  items: fallbackNewsItems,
  briefs: fallbackBriefs,
});

export async function fetchNewsFeed() {
  if (!API_BASE_URL) {
    return getFallbackNewsFeed();
  }

  try {
    const response = await fetch(`${API_BASE_URL.replace(/\/$/, "")}/news`);

    if (!response.ok) {
      throw new Error(`News request failed with ${response.status}`);
    }

    const payload = await response.json();
    const items = Array.isArray(payload.items) ? payload.items.map(normalizeNewsItem) : [];
    const briefs = Array.isArray(payload.briefs) ? payload.briefs : [];

    return {
      items: items.length ? items : fallbackNewsItems,
      briefs: briefs.length ? briefs : fallbackBriefs,
    };
  } catch (error) {
    console.warn("Using fallback news feed:", error);
    return getFallbackNewsFeed();
  }
}
