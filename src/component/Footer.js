import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faCaretRight, } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <div className='w-full bg-footer-bg bg-cover bg-no-repeat text-white h-auto border-solid bg-[#f0f0f0] pt-10 m-0 '>
        <div className="container max-w-7xl justify-center mx-auto text-[13px]">
          <div className="grid grid-cols-4 grid-rows-1">
            <div className="col-md-3">
              <a href="#" className="logo">
                <img src="/assets/images/newimg/logo-gr.png" alt="" />
              </a>
              <p>
                498 Brush St Detroit, MI 48226, USA
              </p>
              <ul className='py-2 space-y-2'>
                <li>
                  <a href="tel:+1 (855) 469-7509 ">+1 (855) 469-7509 </a>
                </li>
                <li>
                  <a href="tel:+1 (734) 409-7256">+1 (734) 409-7256</a>
                </li>
                <li>
                  <a href="mailto:support@barnettghostwriting.com">support@barnettghostwriting.com</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h4 className='text-[#5ccd80] text-[18px] font-medium'>
                GhostWriting
              </h4>
              <ul className='py-2 space-y-2'>
                <li className='flex space-x-1 items-center'>
                  <FontAwesomeIcon icon={faCaretRight} />
                  <a href="/">Home</a>
                </li>
                <li className='flex space-x-1 items-center'>
                  <FontAwesomeIcon icon={faCaretRight} />
                  <a href="/about-us">About</a>
                </li>
                <li className='flex space-x-1 items-center'>
                  <FontAwesomeIcon icon={faCaretRight} />
                  <a href="//blog">Blog</a></li>
                  <li className='flex space-x-1 items-center'>
                  <FontAwesomeIcon icon={faCaretRight} />
                  <a href="/contact-us">Contact</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h4 className='text-[#5ccd80] text-[18px] font-medium'>
                Services
              </h4>
              <ul className='py-2 space-y-2'>
              <li className='flex space-x-1 items-center'>
                  <FontAwesomeIcon icon={faCaretRight} />
                  <a href="/affordable-ghostwriting-services">Ghostwriting</a>
                </li>
                <li className='flex space-x-1 items-center'>
                  <FontAwesomeIcon icon={faCaretRight} />
                  <a href="/genre">Genre</a>
                </li>
                <li className='flex space-x-1 items-center'>
                  <FontAwesomeIcon icon={faCaretRight} />
                  <a href="/marketing-services">Marketing</a>
                </li>
                <li className='flex space-x-1 items-center'>
                  <FontAwesomeIcon icon={faCaretRight} />
                  <a href="/book-publishing-services">Publication</a>
                </li>
                <li className='flex space-x-1 items-center'>
                  <FontAwesomeIcon icon={faCaretRight} />
                  <a href="/hardcover-book-printing-services/">Printing</a>
                </li>
                <li className='flex space-x-1 items-center'>
                  <FontAwesomeIcon icon={faCaretRight} />
                  <a href="/book-cover-design-services">Cover Design</a></li>
                  <li className='flex space-x-1 items-center'>
                  <FontAwesomeIcon icon={faCaretRight} />
                  <a href="/professional-book-editing-services">Editing</a></li>

              </ul>
            </div>
            <div className="col-md-3">
              <h4 className='text-[#5ccd80] text-[18px] font-medium'>
                Marketing
              </h4>
              <ul className='py-2 space-y-2'>
              <li className='flex space-x-1 items-center'>
                  <FontAwesomeIcon icon={faCaretRight} />
                  <a href="/marketing-services">Video Trailer</a>
                </li>
                <li className='flex space-x-1 items-center'>
                  <FontAwesomeIcon icon={faCaretRight} />
                  <a href="/marketing-services">Audio Book</a>
                </li>
                <li className='flex space-x-1 items-center'>
                  <FontAwesomeIcon icon={faCaretRight} />
                  <a href="/author">Author Website</a>
                </li>
                <li className='flex space-x-1 items-center'>
                  <FontAwesomeIcon icon={faCaretRight} />
                  <a href="/book-publishing-services">Book Publishing</a>
                </li>
                <li className='flex space-x-1 items-center'>
                  <FontAwesomeIcon icon={faCaretRight} />
                  <a href="/">Social Media Marketing</a>
                </li>
                <li className='flex space-x-1 items-center'>
                  <FontAwesomeIcon icon={faCaretRight} />
                  <a href="/">Book Translation</a>
                </li>
                <li className='flex space-x-1 items-center'>
                  <FontAwesomeIcon icon={faCaretRight} />
                  <a href="/marketing-services">Marketing Consultation</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='container w-full bg-[#63e28b] text-black mt-10  '>
          <div className='max-w-7xl mx-auto grid grid-cols-3 grid-rows-1 p-1'>
            <div>
              <p>
                © 2023 Barnett Ghostwriting - All Rights Reserved
              </p>
            </div>
            <div className='flex space-x-2 items-center text-[12px] justify-center text-center'>

              <FontAwesomeIcon icon={faFacebookF} className='rounded-[50%] border-2 p-1' />
              <FontAwesomeIcon icon={faTwitter} className='rounded-[50%] border-2 p-1' />
              <FontAwesomeIcon icon={faInstagram} className='rounded-[50%] border-2 p-1' />
              <FontAwesomeIcon icon={faLinkedinIn} className='rounded-[50%] border-2 p-1' />
            </div>
            <div>
              <ul className='flex space-x-5'>
                <li><a href="#">Sitemap</a></li>
                <li><a href="/privacy-policy">Privacy Policy</a></li>
                <li><a href="/terms-and-condition">Terms &amp; Conditions</a></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </>

  )
}

export default Footer
