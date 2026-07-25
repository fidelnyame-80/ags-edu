import { CalendarDays, Clock, MapPin } from "lucide-react";
import { Images } from "../assets/Images/Images";
import MotionText from "./MotionText";

const events = [
  {
    date: { day: 16, month: "March", year: 2026 },
    time: "8:00 am to 9:00 pm",
    location: "Accra, IL85976, Ghana",
    title: "Community Event: Cook Ghana",
    description:
      "The school invites you all to see the range of dishes available to Ghanaians.",
  },
  {
    date: { day: 5, month: "February", year: 2026 },
    time: "All day",
    location: "Accra Grammar School",
    title: "Parent Involvement Day",
    description:
      "Our school celebrating Parent Involvement Day on a date suitable to parents and the school.",
  },
  {
    date: { day: 15, month: "April", year: 2026 },
    time: "4:30 pm",
    location: "Undecided",
    title: "Excursions",
    description:
      "Discussion and community dialogue with school staff, parents and community members.",
  },
  {
    date: { day: 13, month: "May", year: 2026 },
    time: "6 Weeks",
    location: "Accra Grammar School, Oyibi",
    title: "BECE Boot Camp",
    description:
      "Year 9 pupils can accompany parents but will not be permitted in the meetings.",
  },
];

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

          <div className="mt-10 space-y-6">
            {events.map((event, i) => (
              <MotionText
                key={event.title}
                as="article"
                delay={i * 0.06}
                className="flex gap-5 rounded-2xl border border-[#e8e5f0] bg-white p-6 shadow-[0_4px_24px_rgba(67,56,37,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(67,56,37,0.1)] sm:gap-8 sm:p-8"
              >
                <div className="flex shrink-0 flex-col items-center">
                  <span className="text-[1.8rem] font-black leading-none text-[#6657c8] sm:text-[2.2rem]">
                    {event.date.day}
                  </span>
                  <span className="mt-1 text-xs font-extrabold uppercase tracking-[0.1em] text-[#555568]">
                    {event.date.month}
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-xl font-bold text-[#171727] sm:text-2xl">
                    {event.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[#555568]">
                    {event.description}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-bold text-[#6657c8]">
                    <span className="inline-flex items-center gap-1.5">
                      <Clock size={13} strokeWidth={2.4} />
                      {event.time}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={13} strokeWidth={2.4} />
                      {event.location}
                    </span>
                  </div>
                </div>
              </MotionText>
            ))}
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
