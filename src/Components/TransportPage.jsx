import { Bus } from "lucide-react";
import { Images } from "../assets/Images/Images";
import MotionText from "./MotionText";

const routes = [
  {
    name: "Route One",
    description:
      "Bus coming morning south from Dodowa to Accra Grammar School serves communities North East of the school.",
    stops: [
      { location: "AGS Campus", time: "Morning/Afternoon" },
      { location: "Dodowa", time: "Morning/Afternoon" },
    ],
  },
  {
    name: "Route Two",
    description:
      "Bus leaves AGS Campus in the morning south towards Accra terminating at Amrahia operates around Valley View University area as well.",
    stops: [
      { location: "AGS Campus", time: "Morning/Afternoon" },
      { location: "Valley View", time: "Morning/Afternoon" },
      { location: "Amrahia", time: "Morning/Afternoon" },
    ],
  },
  {
    name: "Route Three",
    description:
      "Bus serves the Oyibi Township up to Appolonia and Adamrobe community.",
    stops: [
      { location: "AGS Campus", time: "Morning/Afternoon" },
      { location: "Adamorobe", time: "Morning/Afternoon" },
      { location: "Oyibi Township", time: "Morning/Afternoon" },
    ],
  },
];

function SectionLabel({ children, light = false }) {
  return (
    <>
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
    </>
  );
}

export default function TransportPage() {
  return (
    <main className="bg-[#fffefa] text-[#171727]">
      <section className="px-5 pb-4 pt-24 sm:px-8 lg:px-20 lg:pt-32">
        <div className="mx-auto max-w-[1180px]">
          <MotionText as="p" className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#6657c8]">
            AGS / Transport
          </MotionText>
          <MotionText
            as="h1"
            delay={0.08}
            className="mt-4 text-[2.35rem] font-bold leading-[1.04] text-[#171727] sm:text-[3.15rem] lg:text-[3.6rem]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Transport
          </MotionText>
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-[1180px]">
          <MotionText as="div" className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <SectionLabel>Bus Routes</SectionLabel>
              <h2
                className="mt-5 text-[2rem] font-bold leading-[1.06] text-[#171727] sm:text-[2.5rem]"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                Getting your child to and from school safely is our number one priority.
              </h2>
              <p className="mt-5 text-base leading-8 text-[#555568]">
                Students who are independent and confident, inquisitive and
                enthusiastic, responsible and compassionate.
              </p>
            </div>
            <div className="relative">
              <img
                src={Images.agsBus}
                alt="AGS school bus"
                className="w-full rounded-2xl object-cover shadow-[0_24px_70px_rgba(67,56,37,0.1)]"
                loading="lazy"
              />
            </div>
          </MotionText>
        </div>
      </section>

      <section className="bg-[#f7f4ed] px-5 py-16 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-[1180px]">
          <MotionText className="text-center">
            <SectionLabel>Routes</SectionLabel>
            <h2
              className="mx-auto mt-5 max-w-[680px] text-[2rem] font-bold leading-[1.06] text-[#171727] sm:text-[2.5rem]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Our Bus Routes
            </h2>
          </MotionText>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {routes.map((route, i) => (
              <MotionText
                key={route.name}
                as="div"
                delay={i * 0.06}
                className="rounded-2xl border border-[#e8e5f0] bg-white p-6 shadow-[0_4px_24px_rgba(67,56,37,0.05)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f2edff]">
                  <Bus className="text-[#6657c8]" size={20} strokeWidth={2} />
                </div>
                <h3 className="mt-4 text-lg font-extrabold text-[#171727]">
                  {route.name}
                </h3>
                <p className="mt-2 text-sm leading-7 text-[#555568]">
                  {route.description}
                </p>
                <div className="mt-4 space-y-2">
                  {route.stops.map((stop) => (
                    <div
                      key={stop.location}
                      className="flex items-center justify-between rounded-lg bg-[#f7f4ed] px-4 py-2.5"
                    >
                      <span className="text-sm font-bold text-[#171727]">
                        {stop.location}
                      </span>
                      <span className="text-xs font-semibold text-[#6657c8]">
                        {stop.time}
                      </span>
                    </div>
                  ))}
                </div>
              </MotionText>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#061a34] px-5 py-16 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-[1180px] text-center">
          <MotionText>
            <SectionLabel light>Enquiries</SectionLabel>
            <h2
              className="mx-auto mt-5 max-w-[680px] text-[2rem] font-bold leading-[1.06] text-white sm:text-[2.5rem]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Need Transport Information?
            </h2>
            <p className="mx-auto mt-5 max-w-[640px] text-base leading-8 text-blue-100">
              For more details about bus routes, pickup points, and fees, please
              contact the school administration.
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
