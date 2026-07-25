import { useState } from "react";
import { Eye, EyeOff, LogIn, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Images } from "../assets/Images/Images";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const formVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const inputVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function StudentLoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC]">
      <div className="flex h-14 items-center justify-between bg-[#061a34] px-6 text-white sm:px-10 lg:px-16">
        <div className="flex items-center gap-5 text-xs font-medium text-blue-200/80">
          <span className="inline-flex items-center gap-1.5">
            <Phone size={13} />
            +233 (0) 27 700 0034
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Mail size={13} />
            admin@school.edu
          </span>
        </div>
        <span className="text-xs font-bold uppercase tracking-wider text-white/60">
          Login
        </span>
      </div>

      <div className="flex min-h-0 flex-1">
        <div className="relative hidden h-full w-[32%] md:block">
          <img
            src={Images.academicExcellence}
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#061a34]/20" />
        </div>

        <div className="flex w-full items-center justify-center px-6 md:w-[36%]">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-[520px] bg-white px-8 py-12 shadow-[0_4px_60px_rgba(6,26,52,0.06)] sm:px-12 sm:py-16"
          >
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl font-semibold leading-tight text-[#061a34] sm:text-4xl"
            >
              Login to Elizabeth Learning Management System
            </motion.h1>

            <motion.form
              variants={formVariants}
              initial="hidden"
              animate="visible"
              className="mt-10 space-y-6"
            >
              <motion.div custom={0} variants={inputVariants} initial="hidden" animate="visible">
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  placeholder="Username"
                  className="h-14 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-[#061a34] focus:ring-2 focus:ring-[#061a34]/10"
                />
              </motion.div>

              <motion.div custom={1} variants={inputVariants} initial="hidden" animate="visible" className="relative">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="h-14 w-full rounded-xl border border-gray-200 bg-white pl-4 pr-12 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-[#061a34] focus:ring-2 focus:ring-[#061a34]/10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-gray-600"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </motion.div>

              <motion.div custom={2} variants={inputVariants} initial="hidden" animate="visible">
                <button
                  type="submit"
                  className="flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-[#061a34] text-base font-semibold text-white shadow-lg shadow-[#061a34]/20 transition hover:bg-[#0a2647] active:scale-[0.98]"
                >
                  <LogIn size={18} />
                  Log In
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="text-center"
              >
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="text-sm font-medium text-gray-400 transition hover:text-[#061a34]"
                >
                  Forgot password?
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45, duration: 0.3 }}
                className="relative"
              >
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-white px-4 text-xs font-medium text-gray-400">
                    or
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.3 }}
                className="text-center"
              >
                <p className="text-sm text-gray-500">
                  Some courses may allow guest access
                </p>
                <button
                  type="button"
                  className="mt-3 h-12 w-full rounded-xl border-2 border-gray-200 bg-white text-sm font-semibold text-gray-700 transition hover:border-gray-300 hover:bg-gray-50 active:scale-[0.98]"
                >
                  Access as Guest
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55, duration: 0.3 }}
                className="relative"
              >
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center">
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="bg-white px-4 text-xs font-medium text-gray-400 transition hover:text-[#061a34]"
                  >
                    Cookie Notice
                  </a>
                </div>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>

        <div className="relative hidden h-full w-[32%] md:block">
          <img
            src={Images.learningExcellence}
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#061a34]/20" />
        </div>
      </div>
    </div>
  );
}
