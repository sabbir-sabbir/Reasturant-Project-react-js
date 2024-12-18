import React from "react";
import { CiClock2 } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";

const Main = () => {
  return (
    <section className='w-full bg-[url("bella.webp")] h-auto  bg-cover bg-no-repeat mt-12 md:mt-0  '>
      <div className="flex flex-col  py-28 bg-gradient-to-r h-auto from-[#10101097] via-[#10101083] to-[#10101000] ">
        <h1 className="font-bold text-white text-[40px] ml-16">Bella italia</h1>
        <div className="flex gap-2 items-center py-8 ml-16">
          <div>
            <img className="w-15 h-5" src="5star.png" alt="" />
          </div>
          <div>
            <p className="text-white text-[14px]">5.0 (834 reviews)</p>
          </div>
        </div>
        <p className="w-1/2 text-white text-[16px] mb-12 ml-16">
          The lorem ipsum is, in printing, a series of meaningless words used
          temporarily to calibrate a layout. The lorem ipsum is, in printing, a
          series of meaningless words used temporarily to calibrate a layout.
        </p>
        <div className="flex items-center gap-3 mb-5 ml-16">
          <div>
            <IoLocationOutline className="text-zinc-800 bg-white rounded-full " />
          </div>
          <div>
            <p className="text-white text-[14px] leading-tight">
              Singapour, Bishan-Ang Mo Kio Park{" "}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 ml-16">
          <div>
            <CiClock2 className="text-zinc-800 bg-white rounded-full " />
          </div>
          <div>
            <p className="text-white text-[14px] leading-tight">
              7j/7, 08:00 - 22:00
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
