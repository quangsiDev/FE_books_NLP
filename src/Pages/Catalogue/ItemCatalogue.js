import React, { useState } from "react";
import { useEffect } from "react";

export default function ItemCatalogue() {
  let [rand, setRand] = useState(0);
  useEffect(() => {
    var rand = Math.floor(Math.random() * 100) + 1;
    setRand(rand);
  }, []);
  return (
    <div className="flex space-x-3 py-7 border-b-1 border-gray-400 ">
      <img
        src={`https://picsum.photos/id/${rand}/200/250`}
        alt=""
        style={{ minHeight: 250 }}
      />

      <div>
        <p className="font-medium text-xl">Lorem ipsum dolor sit amet.</p>
        <p className="text-base text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis nam
          fuga magni. Officiis odio, magnam distinctio nam ea blanditiis neque
          error aliquam, exercitationem aliquid sit illo nostrum provident?
          Nostrum, consequuntur!
        </p>
      </div>
      <div className="w-56 flex-xl-shrink-0 p-3 space-y-3 border-1 border-gray-500 h-max-content">
        <p className="font-medium text-xl">EPUB</p>
        <p className="text-base text-gray-500">{rand + 500} KB</p>
        <button className="bg-red-500 px-6 py-4  text-white p rounded font-medium ">
          Download
        </button>
      </div>
    </div>
  );
}
