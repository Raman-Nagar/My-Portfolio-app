import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full mt-10 border-t border-black/5 dark:border-slate-700/50">
      <div className="max-w-[56rem] mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* left — brand */}
        <div className="text-center sm:text-left">
          <p className="font-display font-bold text-[#6366f1] text-lg">Raman Nagar</p>
          <p className="text-xs text-gray-500 dark:text-slate-400 mt-0.5">
            Frontend Engineer — React · Next.js · TypeScript
          </p>
        </div>

        {/* center — social links */}
        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/raman-nagar-733b78158"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2.5 rounded-full glass-card text-[#6366f1] hover:scale-110 hover:shadow-indigo-500/20 hover:shadow-lg transition"
          >
            <BsLinkedin size={15} />
          </a>
          <a
            href="https://github.com/Raman-Nagar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2.5 rounded-full glass-card text-[#6366f1] hover:scale-110 hover:shadow-indigo-500/20 hover:shadow-lg transition"
          >
            <BsGithub size={15} />
          </a>
          <a
            href="mailto:ramannagar08082000@gmail.com"
            aria-label="Email"
            className="p-2.5 rounded-full glass-card text-[#6366f1] hover:scale-110 hover:shadow-indigo-500/20 hover:shadow-lg transition"
          >
            <HiMail size={15} />
          </a>
        </div>

        {/* right — copyright + built with */}
        <div className="text-center sm:text-right">
          <p className="text-xs text-gray-400 dark:text-slate-500">
            &copy; {year} Raman Nagar. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 dark:text-slate-500 mt-0.5">
            Built with Next.js · Deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}
