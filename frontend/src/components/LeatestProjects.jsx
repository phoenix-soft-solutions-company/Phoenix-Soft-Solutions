import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import './Styles.css';

const projects = [
  {
    imageUrl: "https://t3.ftcdn.net/jpg/02/81/97/02/360_F_281970265_KR6Ey4XF3miLYq0QDp3WsH0m35MR2tGC.jpg",
    name: "Project One",
    description:
      "This is a description for Project One. It highlights key features and details.This is a description for Project One. It highlights key features and details.This is a description for Project One. It highlights key features and details.",
  },
  {
    imageUrl: "https://t3.ftcdn.net/jpg/02/81/97/02/360_F_281970265_KR6Ey4XF3miLYq0QDp3WsH0m35MR2tGC.jpg",
    name: "Project Two",
    description:
      "This is a description for Project Two. It highlights key features and details.This is a description for Project One. It highlights key features and details.This is a description for Project One. It highlights key features and details.",
  },
  {
    imageUrl: "https://t3.ftcdn.net/jpg/02/81/97/02/360_F_281970265_KR6Ey4XF3miLYq0QDp3WsH0m35MR2tGC.jpg",
    name: "Project Three",
    description:
      "This is a description for Project Three. It highlights key features and details.This is a description for Project One. It highlights key features and details.This is a description for Project One. It highlights key features and details.",
  },
];

function LeatestProject() {
  return (
    <div className="w-full px-4 py-8">
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
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper">
        {projects.map((project, index) => (
          <SwiperSlide
            key={index}
            style={{
              width: "100%",
              maxWidth: "800px",
              height: "auto",
              margin: '20px',
            }}>
            <div className="flex justify-center items-center w-full h-full mb-10">
              <div className="bg-white rounded-lg shadow-lg w-full h-full border border-gray-200 flex flex-col items-center">
                <img
                  src={project.imageUrl}
                  alt={project.name}
                  className="w-full h-[300px] object-cover rounded-lg mb-4"
                />
                <h2 className="text-xl font-bold mb-2">{project.name}</h2>
                <p className="text-base text-gray-700 text-center px-2 lg:px-10">{project.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default LeatestProject;
