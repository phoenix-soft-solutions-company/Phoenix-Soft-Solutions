import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

const reviews = [
  {
    imageUrl:
      "https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
    name: "Samith De Silva ",
    rating: "★★★★★",
    comment:
      "The design is modern and visually appealing, with an intuitive layout that makes navigation effortless. The site is fast-loading and fully responsive, providing a seamless experience across all devices. The functionality is spot-on, and the integration with our social media and contact forms is flawless. I also appreciate the ease of updating content through the CMS. Minor improvements could be made to SEO optimization and mobile text formatting, but overall, the result is impressive. Thank you for your excellent work and responsiveness throughout the project!",
  },
  {
    imageUrl:
      "https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
    name: "SLNIF Team",
    rating: "★★★★☆",
    comment:
      "We are thrilled with the mobile app you developed! The user interface is sleek and intuitive, making navigation a breeze. The app’s performance is outstanding, with fast load times and smooth transitions. All features function as expected, and the integration with our existing systems is seamless. I also appreciate the attention to detail in the design and the ease of use for our customers. A minor suggestion: Overall, the app exceeds our expectations. Thank you for your excellent work and timely support!",
  },
  {
    imageUrl:
      "https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
    name: "SLNC",
    rating: "★★★☆☆",
    comment:
      "We are extremely satisfied with the new SLNC.lk website! The design is modern and professional, perfectly reflecting our brand. Navigation is intuitive, and the site’s responsiveness across devices is impressive. The performance is excellent, with quick load times and seamless functionality. The integration of features and content management system is user-friendly and efficient. A minor suggestion would be to enhance SEO for better visibility. Overall, your team’s work has exceeded our expectations, and we’re excited to see the positive impact on our online presence. Thank you for your exceptional service!",
  },
  {
    imageUrl:
      "https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
    name: "President SLICNA ",
    rating: "★★★★★",
    comment:
      "we are  very impressed with the database you created for Slicna. The structure is well-organized and efficiently handles our data needs. The performance is robust, with quick query responses and reliable data retrieval. The integration with our existing systems is smooth, and the user interface for database management is intuitive. I appreciate the thorough documentation and the training provided. For future updates, enhancing data security features could be beneficial. Overall, your team has done an excellent job, and the database is a valuable asset to our operations. Thank you for your outstanding work!",
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
              width: "400px",
              height: "600px",
              minWidth: "45px",
              maxWidth: "400px",
            }}>
            <div className="relative w-full h-[550px] bg-red-600 p-2 rounded-lg shadow-lg border border-gray-200 mt-10">
              <div className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 bg-white w-24 h-24 rounded-full border border-red-400 flex items-center justify-center">
                <img
                  src={review.imageUrl}
                  alt={review.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              {/* <div className="mt-10 text-center">
                <span className="text-red-400 text-2xl font-bold">{review.rating}</span>
              </div> */}
              <div className="mt-14 text-center">
                <h3 className="text-lg font-bold">{review.name}</h3>
              </div>
              <div className="bg-white p-4 w-full h-[400px] mt-4 rounded-lg shadow-sm relative">
                <span className="absolute top-[20px] left-4 text-4xl text-gray-300 font-serif">“</span>
                <p className="mt-6 text-base text-gray-700">{review.comment}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CustomerReviews;
