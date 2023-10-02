import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {faCaretRight,} from "@fortawesome/free-solid-svg-icons";

const ctaa = () => {
  return (
    <>
    <div className='w-full bg-CTA bg-cover bg-no-repeat '>
        <div className='container text-center justify-center items-center pt-16 pb-16 text-white'>
        <h3 className='text-[38px] font-bold'>Don’t Hesitate To Contact Us! <br></br>We Are Working Round The Clock
            </h3>
            <p>
            If you need to contact us at any time of the day, don’t hesitate to contact our representatives.
        </p>
        <div class="display-block mt-6 cursor-pointer">
                                <a href="javascript:;" data-fancybox="" data-src="#popupform" class="bg-[#62e389] border-[#62e389] text-[#07163f] hover:bg-[#62e389] hover:border-[#62e389] rounded hover:text-white mr-3 btn btn-green">
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

export default ctaa;
