"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

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

      <motion.p className="mb-3">
        After completing my B.Tech, I chose to follow my passion for programming
        and enrolled in a coding bootcamp to become a full-stack web developer.
        What excites me most about programming is the problem-solving process —
        I enjoy the challenge of debugging and the satisfaction of building
        efficient solutions.
      </motion.p>
      <motion.p className="mb-3">
        My core tech stack includes{" "}
        <motion.span className="font-medium">
          React, Next.js, Node.js, and MongoDB,
        </motion.span>{" "}
        and I'm also proficient with{" "}
        <motion.span className="font-medium">TypeScript</motion.span> and{" "}
        <motion.span className="font-medium">Prisma</motion.span>. I'm
        constantly exploring and learning new technologies to stay up-to-date
        with the evolving tech landscape. Currently, I’m deepening my knowledge
        in <motion.span className="font-medium">AI agents, AWS</motion.span>,
        and <motion.span className="font-medium">CI/CD pipelines</motion.span>.
      </motion.p>
      <motion.p className="mb-3">
        I'm actively seeking a{" "}
        <motion.span className="font-medium">
          full-time software developer
        </motion.span>{" "}
        role where I can grow, contribute to meaningful projects, and
        collaborate with a passionate team.
      </motion.p>

      <motion.p>
        Outside of coding, I enjoy chess, movies, and cricket. I’m always
        curious and love exploring new topics beyond tech.
      </motion.p>
    </motion.section>
  );
}
