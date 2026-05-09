import { cn } from "@/lib/utils";
import React from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  const rows = React.Children.toArray(children);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr", className)}>
      {rows}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento flex flex-col justify-between rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm p-4 transition duration-200 hover:bg-white/10 hover:border-white/20",
        className
      )}
    >
      <div className="w-full h-40 mb-4 overflow-hidden rounded-lg">
        {header}
      </div>
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="font-bold text-neutral-200 mb-1 mt-2">
          {title}
        </div>
        <div className="font-normal text-zinc-400 text-xs">
          {description}
        </div>
      </div>
    </div>
  );
};
