import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import EVcar from "../../public/EV-Carsharing.webp";

const CarCard = ({ car, onDelete }) => {
  const { _id, station, name, model, licensePlate, remark, address } = car;

  const deleteCar = async () => {
    try {
      await axios.delete(`http://localhost:3000/cars/${_id}`);
    } catch (error) {
      console.error(error);
    }
  };

  // sweetalert
  const showDeleteSwal = async() => {
    Swal.fire({
      text: "Do you want to delete?",
      icon: "warning",
      showCancelButton: true,
      customClass: {
        icon: "no-border",
      },
      confirmButtonColor: "#e8201a",
      confirmButtonText: "OK",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteCar();
        onDelete();
        Swal.fire({
          title: "Deleted!",
          text: "Your activity has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <div className="rounded-xl  w-2/3 m-auto my-5  bg-white shadow-lg ">
      <div className="ml-5">
        <p className="pt-5 font-bold text-lg">จุดรับรถ: {station}</p>
      </div>
      <div className="md:flex">
        <div className="md:w-full p-5">
          <img src={EVcar} alt="Carsharing" className="w-full rounded-xl" />
        </div>
        <div className="flex flex-col w-full">
          <div className="m-5 w-full h-full text-md">
            <h4>
              <span className="font-bold">ยี่ห้อรถยนต์:</span> {name}
            </h4>
            <p>
              <span className="font-bold">รุ่นรถ:</span> {model}
            </p>
            <p>
              <span className="font-bold">ทะเบียนรถ:</span> {licensePlate}
            </p>
            <p>
              <span className="font-bold">หมายเหตุ:</span> {remark}
            </p>
            <p>
              <span className="font-bold">ที่อยู่:</span> {address}
            </p>
          </div>
          <div className="flex w-2/3 p-3 m-auto mr-4  md:mb-2 md:w-full gap-5 ">
            <Link
              to={`/edit/${_id}`}
              className="text-center  rounded-xl shadow-xl bg-green-700 text-white p-3 w-full"
            >
              Edit
            </Link>
            <button
              onClick={showDeleteSwal}
              className="text-center rounded-xl shadow-xl bg-red-700 text-white p-2 w-full"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CarCard;
