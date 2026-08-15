import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { alumni, alumniYears } from "../lib/alumniData";
import MotionText from "./MotionText";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

function AlumniYearTabs({ selectedYear, onYearChange }) {
  return (
    <div className="overflow-x-auto pb-2 scrollbar-hide">
      <div className="flex gap-2">
        {alumniYears.map((year) => (
          <button
            key={year}
            onClick={() => onYearChange(year)}
            className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 ${
              selectedYear === year
                ? "bg-white text-[#171727] shadow-[0_0_0_2px_#6657c8]"
                : "bg-[#f0eef5] text-[#555568] hover:bg-[#e5e2ef]"
            }`}
          >
            {year}
          </button>
        ))}
      </div>
    </div>
  );
}

function AlumniCard({ alumnus }) {
  return (
    <motion.article
      variants={cardVariants}
      className="group rounded-2xl border border-[#e8e5f0] bg-white p-6 shadow-[0_4px_24px_rgba(67,56,37,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(67,56,37,0.1)] sm:p-8 lg:p-10"
    >
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="shrink-0 md:w-[220px] lg:w-[260px]">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={alumnus.image}
              alt={alumnus.name}
              className="h-full w-full object-cover object-top"
              loading="lazy"
            />
          </div>
          <div className="mt-4 md:mt-5">
            <h3 className="text-xl font-bold text-[#171727] sm:text-2xl">
              {alumnus.name}
            </h3>
            <p className="mt-1 text-sm font-semibold text-[#6657c8]">
              {alumnus.profession}
            </p>
            {alumnus.workplace && (
              <p className="mt-0.5 text-sm text-[#555568]">
                {alumnus.workplace}
              </p>
            )}
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-base leading-8 text-[#4f4f62] sm:text-lg">
            {alumnus.story}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

export default function AlumniPage() {
  const [selectedYear, setSelectedYear] = useState(2017);

  const filteredAlumni = alumni.filter((a) => a.year === selectedYear);

  return (
    <main className="bg-[#fffefa] text-[#171727]">
      <section className="px-5 pb-4 pt-24 sm:px-8 lg:px-20 lg:pt-32">
        <div className="mx-auto max-w-[1180px]">
          <MotionText as="p" className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#6657c8]">
            AGS / Alumni
          </MotionText>
          <MotionText
            as="h1"
            delay={0.08}
            className="mt-4 text-[2.35rem] font-bold leading-[1.04] text-[#171727] sm:text-[3.15rem] lg:text-[3.6rem]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Alumni Stories
          </MotionText>
          <MotionText
            as="p"
            delay={0.12}
            className="mt-5 max-w-2xl text-lg leading-8 text-[#555568]"
          >
            The achievements of our alumni reflect the values and education that
            define Accra Grammar School. Each story is a testament to the
            foundation laid here and the bright futures that follow.
          </MotionText>

          <div className="mt-10">
            <AlumniYearTabs
              selectedYear={selectedYear}
              onYearChange={setSelectedYear}
            />
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-[1180px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedYear}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
              className="space-y-6"
            >
              {filteredAlumni.map((alumnus) => (
                <AlumniCard key={alumnus.id} alumnus={alumnus} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}
