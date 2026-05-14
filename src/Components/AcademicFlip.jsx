import { useEffect, useRef, useState } from "react";
import academicPathwayIcon from "../assets/academic-pathway-icon.svg";
import { ImageCollections, Images } from "../assets/Images/Images";

const pathwayCards = [
  {
    step: "01",
    label: "Discover",
    title: "Focused foundations",
    src: Images.playground,
    alt: "AGS student in a focused classroom learning session",
    description:
      "Core classroom habits help students build confidence, curiosity, and steady academic discipline.",
  },
  {
    step: "02",
    label: "Grow",
    title: "A campus built for readiness",
    src: ImageCollections.campus[0],
    alt: "AGS campus grounds",
    description:
      "Learning extends across shared spaces where students practice leadership, service, and collaboration.",
  },
  {
    step: "03",
    label: "Lead",
    title: "Prepared for what comes next",
    src: ImageCollections.graduation[0],
    alt: "AGS student receiving recognition during graduation",
    description:
      "Students leave each stage equipped to think clearly, act responsibly, and keep growing.",
  },
];

function AcademicMotionStyles() {
  return (
    <style>
      {`
        @keyframes academicUnderlineDraw {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        .academic-glide-up {
          opacity: 0;
          transform: translateY(34px);
          transition:
            opacity 760ms cubic-bezier(0.22, 1, 0.36, 1),
            transform 760ms cubic-bezier(0.22, 1, 0.36, 1);
          will-change: opacity, transform;
        }

        .academic-glide-up.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .academic-underline-reveal {
          opacity: 0;
          transform: scaleX(0);
          transform-origin: left center;
        }

        .academic-underline-reveal.is-visible {
          opacity: 1;
          animation: academicUnderlineDraw 720ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        @media (prefers-reduced-motion: reduce) {
          .academic-glide-up,
          .academic-underline-reveal {
            animation: none !important;
            opacity: 1;
            transform: none;
          }
        }
      `}
    </style>
  );
}
function AcademicCardRow() {
  return (
    <div className="mx-auto mt-12 w-full max-w-[1180px] py-5 sm:mt-14 lg:mt-16">
      <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-7">
        {pathwayCards.map((card, index) => {
          const isFeatured = index === 1;

          return (
            <article
              key={card.title}
              className={`group relative overflow-hidden rounded-2xl border bg-white text-left hover:shadow-[0_30px_80px_rgba(65,57,102,0.18)] ${
                isFeatured
                  ? "z-10 w-full max-w-[390px] border-[#d6cef8] shadow-[0_30px_90px_rgba(95,84,191,0.2)] md:scale-110"
                  : "w-full max-w-[340px] border-[#e7e0d6] shadow-[0_20px_56px_rgba(65,57,102,0.1)] md:scale-95"
              }`}
            >
              <div
                className={`overflow-hidden bg-[#e9e3d9] ${
                  isFeatured
                    ? "h-[300px] sm:h-[330px]"
                    : "h-[240px] sm:h-[270px]"
                }`}
              >
                <img
                  src={card.src}
                  alt={card.alt}
                  className="h-full w-full object-cover object-[10%0%]"
                />
              </div>

              <div className={isFeatured ? "p-7" : "p-5 sm:p-6"}>
                <div className="flex items-center justify-between gap-4">
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-[#6657c8]">
                    {card.label}
                  </p>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f4f1ff] text-xs font-extrabold text-[#5f54bf]">
                    {card.step}
                  </span>
                </div>

                <h3
                  className={`mt-4 font-bold leading-tight text-[#171727] ${
                    isFeatured ? "text-2xl sm:text-[1.8rem]" : "text-xl"
                  }`}
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  {card.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#5c5c6f]">
                  {card.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default function AcademicFlip() {
  const headingRef = useRef(null);
  const [isHeadingVisible, setIsHeadingVisible] = useState(() => {
    if (typeof window === "undefined") return false;

    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    const headingNode = headingRef.current;
    if (!headingNode) return undefined;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeadingVisible(entry.isIntersecting && entry.intersectionRatio > 0.12);
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: [0, 0.12, 0.32],
      }
    );

    observer.observe(headingNode);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="academics" className="relative overflow-hidden bg-[#f7f4ed] px-5 py-16 text-[#171727] sm:px-8 lg:px-14 lg:py-20">
      <AcademicMotionStyles />
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-[8%] top-28 h-24 w-24 rounded-full bg-[#fee6a8]/55 blur-2xl" />
        <div className="absolute right-[12%] top-56 h-32 w-32 rounded-full bg-[#dcd6ff]/70 blur-3xl" />
        <div className="absolute bottom-32 left-[18%] h-28 w-28 rounded-full bg-[#cbeee1]/65 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1760px]">
        <div ref={headingRef} className="mx-auto max-w-[760px] text-center">
          <div
            className={`academic-glide-up flex items-center justify-center gap-3 ${
              isHeadingVisible ? "is-visible" : ""
            }`}
          >
            <img
              src={academicPathwayIcon}
              alt=""
              aria-hidden="true"
              className="h-12 w-12 shrink-0 sm:h-14 sm:w-14"
            />
            <div className="text-left">
              <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#6657c8]">
                Academic Pathway
              </p>
              <div
                className={`academic-underline-reveal mt-3 h-0.5 w-16 bg-[#6657c8] ${
                  isHeadingVisible ? "is-visible" : ""
                }`}
                style={{ animationDelay: "80ms" }}
              />
            </div>
          </div>
          <h2
            className={`academic-glide-up mt-5 text-[2.15rem] font-bold leading-[1.04] sm:text-[2.65rem] lg:text-[3rem] ${
              isHeadingVisible ? "is-visible" : ""
            }`}
            style={{
              transitionDelay: "120ms",
              fontFamily: "Georgia, 'Times New Roman', serif",
            }}
          >
            Learning that turns{" "}
            <span className="italic text-[#6657c8]">into readiness.</span>
          </h2>
          <p
            className={`academic-glide-up mx-auto mt-5 max-w-[540px] text-base leading-7 text-[#555568] ${
              isHeadingVisible ? "is-visible" : ""
            }`}
            style={{ transitionDelay: "220ms" }}
          >
            Students move through clear academic stages, from core classroom
            foundations to confident assessment preparation.
          </p>
        </div>

        <AcademicCardRow isVisible={isHeadingVisible} />
      </div>
    </section>
  );
}
