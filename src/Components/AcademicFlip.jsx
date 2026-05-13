import { useEffect, useRef, useState } from "react";
import academicPathwayIcon from "../assets/academic-pathway-icon.svg";
import { ImageCollections, Images } from "../assets/Images/Images";

const getViewportMode = () => {
  if (typeof window === "undefined") return "desktop";

  const viewportWidth = Math.min(
    window.innerWidth,
    document.documentElement.clientWidth || window.innerWidth
  );

  if (viewportWidth < 768) return "mobile";
  if (viewportWidth < 1180) return "compact";

  return "desktop";
};

const albumImages = [
  {
    title: "Graduation Moment",
    src: ImageCollections.graduation[0],
    alt: "AGS student receiving recognition during graduation",
    shape: "landscape",
  },
  {
    title: "Focused Learning",
    src: Images.academicExcellence,
    alt: "AGS student in a focused classroom learning session",
    shape: "portrait",
  },
  {
    title: "Campus Life",
    src: ImageCollections.campus[0],
    alt: "AGS campus grounds",
    shape: "landscape",
  },
  {
    title: "Family Day Portrait",
    src: Images.familyday6,
    alt: "AGS family day community moment",
    shape: "portrait",
  },
  {
    title: "School Community",
    src: ImageCollections.community[0],
    alt: "AGS family day gathering",
    shape: "landscape",
  },
  {
    title: "Outdoor Play",
    src: ImageCollections.playground[0],
    alt: "AGS students enjoying the playground",
    shape: "landscape",
  },
  {
    title: "Sports Life",
    src: ImageCollections.sports[0],
    alt: "AGS students during sports activities",
    shape: "landscape",
  },
  {
    title: "Playground",
    src: ImageCollections.playground[1],
    alt: "AGS playground and outdoor learning space",
    shape: "landscape",
  },
  {
    title: "Campus Environment",
    src: ImageCollections.campus[1],
    alt: "AGS campus environment",
    shape: "landscape",
  },
  {
    title: "Alumni Celebration",
    src: ImageCollections.graduation[1],
    alt: "AGS graduation ceremony celebration",
    shape: "landscape",
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

        .academic-gallery-float {
          animation: academicImageDrift var(--album-float-duration, 9200ms) ease-in-out infinite;
          animation-delay: var(--album-float-delay, 0ms);
          will-change: transform;
        }

        @media (prefers-reduced-motion: reduce) {
          .academic-glide-up,
          .academic-underline-reveal {
            animation: none !important;
            opacity: 1;
            transform: none;
          }

          .academic-gallery-float {
            animation: none !important;
            transform: none;
          }
        }
      `}
    </style>
  );
}

function AlbumStack({ viewportMode }) {
  const visibleAlbumImages =
    viewportMode === "mobile" ? albumImages.slice(0, 7) : albumImages;
  const desktopLayouts = [
    { left: "2%", top: 132, width: 292, z: 4 },
    { left: "10%", top: 34, width: 198, z: 8 },
    { left: "21%", top: 224, width: 340, z: 7 },
    { left: "33%", top: 70, width: 194, z: 9 },
    { left: "43%", top: 20, width: 314, z: 5 },
    { left: "53%", top: 198, width: 194, z: 10 },
    { left: "60%", top: 322, width: 331, z: 6 },
    { left: "70%", top: 52, width: 194, z: 11 },
    { left: "75%", top: 248, width: 318, z: 7 },
    { left: "84%", top: 36, width: 198, z: 12 },
  ];
  const compactLayouts = [
    { left: "2%", top: 134, width: 215, z: 4 },
    { left: "9%", top: 34, width: 146, z: 8 },
    { left: "18%", top: 224, width: 245, z: 7 },
    { left: "29%", top: 68, width: 143, z: 9 },
    { left: "39%", top: 20, width: 241, z: 5 },
    { left: "50%", top: 198, width: 143, z: 10 },
    { left: "57%", top: 332, width: 245, z: 6 },
    { left: "67%", top: 54, width: 143, z: 11 },
    { left: "74%", top: 258, width: 228, z: 7 },
    { left: "83%", top: 40, width: 142, z: 12 },
  ];
  const mobileLayouts = [
    { left: "2%", top: 112, width: 176, z: 5 },
    { left: "40%", top: 26, width: 129, z: 8 },
    { left: "15%", top: 306, width: 211, z: 7 },
    { left: "58%", top: 142, width: 129, z: 9 },
    { left: "3%", top: 474, width: 202, z: 6 },
    { left: "45%", top: 404, width: 129, z: 10 },
    { left: "22%", top: 620, width: 206, z: 7 },
  ];
  const layouts =
    viewportMode === "mobile"
      ? mobileLayouts
      : viewportMode === "compact"
        ? compactLayouts
        : desktopLayouts;

  return (
    <div className="relative mx-auto mt-10 h-[800px] w-full max-w-[1540px] overflow-hidden sm:mt-12 sm:h-[630px] lg:mt-14 lg:h-[640px]">
      {visibleAlbumImages.map((item, index) => {
        const isPortrait = item.shape === "portrait";
        const layout = layouts[index];

        return (
          <article
            key={item.title}
            className={`academic-gallery-float absolute min-w-0 overflow-hidden bg-transparent ${
              isPortrait ? "aspect-[0.72]" : "aspect-[1.48]"
            }`}
            style={{
              left: layout.left,
              top: `${layout.top}px`,
              width: `${layout.width}px`,
              zIndex: layout.z,
              "--album-float-x": `${index % 2 === 0 ? 4 : -4}px`,
              "--album-float-y": `${index % 3 === 0 ? -5 : 3}px`,
              "--album-float-duration": `${8800 + index * 420}ms`,
              "--album-float-delay": `${index * -520}ms`,
            }}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="block h-full w-full object-cover"
            />
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

        <AlbumStack viewportMode={viewportMode} />
      </div>
    </section>
  );
}
