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
          className="absolute right-8 md:right-20 bottom-8 md:bottom-20 w-8 h-8 md:w-20 md:h-20"
        />}
        <h1 className="absolute bottom-4 md:bottom-10 right-6 md:right-8 text-white text-right w-full md:w-[10vw] text-xs md:text-sm lg:text-4xl font-semibold z-10 px-2 md:px-0">{title}</h1>
        
    </div>
  );

}
const items = [
  {
    title: "Python",
    description: "Machine learning, automation, computer vision, backend systems, and forecasting pipelines.",
    icon: "/tech/icons/python.png",
    imgLink: "/tech/python.png"
  },
  {
    title: "C++",
    description: "Performance-focused programming, DSA, and systems-level problem solving.",
    icon: "/tech/icons/cpp.png",
    imgLink: "/tech/cpp.png"
  },
  {
    title: "JavaScript",
    description: "Interactive frontend systems, real-time interfaces, and modern web applications.",
    icon: "/tech/icons/javascript.png",
    imgLink: "/tech/javascript.png"
  },
  {
    title: "TypeScript",
    description: "Type-safe scalable frontend and backend application development.",
    icon: "/tech/icons/typescript.png",
    imgLink: "/tech/typescript.png"
  },
  {
    title: "React",
    description: "Component-driven frontend architecture for performant user experiences.",
    icon: "/tech/icons/react.png",
    imgLink: "/tech/react.png"
  },
  {
    title: "Next.js",
    description: "Production-grade fullstack applications with optimized rendering and routing.",
    icon: "/tech/icons/nextjs.png",
    imgLink: "/tech/nextjs.png"
  },
  {
    title: "Node.js",
    description: "Backend services, APIs, authentication systems, and real-time processing.",
    icon: "/tech/icons/nodejs.png",
    imgLink: "/tech/nodejs.png"
  },
  {
    title: "FastAPI",
    description: "High-performance inference APIs and ML-powered backend services.",
    icon: "/tech/icons/fastapi.png",
    imgLink: "/tech/fastapi.png"
  },
  {
    title: "PostgreSQL",
    description: "Relational database design, querying, and scalable application data handling.",
    icon: "/tech/icons/postgresql.png",
    imgLink: "/tech/postgresql.png"
  },
  {
    title: "MongoDB",
    description: "Flexible document-based storage for modern backend architectures.",
    icon: "/tech/icons/mongodb.png",
    imgLink: "/tech/mongodb.png"
  },
  {
    title: "TailwindCSS",
    description: "Rapid responsive UI development with utility-first styling workflows.",
    icon: "/tech/icons/tailwind.png",
    imgLink: "/tech/tailwind.png"
  },
  {
    title: "GitHub",
    description: "Version control, collaboration workflows, CI/CD integration, and deployment pipelines.",
    icon: "/tech/icons/git.png",
    imgLink: "/tech/git2.png",
  },
  {
    title: "TensorFlow",
    description: "Deep learning experimentation and intelligent model development.",
    icon: "/tech/icons/tensorflow.png",
    imgLink: "/tech/tensorflow.png"
  },
  {
    title: "PyTorch",
    description: "Research-focused neural network development and training workflows.",
    icon: "/tech/icons/pytorch.png",
    imgLink: "/tech/pytorch.png"
  },
  {
    title: "YOLOv8",
    description: "Real-time computer vision detection systems and explainable AI workflows.",
    icon: "/tech/icons/yolo.png",
    imgLink: "/tech/yolo.png"
  },
  {
    title: "OCI",
    description: "Cloud deployment, infrastructure management, and scalable hosting workflows.",
    icon: "/tech/icons/oci.png",
    imgLink: "/tech/oci.png"
  },
];
