import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import slide1 from "./../../../assets/home/slider/slide1.jpg";
import slide2 from "./../../../assets/home/slider/slide2.jpg";
import slide3 from "./../../../assets/home/slider/slide3.jpg";
import slide4 from "./../../../assets/home/slider/slide4.jpg";
import slide5 from "./../../../assets/home/slider/slide5.jpg";
import SectionTitle from "../../../components/sectionTitle";

const Category = () => {
  return (
    <div>
      <SectionTitle
        subheading={"From 11:00am to 10:00pm"}
        heading={"ORDER ONLINE"}
      ></SectionTitle>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-24"
      >
        <SwiperSlide>
          <img className="mx-auto" src={slide1} alt="" />
          <h3 className="text-4xl text-white -mt-16 uppercase text-center">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="mx-auto" src={slide2} alt="" />
          <h3 className="text-4xl text-white -mt-16 uppercase text-center">
            pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="mx-auto" src={slide3} alt="" />
          <h3 className="text-4xl text-white -mt-16 uppercase text-center">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="mx-auto" src={slide4} alt="" />
          <h3 className="text-4xl text-white -mt-16 uppercase text-center">
            desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="mx-auto" src={slide5} alt="" />
          <h3 className="text-4xl text-white -mt-16 uppercase text-center">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
