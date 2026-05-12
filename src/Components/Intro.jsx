import {
  ArrowRight,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Globe,
  GraduationCap,
  HandHeart,
  Heart,
  Users,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Images } from "../assets/Images/Images";

const promiseStats = [
  {
    icon: Users,
    value: "60+ Years",
    label: "of Excellence",
    color: "text-[#6657c8]",
    bg: "bg-[#eeeaff]",
  },
  {
    icon: GraduationCap,
    value: "Holistic",
    label: "Education",
    color: "text-[#d99b1d]",
    bg: "bg-[#fff0c7]",
  },
  {
    icon: Globe,
    value: "Global",
    label: "Perspective",
    color: "text-[#43a966]",
    bg: "bg-[#dff5e6]",
  },
  {
    icon: HandHeart,
    value: "Service",
    label: "at Our Core",
    color: "text-[#5c98d6]",
    bg: "bg-[#e5f1ff]",
  },
];

const liveMotionVariants = [
  "intro-live-float-a",
  "intro-live-float-b",
  "intro-live-float-c",
  "intro-live-wobble",
];

const randomBetween = (min, max) => (Math.random() * (max - min) + min).toFixed(2);
const pickMotion = () =>
  liveMotionVariants[Math.floor(Math.random() * liveMotionVariants.length)];
const liveStyle = (transitionDelay, minDuration = 6.4, maxDuration = 10.8) => ({
  transitionDelay,
  "--intro-live-duration": `${randomBetween(minDuration, maxDuration)}s`,
  "--intro-live-delay": `${randomBetween(-4.4, -0.4)}s`,
});

function IntroMotionStyles() {
  return (
    <style>
      {`
        @keyframes introFloatA {
          0%, 100% { translate: 0 0; }
          28% { translate: 7px -9px; }
          63% { translate: -5px 6px; }
        }

        @keyframes introFloatB {
          0%, 100% { translate: 0 0; }
          35% { translate: -8px -5px; }
          72% { translate: 6px 8px; }
        }

        @keyframes introFloatC {
          0%, 100% { translate: 0 0; }
          25% { translate: 4px 8px; }
          58% { translate: 10px -4px; }
          82% { translate: -6px -7px; }
        }

        @keyframes introWobble {
          0%, 100% { translate: 0 0; rotate: 0deg; }
          30% { translate: 5px -7px; rotate: 4deg; }
          65% { translate: -6px 5px; rotate: -3deg; }
        }

        @keyframes introPathFloat {
          0%, 100% { translate: 0 0; }
          45% { translate: 8px -6px; }
          78% { translate: -5px 4px; }
        }

        @keyframes introDashFlow {
          to { stroke-dashoffset: -50; }
        }

        @keyframes introSoftGlow {
          0%, 100% { filter: drop-shadow(0 0 0 rgba(120, 105, 215, 0)); }
          50% { filter: drop-shadow(0 8px 14px rgba(120, 105, 215, 0.16)); }
        }

        .intro-live-float-a {
          animation:
            introFloatA var(--intro-live-duration, 7.6s) ease-in-out var(--intro-live-delay, 0s) infinite,
            introSoftGlow 5.8s ease-in-out var(--intro-live-delay, 0s) infinite;
        }

        .intro-live-float-b {
          animation:
            introFloatB var(--intro-live-duration, 8.3s) ease-in-out var(--intro-live-delay, 0s) infinite,
            introSoftGlow 6.6s ease-in-out var(--intro-live-delay, 0s) infinite;
        }

        .intro-live-float-c {
          animation:
            introFloatC var(--intro-live-duration, 9.4s) ease-in-out var(--intro-live-delay, 0s) infinite,
            introSoftGlow 7.2s ease-in-out var(--intro-live-delay, 0s) infinite;
        }

        .intro-live-wobble {
          animation:
            introWobble var(--intro-live-duration, 7.8s) ease-in-out var(--intro-live-delay, 0s) infinite,
            introSoftGlow 6.1s ease-in-out var(--intro-live-delay, 0s) infinite;
        }

        .intro-path-float {
          animation: introPathFloat 9.2s ease-in-out -2.4s infinite;
        }

        .intro-dash-flow {
          animation: introDashFlow 3.2s linear 2.05s infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .intro-live-float-a,
          .intro-live-float-b,
          .intro-live-float-c,
          .intro-live-wobble,
          .intro-path-float,
          .intro-dash-flow {
            animation: none;
          }
        }
      `}
    </style>
  );
}

