import {
  ArrowRight,
  Award,
  BookOpen,
  Compass,
  GraduationCap,
  MapPin,
  ShieldCheck,
  Trophy,
  Users,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Images } from "../assets/Images/Images";
import { IntroBackgroundArtwork, IntroMotionStyles } from "./Intro";
import MotionText from "./MotionText";

const schoolStats = [
  { value: "1996", label: "Founded with a global outlook" },
  { value: "3", label: "School divisions on one campus" },
  { value: "Oyibi", label: "Quiet grounds near Accra" },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    body:
      "Students are guided to do the right thing with consistency, honesty, and respect for others.",
  },
  {
    icon: BookOpen,
    title: "Leadership",
    body:
      "We create room for initiative, service, teamwork, and the confidence to take responsibility.",
  },
  {
    icon: GraduationCap,
    title: "Excellence",
    body:
      "Learning is approached with discipline and care, so each child can grow in knowledge and character.",
  },
];

const awards = [
  {
    year: "2024",
    title: "Regional quiz excellence",
    image: Images.regionalQualifiers,
    body:
      "AGS learners continued to show confidence in inter-school academic contests across the Greater Accra Region.",
  },
  {
    year: "2023",
    title: "Best Student B.E.C.E. Private School Boy",
    image: Images.bestStudent,
    body:
      "A proud academic recognition celebrating disciplined preparation, teacher support, and student focus.",
  },
  {
    year: "2022",
    title: "Smart Governance Quiz Winner",
    image: Images.smartGovernance,
    body:
      "AGS earned top honours in a municipal competition that tested civic knowledge and sharp thinking.",
  },
];

