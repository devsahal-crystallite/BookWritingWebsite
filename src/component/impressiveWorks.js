import React from 'react'
import Image from 'next/image'
import LpSlider from '../component/Lpslider'


const impressiveWorks = () => {
  return (
    <>
      <div>
        <section className='container mx-auto'>
          <div className='lg:pt-20 lg:pb-20 bg-[#f2f2f2]'>
            <div className="heading text-center">
              <h6>
                Our Impressive Work
              </h6>
              <h2 className='lg:text-[34px] font-semibold text-[#222e41]'>
                From Rough Draft to Successful Publishing<br></br>
                We Have Made it Possible
              </h2>
              <p className='justify-center px-96'>
                We make it possible for you to make your book the next big read for the readers. Bring us your rough drafts, and let our team work magnificently on their execution.
              </p>
            </div>
           <LpSlider/>
          </div>
        </section>
      </div>
    </>
  )
}

export default impressiveWorks
