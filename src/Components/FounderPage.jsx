import { ArrowRight, BookOpen, Globe, ShieldCheck } from "lucide-react";
import { Images } from "../assets/Images/Images";
import MotionText from "./MotionText";

const foundingValues = [
  {
    icon: BookOpen,
    title: "Knowledge",
    body:
      "A rigorous academic programme that prepares learners for admission to schools and colleges worldwide.",
  },
  {
    icon: ShieldCheck,
    title: "Discipline",
    body:
      "Structured habits and personal responsibility that shape character and stay with learners for life.",
  },
  {
    icon: Globe,
    title: "Access to All",
    body:
      "A welcoming community-school feel with a shared sense of belonging among students, teachers, and parents.",
  },
];

function SectionLabel({ children, light = false }) {
  return (
    <MotionText amount={0.45}>
      <p
        className={`text-xs font-extrabold uppercase tracking-[0.28em] ${
          light ? "text-blue-100" : "text-[#6657c8]"
        }`}
      >
        {children}
      </p>
      <div
        className={`mt-4 h-0.5 w-16 ${
          light ? "bg-blue-400" : "bg-[#6657c8]"
        }`}
      />
    </MotionText>
  );
}

export default function FounderPage() {
  return (
    <main className="bg-[#fffefa] text-[#171727]">
      <section className="relative isolate min-h-[480px] overflow-hidden bg-[#061a34] px-5 py-20 text-white sm:px-8 lg:px-20">
        <img
          src={Images.schoolCompound}
          alt="Accra Grammar School campus grounds"
          className="absolute inset-0 h-full w-full object-cover object-[68%_center]"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(4,12,32,0.92) 0%, rgba(6,20,52,0.8) 48%, rgba(11,34,86,0.5) 72%, rgba(11,34,86,0.22) 100%)",
          }}
        />

        <div className="relative z-10 mx-auto flex min-h-[320px] max-w-[1180px] flex-col justify-center">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-blue-100/80">
            AGS / About / Our Founder
          </p>
          <MotionText
            as="h1"
            delay={0.08}
            className="mt-6 max-w-[760px] text-[2.35rem] font-bold leading-[1.04] sm:text-[3.15rem] lg:text-[3.6rem]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            The woman behind the school.
          </MotionText>
          <MotionText
            as="p"
            delay={0.16}
            className="mt-7 max-w-[620px] text-base leading-8 text-blue-50/88 sm:text-lg"
          >
            Mrs. Elizabeth Ahenkorah believed in the power of education to
            change lives — and set out to build a school that would prove it.
          </MotionText>
        </div>
      </section>

      <section className="bg-[#fffefa] px-5 py-16 sm:px-8 lg:px-20 lg:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-10 border border-[#e7dfcf] bg-[#f8f4ea] p-6 shadow-[0_24px_70px_rgba(67,56,37,0.07)] sm:p-9 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <MotionText amount={0.45} className="mx-auto max-w-[340px]">
            <div className="relative aspect-square overflow-hidden rounded-full border-4 border-white bg-white shadow-[0_24px_70px_rgba(38,28,12,0.16)]">
              <img
                src={Images.founderImage}
                alt="Mrs. Elizabeth Ahenkorah, founder of Accra Grammar School"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </MotionText>

          <div>
            <SectionLabel>Our Story</SectionLabel>
            <MotionText
              as="h2"
              delay={0.08}
              className="mt-7 max-w-[680px] text-[2rem] font-bold leading-[1.08] text-[#171727] sm:text-[2.55rem]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              A vision born in 1996, built around every child.
            </MotionText>
            <div className="mt-7 space-y-5 text-base leading-8 text-[#555568]">
              <MotionText as="p" delay={0.14}>
                In 1996, Mrs. Elizabeth Ahenkorah conceived the idea of AGS, a
                school established to give students a unique American
                international school experience that would prepare them for
                admission to schools and colleges worldwide.
              </MotionText>
              <MotionText as="p" delay={0.2}>
                Years later, our founding values of knowledge, discipline, and
                access to all remain the hallmarks of an AGS education. AGS is
                proud of its community-school feel and the shared sense of
                belonging among students, teachers, and parents.
              </MotionText>
              <MotionText as="p" delay={0.26}>
                In addition to our rigorous academic program, we know our strong
                sense of family is important to prospective parents.
              </MotionText>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f4ed] px-5 py-16 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-[1180px]">
          <SectionLabel>Our Founding Values</SectionLabel>
          <MotionText
            as="h2"
            delay={0.08}
            className="mt-7 max-w-[620px] text-[2.2rem] font-bold leading-[1.06] sm:text-[2.75rem]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            The values our founder planted still guide everything we do.
          </MotionText>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {foundingValues.map((value, index) => {
              const Icon = value.icon;

              return (
                <MotionText
                  as="article"
                  key={value.title}
                  delay={index * 0.08}
                  className="border border-[#e8e5f0] bg-white p-6 shadow-[0_12px_36px_rgba(67,56,37,0.05)]"
                >
                  <span className="flex h-12 w-12 items-center justify-center bg-[#eeeaff] text-[#6657c8]">
                    <Icon size={22} strokeWidth={2.2} />
                  </span>
                  <h3 className="mt-5 text-xl font-extrabold text-[#171727]">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#555568]">
                    {value.body}
                  </p>
                </MotionText>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-20 lg:py-20">
        <div className="mx-auto max-w-[1180px]">
          <div className="relative isolate overflow-hidden bg-[#061a34] px-6 py-12 text-white sm:px-10 lg:px-14 lg:py-16">
            <img
              src={Images.heroImg1}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[#061a34]/80" />
            <div className="relative z-10 flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-[640px]">
                <MotionText
                  as="h2"
                  className="text-[1.9rem] font-bold leading-[1.08] sm:text-[2.4rem]"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  Carry the founder's vision forward for your child.
                </MotionText>
                <MotionText
                  as="p"
                  delay={0.1}
                  className="mt-4 text-base leading-8 text-blue-50/85"
                >
                  AGS is your child's academic passport to the world — a school
                  family where strong academics and character formation work
                  together.
                </MotionText>
              </div>
              <MotionText as="a" href="/admissions/" delay={0.16}>
                <span className="inline-flex items-center gap-2 rounded-full bg-[#7b70cc] px-6 py-3 text-sm font-bold text-white shadow-[0_16px_36px_rgba(123,112,204,0.28)] transition hover:-translate-y-0.5 hover:bg-[#6657c8]">
                  Explore Admissions
                  <ArrowRight size={16} strokeWidth={2.4} />
                </span>
              </MotionText>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
