"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  const isLight = theme === "light";

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor={isLight ? "#e0e7ff" : "#3730a3"}>
        {experiencesData.map((item, index) => {
          const isCurrent = item.date.includes("Present");
          return (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                contentStyle={{
                  background: isLight ? "#ffffff" : "rgba(99, 102, 241, 0.07)",
                  boxShadow: isLight
                    ? "0 4px 24px rgba(99,102,241,0.08)"
                    : "0 4px 24px rgba(0,0,0,0.2)",
                  border: isCurrent
                    ? "1.5px solid #6366f1"
                    : isLight
                    ? "1px solid #e0e7ff"
                    : "1px solid rgba(99,102,241,0.2)",
                  textAlign: "left",
                  padding: "1.5rem 2rem",
                  borderRadius: "1rem",
                }}
                contentArrowStyle={{
                  borderRight: isLight
                    ? "0.4rem solid #e0e7ff"
                    : "0.4rem solid rgba(99,102,241,0.3)",
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background: isCurrent
                    ? "#6366f1"
                    : isLight
                    ? "white"
                    : "rgba(99,102,241,0.2)",
                  color: isCurrent ? "white" : isLight ? "#6366f1" : "#818cf8",
                  fontSize: "1.25rem",
                  boxShadow: isCurrent
                    ? "0 0 0 4px #e0e7ff"
                    : isLight
                    ? "0 0 0 4px #f5f3ff"
                    : "0 0 0 4px rgba(99,102,241,0.2)",
                }}
              >
                <div className="flex items-start justify-between gap-2 flex-wrap">
                  <h3 className="font-display font-bold text-base capitalize">
                    {item.title}
                  </h3>
                  {isCurrent && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[0.65rem] font-bold uppercase tracking-wider bg-[#6366f1] text-white shrink-0">
                      <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                      Current
                    </span>
                  )}
                </div>
                <p className="font-medium text-sm text-[#6366f1] dark:text-indigo-400 !mt-0.5 !mb-0">
                  {item.location}
                </p>
                <p className="!mt-2 !font-normal text-sm text-gray-600 dark:text-white/70 leading-relaxed">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            </React.Fragment>
          );
        })}
      </VerticalTimeline>
    </section>
  );
}
