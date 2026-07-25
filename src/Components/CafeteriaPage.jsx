import { Soup, Sun, Utensils } from "lucide-react";
import MotionText from "./MotionText";

const dayOrder = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const menuItems = [
  {
    category: "Snacks",
    icon: Sun,
    items: [
      {
        name: "Meat Pies",
        description:
          "Supplied to the school fresh from the baker, great with a fresh juice or cold beverage.",
      },
      {
        name: "Hot Pancakes",
        description:
          "The flat morning pancakes are available at the snack pergola in the mornings, can be combined with a beverage of your choice.",
      },
    ],
  },
  {
    category: "Lunch",
    icon: Soup,
    items: [
      {
        name: "Jollof Rice",
        description:
          "This flavorful rice dish stew made with rice, chili peppers, and meat or fish.",
      },
      {
        name: "Red Red",
        description:
          "Simple but always a favorite, ripe yellow plantains deep fried and served with black eye peas with a dash of spice and palm oil. Occasionally served with a hearty black-eyed stew.",
      },
    ],
  },
];

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
          </div>
        </div>
      </section>

      <section className="bg-[#f7f4ed] px-5 py-16 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-[1180px]">
          <MotionText className="text-center">
            <SectionLabel>Menu</SectionLabel>
            <h2
              className="mx-auto mt-5 text-[2rem] font-bold leading-[1.06] text-[#171727] sm:text-[2.5rem]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Weekly Menu
            </h2>
          </MotionText>

          <div className="mt-10 overflow-hidden rounded-2xl border border-[#e8e5f0] bg-white shadow-[0_4px_24px_rgba(67,56,37,0.05)]">
            <div className="grid grid-cols-5 border-b border-[#e8e5f0] bg-[#f7f4ed]">
              {dayOrder.map((day) => (
                <div
                  key={day}
                  className="px-4 py-4 text-center text-xs font-extrabold uppercase tracking-[0.14em] text-[#6657c8]"
                >
                  {day}
                </div>
              ))}
            </div>
            {menuItems.map((section) => {
              const Icon = section.icon;
              return (
                <div key={section.category}>
                  <div className="flex items-center gap-2 border-b border-[#eeeaf6] bg-[#fcfaf5] px-4 py-3">
                    <Icon size={14} strokeWidth={2.4} className="text-[#6657c8]" />
                    <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#6657c8]">
                      {section.category}
                    </span>
                  </div>
                  {section.items.map((item) => (
                    <div
                      key={item.name}
                      className="grid grid-cols-5 border-b border-[#eeeaf6] last:border-b-0"
                    >
                      <div className="col-span-5 px-5 py-4 sm:col-span-1 sm:border-r sm:border-[#eeeaf6]">
                        <p className="text-sm font-extrabold text-[#171727]">
                          {item.name}
                        </p>
                      </div>
                      <div className="col-span-5 px-5 py-4 sm:col-span-4">
                        <p className="text-sm leading-7 text-[#555568]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#061a34] px-5 py-16 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-[1180px] text-center">
          <MotionText>
            <SectionLabel light>Dining Hall</SectionLabel>
            <h2
              className="mx-auto mt-5 max-w-[680px] text-[2rem] font-bold leading-[1.06] text-white sm:text-[2.5rem]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Good food fuels great learning.
            </h2>
            <p className="mx-auto mt-5 max-w-[640px] text-base leading-8 text-blue-100">
              Our Dining Hall and snack pergola provide students with nutritious
              meals in a welcoming environment every school day.
            </p>
          </MotionText>
        </div>
      </section>
    </main>
  );
}
