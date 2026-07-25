import { Images } from "../assets/Images/Images";

const DASHBOARD_API_URL =
  import.meta.env.VITE_DASHBOARD_API_URL ||
  import.meta.env.VITE_CMS_API_URL ||
  "https://ags-dashboard.vercel.app/api";

const handleSubmit = async (e) => {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);
  const response = await fetch(`${DASHBOARD_API_URL.replace(/\/$/, "")}/admissions/apply`, {
    method: "POST",
    body: data,
  });
  if (response.ok) {
    form.reset();
  }
};

function InputRow({ children }) {
  return <div className="grid gap-5 md:grid-cols-2">{children}</div>;
}

function Field({ label, required, children }) {
  return (
    <label className="grid gap-1.5 text-sm font-bold text-[#171727]">
      {label} {required && <span className="text-red-500">*</span>}
      {children}
    </label>
  );
}

export default function OnlineApplicationPage() {
  return (
    <main className="bg-[#fffefa] text-[#171727]">
      <section className="px-5 pb-4 pt-24 sm:px-8 lg:px-20 lg:pt-32">
        <div className="mx-auto max-w-[860px]">
          <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#6657c8]">
            AGS / Admissions / Online Application
          </p>
          <h1
            className="mt-4 text-[2.35rem] font-bold leading-[1.04] text-[#171727] sm:text-[3.15rem] lg:text-[3.6rem]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Online Application
          </h1>
          <p className="mt-4 text-base leading-8 text-[#555568]">Complete &amp; Submit Form</p>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 lg:px-20">
        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-[860px] rounded-[30px] border border-[#ded8ef] bg-white p-6 shadow-[0_24px_70px_rgba(86,72,150,0.08)] sm:p-10"
        >
          <h2 className="text-lg font-extrabold text-[#171727]">Student Information</h2>
          <div className="mt-6 grid gap-5">
            <InputRow>
              <Field label="First Name" required>
                <input type="text" name="firstName" required className="min-h-12 border border-[#d9d4e8] bg-[#fffefa] px-4 text-sm font-medium outline-none transition focus:border-[#6657c8]" />
              </Field>
              <Field label="Last Name" required>
                <input type="text" name="lastName" required className="min-h-12 border border-[#d9d4e8] bg-[#fffefa] px-4 text-sm font-medium outline-none transition focus:border-[#6657c8]" />
              </Field>
            </InputRow>
            <InputRow>
              <Field label="Other Name">
                <input type="text" name="otherName" className="min-h-12 border border-[#d9d4e8] bg-[#fffefa] px-4 text-sm font-medium outline-none transition focus:border-[#6657c8]" />
              </Field>
              <Field label="Gender" required>
                <select name="gender" required defaultValue="" className="min-h-12 border border-[#d9d4e8] bg-[#fffefa] px-4 text-sm font-medium outline-none transition focus:border-[#6657c8]">
                  <option value="" disabled>Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </Field>
            </InputRow>
          </div>

          <h2 className="mt-10 text-lg font-extrabold text-[#171727]">Academics</h2>
          <div className="mt-6 grid gap-5">
            <InputRow>
              <Field label="School" required>
                <select name="school" required defaultValue="" className="min-h-12 border border-[#d9d4e8] bg-[#fffefa] px-4 text-sm font-medium outline-none transition focus:border-[#6657c8]">
                  <option value="" disabled>Select School</option>
                  <option>Accra Grammar School</option>
                </select>
              </Field>
              <Field label="Grade" required>
                <select name="grade" required defaultValue="" className="min-h-12 border border-[#d9d4e8] bg-[#fffefa] px-4 text-sm font-medium outline-none transition focus:border-[#6657c8]">
                  <option value="" disabled>Select Grade</option>
                  <option>Pre School</option>
                  <option>Primary School</option>
                  <option>Junior High School</option>
                </select>
              </Field>
            </InputRow>
            <InputRow>
              <Field label="Date of Birth" required>
                <div className="grid grid-cols-3 gap-2">
                  <select name="dobMonth" required defaultValue="" className="min-h-12 border border-[#d9d4e8] bg-[#fffefa] px-4 text-sm font-medium outline-none transition focus:border-[#6657c8]">
                    <option value="" disabled>MM</option>
                    {Array.from({ length: 12 }, (_, i) => (
                      <option key={i} value={i + 1}>{String(i + 1).padStart(2, "0")}</option>
                    ))}
                  </select>
                  <select name="dobDay" required defaultValue="" className="min-h-12 border border-[#d9d4e8] bg-[#fffefa] px-4 text-sm font-medium outline-none transition focus:border-[#6657c8]">
                    <option value="" disabled>DD</option>
                    {Array.from({ length: 31 }, (_, i) => (
                      <option key={i} value={i + 1}>{String(i + 1).padStart(2, "0")}</option>
                    ))}
                  </select>
                  <select name="dobYear" required defaultValue="" className="min-h-12 border border-[#d9d4e8] bg-[#fffefa] px-4 text-sm font-medium outline-none transition focus:border-[#6657c8]">
                    <option value="" disabled>YYYY</option>
                    {Array.from({ length: 20 }, (_, i) => (
                      <option key={i} value={2010 + i}>{2010 + i}</option>
                    ))}
                  </select>
                </div>
              </Field>
              <Field label="Section" required>
                <select name="section" required defaultValue="" className="min-h-12 border border-[#d9d4e8] bg-[#fffefa] px-4 text-sm font-medium outline-none transition focus:border-[#6657c8]">
                  <option value="" disabled>Select Section</option>
                  <option>General</option>
                  <option>Science</option>
                </select>
              </Field>
            </InputRow>
          </div>

          <h2 className="mt-10 text-lg font-extrabold text-[#171727]">Student Present Address</h2>
          <div className="mt-6 grid gap-5">
            <Field label="Address Line 1" required>
              <input type="text" name="address1" required className="min-h-12 border border-[#d9d4e8] bg-[#fffefa] px-4 text-sm font-medium outline-none transition focus:border-[#6657c8]" />
            </Field>
            <Field label="Address Line 2">
              <input type="text" name="address2" className="min-h-12 border border-[#d9d4e8] bg-[#fffefa] px-4 text-sm font-medium outline-none transition focus:border-[#6657c8]" />
            </Field>
            <InputRow>
              <Field label="City" required>
                <input type="text" name="city" required className="min-h-12 border border-[#d9d4e8] bg-[#fffefa] px-4 text-sm font-medium outline-none transition focus:border-[#6657c8]" />
              </Field>
              <Field label="State / Province / Region">
                <input type="text" name="state" className="min-h-12 border border-[#d9d4e8] bg-[#fffefa] px-4 text-sm font-medium outline-none transition focus:border-[#6657c8]" />
              </Field>
            </InputRow>
            <InputRow>
              <Field label="Postal Code">
                <input type="text" name="postalCode" className="min-h-12 border border-[#d9d4e8] bg-[#fffefa] px-4 text-sm font-medium outline-none transition focus:border-[#6657c8]" />
              </Field>
              <Field label="Country" required>
                <select name="country" required defaultValue="" className="min-h-12 border border-[#d9d4e8] bg-[#fffefa] px-4 text-sm font-medium outline-none transition focus:border-[#6657c8]">
                  <option value="" disabled>Select country</option>
                  <option>Ghana</option>
                  <option>Nigeria</option>
                  <option>Other</option>
                </select>
              </Field>
            </InputRow>
          </div>

          <h2 className="mt-10 text-lg font-extrabold text-[#171727]">Details</h2>
          <div className="mt-6 grid gap-5">
            <InputRow>
              <Field label="Religion" required>
                <input type="text" name="religion" required className="min-h-12 border border-[#d9d4e8] bg-[#fffefa] px-4 text-sm font-medium outline-none transition focus:border-[#6657c8]" />
              </Field>
              <Field label="Mother Tongue" required>
                <input type="text" name="motherTongue" required className="min-h-12 border border-[#d9d4e8] bg-[#fffefa] px-4 text-sm font-medium outline-none transition focus:border-[#6657c8]" />
              </Field>
            </InputRow>
            <Field label="Upload Student Photo">
              <div className="flex min-h-[120px] cursor-pointer items-center justify-center rounded-[16px] border-2 border-dashed border-[#d9d4e8] bg-[#fffefa] p-6 text-center text-sm text-[#555568] transition hover:border-[#6657c8]">
                Click or drag a file to this area to upload.
                <input type="file" name="photo" accept="image/*" className="hidden" />
              </div>
            </Field>
          </div>

          <h2 className="mt-10 text-lg font-extrabold text-[#171727]">Previous School</h2>
          <div className="mt-6 grid gap-5">
            <InputRow>
              <Field label="School Name">
                <input type="text" name="prevSchool" className="min-h-12 border border-[#d9d4e8] bg-[#fffefa] px-4 text-sm font-medium outline-none transition focus:border-[#6657c8]" />
              </Field>
              <Field label="Last Class">
                <input type="text" name="lastClass" className="min-h-12 border border-[#d9d4e8] bg-[#fffefa] px-4 text-sm font-medium outline-none transition focus:border-[#6657c8]" />
              </Field>
            </InputRow>
            <Field label="Remarks">
              <textarea name="remarks" rows={3} className="resize-none border border-[#d9d4e8] bg-[#fffefa] px-4 py-3 text-sm font-medium outline-none transition focus:border-[#6657c8]" />
            </Field>
          </div>

          <h2 className="mt-10 text-lg font-extrabold text-[#171727]">Parent / Guardian Details</h2>
          <div className="mt-6 grid gap-5">
            <InputRow>
              <Field label="Guardian Name">
                <input type="text" name="guardianName" className="min-h-12 border border-[#d9d4e8] bg-[#fffefa] px-4 text-sm font-medium outline-none transition focus:border-[#6657c8]" />
              </Field>
              <Field label="Relation">
                <input type="text" name="guardianRelation" className="min-h-12 border border-[#d9d4e8] bg-[#fffefa] px-4 text-sm font-medium outline-none transition focus:border-[#6657c8]" />
              </Field>
            </InputRow>
            <InputRow>
              <Field label="Father Name" required>
                <input type="text" name="fatherName" required className="min-h-12 border border-[#d9d4e8] bg-[#fffefa] px-4 text-sm font-medium outline-none transition focus:border-[#6657c8]" />
              </Field>
              <Field label="Occupation">
                <input type="text" name="fatherOccupation" className="min-h-12 border border-[#d9d4e8] bg-[#fffefa] px-4 text-sm font-medium outline-none transition focus:border-[#6657c8]" />
              </Field>
            </InputRow>
            <InputRow>
              <Field label="Education">
                <input type="text" name="fatherEducation" className="min-h-12 border border-[#d9d4e8] bg-[#fffefa] px-4 text-sm font-medium outline-none transition focus:border-[#6657c8]" />
              </Field>
              <Field label="Phone" required>
                <input type="tel" name="fatherPhone" placeholder="023 123 4567" className="min-h-12 border border-[#d9d4e8] bg-[#fffefa] px-4 text-sm font-medium outline-none transition focus:border-[#6657c8]" />
              </Field>
            </InputRow>
            <InputRow>
              <Field label="Mother Name" required>
                <input type="text" name="motherName" required className="min-h-12 border border-[#d9d4e8] bg-[#fffefa] px-4 text-sm font-medium outline-none transition focus:border-[#6657c8]" />
              </Field>
              <Field label="Income">
                <input type="text" name="motherIncome" className="min-h-12 border border-[#d9d4e8] bg-[#fffefa] px-4 text-sm font-medium outline-none transition focus:border-[#6657c8]" />
              </Field>
            </InputRow>
            <InputRow>
              <Field label="Email" required>
                <input type="email" name="parentEmail" required className="min-h-12 border border-[#d9d4e8] bg-[#fffefa] px-4 text-sm font-medium outline-none transition focus:border-[#6657c8]" />
              </Field>
              <Field label="Address">
                <input type="text" name="parentAddress" className="min-h-12 border border-[#d9d4e8] bg-[#fffefa] px-4 text-sm font-medium outline-none transition focus:border-[#6657c8]" />
              </Field>
            </InputRow>
            <InputRow>
              <Field label="Address Line 2">
                <input type="text" name="parentAddress2" className="min-h-12 border border-[#d9d4e8] bg-[#fffefa] px-4 text-sm font-medium outline-none transition focus:border-[#6657c8]" />
              </Field>
              <Field label="City">
                <input type="text" name="parentCity" className="min-h-12 border border-[#d9d4e8] bg-[#fffefa] px-4 text-sm font-medium outline-none transition focus:border-[#6657c8]" />
              </Field>
            </InputRow>
            <InputRow>
              <Field label="State">
                <select name="parentState" defaultValue="" className="min-h-12 border border-[#d9d4e8] bg-[#fffefa] px-4 text-sm font-medium outline-none transition focus:border-[#6657c8]">
                  <option value="" disabled>Select state</option>
                  <option>Greater Accra</option>
                  <option>Eastern</option>
                  <option>Central</option>
                  <option>Western</option>
                  <option>Ashanti</option>
                  <option>Northern</option>
                  <option>Volta</option>
                </select>
              </Field>
              <Field label="Zip Code">
                <input type="text" name="parentZip" className="min-h-12 border border-[#d9d4e8] bg-[#fffefa] px-4 text-sm font-medium outline-none transition focus:border-[#6657c8]" />
              </Field>
            </InputRow>
            <Field label="Anticipated Start Date for Student">
              <input type="date" name="startDate" className="min-h-12 border border-[#d9d4e8] bg-[#fffefa] px-4 text-sm font-medium outline-none transition focus:border-[#6657c8]" />
            </Field>
          </div>

          <h2 className="mt-10 text-lg font-extrabold text-[#171727]">Documents</h2>
          <div className="mt-6 grid gap-5">
            <Field label="File Upload">
              <div className="flex min-h-[120px] cursor-pointer items-center justify-center rounded-[16px] border-2 border-dashed border-[#d9d4e8] bg-[#fffefa] p-6 text-center text-sm text-[#555568] transition hover:border-[#6657c8]">
                Click or drag a file to this area to upload.
                <input type="file" name="documents" multiple className="hidden" />
              </div>
              <p className="text-xs text-[#555568]">Upload Required Documents for Admission</p>
            </Field>
          </div>

          <div className="mt-10 text-center">
            <button
              type="submit"
              className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#6657c8] px-8 text-sm font-extrabold text-white shadow-[0_18px_44px_rgba(102,87,200,0.24)] transition hover:-translate-y-1 hover:bg-[#5546b8]"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
