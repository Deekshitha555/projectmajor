import Footer from "src/components/actual/Footer";
import { BackgroundBoxesDemo } from "../components/actual/backgroundboxesdemo";
import { HeroParallaxDemo } from "../components/actual/herosection";
import { NavbarDemo } from "../components/actual/navbar";

export default function Home() {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center w-full px-4 sm:px-6 lg:px-10">
      
      <NavbarDemo />

      <main className="w-full max-w-7xl flex flex-col gap-10">
        <HeroParallaxDemo />
        <BackgroundBoxesDemo />
      </main>

      <Footer />
    </div>
  );
}