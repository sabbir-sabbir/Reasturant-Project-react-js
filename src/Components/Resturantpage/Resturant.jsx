import React from 'react'
import Trends from './Trends'
import SeeMore from './SeeMore'
import MyFeedback from './MyFeedback'
import Recents from './Recents'

const Resturant = ({inputValue}) => {
  return (
   <section className='w-full  '>

   <Trends inputValue={inputValue} />
   <SeeMore/>
   <MyFeedback/>
   <Recents/>
   </section>
  )
}

export default Resturant