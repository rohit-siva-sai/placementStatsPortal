import Image from "next/image";
import { Inter } from "next/font/google";
import MainPhoto from "@/components/Home/mainPhoto";
import Companies from "@/components/Home/companies";
import AluminiWork from "@/components/Home/aluminiWork";
import HireGraph from "@/components/Home/hireGraph";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className} overflow-x-hidden`}>
      <div>
        <MainPhoto />
        <Companies />
        <AluminiWork />
        <HireGraph />4
       
      </div>
    </main>
  );
}
