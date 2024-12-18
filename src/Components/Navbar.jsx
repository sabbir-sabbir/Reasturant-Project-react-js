import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { TbWorld } from "react-icons/tb";
import {Button} from '@nextui-org/react'

const MyNavbar = ({getData}) => {
    
  return (
     <>
     {/* Main section */}
     <section className='  container mx-auto w-[90%] md:w-full  h-[80px]'>
      <div className='  md:w-full  flex  justify-evenly items-center py-2 gap-5 '>
        {/* image */}
        <div className=' w-[100px]  md:w-[250px]' >
          <img className='py-1' src="logo.png" alt="" />
        </div>
        {/* search bar */}
        <div >
          <div className=' w-[100px]  md:w-[450px] flex h-5 md:h-8'>
            <input onChange={getData} className=' w-[100px] md:w-full  rounded-full outline-none  cursor-pointer p-3 border-1 border-gray-800'  type="text" placeholder='restaurant, hotel, service      |      Singapore' />
          </div>
        </div>
       
       {/* Feedback */}
        <div className='flex gap-2 items-center'>
          <div>
          <TbWorld className=' text-[12] md:text-[25px] text-letter ' />
          </div>
          <div>
            <Button   className='bg-HB w-auto  text-[8px] md:text-[12px] md:font-medium rounded-full hover:bg-gray-700 text-white '>My Feedback for business</Button>
          </div>
        </div>
      </div>
   
     </section>
     <hr />

     {/* Nav section two */}
     <section className=' w-[90%] container mx-auto md:w-full  h-20  mt-4 ' >
         <ul className='grid grid-cols-6 md:grid-cols-12 gap-12 mt-3 md:mt-1 md:gap-0 container mx-auto  '>
          <div>
          <li>
            <NavLink to='/'> 
            <div className='w-4 h-3 flex flex-col items-center'>
              <img src="all.png" alt="" />
              <p className='text-letter font-light text-center text-[12px]'>All</p>
            </div>
            </NavLink>
          </li>
          </div>
          
          <div>
          <li>
            <NavLink to='/restaurant'> 
            <div className='w-4 h-3 flex flex-col items-center'>
              <img src="resturantl.png" alt="" />
              <p className='text-letter font-light text-center text-[12px]'>Resturants</p>
            </div>
            </NavLink>
          </li>
          </div>

          <div>
          <li>
            <NavLink> 
            <div className='w-4 h-3 flex flex-col items-center'>
              <img src="hotell.png" alt="" />
              <p className='text-letter font-light text-center text-[12px]'>Hotels</p>
            </div>
            </NavLink>
          </li>
          </div>

          <div>
          <li>
            <NavLink to="/homeservice"> 
            <div className='w-4 h-3 flex flex-col items-center'>
              <img src="homel.png" alt="" />
              <p className='text-letter font-light text-center text-[12px]'>Home services</p>
            </div>
            </NavLink>
          </li>
          </div>

          <div>
          <li>
            <NavLink> 
            <div className='w-4 h-3 flex flex-col items-center'>
              <img src="shoppingl.png" alt="" />
              <p className='text-letter font-light text-center text-[12px]'>Shopping</p>
            </div>
            </NavLink>
          </li>
          </div>

          <div>
          <li>
            <NavLink> 
            <div className='w-4 h-3 flex flex-col items-center'>
              <img src="carl.png" alt="" />
              <p className='text-letter font-light text-center text-[12px]'>Car location</p>
            </div>
            </NavLink>
          </li>
          </div>

          <div>
          <li>
            <NavLink> 
            <div className='w-4 h-3 flex flex-col items-center'>
              <img src="spal.png" alt="" />
              <p className='text-letter font-light text-center text-[12px]'>Beauty & Spa</p>
            </div>
            </NavLink>
          </li>
          </div>

          <div>
          <li>
            <NavLink> 
            <div className='w-4 h-3 flex flex-col items-center'>
              <img src="parkl.png" alt="" />
              <p className='text-letter font-light text-center text-[12px]'>Park</p>
            </div>
            </NavLink>
          </li>
          </div>

          <div>
          <li>
            <NavLink> 
            <div className='w-4 h-3 flex flex-col items-center'>
              <img src="musiuml.png" alt="" />
              <p className='text-letter font-light text-center text-[12px]'>museum</p>
            </div>
            </NavLink>
          </li>
          </div>

          <div>
          <li>
            <NavLink> 
            <div className='w-4 h-3 flex flex-col items-center'>
              <img src="carwashl.png" alt="" />
              <p className='text-letter font-light  text-center text-[12px]'>Car wash</p>
            </div>
            </NavLink>
          </li>
          </div>

          <div>
          <li>
            <NavLink> 
            <div className='w-4 h-3 flex flex-col items-center'>
              <img src="barl.png" alt="" />
              <p className='text-letter font-light text-center text-[12px]'>Bars</p>
            </div>
            </NavLink>
          </li>
          </div>

          <div>
          <li>
            <NavLink> 
            <div className='w-4 h-3 flex flex-col items-center'>
              <img src="gyml.png" alt="" />
              <p className='text-letter font-light text-center text-[12px]'>Gyms</p>
            </div>
            </NavLink>
          </li>
          </div>
        

        {/* end */}
         </ul>
     </section>
     </>
  )
}

export default MyNavbar