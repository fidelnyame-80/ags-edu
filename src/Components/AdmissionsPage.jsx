import {
  ArrowRight,
  ClipboardList,
  FileCheck2,
  Mail,
  Phone,
  ReceiptText,
  Send,
} from "lucide-react";
import { Images } from "../assets/Images/Images";
import MotionText from "./MotionText";

const admissionsCards = [
  {
    icon: ClipboardList,
    title: "How to Apply",
    image: Images.schoolCompound2,
    body:
      "Start by contacting the admissions office, choosing the intended class level, and submitting the learner's basic details for review.",
    steps: ["Request an enquiry form", "Share learner records", "Book an assessment"],
  },
  {
    icon: FileCheck2,
    title: "How to Enroll",
    image: Images.graduation1,
    body:
      "After a successful review, families complete enrollment forms, confirm placement, and receive orientation notes for the new learner.",
    steps: ["Confirm admission offer", "Complete required forms", "Attend orientation"],
  },
  {
    icon: ReceiptText,
    title: "Tuition and Fees",
    image: Images.compoundImg,
    body:
      "Fee information is shared by the admissions team based on the learner's division, class level, and current academic year.",
    steps: ["Request fee schedule", "Review payment plan", "Confirm start date"],
  },
];

const entryLevels = [
  "Pre School",
  "Primary School",
  "Junior High School",
  "Not sure yet",
];

// Placeholder function for form submission handling
const handleSubmit = async (e) => {
  e.preventDefault();
  

  const formdata = new FormData(e.target);

  const data = {
    guardian: formdata.get("guardian"),
    email: formdata.get("email"),
    phone: formdata.get("phone"),
    message: formdata.get("message"),
    learner: formdata.get("learner"),
    entryLevel: formdata.get("entryLevel"),
  }

  console.log("Form Data:", data);

  const response = await fetch("http://localhost:5000/admissions",{
    method: "POST",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })

  const result = await response.json();
  console.log(result);
    e.target.reset();
};


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

