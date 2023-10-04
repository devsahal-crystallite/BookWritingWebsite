import React from 'react'
import Link from 'next/link';

import FEATURED from '../component/ghostWritingServices/featuredSec'
import LETUSHELPSEO from '../component/SeoContentWriting/LetUsHelpSEO'
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
          banneraffordable='seo'
          title='Amplify Your Brand Image Through SEO Content Writing'
          dec={` Create SEO-optimized content that converts and attracts more organic search traffic to boost your online visibility and credibility.`}
          href1={<> <Link href="javascript:;" data-fancybox="" data-src="#popupform" className="btn btn-green">
            Get Started <i className="fas fa-caret-right ml-1"></i>
          </Link> </>}
          href2={<>
            <Link href="javascript:;" className="chat btn btn-white-border ml-4">
              Live Chat
            </Link>
          </>}
        />
        <LETUSHELPSEO/>
        <GhostWriting/>
        <CREATIVEGHOSTWRITERS/>

        <WMODE/>
        <BTM/>
        <CTA/>
        <TESTI/>
        
      </main>
    </>
  )
}

export default Ghostwriting;
