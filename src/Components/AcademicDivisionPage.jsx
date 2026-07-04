import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  GraduationCap,
  School,
} from "lucide-react";
import { Images } from "../assets/Images/Images";
import MotionText from "./MotionText";

const divisions = {
  preschool: {
    icon: School,
    label: "Pre School",
    eyebrow: "AGS / Academics / Pre School",
    title: "A gentle start for confident learners.",
    intro:
      "Pre School at AGS gives young learners a warm, structured beginning where curiosity, language, number sense, creativity, and social confidence grow together.",
    image: Images.playground3,
    tone: "bg-[#eeeaff] text-[#6657c8]",
    focus: [
      "Guided play, early literacy, and number readiness",
      "Creative expression through art, music, movement, and stories",
      "Social routines that build independence, sharing, and confidence",
      "Caring classroom guidance for a smooth transition into Primary School",
    ],
    next: "Primary School",
    nextHref: "/academics/primary-school/",
  },
  "primary-school": {
    icon: BookOpen,
    label: "Primary School",
    eyebrow: "AGS / Academics / Primary School",
    title: "Strong foundations across core subjects.",
    intro:
      "Primary School learners develop clear reading, writing, numeracy, science awareness, digital confidence, and study habits through steady teaching and practice.",
    image: Images.academicExcellence,
    tone: "bg-[#e4f2ff] text-[#2563eb]",
    focus: [
      "Reading fluency, written expression, and confident communication",
      "Numeracy, problem solving, science, and environmental awareness",
      "Digital confidence supported by responsible classroom routines",
      "Preparation for upper primary expectations and Junior High learning",
    ],
    next: "Junior High School",
    nextHref: "/academics/junior-high-school/",
  },
  "junior-high-school": {
    icon: GraduationCap,
    label: "Junior High School",
    eyebrow: "AGS / Academics / Junior High School",
    title: "Focused preparation for assessment and life.",
    intro:
      "Junior High School at AGS combines disciplined academic coaching, examination guidance, leadership growth, and personal support for the next stage of learning.",
    image: Images.learningExcellence,
    tone: "bg-[#fff3cc] text-[#d99b1d]",
    focus: [
      "Structured subject teaching with regular revision and feedback",
      "BECE readiness, examination guidance, and study discipline",
      "Leadership opportunities, character formation, and responsibility",
      "Support for senior high school transition and future confidence",
    ],
    next: "Admissions",
    nextHref: "/admissions/",
  },
};

