import { Calendar, MapPin, Medal, Newspaper, Trophy } from "lucide-react";
import { Images } from "../assets/Images/Images";
import MotionText from "./MotionText";

const handleNavClick = (event, href) => {
  event.preventDefault();
  const targetUrl = new URL(href, window.location.origin);
  window.history.pushState({}, "", `${targetUrl.pathname}${targetUrl.hash}`);
  window.dispatchEvent(new Event("ags:navigate"));
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const newsItems = [
  {
    title: "Inter-School Athletics Championship",
    date: "March 2026",
    body: "AGS secured 3rd place overall at the Greater Accra Regional Inter-School Athletics Championship, with standout performances in track and field events.",
  },
  {
    title: "New Sports Complex Update",
    date: "February 2026",
    body: "Construction of the new multi-purpose sports complex is progressing steadily, with expected completion in the next academic year.",
  },
  {
    title: "Football Team Wins Zonal Tournament",
    date: "January 2026",
    body: "The AGS U-15 football team emerged victorious at the Kpone Katamanso District Zonal Tournament, qualifying for the regional stage.",
  },
];

const scheduleItems = [
  { sport: "Track & Field", day: "Monday & Wednesday", time: "3:00 PM - 5:00 PM" },
  { sport: "Football", day: "Tuesday & Thursday", time: "3:00 PM - 5:00 PM" },
  { sport: "Basketball", day: "Wednesday & Friday", time: "3:00 PM - 5:00 PM" },
  { sport: "Volleyball", day: "Tuesday & Friday", time: "2:30 PM - 4:30 PM" },
  { sport: "Table Tennis", day: "Monday & Thursday", time: "2:30 PM - 4:00 PM" },
  { sport: "Athletics Training", day: "Saturday", time: "7:00 AM - 10:00 AM" },
];

const championshipItems = [
  { year: "2025", title: "Greater Accra Regional Athletics", position: "3rd Place" },
  { year: "2024", title: "Kpone Katamanso District Games", position: "1st Place" },
  { year: "2023", title: "Inter-School Football Competition", position: "Runners-Up" },
  { year: "2022", title: "Regional Track & Field Championships", position: "2nd Place" },
];

const facilityItems = [
  {
    name: "Main Sports Field",
    description: "A standard multi-purpose field for football, athletics, and outdoor sports activities.",
  },
  {
    name: "Basketball Court",
    description: "Full-sized outdoor basketball court with proper markings and hoops.",
  },
  {
    name: "Volleyball Court",
    description: "Dedicated volleyball court for both practice and competitive matches.",
  },
  {
    name: "Table Tennis Facility",
    description: "Indoor table tennis facility with regulation tables and equipment.",
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

export default function SportsPage() {
  return (
    <main className="bg-[#fffefa] text-[#171727]">
      <section className="px-5 pb-4 pt-24 sm:px-8 lg:px-20 lg:pt-32">
        <div className="mx-auto max-w-[1180px]">
          <MotionText as="p" className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#6657c8]">
            AGS / Sports
          </MotionText>
          <MotionText
            as="h1"
            delay={0.08}
            className="mt-4 text-[2.35rem] font-bold leading-[1.04] text-[#171727] sm:text-[3.15rem] lg:text-[3.6rem]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Sports
          </MotionText>
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-[1180px]">
          <MotionText as="div" className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <SectionLabel>School Athletics</SectionLabel>
              <h2
                className="mt-5 text-[2rem] font-bold leading-[1.06] text-[#171727] sm:text-[2.5rem]"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                Welcome to School Athletics
              </h2>
              <p className="mt-5 text-base leading-8 text-[#555568]">
                Our students learn much more than physical skills through their
                participation in athletics. The collaborative experience of
                pursuing and attaining a common goal in athletics is unique, as
                it is combined with interscholastic competition. We are proud of
                our winning tradition.
              </p>
              <p className="mt-4 text-base leading-8 text-[#555568]">
                Through this experience, our students are able to develop courage
                as they take risks, strength while displaying finesse, competitive
                intensity while exhibiting generosity of spirit, and mental as
                well as physical endurance.
              </p>
              <p className="mt-6 text-sm font-semibold text-[#6657c8]">
                Francis Kwakuvi, Director of Athletics
              </p>
            </div>
            <div className="relative">
              <img
                src={Images.sports}
                alt="AGS students in athletic action"
                className="w-full rounded-2xl object-cover shadow-[0_24px_70px_rgba(67,56,37,0.1)]"
                loading="lazy"
              />
            </div>
          </MotionText>
        </div>
      </section>

      <section className="bg-[#f7f4ed] px-5 py-16 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-[1180px]">
          <MotionText>
            <SectionLabel>News</SectionLabel>
            <h2
              className="mt-5 text-[2rem] font-bold leading-[1.06] text-[#171727] sm:text-[2.5rem]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Athletics News
            </h2>
          </MotionText>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {newsItems.map((item, i) => (
              <MotionText
                key={item.title}
                as="article"
                delay={i * 0.06}
                className="rounded-2xl border border-[#e8e5f0] bg-white p-6 shadow-[0_4px_24px_rgba(67,56,37,0.05)]"
              >
                <div className="flex items-center gap-2 text-xs font-bold text-[#6657c8]">
                  <Newspaper size={14} strokeWidth={2.4} />
                  <span>{item.date}</span>
                </div>
                <h3 className="mt-3 text-lg font-extrabold text-[#171727]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-[#555568]">
                  {item.body}
                </p>
              </MotionText>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-[1180px]">
          <MotionText>
            <SectionLabel>Schedule</SectionLabel>
            <h2
              className="mt-5 text-[2rem] font-bold leading-[1.06] text-[#171727] sm:text-[2.5rem]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Athletics Schedule
            </h2>
          </MotionText>
          <div className="mt-8 overflow-hidden rounded-2xl border border-[#e8e5f0] bg-white shadow-[0_4px_24px_rgba(67,56,37,0.05)]">
            <div className="grid grid-cols-3 gap-4 border-b border-[#e8e5f0] bg-[#f7f4ed] px-6 py-4 text-xs font-extrabold uppercase tracking-[0.14em] text-[#6657c8]">
              <span>Sport</span>
              <span>Day</span>
              <span>Time</span>
            </div>
            {scheduleItems.map((item, i) => (
              <div
                key={item.sport}
                className={`grid grid-cols-3 gap-4 px-6 py-4 text-sm ${
                  i < scheduleItems.length - 1 ? "border-b border-[#eeeaf6]" : ""
                }`}
              >
                <span className="font-bold text-[#171727]">{item.sport}</span>
                <span className="text-[#555568]">{item.day}</span>
                <span className="text-[#555568]">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f4ed] px-5 py-16 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-[1180px]">
          <MotionText>
            <SectionLabel>Honours</SectionLabel>
            <h2
              className="mt-5 text-[2rem] font-bold leading-[1.06] text-[#171727] sm:text-[2.5rem]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Championships
            </h2>
          </MotionText>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {championshipItems.map((item, i) => (
              <MotionText
                key={item.title}
                as="div"
                delay={i * 0.06}
                className="flex items-center gap-4 rounded-2xl border border-[#e8e5f0] bg-white p-5 shadow-[0_4px_24px_rgba(67,56,37,0.05)]"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f2edff]">
                  <Medal className="text-[#6657c8]" size={24} strokeWidth={2} />
                </div>
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-[#6657c8]">
                    <Trophy size={13} strokeWidth={2.4} />
                    <span>{item.year}</span>
                  </div>
                  <h3 className="mt-0.5 text-sm font-extrabold text-[#171727]">
                    {item.title}
                  </h3>
                  <p className="text-sm font-semibold text-[#2f8a52]">
                    {item.position}
                  </p>
                </div>
              </MotionText>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-[1180px]">
          <MotionText>
            <SectionLabel>Infrastructure</SectionLabel>
            <h2
              className="mt-5 text-[2rem] font-bold leading-[1.06] text-[#171727] sm:text-[2.5rem]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Facilities
            </h2>
          </MotionText>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {facilityItems.map((item, i) => (
              <MotionText
                key={item.name}
                as="div"
                delay={i * 0.06}
                className="rounded-2xl border border-[#e8e5f0] bg-white p-6 shadow-[0_4px_24px_rgba(67,56,37,0.05)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f2edff]">
                  <MapPin className="text-[#6657c8]" size={20} strokeWidth={2} />
                </div>
                <h3 className="mt-4 text-lg font-extrabold text-[#171727]">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm leading-7 text-[#555568]">
                  {item.description}
                </p>
              </MotionText>
            ))}
          </div>
          <div className="mt-6">
            <img
              src={Images.sports2}
              alt="AGS sports facility"
              className="w-full rounded-2xl object-cover shadow-[0_24px_70px_rgba(67,56,37,0.1)]"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#061a34] px-5 py-16 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-[1180px] text-center">
          <MotionText>
            <SectionLabel>Resources</SectionLabel>
            <h2
              className="mx-auto mt-5 max-w-[680px] text-[2rem] font-bold leading-[1.06] text-white sm:text-[2.5rem]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Athletics Resources
            </h2>
            <p className="mx-auto mt-5 max-w-[640px] text-base leading-8 text-blue-100">
              For more information about our athletics programme, including team
              selections, fixtures, and coach contacts, please reach out to the
              Athletics Department.
            </p>
            <a
              href="/contacts/"
              onClick={(event) => handleNavClick(event, "/contacts/")}
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 bg-[#6657c8] px-7 text-sm font-extrabold text-white shadow-[0_20px_48px_rgba(102,87,200,0.28)] transition hover:-translate-y-1 hover:bg-[#5546b8]"
            >
              Contact Athletics Department
              <Calendar size={15} strokeWidth={2.4} />
            </a>
          </MotionText>
        </div>
      </section>
    </main>
  );
}
