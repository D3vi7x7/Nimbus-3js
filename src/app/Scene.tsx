"use client";

import { Environment } from "@react-three/drei";
import { Keyboard } from "./components/Keyboard";
import { useControls } from "leva";
import { Keycap } from "./components/Keycap";

export function Scene(){

    //const {positionX,positionY,positionZ,rotationX,rotationY,rotationZ} = useControls({positionX:0,positionY:0,positionZ:0,
        //rotationX:0,rotationY:0,rotationZ:0})

    return (
        <group>
            <Keyboard scale={9.4} position={[0,-0.49,3.5]} 
            rotation={[-1.69,2.84,3.1]}/>
            <Environment files={["/hdr/blue-studio.hdr"]} environmentIntensity={0.02} />
            <spotLight intensity={20} position={[-2,1.5,5]} castShadow
             shadow-bias={-0.0002}
             shadow-normalBias={0.002}
             shadow-mapSize={1024}
            />
            <spotLight intensity={20} position={[1.75,-1.93,5.47]} castShadow
             shadow-bias={-0.0002}
             shadow-normalBias={0.002}
             shadow-mapSize={1024}
             color={"#2990FF"}
            />

            <group>
                <Keycap position={[-1.4,0,3.8]} texture={0}/>
                <Keycap position={[0,-0.4,3.9]} texture={1}/>
                <Keycap position={[-1.8,1,3.2]} texture={2}/>
                <Keycap position={[0,1,3]} texture={3}/>
                <Keycap position={[0.7,0.9,3.47]} texture={4}/>
                <Keycap position={[1.3,-.3,3.8]} texture={5}/>
                <Keycap position={[-.7,.6,3.6]} texture={6}/>
                <Keycap position={[1.5,0.55,3.4]}/>
            </group>

        </group>
    )
}