import React from 'react'
import {Button} from '@nextui-org/react'

const MyFeedback = () => {
  return (
    <section className='bg-[#F2F2F2] w-full '>
        <div>
            <div className=' container mx-auto flex p-5 items-center gap-6 '>
              <div className='w-1/2  space-y-6'>
                <h1 className='text-HB font-bold leading-tight text-start text-[26px] font-lexend'>MyFeedback for Business has resources to help you plan, start, grow, and advertise your small business</h1>
                <p className='text-letter text-[16px] leading-tight '>The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.</p>
                <Button size='xl' className='bg-HB font-light md:font-medium rounded-full hover:bg-gray-700 text-white'>Explore MyFeedback business</Button>
              </div>
              <div className='w-1/2'>
                <img src="feedback.png" alt="" />
              </div>
               
            </div>
            
        </div>
    </section>
  )
}

export default MyFeedback