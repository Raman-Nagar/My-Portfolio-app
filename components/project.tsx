"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number];

// Note: gitUrl is optional — if your data doesn't include it, you can pass it when you render the component.
// The intersection type keeps compatibility with your original projectsData type.
export default function Project({
  title,
  description,
  tags,
  imageUrl,
  liveUrl,
  gitUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        {/* MOBILE: show image on small screens only (stacked above content) */}
        <div className="block sm:hidden w-full h-44 relative">
          <Image
            src={imageUrl}
            alt={`Screenshot of ${title}`}
            fill
            sizes="(max-width: 640px) 100vw"
            className="object-fill"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 md:mb-1 leading-relaxed text-gray-700 dark:text-white/70 min-h-[6rem] overflow-y-auto">
            {description}
          </p>

          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>

          {/* Buttons (kept inside the content area so other screen sizes/layouts remain unchanged) */}
          <div className="mt-4 flex gap-3">
            <Link
              href={liveUrl ?? "#"}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-black text-white text-sm font-medium shadow-sm hover:opacity-95 transition"
            >
              {/* simple eye icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.065 7-9.542 7S3.732 16.057 2.458 12z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
                />
              </svg>
              View
            </Link>

            {/* show Git button only when gitUrl is provided */}
            {gitUrl && (
              <Link
                href={gitUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white text-sm font-medium shadow-sm ring-1 ring-black/5 hover:opacity-95 transition"
              >
                {/* GitHub icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 .5C5.73.5.75 5.48.75 11.76c0 4.93 3.19 9.11 7.61 10.59.56.1.76-.24.76-.53 0-.26-.01-1-.02-1.95-3.09.67-3.75-1.49-3.75-1.49-.51-1.3-1.24-1.65-1.24-1.65-1.01-.7.08-.69.08-.69 1.12.08 1.71 1.15 1.71 1.15.99 1.71 2.59 1.22 3.22.93.1-.73.39-1.22.71-1.5-2.47-.28-5.06-1.24-5.06-5.54 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.41.11-2.94 0 0 .95-.31 3.12 1.15a10.84 10.84 0 0 1 2.84-.38c.96 0 1.93.13 2.84.38 2.17-1.46 3.12-1.15 3.12-1.15.61 1.53.23 2.66.11 2.94.71.78 1.15 1.78 1.15 3 0 4.31-2.6 5.25-5.08 5.53.4.34.75 1.02.75 2.06 0 1.49-.01 2.69-.01 3.06 0 .29.2.64.77.53 4.41-1.48 7.59-5.66 7.59-10.59C23.25 5.48 18.27.5 12 .5z" />
                </svg>
                Git
              </Link>
            )}
          </div>
        </div>

        <Link href={liveUrl} target="_blank">
          {/* Desktop image (keeps your original absolute/right positioning and hover transforms) */}
          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
            className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
          />
        </Link>
      </section>
    </motion.div>
  );
}