const navigate = (event, href) => {
  event.preventDefault();

  const targetUrl = new URL(href, window.location.origin);
  window.history.pushState({}, "", targetUrl.pathname);
  window.dispatchEvent(new Event("ags:navigate"));
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const preschoolPrograms = [
  {
    title: "Reception",
    ages: "Ages 3-4",
    summary:
      "Morning classes run from 8.30am-12.30pm, with the option for students to attend a full school day 1-5 days a week.",
    lessons: ["Language Arts", "Dance and Movement", "Visual Arts", "Numeracy"],
    aims: [
      "Develop awareness for others and ways to express needs and empathy",
      "Teach healthy practices, movement, and awareness of sharpness",
      "Use language to express themselves, listen to others, and develop vocabulary",
      "Find an interest in numbers, quantity, counting to 10, basic shapes, and pattern arrangements",
      "Promote question asking, curiosity, equipment care, and talk about past and present",
      "Explore and experiment with drawings and constructions",
    ],
  },
  {
    title: "Pre-Kindergarten",
    ages: "Ages 4-5",
    summary:
      "Children keep building confidence through richer play, early reading habits, number discovery, classroom routines, and creative expression.",
    lessons: ["Story Time", "Early Phonics", "Counting Games", "Creative Play"],
    aims: [
      "Grow independence through kind routines and shared classroom tasks",
      "Strengthen vocabulary through stories, songs, and guided conversation",
      "Practise early counting, sorting, matching, and simple patterns",
      "Build confidence through art, movement, outdoor play, and social learning",
    ],
  },
  {
    title: "Kindergarten",
    ages: "Ages 5-6",
    summary:
      "Kindergarten prepares children for Primary School with a balanced mix of early literacy, numeracy, inquiry, social confidence, and purposeful play.",
    lessons: ["Reading Readiness", "Number Work", "Discovery", "Art and Movement"],
    aims: [
      "Prepare learners for Primary School routines and expectations",
      "Encourage clear speaking, careful listening, and early writing confidence",
      "Explore numbers, shapes, patterns, and simple problem solving",
      "Support curiosity, friendship, responsibility, and joyful learning habits",
    ],
  },
];

const preschoolGallery = [
  {
    image: Images.preschool1,
    alt: "Preschool learner exploring an early years activity",
    label: "Morning discovery",
    className: "sm:col-span-2 lg:col-span-3 lg:row-span-2",
    imageClassName: "object-[46%_50%]",
    badgeClassName: "bg-[#fff3cc] text-[#856012]",
  },
  {
    image: Images.kiddafest1,
    alt: "AGS preschool children enjoying Kiddafest",
    label: "Kiddafest colours",
    className: "lg:col-span-2",
    imageClassName: "object-center",
    badgeClassName: "bg-[#e8ddff] text-[#6657c8]",
  },
  {
    image: Images.preschool2,
    alt: "Preschool children learning together at AGS",
    label: "Classroom joy",
    className: "lg:col-span-2",
    imageClassName: "object-center",
    badgeClassName: "bg-[#dff7e8] text-[#2f8a52]",
  },
  {
    image: Images.kiddafest2,
    alt: "Young AGS learners taking part in a festive school activity",
    label: "Big smiles",
    className: "lg:col-span-2",
    imageClassName: "object-center",
    badgeClassName: "bg-[#e4f2ff] text-[#2563eb]",
  },
  {
    image: Images.preschool3,
    alt: "Early years learner participating in preschool activities",
    label: "Tiny steps",
    className: "lg:col-span-2",
    imageClassName: "object-center",
    badgeClassName: "bg-[#ffe7df] text-[#b65338]",
  },
  {
    image: Images.kiddafest3,
    alt: "AGS children celebrating at Kiddafest",
    label: "Celebration day",
    className: "lg:col-span-2",
    imageClassName: "object-center",
    badgeClassName: "bg-[#eef5ff] text-[#2563eb]",
  },
  {
    image: Images.preschool4,
    alt: "AGS preschool child during a playful learning moment",
    label: "Playful focus",
    className: "sm:col-span-2 lg:col-span-3",
    imageClassName: "object-center",
    badgeClassName: "bg-white text-[#171727]",
  },
];

const primaryCoreStudies = [
  {
    label: "English Language",
    detail: "Language development, reading, writing, expression, and English Literature in Grades 5-6",
  },
  {
    label: "Mathematics",
    detail: "Numeracy, problem solving, patterns, measurement, and everyday mathematical thinking",
  },
  {
    label: "Science",
    detail: "Observation, investigation, practical discovery, and understanding the world",
  },
  {
    label: "Social Studies",
    detail: "Community, citizenship, culture, responsibility, and awareness of society",
  },
];

const primaryEnhancedStudies = [
  "Visual Arts",
  "Foreign Language (French)",
  "Local Languages (Twi/Ga)",
  "Performing Arts",
  "Physical and Health Education",
  "Information & Computer Technology",
];

const juniorProgramPoints = [
  {
    title: "International Outlook",
    body:
      "AGS prepares learners to compete confidently anywhere in the world, combining national curriculum goals with international teaching ideas.",
  },
  {
    title: "Subject Specialists",
    body:
      "Junior High learners receive subject-level teaching from specialist graduates from Grade 6 upwards.",
  },
  {
    title: "BECE Readiness",
    body:
      "Students are equipped with the tools and required grades for the national BECE exam and Senior High School admissions.",
  },
  {
    title: "Beyond National Exams",
    body:
      "Learners who choose other pathways are supported to compete with Cambridge and IB/AP curriculum expectations.",
  },
];

const juniorGradeRows2023 = [
  { subject: "English", grade1: 41, grade2: 6, grade3: 0, pass: "100.00%" },
  { subject: "Social Studies", grade1: 18, grade2: 15, grade3: 12, pass: "95.74%" },
  { subject: "RME", grade1: 16, grade2: 20, grade3: 10, pass: "97.87%" },
  { subject: "Mathematics", grade1: 5, grade2: 9, grade3: 8, pass: "46.81%" },
  { subject: "Science", grade1: 28, grade2: 15, grade3: 4, pass: "100.00%" },
  { subject: "ICT", grade1: 34, grade2: 3, grade3: 9, pass: "97.87%" },
  { subject: "French", grade1: 13, grade2: 26, grade3: 5, pass: "93.62%" },
  { subject: "Ghanaian Language", grade1: 6, grade2: 15, grade3: 17, pass: "80.85%" },
  { subject: "Design Technologies", grade1: 39, grade2: 8, grade3: 0, pass: "100.00%" },
];

const juniorPassRates2020To2023 = [
  { subject: "English", pass: "100.00%" },
  { subject: "Social Studies", pass: "95.74%" },
  { subject: "RME", pass: "97.87%" },
  { subject: "Mathematics", pass: "88.81%" },
  { subject: "Science", pass: "100.00%" },
  { subject: "ICT", pass: "98.87%" },
  { subject: "French", pass: "93.62%" },
  { subject: "Ghanaian Language", pass: "80.85%" },
  { subject: "Design Technologies", pass: "96.00%" },
];

function PreschoolDecorations() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <svg
        className="absolute left-[5%] top-16 h-16 w-16 text-[#6657c8]/28"
        viewBox="0 0 64 64"
        fill="none"
      >
        <path
          d="M19 43 45 17l7 7-26 26-10 3 3-10Z"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path d="m40 22 7 7" stroke="currentColor" strokeWidth="4" />
      </svg>
      <svg
        className="absolute right-[8%] top-20 h-14 w-14 text-[#2563eb]/30"
        viewBox="0 0 64 64"
        fill="none"
      >
        <path
          d="m32 9 6.2 13.8L53 25.2 42.2 36l2.6 15L32 43.9 19.2 51l2.6-15L11 25.2l14.8-2.4L32 9Z"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinejoin="round"
        />
      </svg>
      <svg
        className="absolute bottom-20 left-[10%] h-20 w-20 text-[#d99b1d]/32"
        viewBox="0 0 80 80"
        fill="none"
      >
        <path
          d="M17 54c8-18 15-28 23-28s15 10 23 28M27 54l4-10h18l4 10M35 34h10"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <svg
        className="absolute bottom-28 right-[18%] h-12 w-12 text-[#43a966]/35"
        viewBox="0 0 64 64"
        fill="none"
      >
        <path
          d="M12 40c9-3 15-9 18-18 8 4 15 4 22 0-2 12-10 23-24 29-4-3-9-6-16-11Z"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinejoin="round"
        />
      </svg>
      <svg
        className="absolute left-[46%] top-8 hidden h-20 w-64 text-[#b5aef0]/70 sm:block"
        viewBox="0 0 260 80"
        fill="none"
      >
        <path
          d="M5 30c27 32 47 27 61 8 11-15-13-28-20-11-8 20 22 36 52 16 35-24 54-43 89-31 25 8 23 48-1 44-21-4-17-35 5-34 19 1 36 19 58 8"
          stroke="currentColor"
          strokeWidth="3"
          strokeDasharray="9 9"
          strokeLinecap="round"
        />
      </svg>
      <svg
        className="absolute right-[4%] top-9 h-16 w-16 text-[#9b62ff]/60"
        viewBox="0 0 72 72"
        fill="none"
      >
        <path
          d="m11 18 50-7-26 49-6-23-18-19Z"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path
          d="m29 37 32-26"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      <svg
        className="absolute left-[3%] top-[46%] h-20 w-28 text-[#43a966]/45"
        viewBox="0 0 112 80"
        fill="none"
      >
        <path
          d="M5 51c19 12 37 9 54-10 14-15 29-20 48-11"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
      <svg
        className="absolute right-[25%] top-[22%] h-10 w-10 rotate-12 text-[#8ed1f4]/70"
        viewBox="0 0 56 56"
        fill="none"
      >
        <rect
          x="15"
          y="12"
          width="28"
          height="28"
          rx="4"
          stroke="currentColor"
          strokeWidth="5"
        />
      </svg>
      <svg
        className="absolute left-[42%] bottom-[31%] h-9 w-9 text-[#ffd166]/90"
        viewBox="0 0 40 40"
        fill="none"
      >
        <circle cx="20" cy="20" r="8" fill="currentColor" />
      </svg>
      <svg
        className="absolute left-[6%] bottom-[28%] h-8 w-8 text-[#ffd166]/70"
        viewBox="0 0 40 40"
        fill="none"
      >
        <circle
          cx="20"
          cy="20"
          r="8"
          stroke="currentColor"
          strokeWidth="4"
        />
      </svg>
    </div>
  );
}

