import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react"
import { Pagination, Navigation } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import SliderProducts  from './Product'

const Slider = () => {
  return (
    <div className='scontainer'>
      <Swiper
      modules={[Pagination, Navigation]}
      className="myswiper"
      navigation={true}
      loopFillGroupWithBlankLocations={true}
      slidesPerView={3} spaceBetween={40} slidesPerGroup ={3} loop ={true}>
      {SliderProducts.map((slide ,i)=>(
             <SwiperSlide>
             <div className='left-s'>
              <div className='name'>
                <span>{slide.name}</span>
                <span>{slide.detail}</span>
              </div>
              <span>{slide.price}$</span>
              <div>Shop Now</div>
             </div>
             <img src={slide.img} alt="products" className='img-p'/>
            </SwiperSlide>
      ))}
      </Swiper>
    </div>
  )
}
export default Slider
