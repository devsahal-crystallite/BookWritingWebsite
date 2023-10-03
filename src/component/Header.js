import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import TOPHEADER from '../component/topHeader'
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
      

      <TOPHEADER/>
      <div className='w-full'>
      <header className="bg-white shadow-md">
    <div className="container mx-auto py-4 max-w-7xl">
        <div className="lg:flex items-center justify-between md:grid md:grid-cols-1 md:grid-rows-1 sm:grid sm:grid-cols-1 sm:grid-rows-1">
            <div className="lg:flex-shrink-0">
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
                        <ul className="absolute space-y-4 hidden flex-row items-center mx-auto py-3 px-10 text-center justify-center lg:w-auto bg-[#2b2460] text-white z-10 border border-gray-200 group-hover:block hover:text-white">
                            <li className=''><a href="/affordable-ghostwriting-services/"><img className='w-[50%] mx-auto' src="/assets/images/newimg/magazine-writing.png" /> Ghostwriting</a></li>
                            <li className=''><a href="/seo-content-writing-services/"><img className='w-[50%] mx-auto' src="/assets/images/newimg/magazine-writing.png" /> SEO Writing</a></li>
                            <li className=''><a href="/article-writing-services/"><img className='w-[50%] mx-auto' src="/assets/images/newimg/magazine-writing.png" /> Article Writing</a></li>
                            <li className=''><a href="/web-copywriting-services/"><img className='w-[50%] mx-auto' src="/assets/images/newimg/magazine-writing.png" /> Web Copy Writing</a></li>
                            <li className=''><a href="/press-release-writing-services/"><img className='w-[50%] mx-auto' src="/assets/images/newimg/magazine-writing.png" /> Press Release</a></li>
                            <li className=''><a href="/script-writing-services"><img className='w-[50%] mx-auto' src="/assets/images/newimg/magazine-writing.png" /> Script Writing</a></li>
                            <li className=''><a href="/magazine-writing/"><img className='w-[50%] mx-auto' src="/assets/images/newimg/magazine-writing.png" /> Magazine Writing</a></li>
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
