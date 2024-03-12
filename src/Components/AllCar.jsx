import React, { useState } from "react";
import Navbar from "./Navbar";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const AllCar = () => {

  // sweetalert
  const showDeleteSwal = () => {
    Swal.fire({
      text: "Do you want to delete?",
      customClass: {
        icon: "no-border",
      },
      confirmButtonColor: "#e8201a",
      confirmButtonText: "OK",
    });
  };

  return (
    <div className="">
      <Navbar />
      <div className="bg-slate-50 h-screen pt-5">
        <div className="rounded-md  w-3/5 m-auto  bg-white">
          <div className="ml-5">
            <p className="pt-2 font-bold">จุดรับรถ</p>
          </div>
          <div className="flex">
            <div className="w-2/4 m-5 ">
              <img
                src="public/EV Carsharing.webp"
                alt="Carsharing"
                className="w-full rounded-xl"
              />
            </div>
            <div className="m-5">
              <h4>ชื่อ</h4>
              <p>รุ่น</p>
              <p>ทะเบียนรถ</p>
              <p>หมายเหตุ</p>
              <p>ที่อยู่</p>
              <div className="flex mt-5 gap-5 ">
                <Link
                  to="/edit"
                  className="rounded-xl shadow-xl bg-green-700 text-white p-4 w-full"
                >
                  Edit
                </Link>
                <button
                  onClick={showDeleteSwal}
                  className="rounded-xl shadow-xl bg-red-700 text-white p-2 w-full"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCar;
