import React, {useState} from 'react'

const Resturantcarousel = () => {
  const slides = [
    {
      img: "firstcarousel.png"
    },

    {
      img: "carouselimg1.jpg"
    },

    {
       img: "carouselimg2.png"
    }
  ];

  return (
    <section>
       <div className=' w-full left-0  h-[750px]  relative '>
        <div style={{backgroundImage: `url(${slides[0].img})`}} className='w-[1239px] h-[363px] rounded-2xl   duration-500'>

        </div>


   </div>
    </section>
  )
}

export default Resturantcarousel