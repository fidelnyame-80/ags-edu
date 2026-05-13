import {
  ArrowRight,
  Building2,
  Mail,
  MapPin,
  Phone,
  Send,
  UserRound,
} from "lucide-react";
import { Images } from "../assets/Images/Images";
import MotionText from "./MotionText";

const contactPeople = [
  {
    role: "Administration",
    name: "School Office",
    phone: "+233 27 700 0034",
    email: "admin@agsedu.org",
    icon: Building2,
  },
  {
    role: "Principal",
    name: "Ms. Alfred Asare",
    phone: "+233 24 325 1676",
    email: "alfred.asare@agsedu.org",
    icon: UserRound,
  },
  {
    role: "Bursar",
    name: "Mr. Maxwell Obuobi",
    phone: "+233 24 626 1334",
    email: "obuobi@agsedu.org",
    icon: UserRound,
  },
];

const contactDetails = [
  {
    icon: MapPin,
    label: "Address",
    value: "P.O. Box VV54, Oyibi, Accra, Ghana",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+233 (0)27 700 0034",
  },
  {
    icon: Mail,
    label: "Email",
    value: "admin@agsedu.org",
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

export default function ContactsPage() {
  return (
    <main className="bg-[#fffefa] text-[#171727]">
      <section className="relative isolate min-h-[520px] overflow-hidden bg-[#061a34] px-5 py-20 text-white sm:px-8 lg:px-20">
        <img
          src={Images.schoolCompound}
          alt="Accra Grammar School campus"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(4,12,32,0.92) 0%, rgba(6,20,52,0.82) 48%, rgba(11,34,86,0.5) 72%, rgba(11,34,86,0.2) 100%)",
          }}
        />

        <div className="relative z-10 mx-auto flex min-h-[360px] max-w-[1180px] flex-col justify-center">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-blue-100/80">
            AGS / Contacts
          </p>
          <MotionText
            as="h1"
            delay={0.08}
            className="mt-6 max-w-[760px] text-[2.35rem] font-bold leading-[1.04] sm:text-[3.15rem] lg:text-[3.6rem]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Contact Accra Grammar School.
          </MotionText>
          <MotionText
            as="p"
            delay={0.16}
            className="mt-7 max-w-[640px] text-base leading-8 text-blue-50/88 sm:text-lg"
          >
            Visit our campus, send feedback, or reach the right school office
            contact for admissions, administration, and finance enquiries.
          </MotionText>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-20 lg:py-20">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <SectionLabel>School Location</SectionLabel>
              <MotionText
                as="h2"
                delay={0.08}
                className="mt-7 max-w-[560px] text-[2.35rem] font-bold leading-[1.05] sm:text-[3rem]"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                Find AGS at Oyibi.
              </MotionText>
            </div>
            <MotionText as="p" delay={0.14} className="max-w-[620px] text-base leading-8 text-[#555568]">
              The school is located at Oyibi, northeast of Accra. Use the map
              below for directions or contact the school office before visiting.
            </MotionText>
          </div>

          <div className="mt-10 overflow-hidden border border-[#dcd6f3] bg-white shadow-[0_24px_70px_rgba(86,72,150,0.08)]">
            <iframe
              title="Accra Grammar School location on Google Maps"
              src="https://www.google.com/maps?q=Accra%20Grammar%20School%20Oyibi%20Ghana&output=embed"
              className="h-[380px] w-full border-0 lg:h-[460px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {contactDetails.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.label} className="flex items-center gap-4 bg-[#f7f4ed] p-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-white text-[#6657c8]">
                    <Icon size={21} strokeWidth={2.2} />
                  </span>
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#6657c8]">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm font-bold leading-6 text-[#171727]">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f4ed] px-5 py-16 sm:px-8 lg:px-20 lg:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <SectionLabel>Feedback</SectionLabel>
            <MotionText
              as="h2"
              delay={0.08}
              className="mt-7 max-w-[560px] text-[2.35rem] font-bold leading-[1.05] sm:text-[3rem]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Send a message to the school office.
            </MotionText>
            <form
              className="mt-8 border border-[#ded8ef] bg-white p-6 shadow-[0_24px_70px_rgba(86,72,150,0.08)] sm:p-8"
              onSubmit={(event) => event.preventDefault()}
            >
              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-bold text-[#171727]">
                  Name
                  <input
                    type="text"
                    name="name"
                    className="min-h-12 border border-[#d9d4e8] bg-[#fffefa] px-4 text-sm font-medium outline-none transition focus:border-[#6657c8]"
                  />
                </label>
                <label className="grid gap-2 text-sm font-bold text-[#171727]">
                  Email
                  <input
                    type="email"
                    name="email"
                    className="min-h-12 border border-[#d9d4e8] bg-[#fffefa] px-4 text-sm font-medium outline-none transition focus:border-[#6657c8]"
                  />
                </label>
                <label className="grid gap-2 text-sm font-bold text-[#171727] md:col-span-2">
                  Phone
                  <input
                    type="tel"
                    name="phone"
                    className="min-h-12 border border-[#d9d4e8] bg-[#fffefa] px-4 text-sm font-medium outline-none transition focus:border-[#6657c8]"
                  />
                </label>
                <label className="grid gap-2 text-sm font-bold text-[#171727] md:col-span-2">
                  Message
                  <textarea
                    name="message"
                    rows="6"
                    className="resize-none border border-[#d9d4e8] bg-[#fffefa] px-4 py-3 text-sm font-medium outline-none transition focus:border-[#6657c8]"
                  />
                </label>
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex min-h-12 items-center gap-2 bg-blue-600 px-6 text-sm font-extrabold text-white shadow-[0_18px_44px_rgba(37,99,235,0.24)] transition hover:-translate-y-1 hover:bg-blue-500"
              >
                Submit Feedback
                <Send size={16} strokeWidth={2.3} />
              </button>
            </form>
          </div>

          <div>
            <SectionLabel>Your Contacts</SectionLabel>
            <MotionText
              as="h2"
              delay={0.08}
              className="mt-7 max-w-[520px] text-[2.35rem] font-bold leading-[1.05] sm:text-[3rem]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Reach the right person quickly.
            </MotionText>
            <div className="mt-8 grid gap-5">
              {contactPeople.map((person) => {
                const Icon = person.icon;

                return (
                  <article
                    key={person.email}
                    className="border border-[#ded8ef] bg-white p-6 shadow-[0_20px_52px_rgba(86,72,150,0.08)]"
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex h-14 w-14 shrink-0 items-center justify-center bg-[#eeeaff] text-[#6657c8]">
                        <Icon size={25} strokeWidth={2.2} />
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#6657c8]">
                          {person.role}
                        </p>
                        <h3 className="mt-2 text-xl font-extrabold text-[#171727]">
                          {person.name}
                        </h3>
                        <div className="mt-4 grid gap-3 text-sm font-bold text-[#555568]">
                          <a
                            href={`tel:${person.phone.replace(/[^+\d]/g, "")}`}
                            className="flex items-center gap-3 transition hover:text-[#171727]"
                          >
                            <Phone className="text-[#43a966]" size={17} />
                            {person.phone}
                          </a>
                          <a
                            href={`mailto:${person.email}`}
                            className="flex items-center gap-3 break-all transition hover:text-[#171727]"
                          >
                            <Mail className="text-[#2563eb]" size={17} />
                            {person.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden px-5 py-20 text-white sm:px-8 lg:px-20">
        <img
          src={Images.compoundImg}
          alt="AGS community moment"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#061a34]/84" />
        <div className="relative z-10 mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-center">
          <div>
            <SectionLabel light>Visit AGS</SectionLabel>
            <MotionText
              as="h2"
              delay={0.08}
              className="mt-7 max-w-[700px] text-[2.45rem] font-bold leading-[1.06] sm:text-[3.3rem]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              We are ready to help you find the right office.
            </MotionText>
            <MotionText
              as="p"
              delay={0.14}
              className="mt-6 max-w-[680px] text-base leading-8 text-blue-50/86"
            >
              For admissions, administration, finance, events, or general
              feedback, contact the school office before visiting.
            </MotionText>
          </div>
          <a
            href="mailto:admin@agsedu.org"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 bg-blue-600 px-6 text-sm font-extrabold text-white shadow-[0_20px_48px_rgba(37,99,235,0.26)] transition hover:-translate-y-1 hover:bg-blue-500 sm:w-max"
          >
            Email the Office
            <ArrowRight size={17} strokeWidth={2.4} />
          </a>
        </div>
      </section>
    </main>
  );
}
