"use client";
import React from "react";
import Navbar from './../../components/Navbar'
import Footer from './../../components/Footer'
import { Boxes } from "./../../components/ui/background-boxes";
import { cn } from "./../../utils/cn";
import img1 from "./../../assets/img3.png"

export default function BackgroundBoxesDemo() {
  return (
    <>
    <Navbar />
    <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />

      <div className={cn("h-screen w-full flex")}>
        <div className="w-1/2 flex flex-col items-center justify-center gap-3">
          <h1 className="w-4/5 text-5xl text-white z-20 font-bold">Your next big</h1>
          <h1 className="w-4/5 text-6xl text-white z-20 font-bold">Idea starts here</h1>
          <p className="w-4/5 mt-10 text-xl text-white z-20 font-semibold">The ideal framework to learn how to manage all aspects of startup.</p>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <img src={img1} alt="hero_img" className="z-20 w-4/5 "/>
        </div>
      </div>

    </div>
    <Footer />
    </>
  );
}