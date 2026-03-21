import Navbar from "./ui/navbar";
import HeroSection from "./ui/hero-section";
import darkModeBackground from "../public/dark-mode-background.jpg";

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
