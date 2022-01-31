import React from "react";
import FilterCatalogue from "./FilterCatalogue";
import ItemCatalogue from "./ItemCatalogue";

export default function ContentCatalogue() {
  return (
    <div className="w-full ">
      <FilterCatalogue />
      <div className="">
        <ItemCatalogue />
        <ItemCatalogue />
        <ItemCatalogue />
        <ItemCatalogue />
      </div>
    </div>
  );
}
