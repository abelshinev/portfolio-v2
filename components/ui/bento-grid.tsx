import { cn } from "@/lib/utils";
import React from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  // Split children into 3 rows
  const rows = React.Children.toArray(children);
  const row1 = rows.slice(0, 3);
  const row2 = rows.slice(3, 7);
  const row3 = rows.slice(7, 10);

  return (
    <div className={cn("flex flex-col gap-8 overflow-x-hidden overflow-y-hidden", className)}>
      {/* Mobile: Show all items in a single column */}
      <div className="flex flex-col gap-4 md:hidden">
        {rows}
      </div>
      
      {/* Desktop: Original 3-row layout */}
      <div className="hidden md:flex gap-3 translate-x-[-3%]">{row1}</div>
      <div className="hidden md:flex gap-3 translate-x-[-18%]">{row2}</div>
      <div className="hidden md:flex gap-3 translate-x-[-5%]">{row3}</div>
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  imgLink
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  imgLink?: React.ReactNode;
}) => {
  return (
    <div className="mx-5 flex justify-center">

      <div
        className={cn(
          `group/bento row-span-1 flex flex-col justify-between rounded-sm bg-white/15 backdrop-blur-md p-5 shadow-lg transition duration-200 hover:shadow-2xl h-[15vh] md:h-[42vh] w-full md:w-[32vw] dark:bg-blue-100`
        )}
      >
        {header} 
        <div className="transition duration-200 group-hover/bento:translate-x-2">
        </div>
      </div>
    </div>
  );
};
