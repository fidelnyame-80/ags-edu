import {
  ArrowRight,
  BookOpen,
  Bus,
  CalendarDays,
  Coffee,
  GraduationCap,
  Newspaper,
  Trophy,
  Users,
} from "lucide-react";
import { Images } from "../assets/Images/Images";
import MotionText from "./MotionText";

const communityStats = [
  { value: "Parents", label: "active school partners" },
  { value: "Alumni", label: "lifelong AGS voices" },
  { value: "Events", label: "moments that connect us" },
];

const communityItems = [
  {
    id: "parents-forum",
    icon: Users,
    label: "Parents Forum",
    title: "Parents remain close partners in student growth.",
    body:
      "The parents forum creates space for communication, feedback, school updates, and shared support for learners across all divisions.",
    image: Images.familyDay,
    tone: "bg-[#eeeaff] text-[#6657c8]",
  },
  {
    id: "ags-alumni",
    icon: GraduationCap,
    label: "AGS Alumni",
    title: "Old students carry the AGS story forward.",
    body:
      "Our alumni network celebrates school memories, mentorship, professional growth, and opportunities to give back to the next generation.",
    image: Images.graduation2,
    tone: "bg-[#e8f1ff] text-[#2563eb]",
  },
  {
    id: "sports",
    icon: Trophy,
    label: "Sports",
    title: "Healthy competition builds confidence.",
    body:
      "Sports activities encourage teamwork, discipline, resilience, school spirit, and a balanced approach to student wellbeing.",
    image: Images.sports2,
    tone: "bg-[#fff3cc] text-[#d99b1d]",
  },
  {
    id: "transport",
    icon: Bus,
    label: "Transport",
    title: "Transport support for smoother school days.",
    body:
      "Families can contact the office for current transport guidance, route availability, pickup expectations, and student safety notes.",
    image: Images.schoolCompound,
    tone: "bg-[#e2f6e8] text-[#43a966]",
  },
  {
    id: "cafeteria",
    icon: Coffee,
    label: "Cafeteria",
    title: "Food service that supports daily learning.",
    body:
      "The cafeteria helps students stay nourished through the school day, with routines that keep mealtimes orderly and supervised.",
    image: Images.familyday3,
    tone: "bg-[#f4f1fb] text-[#6657c8]",
  },
  {
    id: "events",
    icon: CalendarDays,
    label: "Events",
    title: "School events bring the community together.",
    body:
      "From academic celebrations to cultural days and assemblies, AGS events strengthen belonging and recognize student effort.",
    image: Images.familyday5,
    tone: "bg-[#e4f2ff] text-[#2563eb]",
  },
  {
    id: "news",
    icon: Newspaper,
    label: "News",
    title: "News keeps families connected to school life.",
    body:
      "Important notices, student highlights, reopening updates, trips, examination news, and school stories are shared with the AGS community.",
    image: Images.regionalQualifiers,
    tone: "bg-[#fff3cc] text-[#d99b1d]",
  },
  {
    id: "janet-c-rickert-library",
    icon: BookOpen,
    label: "Janet C Rickert Library",
    title: "A reading space for curiosity and discovery.",
    body:
      "The library supports reading culture, research habits, quiet study, and independent learning across the school.",
    image: Images.academicExcellence,
    tone: "bg-[#e2f6e8] text-[#43a966]",
  },
];

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

export default function CommunityPage() {
  return (
    <main className="bg-[#fffefa] text-[#171727]">
      <section className="relative isolate min-h-[560px] overflow-hidden bg-[#061a34] px-5 py-20 text-white sm:px-8 lg:px-20">
        <img
          src={Images.familyday2}
          alt="AGS campus community space"
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(4,12,32,0.92) 0%, rgba(6,20,52,0.82) 48%, rgba(11,34,86,0.52) 72%, rgba(11,34,86,0.22) 100%)",
          }}
        />

        <div className="relative z-10 mx-auto flex min-h-[400px] max-w-[1180px] flex-col justify-center">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-blue-100/80">
            AGS / Community
          </p>
          <MotionText
            as="h1"
            delay={0.08}
            className="mt-6 max-w-[760px] text-[2.35rem] font-bold leading-[1.04] sm:text-[3.15rem] lg:text-[3.6rem]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            A school community with many voices.
          </MotionText>
          <MotionText
            as="p"
            delay={0.16}
            className="mt-7 max-w-[640px] text-base leading-8 text-blue-50/88 sm:text-lg"
          >
            AGS is shaped by students, parents, alumni, staff, and friends of
            the school. These community spaces keep school life connected,
            practical, and full of shared purpose.
          </MotionText>

          <div className="mt-10 grid max-w-[820px] gap-3 sm:grid-cols-3">
            {communityStats.map((stat) => (
              <div
                key={stat.value}
                className="border border-white/14 bg-white/8 p-5 backdrop-blur-md"
              >
                <p className="text-2xl font-extrabold text-white">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-blue-50/78">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-20 lg:py-20">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <SectionLabel>Community Areas</SectionLabel>
              <MotionText
                as="h2"
                delay={0.08}
                className="mt-7 max-w-[560px] text-[2.35rem] font-bold leading-[1.05] sm:text-[3rem]"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                Practical spaces for connection and support.
              </MotionText>
            </div>
            <MotionText as="p" delay={0.14} className="max-w-[620px] text-base leading-8 text-[#555568]">
              Each part of the AGS community has a role in making school life
              more informed, active, and welcoming for learners and families.
            </MotionText>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {communityItems.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  id={item.id}
                  key={item.id}
                  className="scroll-mt-28 overflow-hidden border border-[#e8e5f0] bg-white shadow-[0_22px_62px_rgba(78,68,132,0.08)]"
                >
                  <div className="grid min-h-[300px] lg:grid-cols-[0.86fr_1.14fr]">
                    <img
                      src={item.image}
                      alt=""
                      className="h-64 w-full object-cover lg:h-full"
                      aria-hidden="true"
                      loading="lazy"
                    />
                    <div className="flex flex-col justify-center p-6 sm:p-8">
                      <span
                        className={`inline-flex h-12 w-12 items-center justify-center ${item.tone}`}
                      >
                        <Icon size={22} strokeWidth={2.2} />
                      </span>
                      <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.2em] text-[#6657c8]">
                        {item.label}
                      </p>
                      <h3 className="mt-3 text-2xl font-extrabold leading-tight text-[#171727]">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-[#555568]">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden px-5 py-20 text-white sm:px-8 lg:px-20">
        <img
          src={Images.graduation3}
          alt="AGS school celebration"
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#061a34]/84" />
        <div className="relative z-10 mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-center">
          <div>
            <SectionLabel light>Stay Connected</SectionLabel>
            <MotionText
              as="h2"
              delay={0.08}
              className="mt-7 max-w-[720px] text-[2.45rem] font-bold leading-[1.06] sm:text-[3.3rem]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Community life is part of the AGS experience.
            </MotionText>
            <MotionText
              as="p"
              delay={0.14}
              className="mt-6 max-w-[680px] text-base leading-8 text-blue-50/86"
            >
              Contact the school office for current parent notices, events,
              alumni updates, transport guidance, and library information.
            </MotionText>
          </div>
          <a
            href="/contacts/"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 bg-blue-600 px-6 text-sm font-extrabold text-white shadow-[0_20px_48px_rgba(37,99,235,0.26)] transition hover:-translate-y-1 hover:bg-blue-500 sm:w-max"
          >
            Contact the Office
            <ArrowRight size={17} strokeWidth={2.4} />
          </a>
        </div>
      </section>
    </main>
  );
}
