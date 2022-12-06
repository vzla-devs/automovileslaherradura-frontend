import React from "react";
import Image from "next/image";

const Card = ({ price, brand, model, year, image }) => {
  return (
    <div className="flex justify-center relative cursor-pointer">
      <div className="rounded-lg shadow-lg bg-white w-full">
        <div style={{ position: 'relative', width: '100%', height: '210px' }}>
          <Image
            className="rounded-t-lg hover:opacity-95"
            src={image}
            objectFit='cover'
            layout="fill"
            alt="logo"
          />
        </div>
        <div className="absolute right-auto left-auto top-2 rounded-r-lg text-white bg-[#00378a] p-1 font-semibold">
          {year}
        </div>
        <div className="p-4">
          <div className="flex flex-col">
            <div className="text-gray-700 text-lg font-medium mb-2 text-start">
              {`${brand.toUpperCase()} ${model}`}
            </div>
            <div className="text-[#00378a] text-lg font-bold mb-2 text-end">
              { new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(price) }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
