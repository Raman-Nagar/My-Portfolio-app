import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import TCP from "@/public/tcp.png";
import Pokemon from "@/public/pokemon.png";
import FileExplorer from "@/public/file-explorer.png";
import UserManagement from "@/public/User-mgmt.png";
import SCCalendar from "@/public/SC-Calendar.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Web Development Training",
    location: "SCS Indore, MP",
    description:
      "Completed a 6-month full-time training in front-end and back-end web development. Gained hands-on experience in building responsive web apps using React, Node.js, Express, and MongoDB.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Leogic Technology, Indore, MP",
    description:
      `Built and maintained scalable full-stack applications using React, Next.js (Page Router), Redux, Tailwind CSS, Node.js, and MongoDB. Developed and optimized RESTful APIs and database queries for high performance. Used Git, GitHub, and Agile practices to manage tasks and version control effectively`,
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "Front-end Developer",
    location: "Dream Cyber Infoway, Indore, MP",
    description:
      "Spearheaded the development of The Credit Pros website using React.js and Next.js (App Router). Integrated RESTful APIs, resulting in improved UI responsiveness and user engagement. Performed in-depth code reviews to ensure accessibility, scalability, and clean architecture. Worked with Redux Toolkit, RTK Query, and Material UI to deliver robust front-end solutions.",
    icon: React.createElement(FaReact),
    date: "2023 - 2025",
  },
] as const;

export const projectsData = [
  {
    title: "The Credit Pros",
    description:
      "The Credit Pros has been helping people like you repair their credit score by updating or removing inaccurate items (especially debt collection brands) on  credit reports for over a decade.",
    tags: ["React", "TypeScript", "Next.js", "Material UI", "Redux-toolkit", "RTK-Query"],
    imageUrl: TCP,
    liveUrl: "https://portal.dev.thecreditpros.com", //"https://portal-frontend.dev.thecreditpros.com/",
    gitUrl: ""
  },
  {
    title: "Role-based User Management (RBAC)",
    description:
      "This is the frontend for the User Management System built with React (Vite + TypeScript). It supports authentication, profile management, role-based UI, and email verification.",
    tags: ["React.js + Vite", "TypeScript", "Tailwind CSS + ShadCN UI", "TanStack React Query", "React Hook Form + Zod"],
    imageUrl: UserManagement,
    liveUrl: "https://user-management-frontend-swart.vercel.app/",
    gitUrl: ""
  },
  {
    title: "Social Media Content Calendar",
    description:
      "A frontend web application that allows users to schedule social media posts across multiple dates, with filtering by category and post metrics tracking. Export the calendar to Excel for detailed reporting",
    tags: ["React", "Next.js", "Tailwind", "Radix UI"],
    imageUrl: SCCalendar,
    liveUrl: "https://social-media-content-calendar-seven.vercel.app",
    gitUrl: ""
  },
  {
    title: "Pokémon Search App",
    description:
      "A responsive Next.js 15‑powered web application that lets users browse, search, filter by type, and favorite Pokémon using the official PokéAPI",
    tags: ["TypeScript", "React", "Next.js", "Tailwind", "PokéAPI v2"],
    imageUrl: Pokemon,
    liveUrl: "https://stackblitz.com/~/github.com/Raman-Nagar/Pokemon-Searech-App",
    gitUrl: ""
  },
  {
    title: "File Explorer App",
    description:
      "A simple file explorer application (ex. VS code editore sidebar). you can Create, Rename and Delete any nested file or folder",
    tags: ["JavaScript", "React", "React Redux", "Tailwind"],
    imageUrl: FileExplorer,
    liveUrl: "https://stackblitz.com/~/github.com/Raman-Nagar/file-explorer",
    gitUrl: ""
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Redux",
  "RTK-Query",
  "Tailwind",
  "Material UI",
  "Node.js",
  "Express",
  "MongoDB",
  "Prisma",
  "Git",
  // "PostgreSQL",
  // "Framer Motion",
] as const;
