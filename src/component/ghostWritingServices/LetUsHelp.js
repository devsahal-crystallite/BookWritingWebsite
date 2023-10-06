import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const demandingSpecilaist = () => {
    return (
        <>
            <section className="pattern-bg our-voice py-[100px] relative ">
                <div className="container max-w-7xl relative z-10">
                    <div className="heading text-center justify-content-center ">
                        <h6>Let Us Help You</h6>
                        <h2 className='text-4xl font-semibold'>What Sets Us Apart?</h2>
                        <p className='max-w-[70%] mx-auto my-5 text-[#05193c] font-normal text-[17px]'>
                            Barnett Ghostwriting is a well-known international ghostwriting and editing firm operating for over a decade. Our experts create well-versed writing that demonstrates true professionalism while exhibiting creativity. Our services are not only economical but also ensure that both the needs of the authors and the preferences of their target audience are adequately met. Some of our platform's distinguishing traits are as follows:
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 grid-cols-4 gap-4 mt-6">
                        <div className="col-span-1 md:col-span-2 col-span-1">
                            <div className="box text-center bg-[#edeff3] py-6 px-auto items-center justify-center mx-auto rounded-xl">
                                <h4 className='text-xl font-bold text-[#16295c] mx-auto mb-5'>Seal of <br></br> Approval</h4>
                                <img className='mx-auto' src="/assets/images/newimg/check-seal.png" alt="Seal of Approval" />
                                <p>100% original Content</p>
                            </div>
                        </div>
                        <div className="col-span-1 md:col-span-2 col-span-1">
                            <div className="box text-center bg-[#edeff3] py-6 px-auto items-center justify-center mx-auto rounded-xl">

                                <h4 className='text-xl font-bold text-[#16295c] mx-auto mb-5'>Reviewed by <br></br> editors</h4>
                                <img className='mx-auto' src="/assets/images/newimg/check-seal.png" alt="Reviewed by editors" />
                                <p>Error-free copy</p>
                            </div>
                        </div>
                        <div className="col-span-1 md:col-span-2 col-span-1">
                            <div className="box text-center bg-[#edeff3] py-6 px-auto items-center justify-center mx-auto rounded-xl">

                                <h4 className='text-xl font-bold text-[#16295c] mx-auto mb-5'>Unlimited <br></br> Revisions</h4>
                                <img className='mx-auto' src="/assets/images/newimg/check-seal.png" alt="Unlimited Revisions" />
                                <p>For all your book projects</p>
                            </div>
                        </div>
                        <div className="col-span-1 md:col-span-2 col-span-1">
                            <div className="box text-center bg-[#edeff3] py-6 px-auto items-center justify-center mx-auto rounded-xl">

                                <h4 className='text-xl font-bold text-[#16295c] mx-auto mb-5'>Rights of Ownership Maintained</h4>
                                <img className='mx-auto' src="/assets/images/newimg/check-seal.png" alt="Rights of Ownership Maintained" />
                                <p>No reselling</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default demandingSpecilaist