export default function AdmissionsPage() {
  return (
    <main className="bg-[#fffefa] text-[#171727]">
      <section className="relative isolate min-h-[560px] overflow-hidden bg-[#061a34] px-5 py-20 text-white sm:px-8 lg:px-20">
        <img
          src={Images.graduation1}
          alt="AGS student receiving recognition"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(4,12,32,0.92) 0%, rgba(6,20,52,0.82) 46%, rgba(11,34,86,0.58) 70%, rgba(11,34,86,0.24) 100%)",
          }}
        />

        <div className="relative z-10 mx-auto flex min-h-[400px] max-w-[1180px] flex-col justify-center">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-blue-100/80">
            AGS / Admissions
          </p>
          <MotionText
            as="h1"
            delay={0.08}
            className="mt-6 max-w-[760px] text-[2.35rem] font-bold leading-[1.04] sm:text-[3.15rem] lg:text-[3.6rem]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Begin your AGS journey.
          </MotionText>
          <MotionText
            as="p"
            delay={0.16}
            className="mt-7 max-w-[640px] text-base leading-8 text-blue-50/88 sm:text-lg"
          >
            Our admissions process is designed to be clear, welcoming, and
            personal. Families receive guidance from enquiry through enrollment
            so each learner can start with confidence.
          </MotionText>
        </div>
      </section>

      <section id="admissions" className="px-5 py-16 sm:px-8 lg:px-20 lg:py-20">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <SectionLabel>Admissions Guide</SectionLabel>
              <MotionText
                as="h2"
                delay={0.08}
                className="mt-7 max-w-[560px] text-[2.35rem] font-bold leading-[1.05] sm:text-[3rem]"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                Three simple areas to understand before you apply.
              </MotionText>
            </div>
            <MotionText as="p" delay={0.14} className="max-w-[620px] text-base leading-8 text-[#555568]">
              Whether you are asking for the first time or ready to complete
              enrollment, the admissions office will help you choose the right
              entry level and prepare the required documents.
            </MotionText>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {admissionsCards.map((card) => {
              const Icon = card.icon;

              return (
                <article
                  key={card.title}
                  className="group relative isolate min-h-[480px] overflow-hidden bg-[#061a34] text-white shadow-[0_24px_70px_rgba(1,8,20,0.14)]"
                >
                  <img
                    src={card.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061a34] via-[#061a34]/72 to-[#061a34]/20" />
                  <div className="relative z-10 flex min-h-[480px] flex-col justify-end p-6">
                    <span className="flex h-12 w-12 items-center justify-center bg-white text-[#6657c8]">
                      <Icon size={23} strokeWidth={2.2} />
                    </span>
                    <h3
                      className="mt-6 text-[2rem] font-bold leading-tight"
                      style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                    >
                      {card.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-blue-50/86">
                      {card.body}
                    </p>
                    <div className="mt-5 grid gap-2">
                      {card.steps.map((step) => (
                        <div
                          key={step}
                          className="flex items-center gap-2 text-sm font-semibold text-white"
                        >
                          <span className="h-1.5 w-1.5 bg-[#49bd7a]" />
                          {step}
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="contact-admissions"
        className="bg-[#f7f4ed] px-5 py-16 sm:px-8 lg:px-20 lg:py-20"
      >
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <SectionLabel>Contact Admissions</SectionLabel>
            <MotionText
              as="h2"
              delay={0.08}
              className="mt-7 max-w-[560px] text-[2.35rem] font-bold leading-[1.05] sm:text-[3rem]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Send an enquiry to the admissions team.
            </MotionText>
            <MotionText
              as="p"
              delay={0.14}
              className="mt-6 max-w-[500px] text-base leading-8 text-[#555568]"
            >
              Share a few details and the school office will follow up with
              guidance on class placement, available requirements, and the next
              step.
            </MotionText>

            <div className="mt-8 grid gap-4">
              <div className="flex items-center gap-3 text-sm font-bold text-[#171727]">
                <span className="flex h-11 w-11 items-center justify-center bg-[#e8f1ff] text-[#2563eb]">
                  <Phone size={18} strokeWidth={2.2} />
                </span>
                +233 (0)27-700-0034
              </div>
              <div className="flex items-center gap-3 text-sm font-bold text-[#171727]">
                <span className="flex h-11 w-11 items-center justify-center bg-[#eeeaff] text-[#6657c8]">
                  <Mail size={18} strokeWidth={2.2} />
                </span>
                admin@agsedu.org
              </div>
            </div>
          </div>

          <form
            className="border border-[#ded8ef] bg-white p-6 shadow-[0_24px_70px_rgba(86,72,150,0.08)] sm:p-8"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-[#171727]">
                Parent or guardian name *
                <input
                  type="text"
                  name="guardian"
                  required
                  autoComplete="name"
                  className="min-h-12 border border-[#d9d4e8] bg-[#fffefa] px-4 text-sm font-medium outline-none transition focus:border-[#6657c8]"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-[#171727]">
                Email address *
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  className="min-h-12 border border-[#d9d4e8] bg-[#fffefa] px-4 text-sm font-medium outline-none transition focus:border-[#6657c8]"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-[#171727]">
                Phone number
                <input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  className="min-h-12 border border-[#d9d4e8] bg-[#fffefa] px-4 text-sm font-medium outline-none transition focus:border-[#6657c8]"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-[#171727]">
                Learner's name
                <input
                  type="text"
                  name="learner"
                  className="min-h-12 border border-[#d9d4e8] bg-[#fffefa] px-4 text-sm font-medium outline-none transition focus:border-[#6657c8]"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-[#171727] md:col-span-2">
                Entry level
                <select
                  name="entryLevel"
                  defaultValue=""
                  className="min-h-12 border border-[#d9d4e8] bg-[#fffefa] px-4 text-sm font-medium outline-none transition focus:border-[#6657c8]"
                >
                  <option value="" disabled>
                    Select an entry level
                  </option>
                  {entryLevels.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 text-sm font-bold text-[#171727] md:col-span-2">
                Message *
                <textarea
                  name="message"
                  rows="5"
                  required
                  className="resize-none border border-[#d9d4e8] bg-[#fffefa] px-4 py-3 text-sm font-medium outline-none transition focus:border-[#6657c8]"
                />
              </label>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex min-h-12 items-center gap-2 bg-blue-600 px-6 text-sm font-extrabold text-white shadow-[0_18px_44px_rgba(37,99,235,0.24)] transition hover:-translate-y-1 hover:bg-blue-500"
            >
              Send Enquiry
              <Send size={16} strokeWidth={2.3} />
            </button>
          </form>
        </div>
      </section>

      <section className="relative isolate overflow-hidden px-5 py-18 text-white sm:px-8 lg:px-20 lg:py-20">
        <img
          src={Images.schoolCompound}
          alt="AGS campus"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#061a34]/84" />
        <div className="relative z-10 mx-auto flex max-w-[1180px] flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <SectionLabel light>Ready to Visit?</SectionLabel>
            <MotionText
              as="h2"
              delay={0.08}
              className="mt-6 max-w-[620px] text-[2.2rem] font-bold leading-[1.06] sm:text-[3rem]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Schedule a conversation with the school office.
            </MotionText>
          </div>
          <a
            href="tel:+233277000034"
            className="inline-flex min-h-12 items-center justify-center gap-2 bg-white px-6 text-sm font-extrabold text-[#061a34] transition hover:-translate-y-1 hover:bg-blue-50"
          >
            Call Admissions
            <ArrowRight size={17} strokeWidth={2.4} />
          </a>
        </div>
      </section>
    </main>
  );
}
