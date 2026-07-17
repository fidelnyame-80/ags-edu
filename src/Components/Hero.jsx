import { useEffect, useState } from "react";
import { Images } from "../assets/Images/Images";
import MotionText from "./MotionText";

//function to handle hero nav link clicks, preventing default and using history API for smooth navigation and scroll to top
const handleHeroNavClick = (event, href) => {
  event.preventDefault();

  const targetUrl = new URL(href, window.location.origin);
  window.history.pushState({}, "", `${targetUrl.pathname}${targetUrl.hash}`);
  window.dispatchEvent(new Event("ags:navigate"));

  window.scrollTo({ top: 0, behavior: "smooth" });
};

const SCHOOL_BG = Images.heroImg1;
const HERO_VIDEO_SRC = "/videos/Ags%20Droneview.optimized.mp4";
const WELCOME_TEXT = "Welcome to Accra Grammar School";
const TAGLINE_TEXT = "Shaping leaders, building futures";
const PASSPORT_TEXT = "Academic passport to the world";
const HERO_PHRASES = [TAGLINE_TEXT, PASSPORT_TEXT];
const PHRASE_VISIBLE_MS = 3200;
const PHRASE_SWAP_GAP_MS = 650;
const PHRASE_TRANSITION =
  "opacity 1.05s cubic-bezier(0.22, 1, 0.36, 1), transform 1.05s cubic-bezier(0.22, 1, 0.36, 1)";

