import Link from 'next/link'
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

import React, { useEffect } from 'react';
import Typed from 'typed.js';
import $ from 'jquery';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
} from "@fortawesome/free-solid-svg-icons";
//import Slider from '././Slider';

const LpSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        autoplay:true,
        slidesToScroll: 1
      };
    return (
        <>
      
            <div  className='container lg:w-[1080px] justify-center mt-10'>
                <div  className='justify-center flex space-x-4 items-center '>

                     <Slider {...settings}>
                    <div>
                        <Image src='/assets/images/sliderImg/book1.webp' width={200} height={350} alt="ebook1.webp"/>
                        <div className='flex space-x-1 py-2'>
                        <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
                        <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
                        <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
                        <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
                        <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
                        </div>
                        <h4 className='font-semibold'>Romance</h4>
                    </div>
                    <div>
                        <Image src='/assets/images/sliderImg/book2.webp' width={200} height={350} alt="ebook2.webp"/>
                        <div className='flex space-x-1 py-2'>
                        <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
                        <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
                        <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
                        <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
                        <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
                        </div>
                        <h4 className='font-semibold'>Comic</h4>
                    </div>
                    <div>
                        <Image src='/assets/images/sliderImg/book3.webp' width={200} height={350} alt="ebook3.webp"/>
                        <div className='flex space-x-1 py-2'>
                        <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
                        <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
                        <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
                        <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
                        <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
                        </div>
                        <h4 className='font-semibold'>Fiction</h4>
                    </div>
                    <div>
                        <Image src='/assets/images/sliderImg/book4.webp' width={200} height={350} alt="ebook4.webp"/>
                        <div className='flex space-x-1 py-2'>
                        <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
                        <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
                        <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
                        <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
                        <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
                        </div>
                        <h4 className='font-semibold'>Romance</h4>
                    </div>
                    <div>
                        <Image src='/assets/images/sliderImg/book5.webp' width={200} height={350} alt="ebook5.webp"/>
                        <div className='flex space-x-1 py-2'>
                        <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
                        <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
                        <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
                        <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
                        <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
                        </div>
                        <h4 className='font-semibold'>Comic</h4>
                    </div>
                    <div>
                        <Image src='/assets/images/sliderImg/book6.webp' width={200} height={350} alt="ebook6.webp"/>
                        <div className='flex space-x-1 py-2'>
                        <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
                        <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
                        <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
                        <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
                        <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
                        </div>
                        <h4 className='font-semibold'>Fiction</h4>
                    </div>
                    
                   

                    </Slider>









                  
                </div>
            </div>
           
        </>

    )
}

export default LpSlider
