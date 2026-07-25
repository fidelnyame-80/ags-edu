import {
  ArrowRight,
  Music,
  Palette,
  Shield,
  Microscope,
  BookOpen,
  Trophy,
} from "lucide-react";
import { Images } from "../assets/Images/Images";

const handleNavClick = (event, href) => {
  event.preventDefault();
  const targetUrl = new URL(href, window.location.origin);
  window.history.pushState({}, "", `${targetUrl.pathname}${targetUrl.hash}`);
  window.dispatchEvent(new Event("ags:navigate"));
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const clubs = [
  {
    icon: Music,
    title: "Music & Choir",
    body: "Students develop vocal and instrumental skills, perform at school events, and build confidence through musical expression.",
  },
  {
    icon: Palette,
    title: "Creative Arts",
    body: "Drawing, painting, drama, and design help learners explore their imagination and communicate ideas visually.",
  },
  {
    icon: Microscope,
    title: "Science & Discovery",
    body: "Hand-on experiments, nature walks, and STEM challenges spark curiosity and critical thinking beyond the classroom.",
  },
  {
    icon: BookOpen,
    title: "Reading & Debate",
    body: "Literacy clubs and debate sessions strengthen language skills, public speaking, and the ability to articulate ideas clearly.",
  },
  {
    icon: Shield,
    title: "Leadership & Service",
    body: "Student council, peer mentoring, and community service projects instil responsibility, empathy, and civic awareness.",
  },
  {
    icon: Trophy,
    title: "Sports & Athletics",
    body: "Team sports, athletics, and physical education promote fitness, teamwork, discipline, and school spirit.",
  },
];

function SectionLabel({ children, light = false }) {
  return (
    <>
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
    </>
  );
}

export default function CoCurricularPage() {
  return (
    <main className="bg-[#fffefa] text-[#171727]">
      <section className="px-5 pb-4 pt-24 sm:px-8 lg:px-20 lg:pt-32">
        <div className="mx-auto max-w-[1180px]">
          <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#6657c8]">
            AGS / Clubs & Activities
          </p>
          <h1
            className="mt-4 text-[2.35rem] font-bold leading-[1.04] text-[#171727] sm:text-[3.15rem] lg:text-[3.6rem]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Clubs & Activities
          </h1>
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-[1180px]">
          <SectionLabel>Co-Curricular</SectionLabel>
          <h2
            className="mt-5 max-w-[680px] text-[2rem] font-bold leading-[1.06] text-[#171727] sm:text-[2.5rem]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Talent grows beyond the classroom.
          </h2>
          <p className="mt-5 max-w-[680px] text-base leading-8 text-[#555568]">
            Clubs, competitions, arts, service, leadership roles, and school
            events help learners discover strengths and practise teamwork.
          </p>

          <div className="mt-8 columns-2 gap-3 sm:columns-3">
            {[
              Images.extracurricular,
              Images.campusTour,
              Images.counsellorImg,
              Images.grade9,
              Images.grade9_2,
              Images.primarySchool,
              Images.primarySchool2,
              Images.primarySchool3,
            ].map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                loading="lazy"
                className="mb-3 w-full"
              />
            ))}
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {clubs.map((club, i) => {
              const Icon = club.icon;
              return (
                <div
                  key={club.title}
                  className="rounded-[30px] border border-[#e8e5f0] bg-white p-6 shadow-[0_18px_50px_rgba(86,72,150,0.07)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f2edff]">
                    <Icon className="text-[#6657c8]" size={22} strokeWidth={2} />
                  </div>
                  <h3 className="mt-5 text-lg font-extrabold text-[#171727]">
                    {club.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#555568]">
                    {club.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f4ed] px-5 py-16 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-[1180px] text-center">
          <SectionLabel>Get Involved</SectionLabel>
          <h2
            className="mx-auto mt-5 max-w-[680px] text-[2rem] font-bold leading-[1.06] text-[#171727] sm:text-[2.5rem]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Every student finds their place at AGS.
          </h2>
          <p className="mx-auto mt-5 max-w-[640px] text-base leading-8 text-[#555568]">
            Whether your child loves music, sports, science, or service, there
            is a club or activity that will help them grow, make friends, and
            discover their potential.
          </p>
          <a
            href="/contacts/"
            onClick={(event) => handleNavClick(event, "/contacts/")}
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 bg-[#6657c8] px-7 text-sm font-extrabold text-white shadow-[0_20px_48px_rgba(102,87,200,0.28)] transition hover:-translate-y-1 hover:bg-[#5546b8]"
          >
            Learn More
            <ArrowRight size={15} strokeWidth={2.4} />
          </a>
        </div>
      </section>
    </main>
  );
}
