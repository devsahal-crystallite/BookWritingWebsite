import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const writingservices = () => {
    return (
        <>

            <div className="container-xl bg-second-section-2 bg-cover bg-no-repeat mx-auto  p-8 ">
                <div className='max-w-7xl mx-auto grid grid-cols-5 grid-rows-1 items-center justify-center space-x-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 '>
                    <div><h4 className='text-[24px] font-[800] md:py-5 md:text-[28px] xs:text-[28px] xs:py-5'>Exceptional Book
                        Writing Services!</h4></div>

                    <div>
                        <Image src="/assets/images/ex-book1.png" alt="ebook publishing" width={100} height={83} />
                        <h5 className='font-bold m-1'>E-books</h5>
                        <p>
                            Make your book publication available in the digital form comprising of story, text, and images and is convenient to read.
                        </p>
                    </div>
                    <div>
                        <Image src="/assets/images/ex-book2.png" alt="trade books" width={90} height={83} />
                        <h5 className='font-bold m-1'>Trade Books</h5>
                        <p>
                            A book that is intended and designed for the general public, which a commercial publisher publishes.
                        </p>
                    </div>
                    <div>
                        <Image src="/assets/images/ex-book3.png" alt="magazine publishing" width={144} height={83} />
                        <h5 className='font-bold m-1'>Magazines</h5>
                        <p>
                            It is a printed or digital published item that consists of articles, stories, and poems, mostly in the form of illustrations.
                        </p>
                    </div>
                    <div>
                        <Image src="/assets/images/ex-book4.png" alt="graphic book" width={121} height={100} />
                        <h5 className='font-bold m-1'>Photo Books</h5>
                        <p>
                            A photo book is mostly found at the coffee tables, comprising the photographs as a means of the overall content.
                        </p>
                    </div>
                </div>




            </div>




        </>

    )
}

export default writingservices
