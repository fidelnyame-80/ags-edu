import { Menu, User, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Images } from "../assets/Images/Images";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const navLinks = [
    "Home",
    "About",
    "Academics",
    "Admissions",
    "Community",
    "Contacts",
  ];

  const toggleMenu = () => setIsMenuOpen((current) => !current);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const handleOutsideClick = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [isMenuOpen]);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#061a34]/78 px-4 py-3 shadow-[0_12px_32px_rgba(2,10,24,0.16)] backdrop-blur-md sm:px-6 lg:py-2">
      <div ref={mobileMenuRef} className="relative mx-auto max-w-[1200px]">
        <div className="flex items-center justify-between gap-4">
          {/* Left Logo / School Info */}
          <div className="flex min-w-0 items-center gap-3 sm:gap-4">
            {/* Logo */}
            <div className="h-14 w-14 shrink-0 sm:h-[3.75rem] sm:w-14">
              <img
                src={Images.agsLogo}
                alt="Accra Grammar School Logo"
                className="h-full w-full object-contain"
              />
            </div>

            {/* Divider */}
            <div className="my-2 hidden h-16 w-px bg-white/30 sm:block" />

            {/* School Text */}
            <div className="min-w-0 sm:w-[15rem]">
              <h1 className="text-sm font-semibold tracking-wide text-white sm:text-base">
                ACCRA GRAMMAR SCHOOL
              </h1>
              <p className="mt-1 text-xs text-white/80 sm:mt-2 sm:text-sm">
                Integrity. Leadership. Excellence.
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className={`relative text-sm font-medium transition ${
                  link === "Home"
                    ? "text-blue-400"
                    : "text-white hover:text-blue-400"
                }`}
              >
                {link}

                {link === "Home" && (
                  <span className="absolute -bottom-5 left-0 h-1 w-full rounded-full bg-blue-500" />
                )}
              </a>
            ))}
          </div>

          {/* Login Button */}
          <button className="hidden items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 transition hover:bg-blue-500 lg:flex">
            <User size={20} fill="white" />
            Login
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={toggleMenu}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation Panel */}
        <div
          id="mobile-navigation"
          className={`absolute left-0 right-0 top-full z-30 pt-4 transition-all duration-300 ease-out lg:hidden ${
            isMenuOpen
              ? "visible translate-y-0 opacity-100"
              : "pointer-events-none invisible -translate-y-3 opacity-0"
          }`}
        >
          <div className="rounded-[1.75rem] border border-white/12 bg-[#081a35]/92 p-4 shadow-[0_24px_60px_rgba(1,8,20,0.55)] backdrop-blur-xl">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  onClick={closeMenu}
                  className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    link === "Home"
                      ? "bg-blue-500/15 text-blue-400"
                      : "text-white hover:bg-white/5 hover:text-blue-400"
                  }`}
                >
                  {link}
                </a>
              ))}
            </div>

            <button
              type="button"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 transition hover:bg-blue-500"
            >
              <User size={18} fill="white" />
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
