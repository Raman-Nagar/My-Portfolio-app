"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (name: (typeof links)[number]["name"]) => {
    setActiveSection(name);
    setTimeOfLastClick(Date.now());
    setMenuOpen(false);
  };

  return (
    <header className="z-[999] relative">
      {/* desktop nav pill */}
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white/40 bg-white/80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[40rem] sm:rounded-full dark:bg-[#0f172a]/80 dark:border-indigo-500/20"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      />

      {/* desktop links */}
      <nav className="hidden sm:flex fixed top-[1.7rem] left-1/2 -translate-x-1/2">
        <ul className="flex items-center gap-1 text-[0.9rem] font-medium text-gray-500">
          {links.map((link) => (
            <motion.li
              className="relative flex items-center justify-center"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex items-center px-4 py-2 rounded-full hover:text-gray-950 transition dark:hover:text-white",
                  {
                    "text-gray-950 dark:text-white font-semibold":
                      activeSection === link.name,
                    "dark:text-gray-400": activeSection !== link.name,
                  }
                )}
                href={link.hash}
                onClick={() => handleClick(link.name)}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="absolute inset-0 rounded-full bg-[#6366f1]/10 dark:bg-[#6366f1]/20 -z-10"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* mobile: title + hamburger */}
      <div className="sm:hidden fixed top-0 left-0 right-0 h-[4.5rem] flex items-center justify-between px-5">
        <motion.span
          className="font-display font-bold text-[#6366f1] text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Raman.
        </motion.span>
        <motion.button
          className="p-2 rounded-full bg-white/80 dark:bg-[#0f172a]/80 border border-black/10 dark:border-white/10 backdrop-blur-sm shadow-sm text-gray-700 dark:text-white"
          onClick={() => setMenuOpen((o) => !o)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX size={20} /> : <HiMenuAlt3 size={20} />}
        </motion.button>
      </div>

      {/* mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="sm:hidden fixed top-[4.5rem] left-0 right-0 z-[998] bg-white/95 dark:bg-[#0f172a]/95 backdrop-blur-md border-b border-black/5 dark:border-white/10 shadow-xl"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="flex flex-col py-3">
              {links.map((link) => (
                <li key={link.hash}>
                  <Link
                    href={link.hash}
                    onClick={() => handleClick(link.name)}
                    className={clsx(
                      "flex items-center px-6 py-3 text-sm font-medium transition",
                      activeSection === link.name
                        ? "text-[#6366f1] bg-[#6366f1]/5 font-semibold"
                        : "text-gray-600 dark:text-gray-400 hover:text-[#6366f1] hover:bg-[#6366f1]/5"
                    )}
                  >
                    {link.name}
                    {activeSection === link.name && (
                      <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#6366f1]" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
