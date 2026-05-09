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
const Skeleton = ({ imgLink, title }: { imgLink?: string, title?: string }) => {
  if (!imgLink) {
    return <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-neutral-900/50"></div>
  }
  return (
    <div className="flex flex-1 w-full h-full rounded-xl bg-neutral-900/50 overflow-hidden relative group">
        <Image 
          src={imgLink}
          alt={title || "tech logo"}
          fill
          className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
           <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
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
