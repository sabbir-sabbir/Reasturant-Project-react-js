import React from 'react'

const Discover = () => {
  return (
    <section className='container mx-auto w-full h-auto p-2 mb-5 '>
        <div>
            <h1 className='font-lexend text-HB text-2xl text-start p-3 font-bold '>Also Discover</h1>
        </div>
        <div className='flex items-center gap-4'>
           <div><img  src="discover1.png" alt="" /></div>
           <div><img  src="discover2.png" alt="" /></div>
           <div><img src="discover3.png" alt="" /></div>
        </div>
    </section>
  )
}

export default Discover