import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  ClipboardCheck,
  GraduationCap,
  HandHeart,
  School,
  Users,
} from "lucide-react";
import { Images } from "../assets/Images/Images";
import MotionText from "./MotionText";

const academicStats = [
  { value: "3", label: "school divisions" },
  { value: "BECE", label: "guided readiness" },
  { value: "Daily", label: "teacher support" },
];

const divisions = [
  {
    id: "pre-school",
    icon: School,
    label: "Pre School",
    title: "A gentle start for confident learners.",
    body:
      "Our youngest pupils build language, number sense, creativity, social confidence, and classroom routines through guided play and caring structure.",
    image: Images.playground3,
    tone: "bg-[#eeeaff] text-[#6657c8]",
  },
  {
    id: "primary-school",
    icon: BookOpen,
    label: "Primary School",
    title: "Strong foundations across core subjects.",
    body:
      "Primary learners develop reading, writing, numeracy, science awareness, digital confidence, and curiosity through clear lessons and steady practice.",
    image: Images.academicExcellence,
    tone: "bg-[#e4f2ff] text-[#2563eb]",
  },
  {
    id: "junior-high-school",
    icon: GraduationCap,
    label: "Junior High School",
    title: "Focused preparation for assessment and life.",
    body:
      "Junior High students receive disciplined academic coaching, examination guidance, leadership opportunities, and support for the next stage of learning.",
    image: Images.learningExcellence,
    tone: "bg-[#fff3cc] text-[#d99b1d]",
  },
];

const calendarItems = [
  "Structured academic terms with assessment checkpoints",
  "Revision windows for upper primary and JHS learners",
  "Vacation reading, project work, and parent updates",
  "Reopening guidance shared ahead of each new term",
];

