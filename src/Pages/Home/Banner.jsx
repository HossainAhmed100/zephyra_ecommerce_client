import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Banner.css';

function Banner() {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={"https://i.ibb.co/nc6WPjy/x-2.jpg"} /></SwiperSlide>
        <SwiperSlide><img src={"https://i.ibb.co/RY9sWBs/x-3.jpg"} /></SwiperSlide>
        <SwiperSlide><img src={"https://i.ibb.co/p1Hjdjh/x-1.jpg"} /></SwiperSlide>
        <SwiperSlide><img src={"https://i.ibb.co/znwPvkw/x-4.jpg"} /></SwiperSlide>
      </Swiper>
    </>
  )
}

export default Banner
