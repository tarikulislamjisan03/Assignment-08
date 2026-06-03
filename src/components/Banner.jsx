"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Banner = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      navigation={true}
      loop={true}
      className="w-full h-[250px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
    >
      <SwiperSlide>
        <div
          style={{ backgroundImage: "url('/2skill.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
          className="flex flex-col items-center justify-center h-full text-white text-center px-6 sm:px-12 md:px-20 lg:px-32"
        >
          <div className="w-full max-w-4xl mx-auto">
            <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 md:mb-6 leading-tight">
              Upgrade Your Skills Today 🚀
            </h1>
            <p className="text-xs sm:text-base md:text-lg lg:text-xl text-purple-200 max-w-2xl mx-auto">
              Learn from the best instructors in the industry
            </p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          style={{ backgroundImage: "url('/2.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
          className="flex flex-col items-center justify-center h-full text-white text-center px-6 sm:px-12 md:px-20 lg:px-32"
        >
          <div className="w-full max-w-4xl mx-auto">
            <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 md:mb-6 leading-tight">
              Learn from Industry Experts 🎓
            </h1>
            <p className="text-xs sm:text-base md:text-lg lg:text-xl text-violet-200 max-w-2xl mx-auto">
              Real world knowledge from real professionals
            </p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          style={{ backgroundImage: "url('/1.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
          className="flex flex-col items-center justify-center h-full text-white text-center px-6 sm:px-12 md:px-20 lg:px-32"
        >
          <div className="w-full max-w-4xl mx-auto">
            <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 md:mb-6 leading-tight">
              Build Real Projects 💻
            </h1>
            <p className="text-xs sm:text-base md:text-lg lg:text-xl text-indigo-200 max-w-2xl mx-auto">
              Apply what you learn with hands-on projects
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;