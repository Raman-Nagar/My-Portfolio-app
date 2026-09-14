import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full mt-10 border-t border-black/5 dark:border-white/10">
      <div className="max-w-[56rem] mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* left — brand */}
        <div className="text-center sm:text-left">
          <p className="font-display font-bold text-[#6366f1] text-lg">Raman Nagar</p>
          <p className="text-xs text-gray-500 dark:text-white/50 mt-0.5">
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
            className="p-2.5 rounded-full bg-white dark:bg-white/10 border border-black/5 dark:border-white/10 text-[#6366f1] hover:scale-110 hover:shadow-md transition"
          >
            <BsLinkedin size={15} />
          </a>
          <a
            href="https://github.com/Raman-Nagar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2.5 rounded-full bg-white dark:bg-white/10 border border-black/5 dark:border-white/10 text-[#6366f1] hover:scale-110 hover:shadow-md transition"
          >
            <BsGithub size={15} />
          </a>
          <a
            href="mailto:ramannagar08082000@gmail.com"
            aria-label="Email"
            className="p-2.5 rounded-full bg-white dark:bg-white/10 border border-black/5 dark:border-white/10 text-[#6366f1] hover:scale-110 hover:shadow-md transition"
          >
            <HiMail size={15} />
          </a>
        </div>

        {/* right — copyright */}
        <p className="text-xs text-gray-400 dark:text-white/40 text-center sm:text-right">
          &copy; {year} Raman Nagar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