function IntroBackgroundArtwork({ isVisible }) {
  const popClass = isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75";
  const motion = useMemo(
    () => ({
      star: { className: pickMotion(), style: liveStyle("120ms") },
      leftLine: { className: pickMotion(), style: liveStyle("520ms") },
      paperPlane: { className: pickMotion(), style: liveStyle("440ms") },
      box: { className: pickMotion(), style: liveStyle("320ms") },
      bottomLine: { className: pickMotion(), style: liveStyle("640ms") },
      greenLine: { className: pickMotion(), style: liveStyle("600ms") },
      dots: { className: pickMotion(), style: liveStyle("720ms", 7.2, 11.8) },
      dotOne: { className: pickMotion(), style: liveStyle("700ms", 5.8, 9.4) },
      dotTwo: { className: pickMotion(), style: liveStyle("580ms", 5.8, 9.4) },
      dotThree: { className: pickMotion(), style: liveStyle("680ms", 5.8, 9.4) },
      dotFour: { className: pickMotion(), style: liveStyle("480ms", 5.8, 9.4) },
    }),
    []
  );

  return (
    <div className="pointer-events-none absolute inset-0 z-0 text-[#7869d7]" aria-hidden="true">
      <svg
        className={`absolute right-7 top-8 h-12 w-12 origin-center text-[#f7b719] transition-all duration-700 ease-out sm:right-12 sm:top-10 lg:left-[calc(50%_-_500px)] lg:right-auto lg:top-11 lg:h-[58px] lg:w-[58px] ${popClass} ${isVisible ? motion.star.className : ""}`}
        style={motion.star.style}
        viewBox="0 0 100 100"
        fill="none"
      >
        <path
          d="M50 9 59.6 36.5 88.7 37.1 65.5 54.8 73.9 82.7 50 66 26.1 82.7 34.5 54.8 11.3 37.1 40.4 36.5 50 9Z"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path d="M82 17 88 10M91 29l10-2M69 8l2-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>

      <svg
        className={`absolute -left-8 top-[520px] h-20 w-36 origin-center text-[#49bd7a] transition-all duration-700 ease-out sm:left-4 sm:top-[51%] lg:left-[calc(50%_-_515px)] lg:top-[328px] lg:h-20 lg:w-36 ${popClass} ${isVisible ? motion.leftLine.className : ""}`}
        style={motion.leftLine.style}
        viewBox="0 0 220 140"
        fill="none"
      >
        <path
          d="M0 80c37 23 68 5 85-28 12-24 25-19 20 1-7 29 25 55 73 37"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M102 53c10 4 23 15 31 33"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>

      <svg
        className={`absolute left-[32%] top-7 h-16 w-[230px] text-[#9a8ee5] sm:left-[48%] sm:w-[280px] lg:left-[calc(50%_-_60px)] lg:top-10 lg:h-16 lg:w-[320px] ${isVisible ? "intro-path-float" : ""}`}
        viewBox="0 0 460 120"
        fill="none"
      >
        <defs>
          <mask id="intro-flight-path-mask" maskUnits="userSpaceOnUse">
            <path
              d="M8 28c48 78 95 21 74-1-18-18-37 15-10 38 49 41 125-70 206-43 40 13 59 56 20 60-38 4-44-58-5-66 37-8 65 35 49 67"
              pathLength="1"
              stroke="white"
              strokeDasharray="1"
              strokeDashoffset={isVisible ? "0" : "1"}
              strokeLinecap="round"
              strokeWidth="10"
              style={{
                transition: "stroke-dashoffset 1800ms cubic-bezier(0.22, 1, 0.36, 1)",
                transitionDelay: "240ms",
              }}
            />
          </mask>
        </defs>
        <path
          d="M8 28c48 78 95 21 74-1-18-18-37 15-10 38 49 41 125-70 206-43 40 13 59 56 20 60-38 4-44-58-5-66 37-8 65 35 49 67"
          className={isVisible ? "intro-dash-flow" : ""}
          mask="url(#intro-flight-path-mask)"
          stroke="currentColor"
          strokeDasharray="11 14"
          strokeLinecap="round"
          strokeWidth="3"
        />
      </svg>

      <svg
        className={`absolute -right-8 top-[600px] h-16 w-16 origin-center text-[#7b2dff] transition-all duration-700 ease-out sm:right-8 sm:top-24 lg:right-[calc(50%_-_500px)] lg:top-9 lg:h-[68px] lg:w-[68px] ${popClass} ${isVisible ? motion.paperPlane.className : ""}`}
        style={motion.paperPlane.style}
        viewBox="0 0 120 120"
        fill="none"
      >
        <path
          d="M12 19 106 12 65 92 51 58 12 19Z"
          fill="#e8e5ff"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path d="M51 58 106 12 38 45" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      <svg
        className={`absolute right-10 top-24 h-8 w-8 origin-center rotate-12 text-[#73c8f5] transition-all duration-700 ease-out sm:right-24 sm:top-28 lg:right-[calc(50%_-_255px)] lg:top-[88px] lg:h-8 lg:w-8 ${popClass} ${isVisible ? motion.box.className : ""}`}
        style={motion.box.style}
        viewBox="0 0 44 44"
        fill="none"
      >
        <rect x="8" y="8" width="28" height="28" rx="3" stroke="currentColor" strokeWidth="5" />
      </svg>

      <svg
        className={`absolute left-12 top-[740px] h-14 w-24 origin-center text-[#7869d7] transition-all duration-700 ease-out sm:left-24 sm:top-auto sm:bottom-8 lg:left-[calc(50%_-_455px)] lg:bottom-4 lg:h-12 lg:w-24 ${popClass} ${isVisible ? motion.bottomLine.className : ""}`}
        style={motion.bottomLine.style}
        viewBox="0 0 150 90"
        fill="none"
      >
        <path
          d="M0 66c20-34 46-46 68-8 23 39 37-18 80 7"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>

      <svg
        className={`absolute right-1 top-[800px] h-14 w-28 origin-center text-[#49bd7a] transition-all duration-700 ease-out lg:right-[calc(50%_-_470px)] lg:top-auto lg:bottom-[78px] lg:h-12 lg:w-32 ${popClass} ${isVisible ? motion.greenLine.className : ""}`}
        style={motion.greenLine.style}
        viewBox="0 0 190 80"
        fill="none"
      >
        <path
          d="M2 44c23-30 48-31 77 0s53 27 77 3 30-14 32-7"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>

      <div
        className={`absolute bottom-4 right-10 grid origin-center grid-cols-6 gap-3 text-[#78b9ec] opacity-70 transition-all duration-700 ease-out lg:right-[calc(50%_-_490px)] ${isVisible ? `scale-100 opacity-70 ${motion.dots.className}` : "scale-75 opacity-0"}`}
        style={motion.dots.style}
      >
        {Array.from({ length: 24 }).map((_, index) => (
          <span key={index} className="h-1.5 w-1.5 rounded-full bg-current" />
        ))}
      </div>

      <span
        className={`absolute left-7 top-[62%] h-3.5 w-3.5 origin-center rounded-full bg-[#f8b921] transition-all duration-700 ease-out lg:left-[calc(50%_-_510px)] lg:top-[302px] ${popClass} ${isVisible ? motion.dotOne.className : ""}`}
        style={motion.dotOne.style}
      />
      <span
        className={`absolute left-[46%] top-[47%] h-2.5 w-2.5 origin-center rotate-45 rounded-sm bg-[#f8b921] transition-all duration-700 ease-out lg:left-[calc(50%_-_88px)] lg:top-[236px] ${popClass} ${isVisible ? motion.dotTwo.className : ""}`}
        style={motion.dotTwo.style}
      />
      <span
        className={`absolute left-[48%] top-[52%] h-3 w-3 origin-center rounded-full border-2 border-[#f8b921] transition-all duration-700 ease-out lg:left-[calc(50%_-_30px)] lg:top-[340px] ${popClass} ${isVisible ? motion.dotThree.className : ""}`}
        style={motion.dotThree.style}
      />
      <span
        className={`absolute left-24 top-[31%] h-4 w-4 origin-center rounded-full bg-[#8f82d8] transition-all duration-700 ease-out lg:left-[calc(50%_-_470px)] lg:top-[154px] ${popClass} ${isVisible ? motion.dotFour.className : ""}`}
        style={motion.dotFour.style}
      />
    </div>
  );
}

