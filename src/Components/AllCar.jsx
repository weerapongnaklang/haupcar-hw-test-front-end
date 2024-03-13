import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import CarCard from "./CarCard";
import { Link } from "react-router-dom";

const AllCar = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    showCar();
  }, []);

  const showCar = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/cars`);
      if (response.status === 200) {
        setCars(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="bg-slate-50 h-screen pt-5">
        {cars.length ? (
          cars.map((car) => <CarCard car={car} onDelete={showCar} />)
        ) : (
          <div className="text-center text-gray-700 flex flex-col m">
            <p className="p-5">ขณะนี้ยังไม่มีรถให้บริการ</p>
            <Link to="/for-rent">
              <button className=" flex m-auto p-2 rounded-lg  shadow-md bg-pink-500 text-white hover:bg-pink-600">
                Add New Car
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllCar;
