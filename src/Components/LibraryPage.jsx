import { BookOpen, ChevronDown, Clock, MapPin, Search } from "lucide-react";
import { Images } from "../assets/Images/Images";
import MotionText from "./MotionText";

const events = [
  {
    day: 16, month: "March", time: "8:00 am to 9:00 pm",
    location: "Accra, IL85976, Ghana",
    title: "Community Event: Cook Ghana",
    description: "The school invites you all to see the range of dishes available to Ghanaians.",
  },
  {
    day: 5, month: "February", time: "All day",
    location: "Accra Grammar School",
    title: "Parent Involvement Day",
    description: "Our school celebrating Parent Involvement Day on a date suitable to parents and the school.",
  },
  {
    day: 15, month: "April", time: "4:30 pm",
    location: "Undecided",
    title: "Excursions",
    description: "Discussion and community dialogue with school staff, parents and community members.",
  },
  {
    day: 13, month: "May", time: "6 Weeks",
    location: "Accra Grammar School, Oyibi",
    title: "BECE Boot Camp",
    description: "Year 9 pupils can accompany parents but will not be permitted in the meetings.",
  },
];

const menuItems = [
  "Home", "Library News", "Library Information",
  "Library Location", "Member Area", "Librarian", "Help on Search",
];

export default function LibraryPage() {
  return (
    <main className="bg-[#fffefa] text-[#171727]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={Images.agsCompoundDroneview1}
            alt=""
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061a34]/95 via-[#061a34]/80 to-[#061a34]/60" />
        </div>
        <div className="relative px-5 pb-12 pt-24 sm:px-8 lg:px-20 lg:pt-32">
          <div className="mx-auto max-w-[1180px]">
            <MotionText as="div" className="flex items-center gap-4">
              <img
                src={Images.agsLogo}
                alt="AGS Logo"
                className="h-14 w-14 shrink-0 rounded-full object-cover sm:h-16 sm:w-16"
              />
              <div>
                <h1
                  className="text-xl font-bold leading-tight text-white sm:text-2xl lg:text-3xl"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  Janet Catherine Rickert Library
                </h1>
                <p className="mt-1 text-sm text-blue-200/70">
                  Accra Grammar School Library Management System
                </p>
              </div>
            </MotionText>
          </div>
        </div>
      </section>

      <section className="px-5 py-10 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
            <div className="rounded-2xl border border-[#e8e5f0] bg-white p-6 shadow-[0_4px_24px_rgba(67,56,37,0.05)]">
              <p className="mb-3 text-[0.6rem] font-extrabold uppercase tracking-[0.2em] text-[#6657c8]">
                Menu
              </p>
              <nav className="flex flex-col gap-0.5">
                {menuItems.map((item) => (
                  <a
                    key={item}
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="rounded-md px-3 py-2 text-sm font-semibold text-[#555568] transition hover:bg-[#f2edff] hover:text-[#6657c8]"
                  >
                    {item}
                  </a>
                ))}
              </nav>

              <div className="mt-6 space-y-3 border-t border-[#e8e5f0] pt-6">
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="flex w-full items-center justify-center rounded-md bg-[#6657c8] px-4 py-2.5 text-xs font-extrabold text-white transition hover:bg-[#5546b8]"
                >
                  Librarian LOGIN
                </a>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="flex items-center justify-center gap-1.5 rounded-md border border-[#e8e5f0] px-4 py-2 text-xs font-semibold text-[#555568] transition hover:bg-[#f2edff] hover:text-[#6657c8]"
                >
                  <BookOpen size={12} />
                  About SLiMS
                </a>
                <div className="flex items-center justify-center gap-2 rounded-md border border-[#e8e5f0] bg-[#f7f4ed] px-4 py-2 text-xs text-[#555568]">
                  <span>Select Language</span>
                  <span className="inline-flex items-center gap-1 font-bold text-[#6657c8]">
                    English
                    <ChevronDown size={10} />
                  </span>
                </div>
              </div>
            </div>

            <div className="min-w-0">
              <div className="rounded-2xl border border-[#e8e5f0] bg-white p-6 shadow-[0_4px_24px_rgba(67,56,37,0.05)] sm:p-8">
                <p className="text-sm text-[#555568]">
                  start it by typing one or more keywords for title, author or subject
                </p>
                <div className="mt-4 flex gap-2">
                  <div className="relative flex-1">
                    <Search size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#c7bff1]" />
                    <input
                      type="text"
                      placeholder="Search"
                      className="w-full rounded-lg border border-[#e8e5f0] bg-[#fffefa] py-3 pl-11 pr-4 text-sm text-[#171727] placeholder-[#c7bff1] outline-none transition focus:border-[#6657c8]"
                    />
                  </div>
                  <button className="rounded-lg bg-[#6657c8] px-6 text-sm font-extrabold text-white transition hover:bg-[#5546b8]">
                    Search
                  </button>
                </div>
                <div className="mt-3">
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="text-xs font-semibold text-[#6657c8] hover:text-[#5546b8]"
                  >
                    Advanced Search
                  </a>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-[#e8e5f0] bg-white p-6 shadow-[0_4px_24px_rgba(67,56,37,0.05)] sm:p-8">
                <h2
                  className="text-xl font-bold text-[#171727]"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  Upcoming Events
                </h2>
                <div className="mt-6 space-y-4">
                  {events.map((event) => (
                    <div
                      key={event.title}
                      className="flex gap-4 rounded-xl border border-[#eeeaf6] bg-[#fffefa] p-5 transition hover:border-[#dcd6f3]"
                    >
                      <div className="flex shrink-0 flex-col items-center">
                        <span className="text-xl font-black leading-none text-[#6657c8]">
                          {event.day}
                        </span>
                        <span className="mt-1 text-[0.6rem] font-extrabold uppercase tracking-wider text-[#555568]">
                          {event.month}
                        </span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-base font-bold text-[#171727]">{event.title}</h3>
                        <p className="mt-1.5 text-sm leading-6 text-[#555568]">
                          {event.description}
                        </p>
                        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[0.65rem] font-bold text-[#6657c8]">
                          <span className="inline-flex items-center gap-1">
                            <Clock size={11} />
                            {event.time}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <MapPin size={11} />
                            {event.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
