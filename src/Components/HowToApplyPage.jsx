import { useState } from "react";
import { ArrowRight, Calendar, CheckCircle, ChevronDown, MapPin, Phone } from "lucide-react";
import { Images } from "../assets/Images/Images";
import MotionText from "./MotionText";

const handleNavClick = (event, href) => {
  event.preventDefault();
  const targetUrl = new URL(href, window.location.origin);
  window.history.pushState({}, "", `${targetUrl.pathname}${targetUrl.hash}`);
  window.dispatchEvent(new Event("ags:navigate"));
  window.scrollTo({ top: 0, behavior: "smooth" });
};

function SectionLabel({ children }) {
  return (
    <>
      <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#6657c8]">
        {children}
      </p>
      <div className="mt-4 h-0.5 w-16 bg-[#6657c8]" />
    </>
  );
}

function Capsule({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-[30px] border border-[#dcd6f3] bg-white overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 p-6 text-left transition hover:bg-[#f4f1fb]"
      >
        <h3 className="text-lg font-extrabold text-[#171727]">{title}</h3>
        <ChevronDown
          size={20}
          strokeWidth={2.5}
          className={`shrink-0 text-[#6657c8] transition ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && <div className="border-t border-[#dcd6f3] px-6 pb-6 pt-4 text-sm leading-7 text-[#555568]">{children}</div>}
    </div>
  );
}

export default function HowToApplyPage() {
  return (
    <main className="bg-[#fffefa] text-[#171727]">
      <section className="px-5 pb-4 pt-24 sm:px-8 lg:px-20 lg:pt-32">
        <div className="mx-auto max-w-[1180px]">
          <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#6657c8]">
            AGS / Admissions / How to Apply
          </p>
          <h1
            className="mt-4 text-[2.35rem] font-bold leading-[1.04] text-[#171727] sm:text-[3.15rem] lg:text-[3.6rem]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            How to Apply
          </h1>
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f2edff]">
                <MapPin size={22} strokeWidth={2} className="text-[#6657c8]" />
              </div>
              <h2 className="mt-5 text-[2rem] font-bold leading-[1.06] text-[#171727] sm:text-[2.5rem]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
                Schedule a Visit
              </h2>
              <p className="mt-5 text-base leading-8 text-[#555568]">
                To visit us register your interest by calling us at{" "}
                <a href="tel:+2332770034" className="font-bold text-[#6657c8] underline">+233 (0)277-0034</a>{" "}
                and make an appointment. We generally offer one-to-one or small
                group visits, to allow you as much time as possible to see AGS
                and ask as many questions you like!
              </p>
              <p className="mt-4 text-base leading-8 text-[#555568]">
                For families who cannot join us for a tour on campus, we have
                alternative experiences in place. We encourage you to contact us
                and request a phone or virtual appointment with our team to learn
                about the school.
              </p>
              <a
                href="tel:+2332770034"
                className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 bg-[#6657c8] px-6 text-sm font-extrabold text-white shadow-[0_18px_44px_rgba(102,87,200,0.24)] transition hover:-translate-y-1 hover:bg-[#5546b8]"
              >
                <Phone size={16} strokeWidth={2.3} />
                Call to Schedule
              </a>
            </div>
            <img
              src={Images.agsCompoundDroneview1}
              alt="AGS campus aerial view"
              loading="lazy"
              className="w-full rounded-[30px]"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f7f4ed] px-5 py-16 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-[1180px]">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f2edff]">
            <CheckCircle size={22} strokeWidth={2} className="text-[#6657c8]" />
          </div>
          <h2 className="mt-5 text-[2rem] font-bold leading-[1.06] text-[#171727] sm:text-[2.5rem]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
            Make an Application
          </h2>
          <p className="mt-5 max-w-[680px] text-base leading-8 text-[#555568]">
            Our straight-forward &lsquo;checklist&rsquo; style application process is ready
            when you are. The list of documentation needed to support your
            application is outlined at this stage and typically includes the
            following:
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "Copy of passport or birth certificate",
              "Recommendations from current school if available",
              "Copies of previous academic reports",
              "Depending on the Grade level your child is entering into",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-7 text-[#555568]">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#6657c8]" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-[30px] border border-[#dcd6f3] bg-white p-6">
            <p className="text-sm font-extrabold text-[#171727]">Online Application</p>
            <p className="mt-2 text-sm leading-7 text-[#555568]">
              Complete and submit our online application form to begin the
              admissions process.
            </p>
            <a
              href="/admissions/apply/"
              onClick={(event) => handleNavClick(event, "/admissions/apply/")}
              className="mt-4 inline-flex min-h-11 items-center justify-center gap-2 bg-[#5f54bf] px-5 text-sm font-extrabold text-white shadow-[0_16px_30px_rgba(95,84,191,0.2)] transition hover:-translate-y-0.5 hover:bg-[#7164d2]"
            >
              Start Online Application
              <ArrowRight size={15} strokeWidth={2.4} />
            </a>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-[1180px]">
          <h2 className="text-[2rem] font-bold leading-[1.06] text-[#171727] sm:text-[2.5rem]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
            Ready to Enroll
          </h2>
          <div className="mt-6 space-y-4">
            <Capsule title="Application Review Process">
              <p>
                Once an application is complete, we will begin the review
                immediately or when the review period begins. From February-July,
                we read applications for entry in August, and from
                September-December, for entry in January. You can assist the
                timeframe by submitting the required documents and sharing
                information related to your child&apos;s learner profile.
              </p>
              <p className="mt-3">
                You will receive the decision made by the Admissions Committee
                based on your communication preference. Admissions are preceded
                by a placement test and an In-person interview this will
                determine if we are able to offer a place, you will be asked to
                confirm your acceptance within a given time, to allow us to
                manage our wait pool.
              </p>
            </Capsule>
            <Capsule title="After Acceptance">
              <p>
                Upon confirmation, we will ask for further documentation,
                including parent details and medical reports, to start the
                process for a smooth transition into AGS we offer all parents an
                orientation of practices at a grammar school. Then a list of
                textbooks required for the grade level and dress kits will be
                made available to the family. It&apos;s time to get excited!
              </p>
            </Capsule>
            <Capsule title="Rolling Admission Policy">
              <p>
                AGS supports a rolling admission policy for Ages 3-12.
                Pre-School and Primary School divisions. The Junior high school
                unless under very exceptional circumstances will only accept
                students in enrollment session 1 (August/September) session.
              </p>
            </Capsule>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f4ed] px-5 py-16 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-[1180px]">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f2edff]">
            <Calendar size={22} strokeWidth={2} className="text-[#6657c8]" />
          </div>
          <h2 className="mt-5 text-[2rem] font-bold leading-[1.06] text-[#171727] sm:text-[2.5rem]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
            Key Dates
          </h2>
          <div className="mt-6 space-y-4">
            <Capsule title="Peak Admission Periods" defaultOpen>
              <div className="space-y-6">
                <div>
                  <p className="font-extrabold text-[#171727]">Session 1</p>
                  <p className="mt-1 text-sm leading-7 text-[#555568]">
                    Applications Open August/September
                  </p>
                  <p className="text-sm leading-7 text-[#555568]">
                    Application Deadline October 15
                  </p>
                </div>
                <div>
                  <p className="font-extrabold text-[#171727]">Session 2</p>
                  <p className="mt-1 text-sm leading-7 text-[#555568]">
                    Applications Open December/January
                  </p>
                  <p className="text-sm leading-7 text-[#555568]">
                    Application Deadline January 31
                  </p>
                </div>
                <div className="rounded-[20px] border border-[#dcd6f3] bg-[#f4f1fb] p-4">
                  <p className="text-sm font-extrabold text-[#6657c8]">
                    Confirmation of Acceptance Due
                  </p>
                  <p className="mt-1 text-sm leading-7 text-[#555568]">
                    7 DAYS AFTER OFFER
                  </p>
                </div>
              </div>
            </Capsule>
          </div>
        </div>
      </section>
    </main>
  );
}
