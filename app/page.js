import Image from "next/image";
import styles from "./page.module.css";
import HomePage from "@/components/pages/Home";

export default function Home() {
  return (
    <div className="font-geistSans">
      <HomePage />
      <div className="h-screen bg-zinc-800 bg-cover bg-center ">
        <div className="h-full flex items-center justify-center text-white">
          <h1 className="text-5xl font-bold">Parallax Background</h1>
        </div>
      </div>

      <div className="h-screen bg-white text-black flex items-center justify-center">
        <p>Scroll to see the parallax effect!</p>
      </div>
    </div>
  );
}
