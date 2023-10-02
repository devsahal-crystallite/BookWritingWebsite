import Link from 'next/link'
import React, { useState } from 'react'
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

const Header = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  // Function to toggle submenu visibility
  const toggleSubMenu = () => {
    setShowSubMenu((prevShowSubMenu) => !prevShowSubMenu);
  };

  return (
    // Top header
    <>
      <div className='w-full bg-[#2b2460]'>
        <div className='container lg:max-w-7xl mx-auto flex text-white p-2 cursor-pointer space-x-4 items-center'>
          <div className='flex flex-row space-x-2 basis-8/12 items-center text-[12px]'>
            <h3 className='text-[14px]'>Follow Us:</h3>

            <FontAwesomeIcon icon={faFacebookF} className='rounded-[50%] border-2 p-1'/>          
            <FontAwesomeIcon icon={faTwitter} className='rounded-[50%] border-2 p-1'/>          
            <FontAwesomeIcon icon={faInstagram} className='rounded-[50%] border-2 p-1'/> 
            <FontAwesomeIcon icon={faLinkedinIn}  className='rounded-[50%] border-2 p-1'/>         
          </div>
          <div className='flex space-x-2'>
            <FontAwesomeIcon icon={faEnvelope} beat style={{color: "#ffffff"}} />            
            <p className='text-[12px]'>support@barnettghostwriting.com</p>
          </div>
          <div className='flex space-x-2 text-center'>
            <FontAwesomeIcon icon={faPhone} fade style={{color: "#ffffff"}} />
            <p className='text-[12px]'>+1 (855) 469-7509</p>
          </div>
        </div>
      </div>
      <div className='w-full'>
      <header className="bg-white shadow-md">
    <div className="container mx-auto py-4 max-w-7xl">
        <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
                <a href="" className="text-xl font-bold text-indigo-500">
                    <img src="/assets/images/barnett-logo.webp" alt="Barnett ghostwriting logo" />
                </a>
            </div>
            <nav className="hidden md:flex space-x-4 text-[14px] text-[#030919] font-bold">
                <ul className="flex space-x-6">
                    <li><a href="/" className="text-gray-600 hover:text-indigo-500">Home</a></li>
                    <li><a href="/about-us" className="text-gray-600 hover:text-indigo-500">About</a></li>
                    <li className="group relative">
                        <a href="javascript:;" className="text-gray-600 hover:text-indigo-500">Writing Services  </a><FontAwesomeIcon icon={faCaretDown} />
                        <ul className="absolute hidden space-y-2 justify-between items-center mx-auto text-center justify-center lg:w-60 bg-[#2b2460] text-white z-10 border border-gray-200 group-hover:block hover:text-white">
                            <li className=''><a href="/affordable-ghostwriting-services/"><Image src="/assets/images/newimg/magazine-writing.png" width={50} height={50}/> Ghostwriting</a></li>
                            <li className=''><a href="/seo-content-writing-services/"><Image src="/assets/images/newimg/magazine-writing.png" width={50} height={50}/> SEO Writing</a></li>
                            <li className=''><a href="/article-writing-services/"><Image src="/assets/images/newimg/magazine-writing.png" width={50} height={50}/> Article Writing</a></li>
                            <li className=''><a href="/web-copywriting-services/"><Image src="/assets/images/newimg/magazine-writing.png" width={50} height={50}/> Web Copy Writing</a></li>
                            <li className=''><a href="/press-release-writing-services/"><Image src="/assets/images/newimg/magazine-writing.png" width={50} height={50}/> Press Release</a></li>
                            <li className=''><a href="/script-writing-services"><Image src="/assets/images/newimg/magazine-writing.png" width={50} height={50}/> Script Writing</a></li>
                            <li className=''><a href="/magazine-writing/"><Image src="/assets/images/newimg/magazine-writing.png" width={50} height={50}/> Magazine Writing</a></li>
                        </ul>
                    </li>
                    <li><a href="/genre/" className="text-gray-600 hover:text-indigo-500">Genre</a></li>
                    <li><a href="/ebook-marketing-services/" className="text-gray-600 hover:text-indigo-500">Marketing</a></li>
                    <li><a href="/book-publishing-services/" className="text-gray-600 hover:text-indigo-500">Publication</a></li>
                    <li><a href="/hardcover-book-printing-services/" className="text-gray-600 hover:text-indigo-500">Printing</a></li>
                    <li><a href="/book-cover-design-services/" className="text-gray-600 hover:text-indigo-500">Cover Design</a></li>
                    <li><a href="/professional-book-editing-services/" className="text-gray-600 hover:text-indigo-500">Editing</a></li>
                    <li><a href="/blog/" className="text-gray-600 hover:text-indigo-500">Blog</a></li>
                    <li><a href="/contact-us/" className="text-gray-600 hover:text-indigo-500">Contact Us</a></li>
                </ul>
            </nav>
            <a href="javascript:;" className="md:hidden">
                <span className="block w-6 h-0.5 bg-gray-600"></span>
                <span className="block w-6 h-0.5 mt-1 bg-gray-600"></span>
                <span className="block w-6 h-0.5 mt-1 bg-gray-600"></span>
            </a>
        </div>
    </div>
</header>

      </div>
    </>
  )
}

export default Header
