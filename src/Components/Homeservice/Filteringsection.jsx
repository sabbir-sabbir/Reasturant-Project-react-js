import React, {useState} from 'react'
import { MdFilterList } from "react-icons/md";
import SeeMore from '../Resturantpage/SeeMore';

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

    const [filter, setFilter] = useState("fivestar"); 

  // Filter data based on selected value
  const filteredData = ratingOfpeople.filter((person) =>
    filter === "all" ? true : person.rating === filter
  );
  
  return (
    <section className='w-full container mx-auto h-auto p-5 md:p-0 mt-16'>
        <div className='flex flex-col '>
            <div className='flex items-center gap-1 border-1  border-letter rounded-full w-[190px] px-2 py-2 '>
                <div><MdFilterList className='w-6 h-6' /></div>
                <div>
                    <select  onChange={(e) => setFilter(e.target.value)} value={filter} className='outline-none'>
                       <option value="all">Filter</option>
                        <option value="fivestar">5 ⭐⭐⭐⭐⭐</option>
                        <option value="fourstar">4 ⭐⭐⭐⭐</option>
                        <option value="threestar">3 ⭐⭐⭐</option>
                        <option value="twostar">2 ⭐⭐</option>
                        <option value="onestar"> 1 ⭐</option>
                    </select>
                </div>
            </div>
            {/* second div */}
         <div className='grid grid-cols-1 gap-3 p-5 items-center'>
        {filteredData.map((item, index)=> (
            <div className='flex flex-col gap-1 items-start bg-[#F8F8F8] px-4 py-4 rounded-xl effect'>
                <div><img className='w-10 h-10 bg-white  text-black p-2 rounded-full' src={item.img} alt="" /></div>
                <div>
                    <h1 className='font-lexend font-bold text-HB text-[16px]'>{item.name}</h1>
                </div>
                <div>
                    <p className='text-letter font-semibold text-[10px]'>{item.home}</p>
                </div>
                <div className='flex items-center gap-2 mt-2'>
                    <div><img src={item.rate} alt="" /></div>
                    <div><p className='text-HB text-[14px]'>{item.date}</p></div>
                </div>
                <div>
                    <p className='text-letter  text-[12px] leading-tight w-1/2'>The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.</p>
                </div>
            </div>
        ))

        }
      </div>
        </div>

      <SeeMore/>
    </section>
  )
}

export default Filteringsection