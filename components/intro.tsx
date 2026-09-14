"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { TypeAnimation } from "react-type-animation";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import DP from "../public/my-dp-2.jpg";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[56rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      {/* profile photo with spinning gradient ring */}
      <div className="flex items-center justify-center mb-6">
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "tween", duration: 0.3 }}
        >
          {/* spinning gradient ring */}
          <div className="absolute inset-0 rounded-full photo-ring p-[3px] -m-[3px]" />
          {/* white gap ring */}
          <div className="absolute inset-0 rounded-full bg-white dark:bg-[#0f172a] scale-[1.04]" />
          <Image
            src={DP}
            alt="Raman Nagar — Frontend Engineer"
            width={192}
            height={192}
            quality={95}
            priority={true}
            className="relative h-36 w-36 rounded-full object-cover border-4 border-white dark:border-[#0f172a] shadow-2xl"
          />

          {/* availability green dot */}
          <motion.span
            className="absolute bottom-2 right-2 h-4 w-4 rounded-full bg-emerald-400 border-2 border-white dark:border-[#0f172a] shadow-md"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
            title="Available for opportunities"
          />
        </motion.div>
      </div>

      {/* availability badge + location */}
      <motion.div
        className="flex items-center justify-center gap-3 mb-5 flex-wrap"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <span className="badge bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          Open to opportunities
        </span>
        <span className="badge bg-gray-100 text-gray-600 dark:bg-white/10 dark:text-gray-400 border border-gray-200 dark:border-white/10">
          <HiLocationMarker className="text-accent" />
          Indore, India
        </span>
      </motion.div>

      {/* heading */}
      <motion.div
        className="mb-6 px-4"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h1 className="font-display text-3xl sm:text-5xl font-bold leading-tight mb-3">
          Hi, I'm <span className="gradient-text">Raman Nagar</span> 👋
        </h1>
        <div className="text-xl sm:text-2xl font-display font-semibold text-gray-600 dark:text-gray-300 h-9">
          <TypeAnimation
            sequence={[
              "Frontend Engineer",
              2000,
              "React & Next.js Developer",
              2000,
              "TypeScript Specialist",
              2000,
              "UI/UX Focused Developer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-accent"
          />
        </div>
        <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-[42rem] mx-auto leading-relaxed">
          4 years building{" "}
          <span className="font-semibold text-gray-800 dark:text-gray-200">
            enterprise-grade web apps
          </span>
          , admin dashboards, and scalable UIs using React, Next.js, TypeScript,
          and Redux Toolkit.
        </p>
      </motion.div>

      {/* CTA buttons */}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-base font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Link
          href="#contact"
          className="group bg-[#6366f1] hover:bg-[#4f46e5] text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition shadow-lg shadow-indigo-500/25"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me
          <BsArrowRight className="opacity-80 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white dark:bg-white/10 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack hover:bg-gray-50 dark:hover:bg-white/20 shadow-sm"
          href="/Raman-Resume.pdf"
          download
        >
          Download CV
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white dark:bg-white/10 p-4 text-[#6366f1] hover:text-[#4f46e5] flex items-center rounded-full focus:scale-105 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack shadow-sm hover:bg-gray-50 dark:hover:bg-white/20"
          href="https://www.linkedin.com/in/raman-nagar-733b78158"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white dark:bg-white/10 p-4 text-[#6366f1] hover:text-[#4f46e5] flex items-center text-[1.35rem] rounded-full focus:scale-105 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack shadow-sm hover:bg-gray-50 dark:hover:bg-white/20"
          href="https://github.com/Raman-Nagar"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