export default function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const [activePhraseIndex, setActivePhraseIndex] = useState(0);
  const [showActivePhrase, setShowActivePhrase] = useState(false);

  useEffect(() => {
    let currentIndex = 0;

    const typingInterval = window.setInterval(() => {
      currentIndex += 1;
      setTypedText(WELCOME_TEXT.slice(0, currentIndex));

      if (currentIndex >= WELCOME_TEXT.length) {
        window.clearInterval(typingInterval);
      }
    }, 70);

    return () => window.clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    if (typedText !== WELCOME_TEXT) return undefined;

    let cycleTimer;
    let swapTimer;

    const runCycle = () => {
      cycleTimer = window.setTimeout(() => {
        setShowActivePhrase(false);

        swapTimer = window.setTimeout(() => {
          setActivePhraseIndex((currentIndex) =>
            (currentIndex + 1) % HERO_PHRASES.length
          );
          setShowActivePhrase(true);
          runCycle();
        }, PHRASE_SWAP_GAP_MS);
      }, PHRASE_VISIBLE_MS);
    };

    const introTimer = window.setTimeout(() => {
      setShowActivePhrase(true);
      runCycle();
    }, 220);

    return () => {
      window.clearTimeout(introTimer);
      window.clearTimeout(cycleTimer);
      window.clearTimeout(swapTimer);
    };
  }, [typedText]);

  const activePhrase = HERO_PHRASES[activePhraseIndex];
  const isTaglineActive = activePhraseIndex === 0;

  return (
    <section
      className="relative overflow-hidden"
      style={{ height: "clamp(36rem, 60vw, 42rem)" }}
    >
      {/* Background media */}
      <img
        src={SCHOOL_BG}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
        aria-hidden="true"
        decoding="async"
      />
      <video
        className="absolute inset-0 h-full w-full object-cover object-center"
        style={{ transform: "translateZ(0)" }}
        autoPlay
        muted
        playsInline
        loop
        preload="auto"
        poster={SCHOOL_BG}
        aria-hidden="true"
        tabIndex={-1}
        disablePictureInPicture
      >
        <source src={HERO_VIDEO_SRC} type="video/mp4" />
      </video>

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0 sm:hidden"
        style={{
          background:
            "linear-gradient(96deg, rgba(5,15,45,0.74) 0%, rgba(8,24,64,0.58) 60%, rgba(12,33,82,0.34) 80%, rgba(12,33,82,0.1) 100%)",
        }}
      />
      <div
        className="absolute inset-0 hidden sm:block"
        style={{
          background:
            "linear-gradient(105deg, rgba(5,15,45,0.72) 0%, rgba(10,30,80,0.5) 55%, rgba(15,40,100,0.3) 65%, transparent 80%)",
        }}
      />
      

      {/* Content */}
      <div
        className="relative z-10 mx-auto flex h-full items-center lg:items-start"
        style={{
          paddingInline: "clamp(1.5rem, 6vw, 5rem)",
          paddingTop: "clamp(4rem, 8vw, 7rem)",
          paddingBottom: "clamp(2rem, 6vw, 6rem)",
          maxWidth: "clamp(75rem,92vw,90rem)",
        }}
      >
        {/* Left: Text */}
        <div className="flex-1" style={{ maxWidth: "clamp(24rem,40vw,42rem)" }}>
          <MotionText
            amount={0.6}
            className="flex items-center text-blue-100/72"
            style={{ marginBottom: "clamp(.8rem,2vw,1.5rem)", gap: "clamp(.8rem,1.6vw,1.3rem)" }}
          >
            <span className="h-px w-11 bg-current" aria-hidden="true" />
              <p className="text-sm font-semibold uppercase tracking-[0.34em]">
              EST. 1996 <span aria-hidden="true">&middot;</span> ACCRA, GHANA
            </p>
          </MotionText>

          <MotionText
            as="h1"
            amount={0.6}
            delay={0.08}
            className="mb-1 font-extrabold leading-tight text-white"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(2rem, 4.5vw, 5rem)",
              letterSpacing: "0",
              textShadow: "0 2px 24px rgba(0,0,0,0.3)",
              minHeight: "clamp(4.75rem, 8vw, 11rem)",
            }}
          >
            {typedText}
            {typedText !== WELCOME_TEXT && (
              <span
                className="ml-1 inline-block h-[0.8em] animate-pulse rounded-full bg-white align-[-0.08em]"
                style={{ width: "clamp(2px,.25vw,4px)" }}
                aria-hidden="true"
              />
            )}
          </MotionText>

          <div className="mb-4 lg:mb-3" style={{ minHeight: "2.25rem" }}>
            <p
              className="text-blue-200"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(1rem,1.3vw,1.3rem)",
                fontWeight: 700,
                letterSpacing: "0",
                minHeight: "1.8em",
                textShadow: "0 2px 18px rgba(0,0,0,0.24)",
                opacity: showActivePhrase ? 1 : 0,
                transform: showActivePhrase
                  ? "translateY(0)"
                  : isTaglineActive
                    ? "translateY(24px)"
                    : "translateY(-24px)",
                transition: PHRASE_TRANSITION,
              }}
            >
              {activePhrase}
            </p>
          </div>

          <div
            className="mb-6 rounded-full lg:mb-4"
            style={{ height: "4px", width: "clamp(3rem,4vw,5rem)", background: "#3b82f6" }}
          />

          <MotionText
            as="p"
            amount={0.6}
            delay={0.16}
            className="leading-relaxed text-blue-100"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(.95rem,1.1vw,1.08rem)",
              fontWeight: 300,
              maxWidth: "clamp(20rem,30vw,28rem)",
              opacity: 0.92,
              marginBottom: "clamp(1.5rem,3vw,3rem)",
            }}
          >
            Accra Grammar School is committed to academic excellence, character
            development, and leadership in a supportive community.
          </MotionText>

          <div className="flex flex-wrap" style={{ gap: "clamp(.8rem,1.6vw,1.3rem)" }}>
            <a
              href="/admissions/" onClick={(event) => handleHeroNavClick(event, "/admissions/")}
              className="flex items-center gap-2 rounded-full font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(30,100,220,0.45)]"
              style={{
                background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
                fontSize: "clamp(.88rem,.9vw,1rem)",
                paddingInline: "clamp(1.25rem,2vw,2rem)",
                paddingBlock: "clamp(.7rem,1vw,.95rem)",
              }}
            >
              Apply Now
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <a
              href="/about/" onClick={(event) => handleHeroNavClick(event, "/about/")}
              className="flex items-center gap-2 rounded-full font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
              style={{
                border: "1.5px solid rgba(255,255,255,0.55)",
                fontSize: "clamp(.88rem,.9vw,1rem)",
                paddingInline: "clamp(1.25rem,2vw,2rem)",
                paddingBlock: "clamp(.7rem,1vw,.95rem)",
                background: "rgba(255,255,255,0.06)",
              }}
            >
              Learn More
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
