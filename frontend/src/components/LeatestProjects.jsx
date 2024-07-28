import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

function LeatestProject() {
  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper">
        <SwiperSlide>
          <div className="flex justify-center">
            <div className="bg-white p-4 rounded-lg shadow-lg w-1/2 h-96 border border-gray-200">Project</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">
            <div className="bg-white p-4 rounded-lg shadow-lg w-1/2 h-96 border border-gray-200">Project</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">
            <div className="bg-white p-4 rounded-lg shadow-lg w-1/2 h-96 border border-gray-200">Project</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">
            <div className="bg-white p-4 rounded-lg shadow-lg w-1/2 h-96 border border-gray-200">Project</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">
            <div className="bg-white p-4 rounded-lg shadow-lg w-1/2 h-96 border border-gray-200">Project</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">
            <div className="bg-white p-4 rounded-lg shadow-lg w-1/2 h-96 border border-gray-200">Project</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">
            <div className="bg-white p-4 rounded-lg shadow-lg w-1/2 h-96 border border-gray-200">Project</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default LeatestProject;
