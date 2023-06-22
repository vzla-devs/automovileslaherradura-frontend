import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../assets/logo.jpg"
import LogoFooter from "../../assets/logo-footer.png";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between h-[100vh]">
      <header className="flex fixed z-10 items-center justify-between w-full h-[80px] p-2 bg-white border border-b-1 shadow-lg border-b-[#00378a]">
        <div className="flex items-center gap-2">
          <Link href="/">
            <a>
            <Image
            src={Logo}
            alt="logo"
            layout="intrinsic"
            height={70}
            width={70}
          />
            </a>
          </Link>
          <p className="font-bold text-md md:text-lg text-[#00378a]">AUTOMOVILES LA HERRADURA</p>
        </div>
        <div className="hidden md:visible md:flex gap-2">
          <address className="bg-[#00378a] rounded-lg text-white p-2 flex">
            <a href="tel:+928048814" className="flex gap-2 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              928 048 814
            </a>
          </address>
          <address className="bg-[#00378a] rounded-lg text-white p-2 flex">
            <a href="tel:+603552656" className="flex gap-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>
              603 552 656
            </a>
          </address>
        </div>
        <div className="md:hidden ">
          <a href="tel:+603552656" className="bg-[#00378a] text-white rounded-full p-1 flex ml-3 gap-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>
            </a>
        </div>
      </header>
      <div className="p-4 flex-1 w-full mt-[80px]">
      {children}
      </div>
      <footer className="w-full h-[150px] p-6 bg-[#00378a] flex justify-center">
        <div className="flex flex-col justify-center items-center">
          <div>
            <Image
              src={LogoFooter}
              alt="footer-logo"
              layout="intrinsic"
              height={70}
              width={70}
            />
          </div>
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
        <div className="flex flex-col items-center justify-center w-2/4 h-full max-md:w-full max-md:mt-4">
          
        </div>
      </footer>
    </div>
  );
};

export default Layout;
