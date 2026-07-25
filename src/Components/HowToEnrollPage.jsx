import { useState } from "react";
import { ChevronDown, FileDown, Shirt } from "lucide-react";
import { Images } from "../assets/Images/Images";

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

export default function HowToEnrollPage() {
  return (
    <main className="bg-[#fffefa] text-[#171727]">
      <section className="px-5 pb-4 pt-24 sm:px-8 lg:px-20 lg:pt-32">
        <div className="mx-auto max-w-[1180px]">
          <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#6657c8]">
            AGS / Admissions / How to Enroll
          </p>
          <h1
            className="mt-4 text-[2.35rem] font-bold leading-[1.04] text-[#171727] sm:text-[3.15rem] lg:text-[3.6rem]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            How to Enroll
          </h1>
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-[1180px]">
          <p className="text-base leading-8 text-[#555568]">
            Once an application is complete, we will begin the review immediately
            or when the review period begins. From February-July, we read
            applications for entry in August, and from September-December, for
            entry in January. You can assist the timeframe by submitting the
            required documents and sharing information related to your
            child&apos;s learner profile.
          </p>
          <p className="mt-4 text-base leading-8 text-[#555568]">
            You will receive the decision made by the Admissions Committee based
            on your communication preference. Admissions are preceded by a
            placement test and an In-person interview this will determine if we
            are able to offer a place, you will be asked to confirm your
            acceptance within a given time, to allow us to manage our wait pool.
          </p>
          <p className="mt-4 text-base leading-8 text-[#555568]">
            Upon confirmation, we will ask for further documentation, including
            parent details and medical reports, to start the process for a smooth
            transition into AGS we offer all parents an orientation of practices
            at a grammar school. Then a list of textbooks required for the grade
            level and dress kits will be made available to the family. It&apos;s
            time to get excited!
          </p>
        </div>
      </section>

      <section className="bg-[#f7f4ed] px-5 py-16 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-[1180px]">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f2edff]">
            <Shirt size={22} strokeWidth={2} className="text-[#6657c8]" />
          </div>
          <h2 className="mt-5 text-[2rem] font-bold leading-[1.06] text-[#171727] sm:text-[2.5rem]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
            Dress Code
          </h2>
          <p className="mt-5 max-w-[800px] text-base leading-8 text-[#555568]">
            The personal appearance of AGS students should reflect a respect for
            the school community so that individual student dress does not
            distract from the learning process. AGS is a place of work and study
            and therefore appropriate dress means neat, clean, modest and in good
            repair.
          </p>
          <ul className="mt-6 space-y-2 text-sm leading-7 text-[#555568]">
            <li className="flex gap-3">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#6657c8]" />
              Dresses that does not meet with the general expectations of the school will not be permitted.
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#6657c8]" />
              Hairstyles and make-up are expected to be similarly appropriate.
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#6657c8]" />
              Hair colour must be natural looking.
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#6657c8]" />
              Moustaches and beards are not acceptable.
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#6657c8]" />
              Hats and caps are not permitted.
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#6657c8]" />
              If there is any doubt, students/parents should check with their Principal whose decision will be final.
            </li>
          </ul>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="rounded-[30px] border border-[#dcd6f3] bg-white p-6">
              <h3 className="text-lg font-extrabold text-[#171727]">Girls</h3>
              <ol className="mt-4 list-inside list-decimal space-y-2 text-sm leading-7 text-[#555568]">
                <li>Grey* Pinafore dress, worn over a white short sleeved blouse.</li>
                <li>Black flat shoes, with quiet soles and white socks to match.</li>
                <li>Pinafore dress for school wear and should be just above the knee.</li>
                <li>Hair should be properly kept as well as fingernails.</li>
              </ol>
            </div>
            <div className="rounded-[30px] border border-[#dcd6f3] bg-white p-6">
              <h3 className="text-lg font-extrabold text-[#171727]">Boys</h3>
              <ol className="mt-4 list-inside list-decimal space-y-2 text-sm leading-7 text-[#555568]">
                <li>Grey* shorts and a white short sleeved shirt.</li>
                <li>Black flat shoes, with quiet soles and black socks to match.</li>
                <li>Shorts must be appropriate for school wear and should be just above the knee.</li>
                <li>Hair should be properly kept as well as fingernails.</li>
              </ol>
            </div>
          </div>

          <div className="mt-8 rounded-[30px] border border-[#ded8ef] bg-white p-6">
            <h3 className="text-lg font-extrabold text-[#171727]">Casual Wear</h3>
            <p className="mt-2 text-sm leading-7 text-[#555568]">
              There is a Friday Casual attire permitted and it is a white and
              blue Polo Shirt with the school&apos;s logo in the front.
            </p>
            <p className="mt-4 text-xs leading-6 text-[#555568]">
              *The Shade Grey material used can be obtained from the office, in
              situations where parents are unable to locate the exact shade for
              the uniform the school can be contacted to help.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-[1180px] text-center">
          <SectionLabel>Resources</SectionLabel>
          <h2
            className="mx-auto mt-5 max-w-[640px] text-[2rem] font-bold leading-[1.06] text-[#171727] sm:text-[2.5rem]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Download Brochure
          </h2>
          <p className="mx-auto mt-5 max-w-[600px] text-base leading-8 text-[#555568]">
            Adobe Acrobat file, 123 KB
          </p>
          <a
            href="/admissions/handbook/"
            onClick={(event) => handleNavClick(event, "/admissions/handbook/")}
            className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 bg-[#6657c8] px-7 text-sm font-extrabold text-white shadow-[0_20px_48px_rgba(102,87,200,0.28)] transition hover:-translate-y-1 hover:bg-[#5546b8]"
          >
            <FileDown size={16} strokeWidth={2.3} />
            Download Brochure
          </a>
        </div>
      </section>
    </main>
  );
}
