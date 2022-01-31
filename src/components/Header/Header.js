import React from "react";
import { Button } from "antd";
import { Input, Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import Nav from "./Nav";
import { NavLink } from "react-router-dom";
const { Search } = Input;
export default function HeaderTemplate() {
  return (
    <div className="w-full ">
      <div className="w-full   bg-gray-300">
        <div className="container py-3 flex justify-between">
          <span className="font-medium text-2xl">Logo</span>
          <div className="">
            <button className="bg-red-500 px-2 py-1  text-white p rounded font-medium ">
              <NavLink to="/login" className="text-white">
                {" "}
                Sign in
              </NavLink>
            </button>
            <button className="px-2 py-1  text-black p rounded font-medium ">
              <NavLink to="/register" className="text-white">
                Sign up
              </NavLink>
            </button>
          </div>
        </div>
      </div>
      <div className="py-10  px-20 w-full flex justify-between container">
        <img
          src="https://meki-production.s3.amazonaws.com/gren/communautefrancaisedebelgique/logo/54c858196d312e05319e0400-logo-2x.png"
          alt=""
          className="w-96"
        />
        <Search
          placeholder="Title, description, author"
          size="large"
          allowClear
          //   onSearch={onSearch}
          style={{ width: 304 }}
        />
      </div>
      <Nav />
    </div>
  );
}
