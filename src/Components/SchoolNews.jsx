import {
  ArrowRight,
  CalendarDays,
  MapPinned,
  Newspaper,
  School,
  Umbrella,
} from "lucide-react";
import MotionText from "./MotionText";

const featuredStory = {
  category: "BECE Update",
  title: "BECE 2026 wraps up with calm confidence",
  date: "May 12, 2026",
  dateTime: "2026-05-12",
  body:
    "Our final-year JHS candidates completed the 2026 Basic Education Certificate Examination on Monday, May 11, after papers began on May 4. Management congratulates the candidates, teachers, and families for the steady preparation that carried the class through the examination week.",
};

const newsItems = [
  {
    icon: Umbrella,
    category: "Vacation",
    title: "End-of-term vacation arrangements",
    date: "May 12, 2026",
    dateTime: "2026-05-12",
    body:
      "Class teachers will share pickup notes, assessment folders, and holiday reading packs ahead of the next vacation window.",
    color: "text-[#d99b1d]",
    bg: "bg-[#fff3cc]",
  },
  {
    icon: MapPinned,
    category: "Excursion",
    title: "Learning trips return this term",
    date: "May 9, 2026",
    dateTime: "2026-05-09",
    body:
      "Parents will receive consent forms for planned educational visits, including heritage, science, and campus-life learning experiences.",
    color: "text-[#43a966]",
    bg: "bg-[#e2f6e8]",
  },
  {
    icon: School,
    category: "Reopening",
    title: "2026/2027 reopening guide",
    date: "May 8, 2026",
    dateTime: "2026-05-08",
    body:
      "Families should note the national basic-school reopening date of Tuesday, September 8, 2026, as planning begins for the new academic year.",
    color: "text-[#5c98d6]",
    bg: "bg-[#e4f2ff]",
  },
];

const briefs = [
  "BECE candidate wellness notes published for parents",
  "Vacation reading packs prepared by department",
  "Excursion safety checklist now at the front desk",
  "Admissions desk opens extra enquiry hours this week",
];

function SpiderNewsMark() {
  return (
    <svg
      className="spider-news-mark h-10 w-10 shrink-0 text-[#7b70cc] sm:h-11 sm:w-11 lg:h-12 lg:w-12"
      viewBox="0 0 512 512"
      fill="currentColor"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        d="M405.295,255.128l-80.064-18.658l81.293-6.766l64.205-64.92l24.038-104.024l-17.533-3.906l-28.781,95.496 l-53.08,52.434l-85.949,7.15l74.057-30.577l29.922-84.981L395.443,0l-17.681,3.078l10.723,90.684l-23.863,67.744l-60.613,25.023 c-2.346-13.985-4.987-22.738-4.987-22.738l5.38-24.806l-16.139-32.46l-21.508,3.828l10.758,20.995l-5.388,24.804h-32.268 l-5.371-24.804l10.75-20.995l-21.509-3.828l-16.138,32.46l5.379,24.806c0,0-2.642,8.753-4.978,22.738l-60.621-25.023 l-23.864-67.744L134.23,3.078L116.548,0l-17.97,96.378l29.932,84.981l74.066,30.577l-85.958-7.15L63.53,152.352L34.758,56.855 l-17.525,3.906l24.029,104.024l64.205,64.92l81.303,6.766l-80.073,18.658L46.86,320.912L33.197,425.614l17.647,3.235v-0.008 l18.606-95.732l49.54-54.475l58.755-13.688l-58.25,38.092l-15.58,130.555L148.032,512l15.685-9.181l-34.796-74.301l13.121-109.987 l67.597-44.186c0.47,1.962,0.977,3.932,1.526,5.902c-69.916,66.82-57.36,194.707,44.823,194.707 c102.201,0,114.756-127.886,44.832-194.707c0.549-1.97,1.063-3.941,1.534-5.902l67.597,44.186l13.112,109.987l-34.788,74.301 L363.968,512l44.109-78.408l-15.589-130.555l-58.242-38.092l58.747,13.688l49.54,54.475l18.606,95.732v0.008l17.656-3.235 l-13.672-104.703L405.295,255.128z"
      />
    </svg>
  );
}

