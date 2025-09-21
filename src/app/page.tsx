"use client";

import Image from "next/image"
import logo from  "../../public/icon.svg"
import { Canvas } from "@react-three/fiber"
import { Scene } from "./Scene"
import { Bento } from "./components/Bento";
import { Products } from "./components/Products";
import { Switches } from "./components/Switches";
import { Footers } from "./components/Footers";

const page = () => {
  return (
    <div className="hero blue-gradient-bg h-dvh">
      <div className="navbar px-6 py-6 flex w-full items-center justify-between">
        <div className="logo flex items-center md:gap-4 gap-2">
          <Image className="md:w-10 md:h-10 w-6 h-6" src={logo} alt="" />
          <h1 className="md:text-3xl text-xl font-semibold text-[#2990FF]">Nimbus</h1>
        </div>
        <div className="menus">
          <h1 className="bg-[#2990FF] md:px-6 md:py-3 md:text-2xl text-sm py-1 px-3 rounded-xl text-white font-bold italic cursor-pointer">BUY NOW</h1>
        </div>
      </div> 
      <Canvas shadows="soft">
        <Scene/>
      </Canvas>
      <div className="hero-txt text-white text-shadow-black/30 text-shadow-lg">
        <h1 className="md:text-8xl text-5xl absolute md:top-50 md:left-30 top-40 left-6">BUILT FOR <br />THE BOLD</h1>
        <div className="absolute md:right-20 bottom-30 right-5">
          <h2 className="md:text-4xl text-xl font-bold italic">TYPING REINVENTED.</h2>
          <h3 className="md:text-xl text-sm">Fall in love with the craft ,thanks to our professional <br />grade keycaps and switches.</h3>
        </div>
      </div>

      <Bento/>
      <Switches/>
      <Products/>
      <Footers/>
    </div>
  )
}

export default page
