"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const stats = [
  { value: "4", label: "Years Experience" },
  { value: "4+", label: "Projects Delivered" },
  { value: "3", label: "Companies" },
];

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      {/* stats row */}
      <motion.div
        className="flex justify-center gap-6 mb-8 flex-wrap"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center px-6 py-3 rounded-2xl bg-white dark:bg-white/10 border border-black/5 dark:border-white/10 shadow-sm min-w-[90px]"
          >
            <span className="font-display text-2xl font-bold text-[#6366f1]">
              {stat.value}
            </span>
            <span className="text-xs text-gray-500 dark:text-white/60 font-medium mt-0.5">
              {stat.label}
            </span>
          </div>
        ))}
      </motion.div>

      <motion.p className="mb-3">
        I'm a Frontend Engineer with 4 years of professional experience building
        production-grade web applications and enterprise admin dashboards. I've
        worked across the full frontend stack — from architecting scalable
        React/Next.js applications to implementing RBAC systems, visual workflow
        builders, and multilingual platforms used in real production
        environments.
      </motion.p>
      <motion.p className="mb-3">
        My core expertise is in{" "}
        <motion.span className="font-semibold text-[#6366f1] dark:text-indigo-400">
          React, Next.js, TypeScript, and Redux Toolkit,
        </motion.span>{" "}
        with strong proficiency in{" "}
        <motion.span className="font-semibold text-[#6366f1] dark:text-indigo-400">
          TanStack Query, React Hook Form, and Zod.
        </motion.span>{" "}
        I'm currently applying{" "}
        <motion.span className="font-semibold">AWS and Docker</motion.span> in
        production and deepening my knowledge in{" "}
        <motion.span className="font-semibold">CI/CD pipelines</motion.span>.
      </motion.p>
      <motion.p className="mb-3">
        I thrive in collaborative, cross-functional teams and take ownership of
        features end-to-end — from Figma designs and API contracts to
        deployment. I care deeply about code quality, accessibility, and
        building things that scale.
      </motion.p>
      <motion.p>
        Outside of work, I enjoy chess, cricket, and exploring topics beyond
        tech. I'm always curious and constantly learning.
      </motion.p>
    </motion.section>
  );
}
