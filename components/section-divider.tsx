"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      className="my-24 h-20 w-px rounded-full hidden sm:block"
      style={{
        background: "linear-gradient(to bottom, transparent, #6366f1, #8b5cf6, transparent)",
      }}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    />
  );
}
