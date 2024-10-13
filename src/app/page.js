import Hero from "@/components/hero";
import {Navbar} from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="h-screen">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}
