import PdfResourceCard from "./PdfResourceCard";

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
        <div className="mx-auto max-w-[1180px]">
          <SectionLabel>Resources</SectionLabel>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <PdfResourceCard
              title="Student Handbook 2026"
              description="Rules, policies, academic calendar, and student guide for the 2026 academic year."
              pdfFile="/HandbookMain.pdf"
              fileSize="2.3 MB"
              updated="Jul 2026"
            />
            <PdfResourceCard
              title="Enrollment Contract 2026"
              description="Official enrollment agreement outlining terms, fees, and policies for the 2026 academic year."
              pdfFile="/enrollmentcontract.pdf"
              fileSize="1.1 MB"
              updated="Jul 2026"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
