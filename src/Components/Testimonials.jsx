import { useEffect, useRef, useState } from "react";
import { Images } from "../assets/Images/Images";
import MotionText from "./MotionText";

const TESTIMONIALS = [
  {
    title: "Principal's Welcome",
    quote: "Welcome to Accra Grammar School, where academic excellence, character development, and meaningful learning experiences come together. Our mission is to nurture confident learners, inspire innovative thinking, and prepare students to become responsible leaders in society. We look forward to partnering with families as we continue to build a community where every student can thrive.",
    author: "Principal",
    detail: "Accra Grammar School",
    image: Images.principal,
  },
  {
    title: "Alumni Voice",
    quote:
      "AGS is simply the school you wished to have attended. A home away from home, is my simplest description of it. To many of us alumni, it's one of the best foundation blocks we were privileged to have had and for which we are forever grateful.",
    author: "Alumni Voice",
    detail: "Accra Grammar School",
    image: null,
  },
  {
    title: "Parent Testimonial",
    quote:
      "AGS is an exceptional school with dedicated teachers, supportive staff, and engaging curriculum which creates an environment where students thrive academically and personally.",
    author: "Dr. Joseph Kwablah Tetteh-Tsu",
    detail: "37 Military Hospital",
    image: null,
  },
  {
    title: "Student Testimonial",
    quote:
      "AGS was an integral foundation in my education, and I do believe I would not be where I am today without the experience I had at AGS.",
    author: "Ms Vanessa Selasi Vowotor",
    detail: "Line Technician, United Airlines",
    image: null,
  },
];

const TESTIMONIAL_TRANSITION =
  "opacity 700ms cubic-bezier(0.22, 1, 0.36, 1), transform 700ms cubic-bezier(0.22, 1, 0.36, 1)";

export default function Testimonials() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const activeTestimonial = TESTIMONIALS[activeIndex];

  useEffect(() => {
    const sectionNode = sectionRef.current;
    if (!sectionNode) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSectionVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(sectionNode);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="community"
      ref={sectionRef}
      className="relative isolate min-h-[520px] overflow-hidden px-5 py-14 text-white sm:px-8 lg:min-h-[560px] lg:px-20"
    >
      <img
        src={Images.graduation3}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(4,12,32,0.9) 0%, rgba(5,15,45,0.76) 48%, rgba(10,30,80,0.54) 70%, rgba(10,30,80,0.22) 100%)",
        }}
      />
      <div className="absolute inset-0 bg-black/28" aria-hidden="true" />

      <div
        className={`relative z-10 mx-auto flex min-h-[400px] max-w-[1060px] flex-col justify-center transition-all duration-700 ease-out ${
          isSectionVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <MotionText as="h2" className="text-xs font-bold uppercase tracking-[0.28em] text-blue-200">
          {activeTestimonial.title}
        </MotionText>
        <div className="mt-4 h-1 w-14 rounded-full bg-blue-500" />

        <div className="mt-9 flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
          <div
            key={activeTestimonial.quote}
            className="min-w-0 flex-1 animate-[fadeUp_0.65s_ease_both]"
            style={{ transition: TESTIMONIAL_TRANSITION }}
          >
            <div className="flex items-start gap-4 sm:gap-6">
              <span
                className="mt-[-0.12em] shrink-0 text-[3.4rem] font-bold leading-none text-blue-400 sm:text-[4.4rem]"
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  textShadow: "0 10px 28px rgba(0,0,0,0.28)",
                }}
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <div className="min-w-0">
                <MotionText
                  as="blockquote"
                  delay={0.08}
                  className="font-semibold leading-[1.38] text-white sm:leading-[1.42]"
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: "clamp(1.28rem, 1.85vw, 2.15rem)",
                    letterSpacing: "0",
                    textShadow: "0 2px 24px rgba(0,0,0,0.3)",
                  }}
                >
                  {activeTestimonial.quote}
                </MotionText>

                <div className="mt-6 border-l border-white/28 pl-5">
                  <p className="text-sm font-semibold text-white sm:text-base">
                    {activeTestimonial.author}
                  </p>
                  <p className="mt-2 text-xs font-medium uppercase tracking-[0.12em] text-blue-100/72 sm:text-sm">
                    {activeTestimonial.detail}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {activeTestimonial.image && (
            <figure className="mx-auto w-full max-w-[260px] shrink-0 overflow-hidden rounded-[8px] border border-white/18 bg-white/8 shadow-[0_24px_60px_rgba(0,0,0,0.32)] sm:max-w-[300px] lg:mx-0 lg:max-w-[330px]">
              <img
                src={activeTestimonial.image}
                alt={`${activeTestimonial.author}, ${activeTestimonial.detail}`}
                className="aspect-[4/5] h-full w-full object-cover object-center"
                loading="lazy"
              />
            </figure>
          )}
        </div>

        <div className="mt-9 flex items-center justify-center">
          <div className="flex items-center gap-3" aria-label="Testimonial pagination">
            {TESTIMONIALS.map((testimonial, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  type="button"
                  key={testimonial.author}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show testimonial ${index + 1}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`h-3 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-[#061a34] ${
                    isActive
                      ? "w-10 bg-blue-500"
                      : "w-3 bg-white/45 hover:bg-white/72"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
