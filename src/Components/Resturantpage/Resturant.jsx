import React from 'react'
// import Resturantcarousel from './Resturantcarousel'
import Trends from './Trends'
import SeeMore from './SeeMore'

const Resturant = () => {
  return (
   <section className='w-full container mx-auto '>
   {/* <Resturantcarousel/> */}
   <Trends/>
   <SeeMore/>
   </section>
  )
}

export default Resturant