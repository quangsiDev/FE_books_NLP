import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carouselTemplate.css";
import Slider from "react-slick";
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrow: true,
};
export default function CarouselTemplate({ title, number = 12 }) {
  return (
    <div className="w-full">
      <div>
        <p className="text-2xl font-medium hover:text-red-500 cursor-pointer ">
          {title} <span className="font-normal text-base">{number} books</span>
        </p>
      </div>
      <Slider {...settings}>
        <div className="flex justify-between py-2">
          <div className="mx-2 h-60  w-1/6 rounded overflow-hidden shadow">
            <img
              src={`https://picsum.photos/id/${number + 1}/200/180`}
              alt=""
            />
            <div className="p-2">
              <p className="m-0">Lorem ipsum dolor sit amet.</p>
              <span className="text-gray-400">Lorem, ipsum.</span>
            </div>
          </div>
          <div className="mx-2 h-60  w-1/6 rounded overflow-hidden shadow">
            <img
              src={`https://picsum.photos/id/1${number + 5}/200/180`}
              alt=""
            />
            <div className="p-2">
              <p className="m-0">Lorem ipsum dolor sit amet.</p>
              <span className="text-gray-400">Lorem, ipsum.</span>
            </div>
          </div>
          <div className="mx-2 h-60  w-1/6 rounded overflow-hidden shadow">
            <img
              src={`https://picsum.photos/id/2${number + 2}/200/180`}
              alt=""
            />
            <div className="p-2">
              <p className="m-0">Lorem ipsum dolor sit amet.</p>
              <span className="text-gray-400">Lorem, ipsum.</span>
            </div>
          </div>
          <div className="mx-2 h-60  w-1/6 rounded overflow-hidden shadow">
            <img
              src={`https://picsum.photos/id/1${number + 1}/200/180`}
              alt=""
            />
            <div className="p-2">
              <p className="m-0">Lorem ipsum dolor sit amet.</p>
              <span className="text-gray-400">Lorem, ipsum.</span>
            </div>
          </div>
          <div className="mx-2 h-60  w-1/6 rounded overflow-hidden shadow">
            <img
              src={`https://picsum.photos/id/1${number + 2}/200/180`}
              alt=""
            />
            <div className="p-2">
              <p className="m-0">Lorem ipsum dolor sit amet.</p>
              <span className="text-gray-400">Lorem, ipsum.</span>
            </div>
          </div>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}
