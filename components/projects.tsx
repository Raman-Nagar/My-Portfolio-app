"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const tabs = ["All", "Featured", "Company", "Personal"] as const;
type Tab = (typeof tabs)[number];

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const [activeTab, setActiveTab] = useState<Tab>("All");

  const filtered = projectsData.filter((p) => {
    if (activeTab === "All") return true;
    if (activeTab === "Featured") return p.featured;
    if (activeTab === "Company") return !!p.company;
    if (activeTab === "Personal") return !p.company;
    return true;
  });

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>

      {/* filter tabs */}
      <div className="flex justify-center mb-8">
        <div className="relative flex items-center gap-1 p-1 rounded-full glass-card">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-200 z-10
                ${activeTab === tab
                  ? "text-white"
                  : "text-gray-500 dark:text-slate-400 hover:text-gray-800 dark:hover:text-white"
                }`}
            >
              {activeTab === tab && (
                <motion.span
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-full bg-[#6366f1] shadow-lg shadow-indigo-500/30"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        {filtered.map((project, index) => (
          <Project key={project.title} {...project} index={index} />
        ))}
        {filtered.length === 0 && (
          <p className="text-center text-gray-400 dark:text-slate-500 py-12">
            No projects in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}
