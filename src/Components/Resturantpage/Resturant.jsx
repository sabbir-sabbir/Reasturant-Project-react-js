import React from 'react'
import Trends from './Trends'
import SeeMore from './SeeMore'
import MyFeedback from './MyFeedback'
import Recents from './Recents'

const Resturant = () => {
  return (
   <section className='w-full  '>

   <Trends/>
   <SeeMore/>
   <MyFeedback/>
   <Recents/>
   </section>
  )
}

export default Resturant