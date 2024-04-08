import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import banner1 from "../../../public/Banner/banner1.jpg";
import banner2 from "../../../public/Banner/banner2.jpg";
import banner3 from "../../../public/Banner/banner3.jpg";
import banner4 from "../../../public/Banner/banner4.jpg";
import banner5 from "../../../public/Banner/banner5.jpg";
import banner6 from "../../../public/Banner/banner6.jpg";
import banner7 from "../../../public/Banner/banner7.jpg";

const Banner = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  return (
    <div className="mt-20">
      <div className="text-center space-y-4 mb-8">
        <h2 className="text-6xl font-bold mx-auto lg:w-[530px]">
          It's time to find{" "}
          <span className="text-[#1a56db]">your dream home</span>
        </h2>
        <p className="text-base text-[#4a5568] font-semibold mx-auto lg:w-[800px]">
          Discover your dream home with our exclusive collection of residential
          real estate properties. From cozy cottages to luxurious estates,
          explore a diverse range of homes tailored to your lifestyle.
        </p>
      </div>

      <div className="container mx-auto">
        <div>
          <div>
            <Swiper
              onSwiper={setSwiperRef}
              slidesPerView={3}
              centeredSlides={true}
              spaceBetween={30}
              pagination={{
                type: "fraction",
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img
                  className="h-[700px] rounded-[20px] w-[600px]"
                  src={banner1}
                  alt=""
                />{" "}
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="h-[700px] rounded-[20px] w-[600px]"
                  src={banner2}
                  alt=""
                />{" "}
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="h-[700px] rounded-[20px] w-[600px]"
                  src={banner3}
                  alt=""
                />{" "}
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="h-[700px] rounded-[20px] w-[600px]"
                  src={banner4}
                  alt=""
                />{" "}
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="h-[700px] rounded-[20px] w-[600px]"
                  src={banner5}
                  alt=""
                />{" "}
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="h-[700px] rounded-[20px] w-[600px]"
                  src={banner6}
                  alt=""
                />{" "}
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="h-[700px] rounded-[20px] w-[600px]"
                  src={banner7}
                  alt=""
                />{" "}
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
