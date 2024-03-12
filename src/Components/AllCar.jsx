import React from "react";
import Navbar from "./Navbar";

const AllCar = () => {
  return (
    <div>
      <Navbar />
      <div className="border-2 rounded-md m-5">
        <div className="ml-5">
          <h3>จุดรับรถ</h3>
        </div>
        <div className="flex">
          <div className="w-2/4 m-5">
            <img src="public/EV Carsharing.webp" alt="" className="w-full rounded-xl" />
          </div>
          <div className="m-5">
            <h4>ชื่อ</h4>
            <p>นั่งได้</p>
            <p>ระบบ</p>
            <p>หมายเหตุ</p>
            <p>ที่อยู่</p>
            <div className="flex m-5 gap-5 ">
              <button className="rounded-xl shadow-xl bg-green-700 text-white p-4 w-full">
                Edit
              </button>
              <button className="rounded-xl shadow-xl bg-red-700 text-white p-2 w-full">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCar;
