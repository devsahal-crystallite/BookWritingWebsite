import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Head from 'next/head'
import HeaderContactForm from '../component/headerContactform'
import WS from '../component/writingservices';
import Slider from '../component/Slider';
import DS from '../component/demandingSpecilaist';
import IM from '../component/impressiveWorks';
import BW from '../component/bookWriting';
import CTA from '../component/cta';
import BTM from '../component/bottomLogos';
import WMODE from '../component/workMode'
import MBOOK from '../component/marketBook'
import CTA2 from '../component/cta2';
import TESTI from '../component/testimonials'
import QS from '../component/AccordionLayout';




export default function Home() {
  return (

    <>
      <main className='mx-auto '>
        <section>
        <div className='mx-auto h-[600px] slider-home aos-init aos-animate business-image'>
        <Slider />
        </div>
        </section>
        <HeaderContactForm/>
        <WS/>
        <DS/>
        <IM/>
        <BW/>
        <CTA/>
        <BTM/>
        <WMODE/>
        <MBOOK/>
        <CTA2/>
        <QS/>
        <TESTI/>
        
        
      </main>



    </>


  )
}
