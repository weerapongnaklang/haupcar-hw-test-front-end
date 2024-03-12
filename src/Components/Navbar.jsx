import React from "react";
import { Link } from "react-router-dom";
import haupcar_logo from "../../public/haupcar_logo.png";

const Navbar = () => {
  return (
    <div className="border-b-2">
      <div className="flex justify-between items-center m-5 font-bold text-blue-900  ">
        <div className="w-40">
          <Link to="/">
            <img src={haupcar_logo} alt="haupcar" className="w-full" />
          </Link>
        </div>
        <Link to="/">
          <a className="hover:text-sky-800">HOME</a>
        </Link>
        <Link to="/about">
          <a className="hover:text-sky-800">ABOUT</a>
        </Link>
        <Link to="/booking">
          <a className="hover:text-sky-800">ALL CAR</a>
        </Link>
        <Link to="/for-rent">
          <a className="hover:text-sky-800 mr-5">FOR RENT</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
