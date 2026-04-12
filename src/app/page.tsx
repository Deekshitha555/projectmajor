
import Footer from "src/components/actual/Footer";

import { BackgroundBoxesDemo } from "../components/actual/backgroundboxesdemo";

import { HeroParallaxDemo } from "../components/actual/herosection";
import { NavbarDemo } from "../components/actual/navbar";


export default function Home() {
  return (
    <div className=" bg-gray-900 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen  gap-16 mobile:p-10 xs:pt-20 font-[family-name:var(--font-geist-sans)]">
        <NavbarDemo/>
        <HeroParallaxDemo/>
        <BackgroundBoxesDemo/>
        <Footer/>
    </div>
  );
}