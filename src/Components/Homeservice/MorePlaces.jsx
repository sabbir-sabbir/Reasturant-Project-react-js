import React from 'react'

const MorePlaces = () => {
  return (
    <section className='container mx-auto w-full h-auto my-24 p-5 md:p-0'>
        <div className='flex flex-col gap-4 my-16'>
          <div><h1 className='text-HB text-[12px] md:text-[28px] font-bold font-lexend'>Discover our magnificent place in photos</h1></div>
          <div><p className='text-letter font-medium text-[10px] md:text-[12px] font-lexend w-1/2'>The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing.</p></div>
        </div>

        <div className="grid grid-cols-4 gap-4 ">

  <div className="col-span-2">
    <img
      src="place1.png"
      alt="bellaitalia"
      className="w-full h-full object-cover rounded-l-2xl"
    />
  </div>


  <div className="grid grid-rows-2 gap-4">
    <div>
      <img
        src="place2.png"
        alt="bellaitalia"
        className="w-full h-full object-cover"
      />
    </div>
    <div>
      <img
        src="place4.png"
        alt="bellaitalia"
        className="w-full h-full object-cover"
      />
    </div>
  </div>


  <div className="grid grid-rows-2 gap-4">
    <div>
      <img
        src="place3.png"
        alt="bellaitalia"
        className="w-full h-full object-cover"
      />
    </div>
    <div>
      <img
        src="place5.png"
        alt="bellaitalia"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>

    </section>
  )
}

export default MorePlaces