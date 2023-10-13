import Navbar from "../components/Navbar"
import TablaMascara from "../components/TablaMascaras";
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Navbar currentPage="Personajes"/>

      <div className="grid lg:grid-cols-2 md:grid-cols-1 items-center mt-24">
        <div className="flex justify-center">
          <p className="font-semibold text-2xl">
            <span className="text-6xl">Conoce</span><br/> a los <span className="font-bold text-tekhelet">personajes</span> <br/> de esta temporada.
          </p>
        </div>
        <div className="flex justify-center mt-8 lg:mt-0">
          <div className="rounded-full bg-brownsugar w-72 h-72 flex items-end justify-center">
            <Image
              src="/faz.png" // Relative path to the image in the public folder
              alt="Adrian Faz"
              width={400} 
              height={267} 
              className="pl-4"
              />
          </div>
        </div>
      </div>
      <TablaMascara className="mt-28"/>
    </>
  )
}
