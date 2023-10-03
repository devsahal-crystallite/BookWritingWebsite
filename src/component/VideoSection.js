import React from 'react'

const VideoSection = () => {
  return (
    <>
      <section className="video-test py-8">
    <div className="container lg:max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-1 md:col-span-1">
                <div className="rclient-item text-center relative">
                    <a className="rc_play" data-fancybox="" href="https://www.youtube.com/watch?v=HvkOTriCo7U">
                        <span className="play_btn"></span>
                        <img src="/assets/images/newimg/vid1.png" alt="Pope Henrry" />
                    </a>
                    <h3 className="lg:mt-0 lg:text-[22px] clear-both font-bold text-white mb-0 absolute w-[100%] text-center bottom-0 left-0 py-2 px-0 bg-[#56c9819e]">Pope Henrry</h3>                                                                   
                </div>
            </div>
            <div className="col-span-1 md:col-span-1">
                <div className="rclient-item text-center relative">
                    <a className="rc_play" data-fancybox="" href="https://www.youtube.com/watch?v=kVYf-5b0LPw">
                        <span className="play_btn"></span>
                        <img src="/assets/images/newimg/vid2.png" alt="Mila Willow" />
                    </a>
                    <h3 className="lg:mt-0 lg:text-[22px] clear-both font-bold text-white mb-0 absolute w-[100%] text-center bottom-0 left-0 py-2 px-0 bg-[#56c9819e]">Mila Willow</h3>
                </div>
            </div>
            <div className="col-span-1 md:col-span-1">
                <div className="rclient-item text-center relative">
                    <a className="rc_play" data-fancybox="" href="https://www.youtube.com/watch?v=XommMsgfQHk">
                        <span className="play_btn"></span>
                        <img src="/assets/images/newimg/vid3.png" alt="Ella Alice" />
                    </a>
                    <h3 className="lg:mt-0 lg:text-[22px] clear-both font-bold text-white mb-0 absolute w-[100%] text-center bottom-0 left-0 py-2 px-0 bg-[#56c9819e]">Ella Alice</h3>
                </div>
            </div>
        </div>
    </div>
</section>


    </>
  )
}

export default VideoSection
