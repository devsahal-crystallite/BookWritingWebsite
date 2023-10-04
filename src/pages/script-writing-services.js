import React from 'react'

import FEATURED from '../component/ghostWritingServices/featuredSec'
import LHScript from '../component/ScriptWritingServices/LetUsScript'
import GhostWriting from '../component/ghostWritingServices/ghostWriting'
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
          banneraffordable='ScriptWriting'
          title='Professional High-Quality Script by Expert Writers'
          dec={`Streamline your content needs with our high-quality script writing service, which educates your audience about your brand and also helps you elevate.`}
          href1={<> <Link href="javascript:;" data-fancybox="" data-src="#popupform" className="btn btn-green">
            Get Started <i className="fas fa-caret-right ml-1"></i>
          </Link> </>}
          href2={<>
            <Link href="javascript:;" className="chat btn btn-white-border ml-4">
              Live Chat
            </Link>
          </>}
        />
        <LHScript/>
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
