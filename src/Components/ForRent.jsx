import React, { useState } from "react";
import Navbar from "./Navbar";

const ForRent = () => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");

  return (
    <div>
      <Navbar />
      <div className="bg-sky-100 h-screen">
        <div className="flex ">
          <div className="p-32">
            <img src="public/Icon-EVcars .webp" alt="" />
          </div>
          <div className="flex ">
            <div className="flex flex-col bg-sky-50 p-24 rounded-xl">
              <h2 className="text-[#16499C] text-xl mb-3 font-bold">
                เพิ่มเพื่อนร่วมทางกับเรา
              </h2>
              <label htmlFor="input-brand">จุดรับรถ:</label>
              <input
                id="ิinput-brand"
                type="text"
                value={brand}
                placeholder="Benz"
                className="border-2 p-1 rounded-lg"
              />
              <label htmlFor="input-brand">ยี่ห้อรถ:</label>
              <input
                id="ิinput-brand"
                type="text"
                value={brand}
                placeholder="Benz"
                className="border-2 p-1 rounded-lg"
              />
              <label htmlFor="">นั่งได้</label>
              <input
                type="text"
                value={model}
                placeholder="1270B"
                className="border-2 p-1 rounded-lg"
              />
              <label htmlFor="">ระบบ:</label>
              <input
                type="text"
                value={model}
                placeholder="กท 1111"
                className="border-2 p-1 rounded-lg"
              />
              <label htmlFor="">หมายเหตุ:</label>
              <input
                type="text"
                value={model}
                placeholder="รถใหม่ อายุการใช้งานน้อย"
                className="border-2 p-1 rounded-lg"
              />
              <label htmlFor="">ที่อยู่:</label>
              <input
                type="text"
                value={model}
                placeholder="50 กิโล"
                className="border-2 p-1 rounded-lg"
              />
              <div className="m-auto mt-5">
                <button className="p-2  bg-sky-400 text-white rounded-lg  ">
                  Add Car
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForRent;
