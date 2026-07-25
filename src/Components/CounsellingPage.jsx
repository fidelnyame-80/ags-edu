import { useEffect, useRef, useState } from "react";
import { ArrowRight, BookOpen, Heart } from "lucide-react";
import { Images } from "../assets/Images/Images";
import AcademicImageMask from "./AcademicImageMask";

const handleNavClick = (event, href) => {
  event.preventDefault();
  const targetUrl = new URL(href, window.location.origin);
  window.history.pushState({}, "", `${targetUrl.pathname}${targetUrl.hash}`);
  window.dispatchEvent(new Event("ags:navigate"));
  window.scrollTo({ top: 0, behavior: "smooth" });
};

function IntroMotionStyles() {
  return (
    <style>{`
      @keyframes floatPath {
        0%, 100% { translate: 0 0; }
        33% { translate: 4px -6px; }
        66% { translate: -3px 5px; }
      }
      @keyframes dashFlow {
        to { stroke-dashoffset: -100; }
      }
      .intro-path-float { animation: floatPath 8s ease-in-out infinite; }
      .intro-dash-flow { animation: dashFlow 2.4s linear infinite; }
    `}</style>
  );
}

function IntroBackgroundArtwork({ isVisible }) {
  const popClass = isVisible ? "scale-100 opacity-100" : "scale-75 opacity-0";

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <svg
        className={`absolute -left-6 top-28 h-16 w-16 text-[#7869d7] transition-all duration-700 ease-out lg:left-[calc(50%_-_510px)] lg:top-36 ${popClass}`}
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle cx="50" cy="50" r="36" stroke="currentColor" strokeWidth="4" />
        <path d="M64 36 50 64 36 36Z" fill="currentColor" fillOpacity="0.15" />
      </svg>

      <svg
        className="absolute right-[8%] top-20 h-14 w-48 text-[#49bd7a] intro-path-float sm:right-[12%] lg:right-[calc(50%_-_480px)] lg:top-28"
        viewBox="0 0 220 80"
        fill="none"
      >
        <path d="M4 40c30-24 64-22 86 2s57 22 84 0 30-10 44-2" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>

      <svg
        className="absolute right-[5%] top-[55%] h-12 w-12 text-[#f7b719] transition-all duration-700 ease-out lg:right-[calc(50%_-_490px)] lg:top-[55%]"
        viewBox="0 0 60 60"
        fill="none"
      >
        <rect x="8" y="8" width="44" height="44" rx="4" stroke="currentColor" strokeWidth="3" />
      </svg>
    </div>
  );
}

