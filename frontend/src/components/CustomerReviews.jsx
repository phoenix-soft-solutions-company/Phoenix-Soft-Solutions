import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import axios from "axios";

function CustomerReviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/feedback`);
        setReviews(response.data.data);
      } catch (error) {}
    };

    fetchReviews();
  }, []);

  return (
    <div className="w-full px-2 sm:px-4">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper">
        {reviews?.map((review, index) => (
          <SwiperSlide
            key={index}
            style={{
              width: "400px",
              height: "600px",
              minWidth: "45px",
              maxWidth: "400px",
            }}>
            <div className="relative w-full h-[550px] bg-red-600 p-2 rounded-lg shadow-lg border border-gray-200 mt-10">
              <div className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 bg-white w-24 h-24 rounded-full border border-red-600 flex items-center justify-center">
                <img
                  src={
                    review.image
                      ? `https://drive.google.com/thumbnail?id=${review.image}&sz=w1000`
                      : "https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
                  }
                  alt={review.name}
                  className="w-32 h-auto rounded-full"
                />
              </div>
              <div className="mt-14 text-center">
                <h3 className="text-lg font-bold">{review.name}</h3>
              </div>
              <div className="bg-white p-4 w-full h-[400px] mt-4 rounded-lg shadow-sm relative">
                <span className="absolute top-[20px] left-4 text-4xl text-gray-300 font-serif">“</span>
                <p className="mt-6 text-base text-gray-700">{review.feedback}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CustomerReviews;