function PreschoolPathwaySection() {
  return (
    <section className="relative isolate overflow-hidden px-5 pb-10 pt-4 sm:px-8 lg:px-20">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <svg
          className="absolute left-[8%] top-8 h-16 w-16 text-[#ffd166]/70"
          viewBox="0 0 72 72"
          fill="none"
        >
          <path
            d="M36 9 43 28l20 1-16 12 5 19-16-11-17 11 6-19L9 29l20-1 7-19Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinejoin="round"
          />
        </svg>
        <svg
          className="absolute right-[8%] top-16 h-20 w-20 text-[#6657c8]/28"
          viewBox="0 0 80 80"
          fill="none"
        >
          <path
            d="M15 44c14-20 31-25 50-15M23 55c10-13 22-17 36-10"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1180px] gap-6 rounded-[30px] border border-[#e8e5f0] bg-white/78 p-5 shadow-[0_24px_70px_rgba(86,72,150,0.08)] sm:p-7 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.28em] text-[#6657c8]">
            Early Years Pathway
          </p>
          <h2
            className="mt-4 max-w-[520px] text-[2rem] font-black leading-[1.04] text-[#171727] sm:text-[2.55rem]"
            style={{ fontFamily: "Montserrat, var(--font-sans)" }}
          >
            Three gentle stages for growing minds.
          </h2>
          <p className="mt-4 max-w-[520px] text-sm leading-7 text-[#555568]">
            Reception, Pre-Kindergarten, and Kindergarten each give children a
            clear next step, with play, language, creativity, numbers, movement,
            and social confidence woven into the day.
          </p>

          <div className="mt-5 grid max-w-[360px] gap-2">
            {preschoolPrograms.map((program) => (
              <span
                key={program.title}
                className="rounded-full border border-[#dcd6f3] bg-[#fffefa] px-4 py-2 text-xs font-extrabold text-[#171727]"
              >
                {program.title} / {program.ages}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="grid gap-3">
            <article className="rounded-[34px_10px_34px_34px] border border-[#cfdcf8] bg-[#eef5ff] p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-base font-black text-[#171727]">
                  {preschoolPrograms[0].title}
                </h3>
                <span className="rounded-full bg-white px-3 py-1 text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[#6657c8]">
                  {preschoolPrograms[0].ages}
                </span>
              </div>
              <p className="mt-3 text-xs leading-6 text-[#555568]">
                {preschoolPrograms[0].summary}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {preschoolPrograms[0].lessons.map((lesson) => (
                  <span
                    key={lesson}
                    className="rounded-full border border-white/80 bg-white/74 px-3 py-1 text-[0.68rem] font-bold text-[#555568]"
                  >
                    {lesson}
                  </span>
                ))}
              </div>
            </article>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {preschoolPrograms.slice(1).map((program, index) => (
                <article
                  key={program.title}
                  className={`border p-4 ${
                    index === 0
                      ? "rounded-[10px_34px_34px_34px] border-[#ded8ef] bg-[#f2edff]"
                      : "rounded-[34px_34px_10px_34px] border-[#f0dfaa] bg-[#fff4cc]"
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-base font-black text-[#171727]">
                      {program.title}
                    </h3>
                    <span className="rounded-full bg-white px-3 py-1 text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[#6657c8]">
                      {program.ages}
                    </span>
                  </div>
                  <p className="mt-3 text-xs leading-6 text-[#555568]">
                    {program.summary}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {program.lessons.map((lesson) => (
                      <span
                        key={lesson}
                        className="rounded-full border border-white/80 bg-white/74 px-3 py-1 text-[0.68rem] font-bold text-[#555568]"
                      >
                        {lesson}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="relative min-h-[360px] rounded-[28px] bg-[#fffefa] p-4">
            <div className="absolute right-4 top-2 h-48 w-[68%] rounded-[54px_54px_14px_54px] bg-[#8de6b2]" />
            <img
              src={Images.playground}
              alt="AGS preschool children learning through play"
              className="absolute right-8 top-6 h-48 w-[68%] rounded-[54px_54px_14px_54px] object-cover object-[12%_50%] shadow-[0_18px_46px_rgba(31,66,115,0.16)]"
            />
            <div className="absolute bottom-10 left-2 h-40 w-[60%] rounded-[18px_58px_58px_58px] bg-[#e8ddff]" />
            <img
              src={Images.familyDay}
              alt="Young learners sharing a school moment"
              className="absolute bottom-14 left-6 h-40 w-[60%] rounded-[18px_58px_58px_58px] object-cover shadow-[0_18px_46px_rgba(86,72,150,0.14)]"
            />
            <div className="absolute bottom-5 right-4 rounded-[28px_28px_8px_28px] border border-[#dcd6f3] bg-white px-5 py-4 shadow-[0_18px_46px_rgba(86,72,150,0.12)]">
              <p className="text-2xl font-black text-[#2563eb]">3</p>
              <p className="mt-1 text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[#555568]">
                Early years stages
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="grid gap-4 lg:grid-cols-3">
            {preschoolPrograms.map((program) => (
              <div
                key={`${program.title}-aims`}
                className="rounded-[24px] border border-[#e8e5f0] bg-[#fffefa] p-4"
              >
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#6657c8]">
                  {program.title} aims
                </p>
                <ul className="mt-3 grid gap-2">
                  {program.aims.slice(0, 4).map((aim) => (
                    <li key={aim} className="flex gap-2 text-xs leading-5 text-[#555568]">
                      <CheckCircle2
                        className="mt-0.5 shrink-0 text-[#43a966]"
                        size={14}
                        strokeWidth={2.4}
                      />
                      <span>{aim}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PreschoolGallerySection() {
  return (
    <section className="relative isolate px-5 pb-10 sm:px-8 lg:px-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute right-[7%] bottom-12 h-28 w-28 rounded-[36px] bg-[#dff7e8]/80 rotate-12" />
        <svg
          className="absolute left-[5%] top-10 h-24 w-24 text-[#ffd166]/55"
          viewBox="0 0 96 96"
          fill="none"
        >
          <path
            d="M48 11 58 37l28 2-22 17 7 27-23-15-24 15 8-27-22-17 28-2 10-26Z"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinejoin="round"
          />
        </svg>
        <svg
          className="absolute right-[18%] top-0 h-20 w-32 text-[#6657c8]/24"
          viewBox="0 0 128 80"
          fill="none"
        >
          <path
            d="M7 48c20-23 37-25 51-6 12 16 27 17 47 1 7-6 13-9 18-9"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-[1180px]">
        <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.28em] text-[#6657c8]">
              Preschool Moments
            </p>
            <h2
              className="mt-4 max-w-[520px] text-[2rem] font-black leading-[1.04] text-[#171727] sm:text-[2.55rem]"
              style={{ fontFamily: "Montserrat, var(--font-sans)" }}
            >
              A bright little world of play, friends, and discovery.
            </h2>
          </div>
          <p className="max-w-[600px] text-sm leading-7 text-[#555568]">
            From everyday classroom curiosity to Kiddafest celebration, these
            moments show how early learners build confidence through colour,
            movement, friendship, and guided exploration.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-7 lg:auto-rows-[172px] lg:gap-4">
          {preschoolGallery.map((item) => (
            <figure
              key={item.label}
              className={`group relative h-[230px] overflow-hidden border border-white bg-white shadow-[0_22px_62px_rgba(78,68,132,0.11)] sm:h-[260px] lg:h-full ${item.className}`}
            >
              <img
                src={item.image}
                alt={item.alt}
                className={`h-full w-full object-cover transition duration-500 group-hover:scale-105 ${item.imageClassName}`}
                loading="lazy"
                decoding="async"
              />
              <figcaption className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-3">
                <span
                  className={`max-w-full px-3 py-2 text-[0.68rem] font-extrabold uppercase tracking-[0.14em] shadow-[0_12px_30px_rgba(23,23,39,0.12)] ${item.badgeClassName}`}
                >
                  {item.label}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function PrimaryCoreStudiesSection() {
  return (
    <section className="relative isolate px-5 pb-10 sm:px-8 lg:px-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <svg
          className="absolute right-[9%] top-2 h-16 w-16 text-[#8ed1f4]/55"
          viewBox="0 0 64 64"
          fill="none"
        >
          <rect
            x="15"
            y="15"
            width="34"
            height="34"
            rx="7"
            stroke="currentColor"
            strokeWidth="5"
          />
        </svg>
        <svg
          className="absolute left-[7%] bottom-10 h-20 w-28 text-[#43a966]/38"
          viewBox="0 0 112 80"
          fill="none"
        >
          <path
            d="M7 49c16 13 34 10 51-8 15-16 29-20 47-9"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1180px] gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="rounded-[30px] border border-[#dcd6f3] bg-[#f2edff] p-6">
          <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#6657c8]">
            Core Studies
          </p>
          <h2
            className="mt-4 text-[1.75rem] font-black leading-tight text-[#171727] sm:text-[2.25rem]"
            style={{ fontFamily: "Montserrat, var(--font-sans)" }}
          >
            Early skills taught through play and practice.
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#555568]">
            Primary learners follow a strong academic core, supported by
            creative, language, technology, arts, and health experiences that
            prepare them well for Junior High School.
          </p>
        </div>

        <div className="grid gap-4">
          <div className="grid gap-3 sm:grid-cols-2">
            {primaryCoreStudies.map((study, index) => (
              <article
                key={study.label}
                className={`rounded-[24px] border p-4 ${
                  index % 2 === 0
                    ? "border-[#cfdcf8] bg-[#eef5ff]"
                    : "border-[#f0dfaa] bg-[#fff4cc]"
                }`}
              >
                <p className="text-sm font-black text-[#171727]">
                  {study.label}
                </p>
                <p className="mt-2 text-xs leading-6 text-[#555568]">
                  {study.detail}
                </p>
              </article>
            ))}
          </div>

          <div className="rounded-[26px] border border-[#e8e5f0] bg-white p-5 shadow-[0_18px_50px_rgba(86,72,150,0.07)]">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#6657c8]">
              Enhanced By
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {primaryEnhancedStudies.map((study) => (
                <span
                  key={study}
                  className="rounded-full border border-[#dcd6f3] bg-[#fffefa] px-4 py-2 text-xs font-bold text-[#555568]"
                >
                  {study}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PreschoolPage({ division }) {
  return (
    <main className="relative overflow-hidden bg-[#fffefa] text-[#171727]">
      <section className="relative isolate overflow-hidden px-5 py-6 sm:px-8 lg:px-20 lg:py-7">
        <PreschoolDecorations />

        <div className="relative z-10 mx-auto grid max-w-[1180px] gap-7 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
          <div>
            <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.28em] text-[#6657c8]">
              AGS / Pre School
            </p>
            <MotionText
              as="h1"
              delay={0.08}
              className="mt-4 max-w-[540px] text-[1.9rem] font-black leading-[1.03] text-[#171727] sm:text-[2.45rem] lg:text-[2.8rem]"
              style={{ fontFamily: "Montserrat, var(--font-sans)" }}
            >
              Where little learners begin with wonder.
            </MotionText>
            <MotionText
              as="p"
              delay={0.16}
              className="mt-4 max-w-[510px] text-[0.95rem] leading-7 text-[#555568]"
            >
              Our Pre School is a joyful first step into learning. Children
              explore sounds, numbers, stories, colours, movement, friendship,
              and simple routines in a caring classroom made for early growth.
            </MotionText>

            <div className="mt-5 grid max-w-[590px] gap-3 sm:grid-cols-3">
              {[
                ["Play", "Learning through guided play"],
                ["Read", "Stories, sounds, and early words"],
                ["Grow", "Kind routines and social confidence"],
              ].map(([label, text]) => (
                <div key={label} className="border border-[#ded8ef] bg-white p-3 shadow-[0_18px_50px_rgba(86,72,150,0.08)]">
                  <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#6657c8]">
                    {label}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-[#555568]">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[320px] sm:min-h-[380px]">
            <div className="absolute right-0 top-0 h-[190px] w-[64%] max-w-[310px] bg-[#2563eb]" />
            <img
              src={Images.preschool1}
              alt="Pre School learners enjoying guided play"
              className="absolute right-5 top-5 h-[190px] w-[64%] max-w-[310px] object-cover shadow-[0_24px_70px_rgba(1,8,20,0.16)]"
            />
            <div className="absolute bottom-2 left-0 h-[215px] w-[66%] max-w-[320px] bg-[#e9e3ff]" />
            <img
              src={Images.kiddafest1}
              alt="Young AGS learners at play"
              className="absolute bottom-7 left-5 h-[215px] w-[66%] max-w-[320px] object-cover object-[10%_50%] shadow-[0_24px_70px_rgba(86,72,150,0.16)]"
            />
            <div className="absolute bottom-0 right-4 border border-[#ded8ef] bg-white px-4 py-3 shadow-[0_18px_42px_rgba(86,72,150,0.12)]">
              <p className="text-2xl font-black text-[#2563eb]">3+</p>
              <p className="mt-1 text-[0.65rem] font-extrabold uppercase tracking-[0.16em] text-[#555568]">
                Early learning focus areas
              </p>
            </div>
          </div>
        </div>
      </section>

      <PreschoolGallerySection />

      <PreschoolPathwaySection />

      <section className="px-5 pb-10 sm:px-8 lg:px-20">
        <div className="mx-auto grid max-w-[1180px] gap-4 lg:grid-cols-4">
          {division.focus.map((item) => (
            <div key={item} className="border border-[#e8e5f0] bg-[#f7f4ed] p-4">
              <CheckCircle2
                className="text-[#43a966]"
                size={21}
                strokeWidth={2.3}
              />
              <p className="mt-3 text-sm leading-6 text-[#555568]">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 pb-9 sm:px-8 lg:px-20">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="/academics/"
            onClick={(event) => navigate(event, "/academics/")}
            className="inline-flex min-h-12 items-center justify-center gap-2 border border-[#dcd6f3] bg-white px-5 text-sm font-extrabold text-[#171727] transition hover:-translate-y-1 hover:border-[#6657c8] hover:text-[#6657c8]"
          >
            <ArrowLeft size={17} strokeWidth={2.4} />
            Back to Academics
          </a>
          <a
            href={division.nextHref}
            onClick={(event) => navigate(event, division.nextHref)}
            className="inline-flex min-h-12 items-center justify-center gap-2 bg-blue-600 px-5 text-sm font-extrabold text-white shadow-[0_20px_48px_rgba(37,99,235,0.22)] transition hover:-translate-y-1 hover:bg-blue-500"
          >
            Continue to {division.next}
            <ArrowRight size={17} strokeWidth={2.4} />
          </a>
        </div>
      </section>
    </main>
  );
}

function PrimaryPage({ division }) {
  return (
    <main className="relative overflow-hidden bg-[#fffefa] text-[#171727]">
      <section className="relative isolate overflow-hidden px-5 py-8 sm:px-8 lg:px-20 lg:py-10">
        <PreschoolDecorations />

        <div className="relative z-10 mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="relative min-h-[340px] sm:min-h-[420px]">
            <div className="absolute left-2 top-0 h-[220px] w-[68%] max-w-[360px] rounded-[58px_58px_16px_58px] bg-[#2563eb]" />
            <img
              src={Images.academicExcellence}
              alt="Primary learners in a classroom activity"
              className="absolute left-7 top-5 h-[220px] w-[68%] max-w-[360px] rounded-[58px_58px_16px_58px] object-cover shadow-[0_24px_70px_rgba(31,66,115,0.16)]"
            />
            <div className="absolute bottom-2 right-0 h-[210px] w-[64%] max-w-[340px] rounded-[18px_64px_64px_64px] bg-[#e8ddff]" />
            <img
              src={Images.learningExcellence}
              alt="AGS pupils learning together"
              className="absolute bottom-7 right-5 h-[210px] w-[64%] max-w-[340px] rounded-[18px_64px_64px_64px] object-cover shadow-[0_24px_70px_rgba(86,72,150,0.16)]"
            />
            <div className="absolute bottom-0 left-5 rounded-[28px_28px_28px_8px] border border-[#ded8ef] bg-white px-4 py-3 shadow-[0_18px_42px_rgba(86,72,150,0.12)]">
              <p className="text-2xl font-black text-[#2563eb]">4</p>
              <p className="mt-1 text-[0.65rem] font-extrabold uppercase tracking-[0.16em] text-[#555568]">
                Core growth areas
              </p>
            </div>
          </div>

          <div>
            <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.28em] text-[#6657c8]">
              AGS / Primary School
            </p>
            <MotionText
              as="h1"
              delay={0.08}
              className="mt-4 max-w-[560px] text-[1.95rem] font-black leading-[1.03] text-[#171727] sm:text-[2.55rem] lg:text-[2.9rem]"
              style={{ fontFamily: "Montserrat, var(--font-sans)" }}
            >
              Strong foundations for curious, capable learners.
            </MotionText>
            <MotionText
              as="p"
              delay={0.16}
              className="mt-4 max-w-[540px] text-[0.96rem] leading-7 text-[#555568]"
            >
              Primary School at AGS helps children grow from early confidence
              into steady academic independence, with reading, writing,
              numeracy, science, digital skills, and character routines taught
              through clear daily practice.
            </MotionText>

            <div className="mt-5 grid max-w-[590px] gap-3 sm:grid-cols-2">
              {[
                ["Read", "Fluency, vocabulary, and expression"],
                ["Write", "Clear sentences and confident ideas"],
                ["Count", "Number sense and problem solving"],
                ["Discover", "Science, technology, and curiosity"],
              ].map(([label, text]) => (
                <div
                  key={label}
                  className="rounded-[22px] border border-[#ded8ef] bg-white p-4 shadow-[0_18px_50px_rgba(86,72,150,0.08)]"
                >
                  <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#6657c8]">
                    {label}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-[#555568]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PrimaryCoreStudiesSection />

      <section className="relative isolate px-5 pb-10 sm:px-8 lg:px-20">
        <div className="relative z-10 mx-auto grid max-w-[1180px] gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[30px] border border-[#dcd6f3] bg-[#f2edff] p-6">
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#6657c8]">
              Primary Journey
            </p>
            <h2
              className="mt-4 text-[1.75rem] font-black leading-tight text-[#171727] sm:text-[2.25rem]"
              style={{ fontFamily: "Montserrat, var(--font-sans)" }}
            >
              Lessons that build steady habits.
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#555568]">
              Children are guided to practise carefully, ask thoughtful
              questions, communicate clearly, and take responsibility for their
              learning as they prepare for Junior High School.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {division.focus.map((item, index) => (
              <div
                key={item}
                className={`rounded-[24px] border p-4 ${
                  index % 2 === 0
                    ? "border-[#cfdcf8] bg-[#eef5ff]"
                    : "border-[#f0dfaa] bg-[#fff4cc]"
                }`}
              >
                <CheckCircle2
                  className="text-[#43a966]"
                  size={21}
                  strokeWidth={2.3}
                />
                <p className="mt-3 text-sm leading-6 text-[#555568]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-9 sm:px-8 lg:px-20">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="/academics/"
            onClick={(event) => navigate(event, "/academics/")}
            className="inline-flex min-h-12 items-center justify-center gap-2 border border-[#dcd6f3] bg-white px-5 text-sm font-extrabold text-[#171727] transition hover:-translate-y-1 hover:border-[#6657c8] hover:text-[#6657c8]"
          >
            <ArrowLeft size={17} strokeWidth={2.4} />
            Back to Academics
          </a>
          <a
            href={division.nextHref}
            onClick={(event) => navigate(event, division.nextHref)}
            className="inline-flex min-h-12 items-center justify-center gap-2 bg-blue-600 px-5 text-sm font-extrabold text-white shadow-[0_20px_48px_rgba(37,99,235,0.22)] transition hover:-translate-y-1 hover:bg-blue-500"
          >
            Continue to {division.next}
            <ArrowRight size={17} strokeWidth={2.4} />
          </a>
        </div>
      </section>
    </main>
  );
}

function JuniorProgramSection() {
  return (
    <section className="relative isolate px-5 pb-10 sm:px-8 lg:px-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <svg
          className="absolute left-[6%] top-8 h-20 w-20 text-[#ffd166]/62"
          viewBox="0 0 72 72"
          fill="none"
        >
          <path
            d="M36 9 43 28l20 1-16 12 5 19-16-11-17 11 6-19L9 29l20-1 7-19Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinejoin="round"
          />
        </svg>
        <svg
          className="absolute right-[7%] bottom-10 h-20 w-28 text-[#43a966]/36"
          viewBox="0 0 112 80"
          fill="none"
        >
          <path
            d="M7 49c16 13 34 10 51-8 15-16 29-20 47-9"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1180px] gap-5 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="rounded-[30px] border border-[#dcd6f3] bg-[#f2edff] p-6">
          <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#6657c8]">
            Junior High Program
          </p>
          <h2
            className="mt-4 text-[1.75rem] font-black leading-tight text-[#171727] sm:text-[2.25rem]"
            style={{ fontFamily: "Montserrat, var(--font-sans)" }}
          >
            A global-minded pathway toward Senior High School.
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#555568]">
            AGS combines rigorous national preparation with international
            curriculum influences, helping students build subject depth,
            critical thinking, and the confidence to pursue competitive next
            steps.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {juniorProgramPoints.map((point, index) => (
            <article
              key={point.title}
              className={`rounded-[24px] border p-4 ${
                index % 2 === 0
                  ? "border-[#cfdcf8] bg-[#eef5ff]"
                  : "border-[#f0dfaa] bg-[#fff4cc]"
              }`}
            >
              <p className="text-sm font-black text-[#171727]">{point.title}</p>
              <p className="mt-2 text-xs leading-6 text-[#555568]">
                {point.body}
              </p>
            </article>
          ))}
        </div>

        <div className="lg:col-span-2">
          <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[30px] border border-[#e8e5f0] bg-white p-5 shadow-[0_18px_50px_rgba(86,72,150,0.07)]">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#6657c8]">
                    2023 BECE
                  </p>
                  <h3 className="mt-2 text-xl font-black text-[#171727]">
                    Aggregated Grades
                  </h3>
                </div>
                <span className="rounded-full bg-[#eef5ff] px-4 py-2 text-xs font-extrabold text-[#2563eb]">
                  Grade 1-3 + pass rate
                </span>
              </div>

              <div className="mt-5 overflow-hidden rounded-[22px] border border-[#e8e5f0] bg-[#fffefa]">
                <div className="grid grid-cols-[1.35fr_0.5fr_0.5fr_0.5fr_0.85fr] items-center border-b border-[#e8e5f0] bg-[#f7f4ed] px-4 py-3 text-[0.68rem] font-black uppercase tracking-[0.14em] text-[#6657c8]">
                  <span>Subject</span>
                  <span className="text-center">G1</span>
                  <span className="text-center">G2</span>
                  <span className="text-center">G3</span>
                  <span className="text-right">Pass</span>
                </div>

                {juniorGradeRows2023.map((row) => (
                  <div
                    key={row.subject}
                    className="grid grid-cols-[1.35fr_0.5fr_0.5fr_0.5fr_0.85fr] items-center border-b border-[#eeeaf6] px-4 py-3 last:border-b-0"
                  >
                    <p className="text-sm font-bold text-[#171727]">
                      {row.subject}
                    </p>
                    <p className="text-center text-sm font-black text-[#171727]">
                      {row.grade1}
                    </p>
                    <p className="text-center text-sm font-black text-[#171727]">
                      {row.grade2}
                    </p>
                    <p className="text-center text-sm font-black text-[#171727]">
                      {row.grade3}
                    </p>
                    <p className="text-right text-sm font-black text-[#2f8a52]">
                      {row.pass}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] border border-[#dcd6f3] bg-[#f2edff] p-5">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#6657c8]">
                2020-2023
              </p>
              <h3 className="mt-2 text-xl font-black text-[#171727]">
                Pass Rate Snapshot
              </h3>
              <div className="mt-5 grid gap-3">
                {juniorPassRates2020To2023.map((row) => (
                  <div key={row.subject}>
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-xs font-bold text-[#555568]">
                        {row.subject}
                      </p>
                      <p className="text-xs font-black text-[#171727]">
                        {row.pass}
                      </p>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-white">
                      <div
                        className="h-full rounded-full bg-[#2563eb]"
                        style={{ width: row.pass }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function JuniorHighPage({ division }) {
  return (
    <main className="relative overflow-hidden bg-[#fffefa] text-[#171727]">
      <section className="relative isolate overflow-hidden px-5 py-8 sm:px-8 lg:px-20 lg:py-10">
        <PreschoolDecorations />

        <div className="relative z-10 mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
          <div>
            <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.28em] text-[#6657c8]">
              AGS / Junior High School
            </p>
            <MotionText
              as="h1"
              delay={0.08}
              className="mt-4 max-w-[570px] text-[1.95rem] font-black leading-[1.03] text-[#171727] sm:text-[2.55rem] lg:text-[2.9rem]"
              style={{ fontFamily: "Montserrat, var(--font-sans)" }}
            >
              Focused preparation for confident next steps.
            </MotionText>
            <MotionText
              as="p"
              delay={0.16}
              className="mt-4 max-w-[540px] text-[0.96rem] leading-7 text-[#555568]"
            >
              Junior High School at AGS supports learners with disciplined
              study habits, guided revision, assessment preparation, leadership
              opportunities, and the confidence to move into senior high school
              ready for the next challenge.
            </MotionText>

            <div className="mt-5 grid max-w-[590px] gap-3 sm:grid-cols-2">
              {[
                ["Study", "Clear routines and regular feedback"],
                ["Revise", "Structured practice for assessment"],
                ["Lead", "Responsibility, service, and confidence"],
                ["Prepare", "Support for the next school stage"],
              ].map(([label, text]) => (
                <div
                  key={label}
                  className="rounded-[22px] border border-[#ded8ef] bg-white p-4 shadow-[0_18px_50px_rgba(86,72,150,0.08)]"
                >
                  <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#6657c8]">
                    {label}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-[#555568]">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[340px] sm:min-h-[420px]">
            <div className="absolute right-2 top-0 h-[220px] w-[68%] max-w-[360px] rounded-[58px_58px_58px_16px] bg-[#fff3cc]" />
            <img
              src={Images.learningExcellence}
              alt="Junior High learners in focused academic preparation"
              className="absolute right-7 top-5 h-[220px] w-[68%] max-w-[360px] rounded-[58px_58px_58px_16px] object-cover shadow-[0_24px_70px_rgba(31,66,115,0.16)]"
            />
            <div className="absolute bottom-2 left-0 h-[210px] w-[64%] max-w-[340px] rounded-[64px_18px_64px_64px] bg-[#dbeafe]" />
            <img
              src={Images.regionalQualifiers}
              alt="AGS students representing school excellence"
              className="absolute bottom-7 left-5 h-[210px] w-[64%] max-w-[340px] rounded-[64px_18px_64px_64px] object-cover shadow-[0_24px_70px_rgba(86,72,150,0.16)]"
            />
            <div className="absolute bottom-0 right-5 rounded-[28px_28px_8px_28px] border border-[#ded8ef] bg-white px-4 py-3 shadow-[0_18px_42px_rgba(86,72,150,0.12)]">
              <p className="text-2xl font-black text-[#2563eb]">BECE</p>
              <p className="mt-1 text-[0.65rem] font-extrabold uppercase tracking-[0.16em] text-[#555568]">
                Guided readiness
              </p>
            </div>
          </div>
        </div>
      </section>

      <JuniorProgramSection />

      <section className="relative isolate px-5 pb-10 sm:px-8 lg:px-20">
        <div className="relative z-10 mx-auto grid max-w-[1180px] gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {division.focus.map((item, index) => (
              <div
                key={item}
                className={`rounded-[24px] border p-4 ${
                  index % 2 === 0
                    ? "border-[#cfdcf8] bg-[#eef5ff]"
                    : "border-[#f0dfaa] bg-[#fff4cc]"
                }`}
              >
                <CheckCircle2
                  className="text-[#43a966]"
                  size={21}
                  strokeWidth={2.3}
                />
                <p className="mt-3 text-sm leading-6 text-[#555568]">{item}</p>
              </div>
            ))}
          </div>

          <div className="rounded-[30px] border border-[#dcd6f3] bg-[#f2edff] p-6">
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#6657c8]">
              JHS Readiness
            </p>
            <h2
              className="mt-4 text-[1.75rem] font-black leading-tight text-[#171727] sm:text-[2.25rem]"
              style={{ fontFamily: "Montserrat, var(--font-sans)" }}
            >
              Coaching, character, and calm preparation.
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#555568]">
              Learners receive subject support, revision discipline, examination
              guidance, and personal encouragement so academic progress and
              character growth move together.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 pb-9 sm:px-8 lg:px-20">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="/academics/"
            onClick={(event) => navigate(event, "/academics/")}
            className="inline-flex min-h-12 items-center justify-center gap-2 border border-[#dcd6f3] bg-white px-5 text-sm font-extrabold text-[#171727] transition hover:-translate-y-1 hover:border-[#6657c8] hover:text-[#6657c8]"
          >
            <ArrowLeft size={17} strokeWidth={2.4} />
            Back to Academics
          </a>
          <a
            href={division.nextHref}
            onClick={(event) => navigate(event, division.nextHref)}
            className="inline-flex min-h-12 items-center justify-center gap-2 bg-blue-600 px-5 text-sm font-extrabold text-white shadow-[0_20px_48px_rgba(37,99,235,0.22)] transition hover:-translate-y-1 hover:bg-blue-500"
          >
            Continue to {division.next}
            <ArrowRight size={17} strokeWidth={2.4} />
          </a>
        </div>
      </section>
    </main>
  );
}

function getAcademicDivision(slug) {
  return divisions[slug] || null;
}

export default function AcademicDivisionPage({ slug }) {
  const division = getAcademicDivision(slug) || divisions.preschool;
  const Icon = division.icon;

  if (slug === "preschool") {
    return <PreschoolPage division={division} />;
  }

  if (slug === "primary-school") {
    return <PrimaryPage division={division} />;
  }

  if (slug === "junior-high-school") {
    return <JuniorHighPage division={division} />;
  }

  return (
    <main className="bg-[#fffefa] text-[#171727]">
      <section className="relative isolate overflow-hidden bg-[#061a34] px-5 py-16 text-white sm:px-8 lg:px-20 lg:py-20">
        <img
          src={division.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#061a34]/82" />

        <div className="relative z-10 mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[1fr_0.74fr] lg:items-center">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-blue-100/80">
              {division.eyebrow}
            </p>
            <MotionText
              as="h1"
              delay={0.08}
              className="mt-6 max-w-[760px] text-[2.35rem] font-bold leading-[1.04] sm:text-[3.15rem] lg:text-[3.6rem]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              {division.title}
            </MotionText>
            <MotionText
              as="p"
              delay={0.16}
              className="mt-7 max-w-[650px] text-base leading-8 text-blue-50/88 sm:text-lg"
            >
              {division.intro}
            </MotionText>
          </div>

          <div className="border border-white/14 bg-white/10 p-6 shadow-[0_24px_70px_rgba(1,8,20,0.24)] backdrop-blur-md sm:p-8">
            <span
              className={`inline-flex h-14 w-14 items-center justify-center ${division.tone}`}
            >
              <Icon size={27} strokeWidth={2.2} />
            </span>
            <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.22em] text-blue-100">
              {division.label}
            </p>
            <div className="mt-5 grid gap-3">
              {division.focus.map((item) => (
                <div key={item} className="flex gap-3 border-t border-white/12 pt-3">
                  <CheckCircle2
                    className="mt-1 shrink-0 text-blue-300"
                    size={18}
                    strokeWidth={2.3}
                  />
                  <p className="text-sm leading-7 text-blue-50/84">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 lg:px-20">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="/academics/"
            onClick={(event) => navigate(event, "/academics/")}
            className="inline-flex min-h-12 items-center justify-center gap-2 border border-[#dcd6f3] bg-white px-5 text-sm font-extrabold text-[#171727] transition hover:-translate-y-1 hover:border-[#6657c8] hover:text-[#6657c8]"
          >
            <ArrowLeft size={17} strokeWidth={2.4} />
            Back to Academics
          </a>
          <a
            href={division.nextHref}
            onClick={(event) => navigate(event, division.nextHref)}
            className="inline-flex min-h-12 items-center justify-center gap-2 bg-blue-600 px-5 text-sm font-extrabold text-white shadow-[0_20px_48px_rgba(37,99,235,0.22)] transition hover:-translate-y-1 hover:bg-blue-500"
          >
            {division.next}
            <ArrowRight size={17} strokeWidth={2.4} />
          </a>
        </div>
      </section>
    </main>
  );
}