const supportCards = [
  {
    id: "counseling",
    icon: HandHeart,
    label: "Counseling",
    title: "Learners are supported as people first.",
    body:
      "Pastoral care helps students handle transitions, build healthy habits, manage pressure, and speak up when they need guidance.",
  },
  {
    id: "co-curricular",
    icon: Users,
    label: "Co-Curricular",
    title: "Talent grows beyond the classroom.",
    body:
      "Clubs, competitions, arts, service, leadership roles, and school events help learners discover strengths and practise teamwork.",
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

export default function AcademicsPage() {
  return (
    <main className="bg-[#fffefa] text-[#171727]">
      <section className="relative isolate min-h-[560px] overflow-hidden bg-[#061a34] px-5 py-20 text-white sm:px-8 lg:px-20">
        <img
          src={Images.academicExcellence}
          alt="AGS student during a focused classroom session"
          className="absolute inset-0 h-full w-full object-cover object-center"
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
            AGS / Academics
          </p>
          <MotionText
            as="h1"
            delay={0.08}
            className="mt-6 max-w-[760px] text-[2.35rem] font-bold leading-[1.04] sm:text-[3.15rem] lg:text-[3.6rem]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Academics that build readiness.
          </MotionText>
          <MotionText
            as="p"
            delay={0.16}
            className="mt-7 max-w-[640px] text-base leading-8 text-blue-50/88 sm:text-lg"
          >
            From Pre School to Junior High School, AGS gives learners clear
            academic structure, caring guidance, and the confidence to take the
            next step well.
          </MotionText>

          <div className="mt-10 grid max-w-[820px] gap-3 sm:grid-cols-3">
            {academicStats.map((stat) => (
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
              <SectionLabel>Academic Divisions</SectionLabel>
              <MotionText
                as="h2"
                delay={0.08}
                className="mt-7 max-w-[560px] text-[2.35rem] font-bold leading-[1.05] sm:text-[3rem]"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                Clear stages, one connected school journey.
              </MotionText>
            </div>
            <MotionText as="p" delay={0.14} className="max-w-[620px] text-base leading-8 text-[#555568]">
              AGS is organized so learners can grow through age-appropriate
              expectations while remaining part of one school community. Each
              division has its own focus, routines, and support.
            </MotionText>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {divisions.map((division) => {
              const Icon = division.icon;

              return (
                <article
                  id={division.id}
                  key={division.id}
                  className="scroll-mt-28 border border-[#e8e5f0] bg-white shadow-[0_22px_62px_rgba(78,68,132,0.08)]"
                >
                  <img
                    src={division.image}
                    alt=""
                    className="h-56 w-full object-cover"
                    aria-hidden="true"
                  />
                  <div className="p-6">
                    <span
                      className={`inline-flex h-12 w-12 items-center justify-center ${division.tone}`}
                    >
                      <Icon size={22} strokeWidth={2.2} />
                    </span>
                    <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.2em] text-[#6657c8]">
                      {division.label}
                    </p>
                    <h3 className="mt-3 text-xl font-extrabold leading-snug text-[#171727]">
                      {division.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[#555568]">
                      {division.body}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="academic-calendar"
        className="scroll-mt-28 bg-[#f7f4ed] px-5 py-16 sm:px-8 lg:px-20"
      >
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-center">
          <div>
            <SectionLabel>Academic Calendar</SectionLabel>
            <MotionText
              as="h2"
              delay={0.08}
              className="mt-7 max-w-[620px] text-[2.35rem] font-bold leading-[1.05] sm:text-[3rem]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              A year planned for progress, practice, and rest.
            </MotionText>
            <MotionText
              as="p"
              delay={0.14}
              className="mt-6 max-w-[650px] text-base leading-8 text-[#555568]"
            >
              Families receive term notices, assessment dates, reopening
              updates, and vacation guidance so students can prepare with calm
              confidence.
            </MotionText>
          </div>

          <div className="border border-[#ded8ef] bg-white p-6 shadow-[0_24px_70px_rgba(86,72,150,0.08)]">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center bg-[#eeeaff] text-[#6657c8]">
                <CalendarDays size={24} strokeWidth={2.2} />
              </span>
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#6657c8]">
                  Term Planning
                </p>
                <h3 className="mt-1 text-xl font-extrabold text-[#171727]">
                  What families can expect
                </h3>
              </div>
            </div>
            <div className="mt-6 grid gap-3">
              {calendarItems.map((item) => (
                <div key={item} className="flex gap-3 border-t border-[#eeeaf6] pt-3">
                  <ClipboardCheck
                    className="mt-1 shrink-0 text-[#43a966]"
                    size={18}
                    strokeWidth={2.2}
                  />
                  <p className="text-sm leading-7 text-[#555568]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-20 lg:py-20">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid gap-5 lg:grid-cols-2">
            {supportCards.map((card) => {
              const Icon = card.icon;

              return (
                <article
                  id={card.id}
                  key={card.id}
                  className="scroll-mt-28 border border-[#dcd6f3] bg-[#f4f1fb] p-7 shadow-[0_24px_70px_rgba(86,72,150,0.08)] sm:p-9"
                >
                  <span className="flex h-12 w-12 items-center justify-center bg-white text-[#6657c8]">
                    <Icon size={24} strokeWidth={2.2} />
                  </span>
                  <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.22em] text-[#6657c8]">
                    {card.label}
                  </p>
                  <MotionText
                    as="h2"
                    delay={0.08}
                    className="mt-4 text-[2rem] font-bold leading-[1.1] sm:text-[2.4rem]"
                    style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                  >
                    {card.title}
                  </MotionText>
                  <MotionText as="p" delay={0.14} className="mt-5 text-base leading-8 text-[#555568]">
                    {card.body}
                  </MotionText>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden px-5 py-20 text-white sm:px-8 lg:px-20">
        <img
          src={Images.schoolCompound2}
          alt="AGS campus walkway"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#061a34]/82" />
        <div className="relative z-10 mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-center">
          <div>
            <SectionLabel light>Academic Passport</SectionLabel>
            <MotionText
              as="h2"
              delay={0.08}
              className="mt-7 max-w-[680px] text-[2.45rem] font-bold leading-[1.06] sm:text-[3.3rem]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Students leave AGS prepared to keep learning.
            </MotionText>
            <MotionText
              as="p"
              delay={0.14}
              className="mt-6 max-w-[680px] text-base leading-8 text-blue-50/86"
            >
              Our academic work is practical and purposeful: learners build
              knowledge, discipline, communication, and confidence for the next
              school stage and the wider world.
            </MotionText>
          </div>
          <a
            href="/admissions/"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 bg-blue-600 px-6 text-sm font-extrabold text-white shadow-[0_20px_48px_rgba(37,99,235,0.26)] transition hover:-translate-y-1 hover:bg-blue-500 sm:w-max"
          >
            Start Admissions
            <ArrowRight size={17} strokeWidth={2.4} />
          </a>
        </div>
      </section>
    </main>
  );
}
