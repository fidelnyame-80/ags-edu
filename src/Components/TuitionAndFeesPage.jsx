import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Images } from "../assets/Images/Images";

const feeItems = [
  {
    title: "Application Fee",
    body: "The Application Processing fee for the 2023/24 School Year is 50 cedis. This fee is payable when an application is submitted to the Admission Office and is not refundable.",
  },
  {
    title: "Registration Fee",
    body: "",
  },
  {
    title: "Annual Fees",
    body: "",
  },
  {
    title: "Transportation Fees",
    body: "",
  },
  {
    title: "Lunch Coupons",
    body: "",
  },
  {
    title: "Tuition Fee 2023/24",
    body: "",
  },
];

function Capsule({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-[20px] border border-[#dcd6f3] bg-white overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-[#f4f1fb]"
      >
        <span className="text-sm font-extrabold text-[#171727]">{title}</span>
        <ChevronDown
          size={18}
          strokeWidth={2.5}
          className={`shrink-0 text-[#6657c8] transition ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && <div className="border-t border-[#dcd6f3] px-5 pb-5 pt-3 text-sm leading-7 text-[#555568]">{children}</div>}
    </div>
  );
}

export default function TuitionAndFeesPage() {
  return (
    <main className="bg-[#fffefa] text-[#171727]">
      <section className="px-5 pb-4 pt-24 sm:px-8 lg:px-20 lg:pt-32">
        <div className="mx-auto max-w-[1180px]">
          <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#6657c8]">
            AGS / Admissions / Tuition and Fees
          </p>
          <h1
            className="mt-4 text-[2.35rem] font-bold leading-[1.04] text-[#171727] sm:text-[3.15rem] lg:text-[3.6rem]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Tuition and Fees
          </h1>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-[1180px]">
          <img
            src={Images.administration}
            alt="AGS administration"
            loading="lazy"
            className="w-full rounded-[30px]"
          />
          <div className="mt-10 space-y-3">
            {feeItems.map((item) => (
              <Capsule key={item.title} title={item.title}>
                {item.body || "Information coming soon."}
              </Capsule>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
