import Silk from "@/components/Silk"
import Image from "next/image"
import logo from  "../../../public/icon.svg"

export function Footers(){
    return (
        <section>
            <div className="w-full min-h-[40vh] md:h-[60vh] flex flex-col items-center justify-center px-4 py-8">
                <h1 className="t1 text-xl sm:text-2xl md:text-3xl pt-6 pb-6 text-center">Experience the comfort of typing</h1>
                <h1 className="text-3xl sm:text-4xl md:text-5xl pb-20 text-center italic">ORDER YOURS NOW</h1>
                <a
                  className="text-2xl sm:text-4xl md:text-6xl mx-auto rounded-full text-white bg-sky-700 px-8 sm:px-14 border-4 border-black py-4 sm:py-6 md:py-10 hover:bg-sky-500 transition-colors duration-300 block text-center"
                  href=""
                >
                  BUY VAPOUR 75
                </a>
            </div>
            <div className="w-full min-h-[80px] bg-black flex flex-col sm:flex-row items-center justify-between px-4 sm:px-10 py-4 gap-4">
                <div className="logo flex items-center gap-2 sm:gap-4">
                    <Image className="w-6 h-6 md:w-10 md:h-[20vh]" src={logo} alt="" />
                    <h1 className="text-xl md:text-3xl font-semibold text-[#2990FF]">Nimbus</h1>
                </div>
                <h3 className="text-white text-sm md:text-base text-center">&copy; 2025 Nimbus Keyboards Pvt ltd.</h3>
            </div>
        </section>
    )
}