import React from "react";
import ContentCatalogue from "./ContentCatalogue";
import Sider from "./Sider";

export default function Catalogue() {
  return (
    <div className="flex container mx-auto py-10 w-full space-x-5">
      <Sider />
      <ContentCatalogue />
    </div>
  );
}
