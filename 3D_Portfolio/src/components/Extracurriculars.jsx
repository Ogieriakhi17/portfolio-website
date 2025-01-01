// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { SectionWrapper } from "../hoc";
// Import Swiper styles
import 'swiper/css';

import { extracurriculars } from "../constants";

const Extracurriculars = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {extracurriculars.map((extracurricular, index) => (
        <SwiperSlide >extracurriculars</SwiperSlide>
      ))}
      
      ...
    </Swiper>
  );
};

export default SectionWrapper(Extracurriculars, "extracurriculars");