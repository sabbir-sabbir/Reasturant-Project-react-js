import React, {useState} from 'react'
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
  } from "@nextui-org/react";

import { ImSpoonKnife } from "react-icons/im";
import { MdPhoneInTalk } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { GoClockFill } from "react-icons/go";
import { MdDatasetLinked } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTikTok } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { LuDownload } from "react-icons/lu";

const Moreinfo = () => {
   
    const pictureurl = 'menu.png';

    const {isOpen, onOpen, onOpenChange} = useDisclosure();
  return (
   <section className='container mx-auto w-full h-auto p-3 md:p-0'>
    <div className='flex flex-col md:flex-row justify-between items-center gap-4 '>
        <div className='space-y-5' >
          <div>
          <h1 className='font-bold text-HB font-lexend text-xl md:text-4xl'>More informations</h1>
          </div>
          <div className='flex items-center  gap-2 '>
            <div><ImSpoonKnife className='w-5 h-5'/></div>
            <div>
            <Button className='underline text-sm bg-transparent py-0 px-0' placement='outside' onPress={onOpen}>See the menu</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}  c>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 "></ModalHeader>
              <ModalBody>
               <div className='flex flex-col items-center space-y-4 '>
                <div>
                <img src={pictureurl} alt="Downloadable"  />
                </div>
                <div>
                    <h1 className='font-bold text-black text-xl '>Menu Bella Italia</h1>
                </div>
                <div className='flex gap-2 items-center border-1 rounded-xl py-2 px-3'> <span><LuDownload className='w-6 h-5 text-blue-500 '/></span> <a href={pictureurl} download="menu.png" className='text-blue-500 text-sm'>Dowload this menu</a></div>
                </div>
              </ModalBody>
              <ModalFooter>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
            </div>
          </div>

          <div className='flex items-center gap-2'>
            <div><MdPhoneInTalk className='w-5 h-5'/></div>
            <div><p className='text-HB text-sm '>+847 87 37 29 01</p></div>
          </div>

          <div className='flex items-center gap-2'>
            <div><MdLocationPin className='w-5 h-5'/></div>
            <div><p className='text-HB text-sm '>Singapour, Bishan</p></div>
          </div>

          <div className='flex items-center gap-2'>
            <div><GoClockFill className='w-5 h-5'/></div>
            <div><p className='text-HB text-sm '>7j/7, 08:00 - 22:00</p></div>
          </div>

          <div className='flex items-center gap-2'>
            <div><MdDatasetLinked className='w-5 h-5'/></div>
            <div><p className='text-HB text-sm underline cursor-pointer '>www.bellaitalia.com</p></div>
          </div>

          <div className='flex gap-3'>
            <a href="#"><FaFacebookF className='w-6 h-6' /></a>
            <a href="#"><AiFillInstagram className='w-6 h-6'/></a>
            <a href="#"><AiOutlineTikTok className='w-6 h-6'/></a>
            <a href="#"><RiWhatsappFill className='w-6 h-6'/></a>

          </div>

         

        </div>
        {/* second div */}
        <div className='p-4 md:p-0'><img src="minimap.png" alt="" /></div>
    </div>
   </section>
  )
}

export default Moreinfo