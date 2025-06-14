import { cn } from "@/lib/utils";

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
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className,
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
    <div className="p-1 mx-5 flex justify-center">
      
      
      <div
        className={cn(
          "group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-sm border border-white/20 bg-white/10 backdrop-blur-md p-4 shadow-lg transition duration-200 hover:shadow-2xl w-[24vw] dark:bg-white/5",
          className
        )}
      >
        {header}
        <div className="transition duration-200 group-hover/bento:translate-x-2">
        </div>
      </div>
    </div>
  );
};
