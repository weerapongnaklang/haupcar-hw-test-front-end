import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import BelowHome from "./BelowHome";
import Partner from "./Partner";

const Home = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="p-20">
        <h2 className="font-bold text-[#16499C] text-center mb-5 text-4xl">
          HAUPCAR
        </h2>
        <div className="text-center p-10 ">
          <p>
            เช่ารถ Hatchback, Sedan, Executive car, SUV, Pick-up truck, Van,
            E-Scooter, E-Bike, EV
            และรถอีกหลากหลายรุ่นให้คุณเลือกเพื่อตอบสนองทุกไลฟ์สไตล์ของคุณ
          </p>
          <p>
            สามารถเช่าและรับรถ 24 ชั่วโมงกว่า 1,000 จุดทั่วประเทศไทย
            สามารถใช้แอปจองและปลดล็อครถได้ทันที 24 ชั่วโมง
          </p>
        </div>
        <div className="flex justify-center gap-5">
          <Link to="/allcar">
            <button className=" flex m-auto p-2 rounded-lg  shadow-md bg-sky-500 text-white hover:bg-sky-600">
              Manage Car
            </button>
          </Link>
          <Link to="/for-rent">
            <button className=" flex m-auto p-2 rounded-lg  shadow-md bg-pink-500 text-white hover:bg-pink-600">
              Add New Car
            </button>
          </Link>
        </div>
      </div>
      <BelowHome />
      <Partner />
    </div>
  );
};

export default Home;
