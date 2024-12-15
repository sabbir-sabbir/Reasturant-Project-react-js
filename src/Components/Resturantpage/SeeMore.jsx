import React, { useState } from "react";
import { Button } from "@nextui-org/react";

const SeeMore = () => {
  const more = [
    {
      img: "r1.png",
      title: "Bella Italia",
      body: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      stars: "4star.png",
      review: "4.8 (34 reviews)",
    },
    {
      img: "r2.png",
      title: "Little Shucker",
      body: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      stars: "5star.png",
      review: "5.0 (253 reviews)",
    },
    {
      img: "r3.png",
      title: "Marafuku Ramen",
      body: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      stars: "3.5star.png",
      review: "3.0 (87 reviews)",
    },
    {
      img: "r4.png",
      title: "Bottega",
      body: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      stars: "5star.png",
      review: "5.0 (876 reviews)",
    },
  ];

  const [show, setShow] = useState(false);

  const HandleClick = () => {
    setShow((prev) => !prev);
  };

  return (
    <section>
      <div className="flex flex-col justify-center items-center py-16 gap-4">
        <div>
          <h1 className="text-HB font-bold leading-tight text-[22px]">
            Discover more cool restaurants
          </h1>
        </div>
        <div>
          <Button
            onClick={HandleClick}
            className=" bg-[#1677BD]  text-white py-2 px-6 rounded-full"
          >
            Show More
          </Button>
        </div>
        {show && (
          <div className="w-full container mx-auto mt-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
              {more.map((data, i) => (
                <div
                  key={i}
                  className="bg-[#F8F8F8] pb-2 rounded-lg transform hover:scale-110 transition duration-300 ease-in-out"
                >
                  <img src={data.img} alt="" />
                  <h2 className="text-xl font-bold py-1 px-2 text-HB">
                    {data.title}
                  </h2>
                  <p className="text-letter text-[14px] leading-tight py-1 px-2">
                    {data.body}
                  </p>
                  <div className="flex  py-1 px-2 gap-3 items-center">
                    <div>
                      <img
                        className="w-[80px] h-[12px]"
                        src={data.stars}
                        alt=""
                      />
                    </div>
                    <div>
                      <p className="text-letter text-[14px] leading-tight py-1 px-2">
                        {data.review}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SeeMore;
