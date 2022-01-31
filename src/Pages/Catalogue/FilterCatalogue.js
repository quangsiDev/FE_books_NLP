import React from "react";
import { Select } from "antd";

const { Option } = Select;
function handleChange(value) {
  console.log(`selected ${value}`);
}
export default function FilterCatalogue() {
  return (
    <div className="space-x-3 flex py-3 border-b-1 border-gray-400 w-full">
      <div className="space-x-2">
        {" "}
        <span>Sort by</span>
        <Select
          defaultValue="lucy"
          style={{ width: 150 }}
          onChange={handleChange}
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Publication Date</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
      </div>

      <div className="space-x-2">
        {" "}
        <span>Filter by</span>
        <Select
          defaultValue="lucy"
          style={{ width: 150 }}
          onChange={handleChange}
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">0 selected filter</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
      </div>
    </div>
  );
}
