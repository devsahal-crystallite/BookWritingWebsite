import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCaretRight, } from "@fortawesome/free-solid-svg-icons";

const cta2 = () => {
  return (
    <>
      <div className='w-full bg-bg-cta2 bg-cover bg-no-repeat our-amazing'>
        <div className='container max-w-7xl text-left items-center pt-20 pb-20 text-white '>
          <h2 className='text-white uppercase lg:text-[34px] font-extrabold relative pl-7 leading-10'>
            <span className='font-light'>Are You Ready </span><br></br>
            To Be On The List Of <br></br> Best-Selling Authors? <br></br>
            Let’s Work Together!
          </h2>

          <div class="display-block mt-6 cursor-pointer">
            <a href="javascript:;" data-fancybox="" data-src="#popupform" class="bg-[#e1b433] border-white text-[#07163f] hover:bg-transparent hover:border-[#62e389] rounded-lg hover:text-white mr-3 btn btn-green">
              Get Started <FontAwesomeIcon icon={faCaretRight} />
            </a>
            <a href="javascript:;" class="btn btn-black-border hover:bg-[#0a0c37] hover:text-white rounded-lg">
              Live Chat
            </a>
          </div>
        </div>
      </div>
    </>

  )
}

export default cta2;
