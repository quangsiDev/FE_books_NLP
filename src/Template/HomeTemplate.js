import React, { useState, useEffect } from "react";

import { Route } from "react-router-dom";
import { Layout } from "antd";
import SiderHomeTemplate from "../components/Sider/Sider";
import HeaderTemplate from "../components/Header/Header";

export default function HomeTemplate(props) {
  let { Component } = props;
  const { Header } = Layout;
  return (
    <Route
      {...props}
      render={(propsComponent) => {
        return (
          <div
            style={
              {
                // minHeight: "100vh",
              }
            }
            className=" bg-transparent h-full w-full  "
          >
            {/* <SiderHomeTemplate /> */}
            <HeaderTemplate />

            <div className="site-layout-background bg-transparent w-full  h-full   m-0 flex flex-col ">
              <Component {...propsComponent}></Component>
            </div>
          </div>
        );
      }}
    />
  );
}
