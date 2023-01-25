import React from 'react'
import Hero from '../assets/testimonialHero.png'
import { Swiper, SwiperSlide } from "swiper/react"
import TestimonialsData from '../Data/testimonials'

const Testimonials = () => {
  return (
    <div className='testimonials'>
      <div className="twrapper">
        <div className="tcontainer">
          <span>Top Rated</span>
          <span> Seedily say has suatable disposal and boy. Exericise joy man children rejoiced.</span>
        </div>

        <img src={Hero} alt="" />
        <div className="tcontainer">
          <span>100k</span>
          <span>Happy Customers with us!</span>
        </div>
      </div>

      <div className="reviews">Reviews</div>

      <div className='carousel'>
        <Swiper
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={20}
          className="tCarousel"
        >
          {
            TestimonialsData.map((testimonial, i) => (
              <SwiperSlide>
                <div className="testmonial">
                  <img src={testimonial.image} alt="" />
                  <span>{testimonial.comment}</span>
                  <hr />
                  <span>{testimonial.name}</span>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </div>
  )
}

export default Testimonials;
