import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faCaretDown
} from "@fortawesome/free-solid-svg-icons";

const topHeader = () => {
  return (
    <>
      <div className='w-full bg-[#2b2460]'>
        <div className='container max-w-7xl mx-auto flex text-white p-2 cursor-pointer space-x-4 items-center'>
          <div className='flex flex-row space-x-2 basis-8/12 items-center text-[12px]'>
            <h3 className='lg:text-[14px]'>Follow Us:</h3>

            <FontAwesomeIcon icon={faFacebookF} className='rounded-[50%] border-2 p-1'/>          
            <FontAwesomeIcon icon={faTwitter} className='rounded-[50%] border-2 p-1'/>          
            <FontAwesomeIcon icon={faInstagram} className='rounded-[50%] border-2 p-1'/> 
            <FontAwesomeIcon icon={faLinkedinIn}  className='rounded-[50%] border-2 p-1'/>         
          </div>
          <div className='flex space-x-2'>
            <FontAwesomeIcon icon={faEnvelope} beat style={{color: "#ffffff"}} />            
            <p className='lg:text-[12px] sm:text-[8px]'>support@barnettghostwriting.com</p>
          </div>
          <div className='flex space-x-2 text-center'>
            <FontAwesomeIcon icon={faPhone} fade style={{color: "#ffffff"}} />
            <p className='lg:text-[12px] sm:text-[8px]'>+1 (855) 469-7509</p>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default topHeader
