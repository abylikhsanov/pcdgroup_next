import Image from "next/image";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { OurProducts } from "./components/OurProducts";
import { AboutUs } from "./components/AboutUs";

export default function Home() {
  return (
    <main className="flex bg-white">
      <div className="flex flex-col w-full">
        <Header />
        <Hero />
        <OurProducts />
        <AboutUs />
      </div>
    </main>
  );
}
