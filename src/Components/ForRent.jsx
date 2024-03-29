import React, { useState } from "react";
import Navbar from "./Navbar";
import InputHelperText from "./InputHelperText";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import EVcar from "../../public/Icon-EVcars .webp";

const ForRent = () => {
  // useStae
  const [station, setStation] = useState("");
  const [name, setName] = useState("");
  const [model, setModel] = useState("");
  const [licensePlate, setLicensePlate] = useState("");
  const [remark, setRemark] = useState("");
  const [address, setAddress] = useState("");

  // stateErro
  const [stationError, setStationError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [modelError, setModelError] = useState(false);
  const [licensePlateError, setLicensePlateError] = useState(false);
  const [remarkError, setRemarkError] = useState(false);
  const [addressError, setAddressError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setStationError(station.trim() === "");
    setNameError(name.trim() === "");
    setModelError(model.trim() === "");
    setLicensePlateError(licensePlate.trim() === "");
    setRemarkError(remark.trim() === "");
    setAddressError(address.trim() === "");
    if (
      !(
        station.trim() === "" ||
        name.trim() === "" ||
        model.trim() === "" ||
        licensePlate.trim() === "" ||
        remark.trim() === "" ||
        address.trim() === ""
      )
    ) {
      const newCar = {
        station,
        name,
        model,
        licensePlate,
        remark,
        address,
      };
      axios
        .post("http://localhost:3000/cars", newCar)
        .then((res) => {
          console.log(res);
          Swal.fire({
            text: "Successfully created new car!",
            icon: "success",
            customClass: {
              icon: "no-border",
            },
            confirmButtonColor: "#06cc4b",
            confirmButtonText: "OK",
          });
          navigate("/allcar");
        })
        .catch((err) => {
          const response = err.response.data;
          if (response.error.message === "Licenplate exist") {
            alert("this car has been existed. You can booking this car.");
          }
        });
    }
  };

  return (
    <div>
      <Navbar />
      <div className="bg-sky-100 h-screen">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col h-dvh md:flex-none"
        >
          <div className="block md:flex bg-white mt-20 rounded-3xl m-20 shadow-xl">
            <div className="m-auto p-5 w-2/3 md:w-full flex  justify-center items-center">
              <img src={EVcar} alt="car" />
            </div>
            <div className="flex w-full">
              <div className="flex flex-col bg-sky-50 w-full  md:mr-0 m-auto p-10 rounded-b-3xl md:rounded-3xl">
                <h2 className="text-[#16499C] text-center text-xl mb-3 font-bold">
                  เพิ่มเพื่อนร่วมทางกับเรา
                </h2>
                <label htmlFor="station">จุดรับรถ:</label>
                <input
                id="station"
                  type="text"
                  value={station}
                  placeholder="Siam Paragon"
                  className="border-2 p-1 rounded-lg"
                  onChange={(e) => {
                    setStation(e.target.value);
                  }}
                />
                <InputHelperText
                  text="กรุณากรอกจุดรับรถ"
                  hidden={!stationError}
                />

                <label htmlFor="brand">ยี่ห้อรถยนต์:</label>
                <input
                  id="ิbrand"
                  type="text"
                  value={name}
                  placeholder="Benz"
                  className="border-2 p-1 rounded-lg"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <InputHelperText
                  text="กรุณากรอกยี่ห้อรถยนต์"
                  hidden={!nameError}
                />

                <label htmlFor="model">รุ่นรถ:</label>
                <input
                id="model"
                  type="text"
                  value={model}
                  placeholder="1270B"
                  className="border-2 p-1 rounded-lg"
                  onChange={(e) => {
                    setModel(e.target.value);
                  }}
                />
                <InputHelperText
                  text="กรุณากรอกจุดรับรถ"
                  hidden={!modelError}
                />

                <label htmlFor="licenseplate">ทะเบียนรถ:</label>
                <input
                id="licenseplate"
                  type="text"
                  value={licensePlate}
                  placeholder="กท 1111"
                  className="border-2 p-1 rounded-lg"
                  onChange={(e) => {
                    setLicensePlate(e.target.value);
                  }}
                />
                <InputHelperText
                  text="กรุณากรอกทะเบียนรถยนต์"
                  hidden={!licensePlateError}
                />

                <label htmlFor="remark">หมายเหตุ:</label>
                <input
                id="remark"
                  type="text"
                  value={remark}
                  placeholder="รถใหม่ อายุการใช้งานน้อย"
                  className="border-2 p-1 rounded-lg"
                  onChange={(e) => {
                    setRemark(e.target.value);
                  }}
                />
                <InputHelperText
                  text="กรุณากรอกหมายเหตุ"
                  hidden={!remarkError}
                />

                <label htmlFor="address">ที่อยู่:</label>
                <input
                id="address"
                  type="text"
                  value={address}
                  placeholder="ถนนรัชดาภิเษก ดินแดง"
                  className="border-2 p-1 rounded-lg"
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
                <InputHelperText
                  text="กรุณากรอกที่อยู่"
                  hidden={!addressError}
                />

                <div className="m-auto mt-5">
                  <button className="p-2  bg-sky-400 hover:bg-sky-500 text-white rounded-lg  ">
                    Add Car
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForRent;
