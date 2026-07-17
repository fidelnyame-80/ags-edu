"use client"

import { motion, useInView } from "framer-motion";
import { useRef, useMemo } from "react";
import { Images } from "../assets/Images/Images";

const stats = [
  { value: "1.5K+", label: "Active students" },
  { value: "20+", label: "Tutors" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

function LearningEnvironmentArtwork({ isVisible }) {
  const popClass = isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75";

  const motion = useMemo(() => {
    const pick = () =>
      ["animate-float-a", "animate-float-b", "animate-float-c"][
        Math.floor(Math.random() * 3)
      ];
    const style = (delay) => ({
      transitionDelay: delay,
      animationDuration: `${(6 + Math.random() * 4).toFixed(2)}s`,
      animationDelay: `${(-4 + Math.random() * 3).toFixed(2)}s`,
    });
    return {
      star: { className: pick(), style: style("120ms") },
      topLine: { className: pick(), style: style("320ms") },
      book: { className: pick(), style: style("440ms") },
      dots: { className: pick(), style: style("600ms") },
      dotOne: { className: pick(), style: style("500ms") },
      dotTwo: { className: pick(), style: style("380ms") },
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-0 text-[#B7A7F0]" aria-hidden="true">
      <style>{`
        @keyframes floatA { 0%,100% { transform: translate(0,0); } 50% { transform: translate(6px,-8px); } }
        @keyframes floatB { 0%,100% { transform: translate(0,0); } 50% { transform: translate(-5px,6px); } }
        @keyframes floatC { 0%,100% { transform: translate(0,0); } 50% { transform: translate(4px,5px); } }
        .animate-float-a { animation: floatA 7s ease-in-out infinite; }
        .animate-float-b { animation: floatB 8s ease-in-out infinite; }
        .animate-float-c { animation: floatC 6s ease-in-out infinite; }
      `}</style>

      <svg
        className={`absolute left-[5%] top-[8%] h-10 w-10 origin-center text-[#93AB78] transition-all duration-700 ease-out lg:left-[8%] lg:top-[10%] lg:h-12 lg:w-12 ${popClass} ${isVisible ? motion.star.className : ""}`}
        style={motion.star.style}
        viewBox="0 0 100 100"
        fill="none"
      >
        <path d="M50 9 59.6 36.5 88.7 37.1 65.5 54.8 73.9 82.7 50 66 26.1 82.7 34.5 54.8 11.3 37.1 40.4 36.5 50 9Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
        <path d="M82 17 88 10M91 29l10-2M69 8l2-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>

      <svg
        className={`absolute left-[2%] top-[45%] h-16 w-28 origin-center text-[#9FC4DE] transition-all duration-700 ease-out lg:left-[3%] lg:top-[42%] lg:h-20 lg:w-36 ${popClass} ${isVisible ? motion.topLine.className : ""}`}
        style={motion.topLine.style}
        viewBox="0 0 180 100"
        fill="none"
      >
        <path d="M0 70c28-24 52-8 72 12s44 20 70-6 26-18 34-4" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      </svg>

      <svg
        className={`absolute right-[10%] top-[15%] h-14 w-14 origin-center text-[#93AB78] transition-all duration-700 ease-out lg:right-[12%] lg:top-[12%] lg:h-16 lg:w-16 ${popClass} ${isVisible ? motion.book.className : ""}`}
        style={motion.book.style}
        viewBox="0 0 100 100"
        fill="none"
      >
        <rect x="14" y="12" width="72" height="76" rx="4" stroke="currentColor" strokeWidth="3" />
        <line x1="50" y1="12" x2="50" y2="88" stroke="currentColor" strokeWidth="3" />
        <line x1="28" y1="30" x2="42" y2="30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <line x1="28" y1="44" x2="42" y2="44" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <line x1="58" y1="30" x2="72" y2="30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <line x1="58" y1="44" x2="72" y2="44" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>

      <div
        className={`absolute bottom-[15%] left-[8%] grid origin-center grid-cols-4 gap-2.5 text-[#B7A7F0] opacity-60 transition-all duration-700 ease-out lg:bottom-[18%] lg:left-[5%] ${isVisible ? `scale-100 opacity-60 ${motion.dots.className}` : "scale-75 opacity-0"}`}
        style={motion.dots.style}
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className="h-1.5 w-1.5 rounded-full bg-current" />
        ))}
      </div>

      <span
        className={`absolute right-[6%] top-[38%] h-3 w-3 origin-center rounded-full bg-[#9FC4DE] transition-all duration-700 ease-out lg:right-[8%] ${popClass} ${isVisible ? motion.dotOne.className : ""}`}
        style={motion.dotOne.style}
      />
      <span
        className={`absolute left-[48%] bottom-[10%] h-2.5 w-2.5 origin-center rotate-45 rounded-sm bg-[#93AB78] transition-all duration-700 ease-out lg:bottom-[8%] ${popClass} ${isVisible ? motion.dotTwo.className : ""}`}
        style={motion.dotTwo.style}
      />

      <svg
        className={`absolute right-[4%] bottom-[25%] h-8 w-8 origin-center rotate-12 text-[#B7A7F0] transition-all duration-700 ease-out lg:right-[6%] lg:bottom-[28%] ${popClass} ${isVisible ? motion.book.className : ""}`}
        style={motion.book.style}
        viewBox="0 0 44 44"
        fill="none"
      >
        <rect x="6" y="6" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="4" />
      </svg>
    </div>
  );
}

export default function LearningEnvironment() {
  const sectionRef = useRef(null);
  const isVisible = useInView(sectionRef, { once: false, amount: 0.15 });

  return (
    <section ref={sectionRef} className="relative min-h-screen max-h-100rem lg:max-h-[] bg-white overflow-hidden">
      <LearningEnvironmentArtwork isVisible={isVisible} />
      <motion.div
        className="relative z-10 max-w-7xl  bg-white px-6 py-8 md:px-14 md:py-10 place-self-center lg:pt-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div variants={fadeUp}>
            <motion.h1
              className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl"
              variants={fadeLeft}
            >
              An Academic passport
              <br />to the world
            </motion.h1>

            <motion.p
              className="mt-6 max-w-md text-gray-500"
              variants={fadeUp}
            >
              AGS provides a nurturing environment for academic excellence and leadership
            </motion.p>

            <motion.div
              className="mt-8 flex items-center gap-4"
              variants={fadeUp}
            >
              <a href="/admissions/" onClick={(event) => { event.preventDefault(); const targetUrl = new URL("/admissions/", window.location.origin); window.history.pushState({}, "", `${targetUrl.pathname}${targetUrl.hash}`); window.dispatchEvent(new Event("ags:navigate")); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="rounded-full bg-[#B7A7F0] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#a794ec]">
                Admissions
              </a>
              <a href="/about/" onClick={(event) => { event.preventDefault(); const targetUrl = new URL("/about/", window.location.origin); window.history.pushState({}, "", `${targetUrl.pathname}${targetUrl.hash}`); window.dispatchEvent(new Event("ags:navigate")); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-50">
                Learn more
              </a>
            </motion.div>

            <motion.div
              className="mt-12 flex items-center gap-6"
              variants={fadeUp}
            >
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p className="text-2xl font-bold text-gray-900">
                      {stat.value}
                    </p>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                  </motion.div>
                  <span className="h-10 w-px bg-gray-200" />
                </div>
              ))}
              <motion.div
                className="flex flex-col items-start gap-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex -space-x-2">
                  <span className="h-5 w-5 rounded-full border-2 border-white bg-gray-900" />
                  <span className="h-5 w-5 rounded-full border-2 border-white bg-gray-400" />
                </div>
                <p className="text-sm text-gray-500">Resources</p>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative mx-auto h-[460px] w-full max-w-[460px]"
            variants={scaleIn}
          >
            <motion.span
              className="absolute -left-6 top-40 text-2xl text-[#93AB78]"
              variants={fadeLeft}
            >
              ✦
            </motion.span>
            <motion.span
              className="absolute right-4 top-2 h-3 w-3 rounded-full bg-[#B7A7F0]"
              variants={fadeRight}
            />
            <motion.span
              className="absolute right-0 top-56 text-xl text-[#93AB78]"
              variants={fadeRight}
            >
              ✦
            </motion.span>
            <motion.span
              className="absolute bottom-16 right-0 h-3 w-3 rounded-full bg-[#9FC4DE]"
              variants={fadeRight}
            />

            <motion.div
              className="absolute left-0 top-0 h-64 w-56 overflow-hidden rounded-3xl bg-[#9FC4DE]"
              initial={{ opacity: 0, x: -40, y: 40 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src={Images.graduands}
                alt="Graduating students"
                className="h-full w-full object-cover"
              />
            </motion.div>

            <motion.div
              className="absolute right-6 top-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#9FC4DE] text-xl text-white"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              ↘
            </motion.div>

            <motion.div
              className="absolute right-0 top-24 h-56 w-52 overflow-hidden rounded-3xl bg-[#B7A7F0] transform lg:translate-y-10 translate-y-30"
              initial={{ opacity: 0, x: 40, y: 40 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src={Images.graduation2}
                alt="Student wearing glasses"
                className="h-full w-full object-cover"
              />
            </motion.div>

            <motion.div
              className="absolute bottom-0 left-4 h-70 w-65 overflow-hidden rounded-3xl bg-[#93AB78] transform lg:translate-y-25 translate-y-15 hidden  lg:block"
              initial={{ opacity: 0, x: -40, y: 40 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src={Images.learningEnvironment}
                alt="Student speaking through a megaphone"
                className="h-full w-full object-cover"
              />
            </motion.div>

            <motion.div
              className="absolute bottom-20 right-0 flex h-14 w-32 items-center justify-center gap-1 rounded-full bg-[#B7A7F0] "
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="h-6 w-6 rounded-full border-2 border-white"
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
