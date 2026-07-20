import {
  ArrowRight,
  CalendarDays,
  GraduationCap,
  Newspaper,
  RefreshCw,
  School,
  Sparkles,
  Trophy,
  Umbrella,
  Users,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { fetchNewsFeed, getFallbackNewsFeed } from "../lib/newsApi";
import {
  fetchEvents,
  getFallbackEventsFeed,
  getTermCalendar,
  formatDateShort,
} from "../lib/eventsApi";
import MotionText from "./MotionText";

const categoryIcons = {
  Exam: GraduationCap,
  Ceremony: Trophy,
  Sports: Trophy,
  Academic: School,
  Vacation: Umbrella,
  Admissions: Users,
};

function SectionLabel({ children, light = false }) {
  return (
    <MotionText amount={0.45}>
      <p
        className={`text-xs font-extrabold uppercase tracking-[0.28em] ${
          light ? "text-blue-100" : "text-[#6657c8]"
        }`}
      >
        {children}
      </p>
      <div
        className={`mt-4 h-0.5 w-16 ${
          light ? "bg-blue-400" : "bg-[#6657c8]"
        }`}
      />
    </MotionText>
  );
}

export default function NewsPage() {
  const [feed, setFeed] = useState(() => getFallbackNewsFeed());
  const [events, setEvents] = useState(() => getFallbackEventsFeed());
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let isMounted = true;

    fetchNewsFeed()
      .then((nextFeed) => {
        if (!isMounted) return;
        setFeed(nextFeed);
        setStatus("ready");
      })
      .catch(() => {
        if (!isMounted) return;
        setStatus("fallback");
      });

    fetchEvents().then((nextEvents) => {
      if (isMounted) setEvents(nextEvents);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  const featuredStory = useMemo(
    () => feed.items.find((item) => item.featured) || feed.items[0],
    [feed.items]
  );
  const latestStories = useMemo(
    () => feed.items.filter((item) => item.slug !== featuredStory?.slug),
    [featuredStory?.slug, feed.items]
  );
  const termCalendar = useMemo(() => getTermCalendar(events), [events]);

  return (
    <main className="bg-[#fffefa] text-[#171727]">
      <section className="px-5 py-14 sm:px-8 lg:px-20 lg:py-20">
        <div className="mx-auto max-w-[1180px]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <SectionLabel>Spider News</SectionLabel>
              <MotionText
                as="h1"
                delay={0.08}
                className="mt-7 max-w-[620px] text-[2.2rem] font-bold leading-[1.05] sm:text-[3rem]"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                Latest updates from Accra Grammar School.
              </MotionText>
              <MotionText
                as="p"
                delay={0.14}
                className="mt-5 max-w-[640px] text-base leading-8 text-[#555568]"
              >
                School notices, examination updates, events, excursions, and
                community stories from the AGS news desk.
              </MotionText>
            </div>
            <div className="flex max-w-[420px] items-center gap-3 rounded-lg border border-[#ded8ef] bg-white p-4 text-sm font-semibold text-[#555568] shadow-[0_18px_46px_rgba(78,68,132,0.08)]">
              <RefreshCw
                size={18}
                className={status === "loading" ? "animate-spin text-[#6657c8]" : "text-[#6657c8]"}
              />
              {status === "loading"
                ? "Fetching news feed..."
                : "News feed ready for CMS updates."}
            </div>
          </div>

          {featuredStory && (
            <article className="mt-10 overflow-hidden rounded-lg border border-[#e4dfd2] bg-white p-8 shadow-[0_24px_70px_rgba(67,56,37,0.08)] sm:p-10 lg:p-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#fff3cc] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#a56f00]">
                <Sparkles size={15} strokeWidth={2.3} />
                Featured Update
              </div>
              <div className="mt-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#eeeaff] px-3 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#7b70cc]">
                    <Newspaper size={15} strokeWidth={2.3} />
                    {featuredStory.category}
                  </span>
                  <time
                    dateTime={featuredStory.dateTime}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#555568]"
                  >
                    <CalendarDays size={16} strokeWidth={2.1} />
                    {featuredStory.date}
                  </time>
                </div>
                <h3
                  className="mt-8 text-[2.1rem] font-bold leading-tight text-[#171727] sm:text-[2.7rem]"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  {featuredStory.title}
                </h3>
              </div>
              {featuredStory.image && (
                <img
                  src={featuredStory.image}
                  alt=""
                  className="mt-7 aspect-[16/7] w-full rounded-md object-cover"
                  loading="lazy"
                />
              )}
              <p className="mt-7 text-base leading-8 text-[#555568]">
                {featuredStory.body}
              </p>
            </article>
          )}

          <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_0.42fr]">
            <div className="grid gap-5 md:grid-cols-2">
              {latestStories.map((item) => (
                <article
                  key={item.slug}
                  className="rounded-lg border border-[#e4dfd2] bg-white p-6 transition hover:-translate-y-1 hover:border-[#c7bff1] hover:shadow-[0_20px_52px_rgba(86,72,150,0.1)]"
                >
                  {item.image && (
                    <img
                      src={item.image}
                      alt=""
                      className="mb-5 aspect-[16/10] w-full rounded-md object-cover"
                      loading="lazy"
                    />
                  )}
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center rounded-full bg-[#eeeaff] px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.16em] text-[#7b70cc]">
                      {item.category}
                    </span>
                    <time dateTime={item.dateTime} className="text-sm font-bold text-[#68687a]">
                      {item.date}
                    </time>
                  </div>
                  <h3 className="mt-5 text-2xl font-bold leading-snug text-[#171727]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#555568]">
                    {item.summary}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-[#6657c8]">
                    Read update
                    <ArrowRight size={16} strokeWidth={2.4} />
                  </div>
                </article>
              ))}
            </div>

            <aside className="rounded-lg border border-[#e4dfd2] bg-[#f8f4ea] p-6">
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#7b70cc]">
                Published Briefs
              </p>
              <div className="mt-5 space-y-4">
                {feed.briefs.map((brief) => (
                  <div key={brief} className="border-l-2 border-[#c7bff1] pl-4">
                    <p className="text-sm font-bold leading-6 text-[#26263a]">
                      {brief}
                    </p>
                  </div>
                ))}
              </div>
            </aside>
          </div>

          {/* Term Calendar */}
          <div className="mt-20">
            <SectionLabel>Academic Calendar</SectionLabel>
            <MotionText
              as="h2"
              delay={0.08}
              className="mt-7 max-w-[560px] text-[2rem] font-bold leading-[1.05] sm:text-[2.5rem]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Key dates for the 2025/2026 academic year.
            </MotionText>

            <div className="mt-10 rounded-lg border border-[#e4dfd2] bg-white p-8 sm:p-10">
              <div className="divide-y divide-[#e4dfd2]">
                {termCalendar.map((ev) => {
                  const Icon = categoryIcons[ev.category] || CalendarDays;
                  const isMultiDay = ev.startDate !== ev.endDate;
                  return (
                    <div key={`${ev.title}-${ev.startDate}`} className="flex items-center gap-5 py-5 first:pt-0 last:pb-0 sm:gap-8">
                      <div className="flex shrink-0 flex-col items-center">
                        <span className="text-lg font-extrabold leading-none text-[#7b70cc]">
                          {new Date(`${ev.startDate}T00:00:00`).getDate()}
                        </span>
                        <span className="mt-1 text-xs font-bold uppercase text-[#68687a]">
                          {new Intl.DateTimeFormat("en", { month: "short" }).format(new Date(`${ev.startDate}T00:00:00`))}
                        </span>
                      </div>
                      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${ev.featured ? "bg-[#7b70cc] text-white" : "bg-[#eeeaff] text-[#7b70cc]"}`}>
                        <Icon size={18} strokeWidth={2.3} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-base font-bold leading-tight text-[#171727]">{ev.title}</p>
                        {ev.description && (
                          <p className="mt-1 text-sm leading-6 text-[#68687a]">{ev.description}</p>
                        )}
                      </div>
                      <p className="hidden shrink-0 text-right text-sm font-bold text-[#68687a] sm:block">
                        {formatDateShort(ev.startDate)}
                        {isMultiDay && ` – ${formatDateShort(ev.endDate)}`}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
