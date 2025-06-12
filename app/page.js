import Image from "next/image";
import styles from "./page.module.css";
import HomePage from "@/components/pages/Home";
import TechStack from "@/components/pages/TechStack"

export default function Home() {
  return (
    <div className="font-geistSans">
      <HomePage />
      <TechStack />
    </div>
  );
}
