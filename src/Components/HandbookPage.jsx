import { FileDown } from "lucide-react";

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

export default function HandbookPage() {
  return (
    <main className="bg-[#fffefa] text-[#171727]">
      <section className="px-5 pb-4 pt-24 sm:px-8 lg:px-20 lg:pt-32">
        <div className="mx-auto max-w-[1180px]">
          <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#6657c8]">
            AGS / Handbook
          </p>
          <h1
            className="mt-4 text-[2.35rem] font-bold leading-[1.04] text-[#171727] sm:text-[3.15rem] lg:text-[3.6rem]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Accra Grammar School Handbook
          </h1>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-[860px]">
          <div className="divide-y divide-[#e8e5f0] rounded-[30px] border border-[#e8e5f0] bg-white shadow-[0_18px_50px_rgba(86,72,150,0.07)]">
            <a
              href="/handbook.pdf"
              download
              className="flex items-center justify-between gap-4 px-6 py-5 transition hover:bg-[#f4f1fb] sm:px-8 sm:py-6"
            >
              <div>
                <p className="text-base font-extrabold text-[#171727] sm:text-lg">
                  Handbook
                </p>
                <p className="mt-1 text-sm text-[#555568]">
                  Adobe Acrobat file, 123 KB
                </p>
              </div>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f2edff]">
                <FileDown size={18} strokeWidth={2} className="text-[#6657c8]" />
              </span>
            </a>
            <a
              href="/enrollment-contract.pdf"
              download
              className="flex items-center justify-between gap-4 px-6 py-5 transition hover:bg-[#f4f1fb] sm:px-8 sm:py-6"
            >
              <div>
                <p className="text-base font-extrabold text-[#171727] sm:text-lg">
                  Accra Grammar School Enrollment Contract
                </p>
                <p className="mt-1 text-sm text-[#555568]">
                  Adobe Acrobat file
                </p>
              </div>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f2edff]">
                <FileDown size={18} strokeWidth={2} className="text-[#6657c8]" />
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
