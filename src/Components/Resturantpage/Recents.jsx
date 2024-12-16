import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";

const Recents = () => {
  const Mydata = [
    {
      id: 1,
      img: "proicon.png",
      name: "Leslie sakho",
      home: "Canada, toronto",
      star: "5star.png",
      date: "09/11/2023",
      desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layou",
      cards: "activity1.png",
      link: "Discover",
    },
    {
      id: 2,
      img: "proicon.png",
      name: "Leslie sakho",
      home: "Canada, toronto",
      star: "5star.png",
      date: "09/11/2023",
      desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layou",
      cards: "activity2.png",
      link: "Discover",
    },
    {
      id: 3,
      img: "proicon.png",
      name: "Leslie sakho",
      home: "Canada, toronto",
      star: "5star.png",
      date: "09/11/2023",
      desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layou",
      cards: "activity3.png",
      link: "Discover",
    },
    {
      id: 4,
      img: "proicon.png",
      name: "Leslie sakho",
      home: "Canada, toronto",
      star: "5star.png",
      date: "09/11/2023",
      desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layou",
      cards: "res1.jpg",
      link: "Discover",
    },
    {
      id: 5,
      img: "proicon.png",
      name: "Leslie sakho",
      home: "Canada, toronto",
      star: "5star.png",
      date: "09/11/2023",
      desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layou",
      cards: "res2.jpg",
      link: "Discover",
    },
    {
      id: 6,
      img: "proicon.png",
      name: "Leslie sakho",
      home: "Canada, toronto",
      star: "5star.png",
      date: "09/11/2023",
      desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layou",
      cards: "res3.jpg",
      link: "Discover",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  // Next button logic
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= Mydata.length ? 0 : prevIndex + itemsPerPage
    );
  };

  // Slice data to show the current 3 items
  const visibleData = Mydata.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="w-full  h-auto p-4 mt-5 mb-6">
      <div className='flex justify-between items-center '>
        <div>
          <h2 className="text-start text-2xl font-bold mb-6 font-lexend ml-5">
            Recents avtivities
          </h2>
        </div>
        {/* Next Button */}
        <div>
          <button
            onClick={handleNext}
            className="   bg-white text-HB px-4 py-4 rounded-full shadow-md   animate-bounce"
          >
            <BsArrowRight className="" />
          </button>
        </div>
      </div>

      <div className="flex justify-evenly ">
        {visibleData.map((item) => (
          <div key={item.id} className="  bg-[#F8F8F8] w-[380px] space-y-5 py-2 px-3 rounded-lg">
            <div className="flex gap-2 items-center">
              <div>
                <img
                  className="w-8 h-8 rounded-full bg-white p-2"
                  src={item.img}
                  alt=""
                />
              </div>
              <div>
                <h1 className="font-lexend font-bold text-[16px] text-HB">
                  {item.name}
                </h1>
                <p className="text-gray-500 font-light leading-tight text-[8px]">
                  {item.home}
                </p>
              </div>
            </div>
            <div className="flex gap-2 ">
              <div>
                <img className="w-20 h-4" src={item.star} alt="" />
              </div>
              <div>
                <p className="text-gray-500 font-light leading-tight text-[8px]">
                  {item.date}
                </p>
              </div>
            </div>
            <div>
              <p className="text-gray-500  leading-tight text-[16px]">
                {item.desc}
              </p>
            </div>
            <div>
              <img src={item.cards} alt="" />
            </div>

            <div>
              <a className="text-HB font-bold font-lexend underline" href="#">
                {item.link}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recents;
