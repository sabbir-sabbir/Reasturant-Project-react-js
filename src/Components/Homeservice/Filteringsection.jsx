import React, {useState} from 'react'
import { MdFilterList } from "react-icons/md";

const Filteringsection = () => {
    const ratingOfpeople = [
        {
            img: "proicon.png",
            name: "Wei Jie",
            home: "Singapore, Little india",
            rate: "5star.png",
            date: "29/11/2023",
            rating: "fivestar",
            desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
        },
        {
            img: "proicon.png",
            name: "Mei Ling",
            home: "Singapore, Little india",
            rate: "5star.png",
            date: "29/11/2023",
            rating: "fivestar",
            desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
        },
        {
            img: "proicon.png",
            name: "Wei Xiong",
            home: "Singapore, Little india",
            rate: "5star.png",
            date: "29/11/2023",
            rating: "fivestar",
            desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
        },
        {
            img: "proicon.png",
            name: "Ming Wei",
            home: "Singapore, Little india",
            rate: "5star.png",
            date: "29/11/2023",
            rating: "fivestar",
            desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
        },
        {
            img: "proicon.png",
            name: "Xin Yi",
            home: "Singapore, Little india",
            rate: "5star.png",
            date: "29/11/2023",
            rating: "fivestar",
            desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
        },
        {
            img: "proicon.png",
            name: "Zhi Hao",
            home: "Singapore, Little india",
            rate: "4star.png",
            date: "29/11/2023",
            rating: "fourstar",
            desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
        },
        {
            img: "proicon.png",
            name: "Li Hua",
            home: "Singapore, Little india",
            rate: "4star.png",
            date: "29/11/2023",
            rating: "fourstar",
            desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
        },
        {
            img: "proicon.png",
            name: "Si Ying",
            home: "Singapore, Little india",
            rate: "4star.png",
            date: "29/11/2023",
            rating: "fourstar",
            desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
        },
        {
            img: "proicon.png",
            name: "Tin Xing",
            home: "Singapore, Little india",
            rate: "4star.png",
            date: "29/11/2023",
            rating: "fourstar",
            desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
        },
        {
            img: "proicon.png",
            name: "Leew Yan",
            home: "Singapore, Little india",
            rate: "4.5star.png",
            date: "29/11/2023",
            rating: "fourstar",
            desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
        },
        {
            img: "proicon.png",
            name: "Min Taxt",
            home: "Singapore, Little india",
            rate: "4.5star.png",
            date: "29/11/2023",
            rating: "fourstar",
            desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
        },
        {
            img: "proicon.png",
            name: "Li Han",
            home: "Singapore, Little india",
            rate: "5star.png",
            date: "29/11/2023",
            rating: "fivestar",
            desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
        },
        {
            img: "proicon.png",
            name: "QIin Sat",
            home: "Singapore, Little india",
            rate: "3.5star.png",
            date: "29/11/2023",
            rating: "threestar",
            desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
        },
        {
            img: "proicon.png",
            name: "Nina Sata",
            home: "Singapore, Little india",
            rate: "3.5star.png",
            date: "29/11/2023",
            rating: "threestar",
            desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
        },
        {
            img: "proicon.png",
            name: "Nisa Sata",
            home: "Singapore, Little india",
            rate: "3.5star.png",
            date: "29/11/2023",
            rating: "threestar",
            desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
        },
        {
            img: "proicon.png",
            name: "Xing Ping",
            home: "Singapore, Little india",
            rate: "3.5star.png",
            date: "29/11/2023",
            rating: "threestar",
            desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
        },

    ]

  
  return (
    <section className='w-full container mx-auto h-auto p-5 md:p-0 mt-16'>
        <div className='flex flex-col '>
            <div className='flex items-center gap-1 border-1  border-letter rounded-full w-[190px] px-2 py-2 '>
                <div><MdFilterList className='w-6 h-6' /></div>
                <div>
                    <select className='outline-none'>
                        <option value="fivestar">5 ⭐⭐⭐⭐⭐</option>
                        <option value="fourstar">4 ⭐⭐⭐⭐</option>
                        <option value="threestar">3 ⭐⭐⭐</option>
                        <option value="twostar">2 ⭐⭐</option>
                        <option value="onestar"> 1 ⭐</option>
                    </select>
                </div>
            </div>
            {/* second div */}
            <div>
        
      </div>
        </div>

      
    </section>
  )
}

export default Filteringsection