import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Carousel.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Carousel = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-auto"
      >
        <SwiperSlide className="p-2">
          <figure className="w-full h-[30em]">
            <img
              className=""
              src="https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </figure>
        </SwiperSlide>

        <SwiperSlide className="p-2">
          <figure className="w-full h-[30em]">
            <img
              className=""
              src="https://images.pexels.com/photos/129208/pexels-photo-129208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </figure>
        </SwiperSlide>

        <SwiperSlide className="p-2">
          <figure className="w-full h-[30em]">
            <img
              className=""
              src="https://images.pexels.com/photos/266621/pexels-photo-266621.jpeg"
              alt=""
            />
          </figure>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
