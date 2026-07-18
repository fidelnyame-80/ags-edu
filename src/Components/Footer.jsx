import React from "react";
import {
  ArrowUpRight,
  BookOpen,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Images } from "../assets/Images/Images";

const footerLinks = [
  {
    title: "School",
    links: [
      { label: "About", href: "/about/" },
      { label: "Academics", href: "/academics/" },
      { label: "Admissions", href: "/admissions/" },
      { label: "Community", href: "/community/" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Student Life", href: "/community/#events" },
      { label: "Alumni", href: "/community/#ags-alumni" },
      { label: "News", href: "/news/" },
      { label: "Contacts", href: "/contacts/" },
    ],
  },
];

const contactItems = [
  {
    icon: MapPin,
    text: "Oyibi, Accra, Ghana",
  },
  {
    icon: Phone,
    text: "+233 (0)27-700-0034",
  },
  {
    icon: Mail,
    text: "admin@agsedu.org",
  },
];

const FooterMotionStyles = React.memo(function FooterMotionStyles() {
  return (
    <style>
      {`
        @keyframes footerFloatA {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
          42% { transform: translate3d(8px, -10px, 0) rotate(2deg); }
          76% { transform: translate3d(-5px, 6px, 0) rotate(-1deg); }
        }

        @keyframes footerFloatB {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(-4deg); }
          50% { transform: translate3d(-8px, 8px, 0) rotate(3deg); }
        }

        @keyframes footerDash {
          to { stroke-dashoffset: -72; }
        }

        .footer-float-a {
          animation: footerFloatA 8.5s ease-in-out -1.5s infinite;
        }

        .footer-float-b {
          animation: footerFloatB 9.5s ease-in-out -3s infinite;
        }

        .footer-rocket {
          animation: footerFloatA 10.5s ease-in-out -2.2s infinite;
        }

        .footer-dash {
          animation: footerDash 4.5s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .footer-float-a,
          .footer-float-b,
          .footer-rocket,
          .footer-dash {
            animation: none;
          }
        }
      `}
    </style>
  );
});

const FooterArtwork = React.memo(function FooterArtwork() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden text-[#6657c8]" aria-hidden="true">
      <svg
        className="footer-float-a absolute -left-8 top-12 h-24 w-36 opacity-30 sm:left-8 sm:h-28 sm:w-44"
        viewBox="0 0 220 140"
        fill="none"
      >
        <path
          d="M4 78c28-31 58-34 91-7s54 28 78 2 38-22 45-5"
          stroke="#49bd7a"
          strokeLinecap="round"
          strokeWidth="5"
        />
      </svg>

      <svg
        className="footer-float-b absolute right-4 top-10 h-20 w-20 opacity-30 sm:right-[10%] sm:h-24 sm:w-24"
        viewBox="0 0 120 120"
        fill="none"
      >
        <path
          d="M12 24 106 14 64 96 50 60 12 24Z"
          fill="#f4f1ff"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="4"
        />
        <path d="M50 60 106 14 38 47" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
      </svg>

      <svg
        className="absolute bottom-24 left-[48%] hidden h-16 w-72 -translate-x-1/2 opacity-25 md:block"
        viewBox="0 0 420 100"
        fill="none"
      >
        <path
          className="footer-dash"
          d="M5 51c56-52 90 35 129-1 36-33-16-62-33-27-18 37 52 60 96 22 60-52 92 22 137 9 31-9 40-34 73-27"
          stroke="#9a8ee5"
          strokeDasharray="10 13"
          strokeLinecap="round"
          strokeWidth="4"
        />
      </svg>

      <svg
        className="footer-float-a absolute bottom-8 right-8 h-16 w-16 opacity-25 sm:right-[18%]"
        viewBox="0 0 100 100"
        fill="none"
      >
        <path
          d="M18 25h24c9 0 15 6 15 15v38H32c-8 0-14-6-14-14V25Z"
          stroke="#2563eb"
          strokeLinejoin="round"
          strokeWidth="5"
        />
        <path
          d="M57 40c0-9 6-15 15-15h10v53H57V40Z"
          stroke="#2563eb"
          strokeLinejoin="round"
          strokeWidth="5"
        />
        <path d="M29 42h15M29 56h15M66 42h8M66 56h8" stroke="#2563eb" strokeLinecap="round" strokeWidth="4" />
      </svg>

      <svg
        className="footer-rocket absolute bottom-10 left-5 h-[73px] w-[73px] opacity-20 sm:bottom-14 sm:left-[34%]"
        viewBox="0 0 1024 1024"
        fill="#193CB8"
        stroke="#193CB8"
      >
        <path d="M526.294 824.994c-0.796 0-1.61-0.124-2.39-0.344a8.02 8.02 0 0 1-5.484-6.216c-5.374-29.624-20.59-79.834-38.526-88.428a8.03 8.03 0 0 1-3.75-10.686 8.02 8.02 0 0 1 10.688-3.75c23.996 11.532 38.212 59.68 44.18 85.02 93.754-100.924 51.37-164.976 50.916-165.632a7.982 7.982 0 0 1 2.032-11.124c3.578-2.5 8.624-1.624 11.124 2.032 2.234 3.218 53.384 80.366-63.132 196.788a7.99 7.99 0 0 1-5.658 2.34zM348.038 594.618a8.03 8.03 0 0 1-6.876-3.906c-11.67-19.652-67.35-33.588-87.816-37.306a8.016 8.016 0 0 1-6.218-5.5 7.994 7.994 0 0 1 1.984-8.03c116.486-116.508 193.646-65.422 196.85-63.172a7.99 7.99 0 0 1 2.032 11.124c-2.5 3.64-7.466 4.516-11.092 2.062-2.75-1.89-65.586-42.228-165.728 50.924 24.496 5.75 70.38 19.214 83.738 41.712a7.988 7.988 0 0 1-2.782 10.966 8.12 8.12 0 0 1-4.092 1.126zM189.338 893.64c-4.03 0-6.56-1.688-7.982-3.094-18.076-18.09 78.178-123.42 79.194-124.452 12.092-12.06 33.166-12.06 45.26 0.032a31.702 31.702 0 0 1 9.358 22.59c0 8.562-3.328 16.592-9.374 22.624-0.83 0.844-92.926 82.3-116.456 82.3z m93.832-120.89a15.924 15.924 0 0 0-11.31 4.656c-11.56 11.56-60.96 72.428-74.302 96.926 24.496-13.344 85.364-62.742 96.924-74.304a15.796 15.796 0 0 0 4.688-11.31 15.78 15.78 0 0 0-4.672-11.28 15.892 15.892 0 0 0-11.328-4.688z" />
        <path d="M158.014 943.478c-9.42 0-16.792-2.594-21.902-7.686-15.358-15.374-7.89-49.932 22.824-105.644 22.966-41.68 53.026-83.3 67.696-97.956 15.092-15.124 35.166-23.434 56.524-23.434s41.448 8.31 56.554 23.434c31.168 31.184 31.2 81.928 0.046 113.112-24.512 24.496-132.014 98.174-181.742 98.174z m125.14-218.72c-17.092 0-33.136 6.654-45.212 18.746-13.966 13.938-43.416 55.182-64.992 94.364-29.418 53.336-32.134 79.99-25.528 86.614 2 2 5.562 3 10.592 3 41.918 0 144.78-67.866 170.432-93.488 24.918-24.934 24.886-65.552-0.046-90.488-12.094-12.094-28.154-18.748-45.246-18.748zM446.476 767.72a7.996 7.996 0 0 1-5.654-13.654l441.16-441.17c38.776-38.776 50.682-81.272 54.322-103.142 5.638-33.84-0.75-58.226-9.078-66.554-7.874-7.874-34.636-12.092-70.552-4.906-38.932 7.78-75.068 26.06-99.142 50.134L316.37 629.614l-11.31-11.31L746.22 177.118c26.246-26.262 65.368-46.12 107.33-54.508 30.496-6.092 68.88-6.858 84.99 9.28 25.246 25.246 27.278 119.796-45.246 192.318l-441.16 441.17a7.98 7.98 0 0 1-5.658 2.342z" />
        <path d="M797.12 190.772a7.992 7.992 0 0 1-6.86-3.876 8.024 8.024 0 0 1 2.734-10.982c56.398-33.95 106.83-37.542 122.922-21.404a8 8 0 0 1-11.31 11.312c-7.078-7.062-46.792-10.25-103.364 23.808a8.08 8.08 0 0 1-4.122 1.142zM378.58 699.822a8 8 0 0 1-5.656-13.654l135.686-135.67a7.996 7.996 0 1 1 11.31 11.31l-135.686 135.672a7.97 7.97 0 0 1-5.654 2.342zM355.958 677.202a7.972 7.972 0 0 1-5.654-2.344l-45.244-45.244a7.996 7.996 0 1 1 11.31-11.31l45.244 45.244a7.996 7.996 0 0 1-5.656 13.654zM446.476 767.72a7.968 7.968 0 0 1-5.654-2.344l-45.276-45.276a7.996 7.996 0 1 1 11.31-11.31l45.276 45.276a7.996 7.996 0 0 1-5.656 13.654zM717.942 408.478c-14.966 0-29.012-5.828-39.588-16.404-10.576-10.578-16.404-24.638-16.404-39.59 0-14.966 5.828-29.028 16.404-39.604 21.152-21.168 58.04-21.168 79.194-0.016 10.576 10.576 16.402 24.636 16.402 39.588 0 14.966-5.826 29.028-16.402 39.606-10.58 10.576-24.656 16.42-39.606 16.42z m0.016-96.02c-10.686 0-20.73 4.172-28.292 11.732a39.74 39.74 0 0 0-11.716 28.292 39.728 39.728 0 0 0 11.716 28.278c15.092 15.092 41.448 15.108 56.57-0.016a39.74 39.74 0 0 0 11.718-28.294 39.738 39.738 0 0 0-11.718-28.278 39.73 39.73 0 0 0-28.278-11.714zM604.832 521.588c-14.968 0-29.028-5.826-39.59-16.404-10.576-10.576-16.404-24.636-16.404-39.588 0-14.966 5.828-29.028 16.404-39.588 21.124-21.122 58.024-21.154 79.178 0 10.576 10.578 16.404 24.638 16.404 39.588s-5.828 29.012-16.404 39.588c-10.576 10.578-24.638 16.404-39.588 16.404z m0-95.988c-10.688 0-20.732 4.156-28.278 11.718-7.562 7.544-11.718 17.59-11.718 28.278a39.734 39.734 0 0 0 11.718 28.278c15.074 15.108 41.416 15.138 56.554 0a39.74 39.74 0 0 0 11.716-28.278 39.74 39.74 0 0 0-11.716-28.278 39.728 39.728 0 0 0-28.276-11.718z" />
        <path d="M904.262 799.966c-4.422 0-8.078-3.562-8.078-8 0-4.404 3.5-7.998 7.906-7.998h0.172a8.014 8.014 0 0 1 7.998 7.998c0 4.438-3.592 8-7.998 8zM280.31 16.06c-4.42 0-8.076-3.578-8.076-8 0-4.42 3.5-7.998 7.904-7.998h0.172c4.406 0 8 3.578 8 7.998 0 4.422-3.594 8-8 8zM632.266 48.056c-4.422 0-8.078-3.578-8.078-8 0-4.42 3.5-7.998 7.906-7.998h0.172a8.004 8.004 0 0 1 7.998 7.998c0 4.422-3.592 8-7.998 8zM40.342 240.032c-4.422 0-8.076-3.578-8.076-8 0-4.42 3.5-7.998 7.904-7.998h0.172c4.406 0 8 3.578 8 7.998 0 4.422-3.594 8-8 8zM168.31 671.982c-4.422 0-8.078-3.594-8.078-7.998 0-4.438 3.5-8 7.906-8h0.172a7.994 7.994 0 0 1 7.998 8 8.014 8.014 0 0 1-7.998 7.998zM567.46 1007.94c-4.422 0-8.078-3.594-8.078-8 0-4.436 3.5-7.998 7.906-7.998h0.172c4.406 0 8 3.562 8 7.998 0 4.406-3.592 8-8 8zM952.222 1023.938c-4.42 0-8.076-3.562-8.076-8 0-4.406 3.5-7.998 7.904-7.998h0.172c4.406 0 8 3.592 8 7.998 0 4.438-3.594 8-8 8zM776.278 591.992c-4.422 0-8.076-3.592-8.076-7.998 0-4.438 3.498-7.998 7.904-7.998h0.172c4.406 0 8 3.56 8 7.998a8.014 8.014 0 0 1-8 7.998zM968.238 527.994c-4.422 0-8.078-3.578-8.078-8 0-4.42 3.5-7.998 7.906-7.998h0.172a8.004 8.004 0 0 1 7.998 7.998c0 4.422-3.594 8-7.998 8zM872.25 751.942c-4.422 0-8.078-3.562-8.078-8 0-4.404 3.5-7.998 7.906-7.998h0.172a8.014 8.014 0 0 1 7.998 7.998c0 4.436-3.592 8-7.998 8z" />
      </svg>
    </div>
  );
});

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacts" className="relative isolate overflow-hidden bg-[#fffefa] px-5 py-12 text-[#171727] sm:px-8 lg:px-20">
      <FooterMotionStyles />
      <FooterArtwork />
      <div className="relative z-10 mx-auto max-w-[1180px]">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr] lg:gap-14">
          <div>
            <div className="flex items-center gap-4">
              <img
                src={Images.agsLogo}
                alt="Accra Grammar School Logo"
                className="h-14 w-14 object-contain"
                loading="lazy"
              />
              <div>
                <h2 className="text-lg font-extrabold tracking-wide">
                  ACCRA GRAMMAR SCHOOL
                </h2>
                <p className="mt-1 text-sm text-[#555568]">
                  Integrity. Leadership. Excellence.
                </p>
              </div>
            </div>

            <p className="mt-7 max-w-[420px] text-sm leading-7 text-[#555568]">
              Accra Grammar School is committed to shaping confident learners,
              grounded leaders, and thoughtful citizens through strong academics
              and character formation.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="/admissions/"
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-blue-600 px-5 text-sm font-bold text-white shadow-[0_16px_36px_rgba(37,99,235,0.22)] transition hover:-translate-y-0.5 hover:bg-blue-500"
              >
                Admissions
                <ArrowUpRight size={16} strokeWidth={2.4} />
              </a>
              <a
                href="/academics/"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#cfc7ea] bg-white px-5 text-sm font-bold text-[#5f54bf] transition hover:-translate-y-0.5 hover:bg-[#f4f1ff]"
              >
                Academics
                <BookOpen size={16} strokeWidth={2.2} />
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#6657c8]">
                  {group.title}
                </h3>
                <div className="mt-5 grid gap-3">
                  {group.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-sm text-[#555568] transition hover:text-[#171727]"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#6657c8]">
              Contact
            </h3>
            <div className="mt-5 grid gap-4">
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.text} className="flex items-center gap-3 text-sm text-[#555568]">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e8f1ff] text-[#2563eb]">
                      <Icon size={17} strokeWidth={2.2} />
                    </span>
                    <span>{item.text}</span>
                  </div>
                );
              })}
            </div>

            <div className="mt-7 rounded-lg border border-[#e8e5f0] bg-white p-4 shadow-[0_18px_46px_rgba(78,68,132,0.08)]">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e8f1ff] text-[#2563eb]">
                  <GraduationCap size={20} strokeWidth={2.2} />
                </span>
                <p className="text-sm font-semibold text-[#171727]">
                  Academic passport to the world
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-[#e5e0d5] pt-6 text-sm text-[#626277] sm:flex-row sm:items-center sm:justify-between">
          <p>(c) {currentYear} Accra Grammar School. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <a href="#" className="transition hover:text-[#171727]">
              Privacy
            </a>
            <a href="#" className="transition hover:text-[#171727]">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