function BookStackIllustration() {
  return (
    <svg className="w-full max-w-[115px] sm:max-w-[190px] lg:max-w-[205px]" viewBox="0 0 300 260" fill="none" aria-hidden="true">
      <path d="M50 174 238 143l30 31-188 35-30-35Z" fill="#69B4E9" stroke="#151A2D" strokeWidth="4" />
      <path d="M80 209 268 174v24L82 232c-16-2-27-9-32-23l30 .2Z" fill="#DDEEFF" stroke="#151A2D" strokeWidth="4" />
      <path d="M95 187 230 162" stroke="#151A2D" strokeWidth="3" strokeLinecap="round" />
      <path d="M112 203 238 180" stroke="#151A2D" strokeWidth="3" strokeLinecap="round" />

      <path d="M43 119 235 94l27 34-187 31-32-40Z" fill="#8B7AD8" stroke="#151A2D" strokeWidth="4" />
      <path d="M75 159 262 128v25L78 183c-16-2-28-10-35-25l32 1Z" fill="#F7F4FF" stroke="#151A2D" strokeWidth="4" />
      <path d="M96 139 221 121" stroke="#151A2D" strokeWidth="3" strokeLinecap="round" />
      <path d="M113 153 228 137" stroke="#151A2D" strokeWidth="3" strokeLinecap="round" />

      <path d="M35 69 223 53l28 33-186 23-30-40Z" fill="#FFD66E" stroke="#151A2D" strokeWidth="4" />
      <path d="M65 109 251 86v25L69 134c-16-2-27-9-34-24l30-1Z" fill="#FFF7D6" stroke="#151A2D" strokeWidth="4" />
      <path d="M86 91 207 79" stroke="#151A2D" strokeWidth="3" strokeLinecap="round" />
      <path d="M103 104 216 94" stroke="#151A2D" strokeWidth="3" strokeLinecap="round" />

      <path
        d="M178 38c25-15 57-5 64 26 9 42-26 72-58 67-21 20-62 6-69-31-8-44 27-72 63-62Z"
        fill="#F05D4F"
        stroke="#151A2D"
        strokeWidth="4"
      />
      <path d="M181 41c-4-24 8-36 27-45" stroke="#151A2D" strokeWidth="4" strokeLinecap="round" />
      <path
        d="M205 11c17-5 32-19 35-37 14 22-4 49-35 37Z"
        fill="#64BD78"
        stroke="#151A2D"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path d="M233 51c8 7 11 18 10 29" stroke="#FF877C" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

const promiseContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const promiseItemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const promiseSlideLeft = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const promiseScaleIn = {
  hidden: { scale: 0.6, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function CounsellingPage() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const triggerRatio = isMobile ? 0.16 : 0.25;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= triggerRatio) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: isMobile ? [0, 0.16] : [0, 0.25] }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-[#fffefa] text-[#171727]">
      <section className="px-5 pb-4 pt-24 sm:px-8 lg:px-20 lg:pt-32">
        <div className="mx-auto max-w-[1180px]">
          <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#6657c8]">
            AGS / Counselling
          </p>
          <h1
            className="mt-4 text-[2.35rem] font-bold leading-[1.04] text-[#171727] sm:text-[3.15rem] lg:text-[3.6rem]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            The Help You Get
          </h1>
        </div>
      </section>

      <section
        id="counselling"
        ref={sectionRef}
        className="relative isolate overflow-hidden bg-[#fffefa] px-[clamp(1rem,5vw,1.5rem)] py-14 text-[#171727] sm:px-8 lg:h-[620px] lg:px-0 lg:py-0"
      >
        <IntroMotionStyles />
        <IntroBackgroundArtwork isVisible={isVisible} />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[#fffaf1]/38" aria-hidden="true" />

        <div className="relative z-10 mx-auto grid max-w-[1020px] items-start gap-10 lg:h-full lg:grid-cols-none lg:gap-0">
          <div
            className="w-full max-w-[clamp(18rem,90vw,30rem)] pt-16 lg:absolute lg:left-[clamp(4rem,7vw,7rem)] lg:top-[3.2rem] lg:w-[clamp(24rem,31vw,33rem)] lg:pt-0"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
            }}
          >
            <p className="text-[1.2rem] font-bold uppercase tracking-[0.34em] text-[#7b70cc]">
              Counselling
            </p>
            <div
              className="mt-3 h-0.5 w-14 bg-[#7b70cc]"
              style={{
                opacity: isVisible ? 1 : 0,
                scaleX: isVisible ? 1 : 0,
                transformOrigin: "left center",
                transition: "opacity 0.5s ease-out, scaleX 0.5s ease-out",
              }}
            />

            <h2
              className="mt-5 text-[clamp(2.25rem,5vw,3.3rem)] font-bold leading-[1.05] text-[#171727] lg:mt-6"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              The Help You Get
            </h2>

            <p className="mt-[30px] max-w-[390px] text-[0.95rem] leading-7 text-[#555568] lg:mt-[30px] lg:max-w-[clamp(22rem,27vw,30rem)] lg:text-[0.92rem] lg:leading-6">
              AGS has a resident school counselor, also known as guidance
              counselors. Auntie Rebecca is a certified professional counselor
              who plays a multifaceted role, depending on the requirements of
              the AGS community.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 lg:mt-6">
              <a
                href="/contacts/"
                onClick={(event) => handleNavClick(event, "/contacts/")}
                className="inline-flex min-h-11 items-center gap-2 rounded-md bg-[#5f54bf] px-[clamp(1rem,2vw,1.5rem)] text-[clamp(.82rem,.9vw,.95rem)] font-bold text-white shadow-[0_16px_30px_rgba(95,84,191,0.2)] transition hover:-translate-y-0.5 hover:bg-[#7164d2] lg:min-h-10 lg:px-4 lg:text-[0.82rem]"
              >
                Contact Our Counselor
                <ArrowRight size={15} strokeWidth={2.4} />
              </a>
            </div>
          </div>

          <div
            className="relative lg:absolute lg:right-[clamp(-10rem,-10vw,7rem)] lg:top-[2rem] lg:w-[clamp(43rem,50vw,48rem)]"
            style={{
              scale: isVisible ? 1 : 0.6,
              opacity: isVisible ? 1 : 0,
              transition: "scale 0.7s ease-out, opacity 0.7s ease-out",
            }}
          >
            <div className="relative h-[500px]">
              <div
                className="absolute lg:left-[clamp(5rem,2vw,2.5rem)] top-[1rem] z-[2] lg:w-[clamp(27rem,30vw,30rem)] w-[clamp(23rem,28vw,30rem)] lg:h-[clamp(28rem,35vw,34rem)] h-[clamp(24rem,34vw,35rem)] overflow-visible"
              >
                <AcademicImageMask
                  src={Images.counsellorImg}
                  alt="Counselling at AGS"
                  objectPosition="250% 0%"
                  className="h-full w-full transform -translate-x-3 transition-all duration-[0.6s] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03] hover:saturate-[1.06]   "
                />
              </div>

              <div className="absolute z-0 scale-[0.42] opacity-[0.18]" style={{ top: "-12px", right: "42px" }}>
                <BookStackIllustration />
              </div>

              <div
                className="absolute z-[4] w-[228px] rounded-[16px] border bg-white p-[14px]"
                style={{
                  right: "clamp(2rem,7vw,6rem)",
                  bottom: "clamp(2rem,6vw,5rem)",
                  borderColor: "#ECE9F4",
                  boxShadow: "0 18px 40px rgba(24,24,34,.08)",
                }}
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#eeeaff] text-[#5f54bf]">
                  <Heart size={14} strokeWidth={2.1} />
                </div>
                <p className="mt-2 text-xs font-extrabold text-[#171727]">
                  Caring Community
                </p>
                <p className="mt-1 text-[0.65rem] leading-4 text-[#555568]">
                  Every student is known and supported.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div>
              <h3 className="text-xl font-extrabold text-[#6657c8]">
                To the school community she offers us:
              </h3>
              <ul className="mt-6 space-y-6">
                <li>
                  <h4 className="font-extrabold text-[#171727]">
                    Providing instruction on psychological and social issues
                  </h4>
                  <p className="mt-1 text-sm leading-7 text-[#555568]">
                    Provides information to students about unethical behaviors
                    and good moral values offering seminars.
                  </p>
                </li>
                <li>
                  <h4 className="font-extrabold text-[#171727]">
                    Vocational guidance
                  </h4>
                  <p className="mt-1 text-sm leading-7 text-[#555568]">
                    Helping students prepare for secondary school education and
                    helping them select schools that match their skillsets,
                    working with parents.
                  </p>
                </li>
                <li>
                  <h4 className="font-extrabold text-[#171727]">
                    Counseling
                  </h4>
                  <p className="mt-1 text-sm leading-7 text-[#555568]">
                    She is an asset to students, mediating conflicts with their
                    peers, teachers, or parents. Often providing short-term
                    counseling services to students during school hours.
                  </p>
                </li>
                <li>
                  <h4 className="font-extrabold text-[#171727]">
                    Early intervention
                  </h4>
                  <p className="mt-1 text-sm leading-7 text-[#555568]">
                    With her skillset and training she can identify children with
                    learning difficulties and psychological concerns that
                    commonly manifest in children and adolescents. She intervenes
                    and also provides referrals, recommendations, and education
                    to parents about mental health concerns.
                  </p>
                </li>
                <li>
                  <h4 className="font-extrabold text-[#171727]">
                    Special needs services
                  </h4>
                  <p className="mt-1 text-sm leading-7 text-[#555568]">
                    We now have the know-how on how to help special needs
                    students integrate into classrooms. Working with teachers she
                    oversees programs that address requirements for students with
                    special needs or learning difficulties.
                  </p>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-extrabold text-[#6657c8]">
                Routinely help students:
              </h3>
              <ul className="mt-6 space-y-4">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#6657c8]" />
                  <span className="text-sm leading-7 text-[#555568]">
                    Maintain academic standards and set goals for academic
                    success.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#6657c8]" />
                  <span className="text-sm leading-7 text-[#555568]">
                    Develop skills to improve organization, study habits, and
                    time management.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#6657c8]" />
                  <span className="text-sm leading-7 text-[#555568]">
                    Work through personal problems that may affect academics or
                    relationships.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#6657c8]" />
                  <span className="text-sm leading-7 text-[#555568]">
                    Improve social skills.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#6657c8]" />
                  <span className="text-sm leading-7 text-[#555568]">
                    Cope with school or community-related disruptions and events.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#6657c8]" />
                  <span className="text-sm leading-7 text-[#555568]">
                    Identifies interests, strengths, and aptitudes through
                    assessment.
                  </span>
                </li>
              </ul>

              <div className="mt-10 rounded-[30px] border border-[#dcd6f3] bg-[#f4f1fb] p-7">
                <p className="text-sm leading-7 text-[#555568]">
                  Children need to be heard and taught when and how to talk and
                  at AGS we facilitate that interaction. Parents sometimes feel
                  overwhelmed and need guidance &mdash; her office is open for
                  consultation as well.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
