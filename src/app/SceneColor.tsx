"use client";

import { Environment, OrbitControls } from "@react-three/drei";
import { Keyboard } from "./components/KeyboardChange";
import { useControls } from "leva";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import * as THREE from "three";
import { useMediaQuery } from "react-responsive";

export function Scene({textureUrl}){


    const keyboardRef = useRef<THREE.Group>(null);
    const [currentTexture,setCurrentTexture] = useState(textureUrl);

    const isMobile = useMediaQuery({
        query: '(max-width: 648px)'
    })

    const scale = isMobile ? 5.4 : 12.4;

    useGSAP(() => {
        const kb = keyboardRef.current;
        if (!kb || !kb.position) return;

        if(currentTexture === textureUrl){
            gsap.fromTo(
            kb.position,
            { y: -20 },
            { y: -.6, duration: .6, ease: "power1.inOut" }
            );
        }else{
            const tl = gsap.timeline();
            tl.to(
            kb.position,
            { y: -20, duration: .7, ease: "power1.inOut" ,onComplete:() => {
                setCurrentTexture(textureUrl)
            }},
            );
            tl.to(
            kb.position,
            { y: -.6, duration: .6, ease: "power1.inOut" }
            );
        }
    }, [textureUrl]);
    
    const keyboardPos = [0, 1.02, 3.20];
    
    //const {positionX,positionY,positionZ,rotationX,rotationY,rotationZ} = useControls({positionX:0,positionY:0,positionZ:0,
        //rotationX:0,rotationY:0,rotationZ:0})

    return (
        <group ref={keyboardRef}>
            <group>
                <Keyboard scale={scale} position={keyboardPos} 
                rotation={isMobile ? [2,0,.5] : [1.9,0,0]} textureUrl={currentTexture}/>
                <OrbitControls
                    target={keyboardPos}
                    enablePan={false}
                    enableZoom={false}
                />
            </group>
            <Environment files={["/hdr/blue-studio.hdr"]} environmentIntensity={0.04} />
            <spotLight intensity={20} position={[-1.29,3.11,5.23]} castShadow
             shadow-bias={-0.0002}
             shadow-normalBias={0.002}
             shadow-mapSize={1024}
            />
            <spotLight intensity={10} position={[1.75,-1.93,5.47]} castShadow
             shadow-bias={-0.0002}
             shadow-normalBias={0.002}
             shadow-mapSize={1024}
             color={"#2990FF"}
            />

        </group>
    )
}
