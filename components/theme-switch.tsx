"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-6 right-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md w-12 h-12 border border-[#6366f1]/20 dark:border-indigo-500/20 shadow-lg shadow-indigo-500/10 rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-all text-[#6366f1] dark:text-indigo-400 overflow-hidden"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.2 }}
        >
          {theme === "light" ? <BsSun size={18} /> : <BsMoon size={18} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
