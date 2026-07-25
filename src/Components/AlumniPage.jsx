import { Images } from "../assets/Images/Images";

const alumniImages = [
  Images.alumni2017Audrey,
  Images.alumni2017Abenabarfi,
  Images.alumni2016DrSoloAnyomi,
  Images.alumni2016CelestineEsq,
  Images.alumni2016Berfi,
  Images.alumni2015Vanessa,
  Images.alumni2015Heartwill,
  Images.alumni2013Vida,
  Images.alumni2013QuayeCaleb,
  Images.alumni2013Prince,
  Images.alumni2013Kaisah,
  Images.alumni2013Caleb,
  Images.alumni2012ThomasThompson,
  Images.alumni2012Paa,
  Images.alumni2012DrJoseph,
  Images.alumni2012DavidAnyomi,
  Images.alumni2011,
];

export default function AlumniPage() {
  return (
    <main className="bg-[#fffefa] text-[#171727]">
      <section className="px-5 pb-4 pt-24 sm:px-8 lg:px-20 lg:pt-32">
        <div className="mx-auto max-w-[1180px]">
          <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#6657c8]">
            AGS / AGS Alumni
          </p>
          <h1
            className="mt-4 text-[2.35rem] font-bold leading-[1.04] text-[#171727] sm:text-[3.15rem] lg:text-[3.6rem]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            AGS Alumni
          </h1>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-[1180px]">
          <div className="columns-2 gap-3 sm:columns-3 lg:columns-4">
            {alumniImages.map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                loading="lazy"
                className="mb-3 w-full rounded-[20px]"
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
