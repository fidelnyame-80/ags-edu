import { motion } from "framer-motion";
import { Images } from "../assets/Images/Images";

const categories = [
  {
    label: "Campus Overview",
    images: [
      Images.heroImg1,
      Images.schoolCompound,
      Images.schoolCompound2,
      Images.compoundImg,
      Images.agsCompoundDroneview1,
      Images.agsCompoundDroneview2,
      Images.agsCompoundDroneview3,
    ],
  },
  {
    label: "Science & Learning",
    images: [
      Images.agsSciencelab1,
      Images.agsSciencelab2,
      Images.academicExcellence,
    ],
  },
  {
    label: "Sports & Recreation",
    images: [
      Images.sports2,
      Images.astroturf1,
      Images.astroturf2,
      Images.astroturf3,
      Images.astroturf4,
      Images.astroturf5,
      Images.astroturf6,
      Images.astroturf7,
      Images.astroturf8,
    ],
  },
  {
    label: "Transport & Facilities",
    images: [
      Images.agsBus,
      Images.transport1,
      Images.transport2,
    ],
  },
  {
    label: "Library",
    images: [
      Images.libraryImg1,
      Images.libraryImg2,
    ],
  },
  {
    label: "Snack Shop",
    images: [
      Images.snackArea,
      Images.snackArea2,
    ],
  },
  {
    label: "Playground",
    text: "Safe, open play spaces where young learners build confidence, friendships, and healthy habits.",
    images: [
      Images.playground,
      Images.playground2,
      Images.playground3,
    ],
  },
  {
    label: "Cafeteria",
    images: [
      Images.cafeteria1,
      Images.cafeteria2,
    ],
  },
  {
    label: "Excursion",
    text: "Learning beyond the classroom — AGS students explore new places, cultures, and experiences through organised school excursions.",
    images: [
      Images.excursion1,
      Images.excursion2,
      Images.excursion3,
      Images.excursion4,
      Images.excursion5,
      Images.excursion6,
      Images.excursion7,
      Images.excursion8,
      Images.excursion9,
      Images.excursion10,
      Images.excursion11,
      Images.excursion12,
    ],
  },
];

export default function CampusTourPage() {
  return (
    <main className="bg-[#fffefa] text-[#171727]">
      <section className="px-5 pb-4 pt-24 sm:px-8 lg:px-20 lg:pt-32">
        <div className="mx-auto max-w-[1180px]">
          <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#6657c8]">
            AGS / Campus Tour
          </p>
          <h1
            className="mt-4 text-[2.35rem] font-bold leading-[1.04] text-[#171727] sm:text-[3.15rem] lg:text-[3.6rem]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Explore Our Campus
          </h1>
          <p className="mt-4 max-w-[640px] text-base leading-8 text-[#555568]">
            Take a visual tour through our classrooms, science laboratories, sports
            facilities, and the peaceful surroundings that make AGS a place where
            students thrive.
          </p>
        </div>
      </section>

      {categories.map((category) => (
        <section key={category.label} className="px-5 pb-16 sm:px-8 lg:px-20">
          <div className="mx-auto max-w-[1180px]">
            <h2
              className="text-[1.6rem] font-bold leading-tight text-[#171727] sm:text-[2rem]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              {category.label}
            </h2>
            {category.text && (
              <p className="mt-6 max-w-[620px] text-base leading-8 text-[#555568]">
                {category.text}
              </p>
            )}
            <div className="mt-6 columns-1 gap-5 sm:columns-2 lg:columns-3">
              {category.images.map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: (i % 6) * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="mb-5 break-inside-avoid overflow-hidden rounded-[20px] border border-[#e8e5f0] bg-white shadow-[0_4px_20px_rgba(86,72,150,0.06)] transition hover:shadow-[0_12px_40px_rgba(86,72,150,0.12)]"
                >
                  <img
                    src={src}
                    alt=""
                    loading="lazy"
                    className="w-full object-cover transition duration-500 hover:scale-[1.03]"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
