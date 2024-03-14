import Image from "next/image";

export default function Home() {
  return (
    <div className = "h-screen w-screen bg-[#103E2B]">
        <div className = "h-full w-full grid grid-cols-3 grid-rows-3">
            <div className = "col-start-2 row-start-2 text-[#e9f7f1]">
              <div className = "flex text-center justify-center flex-col">
              <span className = "text-xl md:text-2xl lg:text-3xl uppercase">
                  NOURISH is currently undergoing visual redesign.
                </span>
                <span className = "text-lg md:text-xl lg:text-2xl pt-10">
                  Sorry for the Inconvenience.
                </span>
              </div>
               
                
            </div>
        </div>
    </div>
  );
}
