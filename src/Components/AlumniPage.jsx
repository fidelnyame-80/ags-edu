import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Images } from "../assets/Images/Images";
import MotionText from "./MotionText";

const alumni = [
  {
    id: 1,
    name: "Audrey Issaka",
    year: 2017,
    profession: "BL. Candidate 2026",
    workplace: "Ghana School of Law, Accra",
    image: Images.alumni2017Audrey,
    story:
      "AGS has been very instrumental in my academic journey. In AGS, I was able to build a strong foundation in academics, and it has taken me a long way, and it still is. The commitment and dedication of the teachers is incomparable to any I've ever seen before and I'm grateful and proud to have attended AGS. As long as any student works hard here, there's no way they won't make it in life.",
  },
  {
    id: 2,
    name: "Awuraa Abena Afriyie Barfi",
    year: 2017,
    profession: "Public Health Nutritionist",
    workplace: "Ghana Atomic Energy Commission",
    image: Images.alumni2017Abenabarfi,
    story:
      "I graduated from AGS in 2017. I was one of the first 7 students who began the school in 2007. I had my secondary education in Methodist Girls' High School, Mamfe in the eastern region where I offered Home Economics. I got admission into the University of Health and Allied Sciences, Hohoe campus in 2020 right after secondary school where I graduated with a Bachelor's degree in Public Health (Nutrition). I believe strongly that nutrition is a very important aspect of health especially among children, pregnant women and lactating mothers. I have worked as an intern at the Shai-Osudoku District Hospital and Shai-Osudoku District Health Directorate all in Dodowa, Accra. I also did a 2 months field work in Akatsi Xavi CHPS Compound, Volta Region where I assisted the nurses to deliver health care to patients. I am currently doing my national service at the Nutrition Research Center under the Ghana Atomic Energy Commission where I assist the researchers in doing research work.",
  },
  {
    id: 3,
    name: "Dr. Solomon Anyomi",
    year: 2016,
    profession: "Medical Doctor",
    workplace: "Ho Teaching Hospital",
    image: Images.alumni2016DrSoloAnyomi,
    story:
      "My academic journey at Accra Grammar School began in 2009, where, over the years, I grew within a steady and supportive environment that nurtured both my curiosity and discipline. I completed my studies in 2016, a milestone that opened the door for my admission to St. Peter's Senior High School, where I continued to build on this foundation and further developed my academic interests. My passion for healthcare led me to the University of Health and Allied Sciences, where I pursued a degree in Medicine/Surgery (MB ChB). I currently work as a first year medical doctor at the Ho Teaching Hospital, serving in a dynamic clinical environment that allows me to impact lives daily. Looking back, AGS played a significant role in shaping my academic discipline, confidence, and drive for excellence. With its dedicated teachers and supportive community, the school provided a strong foundation that continues to guide my professional journey.",
  },
  {
    id: 4,
    name: "Celestine Esinam Vormawor Esq.",
    year: 2016,
    profession: "Barrister & Solicitor",
    workplace: "Herald Law Firm",
    image: Images.alumni2016CelestineEsq,
    story:
      "I graduated from AGS in 2016 as the overall best female student in the Kpone Katamanso District Assembly. I attended Aburi Girls' Senior High School and offered General Arts. I proceeded to the University of Professional Studies, Accra where I graduated with a Bachelor of Laws Degree. I proceeded to the Ghana School of Law and was called to the Bar as a Barrister and Solicitor of the Supreme Court of Ghana upon my completion. I am currently a Junior Associate at Herald Law Firm. AGS played a pivotal role in who I am today. It shaped me in so many ways. The teachers and staff at AGS were more like family to us. They did not only focus on our academics but paid attention to our social, emotional, cultural, religious and creative needs. They made sure to push us to reach our full potential. They believed in us even when we didn't believe in ourselves and made sure to guide us at all times. I can boldly say that the values, knowledge, and skills I acquired in AGS have been the foundation of my success. To the students, I say, take advantage of the opportunities available to you. Work hard, stay focused, and never give up on your dreams. Believe in yourself and your abilities and allow yourself to enjoy your time in AGS. Once you find yourself in AGS, you are destined for greatness so strive to achieve that. AGS is indeed your Academic Passport to the World.",
  },
  {
    id: 5,
    name: "Barfi Kweku",
    year: 2016,
    profession: "Computer Science Professional",
    workplace: "University of Ghana Computing Systems",
    image: Images.alumni2016Berfi,
    story:
      "My journey began at Accra Grammar School, where I was one of the seven pioneering students who started the school seventeen years ago. I spent nine formative years from Grade 1 through Grade 9, and the school became more than just a place of learning — it was a space for growth, discovery, and endless possibilities. Under the guidance of dedicated teachers, I developed a passion for learning and the discipline to succeed, culminating in my success in the Basic Education Certificate Examination. This solid foundation prepared me for the challenges ahead in my academic journey. After completing my studies at AGS, I advanced to Ghana National College, Cape Coast, where I pursued General Science. This experience deepened my interest in technology and problem-solving, leading me to Valley View University, where I earned a Bachelor's degree in Computer Science. Today, I am with the University of Ghana Computing Systems, applying my expertise in IT security and data analysis to create innovative solutions and drive impactful change. Accra Grammar School sparked my dreams and set me on this exciting path. It's the perfect place to inspire young minds and unlock their potential.",
  },
  {
    id: 6,
    name: "Vanessa Selasi Vowotor",
    year: 2015,
    profession: "Aircraft Maintenance Technician",
    workplace: "United Airlines",
    image: Images.alumni2015Vanessa,
    story:
      "I graduated from AGS in 2015 and was placed in Achimota Senior High School where I offered Science Programme. I proceeded to Embry-Riddle Aeronautical University in Daytona Beach Florida, where I graduated with a Bachelor's Degree in Aviation Maintenance Science with an area of concentration in Safety and Aircraft Accident Investigation and a minor in Avionics Line Maintenance. I have worked in the Reciprocating Engine Overhaul shop as a Repairer Station Coordinator. Currently, I work for United Airlines as a Line Technician based out of Washington Dulles International Airport. I work on the entirety of the United Airlines fleet, ensuring safety of Aircraft. Accra Grammar School was the integral foundation for my education, and I do believe I would not be where I am today without the experience I had in AGS. The role I play in United Airlines is a very important one because aircraft maintenance technicians are integral in ensuring the safety of a flight. I still learn something new every day and I encourage you students to believe in yourself and have passion in anything and everything that you do. Never be afraid to ask questions and to speak up if you feel passionate about something.",
  },
  {
    id: 7,
    name: "Heartwill Capo",
    year: 2015,
    profession: "Marketing Professional",
    workplace: "",
    image: Images.alumni2015Heartwill,
    story:
      "Accra Grammar School has always been more than just a school to me; it has been a home. I am forever grateful to the incredible teachers who not only taught me the value of unity but also treated us all with love and care. To the current students: treasure every moment you spend at AGS, for there is truly no place like it. Embrace the values and virtues you are being taught — they will shape your lives just as they did mine.",
  },
  {
    id: 8,
    name: "Ashitei Vida Kai",
    year: 2013,
    profession: "Business Administration",
    workplace: "Fidelity Bank",
    image: Images.alumni2013Vida,
    story:
      "To the students, teachers, and parents of Accra Grammar School — never underestimate the power of dedication and teamwork. Every effort you invest in learning and growth brings you one step closer to success. Keep believing, keep striving, and know that your hard work today is the foundation of a brighter future.",
  },
  {
    id: 9,
    name: "Quaye Caleb Tetteh",
    year: 2013,
    profession: "CEO, KAB Farms & Field Agronomist",
    workplace: "Eliho-Touton Ghana Ltd",
    image: Images.alumni2013QuayeCaleb,
    story:
      "I graduated from AGS in 2013 and continued to Mawuli School where I offered Agriculture Science. I moved on to University College of Agriculture and Environmental Studies, Bunso where I graduated with a Bachelors Degree in Sustainable Agriculture. Currently, I am the CEO of KAB Farms producing healthy pigs for sale at market weight to consumers and other pig farmers. The aim of KAB Farms is to grow to become a global swine producer and a certified swine genetic breeding company. I also work as a Field Agronomist at Eliho-Touton Ghana Ltd., a Cocoa sourcing company in Ahafo Region. AGS is a school where staff always believe in the potential of every student, and for that reason, every student goes into the world being unique. I urge the entire AGS family to keep striving for greatness. Your tireless efforts, creativity and perseverance will continue to shape students for their bright future.",
  },
  {
    id: 10,
    name: "Prince Andrew Adamtey",
    year: 2013,
    profession: "Second Lieutenant",
    workplace: "Royal Military Academy, United Kingdom",
    image: Images.alumni2013Prince,
    story:
      "Prince Andrew Adamtey is a former student of Accra Grammar School, a proud member of the rising class of 2013 and a leading member of the AGS Cadet Corps. Prince is now Second Lieutenant Prince Andrew Adamtey at the Royal Military Academy of the United Kingdom.",
  },
  {
    id: 11,
    name: "Dzigbordi Kaisah Torsu",
    year: 2013,
    profession: "Business Administration",
    workplace: "Fidelity Bank",
    image: Images.alumni2013Kaisah,
    story:
      "I was part of the third batch to graduate from Accra Grammar School. After completing my studies there, I proceeded to Ideal College, where I pursued Business. From there, I continued to Kwame Nkrumah University of Science and Technology (KNUST) to study Business Administration. I am currently working as a teller at Fidelity Bank. AGS is the best place to enrol your children. The environment is serene, the teachers are welcoming, and the entire school community feels like one big family where everyone looks out for each other. AGS provides an exceptional foundation for students to rise confidently on the academic ladder. The school truly serves as an academic passport to the world! To all students, my word of encouragement is this: wherever you find yourselves, always strive to give your very best. Remember, every small effort counts toward your success. Stay determined, work hard, and your future will be brighter than you imagine.",
  },
  {
    id: 12,
    name: "Caleb Tetteh",
    year: 2013,
    profession: "University Lecturer",
    workplace: "University of Ghana",
    image: Images.alumni2013Caleb,
    story:
      "My time at AGS shaped my intellectual curiosity and my passion for teaching. The dedication of my teachers inspired me to pursue academia, and I now have the privilege of shaping the next generation of leaders. AGS taught me that education is the most powerful tool for transformation, and I carry that belief into my lecture hall every day. The school's legacy of excellence lives on in all of us.",
  },
  {
    id: 13,
    name: "Thomas Thompson",
    year: 2012,
    profession: "Business Analyst",
    workplace: "Brand Metrica",
    image: Images.alumni2012ThomasThompson,
    story:
      "I graduated from AGS in 2012, after which I attended Ofori Panin Senior High School, where I pursued General Arts. My passion for the intersection of business and technology led me to ITMO University, where I earned a Bachelor's degree in Business Informatics. I furthered my education at the Higher School of Economics, completing two Master's degrees in Business Analytics and International Business. Currently, I work as a Business Analyst at Brand Metrica, where I apply my expertise to help drive data-informed decisions in the business world. Accra Grammar School helped shape the person I am today by instilling in me a sense of discipline, curiosity, and a desire to learn. The values I learnt at AGS continue to guide me in my personal and professional lives. To the pupils, seize every opportunity to learn and challenge yourself; your potential is limitless! To the teaching staff, I'd like to express my profound appreciation to the teachers and staff whose guidance and support have had a long-term impact on my educational journey. Thank you for developing my curiosity and inspiring me to dream big. I apply the things you taught me not only in school, but also in everyday life. Thank you for being an inspiring and important character in my early years. May the good Lord continue to Bless you and Keep you!",
  },
  {
    id: 14,
    name: "Paa Kwabena Asiamah",
    year: 2012,
    profession: "Administrative and Information Officer",
    workplace: "Ghana Christian International High School",
    image: Images.alumni2012Paa,
    story:
      "Reflecting on my time at Accra Grammar School, I realize how deeply it has influenced both my personal and professional development. The school instilled in me core values of discipline and perseverance that have been essential throughout my journey. It also fostered a strong sense of community, with friendships and connections that continue to enrich my life. Many of us, as alumni, carry these lessons forward, using the solid foundation Accra Grammar School provided to navigate the world with confidence and empathy. Indeed Accra Grammar School is the academic passport to the world. One of the things I took from teachers in the school was that lessons learnt, both academically and personally, will stay with you long after you leave. I urge the students to keep pushing forward to build a strong foundation for their future. God bless AGS and God bless us all.",
  },
  {
    id: 15,
    name: "Joseph Kwablah Tetteh-Tsu",
    year: 2012,
    profession: "Medical Doctor",
    workplace: "37 Military Hospital",
    image: Images.alumni2012DrJoseph,
    story:
      "I graduated from Accra Grammar School in 2012. I was placed at PRESEC Legon and offered Science with Biology. From there, I enrolled at the University of Ghana Legon Medical School. Currently, I work at the 37 Military Hospital Maternity Ward as a 1st year doctor. AGS is an exceptional school with dedicated teachers, supportive staff, and engaging curriculum which creates an environment where students thrive both academically and personally. To the students: Embrace each challenge as an opportunity to grow, and every setback as a chance to learn. With determination and a positive attitude, you can achieve greatness.",
  },
  {
    id: 16,
    name: "David Anyomi",
    year: 2012,
    profession: "Marine Engineer",
    workplace: "",
    image: Images.alumni2012DavidAnyomi,
    story:
      "Lots of people have excelled in various ways since the inception of AGS. Collectively as parents, staff and students of the school, we need to take the first step and be focused in what we are doing. We will be giving honor in our utmost work and studies. Without overworking ourselves, let us give our 100% and be serious and earnest in every task we attempt. Let us do it with passion and enthusiasm so that doors will be opened to us as a school. AGS: Academic passport to the world.",
  },
  {
    id: 17,
    name: "Daisy Majoie Agbenyah",
    year: 2011,
    profession: "Senior Administrative Manager",
    workplace: "HR-MOH, Shai-Osudoku District Hospital, Dodowa",
    image: Images.alumni2011,
    story:
      "I am the first school prefect of Accra Grammar School. The brave pioneer class of seven students who wrote the first ever BECE in AGS in 2011. I was placed in Aburi Girls Senior High School where I offered science program. I enrolled at the Kwame Nkrumah University of Science and Technology (KNUST). Currently, I work at the Shai-Osudoku District Hospital, Dodowa. I am a Senior Administrative Manager, Health Training Institutions' Unit, HR-MOH. AGS is simply the school you wished to have attended. A home away from home, is my simplest description of it. To many of us alumni, it's one of the best foundation blocks we were privileged to have had and for which we are forever grateful.",
  },
];

