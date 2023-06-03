import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { Button } from "@mui/material";

function HeaderSlider({ showItems, toScroll, slideData, showText }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    fade: true,
    slidesToShow: showItems,
    slidesToScroll: toScroll,
  };
  return (
    <Slider {...settings}>
      {slideData?.map((item) => (
        <div className="w-full relative" key={item.id}>
          <img
            src={item.imgUrl}
            className="w-full h-[800px] object-cover"
            alt="slide"
          />
          {showText && (
            <div className="absolute left-[50px] top-[50%] items-start justify-start px-4">
              <h1 className="text-blue-800  mb-[30px] text-center flex flex-wrap text-[60px] font-bold leading-none tracking-normal">
                {item.title}
              </h1>
              <p className="text-blue-800  mb-[30px] text-[50px] font-medium leading-none text-center tracking-normal">
                {item.text}
              </p>
              <Button variant="outlined" className=" border-blue-800 text-blue-800 w-[130px]">Shop now</Button>
            </div>
          )}
        </div>
      ))}
    </Slider>
  );
}

export default HeaderSlider;
