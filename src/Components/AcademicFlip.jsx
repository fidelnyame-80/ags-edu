import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
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

        @keyframes acaFloatA {
          0%, 100% { translate: 0 0; }
          30% { translate: 6px -8px; }
          65% { translate: -4px 5px; }
        }

        @keyframes acaFloatB {
          0%, 100% { translate: 0 0; }
          35% { translate: -7px -4px; }
          70% { translate: 5px 7px; }
        }

        @keyframes acaFloatC {
          0%, 100% { translate: 0 0; rotate: 0deg; }
          30% { translate: 4px -6px; rotate: 3deg; }
          65% { translate: -5px 4px; rotate: -2deg; }
        }

        .aca-float-a { animation: acaFloatA 7.6s ease-in-out -1.2s infinite; }
        .aca-float-b { animation: acaFloatB 8.3s ease-in-out -2.8s infinite; }
        .aca-float-c { animation: acaFloatC 7.8s ease-in-out -0.6s infinite; }

        @media (prefers-reduced-motion: reduce) {
          .academic-glide-up,
          .academic-underline-reveal,
          .aca-float-a,
          .aca-float-b,
          .aca-float-c {
            animation: none !important;
            opacity: 1;
            transform: none;
          }
        }
      `}
    </style>
  );
}

const cardColors = [
  "#FFD6D6", "#D6E8FF", "#D6FFD6", "#FFF4D6",
  "#E8D6FF", "#FFD6EC", "#D6FFF4", "#FFECD6",
  "#D6F0FF", "#F4FFD6",
];

const discoverPath =
  "M410 177 369 176 364 149 286.75 150.752 279.5 175.002 223 175.002 308 1 367 2 449 176 Z M338 45 338 47 361 114 310 114 339 46 Z";
const growPath =
  "M603 65.252 550.25 65.252 Q550.25 54.502 540.75 47.877 531.25 41.252 517.75 41.252 498.25 41.252 488.25 51.627 478.25 62.002 478.25 81.002 L478.25 97.002 Q478.25 116.002 488.25 126.377 498.25 136.752 517.75 136.752 531.25 136.752 540.75 130.377 550.25 124.002 550.25 114.002 L511.25 114.002 511.25 79.002 603 79.002 603 175.002 574.5 175.002 565 178 Q545.5 178.002 507.5 178.002 464.75 178.002 443.25 155.627 421.75 133.252 421.75 89.002 421.75 45.252 446.125 22.627 470.5 0.002 515.5 0.002 540.25 0.002 560 7.502 579.75 15.002 591.375 29.627 603 44.252 603 65.252 Z";
const leadPath =
  "M785.5 53.002 785.5 56.002 733.75 56.002 733.75 55.002 Q733.75 47.502 728.25 42.502 722.75 37.502 711.5 37.502 700.5 37.502 694.625 40.752 688.75 44.002 688.75 48.752 688.75 55.502 696.75 58.752 704.75 62.002 722.5 65.502 743.25 69.752 756.625 74.377 770 79.002 780 89.502 790 100.002 790.25 118.002 790.25 148.502 769.625 163.252 749 178.002 714.5 178.002 659 181 641 170 618 155 619 115 L667 115 Q673 133 680 137 694 146 710 144 723 142 731 138 733.75 134.002 733.75 127.002 733.75 120.752 726.125 117.627 718.5 114.502 701.25 111.002 680.25 106.502 666.5 101.627 652.75 96.752 642.5 85.502 632.25 74.252 632.25 55.002 632.25 26.752 654.125 13.377 676 0.002 709.5 0.002 742.5 0.002 763.75 13.377 785 26.752 785.5 53.002 Z";

const cardShapes = [discoverPath, growPath, leadPath];

const flyFrom = [
  { x: -120, y: 100 },
  { x: 80, y: -120 },
  { x: 140, y: 80 },
];

const imageAlign = [
  { tx: -45.08, ty: -0.15 },
  { tx: -0.12, ty: -0.08 },
  { tx: -0.06, ty: -0.18 },
];

const AcademicSVG = React.memo(function AcademicSVG() {
  return (
    <svg
      viewBox="222.9 -0.098 567.5 178.8"
      className="w-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        {pathwayCards.map((card, i) => (
          <pattern
            key={card.title}
            id={`card-img-${i}`}
            patternUnits="objectBoundingBox"
            width="1"
            height="1"
            patternTransform={`translate(${imageAlign[i].tx}, ${imageAlign[i].ty})`}
          >
            <image
              href={card.src}
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid slice"
            />
          </pattern>
        ))}
      </defs>
      {pathwayCards.map((card, i) => (
        <motion.g
          key={card.title}
          initial={{ x: flyFrom[i].x, y: flyFrom[i].y, opacity: 0, scale: 0.85 }}
          whileInView={{ x: 0, y: 0, opacity: 1, scale: 1 }}
          viewport={{ once: false, margin: "-40px" }}
          transition={{
            duration: 0.5,
            delay: i * 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <path
            d={cardShapes[i]}
            fill={`url(#card-img-${i})`}
            stroke="#000"
            strokeWidth="0.1"
          />
        </motion.g>
      ))}
    </svg>
  );
});

