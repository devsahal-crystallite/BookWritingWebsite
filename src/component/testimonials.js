import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";
import VIDEOSECTION from '../component/VideoSection'

const testimonials = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay:true,
    slidesToScroll: 1
  };
  return (
    <>

      <section className="testimonial bookwriting relative ">
        <div className="container max-w-7xl lg:py-[100px]  z-10 relative ">
          <div className="heading text-center">
            <h6>
              Hear The Words Of
            </h6>
            <h2 className='lg:text-4xl font-bold mb-5'>
              Appreciation from Our Clients
            </h2>
            <p className='lg:text-lg mb-5 w-[70%] mx-auto'>
              The appreciation from our clients is what keeps us going. Have a sneak peek of what our satisfied clients have to say about our work.
            </p>
          </div>
          <Slider {...settings}>

          <div className="testimon1">
        <div className="item bg-[#05193c] p-5 text-center rounded-lg m-1">
          <FontAwesomeIcon icon={faQuoteLeft} />
          <h5>
            Thomson Lucas
          </h5>
          <p className='text-white'>
            Thank you so much, Barnett Ghostwriting, for providing me with the finest book writing services. They have
            provided me with a complete solution and are looking after each and everything.
          </p>

        </div>
      </div>
      <div className="testimon1">
        <div className="item bg-[#05193c] p-5 text-center rounded-lg m-1">
          <FontAwesomeIcon icon={faQuoteLeft} />
          <h5>
            Lucy Gray
          </h5>
          <p className='text-white'>
            Barnett Ghostwriting has provided me with a high-quality service that I am sure couldn’t be found anywhere
            else at such a reasonable cost. Thank you to the entire team for being so proficient in the work and
            providing me with ease.
          </p>
        </div>
      </div>
      <div className="testimon1">
        <div className="item bg-[#05193c] p-5 text-center rounded-lg m-1">
          <FontAwesomeIcon icon={faQuoteLeft} />
          <h5>
            Henry John
          </h5>
          <p className='text-white'>
            The entire team at Barnett Ghostwriting is a pleasure to work with. They won't disappoint you at any point
            and will make sure to provide you with their full support till the end.
          </p>

        </div>
      </div>
      <div className="    center">
        <div className="item bg-[#05193c] p-5 text-center rounded-lg m-1">
          <FontAwesomeIcon icon={faQuoteLeft} />
          <h5>
            Clara Arnold
          </h5>
          <p className='text-white'>
            I have no words to express the services I received from Barnett Ghostwriting. I got their ghostwriting
            service, and they left me amazed. I am very much impressed by their work!
          </p>

        </div>
      </div>
      <div className="testimon1">
        <div className="item bg-[#05193c] p-5 text-center rounded-lg m-1">
          <FontAwesomeIcon icon={faQuoteLeft} />
          <h5>
            Johnson Henry
          </h5>
          <p className='text-white'>
            By the time I have started working with Barnett Ghostwriting, I am very much at ease. This team works round
            the clock and never gives you a reason to disappoint.
          </p>
        </div>
      </div>
      <div className="testimon1">
        <div className="item bg-[#05193c] p-5 text-center rounded-lg m-1">
          <FontAwesomeIcon icon={faQuoteLeft} />
          <h5>
            Thomson Lucas
          </h5>
          <p className='text-white'>
            Thank you so much, Barnett Ghostwriting, for providing me with the finest book writing services. They have
            provided me with a complete solution and are looking after each and everything.
          </p>

        </div>
      </div>
      <div className="testimon1">
        <div className="item bg-[#05193c] p-5 text-center rounded-lg m-1">
          <FontAwesomeIcon icon={faQuoteLeft} />
          <h5>
            Lucy Gray
          </h5>
          <p className='text-white'>
            Barnett Ghostwriting has provided me with a high-quality service that I am sure couldn’t be found anywhere
            else at such a reasonable cost. Thank you to the entire team for being so proficient in the work and
            providing me with ease.
          </p>
        </div>
      </div>
      <div className="testimon1">
        <div className="item bg-[#05193c] p-5 text-center rounded-lg m-1">
          <FontAwesomeIcon icon={faQuoteLeft} />
          <h5>
            Henry John
          </h5>
          <p className='text-white'>
            The entire team at Barnett Ghostwriting is a pleasure to work with. They won't disappoint you at any point
            and will make sure to provide you with their full support till the end.
          </p>

        </div>
      </div>
      <div className="testimon1">
        <div className="item bg-[#05193c] p-5 text-center rounded-lg m-1">
          <FontAwesomeIcon icon={faQuoteLeft} />
          <h5>
            Clara Arnold
          </h5>
          <p className='text-white'>
            I have no words to express the services I received from Barnett Ghostwriting. I got their ghostwriting
            service, and they left me amazed. I am very much impressed by their work!
          </p>

        </div>
      </div>
      <div className="testimon1">
        <div className="item bg-[#05193c] p-5 text-center rounded-lg m-1">
          <FontAwesomeIcon icon={faQuoteLeft} />
          <h5>
            Johnson Henry
          </h5>
          <p className='text-white'>
            By the time I have started working with Barnett Ghostwriting, I am very much at ease. This team works round
            the clock and never gives you a reason to disappoint.
          </p>
        </div>
      </div>
      <div className="testimon1">
        <div className="item bg-[#05193c] p-5 text-center rounded-lg m-1">
          <FontAwesomeIcon icon={faQuoteLeft} />
          <h5>
            Thomson Lucas
          </h5>
          <p className='text-white'>
            Thank you so much, Barnett Ghostwriting, for providing me with the finest book writing services. They have
            provided me with a complete solution and are looking after each and everything.
          </p>

        </div>
      </div>

          </Slider>

        </div>
      </section>
      <VIDEOSECTION/>
    </>
  )
}

export default testimonials
