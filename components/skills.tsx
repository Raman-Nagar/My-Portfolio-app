"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiRedux, SiReactquery, SiTailwindcss, SiMui,
  SiNodedotjs, SiExpress, SiMongodb, SiPrisma,
  SiDocker, SiAmazon, SiGit,
} from "react-icons/si";
import { TbBrandReactNative, TbComponents } from "react-icons/tb";

const skillGroups = [
  {
    label: "Core",
    color: "bg-indigo-50 dark:bg-indigo-950/40 border-indigo-100 dark:border-indigo-900",
    labelColor: "text-indigo-600 dark:text-indigo-400",
    skills: [
      { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
      { name: "CSS", icon: SiCss3, color: "text-blue-500" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
      { name: "React", icon: SiReact, color: "text-cyan-500" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-gray-800 dark:text-white" },
    ],
  },
  {
    label: "State & Data",
    color: "bg-violet-50 dark:bg-violet-950/40 border-violet-100 dark:border-violet-900",
    labelColor: "text-violet-600 dark:text-violet-400",
    skills: [
      { name: "Redux", icon: SiRedux, color: "text-purple-600" },
      { name: "RTK Query", icon: SiRedux, color: "text-purple-500" },
      { name: "TanStack Query", icon: SiReactquery, color: "text-red-500" },
      { name: "React Hook Form", icon: TbBrandReactNative, color: "text-pink-500" },
      { name: "Zod", icon: TbBrandReactNative, color: "text-blue-500" },
    ],
  },
  {
    label: "Styling & UI",
    color: "bg-sky-50 dark:bg-sky-950/40 border-sky-100 dark:border-sky-900",
    labelColor: "text-sky-600 dark:text-sky-400",
    skills: [
      { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-500" },
      { name: "Material UI", icon: SiMui, color: "text-blue-500" },
      { name: "ShadCN UI", icon: TbComponents, color: "text-gray-800 dark:text-white" },
    ],
  },
  {
    label: "Backend",
    color: "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-100 dark:border-emerald-900",
    labelColor: "text-emerald-600 dark:text-emerald-400",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
      { name: "Express", icon: SiExpress, color: "text-gray-700 dark:text-gray-300" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
      { name: "Prisma", icon: SiPrisma, color: "text-slate-700 dark:text-slate-300" },
    ],
  },
  {
    label: "DevOps & Tools",
    color: "bg-orange-50 dark:bg-orange-950/40 border-orange-100 dark:border-orange-900",
    labelColor: "text-orange-600 dark:text-orange-400",
    skills: [
      { name: "Docker", icon: SiDocker, color: "text-blue-500" },
      { name: "AWS", icon: SiAmazon, color: "text-orange-500" },
      { name: "Git", icon: SiGit, color: "text-red-500" },
    ],
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * i, duration: 0.4 },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[56rem] w-full scroll-mt-28 sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>

      <div className="flex flex-col gap-5">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.label}
            className={`rounded-2xl border p-5 ${group.color}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: gi * 0.1, duration: 0.4 }}
          >
            <span className={`text-xs font-bold uppercase tracking-widest mb-4 block ${group.labelColor}`}>
              {group.label}
            </span>
            <ul className="flex flex-wrap gap-2">
              {group.skills.map((skill, si) => (
                <motion.li
                  key={skill.name}
                  className="flex items-center gap-2 bg-white dark:bg-white/10 border border-black/5 dark:border-white/10 rounded-xl px-4 py-2 text-sm font-medium text-gray-700 dark:text-white/80 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                  variants={fadeIn}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={gi * 5 + si}
                >
                  <skill.icon className={`text-base ${skill.color}`} />
                  {skill.name}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
