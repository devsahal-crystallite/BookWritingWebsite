import React from 'react';
import Link from 'next/link';
import FEATURED from '../component/genre/featuredSec'
import WEARE from '../component/genre/LetUsWEARE'
import IM from '../component/impressiveWorks';
import WMODE from '../component/workMode'
import BTM from '../component/bottomLogos';
import CTA from '../component/cta';
import TESTI from '../component/testimonials';





const about = () => {
  return (
    <>
      <main>
        <FEATURED
          banneraffordable='aboutus'
          title='The Finest Ghostwriting Service Providers'
          dec={`Spread your work to the masses and shape your idea into a form of a best-selling book. Our experts work closely with you at every step.`}
          href1={<> <Link href="javascript:;" data-fancybox="" data-src="#popupform" className="btn btn-green">
            Get Started <i className="fas fa-caret-right ml-1"></i>
          </Link> </>}
          href2={<>
            <Link href="javascript:;" className="chat btn btn-white-border ml-4">
              Live Chat
            </Link>
          </>}
        />
        <WEARE/>
        <IM />
        <WMODE />
        <BTM />
        <CTA />
        <TESTI />
      </main>
    </>
  )
}

export default about
