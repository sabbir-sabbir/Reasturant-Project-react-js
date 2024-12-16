import React, {useState} from 'react'

const ALL = ({inputValue}) => {
  const Data = [
    {
        img: "r1.png",
        title: "Bella Italia",
        body: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
        stars: "4star.png",
        review: "4.8 (34 reviews)",
        name: "restaurant",
       

    },
    {
        img: "r2.png",
        title: "Little Shucker",
        body: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
        stars: "5star.png",
        review: "5.0 (253 reviews)",
        name: "restaurant",
       
    },
    {
        img: "r3.png",
        title: "Marafuku Ramen",
        body: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
        stars: "3.5star.png",
        review: "3.0 (87 reviews)",
        name: "restaurant",
        
    },
    {
        img: "r4.png",
        title: "Bottega",
        body: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
        stars: "5star.png",
        review: "5.0 (876 reviews)",
        name: "restaurant",
        
    },
    {
        img: "r5.png",
        title: "Arabia Nights",
        body: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
        stars: "3.5star.png",
        review: "3.5 (334 reviews)",
        name: "hotel",
       
    },
    {
        img: "r6.png",
        title: "Lokma",
        body: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
        stars: "5star.png",
        review: "5.0 (253 reviews)",
        name: "hotel"

    },
    {
        img: "r7.png",
        title: "The snug",
        body: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
        stars: "4.5star.png",
        review: "4.5 (654 reviews)",
        name: "hotel"
    },
    {
        img: "r8.png",
        title: "Starbelly",
        body: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
        stars: "5star.png",
        review: "5.0 (876 reviews)",
        name: "hotel"
    },
    {
        img: "r9.png",
        title: "Iori",
        body: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
        stars: "3.5star.png",
        review: "3.5 (334 reviews)",
        name: "service"
    },
    {
        img: "r10.png",
        title: "Ngalley",
        body: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
        stars: "5star.png",
        review: "5.0 (253 reviews)",
        name: "service"
    },
    {
        img: "r11.png",
        title: "diogonal",
        body: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
        stars: "4.5star.png",
        review: "4.5 (654 reviews)",
        name: "service"
    },
    {
        img: "r12.png",
        title: "Kitoko",
        body: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
        stars: "5star.png",
        review: "5.0 (876 reviews)",
        name: "service"

    }
];

const [store, setStore] = useState(Data) 





let FilterOut = store.filter((curValue)=> {
  return curValue.name.toLowerCase().includes(inputValue)
})


  return (
    <>
    <section className='w-full container mx-auto'>
    <div className='grid grid-cols-2'>
      {FilterOut.map((cur, i)=> (
          <div key={i} className='flex gap-2'>
        <div>
          <img src={cur.img} alt="" />
        </div>
        <div>
          <div><h1>{cur.title}</h1></div>
          <div><p>{cur.body}</p></div>
          <div>
            <div><img src={cur.stars} alt="" /></div>
            <div><p>{cur.review}</p></div>
          </div>
        </div>
       </div> 
      ))}

      
       <div>
        <img src="map.png" alt="" />
       </div>
    </div>
   </section>
    </>
  
  )
}

export default ALL