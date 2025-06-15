import Image from "next/image";
import styles from "./page.module.css";
import HomePage from "@/components/pages/Home";
import TechStack from "@/components/pages/TechStack"
import Projects from "@/components/pages/Projects"

export default function Home() {
  return (
    <div className="font-geistSans">
      <HomePage />
      <TechStack />
      <Projects />
    </div>
  );
}
