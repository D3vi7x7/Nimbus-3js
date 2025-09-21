import ScrollVelocity from "@/components/ScrollVelocity"
import Image from "next/image"
import logo from "../../../public/icon.svg"
import { Canvas } from "@react-three/fiber"
import { Switch } from "./Switch"
import { useControls } from "leva"

export function Switches(){

    //const {positionX,positionY,positionZ,rotationX,rotationY,rotationZ} = useControls({positionX:0,positionY:0,positionZ:0,
        //rotationX:0,rotationY:0,rotationZ:0})

    return (
        <section className="w-full relative">
            <ScrollVelocity
                texts={[`PRECISION CRAFTING JOYFUL EXPERIENCE QUALITY MATERIAL`]} 
                velocity={100} 
                className="custom-scroll-text bg-[#2990FF] md:text-9xl text-4xl py-6"
            />
            <div className="md:h-[70vh] h-[140vh] py-5">
                <h1 className="md:text-6xl py-5 text-3xl flex justify-center italic">HEAR THE KEYS !!</h1>
                <div className="grid md:grid-cols-4 grid-cols-1 md:gap-1 gap-4 md:py-20 md:ml-18">
                    <div className="md:w-[20vw] md:h-[40vh] w-[90vw] h-[30vh] md:ml-0 ml-5 relative bg-gray-900 rounded-xl cursor-pointer overflow-hidden">
                        <Canvas shadows="soft" className="absolute z-20">
                            <group scale={2} position={[0,-.07,4.6]} rotation={[0,-.7,-.2]}>
                                <Switch color={"#FF0000"} keyType={"red-1"}/>
                                <spotLight intensity={20} position={[.15,.52,.73]}/>
                            </group>
                        </Canvas>
                        <h2 className="text-white/30 w-[700px] absolute top-15 -left-20 text-6xl z-10">RED RED RED</h2>
                        <h2 className="text-white/30 w-[700px] absolute top-30 -left-20  text-6xl z-10">RED RED RED</h2>
                        <h2 className="text-white/30 w-[700px] absolute top-45 -left-20 text-6xl z-10">RED RED RED</h2>
                        <h2 className="text-white/30 w-[700px] absolute top-60 -left-20  text-6xl z-10">RED RED RED</h2>
                    </div>
                    <div className="md:w-[20vw] md:h-[40vh] w-[90vw] h-[30vh] md:ml-0 ml-5 relative bg-gray-900 rounded-xl cursor-pointer overflow-hidden">
                        <Canvas shadows="soft" className="absolute z-20">
                            <group scale={2} position={[0,-.07,4.6]} rotation={[0,-.7,-.2]}>
                                <Switch color={"#2990FF"} keyType={"blue-2"}/>
                                <spotLight intensity={20} position={[.15,.52,.73]}/>
                            </group>
                        </Canvas>
                        <h2 className="text-white/30 w-[700px] absolute top-15 -left-20 text-6xl z-10">BLUE BLUE BLUE</h2>
                        <h2 className="text-white/30 w-[700px] absolute top-30 -left-20  text-6xl z-10">BLUE BLUE BLUE</h2>
                        <h2 className="text-white/30 w-[700px] absolute top-45 -left-20 text-6xl z-10">BLUE BLUE BLUE</h2>
                        <h2 className="text-white/30 w-[700px] absolute top-60 -left-20  text-6xl z-10">BLUE BLUE BLUE</h2>
                    </div>
                    <div className="md:w-[20vw] md:h-[40vh] w-[90vw] h-[30vh] md:ml-0 ml-5 bg-gray-900 rounded-xl cursor-pointer overflow-hidden relative">
                        <Canvas shadows="soft" className="absolute z-20">
                            <group scale={2} position={[0,-.07,4.6]} rotation={[0,-.7,-.2]}>
                                <Switch color={"#000000"} keyType={"black-1"}/>
                                <spotLight intensity={20} position={[.15,.52,.73]}/>
                            </group>
                        </Canvas>
                        <h2 className="text-white/30 w-[900px] absolute top-15 -left-20 text-6xl z-10">BLACK BLACK BLACK</h2>
                        <h2 className="text-white/30 w-[900px] absolute top-30 -left-20  text-6xl z-10">BLACK BLACK BLACK</h2>
                        <h2 className="text-white/30 w-[900px] absolute top-45 -left-20 text-6xl z-10">BLACK BLACK BLACK</h2>
                        <h2 className="text-white/30 w-[900px] absolute top-60 -left-20  text-6xl z-10">BLACK BLACK BLACK</h2>
                    </div>
                    <div className="md:w-[20vw] md:h-[40vh] w-[90vw] h-[30vh] md:ml-0 ml-5 relative bg-gray-900 rounded-xl cursor-pointer overflow-hidden">
                        <Canvas shadows="soft" className="absolute z-20">
                            <group scale={2} position={[0,-.07,4.6]} rotation={[0,-.7,-.2]}>
                                <Switch color={"#964B00"} keyType={"brown-2"}/>
                                <spotLight intensity={20} position={[.15,.52,.73]}/>
                            </group>
                        </Canvas>
                        <h2 className="text-white/30 w-[1000px] absolute top-15 -left-20 text-6xl z-10">BROWN BROWN BROWN</h2>
                        <h2 className="text-white/30 w-[1000px] absolute top-30 -left-20  text-6xl z-10">BROWN BROWN BROWN</h2>
                        <h2 className="text-white/30 w-[1000px] absolute top-45 -left-20 text-6xl z-10">BROWN BROWN BROWN</h2>
                        <h2 className="text-white/30 w-[1000px] absolute top-60 -left-20  text-6xl z-10">BROWN BROWN BROWN</h2>
                    </div>
                </div>
            </div>
            <ScrollVelocity
                texts={[`PRECISION CRAFTING JOYFUL EXPERIENCE QUALITY MATERIAL`]} 
                velocity={-100} 
                className="custom-scroll-text bg-[#2990FF] md:text-9xl text-4xl py-6"
            />
        </section>
    )
}