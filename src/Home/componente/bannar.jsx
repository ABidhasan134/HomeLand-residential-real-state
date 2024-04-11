import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

export default function Bannar() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bg-opacity-50">
            <img
              className="z-10 "
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/471752845.jpg?k=69a45cf53c31b88f7d38bfb61019117611cc2d5f7c5e5337cd811b834a0c3bda&o=&hp=1"
              alt=""
            />
            <div className="z-30 relative  -top-96 text-sky-500">
              <h1 className="text-5xl font-bold">Beachfront properties</h1>
              <p className="text-orange-600">
                you will find Infinity pool, Private beach access and Spa. we give best best luxary survice. <br />
                Your family and friend will safe with us. If your are not Log in yeat pleas Log in.
              </p>
            <Link className="btn border-none bg-sky-400 hover:bg-sky-800 hover:text-white" to="/login">Log In</Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
           <div className="bg-opacity-50">
            <img
              className="z-10 "
              src="https://www.maxviewrealty.com/img/2017-11-23/skyline-mansion-707*471-13984.jpg"
              alt=""
            />
            <div className="z-30 relative  -top-96 text-sky-500">
              <h1 className="text-5xl font-bold">Beachfront properties</h1>
              <p className="text-orange-600">
              you will find Infinity pool, Private beach access and Spa. we give best best luxary survice. <br />
                Your family and friend will safe with us. If your are not Log in yeat pleas Log in.
              </p>
              <Link className="btn border-none bg-sky-400 hover:bg-sky-800 hover:text-white" to="/login">Log In</Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-opacity-50">
            <img
              className="z-10 "
              src="https://media-cdn.tripadvisor.com/media/photo-s/19/3a/42/dd/restaurant-at-ravine.jpg"
              alt=""
            />
            <div className="z-30 relative  -top-56 text-sky-500">
              <h1 className="text-5xl font-bold">Beachfront properties</h1>
              <p className="text-orange-600">
              you will find Infinity pool, Private beach access and Spa. we give best best luxary survice. <br />
                Your family and friend will safe with us. If your are not Log in yeat pleas Log in.
              </p>
              <Link className="btn border-none bg-sky-400 hover:bg-sky-800 hover:text-white" to="/login">Log In</Link>
            </div>
          </div>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
