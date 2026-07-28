import { ArrowRight, BookOpen, Puzzle, Sparkles, Users } from "lucide-react";
import { Images } from "../assets/Images/Images";
import MotionText from "./MotionText";

const offerings = [
  {
    icon: BookOpen,
    title: "Books & Media",
    body: "Picture books, early readers, chapter books, and multimedia resources for all reading levels.",
    tone: "bg-[#eeeaff] text-[#6657c8]",
  },
  {
    icon: Puzzle,
    title: "Interactive Programs",
    body: "Storytime sessions, craft workshops, reading clubs, and educational games to build literacy, creativity, and social skills.",
    tone: "bg-[#e8f1ff] text-[#2563eb]",
  },
  {
    icon: Users,
    title: "Family-Friendly Events",
    body: "Parent visits, book fairs, and seasonal celebrations to connect with the school community.",
    tone: "bg-[#fff3cc] text-[#d99b1d]",
  },
  {
    icon: Sparkles,
    title: "Support for Learners",
    body: "Staffed by a trained children's librarian who guides young readers, recommends books, and helps parents and teachers support literacy at home.",
    tone: "bg-[#e2f6e8] text-[#43a966]",
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

export default function LibraryPage() {
  return (
    <main className="bg-[#fffefa] text-[#171727]">
      <section className="relative isolate min-h-[560px] overflow-hidden bg-[#061a34] px-5 py-20 text-white lg:px-20">
        <img
          src={Images.libraryImg1}
          alt="Children's Library at AGS"
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(4,12,32,0.92) 0%, rgba(6,20,52,0.82) 48%, rgba(11,34,86,0.52) 72%, rgba(11,34,86,0.22) 100%)",
          }}
        />
        <div className="relative z-10 mx-auto flex min-h-[400px] max-w-[1180px] flex-col justify-center">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-blue-100/80">
            AGS / Library
          </p>
          <MotionText
            as="h1"
            delay={0.08}
            className="mt-6 max-w-[760px] text-[2.35rem] font-bold leading-[1.04] lg:text-[3.6rem]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Children&rsquo;s Library
          </MotionText>
          <MotionText
            as="p"
            delay={0.16}
            className="mt-4 max-w-[640px] text-lg leading-8 text-blue-50/88"
          >
            @AGS
          </MotionText>
          <MotionText
            as="p"
            delay={0.2}
            className="mt-6 max-w-[640px] text-base leading-8 text-blue-50/88"
          >
            A vibrant, welcoming space designed to inspire a love of reading and
            learning in young students.
          </MotionText>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-20 lg:py-20">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <SectionLabel>About the Library</SectionLabel>
              <MotionText
                as="h2"
                delay={0.08}
                className="mt-7 max-w-[560px] text-[2.35rem] font-bold leading-[1.05] lg:text-[3rem]"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                A space where young minds grow.
              </MotionText>
              <MotionText
                as="p"
                delay={0.14}
                className="mt-6 max-w-[620px] text-base leading-8 text-[#555568]"
              >
                Located within the school, our Children&rsquo;s Library offers a
                colorful, interactive environment with comfortable seating,
                engaging displays, and a carefully curated collection of
                age-appropriate books, early readers, chapter books, and
                educational materials.
              </MotionText>
              <MotionText
                as="p"
                delay={0.18}
                className="mt-5 max-w-[620px] text-base leading-8 text-[#555568]"
              >
                The library is dedicated to the memory of{" "}
                <strong className="text-[#171727]">
                  Janet Catherine Rickert
                </strong>
                , a social worker based in Virginia, USA, who dedicated her life
                to the welfare and adoption services for children all over the
                world.
              </MotionText>
            </div>
            <MotionText
              as="div"
              delay={0.2}
              className="relative overflow-hidden lg:ml-10"
            >
              <img
                src={Images.libraryImg2}
                alt="Inside the Children's Library"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </MotionText>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f6fe] px-5 py-16 lg:px-20 lg:py-20">
        <div className="mx-auto max-w-[1180px]">
          <div className="mx-auto max-w-[720px] text-center">
            <SectionLabel>What We Offer</SectionLabel>
            <MotionText
              as="h2"
              delay={0.08}
              className="mt-7 text-[2.35rem] font-bold leading-[1.05] lg:text-[3rem]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Everything a young reader needs.
            </MotionText>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {offerings.map((item) => {
              const Icon = item.icon;
              return (
                <MotionText
                  as="article"
                  key={item.title}
                  amount={0.2}
                  className="border border-[#e8e5f0] bg-white p-6 shadow-[0_4px_24px_rgba(67,56,37,0.05)]"
                >
                  <span
                    className={`inline-flex h-12 w-12 items-center justify-center ${item.tone}`}
                  >
                    <Icon size={22} strokeWidth={2.2} />
                  </span>
                  <h3 className="mt-5 text-lg font-extrabold text-[#171727]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#555568]">
                    {item.body}
                  </p>
                </MotionText>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden px-5 py-20 text-white lg:px-20">
        <img
          src={Images.libraryImg1}
          alt="Children's Library"
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#061a34]/84" />
        <div className="relative z-10 mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-center">
          <div>
            <SectionLabel light>Visit the Library</SectionLabel>
            <MotionText
              as="h2"
              delay={0.08}
              className="mt-7 max-w-[720px] text-[2.45rem] font-bold leading-[1.06] lg:text-[3.3rem]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Explore our collection today.
            </MotionText>
            <MotionText
              as="p"
              delay={0.14}
              className="mt-6 max-w-[680px] text-base leading-8 text-blue-50/86"
            >
              Visit the library during school hours or browse our catalog online
              to discover the many resources available to your child.
            </MotionText>
          </div>
          <a
            href="https://www.agsedu.org/library"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 bg-blue-600 px-6 text-sm font-extrabold text-white shadow-[0_20px_48px_rgba(37,99,235,0.26)] transition hover:-translate-y-1 hover:bg-blue-500"
          >
            Browse the Catalog
            <ArrowRight size={17} strokeWidth={2.4} />
          </a>
        </div>
      </section>
    </main>
  );
}
