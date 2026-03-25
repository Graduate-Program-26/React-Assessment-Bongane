import Navbar from "./ui/navbar";
import HeroSection from "./ui/hero-section";

export default function Home() {
  return (
    <main className="h-screen ">
      <Navbar showAuth={true} />
      <HeroSection />
    </main>
  );
}
