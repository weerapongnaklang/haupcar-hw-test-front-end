import React from "react";
import IconEarning from '../../public/Icon-earning.png'
import IconFlexible from '../../public/Icon-flexible.png'
import IconSecure from '../../public/icon-secure.png'

const Partner = () => {
  return (
    <div className="py-20 px-5 md:p-20 w-4/5 m-auto">
      <div>
        <p className="text-center text-4xl font-semibold text-[#16499C] mb-16">
          Partner Benefits
        </p>
      </div>
      <div className="flex text-gray-700 ">
        <div className="text-center">
          <img src={IconEarning} alt="earning" className="w-3/5 m-auto" />
          <p className="text-[#16499C] text-xl mt-2 mb-2 ">Income</p>
          <p>
            สร้างรายได้เวลาไม่ได้ใช้รถ <br /> เช็ครายได้ทันที
            มีอิสระในการทำเงิน <br /> ในช่วงเวลาที่ว่าง
          </p>
        </div>
        <div className="text-center ">
          <img src={IconFlexible} alt="callcenter" className="w-3/5 m-auto" />
          <p className="text-[#16499C] text-xl mt-2 mb-2">Flexible</p>
          <p>
            ฮ้อปช่วยดูแลการจอง <br /> ของลูกค้า 24 ชม. สำหรับพาร์ทเนอร์ <br />ทุกคน ทุกพื้นที่
          </p>
        </div>
        <div className="text-center">
          <img src={IconSecure} alt="securechip" className="w-3/5 m-auto" />
          <p className="text-[#16499C] text-xl mt-2 mb-2">Secure</p>
          <p>ปลอดภัย <br /> ด้วยระบบปลดล็อครถอัจฉริยะ <br /> HAUP IoT Device</p>
        </div>
      </div>
    </div>
  );
};

export default Partner;
