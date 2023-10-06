import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import TABII from '../genre/TabNavigation'

const demandingSpecilaist = () => {
    return (
        <>
            <section className="pattern-bg our-voice py-[100px] relative xs:py-10">
                <div className="container max-w-7xl relative z-10 ">
                    <div className="heading text-center justify-content-center ">
                        <h6>WE ARE</h6>
                        <h2 className='text-[34px] font-bold capitalize xs:text-[28px]'>The Tree Companion In <br></br>Your Author's Journey</h2>
                        <p className='max-w-[90%] mx-auto my-5 text-[#05193c] font-normal text-[17px]'>
                            Every masterpiece that we see is driven by inspiration. In order to make your book the best-selling one, we give your book the boost that it needs, which eventually it's the position from ordinary to the most loveable. Our writers condense your ideas in the finest form with the help of their professional expertise.                        </p>
                    </div>
                </div>
                <div className="relative mb-10 text-white " >
                    <div className='max-w-7xl mx-auto py-10 xs:px-5'>
                        <TABII/>
                        
                        
                        
                        {/* <div className='heading flex grid-cols-2 xs:flex-none xs:grid xs:grid-cols-1 '>
                            <div className='basis-1/3'>
                                <h6 className='text-black text-[17px]'>Our Achievement</h6>
                                <h2 className='text-[34px] font-semibold'>That Makes Us Proud</h2>
                            </div>
                            <div className='basis-2/3 text-[17px]'>
                                <p>
                                    Our experts' experience work is exemplary, which is why the client comes to us. We stand confident in sharing our attainments with you, which clearly portrays the quality of our work and clients' trust in our service.
                                </p>
                            </div>
                        </div>
                        <div className='grid grid-cols-4 grid-rows-1  gap-2 text-center items-center pb-16 xs:grid-cols-1 xs:p-2'>
                            <div class="border-b-2 border-[#e0b51c] py-10">
                                <div class="box">
                                    <h6 className='text-[70px] text-[#62e389] font-normal'>12+</h6>
                                    <p>Years of
                                        experience
                                    </p>
                                </div>
                            </div>
                            <div class="border-b-2 border-[#e0b51c]  py-10">
                                <div class="box">
                                    <h6 className='text-[70px] text-[#62e389] font-normal'>18k</h6>
                                    <p>Books
                                        Written
                                    </p>
                                </div>
                            </div>
                            <div class="border-b-2 border-[#e0b51c] py-10">
                                <div class="box">
                                    <h6 className='text-[70px] text-[#62e389] font-normal'>450+</h6>
                                    <p>Books
                                        Internationally
                                        Acclaimed
                                    </p>
                                </div>
                            </div>
                            <div class="border-b-2 border-[#e0b51c]  py-10">
                                <div class="box">
                                    <h6 className='text-[70px] text-[#62e389] font-normal'>750+</h6>
                                    <p>Native
                                        Writers
                                    </p>
                                </div>
                            </div>
                        </div> */}

                    </div>

                </div>
            </section>
        </>

    )
}

export default demandingSpecilaist
