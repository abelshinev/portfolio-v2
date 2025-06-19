import Image from "next/image";
import styles from "./page.module.css";
import HomePage from "@/components/pages/Home";
import TechStack from "@/components/pages/TechStack"
import About from "@/components/pages/About"
import Projects from "@/components/pages/Projects"

export default function Home() {
  return (
    <div className="font-geistSans">
      <HomePage />
      <About />
      <TechStack />
      <Projects />
      
    </div>
  );
}