const glideClass = (isVisible, direction = "up") => {
  const offsets = {
    up: isVisible ? "translate-y-0" : "translate-y-8",
    down: isVisible ? "translate-y-0" : "-translate-y-6",
    left: isVisible ? "translate-x-0" : "-translate-x-8",
    right: isVisible ? "translate-x-0" : "translate-x-8",
  };

  return `transition-all duration-700 ease-out will-change-transform ${
    isVisible ? "opacity-100" : "opacity-0"
  } ${offsets[direction]}`;
};

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

export default function Intro() {
  const introRef = useRef(null);
  const [isArtworkVisible, setIsArtworkVisible] = useState(false);

  useEffect(() => {
    const introNode = introRef.current;
    if (!introNode) return undefined;

    const isMobileViewport = window.matchMedia("(max-width: 767px)").matches;
    const triggerRatio = isMobileViewport ? 0.16 : 0.25;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= triggerRatio) {
          setIsArtworkVisible(true);
          observer.disconnect();
        }
      },
      { threshold: isMobileViewport ? [0, 0.16] : [0, 0.25] }
    );

    observer.observe(introNode);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={introRef}
      className="relative isolate overflow-hidden bg-[#fffefa] px-5 py-14 text-[#171727] sm:px-8 lg:h-[620px] lg:px-0 lg:py-0"
    >
      <IntroMotionStyles />
      <IntroBackgroundArtwork isVisible={isArtworkVisible} />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[#fffaf1]/38" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid max-w-[1020px] items-start gap-10 lg:h-full lg:grid-cols-none lg:gap-0">
        <div className="max-w-[430px] pt-16 lg:absolute lg:left-[92px] lg:top-[68px] lg:w-[330px] lg:pt-0">
          <p
            className={`text-[1.2rem] font-bold uppercase tracking-[0.34em] text-[#7b70cc] ${glideClass(isArtworkVisible, "down")}`}
          >
            Our Promise
          </p>
          <div
            className={`mt-3 h-0.5 w-14 bg-[#7b70cc] ${glideClass(isArtworkVisible, "left")}`}
            style={{ transitionDelay: "80ms" }}
          />

          <h2
            className={`mt-5 text-[2.45rem] font-bold leading-[1.04] text-[#171727] sm:text-[3rem] lg:mt-6 lg:text-[2.1rem] ${glideClass(isArtworkVisible, "up")}`}
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Where character meets{" "}
            <span className="italic text-[#6657c8]">curiosity.</span>
          </h2>

          <p
            className={`mt-6 max-w-[390px] text-[0.95rem] leading-7 text-[#555568] lg:mt-5 lg:max-w-[315px] lg:text-[0.78rem] lg:leading-5 ${glideClass(isArtworkVisible, "up")}`}
            style={{ transitionDelay: "140ms" }}
          >
            We believe great schools do not simply teach. They shape minds
            capable of independent thought and hearts grounded in service. Every
            classroom, lab, and stage at AGS is designed around that conviction.
          </p>

          <div
            className={`mt-8 flex flex-wrap gap-4 lg:mt-6 ${glideClass(isArtworkVisible, "up")}`}
            style={{ transitionDelay: "220ms" }}
          >
            <a
              href="#about"
              className="inline-flex min-h-11 items-center gap-2 rounded-md bg-[#5f54bf] px-5 text-xs font-bold text-white shadow-[0_16px_30px_rgba(95,84,191,0.2)] transition hover:-translate-y-0.5 hover:bg-[#7164d2] lg:min-h-10 lg:px-4 lg:text-[0.68rem]"
            >
              Learn More About Us
              <ArrowRight size={15} strokeWidth={2.4} />
            </a>

            <a
              href="#values"
              className="inline-flex min-h-11 items-center gap-3 rounded-md border border-[#7468d0] bg-white px-5 text-xs font-bold text-[#6657c8] transition hover:-translate-y-0.5 hover:bg-[#f4f1ff] lg:min-h-10 lg:px-4 lg:text-[0.68rem]"
            >
              Our Values
              <Heart size={17} strokeWidth={2.3} />
            </a>
          </div>
        </div>

        <div className="relative min-h-[380px] lg:absolute lg:right-[76px] lg:top-[130px] lg:min-h-0 lg:w-[470px]">
          <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 lg:block lg:top-[82px]">
            <BookStackIllustration />
          </div>

          <article
            className={`group relative mx-auto mt-2 max-w-[430px] rounded-lg border border-[#e8e5f0] bg-white p-6 shadow-[0_24px_70px_rgba(78,68,132,0.1)] transition-all duration-500 ease-out hover:z-20 hover:-translate-y-4 hover:scale-[1.055] hover:rotate-[-0.45deg] hover:border-[#cfc5f0] hover:shadow-[0_38px_100px_rgba(78,68,132,0.24)] sm:p-7 lg:mx-0 lg:mt-0 lg:w-[500px] lg:max-w-none lg:p-6 ${glideClass(isArtworkVisible, "right")}`}
            style={{
              transitionDelay: "260ms",
              transformOrigin: "center center",
            }}
          >
            <div className="pointer-events-none absolute inset-0 rounded-lg opacity-0 ring-2 ring-[#7b70cc]/0 transition duration-500 group-hover:opacity-100 group-hover:ring-[#7b70cc]/18" />
            <div className="grid gap-5 sm:grid-cols-[1.75fr_0.85fr] lg:grid-cols-[2fr_0.85fr] lg:gap-5">
              <div className="min-h-[230px] overflow-hidden rounded-md border border-[#ece8f6] bg-[#f7f3ff] lg:min-h-[210px]">
                <img
                  src={Images.academicExcellence}
                  alt="Academic excellence classroom"
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110 group-hover:saturate-[1.08]"
                />
              </div>

              <div className="min-w-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#eeeaff] text-[#5f54bf] lg:h-10 lg:w-10">
                  <BookOpen size={25} strokeWidth={2.1} />
                </div>
                <h3
                  className="mt-4 text-xl font-bold leading-tight text-[#171727] lg:mt-3 lg:text-[0.96rem]"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  Academic Excellence
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#626277] lg:text-[0.7rem] lg:leading-[1.05rem]">
                  Rigorous instruction and guided inquiry help students build
                  lasting mastery.
                </p>
                <a
                  href="#academics"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#5f54bf] transition hover:text-[#7164d2] lg:mt-4 lg:text-[0.68rem]"
                >
                  Explore Academics
                  <ArrowRight size={15} strokeWidth={2.4} />
                </a>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between lg:mt-4">
              <button
                type="button"
                aria-label="Previous promise"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e4e0ef] bg-white text-[#171727] transition hover:border-[#7b70cc] hover:text-[#6657c8] lg:h-8 lg:w-8"
              >
                <ChevronLeft size={16} />
              </button>

              <div className="flex items-center gap-3 lg:gap-2.5" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((dot) => (
                  <span
                    key={dot}
                    className={`h-2 w-2 rounded-full ${dot === 0 ? "bg-[#5f54bf]" : "bg-[#d8d5de]"}`}
                  />
                ))}
              </div>

              <button
                type="button"
                aria-label="Next promise"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e4e0ef] bg-white text-[#171727] transition hover:border-[#7b70cc] hover:text-[#6657c8] lg:h-8 lg:w-8"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </article>

          <div className="mt-1 flex justify-center sm:mt-8 lg:absolute lg:right-0 lg:top-24 lg:mt-0 lg:hidden">
            <BookStackIllustration />
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-12 hidden max-w-[900px] rounded-lg bg-white/82 px-5 py-4 shadow-[0_18px_60px_rgba(92,80,150,0.08)] ring-1 ring-[#eeeaf6] backdrop-blur sm:block sm:px-7 lg:absolute lg:bottom-12 lg:left-1/2 lg:mt-0 lg:w-[700px] lg:-translate-x-1/2 lg:px-5 lg:py-2.5">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {promiseStats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.value}
                 className={`flex items-center gap-4 py-2 lg:gap-3 lg:px-5 ${
                  index > 0 ? "lg:border-l lg:border-[#ded9eb]" : ""
                }`}
              >
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${stat.bg} ${stat.color} lg:h-9 lg:w-9`}>
                  <Icon size={19} strokeWidth={2.1} />
                </div>
                <div>
                  <p className="text-sm font-extrabold text-[#171727] lg:text-[0.72rem]">{stat.value}</p>
                  <p className="mt-1 text-xs leading-4 text-[#4d4d61] lg:text-[0.62rem] lg:leading-3">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
