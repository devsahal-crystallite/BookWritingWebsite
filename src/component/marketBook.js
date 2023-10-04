import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCaretRight, } from "@fortawesome/free-solid-svg-icons";

const marketBook = () => {
    return (

        <>
            <section className="bg-process-bg22 bg-contain bg-no-repeat relative pt-10 pb-10 text-[#05193c]">
                <div className="container mx-auto justify-center items-center pt-10 pb-14">
                    <div className='max-w-7xl mx-auto grid grid-cols-2 grid-rows-1 justify-center items-center'>
                        <div className="col-md-6 pl-5">
                            <div className="heading">
                                <h6>
                                    Market Your Book
                                </h6>
                                <h2 className='lg:text-[34px] font-semibold mt-2'>
                                    In The Best Possible Way!
                                </h2>
                                <p className='lg:text-[17px] font-normal'>
                                    Keep yourself up to date with news of our brand in popular outlets and channels, Barnett ghostwriting is frequently featured due to the exceptional work&nbsp;of&nbsp;our&nbsp;writers.
                                </p>
                            </div>
                            <ul className='grid grid-cols-2 grid-rows-1 gap-4 p-2'>
                                <li className='flex bg-gradient-to-r from-yellow-100 to-slate-50 rounded-2xl items-center px-3 p-3'>
                                    <img src="/assets/images/newimg/black-check.png" alt="" />Video Trailer</li>
                                <li className='flex bg-gradient-to-r from-yellow-100 to-slate-50 rounded-2xl items-center px-3 p-3'>

                                    <img src="/assets/images/newimg/black-check.png" alt="" />Audio Book</li>
                                <li className='flex bg-gradient-to-r from-yellow-100 to-slate-50 rounded-2xl items-center px-3 p-3'>

                                    <img src="/assets/images/newimg/black-check.png" alt="" />Book Cover Designing</li>
                                <li className='flex bg-gradient-to-r from-yellow-100 to-slate-50 rounded-2xl items-center px-3 p-3'>

                                    <img src="/assets/images/newimg/black-check.png" alt="" />Author Website</li>
                                <li className='flex bg-gradient-to-r from-yellow-100 to-slate-50 rounded-2xl items-center px-3 p-3'>

                                    <img src="/assets/images/newimg/black-check.png" alt="" />Book Publishing</li>
                                <li className='flex bg-gradient-to-r from-yellow-100 to-slate-50 rounded-2xl items-center px-3 p-3'>

                                    <img src="/assets/images/newimg/black-check.png" alt="" />Social Media Marketing</li>
                                <li className='flex bg-gradient-to-r from-yellow-100 to-slate-50 rounded-2xl items-center px-3 p-3'>

                                    <img src="/assets/images/newimg/black-check.png" alt="" />Book Translation</li>
                                <li className='flex bg-gradient-to-r from-yellow-100 to-slate-50 rounded-2xl items-center px-3 p-3'>

                                    <img src="/assets/images/newimg/black-check.png" alt="" />Marketing Consultation</li>
                                <li className='flex bg-gradient-to-r from-yellow-100 to-slate-50 rounded-2xl items-center px-3 p-3'>

                                    <img src="/assets/images/newimg/black-check.png" alt="" />Amazon Marketing</li>
                                <li className='flex bg-gradient-to-r from-yellow-100 to-slate-50 rounded-2xl items-center px-3 p-3'>

                                    <img src="/assets/images/newimg/black-check.png" alt="" />Barnes &amp; Noble Nook Edition</li>
                            </ul>
                            <div className="display-block mt-6 cursor-pointer">
                                <Link href="javascript:;" data-fancybox="" data-src="#popupform" className="bg-[#62e389] border-[#62e389] text-[#07163f] hover:bg-[#62e389] hover:border-[#62e389] rounded hover:text-white mr-3 btn btn-green">
                                    Get Started <FontAwesomeIcon icon={faCaretRight} />
                                </Link>
                                <Link href="javascript:;" className="btn btn-black-border hover:bg-[#0a0c37] hover:text-white rounded-lg">
                                    Live Chat
                                </Link>
                            </div>
                        </div>
                        <div className="z-10">
                            <img src="/assets/images/newimg/editing-img.webp" className="float-left" alt="ghostwriting agency" />
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}

export default marketBook
