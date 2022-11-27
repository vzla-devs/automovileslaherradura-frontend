import Image from "next/image";
import React from "react";
import Logo from "../../assets/logo.jpg"

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between h-[100vh]">
      <header className="flex items-center justify-between w-full h-[80px] p-6 bg-white border border-b-1 shadow-lg border-b-[#00378a]">
        <div className="flex items-center gap-2">
          <Image
            src={Logo}
            alt="logo"
            height={70}
            width={70}
          />
          <p className="hidden md:block font-bold text-[#00378a]"> AUTOMOVILES LA HERRADURA </p>
        </div>
        <div className="bg-[#00378a] rounded-lg text-white p-1">
          <div className="flex gap-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            928 048 814
          </div>
        </div>
      </header>
      <div className="p-4 flex-1">{children}</div>
      <footer className="w-full h-[150px] p-6 bg-[#00378a] flex justify-center">
        <div className="flex flex-col justify-center items-center">
          <div className="text-white font-semibold">
            Automóviles la herradura
          </div>
          <div className="text-white text-sm gap-2 font-semibold flex">
            <p className="underline">Dirección: </p>C. Alfonso XIII, 178, 35210 Telde, Las Palmas
          </div>
          <div className="text-white text-sm gap-2 font-semibold flex">
            <p className="underline">Teléfonos: </p>603 552 656 / 928 048 814
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
