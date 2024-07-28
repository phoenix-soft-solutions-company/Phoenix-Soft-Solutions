import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

function MinimalSlider() {
  return (
    <div>
      <Swiper
        breakpoints={{
          360: {
            slidesPerView: 1,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 3,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 4,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper">
        <SwiperSlide>
          <div className="flex justify-center">
            <div className="bg-white p-4 rounded-lg shadow-lg min-w-80 h-96 border border-gray-200">
              Review
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">
            <div className="bg-white p-4 rounded-lg shadow-lg min-w-80 h-96 border border-gray-200">
              Review
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">
            <div className="bg-white p-4 rounded-lg shadow-lg min-w-80 h-96 border border-gray-200">
              Review
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">
            <div className="bg-white p-4 rounded-lg shadow-lg min-w-80 h-96 border border-gray-200">
              Review
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">
            <div className="bg-white p-4 rounded-lg shadow-lg min-w-80 h-96 border border-gray-200">
              Review
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default MinimalSlider;
