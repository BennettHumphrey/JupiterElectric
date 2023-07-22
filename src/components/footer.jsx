import React from 'react'
import { AiFillInstagram as Insta } from "react-icons/ai";
import { FaFacebookF as FB } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='flex justify-center my-6 gap-5'>
      <Insta className='h-[50px] w-[50px]' />
      <FB className='h-[40px] w-[40px] mt-[4px]' />
    </div>
  )
}

export default Footer