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
      className="w-full h-[600px]"
    >
      <SwiperSlide>
        <div
        
        style={{ backgroundImage: "url('/2skill.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}

         className="flex flex-col items-center justify-center h-full  text-white text-center px-6">
          <h1 className="text-4xl font-bold mb-4">Upgrade Your Skills Today 🚀</h1>
          <p className="text-lg text-purple-200">Learn from the best instructors in the industry</p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div

         style={{ backgroundImage: "url('/2.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
        
        className="flex flex-col items-center justify-center h-full bg-violet-900 text-white text-center px-6">
          <h1 className="text-4xl font-bold mb-4">Learn from Industry Experts 🎓</h1>
          <p className="text-lg text-violet-200">Real world knowledge from real professionals</p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div 


 style={{ backgroundImage: "url('/1.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
        
        className="flex flex-col items-center justify-center h-full bg-indigo-900 text-white text-center px-6">
          <h1 className="text-4xl font-bold mb-4">Build Real Projects 💻</h1>
          <p className="text-lg text-indigo-200">Apply what you learn with hands-on projects</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;