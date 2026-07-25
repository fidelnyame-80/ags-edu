import { useState } from "react";
import { Eye, EyeOff, LogIn } from "lucide-react";
import { motion } from "framer-motion";
import { Images } from "../assets/Images/Images";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 + i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function StudentLoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-[#F8FAFC]">
{/* Row: three columns share the exact remaining height */}
      <div className="flex min-h-0 flex-1 overflow-hidden">
        <div className="relative hidden h-full min-h-0 w-[33%] overflow-hidden md:block">
          <img
            src={Images.academicExcellence}
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#061a34]/20" />
        </div>

        <div className="flex h-full min-h-0 w-full items-center justify-center overflow-y-auto px-5 md:w-[34%]">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-[440px] py-4"
          >
            <motion.h1
              custom={0}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="max-w-[360px] text-2xl font-bold leading-tight text-[#061a34] sm:text-3xl lg:text-4xl"
            >
              Login to Elizabeth Learning Management System
            </motion.h1>

            <motion.form className="mt-5 flex flex-col gap-3.5">
              <motion.div custom={1} variants={itemVariants} initial="hidden" animate="visible">
                <label htmlFor="username" className="sr-only">Username</label>
                <input
                  id="username"
                  type="text"
                  placeholder="Username"
                  className="h-11 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-[#061a34] focus:ring-2 focus:ring-[#061a34]/10"
                />
              </motion.div>

              <motion.div custom={2} variants={itemVariants} initial="hidden" animate="visible" className="relative">
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="h-11 w-full rounded-xl border border-gray-200 bg-white pl-4 pr-11 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-[#061a34] focus:ring-2 focus:ring-[#061a34]/10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-gray-600"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </motion.div>

              <motion.div custom={3} variants={itemVariants} initial="hidden" animate="visible">
                <button
                  type="submit"
                  className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#061a34] text-sm font-semibold text-white shadow-lg shadow-[#061a34]/20 transition hover:bg-[#0a2647] active:scale-[0.98]"
                >
                  <LogIn size={16} />
                  Log In
                </button>
              </motion.div>

              <motion.div custom={4} variants={itemVariants} initial="hidden" animate="visible" className="text-center">
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="text-xs font-medium text-gray-400 transition hover:text-[#061a34]"
                >
                  Forgot password?
                </a>
              </motion.div>

              <motion.div custom={5} variants={itemVariants} initial="hidden" animate="visible" className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-[#F8FAFC] px-3 text-[0.6rem] font-medium text-gray-400">
                    or
                  </span>
                </div>
              </motion.div>

              <motion.div custom={6} variants={itemVariants} initial="hidden" animate="visible" className="text-center">
                <p className="text-xs text-gray-500">
                  Some courses may allow guest access
                </p>
                <button
                  type="button"
                  className="mt-2 h-10 w-full rounded-xl border-2 border-gray-200 bg-white text-xs font-semibold text-gray-700 transition hover:border-gray-300 hover:bg-gray-50 active:scale-[0.98]"
                >
                  Access as Guest
                </button>
              </motion.div>

              <motion.div custom={7} variants={itemVariants} initial="hidden" animate="visible" className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center">
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="bg-[#F8FAFC] px-3 text-[0.6rem] font-medium text-gray-400 transition hover:text-[#061a34]"
                  >
                    Cookie Notice
                  </a>
                </div>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>

        <div className="relative hidden h-full min-h-0 w-[33%] overflow-hidden md:block">
          <img
            src={Images.agsSciencelab1}
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#061a34]/20" />
        </div>
      </div>
    </div>
  );
}