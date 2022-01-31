import React from "react";

export default function Footer() {
  return (
    <div className="w-full p-10 h-60 bg-gray-300">
      <div className="container mx-auto flex justify-between">
        <div className=" space-x-3 w-max">
          <span className="font-medium">Home </span>{" "}
          <span className="font-medium">Catalogue </span>{" "}
          <span className="font-medium">Featured </span>{" "}
          <span className="font-medium">selections </span>{" "}
          <span className="font-medium">Reviews </span>{" "}
          <span className="font-medium">of </span>{" "}
          <span className="font-medium">librarians </span>{" "}
          <span className="font-medium">Help </span> Sitemap
        </div>
        <div className="w-max space-x-4">
          <button className="p-3 border-black border-1 bg-transparent">
            Contact us
          </button>
          <button className="p-3 bg-transparent px-8 bg-white ">
            <i class="fa fa-arrow-up"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
