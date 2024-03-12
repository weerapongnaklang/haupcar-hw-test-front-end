import React, { useState } from "react";
import Navbar from "./Navbar";
import Swal from "sweetalert2";

const EditPage = () => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");

   const showEditSwal = () => {
     Swal.fire({
       text: "Finished",
       customClass: {
         icon: "no-border",
       },
       confirmButtonColor: "#06cc4b",
       confirmButtonText: "OK",
     });
   };

  return (
    <div>
      <Navbar />
      <div className="bg-sky-100 h-screen">
        <div className="flex ">
          <div className="w-2/3 flex justify-center items-center">
            <img src="public/Icon-EVcars .webp" alt="" className="m-auto w-2/4" />
          </div>
          <div className="flex w-full">
            <div className="flex flex-col bg-sky-50 w-3/5 m-auto p-8 rounded-xl">
              <h2 className="text-[#16499C] text-center text-xl mb-3 font-bold">
                แก้ไขข้อมูล
              </h2>
              <label htmlFor="input-brand">จุดรับรถ:</label>
              <input
                id="ิinput-brand"
                type="text"
                value={brand}
                placeholder="Benz"
                className="border-2 p-1 rounded-lg "
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
                <button onClick={showEditSwal} className="p-2  bg-green-500 hover:bg-green-700 text-white rounded-lg  ">
                  EDIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPage;
