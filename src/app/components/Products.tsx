import Image from "next/image"
import { KeyboardTextures } from "./KeyboardTextures"
import { Canvas } from "@react-three/fiber"
import { Scene } from "../SceneColor"
import { useState } from "react"
import Silk from "@/components/Silk"

export function Products() {
    const [textureUrl, setTextureUrl] = useState("/goodwell_uv.png");

    return (
        <section>
            <div className="prods w-full h-dvh bg-gradient-to-br from-sky-950 to-sky-900 relative overflow-hidden">
                <Canvas className="relative z-20" shadows="soft">
                    <Scene textureUrl={textureUrl}/>
                </Canvas>
                <div className="absolute md:bottom-10 bottom-170 md:left-20 left-10 py-3 z-20">
                    <h1 className="md:text-4xl text-3xl md:py-2 text-white">Choose Your Style</h1>
                    <h3 className="text-white md:text-2xl text-xl">Customize your keyboard from a <br />list of premium keycaps .</h3>
                </div>
                <div className="grid md:grid-cols-6 grid-cols-3 md:w-1/2 w-full bg-white rounded-2xl absolute md:right-20 md:bottom-10
                -bottom-4 px-5 py-5 md:gap-3 gap-1 z-20">
                    {KeyboardTextures.map((texture) => (
                        <button
                            key={texture.id}
                            className="w-full h-full object-cover px-5 py-10 border-2 border-black rounded-2xl hover:scale-110 transition-all duration-300"
                            onClick={() => setTextureUrl(texture.path)}
                            style={{outline: textureUrl === texture.path ? "3px solid #38bdf8" : "none"}}
                        >
                            <img src={texture.path} alt="" />
                        </button>
                    ))}
                </div>
                <div className="w-[2500px] h-full absolute top-0 z-10">
                    <Silk
                    speed={5}
                    scale={1}
                    color="#2990FF"
                    noiseIntensity={1.5}
                    rotation={0}
                    />
                </div>
            </div>
        </section>
    )
}