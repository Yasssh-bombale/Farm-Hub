import React from "react";
import { OrbitingCircles } from "./ui/OrbitingCircles";

const OrbitingCirclesDemo = () => {
  return (
    <div className="relative flex h-[600px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background  max-w-xl">
      <img
        src="/assets/farmer.jpg"
        alt="error"
        className="size-64 object-cover rounded-full absolute z-10 top-15"
      />
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black z-20">
        Farm Hub
      </span>

      {/* Inner Circles */}
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={150}
      >
        <Icons.whatsapp />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={150}
      >
        <Icons.notion />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={250}
        duration={20}
        reverse
      >
        <Icons.googleDrive />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={250}
        duration={20}
        delay={20}
        reverse
      >
        <Icons.gitHub />
      </OrbitingCircles>
    </div>
  );
};
const Icons = {
  // farmer
  gitHub: () => (
    <img src="/assets/chili.jpg" alt="error" className=" rounded-full" />
  ),
  notion: () => (
    <img src="/assets/corn.jpg" alt="error" className="rounded-full" />
  ),
  openai: () => (
    <img
      src="/assets/tomato.jpg"
      alt="error"
      className=" object-cover rounded-full"
    />
  ),
  googleDrive: () => (
    <img
      src="/assets/sugar cane.jpg"
      alt="error"
      className="object-cover rounded-full"
    />
  ),
  whatsapp: () => (
    <img
      src="/assets/tomato.jpg"
      alt="error"
      className="object-cover rounded-full"
    />
  ),
};
export default OrbitingCirclesDemo;
