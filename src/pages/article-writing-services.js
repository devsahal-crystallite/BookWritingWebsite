import React from 'react'

import FEATURED from '../component/ghostWritingServices/featuredSec'
import LHArticle from '../component/ArticleWritingServices/LetUsHelpArticle'
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
          banneraffordable='article'
          title='Result-Driven Article-Writing Services That Boost Your Online Image'
          dec={` Drive more customers, convert the existing ones into loyal customers, and create compelling articles that speak to what matters most to your target audience.`}
          href1={<> <a href="javascript:;" data-fancybox="" data-src="#popupform" className="btn btn-green">
            Get Started <i className="fas fa-caret-right ml-1"></i>
          </a> </>}
          href2={<>
            <a href="javascript:;" className="chat btn btn-white-border ml-4">
              Live Chat
            </a>
          </>}
        />
        <LHArticle/>
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
