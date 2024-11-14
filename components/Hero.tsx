import React from 'react';
import { Spotlight } from './ui/Spotlight';

const Hero = () => {
  return (
    <div className="pb-20 p-36">
      <div>
        <Spotlight
          className=" -top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full md:-left-32 w-[90vw] h-[80vh]"
          fill="purple"
        />
        <Spotlight
          className="top-28 left-80 md:-left-32 w-[90vw] h-[80vh]"
          fill="blue"
        />



<Spotlight
          className=" -top-40 right-10 md:-right-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 right-full md:-right-32 w-[50vw] h-[80vh]"
          fill="purple"
        />
        <Spotlight
          className="top-28 right-80 md:-right-32 w-[50vw] h-[80vh]"
          fill="blue"
        />

      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.3] bg-grid-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center, transparent_20%, black)]" />
      </div>
    </div>
  );
};

export default Hero;
