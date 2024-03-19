"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { slideUp, opacity } from "./animate.js";
const phrases = ["DON'T JUST EAT", "NOURISH"];
export default function index() {
    const [animate, setAnimate] = useState("enter");
    const [index, setIndex] = useState(0);
    useEffect(() => {
      // Calculate total delay time for the enter animation plus the additional delay before fade out
      const totalDelayTime = (0.25 + 0.1) * 1000; // Convert seconds to milliseconds
  
      const timer = setTimeout(() => {
        setAnimate("fadeOut"); // Trigger fade out after the total delay
      }, totalDelayTime);
  
      return () => clearTimeout(timer);
    }, []);

    useEffect(() =>{
        if(index == phrases.length -1)return;
        setTimeout(()=>{
            setIndex(index +1);

        }, index == 0 ? 1000 : 150)
    }, [index])

  const animation = {
    initial: { y: "100%" },
    enter: (i) => ({
      y: "0",
   
      transition: { duration: 0.25, ease: [0.33, 1, 0.68, 1], delay: 0.25 * i },
    }),
    fadeOut: {
      y: "-100%",
      transition: { duration: 0.25 },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="h-screen w-screen bg-[#082016] flex justify-center items-center fixed z-10 "
    >
      <div className="relative">
        
      <motion.p className ="text-text text-xl md:text-2xl lg:text-5xl" variants={opacity} initial="initial" animate="enter" exit= "exit"><span></span>{phrases[index]}</motion.p>

              
        
      </div>
    </motion.div>
  );
}
