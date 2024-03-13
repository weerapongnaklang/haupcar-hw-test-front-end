import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import CarCard from "./CarCard";

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
        {cars.map((car) => (
          <CarCard car={car} onDelete={showCar} />
        ))}
      </div>
    </div>
  );
};

export default AllCar;
