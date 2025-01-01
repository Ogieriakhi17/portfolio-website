import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ExtraCards.css';
import { SectionWrapper } from "../hoc";
import { extracurriculars } from "../constants";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";




const ExtracurricularCard = ({ image, title, description }) => {
  return (
    <div className="relative overflow-hidden rounded-lg transition-transform duration-300 bg-gray-800 h-[500px] w-full flex flex-col justify-center items-center">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-blue-500 bg-opacity-80 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <h4 className="text-white font-bold text-lg">{title}</h4>
        <span className="text-white mt-2 text-sm">{description}</span>
      </div>
    </div>
  );
};

const Extracurriculars = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>What I do out of school</p>
        <h2 className={`${styles.sectionHeadText}`}>Additional Involvements.</h2>
      </motion.div>

      <div className="w-full h-[600px] py-16 px-4"> {/* Updated from w-full to w-screen */}
        <Swiper
          spaceBetween={50}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination, Autoplay]}
          className="extracurriculars-slider"
        >
          {extracurriculars.map((extracurricular, index) => (
            <SwiperSlide key={index}>
              <ExtracurricularCard
                image={extracurricular.image}
                title={extracurricular.title}
                description={extracurricular.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};


export default SectionWrapper(Extracurriculars, "extracurriculars");
