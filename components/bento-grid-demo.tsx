import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import Image from "next/image";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function BentoGridDemo() {
  return (
    <BentoGrid className="w-full">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={<Skeleton imgLink={item.imgLink} title={item.title} icon={item.icon}/>}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = ({ imgLink, title, icon }: { imgLink?: string, title?: string, icon?: string }) => {
  if (!imgLink) {
    return <div className="relative flex flex-1 w-full h-[13vh] min-h-[6rem] rounded-sm bg-neutral-100"></div>
  }
  return (
    <div className="flex flex-1 w-full h-[13vh] min-h-[6rem] rounded-sm bg-neutral-100">
        <Image 
          src={imgLink}
          alt="tech logo"
          width={600}
          height={500}
          className="object-cover"
        />
        {icon && <Image 
          src={icon}
          alt="icon"
          width={80}
          height={80}
          className="absolute right-20 bottom-20"
        />}
        <h1 className="absolute bottom-10 right-10 text-white text-sm md:text-4xl font-semibold z-10">{title}</h1>
        
    </div>
  );

}
const items = [
  {
    title: "Python",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    icon: "/tech/icons/python.png",
    imgLink: "/tech/python.png"
  },
  {
    title: "C++",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    icon: "/tech/icons/cpp.png",
    imgLink: "/tech/cpp.png"
  },
  {
    title: "JavaScript",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    icon: "/tech/icons/javascript.png",
    imgLink: "/tech/javascript.png"
  },
  {
    title: "GitHub",
    description:
    "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    icon: "/tech/icons/git.png",
    imgLink: "/tech/git.png",
  },
  {
    title: "ThreeJS",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
    icon: "/tech/icons/threejs.png",
    imgLink: "/tech/threejs.png",
    
  },
  {
    title: "NextJS",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton />,
    icon: "/tech/icons/nextjs.png",
    imgLink: "/tech/nextjs.png",
  },
  {
    title: "TypeScript",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton />,
    icon: "",
    imgLink: "/tech/typescript.png",
  },
  {
    title: "Express",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    icon: "/tech/icons/expressjs.png",
    imgLink: "/tech/express.png",

  },
  {
    title: "TypeScript",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton />,
    icon: "/tech/icons/typescript.png",
    imgLink: "/tech/typescript.png",
  },
  {
    title: "Java",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton />,
    icon: "/tech/icons/java.png",
    imgLink: "/tech/java.png",
  },
];