const years = [2011, 2012, 2013, 2015, 2016, 2017];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

function AlumniYearTabs({ selectedYear, onYearChange }) {
  return (
    <div className="overflow-x-auto pb-2 scrollbar-hide">
      <div className="flex gap-2">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => onYearChange(year)}
            className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 ${
              selectedYear === year
                ? "bg-white text-[#171727] shadow-[0_0_0_2px_#6657c8]"
                : "bg-[#f0eef5] text-[#555568] hover:bg-[#e5e2ef]"
            }`}
          >
            {year}
          </button>
        ))}
      </div>
    </div>
  );
}

function AlumniCard({ alumnus }) {
  return (
    <motion.article
      variants={cardVariants}
      className="group rounded-2xl border border-[#e8e5f0] bg-white p-6 shadow-[0_4px_24px_rgba(67,56,37,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(67,56,37,0.1)] sm:p-8 lg:p-10"
    >
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="shrink-0 md:w-[220px] lg:w-[260px]">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={alumnus.image}
              alt={alumnus.name}
              className="h-full w-full object-cover object-top"
              loading="lazy"
            />
          </div>
          <div className="mt-4 md:mt-5">
            <h3 className="text-xl font-bold text-[#171727] sm:text-2xl">
              {alumnus.name}
            </h3>
            <p className="mt-1 text-sm font-semibold text-[#6657c8]">
              {alumnus.profession}
            </p>
            {alumnus.workplace && (
              <p className="mt-0.5 text-sm text-[#555568]">
                {alumnus.workplace}
              </p>
            )}
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-base leading-8 text-[#4f4f62] sm:text-lg">
            {alumnus.story}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

export default function AlumniPage() {
  const [selectedYear, setSelectedYear] = useState(2017);

  const filteredAlumni = alumni.filter((a) => a.year === selectedYear);

  return (
    <main className="bg-[#fffefa] text-[#171727]">
      <section className="px-5 pb-4 pt-24 sm:px-8 lg:px-20 lg:pt-32">
        <div className="mx-auto max-w-[1180px]">
          <MotionText as="p" className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#6657c8]">
            AGS / Alumni
          </MotionText>
          <MotionText
            as="h1"
            delay={0.08}
            className="mt-4 text-[2.35rem] font-bold leading-[1.04] text-[#171727] sm:text-[3.15rem] lg:text-[3.6rem]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Alumni Stories
          </MotionText>
          <MotionText
            as="p"
            delay={0.12}
            className="mt-5 max-w-2xl text-lg leading-8 text-[#555568]"
          >
            The achievements of our alumni reflect the values and education that
            define Accra Grammar School. Each story is a testament to the
            foundation laid here and the bright futures that follow.
          </MotionText>

          <div className="mt-10">
            <AlumniYearTabs
              selectedYear={selectedYear}
              onYearChange={setSelectedYear}
            />
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-[1180px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedYear}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
              className="space-y-6"
            >
              {filteredAlumni.map((alumnus) => (
                <AlumniCard key={alumnus.id} alumnus={alumnus} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}
