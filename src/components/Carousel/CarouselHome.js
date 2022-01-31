import React from "react";
import { Carousel } from "antd";

const contentStyle = {
  height: "300px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  position: "relative",
};
export default function CarouselHome() {
  return (
    <div className="w-full overflow-hidden ">
      <Carousel autoplay>
        <div style={contentStyle}>
          <img src="https://api.lorem.space/image/book?w=1300&h=300" alt="" />
          <p className="asolute bottom-0 left-0 w-full bg-gray-300 p-5 text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic,
            incidunt. Nobis incidunt sit similique nihil eum quibusdam, ut
            voluptas illum explicabo harum sunt, non recusandae quam
            undesequuntur.
          </p>
        </div>
        <div style={contentStyle}>
          <img
            src="https://api.lorem.space/image/book?w=1300&h=300&hash=8B7BCDC2"
            alt=""
          />
          <p className="asolute bottom-0 left-0 w-full bg-gray-300 p-5 text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic,
            incidunt. Nobis incidunt sit similique nihil eum quibusdam, ut
            voluptas illum explicabo harum sunt, non recusandae quam
            undesequuntur.
          </p>
        </div>
        <div style={contentStyle}>
          <img
            src="https://api.lorem.space/image/book?w=1300&h=300&hash=A89D0DE"
            alt=""
          />
          <p className="asolute bottom-0 left-0 w-full bg-gray-300 p-5 text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic,
            incidunt. Nobis incidunt sit similique nihil eum quibusdam, ut
            voluptas illum explicabo harum sunt, non recusandae quam
            undesequuntur.
          </p>
        </div>
        <div style={contentStyle}>
          <img src="https://api.lorem.space/image/book?w=1300&h=300" alt="" />
          <p className="asolute bottom-0 left-0 w-full bg-gray-300 p-5 text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic,
            incidunt. Nobis incidunt sit similique nihil eum quibusdam, ut
            voluptas illum explicabo harum sunt, non recusandae quam
            undesequuntur.
          </p>
        </div>
      </Carousel>
    </div>
  );
}
