import { ContainerScroll } from "@/components/global/container-scroll-animation";
import NavBar from "@/components/global/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Brain, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <main>
      <NavBar />

      <section className="h-screen w-full  bg-neutral-950 rounded-md relative !overflow-visible flex flex-col items-center antialiased">
        <div className="absolute inset-0  h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]"></div>
        <div className="flex flex-col md:mt-[-50px]">
        <ContainerScroll
        titleComponent={
          <>
            <div className="flex items-center justify-center gap-5 my-10 mt-40 mb-8">
              <Button 
                className="p-6 text-xl w-full sm:w-fit hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500">
                <Brain className="h-5 w-5 mr-[-8px]" /> Generate Resume
              </Button>
              <Button
                className="p-6 text-xl w-full sm:w-fit hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500">
                <Sparkles className="h-5 w-5 mr-[-8px]" /> Enhance Resume
              </Button>
            </div>
            <h1 className="text-5xl md:text-8xl  bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
              AI-Powered Resume Enhancement Tool 
            </h1>
          </>
        }
      >
        <Image
          src={`/temp-banner.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
        </div>
      </section>


    </main>
  );
}
