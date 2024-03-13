import React, { useState } from "react";
import { Link } from "react-router-dom";
import haupcar_logo from "../../public/haupcar_logo.png";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      <div className="border-b-2 border-blue-900 z-30">
        <div className=" flex  items-center m-5 ">
          <div className="flex flex-1">
            <Link to="/">
              <img src={haupcar_logo} alt="haupcar" className="w-2/3" />
            </Link>
          </div>
          <div className="hidden md:flex flex-1 justify-between font-bold text-blue-900  ">
            <Link to="/">
              <a className="hover:text-sky-800">HOME</a>
            </Link>
            <Link to="/allcar">
              <a className="hover:text-sky-800">MANAGE CAR</a>
            </Link>
            <Link to="/for-rent">
              <a className="hover:text-sky-800 mr-5">ADD NEW CAR</a>
            </Link>
          </div>
          <div>
            <i
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              class="fa-solid fa-bars text-2xl mr-5 md:hidden cursor-pointer"
            ></i>
          </div>
        </div>
      </div>
      {showMobileMenu && (
        <div className="md:hidden border-b-2 border-blue-900 z-30">
          <div className="flex  items-center">
            <div className="flex flex-col md:hidden font-bold text-blue-900 w-full ">
              <Link to="/" className="text-center p-2 hover:bg-sky-50">
                <a className="">HOME</a>
              </Link>
              <Link to="/allcar" className="text-center p-2  hover:bg-sky-50">
                <a className="">MANAGE CAR</a>
              </Link>
              <Link to="/for-rent" className="text-center p-2 hover:bg-sky-50">
                <a className="">ADD NEW CAR</a>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
