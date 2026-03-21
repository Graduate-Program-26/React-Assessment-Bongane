import Image from "next/image";
import Navbar from "./ui/navbar";
import HeroSection from "./ui/hero-section";
import darkModeBackground from "../public/dark-mode-background.jpg";

function getBackgroundImage(srcSet = " ") {
  const imageSet = srcSet;
}

export default function Home() {
  return (
    <>
      <main className="text-white">
        <div
          className="h-screen bg-cover bg-center"
          style={{ backgroundImage: `url(${darkModeBackground.src})` }}
        >
          <Navbar />
          <HeroSection />
        </div>
      </main>
    </>
  );
}
