import { useEffect, useState } from "react";
import { CalendarDays, GraduationCap, MapPin, School, Trophy, Umbrella, Users } from "lucide-react";
import { Images } from "../assets/Images/Images";
import { fetchEvents, getFallbackEventsFeed, getTermCalendar, formatDateShort } from "../lib/eventsApi";
import MotionText from "./MotionText";

const categoryIcons = {
  Exam: GraduationCap,
  Ceremony: Trophy,
  Sports: Trophy,
  Academic: School,
  Vacation: Umbrella,
  Admissions: Users,
};

function SectionLabel({ children }) {
  return (
    <>
      <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#6657c8]">
        {children}
      </p>
      <div className="mt-4 h-0.5 w-16 bg-[#6657c8]" />
    </>
  );
}

export default function EventsPage() {
  const [events, setEvents] = useState(() => getFallbackEventsFeed());

  useEffect(() => {
    fetchEvents().then(setEvents);
  }, []);

  const termCalendar = getTermCalendar(events);

  return (
    <main className="bg-[#fffefa] text-[#171727]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={Images.agsVisaday1}
            alt=""
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061a34]/90 via-[#061a34]/70 to-[#061a34]/50" />
        </div>
        <div className="relative px-5 pb-16 pt-24 sm:px-8 lg:px-20 lg:pt-32">
          <div className="mx-auto max-w-[1180px]">
            <MotionText as="p" className="text-xs font-extrabold uppercase tracking-[0.28em] text-blue-200">
              AGS / Events
            </MotionText>
            <MotionText
              as="h1"
              delay={0.08}
              className="mt-4 max-w-[720px] text-[2.35rem] font-bold leading-[1.04] text-white sm:text-[3.15rem] lg:text-[3.6rem]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Upcoming Events & Activities
            </MotionText>
            <MotionText
              as="p"
              delay={0.14}
              className="mt-5 max-w-[640px] text-lg leading-8 text-blue-100"
            >
              Stay connected with the latest events, community gatherings, and
              important dates at Accra Grammar School.
            </MotionText>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-[900px]">
          <MotionText>
            <SectionLabel>Calendar</SectionLabel>
            <h2
              className="mt-5 text-[2rem] font-bold leading-[1.06] text-[#171727] sm:text-[2.5rem]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              School Events
            </h2>
          </MotionText>

          <div className="mt-10 rounded-2xl border border-[#e8e5f0] bg-white p-6 shadow-[0_4px_24px_rgba(67,56,37,0.05)] sm:p-8">
            <div className="divide-y divide-[#e4dfd2]">
              {termCalendar.map((ev) => {
                const Icon = categoryIcons[ev.category] || CalendarDays;
                const start = new Date(`${ev.startDate}T00:00:00`);
                const end = new Date(`${ev.endDate}T00:00:00`);
                const isMultiDay = ev.startDate !== ev.endDate;
                return (
                  <div key={`${ev.title}-${ev.startDate}`} className="flex items-center gap-5 py-5 first:pt-0 last:pb-0 sm:gap-8">
                    <div className="flex shrink-0 flex-col items-center">
                      <span className="text-lg font-extrabold leading-none text-[#6657c8]">
                        {start.getDate()}
                      </span>
                      <span className="mt-1 text-xs font-bold uppercase text-[#555568]">
                        {new Intl.DateTimeFormat("en", { month: "short" }).format(start)}
                      </span>
                    </div>
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${ev.featured ? "bg-[#6657c8] text-white" : "bg-[#f2edff] text-[#6657c8]"}`}>
                      <Icon size={18} strokeWidth={2.3} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-base font-bold leading-tight text-[#171727]">{ev.title}</p>
                      {ev.description && (
                        <p className="mt-1 text-sm leading-6 text-[#555568]">{ev.description}</p>
                      )}
                      {ev.location && (
                        <p className="mt-1.5 text-xs font-semibold text-[#6657c8] inline-flex items-center gap-1">
                          <MapPin size={11} />
                          {ev.location}
                        </p>
                      )}
                    </div>
                    <p className="hidden shrink-0 text-right text-sm font-bold text-[#555568] sm:block">
                      {formatDateShort(ev.startDate)}
                      {isMultiDay && ` – ${formatDateShort(ev.endDate)}`}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f4ed] px-5 py-16 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-[900px] text-center">
          <MotionText>
            <SectionLabel>Stay Informed</SectionLabel>
            <h2
              className="mx-auto mt-5 max-w-[640px] text-[2rem] font-bold leading-[1.06] text-[#171727] sm:text-[2.5rem]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Want to add an event?
            </h2>
            <p className="mx-auto mt-5 max-w-[560px] text-base leading-8 text-[#555568]">
              Parents and community members can reach out to the school
              administration to have their events included on the school
              calendar.
            </p>
            <a
              href="/contacts/"
              onClick={(event) => {
                event.preventDefault();
                const targetUrl = new URL("/contacts/", window.location.origin);
                window.history.pushState({}, "", `${targetUrl.pathname}${targetUrl.hash}`);
                window.dispatchEvent(new Event("ags:navigate"));
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 bg-[#6657c8] px-7 text-sm font-extrabold text-white shadow-[0_20px_48px_rgba(102,87,200,0.28)] transition hover:-translate-y-1 hover:bg-[#5546b8]"
            >
              Contact Us
            </a>
          </MotionText>
        </div>
      </section>
    </main>
  );
}
