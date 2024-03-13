import React from "react";

const BelowHome = () => {
  return (
    <div className="bg-sky-50">
      <div className="flex items-center m-auto p-10">
        <div>
          <h2 className="text-center text-5xl font-bold text-[#16499C] mb-5">
            HAUP
          </h2>
          <p className="text-center text-2xl font-bold text-[#16499C]">
            คืออะไร
          </p>
          <div className="text-center ml-10 mr-10 mt-3 text-gray-600 w-50">
            <p>
              ผู้ให้บริการด้านการเดินทางครบวงจร <br />
              ที่พร้อมอำนวยความสะดวกให้พาร์ทเนอร์ <br />
              ในการบริหารจัดการปล่อยเช่ารถของคุณให้เป็นเรื่องง่าย ครบ จบ
              ในแอปเดียว <br /> บริการคัดกรองลูกค้าเช่ารถ และ
              ให้เช่าจุดจอดรถทั่วกรุงเทพฯ <br />
              เพื่อความสะดวกในการ รับ-ส่งรถกับลูกค้า
            </p>
          </div>
        </div>
        <div className="flex-col space-y-2 text-gray-800 pl-10 pr-10">
          <div className="flex items-center">
            <p className=" font-bold text-2xl mr-5 text-[#16499C]">
              ปล่อยเช่ารถ
            </p>
            <img
              src="public/Icon-Carrental-New.webp"
              className="w-2/5"
              alt="newcar"
            />
          </div>
          <div className="flex items-center">
            <img src="public/Icon-car.webp" alt="car" className="w-2/5" />
            <p className="ml-5">รถเช่ารายชั่วโมง</p>
          </div>
          <div className="flex items-center">
            <p className="mr-5">สกูตเตอร์ไฟฟ้า</p>
            <img src="public/Icon-EVBikes .webp" alt="scooter" />
          </div>
          <div className="flex items-center">
            <img src="public/Icon-EVcars .webp" alt="evcar" className="w-2/4" />
            <p className="ml-5">สถานีชาร์จ</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BelowHome;
