import React from "react";
import CarouselHome from "../../components/Carousel/CarouselHome";
import CarouselTemplate from "../../components/Carousel/CarouselTemplate";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-center ">
      <div className="container mx-auto py-10">
        <CarouselHome />
      </div>
      <div className=" border-b-1 border-gray-400 pb-14 w-full pt-5">
        <div className="container mx-auto ">
          <CarouselTemplate data={{}} title={"Recent releases "} />
        </div>
      </div>
      <div className=" border-b-1 border-gray-400 pb-14 w-full pt-5">
        <div className="container mx-auto ">
          <CarouselTemplate
            data={{}}
            title={"Your Library's Featured Selections "}
            number={23}
          />
        </div>
      </div>
      <div className=" border-b-1 border-gray-400 pb-14 w-full pt-5">
        <div className="container mx-auto ">
          <CarouselTemplate data={{}} title={"Top Titles "} number={17} />
        </div>
      </div>
      <div className=" border-b-1 border-gray-400 pb-14 w-full pt-5">
        <div className="container mx-auto ">
          <CarouselTemplate
            data={{}}
            title={"Éducation et pédagogie "}
            number={26}
          />
        </div>
      </div>
      <div className=" border-b-1 border-gray-400 pb-14 w-full pt-5">
        <div className="container mx-auto ">
          <CarouselTemplate
            data={{}}
            title={"Éducation et pédagogie "}
            number={16}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
