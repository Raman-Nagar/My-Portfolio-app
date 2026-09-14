import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className="flex flex-col items-center mb-10">
      <h2 className="font-display text-3xl font-bold capitalize text-gray-900 dark:text-white">
        {children}
      </h2>
      <span className="mt-2 h-1 w-12 rounded-full bg-[#6366f1]" />
    </div>
  );
}
