import React from 'react'
import Link from 'next/link'

import FEATURED from '../component/ghostWritingServices/featuredSec'
import LETUSHELP from '../component/ghostWritingServices/LetUsHelp'
import GhostWriting from '@/component/ghostWritingServices/ghostWriting'
import CREATIVEGHOSTWRITERS from '../component/ghostWritingServices/creativeGhostWriters'


import WMODE from '../component/workMode'
import CTA from '../component/cta';
import BTM from '../component/bottomLogos';
import TESTI from '../component/testimonials'




const Ghostwriting = () => {
  return (
    <>
      <main>

        <FEATURED
          banneraffordable='affo'
          title='The Best Affordable and Professional Ghostwriting Services Agency'
          dec={` We've helped thousands of authors express themselves eloquently, and you may be the next! Hire our top-tier expert writers today and imprint your words in your readers' minds forever.`}
          href1={<> <Link href="javascript:;" data-fancybox="" data-src="#popupform" className="btn btn-green">
            Get Started <i className="fas fa-caret-right ml-1"></i>
          </Link> </>}
          href2={<>
            <Link href="javascript:;" className="chat btn btn-white-border ml-4">
              Live Chat
            </Link>
          </>}
        />
        <LETUSHELP />
        <GhostWriting />
        <CREATIVEGHOSTWRITERS />

        <WMODE />
        <BTM />
        <CTA />
        <TESTI />

      </main>
    </>
  )
}

export default Ghostwriting;