export default function SchoolNews() {
  return (
    <section id="news" className="relative overflow-hidden bg-[#fffefa] px-5 py-16 text-[#171727] sm:px-8 lg:px-20 lg:py-20">
      <style>
        {`
          @keyframes spiderNewsDrift {
            0%, 100% { transform: translate3d(0, 0, 0) rotate(-9deg); }
            38% { transform: translate3d(7px, -8px, 0) rotate(-3deg); }
            72% { transform: translate3d(-5px, 5px, 0) rotate(-13deg); }
          }

          .spider-news-mark {
            animation: spiderNewsDrift 5.8s ease-in-out infinite;
            transform-origin: center center;
            will-change: transform;
          }

          @media (prefers-reduced-motion: reduce) {
            .spider-news-mark {
              animation: none;
              transform: rotate(-9deg);
            }
          }
        `}
      </style>
      <div className="mx-auto max-w-[1180px]">
        <div>
          <div>
            <div className="flex items-center gap-4 sm:gap-5">
              <SpiderNewsMark />
              <div>
                <MotionText
                  as="p"
                  className="text-[1.25rem] font-extrabold uppercase leading-none tracking-[0.14em] text-[#7b70cc] sm:text-[1.5rem] lg:text-[1.85rem]"
                >
                  Spider News
                </MotionText>
                <div className="mt-3 h-0.5 w-16 bg-[#7b70cc]" />
              </div>
            </div>
            <MotionText
              as="h2"
              delay={0.08}
              className="mt-6 max-w-[560px] text-[2.05rem] font-bold leading-[1.04] sm:text-[2.55rem] lg:text-[2.55rem]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Fresh updates from the AGS web.
            </MotionText>
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
          <article className="rounded-lg border border-[#e4dfd2] bg-white p-6 shadow-[0_24px_70px_rgba(67,56,37,0.08)] sm:p-8">
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

            <MotionText
              as="h3"
              delay={0.08}
              className="mt-7 max-w-[780px] text-[2rem] font-bold leading-tight text-[#171727] sm:text-[2.45rem]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              {featuredStory.title}
            </MotionText>
            <MotionText
              as="p"
              delay={0.14}
              className="mt-5 max-w-[820px] text-base leading-8 text-[#555568]"
            >
              {featuredStory.body}
            </MotionText>
            <a
              href="/contacts/"
              className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#7b70cc] px-5 text-sm font-bold text-white shadow-[0_16px_36px_rgba(123,112,204,0.22)] transition hover:-translate-y-0.5 hover:bg-[#6657c8]"
            >
              Contact the school office
              <ArrowRight size={16} strokeWidth={2.4} />
            </a>
          </article>

          <aside className="rounded-lg border border-[#e4dfd2] bg-white p-6">
            <MotionText as="p" className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#7b70cc]">
              Published Briefs
            </MotionText>
            <div className="mt-5 space-y-4">
              {briefs.map((brief) => (
                <div key={brief} className="border-l-2 border-[#c7bff1] pl-4">
                  <p className="text-sm font-bold leading-6 text-[#26263a]">
                    {brief}
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {newsItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-lg border border-[#e4dfd2] bg-white p-6 transition hover:-translate-y-1 hover:border-[#c7bff1] hover:shadow-[0_20px_52px_rgba(86,72,150,0.1)]"
              >
                <div className={`flex h-11 w-11 items-center justify-center rounded-md ${item.bg} ${item.color}`}>
                  <Icon size={22} strokeWidth={2.2} />
                </div>
                <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.2em] text-[#7b70cc]">
                  {item.category}
                </p>
                <h3 className="mt-3 text-xl font-bold leading-snug text-[#171727]">
                  {item.title}
                </h3>
                <time
                  dateTime={item.dateTime}
                  className="mt-3 block text-sm font-bold text-[#68687a]"
                >
                  {item.date}
                </time>
                <p className="mt-4 text-sm leading-7 text-[#555568]">
                  {item.body}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
