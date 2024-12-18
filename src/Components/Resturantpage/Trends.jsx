import React, {useState} from 'react'

const Trends = ({inputValue}) => {
    const Restutantreviews = [
        {
            img: "r1.png",
            title: "Bella Italia",
            body: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            stars: "4star.png",
            review: "4.8 (34 reviews)",
            name: "restaurant"
        },
        {
            img: "r2.png",
            title: "Little Shucker",
            body: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            stars: "5star.png",
            review: "5.0 (253 reviews)",
            name: "restaurant"
        },
        {
            img: "r3.png",
            title: "Marafuku Ramen",
            body: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            stars: "3.5star.png",
            review: "3.0 (87 reviews)",
            name: "restaurant"
        },
        {
            img: "r4.png",
            title: "Bottega",
            body: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            stars: "5star.png",
            review: "5.0 (876 reviews)",
            name: "restaurant"
        },
        {
            img: "r5.png",
            title: "Arabia Nights",
            body: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            stars: "3.5star.png",
            review: "3.5 (334 reviews)",
            name: "hotel"
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
    const [store, setStore] = useState(Restutantreviews) 
    
    
    
    
    
    let FilterOut = store.filter((curValue)=> {
      return curValue.name.toLowerCase().includes(inputValue)
    })
  return (
    <section className='container mx-auto w-[90%] md:w-full h-auto p-10 md:p-0 mt-8'>
        <div className='h-auto'> <h1 className='text-HB font-bold py-3 text-[32px]'>The latest trends</h1></div>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 '>
            {FilterOut.map((item, index)=> (
                <div key={index}  className='bg-[#F8F8F8] pb-2 rounded-lg effect'>
                    <img  src={item.img} alt="" />
                    <h2 className='text-xl font-bold py-1 px-2 text-HB'>{item.title}</h2>
                    <p className='text-letter text-[14px] leading-tight py-1 px-2'>{item.body}</p>
                    <div className='flex  py-1 px-2 gap-3 items-center'>
                        <div>
                            <img className='w-[80px] h-[12px]' src={item.stars} alt="" />
                        </div>
                        <div>
                            <p className='text-letter text-[14px] leading-tight py-1 px-2'>{item.review}</p>
                        </div>
                    </div>

                </div>
            ))
                
            }

        </div>
        
    </section>
  )
}

export default Trends