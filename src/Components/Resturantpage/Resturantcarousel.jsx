import React, {useState} from 'react'
import { HiArrowSmallLeft,  HiArrowSmallRight  } from "react-icons/hi2";


const Resturantcarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
      { id: 1, imgSrc: "firstcarousel.png" },
      { id: 2, imgSrc: "firstcarousel.png" },
     
    ];
  
    const nextSlide = () => {
      setCurrentSlide((prevIndex) => (prevIndex + 1) % slides.length);
    };
  
    const prevSlide = () => {
      setCurrentSlide(
        (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
      );
    };
  
  return (
    <>
    <div className="container mx-auto h-[450px] w-full bg-[#1677BD] rounded-xl flex flex-col justify-between items-center relative overflow-hidden">
      {/* Heading */}
      <h1 className="text-white text-[28px] mt-4 ">
        Find the best restaurant ratings below
      </h1>

      {/* Image Display */}
      <div className="h-full w-full p-8 flex justify-center items-center">
        <img
          src={slides[currentSlide].imgSrc}
          alt="Carousel Slide"
          className="h-[300px] w-auto object-contain"
        />
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#FFFFFF99]/50  text-black  py-3 px-3 rounded-full shadow hover:bg-gray-700"
      >
        <HiArrowSmallLeft/>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#FFFFFF99]/50 text-black py-3 px-3 rounded-full shadow hover:bg-gray-700"
      >
       <HiArrowSmallRight/>
      </button>
    </div>
    
    </>
  )
}

export default Resturantcarousel