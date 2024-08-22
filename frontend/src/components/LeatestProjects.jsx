import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "./Styles.css";
import axios from "axios";

const LeatestProject = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/project`);
      const sortedProjects = response.data.data.sort((a, b) => new Date(b.date) - new Date(a.date));
      setProjects(sortedProjects.slice(0, 5));
    };

    fetchProjects();
  }, []);

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
              margin: "20px",
            }}>
            <div className="flex justify-center items-center w-full h-full mb-10">
              <div className="bg-white rounded-lg shadow-lg w-full h-full border border-gray-200 flex flex-col items-center">
                <img
                  src={`https://drive.google.com/thumbnail?id=${project.image}&sz=w1000`}
                  alt={project.name}
                  className="w-full h-[300px] object-cover rounded-lg mb-4"
                />
                <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                <p className="text-base text-gray-700 text-center px-2 lg:px-10">{project.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LeatestProject;
