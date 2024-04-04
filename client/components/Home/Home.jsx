import slide1 from "../../assets/1.png";
import slide2 from "../../assets/2.png";
import slide3 from "../../assets/3.png";
import pic4 from "../../assets/4.png";
import pic5 from "../../assets/5.png";
import pic6 from "../../assets/6.png";
import "./Home.css";
import React, { useState, useEffect } from "react";
import Footer from "../Footer/Footer.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, FreeMode} from "swiper/modules";

const discounts = [
  {
    link: "/",
    img: pic4,
    headerSection: "Pizza + Coffee",
    discountPrice: "14 €",
    price: "16 €",
    button: "+",
  },

  {
    link: "/",
    img: pic5,
    headerSection: "Pizza + Coca-Cola",
    discountPrice: "13 €",
    price: "16 €",
    button: "+",
  },

  {
    link: "/",
    img: pic6,
    headerSection: "2 pizzas + 2 mochas",
    discountPrice: "30 €",
    price: "35 €",
    button: "+",
  },
];

const Home = () => {
  return (
    <div className="main">

      <Swiper
        navigation={true}
        loop={true}
        spaceBetween={10}
        modules={[FreeMode, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} alt="slide1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="slide2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="slide3" />
        </SwiperSlide>
      </Swiper> 

      <div className="wrapper">
        <div className="container">
          <div className="discount-list">
            <ul>
              {discounts.map((item, index) => (
                <li key={index}>
                  <div className="discount-image">
                    <img src={item.img} alt="" />
                  </div>

                  <div className="pizza-header">{item.headerSection}</div>

                  <div className="info-discount">
                    <div className="price-details">
                      <div>
                        <div>{item.price}</div>
                        <p>Discount 10%</p>
                      </div>

                      <div>{item.discountPrice}</div>
                    </div>

                    <button className="pizza-button">{item.button}</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
