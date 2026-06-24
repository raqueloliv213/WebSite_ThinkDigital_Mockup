import { cn } from "./utils";
import React from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-2xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-6 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent flex flex-col space-y-3",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-1 transition duration-200">
        {icon}
        <div className="font-['Roboto',sans-serif] font-bold text-[#002855] mb-1 mt-2 text-[15px]">
          {title}
        </div>
        <div className="font-['Roboto',sans-serif] font-normal text-[#6b7a99] text-[13px] leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
};
