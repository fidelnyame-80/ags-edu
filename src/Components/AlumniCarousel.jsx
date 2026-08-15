import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { alumni } from "../lib/alumniData";

const carouselSlides = [
  "Dr. Solomon Anyomi",
  "Celestine Esinam Vormawor Esq.",
  "Vanessa Selasi Vowotor",
  "Quaye Caleb Tetteh",
  "Joseph Kwablah Tetteh-Tsu",
  "Daisy Majoie Agbenyah",
]
  .map((name) => alumni.find((alumnus) => alumnus.name === name))
  .filter(Boolean);

const slideEase = [0.22, 1, 0.36, 1];
const AUTOPLAY_MS = 5000;

export default function AlumniCarousel({ className = "", compact = false }) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || isPaused) return undefined;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % carouselSlides.length);
    }, AUTOPLAY_MS);

    return () => window.clearInterval(timer);
  }, [isPaused, prefersReducedMotion]);

  const goTo = (nextIndex) => {
    setIndex((nextIndex + carouselSlides.length) % carouselSlides.length);
  };

  const current = carouselSlides[index];

  return (
    <div
      className={`relative overflow-hidden rounded-lg border border-[#e4dfd2] bg-white shadow-[0_24px_70px_rgba(67,56,37,0.08)] ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.figure
          key={current.id}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.55, ease: slideEase }}
          className="m-0"
        >
          <div className={`relative w-full overflow-hidden ${compact ? "h-[230px] sm:h-[245px]" : "h-[300px] sm:h-[320px]"}`}>
            <img
              src={current.image}
              alt={`${current.name}, ${current.profession}`}
              className="h-full w-full object-cover object-top"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#171727]/70 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-6 text-xs font-extrabold uppercase tracking-[0.2em] text-white/85">
              AGS Alumni
            </p>
          </div>
          <figcaption className={compact ? "p-5" : "p-6"}>
            <h3 className={`${compact ? "text-lg" : "text-xl"} font-extrabold text-[#171727]`}>
              {current.name}
            </h3>
            <p className="mt-1 text-sm font-bold text-[#6657c8]">
              {current.profession}
            </p>
            {current.workplace && (
              <p className="mt-1 text-sm text-[#555568]">{current.workplace}</p>
            )}
          </figcaption>
        </motion.figure>
      </AnimatePresence>

      <div className="flex items-center justify-between gap-3 border-t border-[#e4dfd2] px-4 py-3">
        <div className="flex items-center gap-1.5">
          {carouselSlides.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Show ${slide.name}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-[#6657c8]" : "w-2 bg-[#d8d3ea] hover:bg-[#b8b0e2]"
              }`}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Previous alumnus"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e4dfd2] text-[#6657c8] transition hover:bg-[#f4f1fb]"
          >
            <ChevronLeft size={18} strokeWidth={2.4} />
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Next alumnus"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e4dfd2] text-[#6657c8] transition hover:bg-[#f4f1fb]"
          >
            <ChevronRight size={18} strokeWidth={2.4} />
          </button>
        </div>
      </div>
    </div>
  );
}
