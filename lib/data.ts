import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { MdWork } from "react-icons/md";
import TCP from "@/public/tcp.png";
import Pokemon from "@/public/pokemon.png";
import FileExplorer from "@/public/file-explorer.png";
import UserManagement from "@/public/User-mgmt.png";
import SCCalendar from "@/public/SC-Calendar.png";
import WemindGo from "@/public/wemindgo.png";
import Codeez from "@/public/codeez.png";

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
      "Completed a 6-month full-time training in front-end and back-end web development. Gained hands-on experience building responsive web apps using React, Node.js, Express, and MongoDB.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Leogic Technologies, Indore, MP",
    description:
      "Built full-stack web applications using React.js, Redux, Node.js, Express.js, and MongoDB. Developed and optimized RESTful APIs and MongoDB queries. Contributed to the Leogic Consultancy Services platform with CMS for portfolios, services, and contact management.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2022 – June 2023",
  },
  {
    title: "Frontend Developer",
    location: "Dream Cyber Infoway, Indore, MP",
    description:
      "Built The Credit Pros admin dashboard from scratch with RBAC authentication, visual workflow builder (React Flow), advanced search (React Query Builder), and complex form validation (React Hook Form + Zod). Integrated REST APIs using TanStack Query and RTK Query with caching and optimized data fetching.",
    icon: React.createElement(FaReact),
    date: "July 2023 – June 2025",
  },
  {
    title: "Frontend Developer",
    location: "Whitelotus Corporation, Indore, MP",
    description:
      "Building wemindGo — an invoice management platform with eFaktura-to-SEF synchronization. Architected scalable frontend using Next.js, TypeScript, and TanStack Query. Implemented multilingual support (SR, RU, EN) with next-intl. Deployed via Docker on AWS EC2 with assets on S3.",
    icon: React.createElement(MdWork),
    date: "Sep 2025 – Present",
  },
] as const;

export const projectsData = [
  {
    title: "wemindGo — Invoice Platform",
    description:
      "Invoice management platform supporting manual workflows and eFaktura-to-SEF synchronization. Features multilingual support (SR, RU, EN) and full server-state management.",
    tags: ["Next.js", "TypeScript", "TanStack Query", "next-intl", "Docker", "AWS"],
    imageUrl: WemindGo,
    liveUrl: "https://app.wemind-go.com",
    gitUrl: "",
    featured: true,
    company: "Whitelotus Corp",
  },
  {
    title: "The Credit Pros — Admin Dashboard",
    description:
      "Enterprise admin dashboard with RBAC authentication, visual workflow builder, advanced query-based search, and robust form validation for critical business workflows.",
    tags: ["Next.js", "TypeScript", "Redux Toolkit", "RTK Query", "Material UI", "React Flow", "Zod"],
    imageUrl: TCP,
    liveUrl: "https://portal.dev.thecreditpros.com",
    gitUrl: "",
    featured: true,
    company: "Dream Cyber Infoway",
  },
  {
    title: "Codeez — Learning Management Dashboard",
    description:
      "Internal admin dashboard covering course management, leads, trainers, comments, and reviews. Built as an internal tool at Dream Cyber Infoway.",
    tags: ["Next.js", "Redux", "Tailwind CSS", "Node.js", "Express", "Prisma", "MongoDB"],
    imageUrl: Codeez,
    liveUrl: "",
    gitUrl: "",
    featured: false,
    company: "Dream Cyber Infoway",
  },
  {
    title: "Role-based User Management (RBAC)",
    description:
      "Full authentication flow with profile management, role-based UI, and email verification. Built with React, TypeScript, ShadCN UI, TanStack Query, React Hook Form, and Zod.",
    tags: ["React.js", "TypeScript", "ShadCN UI", "TanStack Query", "React Hook Form", "Zod"],
    imageUrl: UserManagement,
    liveUrl: "https://user-management-frontend-swart.vercel.app/",
    gitUrl: "https://github.com/Raman-Nagar/user-management-frontend",
    featured: false,
    company: "",
  },
  {
    title: "Social Media Content Calendar",
    description:
      "Schedule social media posts across multiple dates with filtering by category and post metrics tracking. Export the calendar to Excel for detailed reporting.",
    tags: ["React", "Next.js", "Tailwind", "Radix UI"],
    imageUrl: SCCalendar,
    liveUrl: "https://social-media-content-calendar-seven.vercel.app",
    gitUrl: "https://github.com/Raman-Nagar/social-media-content-calendar",
    featured: false,
    company: "",
  },
  {
    title: "Pokémon Search App",
    description:
      "Browse, search, filter by type, and favorite Pokémon using the official PokéAPI. Built with Next.js 15 and TypeScript.",
    tags: ["TypeScript", "React", "Next.js", "Tailwind", "PokéAPI v2"],
    imageUrl: Pokemon,
    liveUrl: "https://stackblitz.com/~/github.com/Raman-Nagar/Pokemon-Searech-App",
    gitUrl: "https://github.com/Raman-Nagar/Pokemon-Searech-App",
    featured: false,
    company: "",
  },
  {
    title: "File Explorer App",
    description:
      "A VS Code-style file explorer where you can create, rename, and delete any nested file or folder.",
    tags: ["JavaScript", "React", "React Redux", "Tailwind"],
    imageUrl: FileExplorer,
    liveUrl: "https://stackblitz.com/~/github.com/Raman-Nagar/file-explorer",
    gitUrl: "https://github.com/Raman-Nagar/file-explorer",
    featured: false,
    company: "",
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
  "RTK Query",
  "TanStack Query",
  "React Hook Form",
  "Zod",
  "Tailwind",
  "Material UI",
  "ShadCN UI",
  "Node.js",
  "Express",
  "MongoDB",
  "Prisma",
  "Docker",
  "AWS",
  "Git",
] as const;
