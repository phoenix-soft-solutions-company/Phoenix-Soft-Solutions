import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import { FreeMode, Thumbs } from "swiper/modules";
import './Styles.css';

const DevPlan = () => {
  const slides = [
    {
      label: "Discovery & Planning",
      icon: "https://cdn-icbnj.nitrocdn.com/DxLMbDkMAsFVFzgPzCObWFuipKtAgITG/assets/images/optimized/rev-09281f7/www.unifiedinfotech.net/wp-content/themes/unifiedinfotech/assets/images/how-we-approach-icon-01.svg",
    },
    {
      label: "User Journey Mapping",
      icon: "https://cdn-icbnj.nitrocdn.com/DxLMbDkMAsFVFzgPzCObWFuipKtAgITG/assets/images/optimized/rev-09281f7/www.unifiedinfotech.net/wp-content/themes/unifiedinfotech/assets/images/how-we-approach-icon-02.svg",
    },
    {
      label: "System Design Prototyping",
      icon: "https://cdn-icbnj.nitrocdn.com/DxLMbDkMAsFVFzgPzCObWFuipKtAgITG/assets/images/optimized/rev-09281f7/www.unifiedinfotech.net/wp-content/themes/unifiedinfotech/assets/images/software-development/System-Design-Prototyping-icon.svg",
    },
    {
      label: "Software Engineering & Development",
      icon: "https://cdn-icbnj.nitrocdn.com/DxLMbDkMAsFVFzgPzCObWFuipKtAgITG/assets/images/optimized/rev-09281f7/www.unifiedinfotech.net/wp-content/themes/unifiedinfotech/assets/images/how-we-approach-icon-03.svg",
    },
    {
      label: "Quality Analysis & Testing",
      icon: "https://cdn-icbnj.nitrocdn.com/DxLMbDkMAsFVFzgPzCObWFuipKtAgITG/assets/images/optimized/rev-09281f7/www.unifiedinfotech.net/wp-content/themes/unifiedinfotech/assets/images/how-we-approach-icon-04.svg",
    },
    {
      label: "Flawless Deployment",
      icon: "https://cdn-icbnj.nitrocdn.com/DxLMbDkMAsFVFzgPzCObWFuipKtAgITG/assets/images/optimized/rev-09281f7/www.unifiedinfotech.net/wp-content/themes/unifiedinfotech/assets/images/how-we-approach-icon-05.svg",
    },
  ];

  return (
    <div className="leftPan">
      <div className="approachSlideMenu">
        <Swiper
          direction="vertical"
          slidesPerView="auto"
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs]}>
          {slides.map((slide, index) => (
            <SwiperSlide key={index} style={{ height: "200px", marginBottom: "20px" }}>
              <div className="listInner">
                <figure>
                  <img alt="icon" className="w-24 h-24" src={slide.icon} />
                  <span>
                    <svg className="progress" width="48" height="48">
                      <polygon points="24,4 44,44 4,44" />
                    </svg>
                  </span>
                </figure>
                <p>{slide.label}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default DevPlan;
