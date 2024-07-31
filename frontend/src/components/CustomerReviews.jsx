import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

const reviews = [
  {
 imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
    name: "John Doe",
    rating: "★★★★★",
    comment:
      "Amazing product! I couldn't be happier with my purchase. The quality is top-notch and the customer service was excellent.",
  },
  {
    imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
    name: "Jane Smith",
    rating: "★★★★☆",
    comment:
      "Very good experience. The product arrived on time and as described. One star off because the packaging could have been better.",
  },
  {
    imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
    name: "Samuel Johnson",
    rating: "★★★☆☆",
    comment:
      "The product is okay, but it didn't meet my expectations. I found some issues with the build quality, but the customer support was helpful.",
  },
  {
    imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
    name: "Emily Davis",
    rating: "★★★★★",
    comment:
      "Fantastic service and a great product! I'm extremely satisfied with the purchase. Highly recommended!",
  },
  {
    imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
    name: "Michael Brown",
    rating: "★★★★☆",
    comment:
      "Good value for the money. The product is nice, but I had a small issue with the delivery. Overall, a positive experience.",
  },
];

function CustomerReviews() {
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
        {reviews.map((review, index) => (
          <SwiperSlide
            key={index}
            style={{
              width: "300px",
              height: "450px",
              minWidth: "300px",
              maxWidth: "300px",
            }}>
            <div className="relative w-full h-[400px] bg-red-200 p-6 rounded-lg shadow-lg border border-gray-200 mt-10">
              <div className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 bg-white w-24 h-24 rounded-full border border-red-400 flex items-center justify-center">
                <img
                  src={review.imageUrl}
                  alt={review.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="mt-10 text-center">
                <span className="text-red-400 text-2xl font-bold">{review.rating}</span>
              </div>
              <div className="mt-2 text-center">
                <h3 className="text-lg font-bold">{review.name}</h3>
                <p className="text-base text-gray-600">Client</p>
              </div>
              <div className="bg-white p-4 w-full h-[200px] mt-4 rounded-lg shadow-sm relative">
                <span className="absolute top-[20px] left-4 text-6xl text-gray-300 font-serif">“</span>
                <p className="mt-8 text-base text-gray-700">{review.comment}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CustomerReviews;
