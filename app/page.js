"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen";

import Link from "next/link";


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <div className="h-screen grid grid-cols-12 px-16  ">
      {/*
      
         <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen />}
      </AnimatePresence>
    
      */}
      <div className="my-auto flex flex-col gap-16 col-start-1 col-end-13">
        <div className="col-start-1 col-end-13  flex flex-col h-fit gap-4">
          <p className="text-2xl md:text-4xl lg:text-6xl text-text font-semibold">
            Tired of not eating to look and feel your best?
          </p>
          <p className="text-3xl md:text-5xl lg:text-7xl text-text font-bold uppercase ">
            DON’T BLAME YOURSELF
          </p>
        </div>

        <div className=" col-start-1 col-end-8   gap-4 flex flex-col">
          <p className="text-xl md:text-2xl lg:text-4xl text-text font-regular ">
            Making a meal plan that fits your unique lifestyle is complex and
            time consuming.
          </p>
          <p className="text-xl md:text-2xl lg:text-4xl text-text font-regular ">
            Let go of the hassle and let us take care of it for you
          </p>

          <div className="px-4 py-2  text-lg md:text-xl lg:text-2xl rounded-3xl w-fit bg-[#5048b8] text-text hover:-translate-y-1 transform transition duration-200 hover:shadow-md whitespace-nowrap">
            <Link href="/components/MealPlanSelection" prefetch>START NOW</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
