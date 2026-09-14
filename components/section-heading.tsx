import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className="flex flex-col items-center mb-12">
      <h2 className="font-display text-4xl font-black capitalize tracking-tight text-gray-900 dark:text-white">
        {children}
      </h2>
      <span className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#ec4899]" />
    </div>
  );
}
