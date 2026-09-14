"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>

      <div className="relative max-w-[42rem] mx-auto">
        {/* vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#6366f1] via-[#8b5cf6] to-transparent" />

        <div className="flex flex-col gap-6">
          {experiencesData.map((item, index) => {
            const isCurrent = item.date.includes("Present");
            return (
              <motion.div
                key={index}
                className="relative pl-16"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              >
                {/* icon dot */}
                <div
                  className={`absolute left-0 top-5 w-12 h-12 rounded-full flex items-center justify-center text-lg z-10 shadow-lg
                    ${isCurrent
                      ? "bg-[#6366f1] text-white shadow-indigo-500/40"
                      : "bg-white dark:bg-slate-800 text-[#6366f1] border-2 border-[#6366f1]/30 dark:border-indigo-500/30"
                    }`}
                >
                  {item.icon}
                </div>

                {/* card */}
                <div
                  className={`glass-card rounded-2xl p-5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]
                    ${isCurrent ? "border-[#6366f1]/40 dark:border-indigo-500/40" : ""}`}
                >
                  <div className="flex items-start justify-between gap-2 flex-wrap mb-1">
                    <h3 className="font-display font-bold text-base text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    {isCurrent && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[0.65rem] font-bold uppercase tracking-wider bg-[#6366f1] text-white shrink-0">
                        <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-semibold text-[#6366f1] dark:text-indigo-400 mb-1">
                    {item.location}
                  </p>
                  <p className="text-xs text-gray-400 dark:text-slate-500 mb-3 font-medium">
                    {item.date}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-white/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
