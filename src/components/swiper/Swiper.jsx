import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./swiper-auto.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import dataWeb from "../../data";
console.log(dataWeb);
const SwiperAuto = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {dataWeb.swiperImgs.map((url) => (
          <SwiperSlide>
            <img src={url} alt="swiper-img" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperAuto;
