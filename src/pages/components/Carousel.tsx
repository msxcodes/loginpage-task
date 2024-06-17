import Image from "next/image";
import React from "react";
import poster from "../../../public/bg.jpg";
import poster01 from "../../../public/bg02.jpg";
import poster02 from "../../../public/bg03.jpg";

export default function Carousel() {
  return (
    <div className="carousel w-full h-full absolute top-0 left-0">
      <div
        id="slide1"
        className="carousel-item relative w-full transition-all duration-300"
      >
        <Image alt="" src={poster} className="w-full object-cover" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a
            href="#slide4"
            className="btn btn-circle bg-[rgba(0,0,0,0.5)] text-white"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-circle bg-[rgba(0,0,0,0.5)] text-white"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <Image src={poster01} className="w-full object-cover" alt="" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a
            href="#slide1"
            className="btn btn-circle bg-[rgba(0,0,0,0.5)] text-white"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-circle bg-[rgba(0,0,0,0.5)] text-white"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <Image src={poster02} className="w-full object-cover" alt="" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a
            href="#slide2"
            className="btn btn-circle bg-[rgba(0,0,0,0.5)] text-white"
          >
            ❮
          </a>
          <a
            href="#slide4"
            className="btn btn-circle bg-[rgba(0,0,0,0.5)] text-white"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}
