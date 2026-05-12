import { useEffect, useRef, useState } from "react";
import academicPathwayIcon from "../assets/academic-pathway-icon.svg";
import { Images } from "../assets/Images/Images";

const getViewportMode = () => {
  if (typeof window === "undefined") return "desktop";

  const viewportWidth = Math.min(
    window.innerWidth,
    document.documentElement.clientWidth || window.innerWidth
  );

  if (window.matchMedia("(max-width: 767px)").matches || viewportWidth < 768) {
    return "mobile";
  }

  if (window.matchMedia("(max-width: 1179px)").matches || viewportWidth < 1180) {
    return "compact";
  }

  return "desktop";
};
const numericValue = (value, fallback = 0) => {
  if (typeof value === "number") return value;

  const parsed = Number.parseFloat(value);
  return Number.isNaN(parsed) ? fallback : parsed;
};

const albumImages = [
  {
    title: "Learning Excellence",
    src: Images.learningExcellence,
    alt: "AGS student receiving recognition at graduation",
    shape: "landscape",
    stack: { left: "0%", top: "30px", layer: 2 },
    mobileStack: { left: "50%", top: "8px", x: "-50%", y: "0px", layer: 2 },
    mobileFan: { left: "2%", top: "14px", layer: 4 },
  },
  {
    title: "Academic Excellence",
    src: Images.academicExcellence,
    alt: "AGS students studying together",
    shape: "portrait",
    stack: { left: "24%", top: "6px", layer: 5 },
    mobileStack: { left: "50%", top: "28px", x: "-50%", y: "0px", layer: 3 },
    mobileFan: { left: "58%", top: "6px", layer: 5 },
  },
  {
    title: "Campus Life",
    src: Images.heroImg1,
    alt: "AGS campus grounds",
    shape: "landscape",
    stack: { left: "45%", top: "54px", layer: 4 },
    mobileStack: { left: "50%", top: "48px", x: "-50%", y: "0px", layer: 4 },
    mobileFan: { left: "24%", top: "168px", layer: 6 },
  },
  {
    title: "Graduation Moment",
    src: Images.learningExcellence,
    alt: "AGS graduation ceremony recognition",
    shape: "portrait",
    stack: { left: "70%", top: "8px", layer: 6 },
    mobileStack: { left: "50%", top: "68px", x: "-50%", y: "0px", layer: 5 },
    mobileFan: { left: "3%", top: "288px", layer: 7 },
  },
  {
    title: "School Community",
    src: Images.heroImg1,
    alt: "AGS school compound and community spaces",
    shape: "landscape",
    stack: { left: "8%", top: "182px", layer: 7 },
    mobileStack: { left: "50%", top: "88px", x: "-50%", y: "0px", layer: 6 },
    mobileFan: { left: "36%", top: "332px", layer: 8 },
  },
  {
    title: "Focused Learning",
    src: Images.academicExcellence,
    alt: "AGS classroom learning session",
    shape: "portrait",
    stack: { left: "34%", top: "156px", layer: 8 },
    mobileStack: { left: "50%", top: "108px", x: "-50%", y: "0px", layer: 7 },
    mobileFan: { left: "64%", top: "248px", layer: 9 },
  },
  {
    title: "Student Achievement",
    src: Images.learningExcellence,
    alt: "AGS student achievement celebration",
    shape: "landscape",
    stack: { left: "57%", top: "194px", layer: 9 },
    mobileStack: { left: "50%", top: "128px", x: "-50%", y: "0px", layer: 8 },
    mobileFan: { left: "12%", top: "408px", layer: 10 },
  },
  {
    title: "Academic Preparation",
    src: Images.academicExcellence,
    alt: "AGS academic preparation and study",
    shape: "portrait",
    stack: { left: "79%", top: "164px", layer: 10 },
    mobileStack: { left: "50%", top: "148px", x: "-50%", y: "0px", layer: 9 },
    mobileFan: { left: "48%", top: "448px", layer: 11 },
  },
  {
    title: "Campus Environment",
    src: Images.heroImg1,
    alt: "AGS campus environment",
    shape: "landscape",
    stack: { left: "18%", top: "320px", layer: 11 },
    mobileStack: { left: "50%", top: "168px", x: "-50%", y: "0px", layer: 10 },
    mobileFan: { left: "3%", top: "532px", layer: 12 },
  },
  {
    title: "AGS Learning Culture",
    src: Images.learningExcellence,
    alt: "AGS learning culture and student growth",
    shape: "portrait",
    stack: { left: "48%", top: "314px", layer: 12 },
    mobileStack: { left: "50%", top: "188px", x: "-50%", y: "0px", layer: 11 },
    mobileFan: { left: "60%", top: "516px", layer: 13 },
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

        @keyframes academicImageDrift {
          0%, 100% { transform: translate3d(0, 0, 0); }
          38% { transform: translate3d(var(--album-float-x, 4px), var(--album-float-y, -5px), 0); }
          72% { transform: translate3d(calc(var(--album-float-x, 4px) * -0.45), calc(var(--album-float-y, -5px) * 0.55), 0); }
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

        .academic-album-card {
          transform: translate3d(calc(var(--album-x-percent, 0%) + var(--album-x, 0px)), var(--album-y, 0px), 0) scale(var(--album-scale, 1));
          backface-visibility: hidden;
          transform-style: preserve-3d;
          will-change: transform;
        }

        .academic-album-frame {
          transform: translate3d(0, 0, 0) scale(1);
          transform-origin: center center;
          transition:
            transform 1180ms cubic-bezier(0.19, 1, 0.22, 1),
            filter 900ms cubic-bezier(0.19, 1, 0.22, 1);
          will-change: transform;
        }

        .academic-album-float {
          animation: academicImageDrift var(--album-float-duration, 9200ms) ease-in-out infinite;
          animation-delay: var(--album-float-delay, 0ms);
          will-change: transform;
        }

        .academic-album-card:focus-visible {
          z-index: 999 !important;
        }

        .academic-album-card:focus-visible .academic-album-frame {
          filter: saturate(1.06);
          transform: translate3d(0, -26px, 0) scale(1.028);
        }

        @media (hover: hover) and (pointer: fine) {
          .academic-album-card:hover {
            z-index: 999 !important;
          }

          .academic-album-card:hover .academic-album-frame {
            filter: saturate(1.06);
            transform: translate3d(0, -26px, 0) scale(1.028);
          }

          .academic-album-stack:hover .academic-album-card:not(:hover) .academic-album-frame {
            filter: saturate(0.94) brightness(0.99);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .academic-glide-up,
          .academic-underline-reveal {
            animation: none !important;
            opacity: 1;
            transform: none;
          }

          .academic-album-card,
          .academic-album-card:hover,
          .academic-album-card:focus-visible {
            filter: none;
            transform: translate3d(calc(var(--album-x-percent, 0%) + var(--album-x, 0px)), var(--album-y, 0px), 0);
            transition: none;
          }

          .academic-album-float {
            animation: none !important;
            transform: none;
          }

          .academic-album-frame,
          .academic-album-card:hover .academic-album-frame,
          .academic-album-card:focus-visible .academic-album-frame {
            filter: none;
            transform: none;
            transition: none;
          }
        }
      `}
    </style>
  );
}

function ImageSurface({ item }) {
  return (
    <img
      src={item.src}
      alt={item.alt}
      className="block h-full w-full object-cover"
    />
  );
}

function AlbumStack({ viewportMode }) {
  const isMobile = viewportMode === "mobile";
  const isCompact = viewportMode === "compact";
  const visibleAlbumImages = isMobile ? albumImages.slice(0, 7) : albumImages;
  const mobileLayouts = [
    { left: "5%", top: 12, x: "0%" },
    { left: "46%", top: 28, x: "0%" },
    { left: "18%", top: 134, x: "0%" },
    { left: "58%", top: 158, x: "0%" },
    { left: "2%", top: 278, x: "0%" },
    { left: "40%", top: 314, x: "0%" },
    { left: "20%", top: 444, x: "0%" },
  ];

  return (
    <div
      className="academic-album-stack relative mx-auto mt-3 h-[600px] w-full max-w-[1120px] overflow-hidden md:mt-6 md:h-[clamp(420px,50svh,560px)] lg:max-w-[1760px] lg:h-[clamp(600px,62svh,720px)]"
    >
      {visibleAlbumImages.map((item, index) => {
        const isPortrait = item.shape === "portrait";
        const mobileLayout = mobileLayouts[index];

        const mixedWidth = isPortrait ? (isMobile ? 178 : 188) : (isMobile ? 256 : 288);
        const mixedAspect = isPortrait ? 0.72 : 1.48;
        const flowWidth = isMobile
          ? isPortrait
            ? 154
            : 218
          : isCompact
            ? isPortrait
              ? 150
              : 226
            : isPortrait
              ? 164
              : 252;
        const flowAspect = isPortrait ? 0.72 : 1.48;
        const left = isMobile ? numericValue(mobileLayout.left) : isCompact ? index * 17 - 20 : index * 9.4 - 1;
        const top = isMobile
          ? mobileLayout.top
          : isCompact
            ? isPortrait
              ? index % 2 === 0
                ? 28
                : 70
              : index % 2 === 0
                ? 92
                : 118
            : isPortrait
              ? 24
              : 96;
        const width = isMobile ? flowWidth : flowWidth || mixedWidth;
        const aspect = isMobile ? flowAspect : flowAspect || mixedAspect;
        const layer = isMobile
          ? 40 + index
          : 40 + index;

        return (
          <article
            key={item.title}
            tabIndex={0}
            aria-label={item.title}
            className="academic-album-card absolute outline-none"
            style={{
              left: `${left}%`,
              top: `${top}px`,
              width: `${width}px`,
              aspectRatio: aspect,
              zIndex: layer,
              "--album-x-percent": isMobile ? mobileLayout.x : "0%",
              "--album-x": "0px",
              "--album-y": "0px",
              "--album-scale": 1,
              "--album-float-x": `${index % 2 === 0 ? 4 : -4}px`,
              "--album-float-y": `${index % 3 === 0 ? -5 : 3}px`,
              "--album-float-duration": `${8800 + index * 420}ms`,
              "--album-float-delay": `${index * -520}ms`,
            }}
          >
            <div className="academic-album-frame h-full w-full overflow-hidden rounded-md bg-transparent">
              <div className="academic-album-float h-full w-full">
                <ImageSurface item={item} />
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default function AcademicFlip() {
  const headingRef = useRef(null);
  const [viewportMode, setViewportMode] = useState(() => getViewportMode());
  const [isHeadingVisible, setIsHeadingVisible] = useState(() => {
    if (typeof window === "undefined") return false;

    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    const updateViewportMode = () => {
      setViewportMode(getViewportMode());
    };

    window.addEventListener("resize", updateViewportMode);

    return () => {
      window.removeEventListener("resize", updateViewportMode);
    };
  }, []);

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
    <section
      className="relative min-h-[112svh] overflow-hidden bg-[#f7f4ed] px-5 text-[#171727] sm:px-8 md:min-h-[195svh] lg:min-h-[190svh]"
    >
      <AcademicMotionStyles />
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-[8%] top-28 h-24 w-24 rounded-full bg-[#fee6a8]/55 blur-2xl" />
        <div className="absolute right-[12%] top-56 h-32 w-32 rounded-full bg-[#dcd6ff]/70 blur-3xl" />
        <div className="absolute bottom-32 left-[18%] h-28 w-28 rounded-full bg-[#cbeee1]/65 blur-3xl" />
      </div>

      <div className="sticky top-[92px] z-10 mx-auto flex max-w-[1120px] flex-col justify-start py-4 sm:py-5 md:top-[126px] md:min-h-[calc(100svh-126px)] md:py-6 lg:top-[132px] lg:min-h-[calc(100svh-132px)] lg:max-w-[1760px]">
        <div ref={headingRef} className="relative z-20 mx-auto max-w-[760px] text-center">
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

        <AlbumStack
          viewportMode={viewportMode}
        />
      </div>
    </section>
  );
}
