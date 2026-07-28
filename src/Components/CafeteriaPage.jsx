import MotionText from "./MotionText";

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

export default function CafeteriaPage() {
  return (
    <main className="bg-[#fffefa] text-[#171727]">
      <section className="px-5 pb-4 pt-24 sm:px-8 lg:px-20 lg:pt-32">
        <div className="mx-auto max-w-[1180px]">
          <MotionText as="p" className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#6657c8]">
            AGS / Cafeteria
          </MotionText>
          <MotionText
            as="h1"
            delay={0.08}
            className="mt-4 text-[2.35rem] font-bold leading-[1.04] text-[#171727] sm:text-[3.15rem] lg:text-[3.6rem]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Cafeteria
          </MotionText>
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-[1180px]">
          <MotionText>
            <SectionLabel>About Lunch</SectionLabel>
            <h2
              className="mt-5 max-w-[680px] text-[2rem] font-bold leading-[1.06] text-[#171727] sm:text-[2.5rem]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Fresh. Healthy. Home-cooked.
            </h2>
          </MotionText>
          <div className="mt-6 grid gap-8 lg:grid-cols-2">
            <MotionText as="p" delay={0.06} className="text-base leading-8 text-[#555568]">
              Full time Chef on site, is responsible for all catering and
              domestic services within the school. A wide selection of freshly
              made dishes is available from the Dining Hall at lunch with a cafe
              style snack bar.
            </MotionText>
            <MotionText as="p" delay={0.1} className="text-base leading-8 text-[#555568]">
              Our staff are trained using their own specific training course, so
              that they understand the company philosophy to serve our community.
              Offering healthy eating with a balance between current eating
              trends, good nutrition and fresh home-cooked food.
            </MotionText>
            <MotionText
              as="p"
              delay={0.14}
              className="mt-6 rounded-2xl border border-[#e8e5f0] bg-[#f7f4ed] px-6 py-4 text-base leading-8 text-[#555568]"
            >
              <strong>Snack shop is open all the time.</strong> Visit the snack
              pergola throughout the school day for fresh meat pies, hot
              pancakes, cold beverages, and more.
            </MotionText>
          </div>
        </div>
      </section>
    </main>
  );
}