const discoveryLinks = [
  {
    title: "Extra Curricular",
    image: Images.sports,
    body: "Clubs, creative work, service, and competitions that help students explore their strengths.",
    href: "/#community",
  },
  {
    title: "School Prospectus",
    image: Images.schoolProspectus,
    body: "A clear guide to admissions, academics, routines, expectations, and student support.",
    href: "/admissions/",
  },
  {
    title: "School Broadsheet",
    image: Images.schoolBroadsheet,
    body: "News, notices, and school highlights for parents, students, alumni, and friends of AGS.",
    href: "/news/",
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

export default function AboutPage() {
  const welcomeRef = useRef(null);
  const [isWelcomeArtworkVisible, setIsWelcomeArtworkVisible] = useState(false);

  useEffect(() => {
    const welcomeNode = welcomeRef.current;
    if (!welcomeNode) return undefined;

    const isMobileViewport = window.matchMedia("(max-width: 767px)").matches;
    const triggerRatio = isMobileViewport ? 0.16 : 0.25;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= triggerRatio) {
          setIsWelcomeArtworkVisible(true);
          observer.disconnect();
        }
      },
      { threshold: isMobileViewport ? [0, 0.16] : [0, 0.25] }
    );

    observer.observe(welcomeNode);

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-[#fffefa] text-[#171727]">
      <section className="relative isolate min-h-[560px] overflow-hidden bg-[#061a34] px-5 py-20 text-white sm:px-8 lg:px-20">
        <img
          src={Images.schoolCompound}
          alt="Accra Grammar School campus grounds"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(4,12,32,0.9) 0%, rgba(6,20,52,0.78) 48%, rgba(11,34,86,0.48) 72%, rgba(11,34,86,0.2) 100%)",
          }}
        />

        <div className="relative z-10 mx-auto flex min-h-[400px] max-w-[1180px] flex-col justify-center">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-blue-100/80">
            AGS / About
          </p>
          <MotionText
            as="h1"
            delay={0.08}
            className="mt-6 max-w-[760px] text-[2.35rem] font-bold leading-[1.04] sm:text-[3.15rem] lg:text-[3.6rem]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            About Accra Grammar School
          </MotionText>
          <MotionText
            as="p"
            delay={0.16}
            className="mt-7 max-w-[620px] text-base leading-8 text-blue-50/88 sm:text-lg"
          >
            A close-knit school community where strong academics, character
            formation, and global awareness work together to prepare learners
            for purposeful lives.
          </MotionText>

          <div className="mt-10 grid max-w-[820px] gap-3 sm:grid-cols-3">
            {schoolStats.map((stat) => (
              <div
                key={stat.value}
                className="border border-white/14 bg-white/8 p-5 backdrop-blur-md"
              >
                <p className="text-2xl font-extrabold text-white">{stat.value}</p>
                <p className="mt-2 text-sm leading-6 text-blue-50/78">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="welcome"
        ref={welcomeRef}
        className="relative isolate overflow-hidden bg-[#fffefa] px-5 py-16 text-[#171727] sm:px-8 lg:px-20 lg:py-20"
      >
        <IntroMotionStyles />
        <IntroBackgroundArtwork isVisible={isWelcomeArtworkVisible} />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[#fffaf1]/38" aria-hidden="true" />

        <div className="relative z-10 mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <MotionText amount={0.45}>
              <p className="text-[1.2rem] font-bold uppercase tracking-[0.34em] text-[#7b70cc]">
                Welcome
              </p>
              <div className="mt-3 h-0.5 w-14 bg-[#7b70cc]" />
            </MotionText>
            <MotionText
              as="h2"
              delay={0.08}
              className="mt-7 max-w-[560px] text-[1.9rem] font-bold leading-[1.08] sm:text-[2.25rem] lg:text-[2rem]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              A school built around discipline, belonging, and ambition.
            </MotionText>
            <div className="mt-7 space-y-5 text-base leading-8 text-[#555568]">
              <MotionText as="p" delay={0.12}>
                Accra Grammar School was founded to give learners a broad,
                confident education rooted in Ghanaian values and open to the
                wider world. The school brings children through clear stages of
                growth, from early foundations to Junior High School readiness.
              </MotionText>
              <MotionText as="p" delay={0.18}>
                On our campus, students are known by their teachers, challenged
                by meaningful work, and encouraged to become thoughtful people
                who can lead, collaborate, and serve. We care about results, but
                we care just as deeply about the habits that make those results
                last.
              </MotionText>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <img
              src={Images.compoundImg}
              alt="Accra Grammar School campus buildings"
              className="h-[360px] w-full object-cover sm:translate-y-8"
            />
            <div className="grid gap-4">
              <img
                src={Images.familyDay}
                alt="AGS family day community gathering"
                className="h-[172px] w-full object-cover"
              />
              <div className="bg-[#f4f1fb] p-6">
                <Compass className="text-[#6657c8]" size={30} strokeWidth={2.2} />
                <p className="mt-5 text-sm font-extrabold uppercase tracking-[0.18em] text-[#6657c8]">
                  Our Approach
                </p>
                <p className="mt-3 text-sm leading-7 text-[#555568]">
                  Structured learning, caring guidance, and practical
                  opportunities help students discover what they can become.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="mission" className="bg-[#f7f4ed] px-5 py-16 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid gap-5 lg:grid-cols-2">
            <article className="border border-[#e4dfd2] bg-white p-7 shadow-[0_24px_70px_rgba(67,56,37,0.07)] sm:p-9">
              <SectionLabel>Our Mission</SectionLabel>
              <MotionText as="p" className="mt-7 text-lg leading-9 text-[#4f4f62]">
                To nurture inquiring, knowledgeable, and compassionate young
                people who embrace Africa's rich heritage while engaging the
                world with respect, confidence, and a lifelong love of learning.
              </MotionText>
            </article>

            <article id="vision" className="border border-[#dcd6f3] bg-[#f4f1fb] p-7 shadow-[0_24px_70px_rgba(86,72,150,0.08)] sm:p-9">
              <SectionLabel>Our Vision</SectionLabel>
              <MotionText as="p" className="mt-7 text-lg leading-9 text-[#4f4f62]">
                To inspire principled learners who think clearly, act with
                integrity, and grow into innovative leaders able to contribute
                meaningfully to Ghana, Africa, and the wider world.
              </MotionText>
            </article>
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className="border border-[#e8e5f0] bg-white p-6"
                >
                  <span className="flex h-12 w-12 items-center justify-center bg-[#e8f1ff] text-[#2563eb]">
                    <Icon size={22} strokeWidth={2.2} />
                  </span>
                  <h3 className="mt-5 text-xl font-extrabold text-[#171727]">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#555568]">
                    {value.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="awards" className="px-5 py-16 sm:px-8 lg:px-20 lg:py-20">
        <div className="mx-auto max-w-[1180px]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <SectionLabel>Recent Awards</SectionLabel>
              <MotionText
                as="h2"
                delay={0.08}
                className="mt-7 max-w-[620px] text-[2.35rem] font-bold leading-[1.05] sm:text-[3rem]"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                Recognition earned through steady preparation.
              </MotionText>
            </div>
            <MotionText as="p" delay={0.14} className="max-w-[420px] text-sm leading-7 text-[#555568]">
              From examinations to academic competitions, AGS celebrates
              achievements that reflect effort from students, teachers, and
              families.
            </MotionText>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {awards.map((award, index) => (
              <article
                key={award.title}
                className="overflow-hidden border border-[#ded8ef] bg-white shadow-[0_20px_52px_rgba(86,72,150,0.08)] transition hover:-translate-y-1 hover:border-[#bfb6ec]"
              >
                <img
                  src={award.image}
                  alt={award.title}
                  className="h-44 w-full object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center bg-[#eeeaff] text-[#6657c8]">
                      {index === 0 ? (
                        <Trophy size={23} strokeWidth={2.2} />
                      ) : (
                        <Award size={23} strokeWidth={2.2} />
                      )}
                    </span>
                    <span className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#6657c8]">
                      {award.year}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-extrabold leading-snug text-[#171727]">
                    {award.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#555568]">
                    {award.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
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
              />
            </div>
          </MotionText>

          <div>
            <SectionLabel>Our Founder</SectionLabel>
            <MotionText
              as="h2"
              delay={0.08}
              className="mt-7 max-w-[680px] text-[2rem] font-bold leading-[1.08] text-[#171727] sm:text-[2.55rem]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Mrs. Elizabeth Ahenkorah believed in the power of education to
              change lives.
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

      <section id="discover" className="relative isolate overflow-hidden px-5 py-20 text-white sm:px-8 lg:px-20 lg:py-24">
        <img
          src={Images.heroImg1}
          alt="AGS school grounds"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#061a34]/78" />
        <div className="relative z-10 mx-auto max-w-[1180px] text-center">
          <div className="mx-auto max-w-max">
            <SectionLabel light>Discover Our School</SectionLabel>
          </div>
          <MotionText
            as="h2"
            delay={0.08}
            className="mx-auto mt-7 max-w-[760px] text-[2.5rem] font-bold leading-[1.05] sm:text-[3.3rem]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Explore the everyday life of AGS.
          </MotionText>
          <MotionText
            as="p"
            delay={0.14}
            className="mx-auto mt-6 max-w-[760px] text-base leading-8 text-blue-50/86"
          >
            Our school is an independent day school set in beautiful grounds at
            Oyibi, northeast of Accra, with learning spaces designed for focus,
            friendship, and discovery.
          </MotionText>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {discoveryLinks.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="group overflow-hidden bg-white text-left text-[#171727] shadow-[0_26px_70px_rgba(1,8,20,0.22)] transition hover:-translate-y-1"
              >
                <img
                  src={item.image}
                  alt=""
                  className="h-40 w-full object-cover"
                  aria-hidden="true"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-xl font-extrabold">{item.title}</h3>
                    <ArrowRight
                      className="text-[#6657c8] transition group-hover:translate-x-1"
                      size={19}
                      strokeWidth={2.4}
                    />
                  </div>
                  <p className="mt-4 text-sm leading-7 text-[#555568]">
                    {item.body}
                  </p>
                  <div className="mt-6 h-1 w-full bg-[#49bd7a]" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f4ed] px-5 py-14 sm:px-8 lg:px-20">
        <div className="mx-auto grid max-w-[1180px] gap-5 md:grid-cols-3">
          <div className="flex items-center gap-4 bg-white p-5">
            <span className="flex h-12 w-12 items-center justify-center bg-[#e8f1ff] text-[#2563eb]">
              <MapPin size={21} />
            </span>
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#6657c8]">
                Location
              </p>
              <p className="mt-1 text-sm font-bold text-[#171727]">
                Oyibi, Accra, Ghana
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-white p-5">
            <span className="flex h-12 w-12 items-center justify-center bg-[#e2f6e8] text-[#43a966]">
              <Users size={21} />
            </span>
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#6657c8]">
                Community
              </p>
              <p className="mt-1 text-sm font-bold text-[#171727]">
                Students, parents, teachers, alumni
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-white p-5">
            <span className="flex h-12 w-12 items-center justify-center bg-[#fff3cc] text-[#d99b1d]">
              <GraduationCap size={21} />
            </span>
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#6657c8]">
                Motto
              </p>
              <p className="mt-1 text-sm font-bold text-[#171727]">
                Integrity. Leadership. Excellence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