const AcademicBackgroundArtwork = React.memo(function AcademicBackgroundArtwork() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 text-[#7869d7]" aria-hidden="true">
      <svg
        className="absolute right-7 top-8 h-12 w-12 text-[#f7b719] aca-float-a sm:right-12 sm:top-10 lg:left-[calc(50%_-_500px)] lg:right-auto lg:top-11 lg:h-[58px] lg:w-[58px]"
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
        className="absolute -left-8 top-[520px] h-20 w-36 text-[#49bd7a] aca-float-b sm:left-4 sm:top-[51%] lg:left-[calc(50%_-_515px)] lg:top-[328px] lg:h-20 lg:w-36"
        viewBox="0 0 220 140"
        fill="none"
      >
        <path d="M0 80c37 23 68 5 85-28 12-24 25-19 20 1-7 29 25 55 73 37" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <path d="M102 53c10 4 23 15 31 33" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      </svg>

      <svg
        className="absolute -right-8 top-[600px] h-16 w-16 text-[#7b2dff] aca-float-c sm:right-8 sm:top-24 lg:right-[calc(50%_-_500px)] lg:top-9 lg:h-[68px] lg:w-[68px]"
        viewBox="0 0 120 120"
        fill="none"
      >
        <path d="M12 19 106 12 65 92 51 58 12 19Z" fill="#e8e5ff" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
        <path d="M51 58 106 12 38 45" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      <svg
        className="absolute right-10 top-24 h-8 w-8 rotate-12 text-[#73c8f5] aca-float-a sm:right-24 sm:top-28 lg:right-[calc(50%_-_255px)] lg:top-[88px] lg:h-8 lg:w-8"
        viewBox="0 0 44 44"
        fill="none"
      >
        <rect x="8" y="8" width="28" height="28" rx="3" stroke="currentColor" strokeWidth="5" />
      </svg>

      <svg
        className="absolute bottom-20 left-12 h-14 w-24 text-[#7869d7] aca-float-b sm:bottom-8 sm:left-24 lg:bottom-4 lg:left-[calc(50%_-_455px)] lg:h-12 lg:w-24"
        viewBox="0 0 150 90"
        fill="none"
      >
        <path d="M0 66c20-34 46-46 68-8 23 39 37-18 80 7" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      </svg>
    </div>
  );
});

const AcademicCardRow = React.memo(function AcademicCardRow() {
  const [randomColors] = useState(
    () => pathwayCards.map(() => cardColors[Math.floor(Math.random() * cardColors.length)]),
  );

  return (
    <div className="mx-auto mt-8 grid max-w-[1180px] gap-5 md:grid-cols-3">
      {pathwayCards.map((card, i) => (
        <div
          key={card.title}
          className="rounded-2xl p-6 shadow-lg"
          style={{ backgroundColor: randomColors[i] }}
        >
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs font-bold uppercase tracking-[0.28em]">
              {card.label}
            </p>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/50 text-xs font-extrabold">
              {card.step}
            </span>
          </div>
          <h3
            className="mt-3 text-xl font-bold leading-tight"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            {card.title}
          </h3>
          <p className="mt-2 text-sm leading-6 opacity-80">
            {card.description}
          </p>
        </div>
      ))}
    </div>
  );
});

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
    <section id="academics" className="relative overflow-hidden bg-[#fffefa] px-5 py-16 text-[#171727] sm:px-8 lg:px-14 lg:py-20">
      <AcademicMotionStyles />
      <AcademicBackgroundArtwork />

      <div ref={headingRef} className="relative z-10 mx-auto mb-14 max-w-[1760px] px-5 sm:px-8 lg:mb-20 lg:px-14">
        <div className={`academic-glide-up flex items-center justify-center gap-3 ${isHeadingVisible ? "is-visible" : ""}`}>
          <img
            src={academicPathwayIcon}
            alt=""
            aria-hidden="true"
            className="h-12 w-12 shrink-0 sm:h-14 sm:w-14"
            loading="lazy"
          />
          <div>
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
          className={`academic-glide-up mt-5 text-center text-[2.15rem] font-bold leading-[1.04] sm:text-[2.65rem] lg:text-[3rem] ${
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
          className={`academic-glide-up mx-auto mt-5 max-w-[540px] text-center text-base leading-7 text-[#555568] ${
            isHeadingVisible ? "is-visible" : ""
          }`}
          style={{ transitionDelay: "220ms" }}
        >
          Students move through clear academic stages, from core classroom
          foundations to confident assessment preparation.
        </p>
      </div>

      <div className="relative z-10 mx-auto max-w-[1760px] px-5 sm:px-8 lg:px-14">
        <div className="grid items-center gap-10 lg:grid-cols-[2fr_1fr]">
          <div className={`academic-glide-up ${isHeadingVisible ? "is-visible" : ""}`}>
            <div className="sm:scale-110 md:scale-[1.25] lg:scale-[1.35] origin-left overflow-visible" style={{ width: "clamp(300px, 55vw, 780px)" }}>
              <AcademicSVG />
            </div>
          </div>
        </div>

        <div className="mt-16 lg:mt-20">
          <AcademicCardRow />
        </div>
      </div>
    </section>
  );
}
