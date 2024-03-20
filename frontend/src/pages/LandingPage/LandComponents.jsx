"use client";
import React from "react";
import Navbar from './../../components/Navbar'
import Footer from './../../components/Footer'
import { Boxes } from "./../../components/ui/background-boxes";
import { cn } from "./../../utils/cn";
import img1 from "./../../assets/img1.svg"

export default function BackgroundBoxesDemo() {
  return (
    <>
    <Navbar />
    <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />

      {/* <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
        Tailwind is Awesome
      </h1> */}
      {/* <p className="text-center mt-2 text-neutral-300 relative z-20">
        Framer motion is the best animation library ngl
      </p> */}

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



// "use client";
// import React from "react";
// import Navbar from './../../components/Navbar'
// import Footer from './../../components/Footer'
// import { BackgroundBeams } from "./../../components/ui/background-beams";

// export default function BackgroundBeamsDemo() {
//   return (
//     <>
//     <Navbar />
//     <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
//       <div className="max-w-2xl mx-auto p-4">
//         <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
//           Join the waitlist
//         </h1>
//         <p></p>
//         <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
//           Welcome to MailJet, the best transactional email service on the web.
//           We provide reliable, scalable, and customizable email solutions for
//           your business. Whether you&apos;re sending order confirmations,
//           password reset emails, or promotional campaigns, MailJet has got you
//           covered.
//         </p>
//         <input
//           type="text"
//           placeholder="hi@manuarora.in"
//           className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
//         />
//       </div>
//       <BackgroundBeams />
//     </div>
//     <Footer />
//     </>
//   );
// }



// import React from "react";

// export default function GridBackgroundDemo() {
//   return (
//     <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
//       {/* Radial gradient for the container to give a faded look */}
//       <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
//       <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
//         Backgrounds
//       </p>
//     </div>
//   );
// }
