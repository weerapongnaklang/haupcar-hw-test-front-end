import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Swal from "sweetalert2";
import axios from "axios";
import EVcar from "../../public/Icon-EVcars .webp";

const EditPage = () => {
  const { carId } = useParams();
  const navigate = useNavigate();

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

  useEffect(() => {
    showCar();
  }, []);

  const showCar = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/cars/${carId}`);
      if (response.status === 200) {
        console.log(response.data);
        // setCars(response.data);
        setStation(response.data.station);
        setName(response.data.name);
        setModel(response.data.model);
        setLicensePlate(response.data.licensePlate);
        setRemark(response.data.remark);
        setAddress(response.data.address);
      }
    } catch (error) {
      console.error(error);
    }
  };

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
        .put(`http://localhost:3000/cars/${carId}`, newCar)
        .then(async (res) => {
          console.log(res);
          Swal.fire({
            text: "Successfully to update car!",
            icon: "success",
            customClass: {
              icon: "no-border",
            },
            confirmButtonColor: "#06cc4b",
            confirmButtonText: "OK",
          }).then(() => {
            navigate("/allcar");
          });
        })
        .catch((err) => {
          const response = err.response.data;
          if (response.error.message === "Failed to update car") {
            alert("Sorry, try it again");
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
              <img src={EVcar} alt="EVcar" />
            </div>
            <div className="flex w-full">
              <div className="flex flex-col bg-sky-50 w-full  md:mr-0 m-auto p-10 rounded-b-3xl md:rounded-3xl">
                <h2 className="text-[#16499C] text-center text-xl mb-3 font-bold">
                  แก้ไขข้อมูล
                </h2>
                <label htmlFor="input-brand">จุดรับรถ:</label>
                <input
                  id="ิinput-brand"
                  type="text"
                  value={station}
                  placeholder="Benz"
                  className="border-2 p-1 rounded-lg"
                  onChange={(e) => {
                    setStation(e.target.value);
                  }}
                />
                <label htmlFor="input-brand">ยี่ห้อรถ:</label>
                <input
                  id="ิinput-brand"
                  type="text"
                  value={name}
                  placeholder="Benz"
                  className="border-2 p-1 rounded-lg"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <label htmlFor="">รุ่นรถ:</label>
                <input
                  type="text"
                  value={model}
                  placeholder="1270B"
                  className="border-2 p-1 rounded-lg"
                  onChange={(e) => {
                    setModel(e.target.value);
                  }}
                />
                <label htmlFor="">ทะเบียนรถ:</label>
                <input
                  type="text"
                  value={licensePlate}
                  placeholder="กท 1111"
                  className="border-2 p-1 rounded-lg"
                  onChange={(e) => {
                    setLicensePlate(e.target.value);
                  }}
                />
                <label htmlFor="">หมายเหตุ:</label>
                <input
                  type="text"
                  value={remark}
                  placeholder="รถใหม่ อายุการใช้งานน้อย"
                  className="border-2 p-1 rounded-lg"
                  onChange={(e) => {
                    setRemark(e.target.value);
                  }}
                />
                <label htmlFor="">ที่อยู่:</label>
                <input
                  type="text"
                  value={address}
                  placeholder="50 กิโล"
                  className="border-2 p-1 rounded-lg"
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
                <div className="m-auto mt-5">
                  <button className="p-2  bg-green-500 hover:bg-green-700 text-white rounded-lg  ">
                    EDIT
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

export default EditPage;
