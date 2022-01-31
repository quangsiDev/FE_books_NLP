import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div className="container">
      <div className="border-b-1 border-black text-black pb-2">
        <NavLink
          activeClassName="text-white bg-red-600 mb-0 "
          className="p-3 px-5 text-xl uppercase border-r-1 border-black text-black "
          exact
          to="/"
        >
          {" "}
          Home
        </NavLink>

        <NavLink
          activeClassName="text-white bg-red-600 mb-0 "
          className="p-3 px-5 text-xl uppercase border-r-1 border-black text-black "
          exact
          to="/catalogue"
        >
          {" "}
          Catelogue
        </NavLink>
        <NavLink
          activeClassName="text-white bg-red-600 mb-0 "
          className="p-3 px-5 text-xl uppercase border-r-1 border-black text-black "
          exact
          to="/feature"
        >
          {" "}
          FEATURED SELECTIONS
        </NavLink>
        <NavLink
          activeClassName="text-white bg-red-600 mb-0 "
          className="p-3 px-5 text-xl uppercase border-r-1 border-black text-black "
          exact
          to="/reviews"
        >
          REVIEWS OF LIBRARIANS
        </NavLink>
        <NavLink
          activeClassName="text-white bg-red-600 mb-0 "
          className="p-3 px-5 text-xl uppercase border-r-1  text-black "
          exact
          to="/help"
        >
          HELP
        </NavLink>
      </div>
    </div>
  );
}
