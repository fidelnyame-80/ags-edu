import { ChevronDown, Menu, User, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Images } from "../assets/Images/Images";

const navLinks = [
  { label: "Home", href: "/", page: "home" },
  {
    label: "About",
    href: "/about/",
    page: "about",
    dropdown: [
      { label: "Welcome", href: "/about/#welcome" },
      { label: "Mission", href: "/about/#mission" },
      { label: "Vision", href: "/about/#vision" },
      { label: "Awards", href: "/about/#awards" },
      { label: "Discover", href: "/about/#discover" },
    ],
  },
  {
    label: "Academics",
    href: "/academics/",
    page: "academics",
    dropdown: [
      { label: "Pre School", href: "/academics/preschool/" },
      { label: "Primary School", href: "/academics/primary-school/" },
      { label: "Junior High School", href: "/academics/junior-high-school/" },
      { label: "Academic Calendar", href: "/academics/#academic-calendar" },
      { label: "Counseling", href: "/academics/#counseling" },
      { label: "Co-Curricular", href: "/academics/#co-curricular" },
    ],
  },
  { label: "Admissions", href: "/admissions/", page: "admissions" },
  {
    label: "Community",
    href: "/community/",
    page: "community",
    dropdown: [
      { label: "Parents Forum", href: "/community/#parents-forum" },
      { label: "AGS Alumni", href: "/community/#ags-alumni" },
      { label: "Sports", href: "/community/#sports" },
      { label: "Transport", href: "/community/#transport" },
      { label: "Cafeteria", href: "/community/#cafeteria" },
      { label: "Events", href: "/community/#events" },
      { label: "News", href: "/news/" },
      {
        label: "Janet C Rickert Library",
        href: "/community/#janet-c-rickert-library",
      },
    ],
  },
  { label: "Contacts", href: "/contacts/", page: "contacts" },
];

const navigate = (href) => {
  if (typeof window === "undefined" || !href.startsWith("/")) return;

  const targetUrl = new URL(href, window.location.origin);
  window.history.pushState({}, "", `${targetUrl.pathname}${targetUrl.hash}`);
  window.dispatchEvent(new Event("ags:navigate"));

  window.setTimeout(() => {
    if (targetUrl.hash) {
      const target = document.querySelector(targetUrl.hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 80);
};

export default function Navbar({ currentPage = "home" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const mobileMenuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((current) => !current);

    if (isMenuOpen) {
      setOpenMobileDropdown(null);
    }
  };
  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    setOpenMobileDropdown(null);
  }, []);
  const toggleMobileDropdown = (label) => {
    setOpenMobileDropdown((current) => (current === label ? null : label));
  };
  const handleNavClick = (event, href) => {
    if (!href.startsWith("/")) return;

    event.preventDefault();
    closeMenu();
    navigate(href);
  };

  useEffect(() => {
    const handleRouteChange = () => closeMenu();

    window.addEventListener("popstate", handleRouteChange);
    window.addEventListener("ags:navigate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
      window.removeEventListener("ags:navigate", handleRouteChange);
    };
  }, [closeMenu]);

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
  }, [closeMenu, isMenuOpen]);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#061a34]/78 px-4 py-3 shadow-[0_12px_32px_rgba(2,10,24,0.16)] backdrop-blur-md sm:px-6 lg:py-2">
      <div ref={mobileMenuRef} className="relative mx-auto max-w-[1200px]">
        <div className="flex items-center justify-between gap-4">
          {/* Left Logo */}
          <div className="flex min-w-0 items-center">
            <a
              href="/"
              onClick={(event) => handleNavClick(event, "/")}
              className="flex min-w-0 items-center gap-2.5 sm:gap-3"
              aria-label="Accra Grammar School home"
            >
              {/* Logo */}
              <div className="h-12 w-12 shrink-0 sm:h-14 sm:w-14">
                <img
                  src={Images.agsLogo}
                  alt="Accra Grammar School Logo"
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              </div>
              <span className="whitespace-nowrap text-xs font-extrabold uppercase tracking-[0.07em] text-white sm:text-sm lg:text-xs xl:text-sm">
                Accra Grammar School
              </span>
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden items-center gap-6 xl:gap-9 lg:flex">
            {navLinks.map((link) => {
              const isActive = link.page === currentPage;

              return (
                <div key={link.label} className="group relative">
                  <a
                    href={link.href}
                    onClick={(event) => handleNavClick(event, link.href)}
                    className={`relative inline-flex items-center gap-1.5 text-base font-medium transition ${
                      isActive
                        ? "text-blue-400"
                        : "text-white hover:text-blue-400"
                    }`}
                  >
                    {link.label}
                    {link.dropdown && (
                      <ChevronDown
                        size={15}
                        strokeWidth={2.2}
                        className="transition group-hover:rotate-180"
                      />
                    )}

                    {isActive && (
                      <span className="absolute -bottom-5 left-0 h-1 w-full rounded-full bg-blue-500" />
                    )}
                  </a>

                  {link.dropdown && (
                    <div className="invisible absolute left-1/2 top-full z-40 min-w-52 -translate-x-1/2 pt-5 opacity-0 transition duration-200 group-hover:visible group-hover:opacity-100">
                      <div className="border border-[#dcd6f3] bg-white p-2 text-[#171727] shadow-[0_22px_70px_rgba(1,8,20,0.18)]">
                        {link.dropdown.map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            onClick={(event) => handleNavClick(event, item.href)}
                            className="block px-4 py-3 text-base font-semibold transition hover:bg-[#f4f1fb] hover:text-[#6657c8]"
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Login Button */}
          <button className="hidden items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-base font-semibold text-white shadow-lg shadow-blue-900/30 transition hover:bg-blue-500 lg:flex">
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
              {navLinks.map((link) => {
                const isActive = link.page === currentPage;
                const isDropdownOpen = openMobileDropdown === link.label;

                return (
                  <div key={link.label}>
                    <div
                      className={`flex items-center rounded-2xl transition ${
                        isActive
                          ? "bg-blue-500/15 text-blue-400"
                          : "text-white hover:bg-white/5 hover:text-blue-400"
                      }`}
                    >
                      <a
                        href={link.href}
                        onClick={(event) => handleNavClick(event, link.href)}
                        className="block min-w-0 flex-1 px-4 py-3 text-base font-medium"
                      >
                        {link.label}
                      </a>

                      {link.dropdown && (
                        <button
                          type="button"
                          aria-label={`${isDropdownOpen ? "Collapse" : "Expand"} ${link.label} menu`}
                          aria-expanded={isDropdownOpen}
                          onClick={() => toggleMobileDropdown(link.label)}
                          className="mr-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-current transition hover:bg-white/10"
                        >
                          <ChevronDown
                            size={16}
                            strokeWidth={2.2}
                            className={`transition ${isDropdownOpen ? "rotate-180" : ""}`}
                          />
                        </button>
                      )}
                    </div>

                    {link.dropdown && isDropdownOpen && (
                      <div className="ml-4 mt-1 grid gap-1 border-l border-white/10 pl-3">
                        {link.dropdown.map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            onClick={(event) => handleNavClick(event, item.href)}
                            className="rounded-xl px-4 py-2 text-sm font-semibold text-white/78 transition hover:bg-white/5 hover:text-blue-300"
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <button
              type="button"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-4 py-3 text-base font-semibold text-white shadow-lg shadow-blue-900/30 transition hover:bg-blue-500"
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
