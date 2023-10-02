import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const topHeader = () => {
  return (
    <div>
  
      <div className='w-full bg-[#2b2460]'>
        <div className='container lg:w-[1280px] mx-auto flex text-white p-2 cursor-pointer space-x-4 items-center'>
          <div className='flex flex-row space-x-3 basis-8/12'>
            <h3 className='text-[14px]'>Follow Us:</h3>
            <Image className='invert text-[16px]' src="/assets/images/facebook.svg" style={{ color: "#ffffff", }} width={15} height={15} />
            <Image className='invert' src="/assets/images/twitter.svg" style={{ color: "#ffffff", }} width={15} height={15} />
            <Image className='invert' src="/assets/images/instagram.svg" style={{ color: "#ffffff", }} width={15} height={15} />
            <Image className='invert' src="/assets/images/linkedin.svg" style={{ color: "#ffffff", }} width={15} height={15} />

            {/* <FontAwesomeIcon icon={faFacebook} style={{color: "#ffffff", size: "2x"}} />          
          <FontAwesomeIcon icon={faTwitter} style={{color: "#ffffff",}} />          
          <FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff",}} /> 
          <FontAwesomeIcon icon={faLinkedin} style={{color: "#ffffff",}} />          */}
          </div>
          <div className='flex space-x-2'>
            <Image className='invert' src="/assets/images/mail.svg" style={{ color: "#ffffff", }} width={20} height={20} />
            <p className='text-[12px]'>support@barnettghostwriting.com</p>
          </div>
          <div className='flex space-x-2'>
            <Image className='invert' src="/assets/images/phone-solid.svg" style={{ color: "#ffffff", }} width={15} height={15} />
            <p className='text-[12px]'>+1 (855) 469-7509</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default topHeader
