import React from 'react'

import FEATURED from '../component/ghostWritingServices/featuredSec'
import LHMagazine from '../component/MagazineWriting/LetUsMagazine'
import GhostWriting from '../component/ghostWritingServices/ghostWriting'
import CREATIVEGHOSTWRITERS from '../component/ghostWritingServices/creativeGhostWriters'


import WMODE from '../component/workMode'
import CTA from '../component/cta';
import BTM from '../component/bottomLogos';
import TESTI from '../component/testimonials'




const MagazineWriting = () => {
  return (
    <>
      <main>

      <FEATURED
          banneraffordable='MagazineWriting1'
          title='Our Magazine Writers Bring it all Altogether'
          dec={` Attracting the reader at the first step is a herculean task, but our expert writers flawlessly bring all the content together and attract the other person instantly.`}
          href1={<> <a href="javascript:;" data-fancybox="" data-src="#popupform" className="btn btn-green">
            Get Started <i className="fas fa-caret-right ml-1"></i>
          </a> </>}
          href2={<>
            <a href="javascript:;" className="chat btn btn-white-border ml-4">
              Live Chat
            </a>
          </>}
        />
        <LHMagazine/>
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

export default MagazineWriting;
