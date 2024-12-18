import React from "react";
import { Progress } from "@nextui-org/react";

const Rating = () => {
  return (
    <>
      <section className="w-full container mx-auto h-auto border-y-1 border-letter p-6  mt-16 md:py-6">
        <div className="flex gap-8 flex-col md:flex-row  items-center">
          {/* first div */}
          <div>
            <div className="flex gap-3 items-center">
              <div>
                <img src="overall.png" alt="" />
              </div>
              <div>
                <h1 className="font-lexend text-Hb font-bold md:text-[26px] text-[10px]">
                  Overall rating
                </h1>
              </div>
            </div>
            <div className="flex flex-col space-y-5 justify-center items-center">
              <div>
                <p className="font-lexend text-letter text-[16px]">
                  834 Reviews
                </p>
              </div>
              <div>
                <img className="w-25 h-5" src="5star.png" alt="" />
              </div>
            </div>
          </div>
          {/* second div */}
          <div className=" w-[250px] md:w-[600px] ml-6 md:ml-0 p-4  md:p-1">
            <div className="flex flex-col gap-2 w-full max-w-md">
              <Progress aria-label="Loading..." color="primary" value={100} />
              <Progress aria-label="Loading..." color="primary" value={50} />
              <Progress aria-label="Loading..." color="primary" value={40} />
              <Progress aria-label="Loading..." color="primary" value={30} />
              <Progress aria-label="Loading..." color="primary" value={20} />
              <Progress aria-label="Loading..." color="primary" value={10} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rating;
