import React from "react";
import Image from "next/image";

const Card = ({ price, brand, model, year }) => {
  return (
    <div className="flex justify-center relative cursor-pointer">
      <div className="rounded-lg shadow-lg bg-white max-w-[300px]">
        <Image
          className="rounded-t-lg hover:opacity-95"
          src="https://www.shopingcar.es/components/com_vehiclemanager/photos/822866AB-DD7B-B9A0-D643-FA5ACD7A6E4C_AUDI%20Q2%20PLATA%20(6)_800_800.JPG"
          height={200}
          width={300}
          alt="logo"
        />
        <div className="absolute right-auto left-auto top-2 rounded-r-lg text-white bg-[#00378a] p-1 font-semibold">
          {year}
        </div>
        <div className="p-4">
          <div className="flex justify-between items-end">
            <div className="text-gray-900 text-lg font-medium mb-2 w-[70%] text-start">
              {`${brand} ${model}`}
            </div>
            <div className="text-[#00378a] text-lg font-bold mb-2 w-[30%] text-end">
              {`${price}€`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
