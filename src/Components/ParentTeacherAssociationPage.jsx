import { Images } from "../assets/Images/Images";

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

export default function ParentTeacherAssociationPage() {
  return (
    <main className="bg-[#fffefa] text-[#171727]">
      <section className="px-5 pb-4 pt-24 sm:px-8 lg:px-20 lg:pt-32">
        <div className="mx-auto max-w-[1180px]">
          <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#6657c8]">
            AGS / Parent Teacher Association
          </p>
          <h1
            className="mt-4 text-[2.35rem] font-bold leading-[1.04] text-[#171727] sm:text-[3.15rem] lg:text-[3.6rem]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Parent Teacher Association
          </h1>
          <p className="mt-6 max-w-[760px] text-base leading-8 text-[#555568]">
            The Parent Teacher Association (PTA) is an organization that aims to
            improve our school by bringing together members of the school
            community, including parents, teachers, and staff.
          </p>
        </div>
      </section>

      <section className="px-5 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-[1180px]">
          <img
            src={Images.PTA}
            alt="PTA at AGS"
            loading="lazy"
            className="w-full rounded-[30px]"
          />
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-[30px] border border-[#e8e5f0] bg-white p-6 shadow-[0_18px_50px_rgba(86,72,150,0.07)]">
              <h3 className="text-lg font-extrabold text-[#171727]">
                Fundraising
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#555568]">
                PTAs may organize events and activities to raise money for the
                school. These funds can be used for various purposes, such as
                classroom supplies, supporting extracurricular programs, or
                improving school facilities.
              </p>
            </div>
            <div className="rounded-[30px] border border-[#e8e5f0] bg-white p-6 shadow-[0_18px_50px_rgba(86,72,150,0.07)]">
              <h3 className="text-lg font-extrabold text-[#171727]">
                Community Building
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#555568]">
                The PTA seeks to foster a sense of community within the school
                community. They organize social events and other gatherings to
                connect parents, teachers, and students.
              </p>
            </div>
            <div className="rounded-[30px] border border-[#e8e5f0] bg-white p-6 shadow-[0_18px_50px_rgba(86,72,150,0.07)]">
              <h3 className="text-lg font-extrabold text-[#171727]">
                Advocacy
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#555568]">
                Our PTA advocate for policies and programs that benefit the
                school and students&apos; education. They are an important
                source of networking for the school and also advocate for their
                students as well.
              </p>
            </div>
            <div className="rounded-[30px] border border-[#e8e5f0] bg-white p-6 shadow-[0_18px_50px_rgba(86,72,150,0.07)]">
              <h3 className="text-lg font-extrabold text-[#171727]">
                Volunteer Coordination
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#555568]">
                Our PTAs serve as volunteers for school events, field trips,
                free health clinics like eye and hearing exams. They help create
                a supportive environment where parents can actively participate
                in their child&apos;s education.
              </p>
            </div>
            <div className="rounded-[30px] border border-[#e8e5f0] bg-white p-6 shadow-[0_18px_50px_rgba(86,72,150,0.07)]">
              <h3 className="text-lg font-extrabold text-[#171727]">
                Educational Programs
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#555568]">
                PTA can organize workshops, seminars, and guest speakers to
                educate parents and enhance their parenting skills. They also
                provide resources to support student learning.
              </p>
            </div>
            <div className="rounded-[30px] border border-[#e8e5f0] bg-white p-6 shadow-[0_18px_50px_rgba(86,72,150,0.07)]">
              <h3 className="text-lg font-extrabold text-[#171727]">
                Teacher Appreciation
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#555568]">
                The PTA recognize and appreciate teachers and staff through
                events, gifts, and other gestures. They play a vital role in
                boosting teacher morale.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-[30px] border border-[#dcd6f3] bg-[#f4f1fb] p-6">
            <p className="text-sm leading-7 text-[#555568]">
              Please remember that PTAs operate under their own bylaws and are
              independent of the school administration, the school does allow it
              use of its accounting facilities to collect dues for the
              association.
            </p>
          </div>

          <p className="mt-10 text-center text-lg font-extrabold text-[#171727]">
            Parents of Accra Grammar School are all members of the PTA.
          </p>

          <div className="mt-10">
            <h2 className="text-[2rem] font-bold leading-[1.06] text-[#171727] sm:text-[2.5rem]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
              Checking my Child&apos;s Grade
            </h2>
            <div className="mt-6 aspect-video w-full overflow-hidden rounded-[30px]">
              <iframe
                src="https://www.youtube.com/embed/GGIEftYpr14"
                title="Checking my Childs Grade"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
