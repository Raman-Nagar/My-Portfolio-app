"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-6 right-6 bg-white dark:bg-[#1e293b] w-12 h-12 border border-[#6366f1]/20 shadow-lg shadow-indigo-500/10 rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-all backdrop-blur-sm text-[#6366f1] dark:text-indigo-400"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {theme === "light" ? <BsSun size={18} /> : <BsMoon size={18} />}
    </button>
  );
}
