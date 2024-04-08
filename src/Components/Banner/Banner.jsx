import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from "../../../public/Banner/banner1.jpg";
import slider2 from "../../../public/Banner/banner2.jpg";
import slider3 from "../../../public/Banner/banner3.jpg";
import slider4 from "../../../public/Banner/banner4.jpg";
import slider5 from "../../../public/Banner/banner5.jpg";
import slider6 from "../../../public/Banner/banner6.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div>
      <div className="text-center space-y-4 my-8">
        <h2 className="lg:text-6xl text-xl font-bold mx-auto lg:w-[530px]">
          It's time to find{" "}
          <span className="text-[#1a56db]">your dream home</span>
        </h2>
        <p className="lg:text-base text-sm text-[#4a5568] font-semibold mx-auto lg:w-[800px]">
          Discover your dream home with our exclusive collection of residential
          real estate properties. From cozy cottages to luxurious estates,
          explore a diverse range of homes tailored to your lifestyle.
        </p>
      </div>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        style={{ borderRadius: "10px" }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="w-full h-[700px]" src={slider2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-[700px]" src={slider1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-[700px]" src={slider3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-[700px]" src={slider4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-[700px]" src={slider5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-[700px]" src={slider6} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
