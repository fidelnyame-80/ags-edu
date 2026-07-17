const API_BASE_URL =
  import.meta.env.VITE_CMS_API_URL ||
  import.meta.env.VITE_API_BASE_URL ||
  "https://ags-dashboard.vercel.app/api";

const formatDate = (dateStr) =>
  new Intl.DateTimeFormat("en", { month: "long", day: "numeric" }).format(new Date(`${dateStr}T00:00:00`));

const formatDateShort = (dateStr) =>
  new Intl.DateTimeFormat("en", { month: "short", day: "numeric" }).format(new Date(`${dateStr}T00:00:00`));

const normalizeEvent = (item) => ({
  title: item.title,
  description: item.description || item.summary || "",
  startDate: item.startDate || item.start_date || item.dateTime || item.date,
  endDate: item.endDate || item.end_date || item.startDate || item.start_date || item.dateTime || item.date,
  location: item.location || "",
  category: item.category || "General",
  featured: Boolean(item.featured),
});

export const fallbackEvents = [
  {
    title: "General Rehearsals — VISA Day / Graduation",
    description: "Recurring rehearsals every Wednesday and Friday leading up to the graduation ceremony.",
    startDate: "2026-07-01",
    endDate: "2026-08-07",
    location: "AGS Campus",
    category: "Ceremony",
    featured: false,
  },
  {
    title: "End-of-Quarter Exams (Part I)",
    description: "First part of the end-of-quarter examinations for all grades.",
    startDate: "2026-07-29",
    endDate: "2026-07-31",
    location: "AGS Campus",
    category: "Exam",
    featured: true,
  },
  {
    title: "End-of-Quarter Exams (Part II)",
    description: "Second part of the end-of-quarter examinations for all grades.",
    startDate: "2026-08-03",
    endDate: "2026-08-06",
    location: "AGS Campus",
    category: "Exam",
    featured: true,
  },
  {
    title: "VISA Day / Graduation Ceremony",
    description: "Graduation ceremony celebrating our final-year students.",
    startDate: "2026-08-09",
    endDate: "2026-08-09",
    location: "AGS Assembly Hall",
    category: "Ceremony",
    featured: true,
  },
  {
    title: "Inter Sections Sports Festival",
    description: "Annual inter-house sports competition across all sections.",
    startDate: "2026-08-11",
    endDate: "2026-08-12",
    location: "AGS Sports Field",
    category: "Sports",
    featured: false,
  },
  {
    title: "Last School Day – 4th Quarter",
    description: "Final school day of the 2025/2026 academic year.",
    startDate: "2026-08-13",
    endDate: "2026-08-13",
    location: "AGS Campus",
    category: "Academic",
    featured: true,
  },
  {
    title: "Vacation Begins",
    description: "School closes for the end-of-year vacation.",
    startDate: "2026-08-14",
    endDate: "2026-08-14",
    location: "AGS Campus",
    category: "Vacation",
    featured: false,
  },
  {
    title: "Placement Exams (Fresh Students)",
    description: "Placement assessments for newly admitted students.",
    startDate: "2026-08-18",
    endDate: "2026-08-19",
    location: "AGS Campus",
    category: "Admissions",
    featured: false,
  },
  {
    title: "Book Fair",
    description: "Annual book fair featuring educational resources for the upcoming academic year.",
    startDate: "2026-09-03",
    endDate: "2026-09-05",
    location: "AGS Campus",
    category: "Academic",
    featured: false,
  },
  {
    title: "Resumption – 1st Quarter 2026/27",
    description: "First day of the 2026/2027 academic year.",
    startDate: "2026-09-15",
    endDate: "2026-09-15",
    location: "AGS Campus",
    category: "Academic",
    featured: true,
  },
];

export const getFallbackEventsFeed = () => fallbackEvents;

export async function fetchEvents() {
  if (!API_BASE_URL) return getFallbackEventsFeed();

  try {
    const response = await fetch(`${API_BASE_URL.replace(/\/$/, "")}/events`);

    if (!response.ok) throw new Error(`Events request failed with ${response.status}`);

    const payload = await response.json();
    const items = Array.isArray(payload) ? payload.map(normalizeEvent) : [];

    return items.length ? items : getFallbackEventsFeed();
  } catch (error) {
    console.warn("Using fallback events feed:", error);
    return getFallbackEventsFeed();
  }
}

export function getCurrentEvent(events) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return events.find((e) => {
    const start = new Date(`${e.startDate}T00:00:00`);
    const end = new Date(`${e.endDate}T00:00:00`);
    end.setHours(23, 59, 59, 999);
    return today >= start && today <= end;
  }) || null;
}

export function getNextEvent(events) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return events
    .filter((e) => {
      const end = new Date(`${e.endDate}T00:00:00`);
      end.setHours(23, 59, 59, 999);
      return end >= today;
    })
    .sort((a, b) => new Date(a.startDate) - new Date(b.startDate))[0] || null;
}

export function getNextFeaturedEvent(events) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return events
    .filter((e) => {
      const end = new Date(`${e.endDate}T00:00:00`);
      end.setHours(23, 59, 59, 999);
      return e.featured && end >= today;
    })
    .sort((a, b) => new Date(a.startDate) - new Date(b.startDate))[0] || null;
}

export function getUpcomingEvents(events, count = 4) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return events
    .filter((e) => {
      const end = new Date(`${e.endDate}T00:00:00`);
      end.setHours(23, 59, 59, 999);
      return end >= today;
    })
    .sort((a, b) => new Date(a.startDate) - new Date(b.startDate))
    .slice(0, count);
}

export function getEventCards(events, excludeEvent, count = 3) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return events
    .filter((e) => {
      if (excludeEvent && e.title === excludeEvent.title && e.startDate === excludeEvent.startDate) return false;
      const end = new Date(`${e.endDate}T00:00:00`);
      end.setHours(23, 59, 59, 999);
      return end >= today;
    })
    .sort((a, b) => new Date(a.startDate) - new Date(b.startDate))
    .slice(0, count);
}

export function getTermCalendar(events) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return events
    .filter((e) => {
      const end = new Date(`${e.endDate}T00:00:00`);
      end.setHours(23, 59, 59, 999);
      return end >= today;
    })
    .sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
}

export { formatDate, formatDateShort };
