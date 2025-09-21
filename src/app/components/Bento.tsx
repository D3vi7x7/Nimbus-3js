import Image from "next/image"
import r1 from "../../../public/Prismic Files/render_6.png";
import r2 from "../../../public/Prismic Files/render_9.png";
import r3 from "../../../public/Prismic Files/render_11.png";
import r4 from "../../../public/Prismic Files/render_4_2.png";

export function Bento(){
    return (
        <section className="bento py-8 px-4 md:py-20 w-full md:px-40">
            <h1 className="text-2xl sm:text-4xl md:text-7xl md:px-30 ml-2 sm:ml-10 md:ml-20 mb-8">VAPOUR75 FEATURES</h1>
            <div className="features grid grid-cols-1 gap-5 md:px-30 md:py-20 md:grid-cols-5 md:grid-rows-2">
                <div className="col-span-1 md:col-span-3 relative group overflow-hidden">
                    <Image className="rounded-2xl group-hover:scale-[110%] transition-all ease-in-out duration-300 w-full h-full object-cover" src={r1} alt=""/>
                    <h2 className="absolute bottom-4 left-4 text-lg sm:text-xl md:text-2xl text-white">Aluminium Finished Back-Case</h2>        
                </div>
                <div className="relative col-span-1 md:col-span-2 group overflow-hidden">
                    <Image className="rounded-2xl group-hover:scale-[110%] transition-all ease-in-out duration-300 w-full h-full object-cover" src={r2} alt=""/>
                    <h2 className="absolute bottom-4 left-4 text-lg sm:text-xl md:text-2xl text-white">Hot Swappable Keys</h2>        
                </div>
                <div className="col-span-1 md:col-span-2 relative group overflow-hidden">
                    <Image className="rounded-2xl group-hover:scale-[110%] transition-all ease-in-out duration-300 w-full h-full object-cover" src={r3} alt=""/>
                    <h2 className="absolute bottom-4 left-4 text-lg sm:text-xl md:text-2xl text-white">High Grade Key Caps</h2>        
                </div>
                <div className="col-span-1 md:col-span-3 relative group overflow-hidden">
                    <Image className="rounded-2xl group-hover:scale-[110%] transition-all ease-in-out duration-300 w-full h-full object-cover" src={r4} alt=""/>
                    <h2 className="absolute bottom-4 left-4 text-lg sm:text-xl md:text-2xl text-white">Multi-functional Knob for editing</h2>        
                </div>
            </div>
        </section>
    )
}